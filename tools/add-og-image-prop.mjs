// Add `ogImage={seo.ogImage}` after `alternates={seo.alternates}` in all
// templates that have it but not the ogImage prop yet. Skips docs templates
// (no OG image generated for docs).

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const FILES = execSync(
  `find src/pages -name '[*.astro' -type f`,
  { encoding: "utf8" },
).trim().split("\n");

let patched = 0;
let skipped = 0;

for (const file of FILES) {
  // Skip docs templates (no OG generated for /docs/*).
  if (file.includes("/docs/")) {
    skipped++;
    continue;
  }
  let src = readFileSync(file, "utf8");

  // Already has ogImage? skip.
  if (src.includes("ogImage={seo.ogImage}")) {
    skipped++;
    continue;
  }
  // Needs `alternates={seo.alternates}` line as anchor.
  if (!src.includes("alternates={seo.alternates}")) {
    skipped++;
    continue;
  }

  src = src.replace(
    /alternates=\{seo\.alternates\}\n/,
    `alternates={seo.alternates}\n  ogImage={seo.ogImage}\n`,
  );

  writeFileSync(file, src, "utf8");
  patched++;
}

console.log(`Patched: ${patched}`);
console.log(`Skipped: ${skipped}`);
