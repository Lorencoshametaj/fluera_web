export interface LearningStep {
  n: number;
  title: string;
  verb: string;
  description: string;
}

export interface AuthorEntry {
  name: string;
  contribution: string;
  year: string;
  nobel?: boolean;
}

export interface Platform {
  name: string;
  api: string;
  status: string;
}

export interface ComparisonRow {
  feature: string;
  fluera: string;
  goodNotes: string;
  notion: string;
  anki: string;
}

export interface ComparisonData {
  kicker: string;
  title: string;
  sub: string;
  columns: { fluera: string; goodNotes: string; notion: string; anki: string };
  rows: ComparisonRow[];
  footnote: string;
}

export interface MedicalUseCaseStep {
  phase: string;
  title: string;
  description: string;
}

export interface MedicalUseCase {
  kicker: string;
  title: string;
  intro: string;
  steps: MedicalUseCaseStep[];
  closing: string;
}

export interface HomeData {
  steps: LearningStep[];
  authors: AuthorEntry[];
  platforms: Platform[];
  /** Long-form comparison table. Lives on the comparison surfaces, not the home. */
  comparison?: ComparisonData;
  medicalUseCase: MedicalUseCase;
}

/** One of the four cognitive pillars on the home page. Structure (link target and
 *  visual) is owned by the component; only the words are per-locale. */
export interface HomePillarCopy {
  label: string;
  title: string;
  description: string;
  citation: string;
}

/** Every word on the premium home page, for one locale. The step numbers, the
 *  link targets and the visuals are structural and stay in PremiumHome.astro. */
export interface HomeCopy {
  beta: string;
  titleA: string;
  titleB: string;
  intro: string;
  category: string;
  primary: string;
  secondary: string;
  noTracking: string;
  private: string;
  /** Four [value, label] pairs for the proof rail. */
  proof: [string, string][];
  flowKicker: string;
  flowTitle: string;
  flowBody: string;
  /** Four [title, body] pairs: ink → concepts → atlas → recall. */
  flow: [string, string][];
  previewBadge: string;
  previewTitle: string;
  previewBody: string;
  previewLabel: string;
  pillarsKicker: string;
  pillarsTitle: string;
  pillars: HomePillarCopy[];
  trustKicker: string;
  trustTitle: string;
  trustBody: string;
  scienceLink: string;
  securityTitle: string;
  securityBody: string;
  securityLink: string;
  platformKicker: string;
  platformTitle: string;
  platformBody: string;
  pricingKicker: string;
  pricingTitle: string;
  pricingLink: string;
  finalKicker: string;
  finalTitle: string;
  finalBody: string;
  finalCta: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PricingData {
  tiers: PricingTier[];
  faq: FaqItem[];
}
