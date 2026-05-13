import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "for altid",
      tagline: "Det fulde canvas. Tre notesbøger. Gratis for altid.",
      features: [
        "Uendeligt canvas, 13 pensler, fuld håndskrifts-engine",
        "3 notesbøger, ubegrænsede sider",
        "Local-first — fuldt offline",
        "Eksport som PNG og PDF",
        "Socratic Mode-basis",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "om måneden · €49/år",
      tagline: "Fuldt canvas, sync på 2 enheder, AI-basis.",
      features: [
        "Alle pensler + ubegrænsede lag",
        "Sync på 2 enheder",
        "PDF-eksport og alle basisformater",
        "AI-basiskvota (Atlas, Ghost Map basis)",
        "Årligt for €49 (omkring €4,08/måned)",
      ],
      cta: { label: "Kom i gang med Plus", href: "/beta" },
      highlighted: true,
      badge: "Anbefalet",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "om måneden · €99/år",
      tagline: "Exam Session, Atlas, fuld AI-suite, Time Travel og ubegrænset sync.",
      features: [
        "Exam Session — simulerede eksamener fra dit canvas med hyperkorrektion-feedback",
        "Atlas kontinent-visning + Cross-Zone Bridges på tværs af alle notesbøger",
        "Fuld AI-suite (Ghost Map, Socratic, Fog of War, FSRS-scheduler)",
        "Ubegrænsede notesbøger",
        "Multi-enhed-sync med end-to-end-kryptering",
        "Time Travel med audio-synkroniseret replay",
        "Alle eksportformater (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Prioriteret e-mail-support",
        "Årligt for €99 (omkring €8,25/måned)",
      ],
      cta: { label: "Bliv Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "pr. sæde / måned · €179/år pr. sæde · fra 5 sæder",
      tagline: "Delte canvasser til studier, labs og små teams.",
      features: [
        "Alt fra Pro for hvert teammedlem",
        "Delt workspace med team-Atlas",
        "Rollebaserede tilladelser og ACL",
        "Admin-dashboard + audit-trail",
        "Team-fakturering (én faktura, moms håndteret)",
        "Prioriteret support, dedikeret onboarding",
      ],
      cta: { label: "Tal med salg", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hvorfor viser I priser, når I er i closed beta?",
      a: "Det er V1-priserne. Den, der tegner abonnement nu, fryser sin egen plans takst for hele abonnementsperioden — også selvom prislisten stiger senere.",
    },
    {
      q: "Hvordan virker studieverifikationen?",
      a: "Du opretter dig med en .edu-, .ac.uk- eller verificeret akademisk e-mail. Hvis dit universitet ikke bruger et akademisk domæne (almindeligt i DK), accepterer vi et scannet studiekort, ISIC eller en engangsmail fra studieadministrationen.",
    },
    {
      q: "Hvad sker der med mine notesbøger, hvis jeg opsiger Plus eller Pro?",
      a: "Notesbøgerne bliver liggende på din enhed, og du lander i Free-niveauet igen. Du beholder de første tre; resten bliver skrivebeskyttet, indtil du reaktiverer eller eksporterer dem. Intet bliver slettet uden din udtrykkelige handling.",
    },
    {
      q: "Er der en returret?",
      a: "Ja — 30 dage, ingen spørgsmål stillet, på både måneds- og årsplaner. Skriv til support@fluera.dev fra den adresse, du oprettede dig med.",
    },
    {
      q: "Kan jeg self-hoste Fluera?",
      a: "Den local-first-del kører allerede fuldt offline på alle seks platforme i dag. Self-hosting af cloud-sync ligger på Education-roadmappen (on-prem, SSO, audit-trail) — endnu ikke tilgængelig.",
    },
    {
      q: "Tilbyder I rabatter til forskere eller non-profits?",
      a: "Ja. Forskningslabs, ph.d.-programmer og registrerede non-profits kan ansøge på /contact. Vi vurderer fra sag til sag og giver typisk Pro til studie-pris eller gratis i bytte for struktureret feedback.",
    },
    {
      q: "Hvorfor er der ikke en gratis prøveperiode på Plus eller Pro?",
      a: "Free-niveauet er ikke et kastreret marketing-produkt — det er det fulde canvas. Brug det, så længe du vil. Plus og Pro låser AI og sync op, og de har løbende cloud-omkostninger, vi ikke kan forære væk.",
    },
    {
      q: "Hvilke betalingsmetoder accepterer I?",
      a: "Kredit- og debetkort via Stripe (alle store mærker), SEPA for EU-kunder, Apple Pay og Google Pay. Education-kunder kan betale med bankoverførsel eller indkøbsordre (purchase order).",
    },
  ],
};

export default data;
