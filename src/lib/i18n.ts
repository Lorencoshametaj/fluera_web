/**
 * i18n loader for UI strings.
 *
 * Strings live in `src/locales/{locale}.json` (one file per locale, flat key map).
 * This file is the registry: it declares which locales exist, detects the
 * current locale from the URL, and exposes `t()` / `pickLocale()`.
 *
 * To add a new locale:
 *   1. Create `src/locales/{code}.json` (start by copying `en.json`).
 *   2. Add the code to `Locale` union and `LOCALES` array below.
 *   3. Add a routing rule in `astro.config.mjs` if needed.
 *
 * The 16 target locales for Fluera are documented in
 * `memory/project_i18n_target_languages.md`. Tier 1: EN, ES, PT-BR, FR, DE,
 * IT, JA, KO, HI, AR. Tier 2: NL, PL, SV, DA, NO, FI.
 *
 * Scope: nav labels, footer labels, CTAs, repeated section eyebrows,
 * common button text, form labels, status pills, error messages.
 *
 * Not for: long-form page copy (lives in `.astro` files per locale),
 * content collections (use `lang` frontmatter), brand terms (see BRAND_TERMS).
 */

// ── Locale registry ──────────────────────────────────────────────────────
// Update this union + the LOCALES array to promote a scaffolded locale to live.
// Codes follow BCP 47 (lowercase, hyphenated for region: e.g. "pt-br").
//
// LIVE locales (Locale union below): the chrome is translated, the homepage
// is at minimum partially translated, the locale is built into the site.
//
// SCAFFOLDED locales (PLANNED_LOCALES below): src/locales/{code}.json exists
// with EN placeholders + _meta block, and src/pages/{code}/ folder exists
// (currently empty). Not yet registered → not built. Promote by adding to the
// Locale union + LOCALES array here AND in astro.config.mjs.
//
// Tier 1 priority (high-volume markets):  EN, ES, PT-BR, FR, DE, IT, JA, KO, HI, AR
// Tier 2 priority (Nordics + NL + PL):    NL, PL, SV, DA, NO, FI
export type Locale = "en" | "it" | "es" | "pt-br" | "fr" | "de" | "ja" | "ko" | "hi" | "pl" | "ar" | "nl" | "sv" | "da" | "no" | "fi";
export const LOCALES: readonly Locale[] = ["en", "it", "es", "pt-br", "fr", "de", "ja", "ko", "hi", "pl", "ar", "nl", "sv", "da", "no", "fi"] as const;
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Locales whose JSON scaffold exists but that aren't registered for build yet.
 * Documentation only — kept here so the site source documents the roadmap.
 * See src/locales/README.md for the full status table and translation guide.
 */
export const PLANNED_LOCALES = [] as const;

// ── Dictionary loading ───────────────────────────────────────────────────
// Vite glob eagerly imports every JSON in src/locales/. Adding a new file
// makes the locale discoverable here without touching this loader — only
// the `Locale` union + `LOCALES` array above need updating.
//
// Keys starting with `_` (e.g. `_meta` blocks in scaffolded translations)
// are filtered out so they don't pollute t() lookups.
//
// We also import en.json directly to derive a type-safe `I18nKey` literal
// union — this turns silent fallback typos into compile-time errors.
import enJson from "../locales/en.json";

/** All translation keys defined in en.json (the source of truth). */
export type I18nKey = Exclude<keyof typeof enJson, `_${string}`>;

type Dict = Record<string, string>;
const dictModules = import.meta.glob<{ default: Record<string, unknown> }>(
  "../locales/*.json",
  { eager: true },
);

function stripMetaKeys(raw: Record<string, unknown>): Dict {
  const out: Dict = {};
  for (const [k, v] of Object.entries(raw)) {
    if (k.startsWith("_")) continue;
    if (typeof v === "string") out[k] = v;
  }
  return out;
}

const dictionaries: Partial<Record<string, Dict>> = {};
for (const [path, mod] of Object.entries(dictModules)) {
  const match = path.match(/locales\/([\w-]+)\.json$/);
  if (match) dictionaries[match[1]] = stripMetaKeys(mod.default);
}

// ── URL detection ────────────────────────────────────────────────────────
/**
 * Detect the locale from a URL pathname.
 * Returns DEFAULT_LOCALE when no locale prefix is found.
 *
 * Note: today routing is `/` (en, default) + `/it/` (italian).
 * When the routing migrates to `/{locale}/` for all locales (planned for
 * the 16-language rollout), this function will need updating to read any
 * known locale prefix instead of hardcoding `it`.
 */
export function localeFromPathname(pathname: string): Locale {
  const p = pathname.replace(/\/$/, "") || "/";
  for (const code of LOCALES) {
    if (code === DEFAULT_LOCALE) continue;
    if (p === `/${code}` || p.startsWith(`/${code}/`)) return code;
  }
  return DEFAULT_LOCALE;
}

// ── Brand terms ──────────────────────────────────────────────────────────
/**
 * Brand terms that stay in English across all locales (feature names, tech).
 * Used so non-EN pages can show "Ghost Map · Passo 4" with the feature name
 * untouched.
 */
export const BRAND_TERMS = {
  ghostMap: "Ghost Map",
  socraticMode: "Socratic Mode",
  fogOfWar: "Fog of War",
  timeTravel: "Time Travel",
  atlas: "Atlas",
  spacedRepetition: {
    en: "Spaced Repetition",
    it: "Ripetizione Spaziata",
  },
  memoryPalace: {
    en: "Memory Palace",
    it: "Palazzo della Memoria",
  },
  centaur: {
    en: "Centaur",
    it: "Centauro",
  },
} as const;

// ── Lookup helpers ───────────────────────────────────────────────────────
/**
 * Look up a localized string. The `key` is constrained to `I18nKey` (literal
 * union derived from en.json) so typos fail at compile time. Falls back to
 * English if the key is missing in the target locale, and returns the key
 * itself if missing in EN too (so we notice the gap in dev).
 */
export function t(key: I18nKey, locale: Locale = DEFAULT_LOCALE): string {
  return dictionaries[locale]?.[key]
    ?? dictionaries[DEFAULT_LOCALE]?.[key]
    ?? key;
}

/** Translate a tuple `{ en: string; it: string; … }` to the active locale. */
export function pickLocale<T>(variants: Partial<Record<Locale, T>>, locale: Locale): T {
  return (variants[locale] ?? variants[DEFAULT_LOCALE]) as T;
}
