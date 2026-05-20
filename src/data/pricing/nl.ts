// 🇳🇱 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "voor altijd",
      tagline:
        "Het volledige canvas om de methode te proberen. 100 AI-credits per maand, altijd zichtbaar.",
      features: [
        "Oneindig canvas, handschriftinvoer, volledige rendering-engine",
        "3 basispenselen (potlood, vulpen, marker — meer in Plus)",
        "PNG-export",
        "100 AI-credits per maand — Atlas en Chat Fluera AI altijd gratis",
        "Socratic 3 sessies/wk, Ghost Map 3 vergelijkingen/wk, 1 Exam/wk",
        "Fog of War, FSRS (gespreide herhaling)",
        "Cross-Zone Bridges — zie de verbindingen tussen concepten die het systeem ontdekt",
        "📍 3 Checkpoints per canvas — sla een studiemoment op en spring er wanneer je wilt naar terug",
        "Voorvertoning van Time Travel + audio↔streep-sync op demo-canvas (alleen lezen)",
        "Local-first, volledig offline (1 apparaat)",
      ],
      cta: { label: "Gratis beginnen", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per maand · €49 / jaar (bespaar €22 — 2 maanden gratis)",
      tagline:
        "Volledige persoonlijke studie: cloud sync, AI zonder weekgrenzen, onbeperkte spraakopname.",
      features: [
        "Cloud sync 5 GB op 2 apparaten — je canvases ook op iPad en desktop",
        "Socratic, Ghost Map, Exam zonder frequentielimieten (niet meer 3/week)",
        "5× meer AI-credits dan Free (500 per maand — circa 60 Ghost Maps of 18 volledige Socratic-sessies)",
        "Onbeperkte spraakopname",
        "Alle V1-penselen (6 in totaal, meer onderweg)",
        "Volledige export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — maak en bewerk je eigen conceptlinks",
        "📍 Onbeperkte checkpoints per canvas",
        "7 dagen gratis proberen, op elk moment opzegbaar",
      ],
      cta: { label: "Plus proberen", href: "/beta" },
      highlighted: true,
      badge: "Aanbevolen",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per maand · €99 / jaar (bespaar €44 — 3,5 maanden gratis)",
      tagline:
        "Versterkte studie: Time Travel, audio↔streep-sync, realtime samenwerking, zoeken in alle canvases.",
      features: [
        "⏱️ Time Travel-scrubber — bekijk je studie in playback",
        "🎤 Audio ↔ streep-sync — tik op een streep en hoor wat je op dat moment zei",
        "🤝 Realtime canvas-samenwerking (CRDT) — nodig medestudenten uit met een link",
        "🔍 Proactieve Background OCR — zoek een formule die je maanden geleden schreef, in alle canvases",
        "Cloud sync 50 GB, onbeperkte apparaten",
        "Prioriteits-e-mailondersteuning",
        "2000 AI-credits per maand",
      ],
      cta: { label: "Pro worden", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hoe werken de AI-credits?",
      a: "Elke AI-operatie heeft een vaste creditkost: Ghost Map 8, Socratic 4 per fase, Exam 12 per vraag, Chat 1 per bericht. Atlas (canvas-acties) en basis-Background-OCR zijn gratis. Je ziet altijd het resterende saldo in de canvas-header — geen verborgen rate limits, geen verrassingen. Ongebruikte credits worden niet overgedragen: het plan wordt elke 30 dagen vanaf je inschrijfdatum aangevuld (niet de 1e van de maand — je betaalt voor 30 dagen en krijgt 30 dagen).",
    },
    {
      q: "En als ik credits opmaak voor de reset?",
      a: "We waarschuwen vooraf — een zachte melding wanneer je 80% van de cyclus hebt verbruikt. Op nul stoppen AI-functies met een duidelijke boodschap (nooit stille blokkades). Wacht op de volgende 30-dagencyclus of upgrade.",
    },
    {
      q: "Waarom kost Pro dubbel zoveel voor slechts drie pillars?",
      a: "Pro is geen 'Plus met meer credits' — het is versterkte studie. Time Travel speelt je studiesessie af met audio gesynchroniseerd per streep: tik op een formule en hoor de uitleg die je jezelf gaf. Realtime CRDT-samenwerking laat je tegelijk werken met klasgenoten of collega's op hetzelfde canvas. Notability, GoodNotes en Notion AI leveren deze stack niet — niet op dit integratieniveau.",
    },
    {
      q: "Wat gebeurt er met mijn canvases als ik Plus of Pro opzeg?",
      a: "Alles blijft op je apparaat (local-first) en de 3 basispenselen + PNG-export blijven werken in de Free-tier. Extra canvases worden alleen-lezen totdat je heractiveert of exporteert. Niets wordt verwijderd zonder een expliciete actie van jou.",
    },
    {
      q: "Waarom geen gratis Pro-proefperiode?",
      a: "Plus heeft 7 dagen gratis proefperiode. Pro niet: realtime samenwerking + Time Travel-scrubber zijn terugkerende functies met cloudkosten die we niet kunnen weggeven. Wil je de methode evalueren, dan is Free het volledige canvas — gebruik het zo lang je wilt.",
    },
    {
      q: "Wat is een Checkpoint?",
      a: "Een Checkpoint is een bladwijzer van je canvas op een specifiek moment — een soort \"opslaan als\". Je maakt er een aan wanneer je wilt (bijv. \"vóór de toets\", \"na hoofdstuk 3 afgemaakt\") en springt op elk moment terug: herstelt de canvasstaat op dat punt. Het verschilt van Time Travel: een Checkpoint is een vast punt dat jij gekozen hebt, Time Travel is de doorlopende scrubber over de hele geschiedenis. Free bevat 3 Checkpoints per canvas, Plus onbeperkt.",
    },
    {
      q: "Kan ik Time Travel + audio↔streep-sync proberen voordat ik upgrade naar Pro?",
      a: "Ja. Elke Free-gebruiker krijgt een vooraf geladen demo-canvas waar je de Time Travel-scrubber kunt openen en strepen kunt aantikken om de gesynchroniseerde audio af te spelen — alleen lezen, op de demo. Voor het opnemen van je eigen studies heb je Pro nodig.",
    },
    {
      q: "Terugbetalingsbeleid?",
      a: "30 dagen, zonder vragen, op zowel maandelijkse als jaarlijkse plannen. Mail naar support@fluera.dev vanaf het adres waarmee je je hebt aangemeld.",
    },
    {
      q: "Hoe werkt studentenverificatie?",
      a: "Geverifieerd .edu of academisch e-mailadres. Voor Europese universiteiten zonder .edu accepteren we een gescande studentenkaart, ISIC of een eenmalige e-mail van het faculteitssecretariaat.",
    },
    {
      q: "Kortingen voor onderzoekers of non-profits?",
      a: "Ja. Onderzoekslaboratoria, PhD-programma's en geregistreerde non-profits kunnen aanvragen op /contact — meestal verlenen we Pro tegen Plus-tarief of gratis in ruil voor gestructureerde feedback.",
    },
    {
      q: "Welke betaalmethoden accepteren jullie?",
      a: "iDEAL, creditcards/debetkaarten via Stripe, SEPA-incasso, Apple Pay en Google Pay. Education-klanten kunnen betalen via bankoverschrijving of inkooporder.",
    },
    {
      q: "Team- of Education-plannen?",
      a: "Komen in fase 2 (gedeelde workspaces, admin-dashboard, SSO). Geïnteresseerd? Mail naar sales@fluera.dev — we bouwen de roadmap met onze eerste design partners.",
    },
  ],
};

export default data;
