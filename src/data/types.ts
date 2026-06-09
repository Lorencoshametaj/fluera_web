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
  comparison: ComparisonData;
  medicalUseCase: MedicalUseCase;
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
