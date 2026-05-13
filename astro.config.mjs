import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

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
