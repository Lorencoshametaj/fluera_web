# OG image placeholder

Phase 1 ships a **single static OG image** at `/og/default.png`. Every page references it from `BaseLayout`'s `<Head>` unless a page sets `ogImage` explicitly.

## What to put here

- `default.png` — 1200 × 630, the homepage social card. Suggested: logo + tagline (*"The study space your brain was built for."*) on an ink-dark gradient.

## Phase 2 upgrade

Replace the static PNG with a runtime OG generator using [`@vercel/og`](https://vercel.com/docs/og-image-generation) or [`satori`](https://github.com/vercel/satori). Three variants per the plan:

1. **Brand** — logo + page headline + subtitle
2. **Article** — blog post title + author + category + date
3. **Principle** — cognitive-science principle + author portrait stylised

Typography: Source Serif 4 for titles, Inter for metadata.

## Quick placeholder

A minimal SVG `default.svg` in this folder renders the same card — open it in Figma/Inkscape and export at 1200×630 to get a starting `default.png`.
