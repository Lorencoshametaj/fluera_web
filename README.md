# Fluera — Marketing site (v2)

Astro-based rebuild of the Fluera marketing site. Sidecar to [`fluera-landing/`](../fluera-landing/) — the current live site on `fluera.dev` — until this v2 is ready to replace it.

Strategy, sitemap, copy and rationale live in the plan file:
`~/.claude/plans/analizza-tutto-l-engine-fluera-scalable-koala.md`

## Stack

- **Astro 5** (static output)
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **MDX** for blog/changelog/docs content
- **Sitemap** via `@astrojs/sitemap` (i18n-aware EN/IT)

## Quickstart

```bash
npm install
npm run dev          # dev server on http://localhost:4321
npm run build        # static build to dist/
npm run preview      # preview prod build locally
```

## Structure

```
src/
  layouts/          BaseLayout.astro (head, nav, footer wrapper)
  components/       Nav, Footer, Hero, Section, Pillar, CTAStrip, Citation, BetaForm
  pages/            Routes: /, /beta, /pricing, /security, /engine, /about, /contact, /download
  pages/legal/      /legal/privacy, /legal/terms
  content/          MDX content collections (Phase 2+)
  styles/           global.css with Tailwind layers + design tokens
public/             Static assets (logo, hero, og templates, robots.txt)
```

## Migrating assets from the legacy site

Phase 1 scaffold does **not** copy binary assets from [`../fluera-landing/`](../fluera-landing/). Before your first deploy:

```bash
# From fluera-landing-v2/
cp -r ../fluera-landing/assets        public/assets        # logo + hero.png
cp -r ../fluera-landing/demo          public/demo          # Flutter web demo (preserves /demo/ route)
cp    ../fluera-landing/CNAME         public/CNAME         # only if keeping GitHub Pages
```

Then replace `public/og/default.svg` with a real 1200×630 `default.png` (see [public/og/README.md](public/og/README.md)).

## Deploy

Default build output is fully static (`output: "static"`) and can ship to:

- **GitHub Pages** — preserve `CNAME` with `fluera.dev`. Current live host.
- **Vercel** — drop in as-is; add `@astrojs/vercel` adapter for edge functions / runtime OG generation later.
- **Netlify / Cloudflare Pages** — zero-config static deploy.

Redirects from the legacy HTML site (`/index.html` → `/engine`, `/beta.html` → `/beta`) are in [`public/_redirects`](public/_redirects) (Netlify/Cloudflare format) and `vercel.json` — pick the file that matches your host.

## Configuration

- **Form backend:** `/beta` submits to a Supabase RPC. Fill in `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` in `.env` before deploy (see `.env.example`).
- **Analytics:** Plausible is wired conditionally via `PUBLIC_PLAUSIBLE_DOMAIN`. Leave blank to skip (nothing loads). Self-hosting? Override `PUBLIC_PLAUSIBLE_SRC`.

## Quality gate — Lighthouse CI

Every push to `main` and every pull request runs a Lighthouse audit on 18 representative routes. The gate fails the build if any category drops below **0.95** on Performance, Accessibility, Best Practices, or SEO.

Configuration: [lighthouserc.cjs](lighthouserc.cjs) · Workflow: [.github/workflows/lighthouse.yml](.github/workflows/lighthouse.yml)

```bash
# Run locally (requires a successful build first)
npm run lighthouse:build

# Or, after your own build
npm run build
npm run lighthouse
```

Reports are uploaded to Lighthouse's temporary public storage; the URL is printed at the end of each run. In CI, reports are also kept as GitHub Actions artifacts for 14 days.

**When the gate fails:** the CI log lists exactly which audit regressed and on which URL. Most regressions come from: unoptimized images (use `<Image>` from `astro:assets`), too-long blocking JS (avoid client-side frameworks), or copy that breaks heading order (`<p class="eyebrow">` above `<h1>` is flagged as warn, not error).

**Loosening thresholds:** only with a written reason in the commit message. The defaults are deliberately aggressive to prevent quality drift.

## Phases

- **Phase 1 (this)** — MVP relaunch: all static pages, form, legal, redirects, SEO baseline. No blog yet, no /science deep-dive, no /features/* deep-dives.
- **Phase 2** — `/science` + principles + authors, `/features/*` deep-dives, blog seed (6 posts), `/education`, `/manifesto`, `/changelog`, newsletter.
- **Phase 3** — `/docs` user docs, `/engine/docs` SDK ref, `/it/` mirror, auto-changelog from git tags, WCAG 2.1 AA audit, case studies.
