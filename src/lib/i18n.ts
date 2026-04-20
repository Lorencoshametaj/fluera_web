/**
 * i18n dictionary for UI strings (EN + IT).
 *
 * Scope: nav labels, footer labels, CTAs, repeated section eyebrows,
 * common button text, form labels, status pills, error messages.
 *
 * Not for: long-form page copy (that lives in .astro files per locale),
 * content collections (that use the `lang` frontmatter field),
 * brand terms that stay in English everywhere (Ghost Map, Socratic Mode, etc.).
 *
 * Usage:
 *   import { t, type Locale } from "@/lib/i18n";
 *   const label = t("nav.science", "it");   // "Scienza"
 */

export type Locale = "en" | "it";
export const LOCALES: readonly Locale[] = ["en", "it"] as const;
export const DEFAULT_LOCALE: Locale = "en";

/** Detect the locale from a URL pathname. */
export function localeFromPathname(pathname: string): Locale {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/it" || p.startsWith("/it/")) return "it";
  return "en";
}

/**
 * Brand terms that stay in English across all locales (feature names, tech).
 * Used so Italian pages can show "Ghost Map · Passo 4" and keep the feature
 * name untouched.
 */
export const BRAND_TERMS = {
  ghostMap: "Ghost Map",
  socraticMode: "Socratic Mode",
  fogOfWar: "Fog of War",
  timeTravel: "Time Travel",
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

type Dict = Record<string, string>;
type Dictionaries = Record<Locale, Dict>;

/** Master string table. Add keys here; both locales must define the key. */
const strings: Dictionaries = {
  en: {
    // ── Nav ─────────────────────────────────────────────────────────────
    "nav.science":          "Science",
    "nav.features":         "Features",
    "nav.education":        "Education",
    "nav.pricing":          "Pricing",
    "nav.engine":           "Engine",
    "nav.engineSDK":        "Engine SDK",
    "nav.blog":             "Blog",
    "nav.changelog":        "Changelog",
    "nav.documentation":    "Documentation",
    "nav.openMenu":         "Open menu",
    "nav.closeMenu":        "Close menu",
    "nav.language":         "Language",
    "nav.primary":          "Primary",
    "nav.mobile":           "Mobile",
    "nav.skipToContent":    "Skip to main content",

    // Science dropdown
    "nav.science.cycle":        "The 12-step cycle",
    "nav.science.principles":   "Principles",
    "nav.science.authors":      "Authors",
    "nav.science.bibliography": "Bibliography",

    // Features dropdown
    "nav.features.ghostMap":          "Ghost Map",
    "nav.features.socratic":          "Socratic Mode",
    "nav.features.fogOfWar":          "Fog of War",
    "nav.features.timeTravel":        "Time Travel",
    "nav.features.spacedRepetition":  "Spaced Repetition",
    "nav.features.memoryPalace":      "Memory Palace",
    "nav.features.all":               "All features →",

    // ── Footer ──────────────────────────────────────────────────────────
    "footer.tagline":          "The study space your brain was built for.",
    "footer.col.product":      "Product",
    "footer.col.science":      "Science",
    "footer.col.company":      "Company",
    "footer.col.trust":        "Trust",

    "footer.product.features":     "Features",
    "footer.product.download":     "Download",
    "footer.product.pricing":      "Pricing",
    "footer.product.demo":         "Live demo",
    "footer.product.engine":       "Engine SDK",
    "footer.product.changelog":    "Changelog",

    "footer.science.cycle":         "The 12-step cycle",
    "footer.science.principles":    "All principles",
    "footer.science.authors":       "Authors",
    "footer.science.bibliography":  "Bibliography",

    "footer.company.about":         "About",
    "footer.company.manifesto":     "Manifesto",
    "footer.company.blog":          "Blog",
    "footer.company.contact":       "Contact",
    "footer.company.sales":         "Education sales",
    "footer.company.beta":          "Beta program",

    "footer.trust.security":        "Security",
    "footer.trust.architecture":    "Architecture",
    "footer.trust.subprocessors":   "Sub-processors",
    "footer.trust.privacy":         "Privacy",
    "footer.trust.terms":           "Terms",

    // ── CTAs ────────────────────────────────────────────────────────────
    "cta.joinBeta":             "Join the beta",
    "cta.requestAccess":        "Request access →",
    "cta.tryInBeta":            "Try it in the beta →",
    "cta.tryLiveDemo":          "Try the live demo",
    "cta.watchDemo":            "Watch the demo",
    "cta.readScience":          "Read the science",
    "cta.exploreScience":       "Explore the science →",
    "cta.readResearch":         "Read the research",
    "cta.readBibliography":     "Read the bibliography",
    "cta.seeFullPricing":       "See full pricing →",
    "cta.seeAllFeatures":       "See all features →",
    "cta.backToFeatures":       "← Back to all features",
    "cta.backToScience":        "← Back to the science",
    "cta.backToPrinciples":     "← Back to all principles",
    "cta.readSecurity":         "Read our security architecture →",
    "cta.readDPA":              "Read our DPA",
    "cta.talkToUs":             "Talk to us",
    "cta.talkAboutDeployment":  "Talk to us about deployment →",
    "cta.bookFaculty":          "Book a faculty demo →",
    "cta.bookFacultyConvo":     "Book a faculty conversation →",
    "cta.startPilot":           "Start a pilot conversation →",
    "cta.requestPricing":       "Request pricing brief →",
    "cta.readDocs":             "Read the docs →",
    "cta.viewOnGitHub":         "View on GitHub",
    "cta.emailTeam":            "Email the team →",
    "cta.exploreEngine":        "Explore the engine →",
    "cta.getInTouch":           "Get in touch",
    "cta.contactSales":         "Contact sales",
    "cta.sendMessage":          "Send →",
    "cta.deepDive":             "Deep dive →",

    // ── Status pills ────────────────────────────────────────────────────
    "status.available":   "Available now",
    "status.beta":        "In beta",
    "status.comingSoon":  "Coming soon",
    "status.alpha":       "Alpha",
    "status.demo":        "Demo",

    // ── Eyebrows / section labels ───────────────────────────────────────
    "eyebrow.theMethod":            "The method",
    "eyebrow.theBottleneck":        "The bottleneck",
    "eyebrow.theScience":           "The science",
    "eyebrow.theLoop":              "The loop",
    "eyebrow.theLine":              "The line",
    "eyebrow.pricing":              "Pricing",
    "eyebrow.contact":              "Contact",
    "eyebrow.about":                "About",
    "eyebrow.security":             "Security & privacy",
    "eyebrow.architecture":         "Architecture",
    "eyebrow.subprocessors":        "Sub-processors",
    "eyebrow.research":             "Research",
    "eyebrow.features":             "Features",
    "eyebrow.pressKit":             "Press",
    "eyebrow.joinUs":               "Join us",
    "eyebrow.forDevelopers":        "For developers",
    "eyebrow.transparency":         "Transparency",
    "eyebrow.caseStudies":          "Case studies",
    "eyebrow.caseStudiesBreadcrumb":"Education",
    "eyebrow.whyNow":               "Why this matters now",
    "eyebrow.scientificFoundation": "Scientific foundation",
    "eyebrow.authorsEyebrow":       "The minds behind the method",
    "eyebrow.changelog":            "Changelog",
    "eyebrow.blog":                 "Blog",
    "eyebrow.manifesto":            "Manifesto",
    "eyebrow.download":             "Download",

    // ── Common breadcrumbs ─────────────────────────────────────────────
    "breadcrumb.blog":        "Blog",
    "breadcrumb.features":    "Features",
    "breadcrumb.science":     "Science",
    "breadcrumb.security":    "Security",
    "breadcrumb.principles":  "Principles",
    "breadcrumb.authors":     "Authors",
    "breadcrumb.education":   "Education",

    // ── Form labels / placeholders (common ones) ────────────────────────
    "form.email":               "Email",
    "form.emailPlaceholder":    "you@university.edu",
    "form.name":                "Your name",
    "form.nameOptional":        "Name (optional)",
    "form.namePlaceholder":     "What should we call you?",
    "form.required":            "required",
    "form.role":                "Role",
    "form.selectOption":        "Select…",
    "form.submit":              "Submit",
    "form.sending":             "Sending…",

    // ── Misc ────────────────────────────────────────────────────────────
    "misc.relatedPrinciples":   "Related principles",
    "misc.relatedAuthors":      "Related authors",
    "misc.byAuthor":            "By",
    "misc.updatedOn":           "Updated",
    "misc.since":               "Since",
    "misc.nobelLaureate":       "Nobel laureate",
    "misc.nobel":               "Nobel",
    "misc.page":                "Page",
  },

  it: {
    // ── Nav ─────────────────────────────────────────────────────────────
    "nav.science":          "Scienza",
    "nav.features":         "Funzioni",
    "nav.education":        "Istituzioni",
    "nav.pricing":          "Prezzi",
    "nav.engine":           "Engine",
    "nav.engineSDK":        "Engine SDK",
    "nav.blog":             "Blog",
    "nav.changelog":        "Note di rilascio",
    "nav.documentation":    "Documentazione",
    "nav.openMenu":         "Apri menu",
    "nav.closeMenu":        "Chiudi menu",
    "nav.language":         "Lingua",
    "nav.primary":          "Principale",
    "nav.mobile":           "Mobile",
    "nav.skipToContent":    "Vai al contenuto",

    // Science dropdown
    "nav.science.cycle":        "Il ciclo in 12 passi",
    "nav.science.principles":   "Principi",
    "nav.science.authors":      "Autori",
    "nav.science.bibliography": "Bibliografia",

    // Features dropdown (keep English brand names)
    "nav.features.ghostMap":          "Ghost Map",
    "nav.features.socratic":          "Socratic Mode",
    "nav.features.fogOfWar":          "Fog of War",
    "nav.features.timeTravel":        "Time Travel",
    "nav.features.spacedRepetition":  "Ripetizione spaziata",
    "nav.features.memoryPalace":      "Palazzo della Memoria",
    "nav.features.all":               "Tutte le funzioni →",

    // ── Footer ──────────────────────────────────────────────────────────
    "footer.tagline":          "Lo spazio di studio per come funziona davvero la mente.",
    "footer.col.product":      "Prodotto",
    "footer.col.science":      "Scienza",
    "footer.col.company":      "Azienda",
    "footer.col.trust":        "Garanzie",

    "footer.product.features":     "Funzioni",
    "footer.product.download":     "Scarica",
    "footer.product.pricing":      "Prezzi",
    "footer.product.demo":         "Demo live",
    "footer.product.engine":       "Engine SDK",
    "footer.product.changelog":    "Note di rilascio",

    "footer.science.cycle":         "Il ciclo in 12 passi",
    "footer.science.principles":    "Tutti i principi",
    "footer.science.authors":       "Autori",
    "footer.science.bibliography":  "Bibliografia",

    "footer.company.about":         "Chi siamo",
    "footer.company.manifesto":     "Manifesto",
    "footer.company.blog":          "Blog",
    "footer.company.contact":       "Contatti",
    "footer.company.sales":         "Vendite istituzionali",
    "footer.company.beta":          "Beta privata",

    "footer.trust.security":        "Sicurezza",
    "footer.trust.architecture":    "Architettura",
    "footer.trust.subprocessors":   "Sub-processor",
    "footer.trust.privacy":         "Privacy",
    "footer.trust.terms":           "Termini",

    // ── CTAs ────────────────────────────────────────────────────────────
    "cta.joinBeta":             "Entra nella beta",
    "cta.requestAccess":        "Richiedi l'accesso →",
    "cta.tryInBeta":            "Provalo nella beta →",
    "cta.tryLiveDemo":          "Prova la demo live",
    "cta.watchDemo":            "Guarda la demo",
    "cta.readScience":          "Leggi la scienza",
    "cta.exploreScience":       "Esplora la scienza →",
    "cta.readResearch":         "Leggi la ricerca",
    "cta.readBibliography":     "Leggi la bibliografia",
    "cta.seeFullPricing":       "Vedi tutti i prezzi →",
    "cta.seeAllFeatures":       "Vedi tutte le funzioni →",
    "cta.backToFeatures":       "← Torna alle funzioni",
    "cta.backToScience":        "← Torna alla scienza",
    "cta.backToPrinciples":     "← Torna ai principi",
    "cta.readSecurity":         "Leggi l'architettura di sicurezza →",
    "cta.readDPA":              "Leggi il nostro DPA",
    "cta.talkToUs":             "Parliamone",
    "cta.talkAboutDeployment":  "Parliamone per il deploy →",
    "cta.bookFaculty":          "Prenota una demo accademica →",
    "cta.bookFacultyConvo":     "Prenota una chiamata accademica →",
    "cta.startPilot":           "Avvia un progetto pilota →",
    "cta.requestPricing":       "Richiedi il brief prezzi →",
    "cta.readDocs":             "Leggi la documentazione →",
    "cta.viewOnGitHub":         "Vedi su GitHub",
    "cta.emailTeam":            "Scrivi al team →",
    "cta.exploreEngine":        "Esplora l'engine →",
    "cta.getInTouch":           "Contattaci",
    "cta.contactSales":         "Parla con le vendite",
    "cta.sendMessage":          "Invia →",
    "cta.deepDive":             "Approfondisci →",

    // ── Status pills ────────────────────────────────────────────────────
    "status.available":   "Disponibile",
    "status.beta":        "In beta",
    "status.comingSoon":  "In arrivo",
    "status.alpha":       "Alpha",
    "status.demo":        "Demo",

    // ── Eyebrows / section labels ───────────────────────────────────────
    "eyebrow.theMethod":            "Il metodo",
    "eyebrow.theBottleneck":        "Il collo di bottiglia",
    "eyebrow.theScience":           "La scienza",
    "eyebrow.theLoop":              "Il ciclo",
    "eyebrow.theLine":              "La linea",
    "eyebrow.pricing":              "Prezzi",
    "eyebrow.contact":              "Contatti",
    "eyebrow.about":                "Chi siamo",
    "eyebrow.security":             "Sicurezza e privacy",
    "eyebrow.architecture":         "Architettura",
    "eyebrow.subprocessors":        "Sub-processor",
    "eyebrow.research":             "Ricerca",
    "eyebrow.features":             "Funzioni",
    "eyebrow.pressKit":             "Press",
    "eyebrow.joinUs":               "Unisciti a noi",
    "eyebrow.forDevelopers":        "Per sviluppatori",
    "eyebrow.transparency":         "Trasparenza",
    "eyebrow.caseStudies":          "Case study",
    "eyebrow.caseStudiesBreadcrumb":"Istituzioni",
    "eyebrow.whyNow":               "Perché oggi",
    "eyebrow.scientificFoundation": "Fondamenti scientifici",
    "eyebrow.authorsEyebrow":       "Le menti dietro il metodo",
    "eyebrow.changelog":            "Note di rilascio",
    "eyebrow.blog":                 "Blog",
    "eyebrow.manifesto":            "Manifesto",
    "eyebrow.download":             "Scarica",

    // ── Common breadcrumbs ─────────────────────────────────────────────
    "breadcrumb.blog":        "Blog",
    "breadcrumb.features":    "Funzioni",
    "breadcrumb.science":     "Scienza",
    "breadcrumb.security":    "Sicurezza",
    "breadcrumb.principles":  "Principi",
    "breadcrumb.authors":     "Autori",
    "breadcrumb.education":   "Istituzioni",

    // ── Form labels / placeholders (common ones) ────────────────────────
    "form.email":               "Email",
    "form.emailPlaceholder":    "tu@universita.it",
    "form.name":                "Il tuo nome",
    "form.nameOptional":        "Nome (opzionale)",
    "form.namePlaceholder":     "Come ti chiamiamo?",
    "form.required":            "obbligatorio",
    "form.role":                "Ruolo",
    "form.selectOption":        "Seleziona…",
    "form.submit":              "Invia",
    "form.sending":             "Invio in corso…",

    // ── Misc ────────────────────────────────────────────────────────────
    "misc.relatedPrinciples":   "Principi collegati",
    "misc.relatedAuthors":      "Autori collegati",
    "misc.byAuthor":            "di",
    "misc.updatedOn":           "Aggiornato",
    "misc.since":               "Da",
    "misc.nobelLaureate":       "Premio Nobel",
    "misc.nobel":               "Nobel",
    "misc.page":                "Pagina",
  },
};

/**
 * Look up a localized string. Falls back to English if the key is missing
 * in the target locale (rare but safe), and returns the key itself if
 * missing in EN too (so we notice the gap).
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  return strings[locale]?.[key] ?? strings.en[key] ?? key;
}

/** Small helper for translating a tuple `{ en: string; it: string }`. */
export function pickLocale<T>(variants: Record<Locale, T>, locale: Locale): T {
  return variants[locale] ?? variants.en;
}
