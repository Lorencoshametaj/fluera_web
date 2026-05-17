import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

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
