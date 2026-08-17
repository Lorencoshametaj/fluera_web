import type { VisualKind } from "@/components/ProductVisual.astro";

const LOCALE_SUFFIX = new RegExp(
  `\\.(${[
    "it",
    "es",
    "pt-br",
    "fr",
    "de",
    "ja",
    "ko",
    "hi",
    "pl",
    "ar",
    "nl",
    "sv",
    "da",
    "no",
    "fi",
  ].join("|")})$`,
);

/** Return the public slug for a translated content entry. */
export function baseFeatureSlug(id: string): string {
  return id.replace(LOCALE_SUFFIX, "");
}

/**
 * Every feature is rendered as a lens over Fluera's same continuous canvas.
 * ProductVisual currently has dedicated lenses for the five core modes; the
 * remaining features use the unmodified canvas geography.
 */
export function featureVisualKind(id: string): VisualKind {
  const slug = baseFeatureSlug(id);

  if (slug === "atlas") return "atlas";
  if (slug === "ghost-map") return "ghost";
  if (slug === "socratic-mode") return "socratic";
  if (slug === "fog-of-war") return "fog";
  if (slug === "exam-session") return "exam";
  return "canvas";
}
