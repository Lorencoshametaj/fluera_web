import { getCollection } from "astro:content";
import type { DocSection } from "@/components/DocSidebar.astro";
import type { Locale } from "@/lib/i18n";

const SECTION_ORDER: Record<string, number> = {
  "getting-started": 1,
  canvas: 2,
  features: 3,
  settings: 4,
  troubleshooting: 5,
  api: 2,
  adapters: 3,
  advanced: 4,
};

/**
 * Build the docs sidebar sections for a given locale. Filters by `lang` and
 * emits `/docs` or `/{locale}/docs` hrefs accordingly.
 *
 * Slug ids include the locale suffix (e.g. `welcome.it`); we strip it so
 * `/it/docs/welcome` and `/docs/welcome` share the base slug in URLs.
 */
export async function buildDocsSections(locale: Locale = "en"): Promise<DocSection[]> {
  const docs = await getCollection("docs", ({ data }) => data.lang === locale);
  const bySection = new Map<string, { label: string; links: { title: string; href: string; order: number }[] }>();

  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const stripLocaleSuffix = (id: string) =>
    locale === "en" ? id : id.replace(new RegExp(`\\.${locale}$`), "");

  for (const doc of docs) {
    const bucket = bySection.get(doc.data.section) ?? {
      label: doc.data.sectionLabel,
      links: [],
    };
    bucket.links.push({
      title: doc.data.title,
      href: `${localePrefix}/docs/${stripLocaleSuffix(doc.id)}`,
      order: doc.data.order,
    });
    bySection.set(doc.data.section, bucket);
  }

  return [...bySection.entries()]
    .sort(([a], [b]) => (SECTION_ORDER[a] ?? 99) - (SECTION_ORDER[b] ?? 99))
    .map(([slug, data]) => ({
      slug,
      label: data.label,
      links: data.links.sort((a, b) => a.order - b.order),
    }));
}

