import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://fluera.dev",
  output: "static",
  trailingSlash: "ignore",
  redirects: {
    "/engine": "https://engine.fluera.dev/",
    "/sdk": "https://engine.fluera.dev/",
    "/engine/docs": "https://engine.fluera.dev/quickstart",
    "/engine/docs/quickstart": "https://engine.fluera.dev/quickstart",
    "/engine/docs/cloud-adapter": "https://engine.fluera.dev/quickstart",
    "/engine/docs/storage-adapter": "https://engine.fluera.dev/quickstart",
    "/engine/docs/custom-brushes": "https://engine.fluera.dev/quickstart",
    "/engine/docs/fluera-canvas-config": "https://engine.fluera.dev/quickstart",
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", it: "it" },
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
