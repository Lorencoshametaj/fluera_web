// ─── Per-page SEO compositions ─────────────────────────────────────────────
// Each helper takes a content collection entry + locale + pathname and returns
// the full JSON-LD payload (BreadcrumbList + type-specific schema) ready to
// pass to BaseLayout's `jsonLd` prop.
//
// Usage in a dynamic template (e.g. blog/[slug].astro):
//   ---
//   import { blogSeo } from "@/lib/seo-templates";
//   const seo = blogSeo({ post, locale: "en", pathname: Astro.url.pathname });
//   ---
//   <BaseLayout jsonLd={seo.jsonLd} alternates={seo.alternates} ogImage={seo.ogImage} ...>
//
// The `alternates` map is computed from the content collection so each locale
// variant of a post points to its actual localized URL (not the homepage
// fallback that languageSwitchHref() would emit).

import { SITE } from "@/lib/site";
import { LOCALES, t, type Locale } from "@/lib/i18n";
import {
  breadcrumbList,
  blogPosting,
  learningResource,
  person,
  techArticle,
} from "@/lib/seo-schema";

/** Strip the locale suffix from a content collection id (e.g. "foo.it" → "foo"). */
function stripLocaleSuffix(id: string): string {
  return id.replace(
    /\.(it|es|pt-br|fr|de|ja|ko|hi|pl|ar|nl|sv|da|no|fi)$/,
    "",
  );
}

/** Build OG image URL for a content piece. EN-only base slug, all locales share. */
function ogImageFor(type: "blog" | "features" | "principles" | "authors" | "page", baseSlug: string): string {
  return `/og/${type}/${baseSlug}.png`;
}

/** Build the absolute URL for a base slug in a given locale. */
function localePath(locale: Locale, segment: string, baseSlug: string): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/${segment}/${baseSlug}`;
}

/** Build the home URL for a locale. */
function localeHome(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}/`;
}

/**
 * Given a content collection's all-entries array and a target base slug,
 * return a Partial<Record<Locale, string>> of alternates for hreflang.
 * Only includes locales that actually have a translated entry.
 */
export function alternatesFor(
  allEntries: { id: string; data: { lang: Locale } }[],
  baseSlug: string,
  segment: string,
): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const entry of allEntries) {
    if (stripLocaleSuffix(entry.id) !== baseSlug) continue;
    out[entry.data.lang] = localePath(entry.data.lang, segment, baseSlug);
  }
  return out;
}

// ─── Blog ──────────────────────────────────────────────────────────────────
export function blogSeo(args: {
  post: {
    id: string;
    data: {
      title: string;
      description: string;
      publishedAt: Date;
      updatedAt?: Date;
      author: string;
      lang: Locale;
      tags?: string[];
    };
  };
  allPosts?: { id: string; data: { lang: Locale } }[];
  pathname: string;
  imageUrl?: string;
}) {
  const { post, allPosts, pathname, imageUrl } = args;
  const locale = post.data.lang;
  const baseSlug = stripLocaleSuffix(post.id);
  const canonicalUrl = new URL(pathname, SITE.url).toString();
  const ogImage = imageUrl ?? ogImageFor("blog", baseSlug);

  const blogHomeUrl = locale === "en" ? "/blog" : `/${locale}/blog`;

  return {
    baseSlug,
    canonicalUrl,
    ogImage,
    alternates: allPosts ? alternatesFor(allPosts, baseSlug, "blog") : undefined,
    jsonLd: [
      breadcrumbList([
        { name: t("nav.blog", locale), url: blogHomeUrl },
        { name: post.data.title, url: pathname },
      ]),
      blogPosting({
        title: post.data.title,
        description: post.data.description,
        publishedAt: post.data.publishedAt,
        updatedAt: post.data.updatedAt,
        author: post.data.author,
        canonicalUrl,
        imageUrl: ogImage,
        locale,
        keywords: post.data.tags,
      }),
    ],
  };
}

// ─── Principle (Article + LearningResource) ───────────────────────────────
export function principleSeo(args: {
  principle: {
    id: string;
    data: {
      title: string;
      shortDescription: string;
      lang: Locale;
      fieldOfStudy?: string;
      keyYear?: string;
    };
  };
  allPrinciples?: { id: string; data: { lang: Locale } }[];
  pathname: string;
  imageUrl?: string;
}) {
  const { principle, allPrinciples, pathname, imageUrl } = args;
  const locale = principle.data.lang;
  const baseSlug = stripLocaleSuffix(principle.id);
  const canonicalUrl = new URL(pathname, SITE.url).toString();
  const ogImage = imageUrl ?? ogImageFor("principles", baseSlug);

  const scienceHomeUrl = locale === "en" ? "/science" : `/${locale}/science`;
  const principlesHashUrl = `${scienceHomeUrl}#principles`;

  return {
    baseSlug,
    canonicalUrl,
    ogImage,
    alternates: allPrinciples
      ? alternatesFor(allPrinciples, baseSlug, "science/principles")
      : undefined,
    jsonLd: [
      breadcrumbList([
        { name: t("nav.science", locale), url: scienceHomeUrl },
        { name: t("nav.science.principles", locale), url: principlesHashUrl },
        { name: principle.data.title, url: pathname },
      ]),
      learningResource({
        title: principle.data.title,
        description: principle.data.shortDescription,
        canonicalUrl,
        imageUrl: ogImage,
        locale,
        fieldOfStudy: principle.data.fieldOfStudy,
        keyYear: principle.data.keyYear,
      }),
    ],
  };
}

