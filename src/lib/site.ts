export const SITE = {
  name: "Fluera",
  domain: "fluera.dev",
  url: "https://fluera.dev",
  description:
    "A learning canvas, not a note app — handwrite on an infinite canvas and Fluera maps your whole degree, then studies you back. Built on 50 years of memory science. iOS, Android, macOS, Windows, Web.",
  tagline: "The notebook that studies you back.",
  company: {
    legalName: "Fluera srl",
    city: "Milan, Italy",
    contactEmail: "hello@fluera.dev",
    privacyEmail: "privacy@fluera.dev",
    securityEmail: "security@fluera.dev",
    supportEmail: "support@fluera.dev",
    twitter: "fluera_app",
    github: "Lorencoshametaj/fluera_engine",
  },
  social: {
    twitter: "https://twitter.com/fluera_app",
    github: "https://github.com/Lorencoshametaj/fluera_engine",
  },
};

export const PRIMARY_NAV = [
  { label: "Science",   href: "/science",   kind: "page" as const },
  { label: "Features",  href: "/features",  kind: "page" as const },
  { label: "Education", href: "/education", kind: "page" as const },
  { label: "Pricing",   href: "/pricing",   kind: "page" as const },
];

export const PRIMARY_CTA = {
  label: "Request early access",
  href: "/beta",
};

// ── Newsletter (Buttondown) ───────────────────────────────────────────
/**
 * Configuration for the newsletter signup forms (NewsletterCapture component).
 *
 * To activate the real wire-up:
 *   1. Create a free account on https://buttondown.email
 *   2. Set your username in the Buttondown dashboard (e.g. "fluera")
 *   3. Replace `username` below with your actual Buttondown username
 *
 * While `username` is empty, the form falls back to localStorage and shows
 * the Phase-2 disclaimer. Once set, posts go directly to Buttondown's
 * public embed endpoint — no API key exposed client-side.
 */
export const NEWSLETTER = {
  provider: "buttondown" as const,
  username: "", // ← set this to activate (e.g. "fluera")
  endpoint: (username: string) =>
    `https://buttondown.email/api/emails/embed-subscribe/${username}`,
};

// ── Locale routing ────────────────────────────────────────────────────
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

/**
 * Paths that have a localized version at `/{locale}/{path}` for at least
 * one non-default locale. The same set is shared across all locales — when
 * a locale doesn't have a translation, Astro's `fallbackType: "rewrite"`
 * (configured in astro.config.mjs) serves the default locale content.
 *
 * To register a new translatable path: add it here.
 */
export const LOCALE_AVAILABLE_PATHS = new Set<string>([
  "/",
  "/about",
  "/beta",
  "/pricing",
  "/contact",
  "/contact/sales",
  "/download",
  "/security",
  "/security/architecture",
  "/security/sub-processors",
  "/features",
  "/education",
  "/education/case-studies",
  "/science",
  "/research",
  "/manifesto",
  "/blog",
  "/changelog",
  "/company/press",
]);

/**
 * Paths served only at the unprefixed root (no per-locale variant).
 * Useful for legal pages where we maintain one copy with inline localization.
 */
export const LOCALE_NATIVE_PATHS = new Set<string>([
  "/legal/privacy",
  "/legal/terms",
]);

/** @deprecated use LOCALE_AVAILABLE_PATHS — kept for backwards compatibility. */
export const IT_AVAILABLE_PATHS = LOCALE_AVAILABLE_PATHS;

/**
 * Rewrite an internal href to its localized version when the visitor is on
 * a non-default locale AND the target has a translation. Falls back to the
 * unprefixed (default-locale) href otherwise.
 *
 * Accepts either a `Locale` string (preferred) or the legacy `boolean`
 * (true = "it") for backwards compatibility with existing call sites.
 */
export function localizedHref(href: string, locale: Locale | boolean): string {
  const targetLocale: Locale = typeof locale === "boolean"
    ? (locale ? "it" : DEFAULT_LOCALE)
    : locale;

  if (targetLocale === DEFAULT_LOCALE) return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  // Already prefixed under any known locale, or an external hash — leave as-is.
  for (const code of LOCALES) {
    if (code === DEFAULT_LOCALE) continue;
    if (href === `/${code}` || href.startsWith(`/${code}/`)) return href;
  }

  // Split off hash + query for matching the bare path.
  const [bare, ...rest] = href.split(/([#?])/);
  const path = bare === "" ? "/" : bare;

  if (LOCALE_NATIVE_PATHS.has(path)) return href;
  if (LOCALE_AVAILABLE_PATHS.has(path)) {
    const prefix = path === "/" ? `/${targetLocale}/` : `/${targetLocale}${path}`;
    return prefix + rest.join("");
  }
  return href;
}

/**
 * Strip a locale prefix from a pathname, returning the canonical default-locale
 * path. Used by the Nav language switcher to jump between the same logical
 * page across locales.
 */
export function basePathFromPathname(pathname: string): string {
  for (const code of LOCALES) {
    if (code === DEFAULT_LOCALE) continue;
    if (pathname === `/${code}` || pathname === `/${code}/`) return "/";
    if (pathname.startsWith(`/${code}/`)) return pathname.slice(`/${code}`.length);
  }
  return pathname || "/";
}

/**
 * Build the href to switch the current page to a target locale.
 * If the page exists in the target locale, returns the localized URL.
 * If not, falls back to the locale's homepage.
 */
export function languageSwitchHref(currentPathname: string, targetLocale: Locale): string {
  const basePath = basePathFromPathname(currentPathname);
  if (targetLocale === DEFAULT_LOCALE) return basePath;
  if (LOCALE_AVAILABLE_PATHS.has(basePath)) {
    return basePath === "/" ? `/${targetLocale}/` : `/${targetLocale}${basePath}`;
  }
  return `/${targetLocale}/`;
}

export const FOOTER_NAV = {
  product: [
    { label: "Features",           href: "/features" },
    { label: "Download",           href: "/download" },
    { label: "Pricing",            href: "/pricing" },
    { label: "Live demo",          href: "/demo", external: true },
    { label: "Changelog",          href: "/changelog" },
  ],
  science: [
    { label: "The 12-step cycle",  href: "/science#learning-cycle" },
    { label: "All principles",     href: "/science#principles" },
    { label: "Authors",            href: "/science#authors" },
    { label: "Bibliography",       href: "/research" },
  ],
  company: [
    { label: "About",              href: "/about" },
    { label: "Manifesto",          href: "/manifesto" },
    { label: "Blog",               href: "/blog" },
    { label: "Contact",            href: "/contact" },
    { label: "Education sales",    href: "/contact/sales" },
    { label: "Beta program",       href: "/beta" },
  ],
  trust: [
    { label: "Security",           href: "/security" },
    { label: "Architecture",       href: "/security/architecture" },
    { label: "Sub-processors",     href: "/security/sub-processors" },
    { label: "Privacy",            href: "/legal/privacy" },
    { label: "Terms",              href: "/legal/terms" },
  ],
};
