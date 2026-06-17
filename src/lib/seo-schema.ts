// ─── Schema.org JSON-LD helpers ────────────────────────────────────────────
// Composable functions that return schema.org @type objects ready to pass to
// BaseLayout's `jsonLd` prop. Each helper handles:
//   - BCP 47 locale normalization (pt-br → pt-BR)
//   - Absolute URL coercion via SITE.url
//   - Sensible defaults for required fields (image fallback, publisher)
//
// Reference: https://schema.org/, https://developers.google.com/search/docs/appearance/structured-data
//
// Validation: paste any rendered <script type="application/ld+json"> into
// https://validator.schema.org/ — zero errors expected.

import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

// BCP-47 with region casing where Google expects it.
const BCP47: Record<Locale, string> = {
  en: "en", it: "it", es: "es", "pt-br": "pt-BR",
  fr: "fr", de: "de", ja: "ja", ko: "ko",
  hi: "hi", ar: "ar", pl: "pl", nl: "nl",
  sv: "sv", da: "da", no: "no", fi: "fi",
};

const DEFAULT_OG_IMAGE = `${SITE.url}/og/default.png`;

/** Make an absolute URL from a path or pass-through if already absolute. */
function abs(pathOrUrl: string): string {
  return pathOrUrl.startsWith("http") ? pathOrUrl : new URL(pathOrUrl, SITE.url).toString();
}

// ─── BreadcrumbList ────────────────────────────────────────────────────────
// Use on every nested page to give Google a navigation hierarchy. Renders as
// breadcrumb rich snippet in SERPs.
export function breadcrumbList(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

// ─── BlogPosting ──────────────────────────────────────────────────────────
// Required by Google for blog rich snippets: headline, image, datePublished.
// Optional but recommended: dateModified, author, publisher, mainEntityOfPage.
export function blogPosting(args: {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: string;
  canonicalUrl: string;
  imageUrl?: string;
  locale: Locale;
  keywords?: string[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    image: abs(args.imageUrl ?? DEFAULT_OG_IMAGE),
    datePublished: args.publishedAt.toISOString(),
    dateModified: (args.updatedAt ?? args.publishedAt).toISOString(),
    inLanguage: BCP47[args.locale],
    mainEntityOfPage: abs(args.canonicalUrl),
    author: { "@type": "Person", name: args.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/assets/fluera_logo_tile.png`,
      },
    },
    ...(args.keywords && args.keywords.length > 0 ? { keywords: args.keywords.join(", ") } : {}),
  };
}

// ─── Article + LearningResource (for cognitive science principles) ────────
// Chose this over Course because principles aren't actual courses (no provider,
// no instances, no enrollment). Article+LearningResource validates cleanly in
// Google Rich Results Test and grants "Article" rich snippet eligibility.
export function learningResource(args: {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl?: string;
  locale: Locale;
  fieldOfStudy?: string;
  keyYear?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    headline: args.title,
    description: args.description,
    image: abs(args.imageUrl ?? DEFAULT_OG_IMAGE),
    inLanguage: BCP47[args.locale],
    mainEntityOfPage: abs(args.canonicalUrl),
    learningResourceType: "Concept explanation",
    educationalLevel: "intermediate",
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    ...(args.fieldOfStudy ? { about: { "@type": "Thing", name: args.fieldOfStudy } } : {}),
    ...(args.keyYear ? { dateCreated: args.keyYear } : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

// ─── Person (cognitive scientists referenced in /science/authors/*) ───────
// Google Knowledge Graph eligibility — surfaces Wikipedia-style sidebar in
// SERPs when entity is well-known.
export function person(args: {
  name: string;
  shortBio: string;
  canonicalUrl: string;
  imageUrl?: string;
  externalProfile?: string;
  fields?: string[];
  years?: string;
  nobelLaureate?: boolean;
}): Record<string, unknown> {
  const sameAs = [args.externalProfile].filter((x): x is string => !!x);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: args.name,
    description: args.shortBio,
    url: abs(args.canonicalUrl),
    ...(args.imageUrl ? { image: abs(args.imageUrl) } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(args.fields && args.fields.length > 0
      ? { knowsAbout: args.fields }
      : {}),
    ...(args.years ? { description: `${args.shortBio} (${args.years})` } : {}),
    ...(args.nobelLaureate
      ? {
          award: "Nobel Prize",
          honorificPrefix: "Nobel Laureate",
        }
      : {}),
  };
}

// ─── TechArticle (for /docs/*) ─────────────────────────────────────────────
// More specific than Article for technical documentation. Helps Google
// classify content as developer/user-help rather than editorial.
export function techArticle(args: {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl?: string;
  locale: Locale;
  updatedAt?: Date;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: args.title,
    description: args.description,
    image: abs(args.imageUrl ?? DEFAULT_OG_IMAGE),
    inLanguage: BCP47[args.locale],
    mainEntityOfPage: abs(args.canonicalUrl),
    ...(args.updatedAt ? { dateModified: args.updatedAt.toISOString() } : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}
