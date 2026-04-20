export const SITE = {
  name: "Fluera",
  domain: "fluera.dev",
  url: "https://fluera.dev",
  defaultLocale: "en" as const,
  locales: ["en", "it"] as const,
  description:
    "An infinite handwriting canvas with a cognitive engine inside. iOS, Android, macOS, Windows, Linux, Web. Built on memory science, not on note-taking habits.",
  tagline: "The study space your brain was built for.",
  company: {
    legalName: "Fluera srl",
    city: "Milan, Italy",
    contactEmail: "hello@fluera.dev",
    privacyEmail: "privacy@fluera.dev",
    securityEmail: "security@fluera.dev",
    supportEmail: "support@fluera.dev",
    twitter: "fluera_app",
    github: "looponia/fluera_engine",
  },
  social: {
    twitter: "https://twitter.com/fluera_app",
    github: "https://github.com/looponia/fluera_engine",
  },
};

export const PRIMARY_NAV = [
  { label: "Science",   href: "/science",   kind: "page" as const },
  { label: "Features",  href: "/features",  kind: "page" as const },
  { label: "Education", href: "/education", kind: "page" as const },
  { label: "Pricing",   href: "/pricing",   kind: "page" as const },
];

export const PRIMARY_CTA = {
  label: "Join the beta",
  href: "/beta",
};

// ── Locale routing ────────────────────────────────────────────────────
// Paths that have an Italian translation at `/it/<path>`.
// Used by the Nav language switcher + by localizedHref() to keep
// IT visitors inside IT when navigating between pages that exist in both.
export const IT_AVAILABLE_PATHS = new Set<string>([
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/contact/sales",
  "/download",
  "/engine",
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

/** `/beta` is IT-native at root, not under /it/. */
export const IT_NATIVE_PATHS = new Set<string>([
  "/beta",
  "/legal/privacy",
  "/legal/terms",
]);

/**
 * Rewrite an internal href to its Italian version when the visitor is on an
 * IT page AND the target has an Italian translation at /it/<path>.
 * Falls back to the EN href otherwise (we don't have IT for every page).
 */
export function localizedHref(href: string, isItalian: boolean): string {
  if (!isItalian) return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  // Already prefixed, IT-native, or external hash — leave as-is.
  if (href.startsWith("/it/") || href === "/it") return href;

  // Split off hash + query for matching the bare path.
  const [bare, ...rest] = href.split(/([#?])/);
  const path = bare === "" ? "/" : bare;

  if (IT_NATIVE_PATHS.has(path)) return href;
  if (IT_AVAILABLE_PATHS.has(path)) {
    const prefix = path === "/" ? "/it/" : `/it${path}`;
    return prefix + rest.join("");
  }
  return href;
}

export const FOOTER_NAV = {
  product: [
    { label: "Features",           href: "/features" },
    { label: "Download",           href: "/download" },
    { label: "Pricing",            href: "/pricing" },
    { label: "Live demo",          href: "/demo", external: true },
    { label: "Engine SDK",         href: "/engine" },
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
