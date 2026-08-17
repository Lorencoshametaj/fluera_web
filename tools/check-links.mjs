#!/usr/bin/env node
/**
 * Internal link/asset integrity gate. Run after `npm run build`.
 *
 * Crawls every built HTML file and asserts that every internal href/src
 * resolves to something the build actually emitted:
 *   - extensionless URLs must have a matching  <dist>/<path>/index.html
 *   - URLs with an extension must exist as files
 *   - extensionless internal links must carry a trailing slash (the
 *     trailing-slash-normalizer integration guarantees it; a regression here
 *     reintroduces a 301 on every internal click on GitHub Pages)
 *
 * This gate exists because the site shipped for weeks with /demo linked from
 * every page's footer (1305 pages) and seven press-kit downloads that were
 * 404s — all invisible to build, smoke tests and Lighthouse.
 *
 * Exits 0 when clean, 1 with a defect list otherwise.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");

if (!existsSync(DIST)) {
  console.error(`✗ dist/ not found at ${DIST}. Run \`npm run build\` first.`);
  process.exit(1);
}

// Astro emits the 404 page as dist/404.html (not 404/index.html), and hosting
// serves it for any missing path — so links to /404 and /<locale>/404 resolve.
const SPECIAL = new Map([["/404", "404.html"]]);

// Server-level redirects declared in astro.config.mjs land as meta-refresh stub
// pages in dist, so they resolve like any other emitted page — no allowlist.

const htmlFiles = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const full = join(d, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".html")) htmlFiles.push(full);
  }
})(DIST);

const ATTR = /(?:href|src)="(\/[^"]*)"/g;
const broken = new Map(); // url -> count
const slashless = new Map(); // url -> count

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const seen = new Set();
  for (const m of html.matchAll(ATTR)) {
    const raw = m[1];
    if (seen.has(raw)) continue;
    seen.add(raw);
    const path = raw.split("#")[0].split("?")[0];
    if (!path || path === "/" || path.startsWith("//")) continue;

    const special = SPECIAL.get(path.replace(/\/$/, ""));
    if (special) {
      if (!existsSync(join(DIST, special))) bump(broken, raw);
      continue;
    }

    const last = path.slice(path.lastIndexOf("/") + 1);
    if (last.includes(".")) {
      // Real file (asset, image, zip, xml…)
      if (!existsSync(join(DIST, path.slice(1)))) bump(broken, raw);
    } else {
      // Page link: must exist as a directory index, and must carry the slash.
      if (!existsSync(join(DIST, path.replace(/\/$/, "").slice(1), "index.html"))) bump(broken, raw);
      if (!path.endsWith("/")) bump(slashless, raw);
    }
  }
}

function bump(map, key) {
  map.set(key, (map.get(key) ?? 0) + 1);
}

console.log(`Scanned ${htmlFiles.length} HTML files.`);
let failed = false;

if (broken.size > 0) {
  failed = true;
  console.error(`\n✗ ${broken.size} internal URL(s) point at nothing the build emitted:`);
  for (const [url, n] of [...broken.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30)) {
    console.error(`   ${String(n).padStart(5)}×  ${url}`);
  }
}

if (slashless.size > 0) {
  failed = true;
  console.error(`\n✗ ${slashless.size} extensionless internal URL(s) lack the trailing slash (301 on Pages):`);
  for (const [url, n] of [...slashless.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
    console.error(`   ${String(n).padStart(5)}×  ${url}`);
  }
}

if (failed) process.exit(1);
console.log("✓ Every internal link and asset resolves; all page links carry the trailing slash.");
