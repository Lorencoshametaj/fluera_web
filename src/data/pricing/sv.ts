import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "för alltid",
      tagline: "Hela canvasen. Tre anteckningsböcker. Gratis för alltid.",
      features: [
        "Oändlig canvas, 13 penslar, fullständig handskriftsmotor",
        "3 anteckningsböcker, obegränsade sidor",
        "Local-first — helt offline",
        "Export till PNG och PDF",
        "Socratic Mode bas",
      ],
      cta: { label: "Börja gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per månad · €49/år",
      tagline: "Hela canvasen, sync på 2 enheter, AI bas.",
      features: [
        "Alla penslar + obegränsade lager",
        "Sync på 2 enheter",
        "PDF-export och alla basformat",
        "AI-baskvot (Atlas, Ghost Map bas)",
        "Årligt för €49 (cirka €4,08/månad)",
      ],
      cta: { label: "Börja med Plus", href: "/beta" },
      highlighted: true,
      badge: "Rekommenderas",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per månad · €99/år",
      tagline: "Exam Session, Atlas, hela AI-sviten, Time Travel och obegränsad sync.",
      features: [
        "Exam Session — simulerade tentor från din canvas med hyperkorrigering-feedback",
        "Atlas kontinentvy + Cross-Zone Bridges över alla anteckningsböcker",
        "Hela AI-sviten (Ghost Map, Socratic, Fog of War, FSRS-schemaläggare)",
        "Obegränsade anteckningsböcker",
        "Multi-enhets-sync med kryptering ände till ände",
        "Time Travel med ljudsynkroniserat replay",
        "Alla exportformat (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Prioriterad e-postsupport",
        "Årligt för €99 (cirka €8,25/månad)",
      ],
      cta: { label: "Bli Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "per seat / månad · €179/år per seat · från 5 seats",
      tagline: "Delade canvases för studior, labb och små team.",
      features: [
        "Allt från Pro för varje teammedlem",
        "Delad arbetsyta med team-Atlas",
        "Rollbaserade behörigheter och ACL",
        "Admin-dashboard + revisionsspår",
        "Teamfakturering (en faktura, moms hanterad)",
        "Prioriterad support, dedikerad onboarding",
      ],
      cta: { label: "Prata med säljteamet", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Varför visar ni priser om ni är i sluten beta?",
      a: "Det är V1-priserna. Den som tecknar nu låser sin plans pris för hela prenumerationens längd — även om prislistan höjs senare.",
    },
    {
      q: "Hur fungerar studentverifieringen?",
      a: "Du registrerar dig med en .edu, .ac.uk eller verifierad akademisk e-postadress. Om ditt universitet inte använder en akademisk domän (vanligt i Sverige) accepterar vi ett scannat studentkort, ISIC eller ett engångsmejl från studentexpeditionen.",
    },
    {
      q: "Vad händer med mina anteckningsböcker om jag säger upp Plus eller Pro?",
      a: "Anteckningsböckerna stannar på din enhet och du går tillbaka till Free-nivån. Du behåller de tre första; de övriga blir skrivskyddade tills du återaktiverar eller exporterar dem. Inget raderas utan en uttrycklig handling från dig.",
    },
    {
      q: "Finns det en återbetalningspolicy?",
      a: "Ja — 30 dagar, utan frågor, för månads- och årsplaner. Skriv till support@fluera.dev från adressen du registrerade dig med.",
    },
    {
      q: "Kan jag self-hosta Fluera?",
      a: "Local-first-delen körs redan helt offline på alla sex plattformar. Self-hosting av cloud sync ligger på Education-roadmappen (on-prem, SSO, revisionsspår) — inte tillgängligt i dag.",
    },
    {
      q: "Erbjuder ni rabatt för forskare eller ideella organisationer?",
      a: "Ja. Forskningslabb, doktorandprogram och registrerade ideella organisationer kan begära det på /contact. Vi bedömer från fall till fall och ger oftast Pro till studentpris, eller gratis i utbyte mot strukturerad feedback.",
    },
    {
      q: "Varför finns det ingen gratis testperiod för Plus eller Pro?",
      a: "Free-nivån är inte en avskalad marknadsföringsprodukt — den är hela canvasen. Använd den så länge du vill. Plus och Pro låser upp AI och sync, som har löpande molnkostnader vi inte kan ge bort.",
    },
    {
      q: "Vilka betalningssätt accepterar ni?",
      a: "Kredit- och betalkort via Stripe (alla större varumärken), SEPA för EU-kunder, Apple Pay och Google Pay. Education-kunder kan betala via banköverföring eller inköpsorder.",
    },
  ],
};

export default data;
