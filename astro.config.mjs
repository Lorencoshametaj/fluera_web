import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// ── i18n configuration ───────────────────────────────────────────────────
// Locales must match the JSON files in src/locales/ and the Locale union
// in src/lib/i18n.ts. Default locale is served at root (no prefix).
// Other locales are served at /{locale}/.
//
// Target rollout (per memory/project_i18n_target_languages.md):
//   Tier 1: en, it (live), es, pt-br, fr, de, ja, ko, hi, ar
//   Tier 2: nl, pl, sv, da, no, fi
const DEFAULT_LOCALE = "en";
const LOCALES = ["en", "it", "es", "pt-br", "fr", "de", "ja", "ko", "hi", "pl", "ar", "nl", "sv", "da", "no", "fi"];

// ── Build URL → lastmod map for sitemap.serialize() ──────────────────────
// Walk content collections at config-time, extract publishedAt/updatedAt from
// frontmatter, and map them to their public URLs so the sitemap emits
// <lastmod> tags. Used downstream by integrations.sitemap.serialize().
const COLLECTION_TO_ROUTE = {
  blog: "blog",
  features: "features",
  principles: "science/principles",
  authors: "science/authors",
  docs: "docs",
};

function parseFrontmatterDate(raw) {
  // Pull updatedAt first, else publishedAt. Frontmatter lines look like:
  //   updatedAt: 2026-05-12
  //   publishedAt: 2026-04-16
  const fmEnd = raw.indexOf("---", 4);
  if (fmEnd === -1) return null;
  const fm = raw.slice(0, fmEnd);
  const updatedMatch = fm.match(/^updatedAt:\s*["']?([0-9T:\-.Z+]+)["']?$/m);
  if (updatedMatch) return new Date(updatedMatch[1]);
  const publishedMatch = fm.match(/^publishedAt:\s*["']?([0-9T:\-.Z+]+)["']?$/m);
  if (publishedMatch) return new Date(publishedMatch[1]);
  return null;
}

function buildLastmodMap() {
  const map = new Map();
  for (const [collection, route] of Object.entries(COLLECTION_TO_ROUTE)) {
    const dir = `./src/content/${collection}`;
    let entries;
    try {
      entries = readdirSync(dir);
    } catch {
      continue;
    }
    for (const file of entries) {
      if (!/\.(md|mdx)$/.test(file)) continue;
      const fullPath = join(dir, file);
      try {
        if (!statSync(fullPath).isFile()) continue;
      } catch {
        continue;
      }
      const raw = readFileSync(fullPath, "utf8");
      const date = parseFrontmatterDate(raw);
      if (!date || isNaN(date.getTime())) continue;
      // file.id e.g. "case-against-highlighters.it" or "ghost-map"
      const id = file.replace(/\.(md|mdx)$/, "");
      const localeMatch = id.match(/\.([a-z-]+)$/);
      const baseSlug = localeMatch ? id.slice(0, -1 - localeMatch[1].length) : id;
      const locale = localeMatch ? localeMatch[1] : DEFAULT_LOCALE;
      if (!LOCALES.includes(locale)) continue;
      const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
      const url = `https://fluera.dev${prefix}/${route}/${baseSlug}/`;
      const urlNoSlash = url.slice(0, -1);
      map.set(url, date);
      map.set(urlNoSlash, date);
    }
  }
  return map;
}

const LASTMOD_MAP = buildLastmodMap();

// ── Trailing-slash normalizer ────────────────────────────────────────────
// The built site is directory-style (`/pricing/index.html`), but most source
// hrefs are written without the slash (`/pricing`). GitHub Pages answers those
// with a 301 to the slashed URL — one extra round-trip on every internal click
// and a redirect flag on every audit. Rather than chase ~1.400 distinct hrefs
// in 16 locales, rewrite them once at build time: an internal, extensionless
// href/src gains its slash (before any #fragment or ?query). Files with an
// extension, external URLs, mailto:, and lone "#" anchors are untouched.
function trailingSlashNormalizer() {
  const ATTR = /(href|src)="(\/[^"]*)"/g;
  return {
    name: "trailing-slash-normalizer",
    hooks: {
      "astro:build:done": ({ dir, pages, logger }) => {
        const root = fileURLToPath(dir);
        let edits = 0;
        const files = [];
        const walk = (d) => {
          for (const e of readdirSync(d, { withFileTypes: true })) {
            const full = join(d, e.name);
            if (e.isDirectory()) walk(full);
            else if (e.name.endsWith(".html")) files.push(full);
          }
        };
        walk(root);
        for (const file of files) {
          const before = readFileSync(file, "utf8");
          const after = before.replace(ATTR, (whole, attr, url) => {
            const m = url.match(/^([^#?]*)([#?].*)?$/);
            const path = m[1];
            const tail = m[2] ?? "";
            if (path === "" || path.endsWith("/")) return whole;
            if (path.startsWith("//")) return whole; // protocol-relative
            const last = path.slice(path.lastIndexOf("/") + 1);
            if (last.includes(".")) return whole; // real file
            edits++;
            return `${attr}="${path}/${tail}"`;
          });
          if (after !== before) writeFileSync(file, after);
        }
        logger.info(`normalized ${edits} internal links to trailing-slash form`);
      },
    },
  };
}

export default defineConfig({
  site: "https://fluera.dev",
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      // EN at root (/) without prefix; other locales under /{locale}/.
      // When ready to flip to symmetric /{locale}/ for ALL locales, set
      // prefixDefaultLocale: true and add a redirect from / to /en/.
      prefixDefaultLocale: false,
      // If a localized page is missing, fall back to the default locale.
      fallbackType: "rewrite",
    },
    fallback: LOCALES
      .filter((l) => l !== DEFAULT_LOCALE)
      .reduce((acc, l) => ({ ...acc, [l]: DEFAULT_LOCALE }), {}),
  },
  redirects: {
    // /marketplace was renamed to /catalogue (the old name promised commerce
    // that does not exist here). Keep the old paths resolving in every locale.
    "/marketplace": "/catalogue",
    ...Object.fromEntries(
      LOCALES.filter((l) => l !== DEFAULT_LOCALE)
        .map((l) => [`/${l}/marketplace`, `/${l}/catalogue`]),
    ),
    // The Mueller & Oppenheimer author page was replaced by Flanigan et al.
    // (the 2014 study failed replication; the 2024 meta-analysis is the honest
    // citation). The old URL is live and indexed — send it to the successor
    // instead of letting Google and any inbound link hit a 404.
    "/science/authors/mueller-oppenheimer": "/science/authors/flanigan",
    ...Object.fromEntries(
      LOCALES.filter((l) => l !== DEFAULT_LOCALE)
        .map((l) => [
          `/${l}/science/authors/mueller-oppenheimer`,
          `/${l}/science/authors/flanigan`,
        ]),
    ),
    "/engine": "/",
    "/sdk": "/",
    "/engine/docs": "/",
    "/engine/docs/quickstart": "/",
    "/engine/docs/cloud-adapter": "/",
    "/engine/docs/storage-adapter": "/",
    "/engine/docs/custom-brushes": "/",
    "/engine/docs/fluera-canvas-config": "/",
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // A sitemap is a request to index. Listing a page that carries
      // <meta robots="noindex"> asks Google for two opposite things at once,
      // and GSC reports the contradiction. /legal/* is noindex by design
      // (LegalLayout), so it stays out of the sitemap.
      filter: (page) => !/\/legal\//.test(page),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
      serialize(item) {
        const date = LASTMOD_MAP.get(item.url);
        if (date) {
          item.lastmod = date.toISOString();
        }
        return item;
      },
    }),
    mdx(),
    trailingSlashNormalizer(),
  ],
  build: {
    inlineStylesheets: "auto",
    assets: "_astro",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
