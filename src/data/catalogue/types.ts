export type CatalogueAction = {
  href: string;
  kind: "btn-primary" | "btn-secondary";
  label: string;
};

export type CatalogueSection = {
  kicker: string;
  title: string;
  sub: string;
};

export type CatalogueTextItem = {
  title: string;
  body: string;
};

export type CatalogueLabelItem = {
  label: string;
  body: string;
};

export type CatalogueData = {
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  jsonLd: Record<string, unknown>;
  hero: {
    kicker: string;
    title: string;
    description: string;
    actions: CatalogueAction[];
  };
  unit: CatalogueSection & {
    items: CatalogueTextItem[];
  };
  install: {
    kicker: string;
    title: string;
    paragraphs: string[];
    steps: Array<CatalogueTextItem & { step: string }>;
  };
  ranking: CatalogueSection & {
    items: CatalogueLabelItem[];
    note: string;
  };
  discovery: CatalogueSection & {
    paragraphs: string[];
    marksHeading: string;
    marks: Array<{ mark: string; body: string }>;
    note: string;
  };
  privacy: CatalogueSection & {
    items: CatalogueTextItem[];
    action: { href: string; label: string };
  };
  creators: {
    kicker: string;
    title: string;
    paragraphs: string[];
    heading: string;
    benefits: string[];
    note: string;
  };
  safety: CatalogueSection & {
    items: CatalogueLabelItem[];
  };
  status: {
    kicker: string;
    title: string;
    paragraphs: string[];
    actions: CatalogueAction[];
  };
};
