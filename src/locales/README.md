# Fluera locales

This directory contains the **chrome strings** (nav, footer, CTA labels, form
labels, eyebrows, status pills, locale banner) for every supported language.

Page copy (hero, paragraphs, scientific text) lives in `src/pages/{locale}/*.astro`
files, **not** here. See the main repo CLAUDE.md for context.

## Status (2026-05-09)

| Locale | Code | Tier | Status | Endonym |
|--------|------|------|--------|---------|
| English | `en` | 1 | ✅ Live (default — source of truth) | English |
| Italian | `it` | 1 | ✅ Live (full site: chrome + 26 pages + 56 content entries — all collections at parity with EN) | italiano |
| Spanish | `es` | 1 | ✅ Live (full site: chrome + 26 pages + 56 content entries — all collections at parity with EN) | español |
| Portuguese (Brazil) | `pt-br` | 1 | ✅ Live (full site: chrome + 25 pages + 56 content entries — all collections at parity with EN) | português |
| French | `fr` | 1 | ✅ Live (full site: chrome + 26 pages + 56 content entries — all collections at parity with EN) | français |
| German | `de` | 1 | ✅ Live (full site: chrome + 26 pages + 56 content entries — all collections at parity with EN) | Deutsch |
| Japanese | `ja` | 1 | ✅ Live (full site: chrome + 26 pages + 56 content entries — all collections at parity with EN) | 日本語 |
| Korean | `ko` | 1 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | 한국어 |
| Hindi | `hi` | 1 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | हिन्दी |
| Arabic | `ar` | 1 | ✅ Live — **RTL** (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | العربية |
| Dutch | `nl` | 2 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | Nederlands |
| Polish | `pl` | 1 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | polski |
| Swedish | `sv` | 2 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | svenska |
| Danish | `da` | 2 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | dansk |
| Norwegian | `no` | 2 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | norsk |
| Finnish | `fi` | 2 | ✅ Live (full site: chrome + 25 pages + 60 content entries — all collections at parity with EN) | suomi |

"Scaffolded" = JSON file exists with EN values as placeholders and a `_meta`
block describing the locale. The locale is **not** yet registered in
`src/lib/i18n.ts` (`Locale` union + `LOCALES` array) or `astro.config.mjs`,
so it's not built into the site yet.

## Promoting a scaffolded locale to live

When a locale's chrome strings have been translated by a native speaker:

1. **Translate** every key in `src/locales/{code}.json` (skip the `_meta` block;
   it's ignored by the loader). Change `_meta.status` to `"translated"` when done.
2. **Register the locale** in two files:
   - [`src/lib/i18n.ts`](../lib/i18n.ts) — add `"{code}"` to the `Locale` union and to the `LOCALES` array.
   - [`astro.config.mjs`](../../astro.config.mjs) — add `"{code}"` to the `LOCALES` const.
3. **(Optional but recommended)** Translate the homepage:
   - Create `src/pages/{code}/index.astro` (copy from `src/pages/it/index.astro`
     and translate the inline copy).
   - Without this, `/{code}/` renders the EN homepage via fallback rewrite
     (chrome will still be in the new locale, just not the page body).
4. **(For more pages)** Translate other `.astro` files page by page. Untranslated
   pages serve in EN via fallback automatically — no 404s.

## Translation guidelines

### What stays in English (brand terms)
Never translate these — they are product feature names:
`Ghost Map`, `Socratic Mode`, `Fog of War`, `Time Travel`, `Atlas`,
`Memory Palace`, `Centaur`.

### What is consistent across locales
- Pricing tier names: `Free`, `Plus`, `Pro`, `Education` (don't translate "Plus" or "Pro")
- Brand: `Fluera` is invariant
- Academic citations: keep author names + year format (e.g. "Bjork, 1994" or "Butterfield & Metcalfe, 2001"). Year is a number; comma is locale-dependent
- Currency: pricing uses EUR (`€5.99` or `€5,99` per locale convention)

### What adapts per locale
- **Decimal separator**: `.` for EN/JA/KO/HI/AR, `,` for IT/ES/FR/DE/PT-BR/NL/PL/Nordics
- **Tone register**: choose `tu`/`du`/`vous` consistently with audience (Fluera is for students + knowledge workers — informal but professional)
- **CTA verbs**: imperative form is preferred ("Únete", "Anmelden", "登録する")

### Brand voice cheat sheet (apply per locale)
- Sober, enterprise-but-honest. Stripe-meets-Apple-documentation.
- No "honestly", "actually", filler hedges
- No "we're a small team building this" indie tone
- Short, definitive sentences. Avoid passive-voice in CTAs

### RTL locales (Arabic only, currently)
The codebase is RTL-safe: CSS uses logical properties (`padding-inline-start`,
`text-align: start`, etc.) and Tailwind classes (`ps-*`, `me-*`, `text-start`).
Setting `dir="rtl"` on `<html>` is automatic for AR; just translate strings
and the layout mirrors itself. Verify visually after translating.

## File structure

```
src/locales/
├── README.md                  ← this file
├── en.json                    ← source of truth (138 keys)
├── it.json                    ← Italian (138 keys translated)
├── es.json                    ← Spanish (138 keys translated)
├── pt-br.json                 ← scaffolded (EN values + _meta)
├── fr.json                    ← scaffolded
├── de.json                    ← scaffolded
├── ja.json                    ← scaffolded
├── ko.json                    ← scaffolded
├── hi.json                    ← scaffolded
├── ar.json                    ← scaffolded (RTL)
├── nl.json                    ← scaffolded
├── pl.json                    ← scaffolded
├── sv.json                    ← scaffolded
├── da.json                    ← scaffolded
├── no.json                    ← scaffolded
└── fi.json                    ← scaffolded
```

## Loader behavior

`src/lib/i18n.ts` uses Vite's `import.meta.glob('../locales/*.json', { eager: true })`
to auto-discover every JSON file. Keys starting with `_` (e.g. `_meta`) are
filtered out at lookup time. Falls back to `en.json` for any missing key, then
to the literal key name (so missing translations surface visibly in dev).

## Word counts per locale (translation budget)

| Scope | Words EN | Note |
|-------|----------|------|
| Chrome strings (this dir) | ~290 | Required for nav/footer/banner |
| Homepage `.astro` | ~840 | Required for full hero in this locale |
| All other `.astro` pages | ~5,900 | 23 pages |
| Content collections (.md/.mdx) | ~16,300 | blog + authors + principles + features + docs + changelog |
| **Total per locale (full site)** | **~23,350** | ≈ 5-7 person-days for a native translator |
