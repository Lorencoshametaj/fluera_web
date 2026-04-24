import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Locale field — added to every collection so each entry can declare
 * its language. Routes filter by the current URL locale.
 *
 * Convention for translated entries:
 *   case-against-highlighters.mdx       → lang: "en"  (default)
 *   case-against-highlighters.it.mdx    → lang: "it"  (sibling)
 *
 * Both files live in the same folder with the same base slug. The locale
 * suffix lets Astro's glob pick them up alongside each other. The [slug]
 * dynamic routes derive the base slug by stripping `.it` when present.
 */
const langField = z.enum(["en", "it"]).default("en");

// Preserve dots in IDs so `foo.it.md` becomes `foo.it` (not `fooit`).
// Astro's default generateId slugifies and strips dots.
const preserveDotsId = ({ entry }: { entry: string }) =>
  entry.replace(/\.(md|mdx)$/, "");

// ─── Authors ──────────────────────────────────────────────────────────────
const authors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    name: z.string(),
    years: z.string(),
    fields: z.array(z.string()),
    shortBio: z.string(),
    notableWork: z.string(),
    keyPrinciples: z.array(reference("principles")).default([]),
    appliedInFeatures: z.array(reference("features")).default([]),
    externalProfile: z.string().url().optional(),
    nobelLaureate: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

// ─── Science principles ───────────────────────────────────────────────────
const principles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/principles", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    title: z.string(),
    shortDescription: z.string(),
    keyYear: z.string(),
    fieldOfStudy: z.enum([
      "memory",
      "metacognition",
      "motivation",
      "embodiment",
      "neuroscience",
      "pedagogy",
    ]),
    primaryAuthors: z.array(reference("authors")).default([]),
    appliedInFeatures: z.array(reference("features")).default([]),
    keyCitations: z.array(reference("citations")).default([]),
    evidenceStrength: z
      .enum(["strong", "moderate", "emerging", "contested"])
      .default("strong"),
    order: z.number().default(100),
  }),
});

// ─── Citations (bibliographic vault) ──────────────────────────────────────
const citations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/citations", generateId: preserveDotsId }),
  schema: z.object({
    authors: z.array(z.string()),
    title: z.string(),
    year: z.number(),
    journal: z.string().optional(),
    publisher: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    type: z.enum(["paper", "book", "chapter", "preprint", "dataset"]),
    relatedPrinciples: z.array(reference("principles")).default([]),
    notes: z.string().optional(),
  }),
});

// ─── Features (cognitive) ─────────────────────────────────────────────────
const features = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/features", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    title: z.string(),
    tagline: z.string(),
    shortDescription: z.string(),
    status: z.enum(["stable", "beta", "coming-soon"]).default("beta"),
    launchedIn: z.string().optional(),
    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),
    stepInCycle: z.number().optional(),
    relatedPrinciples: z.array(reference("principles")).default([]),
    relatedAuthors: z.array(reference("authors")).default([]),
    platforms: z
      .array(z.enum(["ios", "android", "macos", "windows", "linux", "web"]))
      .default(["ios", "android", "macos", "windows", "linux", "web"]),
    order: z.number().default(100),
  }),
});

// ─── Blog ─────────────────────────────────────────────────────────────────
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    category: z.enum([
      "cognitive-science",
      "product",
      "engineering",
      "field-notes",
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    relatedPrinciples: z.array(reference("principles")).default([]),
  }),
});

// ─── Changelog ────────────────────────────────────────────────────────────
const changelog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/changelog", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    version: z.string(),
    releasedAt: z.coerce.date(),
    type: z.enum([
      "feature",
      "improvement",
      "fix",
      "experiment",
      "deprecation",
    ]),
    title: z.string(),
    summary: z.string(),
    platforms: z
      .array(z.enum(["ios", "android", "macos", "windows", "linux", "web", "all"]))
      .default(["all"]),
    breaking: z.boolean().default(false),
    relatedFeatures: z.array(reference("features")).default([]),
  }),
});

// ─── Docs (user-facing) ───────────────────────────────────────────────────
const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs", generateId: preserveDotsId }),
  schema: z.object({
    lang: langField,
    title: z.string(),
    description: z.string(),
    section: z.enum([
      "getting-started",
      "canvas",
      "features",
      "settings",
      "troubleshooting",
    ]),
    sectionLabel: z.string(),
    order: z.number().default(100),
    updatedAt: z.coerce.date().optional(),
    relatedDocs: z.array(reference("docs")).default([]),
  }),
});

export const collections = {
  authors,
  principles,
  citations,
  features,
  blog,
  changelog,
  docs,
};