// ─── Author (Person) ──────────────────────────────────────────────────────
export function authorSeo(args: {
  author: {
    id: string;
    data: {
      name: string;
      shortBio: string;
      lang: Locale;
      externalProfile?: string;
      fields?: string[];
      years?: string;
      nobelLaureate?: boolean;
    };
  };
  allAuthors?: { id: string; data: { lang: Locale } }[];
  pathname: string;
  imageUrl?: string;
}) {
  const { author, allAuthors, pathname, imageUrl } = args;
  const locale = author.data.lang;
  const baseSlug = stripLocaleSuffix(author.id);
  const canonicalUrl = new URL(pathname, SITE.url).toString();
  const ogImage = imageUrl ?? ogImageFor("authors", baseSlug);

  const scienceHomeUrl = locale === "en" ? "/science" : `/${locale}/science`;
  const authorsHashUrl = `${scienceHomeUrl}#authors`;

  return {
    baseSlug,
    canonicalUrl,
    ogImage,
    alternates: allAuthors
      ? alternatesFor(allAuthors, baseSlug, "science/authors")
      : undefined,
    jsonLd: [
      breadcrumbList([
        { name: t("nav.science", locale), url: scienceHomeUrl },
        { name: t("nav.science.authors", locale), url: authorsHashUrl },
        { name: author.data.name, url: pathname },
      ]),
      person({
        name: author.data.name,
        shortBio: author.data.shortBio,
        canonicalUrl,
        imageUrl: ogImage,
        externalProfile: author.data.externalProfile,
        fields: author.data.fields,
        years: author.data.years,
        nobelLaureate: author.data.nobelLaureate,
      }),
    ],
  };
}

// ─── Feature (BreadcrumbList only — no schema.org Feature type) ────────────
export function featureSeo(args: {
  feature: {
    id: string;
    data: { title: string; lang: Locale };
  };
  allFeatures?: { id: string; data: { lang: Locale } }[];
  pathname: string;
}) {
  const { feature, allFeatures, pathname } = args;
  const locale = feature.data.lang;
  const baseSlug = stripLocaleSuffix(feature.id);
  const canonicalUrl = new URL(pathname, SITE.url).toString();
  const ogImage = ogImageFor("features", baseSlug);

  const featuresHomeUrl = locale === "en" ? "/features" : `/${locale}/features`;

  return {
    baseSlug,
    canonicalUrl,
    ogImage,
    alternates: allFeatures
      ? alternatesFor(allFeatures, baseSlug, "features")
      : undefined,
    jsonLd: [
      breadcrumbList([
        { name: t("nav.features", locale), url: featuresHomeUrl },
        { name: feature.data.title, url: pathname },
      ]),
    ],
  };
}

// ─── Doc (TechArticle) ─────────────────────────────────────────────────────
export function docSeo(args: {
  doc: {
    id: string;
    data: {
      title: string;
      description: string;
      lang: Locale;
      updatedAt?: Date;
    };
  };
  allDocs?: { id: string; data: { lang: Locale } }[];
  pathname: string;
  imageUrl?: string;
}) {
  const { doc, allDocs, pathname, imageUrl } = args;
  const locale = doc.data.lang;
  const baseSlug = stripLocaleSuffix(doc.id);
  const canonicalUrl = new URL(pathname, SITE.url).toString();

  const docsHomeUrl = locale === "en" ? "/docs" : `/${locale}/docs`;

  return {
    baseSlug,
    canonicalUrl,
    alternates: allDocs ? alternatesFor(allDocs, baseSlug, "docs") : undefined,
    jsonLd: [
      breadcrumbList([
        { name: t("nav.documentation", locale), url: docsHomeUrl },
        { name: doc.data.title, url: pathname },
      ]),
      techArticle({
        title: doc.data.title,
        description: doc.data.description,
        canonicalUrl,
        imageUrl,
        locale,
        updatedAt: doc.data.updatedAt,
      }),
    ],
  };
}
