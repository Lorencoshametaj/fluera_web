import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "voor altijd",
      tagline: "Het volledige canvas. Drie notitieboeken. Voor altijd gratis.",
      features: [
        "Oneindig canvas, 13 kwasten, volledige handschriftengine",
        "3 notitieboeken, onbeperkte pagina's",
        "Local-first — volledig offline",
        "Export naar PNG en PDF",
        "Socratic Mode basis",
      ],
      cta: { label: "Gratis beginnen", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per maand · €49/jaar",
      tagline: "Volledig canvas, sync op 2 apparaten, basis-AI.",
      features: [
        "Alle kwasten + onbeperkte lagen",
        "Sync op 2 apparaten",
        "PDF-export en alle basisformaten",
        "Basis-AI-quotum (Atlas, Ghost Map basis)",
        "Jaarlijks voor €49 (ongeveer €4,08/maand)",
      ],
      cta: { label: "Beginnen met Plus", href: "/beta" },
      highlighted: true,
      badge: "Aanbevolen",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per maand · €99/jaar",
      tagline: "Exam Session, Atlas, volledige AI-suite, Time Travel en onbeperkte sync.",
      features: [
        "Exam Session — gesimuleerde tentamens uit je canvas met hypercorrectie-feedback",
        "Atlas-continentaanzicht + Cross-Zone Bridges over alle notitieboeken",
        "Volledige AI-suite (Ghost Map, Socratic, Fog of War, FSRS-scheduler)",
        "Onbeperkte notitieboeken",
        "Multi-device sync met end-to-end-versleuteling",
        "Time Travel met audio-gesynchroniseerde replay",
        "Alle exportformaten (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Prioriteit-e-mailsupport",
        "Jaarlijks voor €99 (ongeveer €8,25/maand)",
      ],
      cta: { label: "Pro worden", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "per seat / maand · €179/jaar per seat · vanaf 5 seats",
      tagline: "Gedeelde canvases voor studio's, labs en kleine teams.",
      features: [
        "Alles uit Pro voor elk teamlid",
        "Gedeelde workspace met team-Atlas",
        "Op rollen gebaseerde rechten en ACL",
        "Admin-dashboard + audit-trail",
        "Teamfacturatie (één factuur, btw afgehandeld)",
        "Prioriteitsupport, dedicated onboarding",
      ],
      cta: { label: "Praat met sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Waarom tonen jullie prijzen terwijl jullie in closed beta zitten?",
      a: "Dit zijn de V1-prijzen. Wie nu intekent, zet het tarief van het eigen plan vast voor de volledige duur van het abonnement — ook als de prijslijst later stijgt.",
    },
    {
      q: "Hoe werkt de studentenverificatie?",
      a: "Je registreert je met een .edu-, .ac.uk- of geverifieerd academisch e-mailadres. Als jouw universiteit geen academisch domein gebruikt, accepteren we een gescande studentenpas, ISIC of een eenmalige mail van het studentenadministratiekantoor.",
    },
    {
      q: "Wat gebeurt er met mijn notitieboeken als ik Plus of Pro opzeg?",
      a: "De notitieboeken blijven op je apparaat en je belandt weer in de Free-tier. Je behoudt de eerste drie; de overige worden alleen-lezen totdat je reactiveert of ze exporteert. Niets wordt verwijderd zonder uitdrukkelijke actie van jouw kant.",
    },
    {
      q: "Is er een terugbetalingsregeling?",
      a: "Ja — 30 dagen, zonder vragen, voor maand- en jaarplannen. Schrijf naar support@fluera.dev vanaf het adres waarmee je je hebt geregistreerd.",
    },
    {
      q: "Kan ik Fluera zelf hosten?",
      a: "Het local-first deel draait vandaag al volledig offline op alle zes platforms. Self-hosting van de cloud-sync staat op de Education-roadmap (on-prem, SSO, audit-trail) — vandaag nog niet beschikbaar.",
    },
    {
      q: "Bieden jullie kortingen voor onderzoekers of non-profits?",
      a: "Ja. Onderzoekslabs, promotieprogramma's en geregistreerde non-profits kunnen dit aanvragen via /contact. We beslissen per geval en geven doorgaans Pro tegen de studentenprijs of gratis in ruil voor gestructureerde feedback.",
    },
    {
      q: "Waarom is er geen gratis proefperiode voor Plus of Pro?",
      a: "De Free-tier is geen uitgekleed marketingproduct — het is het volledige canvas. Gebruik het zo lang je wilt. Plus en Pro ontgrendelen AI en sync, en die hebben doorlopende cloudkosten die we niet kunnen weggeven.",
    },
    {
      q: "Welke betaalmethoden accepteren jullie?",
      a: "Krediet- en debetkaarten via Stripe (alle gangbare merken), SEPA voor EU-klanten, Apple Pay en Google Pay. Education-klanten kunnen via bankoverschrijving of inkooporder (purchase order) betalen.",
    },
  ],
};

export default data;
