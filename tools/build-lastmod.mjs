#!/usr/bin/env node
/**
 * Emit .lastmod.json — real per-page modification dates for the sitemap.
 *
 * Why this exists: 84% of the sitemap (1057 of 1258 URLs) shipped with NO
 * <lastmod>, including the home pages, /pricing/ and /download/. Astro's
 * lastmod map only reads content-collection frontmatter, and a .astro page has
 * none, so Google had no signal that those pages had changed at all.
 *
 * Why it cannot be computed at build time: the live site is built inside the
 * PUBLISH repo (fluera_web), whose history is a series of "sync" commits — one
 * per deploy, touching everything. Asking git there returns the same date for
 * every file, which is the dishonest "everything changed today" sitemap Google
 * learns to ignore. So the dates are read from the monorepo's real history and
 * carried across by tools/deploy-landing-local.sh.
 *
 * A page's date is the newest commit among its own source and the components
 * and data it imports directly — /pricing/ must move when the pricing data
 * moves, not only when the .astro wrapper is edited.
 *
 * Dynamic [slug] routes are skipped on purpose: those pages are articles, and
 * their honest date is the frontmatter publishedAt/updatedAt that
 * astro.config.mjs already reads. A template tweak is not a content change.
 *
 * Usage: node tools/build-lastmod.mjs [outfile]   (default: ./.lastmod.json)
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, relative, join } from "node:path";

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = resolve(PKG, "..");
const OUT = process.argv[2] ? resolve(process.argv[2]) : join(PKG, ".lastmod.json");
const DEFAULT_LOCALE = "en";

// ── one git pass: file → newest commit date ──────────────────────────────
const fileDate = new Map();
try {
  const log = execFileSync(
    "git",
    // --diff-merges=first-parent is load-bearing: fluera-landing entered this
    // monorepo through a `git subtree add` MERGE, and `git log --name-only`
    // lists no files for merge commits. Without it, 721 of the content files
    // are invisible to this pass and silently get no date at all.
    ["log", "--diff-merges=first-parent", "--pretty=format:@%cI", "--name-only",
     "--", "fluera-landing/src"],
    { cwd: REPO, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
  );
  let current = null;
  for (const line of log.split("\n")) {
    if (line.startsWith("@")) { current = line.slice(1); continue; }
    const f = line.trim();
    // git log is newest-first, so the first sighting of a file is its latest date.
    if (f && current && !fileDate.has(f)) fileDate.set(f, current);
  }
} catch {
  // no git here (or not this layout)
}
if (fileDate.size === 0) {
  // This is the publish repo, or a tarball: the dates were already computed in
  // the monorepo and shipped alongside. Leave any existing file untouched —
  // overwriting it with an empty map would silently strip every <lastmod>.
  console.warn(
    existsSync(OUT)
      ? "· no usable git history here — keeping the .lastmod.json that was shipped."
      : "· no usable git history here and no .lastmod.json shipped — sitemap will carry no dates.",
  );
  process.exit(0);
}

const dateOf = (abs) => fileDate.get(relative(REPO, abs).split("\\").join("/")) ?? null;

// ── resolve the direct imports of a page ─────────────────────────────────
const IMPORT = /^\s*import\s+[^;]*?from\s+["']([^"']+)["']/gm;
function depsOf(absFile) {
  const src = readFileSync(absFile, "utf8");
  const out = [];
  for (const m of src.matchAll(IMPORT)) {
    const spec = m[1];
    let base;
    if (spec.startsWith("@/")) base = join(PKG, "src", spec.slice(2));
    else if (spec.startsWith(".")) base = resolve(dirname(absFile), spec);
    else continue; // node_modules and astro: virtual modules have no date here
    for (const cand of [base, `${base}.ts`, `${base}.astro`, `${base}.js`, join(base, "index.ts")]) {
      if (existsSync(cand) && !cand.endsWith("/")) { out.push(cand); break; }
    }
  }
  return out;
}

// ── walk the static pages ────────────────────────────────────────────────
const pages = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".astro") && !e.name.includes("[")) pages.push(full);
  }
})(join(PKG, "src", "pages"));

const map = {};
for (const page of pages) {
  const dates = [dateOf(page), ...depsOf(page).map(dateOf)].filter(Boolean);
  if (!dates.length) continue;
  const newest = dates.sort().at(-1);

  let route = relative(join(PKG, "src", "pages"), page).split("\\").join("/");
  route = route.replace(/\.astro$/, "");
  if (route === "404") continue; // never in the sitemap
  route = route.replace(/(^|\/)index$/, "$1");
  let url = `/${route}`;
  if (!url.endsWith("/")) url += "/";
  url = url.replace(/\/{2,}/g, "/");
  map[url] = newest;
}

// ── content collections without frontmatter dates ────────────────────────
// principles, authors and features carry no publishedAt/updatedAt, so
// astro.config could not date them either: 721 URLs, the whole reference half
// of the site. Their honest date is the last commit that touched the file.
// astro.config only fills gaps with this map, so a real frontmatter date
// always wins.
const COLLECTION_TO_ROUTE = {
  blog: "blog",
  features: "features",
  principles: "science/principles",
  authors: "science/authors",
  docs: "docs",
};
const LOCALES = ["en", "it", "es", "pt-br", "fr", "de", "ja", "ko", "hi", "pl", "ar", "nl", "sv", "da", "no", "fi"];

for (const [collection, route] of Object.entries(COLLECTION_TO_ROUTE)) {
  const dir = join(PKG, "src", "content", collection);
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const date = dateOf(join(dir, file));
    if (!date) continue;
    const id = file.replace(/\.(md|mdx)$/, "");
    const m = id.match(/\.([a-z-]+)$/);
    const locale = m && LOCALES.includes(m[1]) ? m[1] : DEFAULT_LOCALE;
    const slug = m && LOCALES.includes(m[1]) ? id.slice(0, -1 - m[1].length) : id;
    const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
    const url = `${prefix}/${route}/${slug}/`;
    if (!map[url] || map[url] < date) map[url] = date;
  }
}

writeFileSync(OUT, JSON.stringify(map, null, 2) + "\n");
console.log(`✓ .lastmod.json — ${Object.keys(map).length} pages dated from git history.`);
