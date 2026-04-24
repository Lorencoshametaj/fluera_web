import { getCollection } from "astro:content";
import type { DocSection } from "@/components/DocSidebar.astro";

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

export async function buildDocsSections(): Promise<DocSection[]> {
  const docs = await getCollection("docs");
  const bySection = new Map<string, { label: string; links: { title: string; href: string; order: number }[] }>();

  for (const doc of docs) {
    const bucket = bySection.get(doc.data.section) ?? {
      label: doc.data.sectionLabel,
      links: [],
    };
    bucket.links.push({
      title: doc.data.title,
      href: `/docs/${doc.id}`,
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

