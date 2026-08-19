# CLAUDE.md — fluera-landing

Astro static marketing site, 16 locales. Deployed by **mirroring** — read this before touching anything under `.github/` here.

## Deploy model (the trap)

- GitHub Actions runs workflows **only** from the repo root `.github/workflows/`. The files under `fluera-landing/.github/workflows/` are inert in this repo: they execute only in the external mirror repo `fluera_web`, where the root-level `deploy-landing.yml` pushes the built output (GitHub Pages serves fluera.dev). A path broken in the mirror stays silently broken — the Lighthouse job was dead "since always" until commit `12b6ea55` (2026-08-16).
- **The Actions of fluera-mono are intentionally OFF** (billing declined, 2026-08-17): `deploy-landing.yml` is dormant. The deploy path is `tools/deploy-landing-local.sh` at the monorepo root — same steps as the workflow (npm test gate → git archive of the TRACKED tree → push to fluera_web), run locally. fluera_web is public, so its Actions (Pages build + Lighthouse quality gate) stay free and alive. Quality enforcement for pushes lives in the local pre-push hook (41 certified gates).
- `api/*.ts` and `vercel.json` are dead leftovers — hosting is GitHub Pages plus a Supabase Edge Function for share.fluera.dev, not Vercel.

## Content model

- `src/content/` collections (985 files, counted 2026-08-17): principles (368), authors (192), features (161), docs (144), blog (57), changelog (48), citations (15).
- Locale scheme: suffix per file (`.it.md`, `.de.md`, …); unsuffixed = English default. The 16 locales are declared in `astro.config.mjs` (`LOCALES`) — a content change fans out ×16, so batch it and verify titles stay in sync across languages (IT→EN title drift has happened before).
