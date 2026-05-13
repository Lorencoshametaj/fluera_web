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

export interface HomeData {
  steps: LearningStep[];
  authors: AuthorEntry[];
  platforms: Platform[];
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
