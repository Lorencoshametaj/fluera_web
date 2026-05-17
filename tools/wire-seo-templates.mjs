// One-shot bulk patch: wire up `jsonLd` + `alternates` props in all 80 dynamic
// [slug].astro templates by injecting:
//   1. `import { Xseo } from "@/lib/seo-templates";` (X = blog/feature/principle/author/doc)
//   2. After `const { entity } = Astro.props;` — compute `seo` + `allEntries`
//   3. In <BaseLayout ...>, inject `jsonLd={seo.jsonLd} alternates={seo.alternates}`
//
// Idempotent: skips files that already contain the import line.
// Run: `node tools/wire-seo-templates.mjs`

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const FILES = execSync(
  `find src/pages -name "*.astro" -type f | grep '\\['`,
  { encoding: "utf8" },
).trim().split("\n");

const TYPE_CONFIG = {
  blog: {
    collection: "blog",
    varName: "post",
    seoFn: "blogSeo",
    allVar: "allPosts",
    extraFilter: "({ data }) => !data.draft",
  },
  features: {
    collection: "features",
    varName: "feature",
    seoFn: "featureSeo",
    allVar: "allFeatures",
    extraFilter: null,
  },
  "science/principles": {
    collection: "principles",
    varName: "principle",
    seoFn: "principleSeo",
    allVar: "allPrinciples",
    extraFilter: null,
  },
  "science/authors": {
    collection: "authors",
    varName: "author",
    seoFn: "authorSeo",
    allVar: "allAuthors",
    extraFilter: null,
  },
  docs: {
    collection: "docs",
    varName: "doc",
    seoFn: "docSeo",
    allVar: "allDocs",
    extraFilter: null,
  },
};

function detectType(filePath) {
  // src/pages/<locale>/<type>/[slug].astro OR src/pages/<type>/[slug].astro
  const m = filePath.match(/src\/pages\/(?:[a-z-]+\/)?(blog|features|science\/principles|science\/authors|docs)\/\[slug\]\.astro$/);
  return m ? m[1] : null;
}

let patched = 0;
let skipped = 0;
let errors = [];

for (const file of FILES) {
  const type = detectType(file);
  if (!type) {
    errors.push(`Unknown type: ${file}`);
    continue;
  }
  const cfg = TYPE_CONFIG[type];

  let src = readFileSync(file, "utf8");

  // Idempotent guard
  if (src.includes('from "@/lib/seo-templates"')) {
    skipped++;
    continue;
  }

  // 1. Inject import after the BaseLayout OR DocLayout import line.
  if (/import BaseLayout from "@\/layouts\/BaseLayout\.astro";\n/.test(src)) {
    src = src.replace(
      /import BaseLayout from "@\/layouts\/BaseLayout\.astro";\n/,
      `import BaseLayout from "@/layouts/BaseLayout.astro";\nimport { ${cfg.seoFn} } from "@/lib/seo-templates";\n`,
    );
  } else if (/import DocLayout from "@\/layouts\/DocLayout\.astro";\n/.test(src)) {
    src = src.replace(
      /import DocLayout from "@\/layouts\/DocLayout\.astro";\n/,
      `import DocLayout from "@/layouts/DocLayout.astro";\nimport { ${cfg.seoFn} } from "@/lib/seo-templates";\n`,
    );
  } else {
    errors.push(`No matching layout import: ${file}`);
    continue;
  }

  // 2. Inject SEO computation after `const { X } = Astro.props;`.
  //    We piggyback on the existing getCollection import — already present.
  const filter = cfg.extraFilter ?? "() => true";
  const seoBlock = `
// SEO: JSON-LD schema + hreflang alternates (multi-locale aware).
const ${cfg.allVar} = await getCollection("${cfg.collection}", ${filter});
const seo = ${cfg.seoFn}({ ${cfg.varName}, ${cfg.allVar}, pathname: Astro.url.pathname });`;

  const propsLineRegex = new RegExp(`(const \\{ ${cfg.varName} \\} = Astro\\.props;)`);
  if (!propsLineRegex.test(src)) {
    errors.push(`No matching props line: ${file}`);
    continue;
  }
  src = src.replace(propsLineRegex, `$1${seoBlock}`);

  // 3. Add jsonLd + alternates props to <BaseLayout ...> or <DocLayout ...>.
  if (/<BaseLayout\n/.test(src)) {
    src = src.replace(
      /<BaseLayout\n/,
      `<BaseLayout\n  jsonLd={seo.jsonLd}\n  alternates={seo.alternates}\n`,
    );
  } else if (/<DocLayout\n/.test(src)) {
    src = src.replace(
      /<DocLayout\n/,
      `<DocLayout\n  jsonLd={seo.jsonLd}\n  alternates={seo.alternates}\n`,
    );
  }

  writeFileSync(file, src, "utf8");
  patched++;
}

console.log(`✓ Patched: ${patched}`);
console.log(`⊘ Skipped (already wired): ${skipped}`);
if (errors.length > 0) {
  console.log(`✗ Errors: ${errors.length}`);
  errors.forEach((e) => console.log(`  - ${e}`));
}
