// One-shot script: render `public/og/default.svg` → `public/og/default.png`
// 1200×630 PNG. Facebook/Twitter/LinkedIn OG scrapers do NOT support SVG —
// PNG is required for social previews to actually render.
//
// The SVG references `/assets/fluera_logo.png` via <image href>, which sharp
// can't resolve against the filesystem on its own. We pre-inline the logo as
// a base64 data URI before passing the SVG to sharp.
//
// Run: `node tools/render-og-default.mjs`

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const svgPath = resolve(ROOT, "public/og/default.svg");
const logoPath = resolve(ROOT, "public/assets/fluera_logo.png");
const outPath = resolve(ROOT, "public/og/default.png");

const logoBase64 = readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoBase64}`;

const svgRaw = readFileSync(svgPath, "utf8");
const svgWithInlineLogo = svgRaw.replace(
  /href="\/assets\/fluera_logo\.png"/,
  `href="${logoDataUri}"`,
);

await sharp(Buffer.from(svgWithInlineLogo))
  .resize(1200, 630)
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(outPath);

const stats = readFileSync(outPath).byteLength;
console.log(`✓ ${outPath} (${(stats / 1024).toFixed(1)} KB)`);
