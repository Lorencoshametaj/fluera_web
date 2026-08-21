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

// ── Indexing signals must agree ──────────────────────────────────────────
// Three ways to tell a crawler about a page — sitemap, robots.txt, meta
// robots — and they must not contradict. Two real defects lived here for
// months, both invisible to build and smoke:
//   · /legal/* was Disallow-ed AND carried noindex: the crawler could not
//     fetch the page, so it never saw the noindex, and indexed the bare URL
//     (GSC "Indexed, though blocked by robots.txt").
//   · the same pages sat in the sitemap, which asks for the opposite.
{
  const robotsPath = join(DIST, "robots.txt");
  const disallow = existsSync(robotsPath)
    ? readFileSync(robotsPath, "utf8")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => /^Disallow:/i.test(l))
        .map((l) => l.replace(/^Disallow:\s*/i, ""))
        .filter((p) => p && !p.includes("*"))
    : [];

  const sitemapUrls = [];
  for (const f of readdirSync(DIST)) {
    if (!/^sitemap.*\.xml$/.test(f)) continue;
    const xml = readFileSync(join(DIST, f), "utf8");
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const u = m[1].replace(/^https?:\/\/[^/]+/, "");
      if (u.endsWith(".xml")) continue; // the index pointing at its children
      sitemapUrls.push(u);
    }
  }

  const blocked = sitemapUrls.filter((u) => disallow.some((d) => u.startsWith(d)));
  const noindexed = sitemapUrls.filter((u) => {
    const f = join(DIST, u.replace(/^\//, ""), "index.html");
    return existsSync(f) && /<meta[^>]+name="robots"[^>]+noindex/i.test(readFileSync(f, "utf8"));
  });

  if (blocked.length) {
    failed = true;
    console.error(`\n✗ ${blocked.length} sitemap URL(s) are Disallow-ed in robots.txt:`);
    for (const u of blocked.slice(0, 10)) console.error(`   ${u}`);
  }
  if (noindexed.length) {
    failed = true;
    console.error(`\n✗ ${noindexed.length} sitemap URL(s) carry meta robots=noindex:`);
    for (const u of noindexed.slice(0, 10)) console.error(`   ${u}`);
  }

  // Presence assertion: an empty sitemap would pass both checks above by
  // being empty, which is exactly the silent failure this gate must catch.
  // Every URL must declare when it changed. The sitemap shipped for months
  // with 84% of its URLs carrying no <lastmod> — including every home page and
  // /pricing/ — so Google had no signal that anything had been touched. And the
  // dates must actually differ: a sitemap that claims the whole site changed
  // today is the pattern crawlers learn to discount.
  {
    const dated = [];
    for (const f of readdirSync(DIST)) {
      if (!/^sitemap.*\.xml$/.test(f)) continue;
      const xml = readFileSync(join(DIST, f), "utf8");
      for (const m of xml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
        const d = m[0].match(/<lastmod>([^<]+)</);
        dated.push(d ? d[1].slice(0, 10) : null);
      }
    }
    const missing = dated.filter((d) => d === null).length;
    const days = new Set(dated.filter(Boolean));
    if (dated.length && missing / dated.length > 0.05) {
      failed = true;
      console.error(`\n✗ ${missing} of ${dated.length} sitemap URLs declare no <lastmod> (over the 5% ceiling).`);
    } else if (days.size === 1 && dated.length > 50) {
      failed = true;
      console.error(`\n✗ every sitemap URL claims the same date (${[...days][0]}) — a "whole site changed today" signal.`);
    } else if (dated.length) {
      console.log(`Sitemap dates: ${dated.length - missing}/${dated.length} URLs, ${days.size} distinct days.`);
    }
  }

  if (sitemapUrls.length < 100) {
    failed = true;
    console.error(`\n✗ sitemap holds only ${sitemapUrls.length} URLs — expected the full site.`);
  } else if (!blocked.length && !noindexed.length) {
    console.log(`Sitemap: ${sitemapUrls.length} URLs, none blocked or noindexed.`);
  }
}

if (failed) process.exit(1);
console.log("✓ Every internal link and asset resolves; all page links carry the trailing slash.");
