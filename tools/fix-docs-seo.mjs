// One-shot fix for the 16 docs templates:
//   - Add missing `import { docSeo } from "@/lib/seo-templates";` line
//   - Wire `jsonLd={seo.jsonLd}` + `alternates={seo.alternates}` into <DocLayout>
//
// Idempotent: skips files that already have the import and the props.

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const FILES = execSync(
  `find src/pages -path '*/docs/*' -name '[*.astro' -type f`,
  { encoding: "utf8" },
).trim().split("\n");

let patched = 0;
let skipped = 0;

for (const file of FILES) {
  let src = readFileSync(file, "utf8");
  let changed = false;

  // 1. Add missing import after DocLayout import line.
  if (!src.includes('from "@/lib/seo-templates"')) {
    src = src.replace(
      /import DocLayout from "@\/layouts\/DocLayout\.astro";\n/,
      `import DocLayout from "@/layouts/DocLayout.astro";\nimport { docSeo } from "@/lib/seo-templates";\n`,
    );
    changed = true;
  }

  // 2. Wire jsonLd + alternates into <DocLayout if not already present.
  if (!src.includes("jsonLd={seo.jsonLd}")) {
    src = src.replace(
      /<DocLayout\n/,
      `<DocLayout\n  jsonLd={seo.jsonLd}\n  alternates={seo.alternates}\n`,
    );
    changed = true;
  }

  if (changed) {
    writeFileSync(file, src, "utf8");
    patched++;
    console.log(`✓ ${file}`);
  } else {
    skipped++;
  }
}

console.log(`\nPatched: ${patched}`);
console.log(`Skipped: ${skipped}`);
