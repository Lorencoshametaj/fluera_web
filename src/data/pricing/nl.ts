import type { PricingData } from "../types";

// Listino del 22/10/2026 (Free, Cloud, IA, Cloud + IA). Allineato a it.ts.
// Gli importi di `price` e `period` li controlla
// fluera_engine/tool/public_truth_gate.dart contro FlueraPricing, per `id`.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "voor altijd",
      tagline:
        "Het volledige canvas, herhaling en vakken. Zonder abonnement en zonder einddatum.",
      features: [
        "Oneindig canvas en handschrift",
        "Herhaling, vakken, alle penselen, export en time travel",
        "Een voorproefje AI in je eerste maand na het aanmelden",
        "500 MB cloud op al je apparaten, zonder audio, zodra Cloud start",
        "Werkt ook offline: je canvassen blijven op je apparaat",
      ],
      cta: { label: "Gratis beginnen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "per jaar · alleen jaarlijks · Cloud 60 voor €44,99 / jaar",
      tagline:
        "Ruimte voor je canvassen en opgenomen colleges. Start met een update van de app.",
      features: [
        "20 GB op je apparaten: telefoon, tablet en computer",
        "Opgenomen colleges luister je overal",
        "Je canvassen veilig, ook als je van telefoon wisselt",
        "Cloud 60: 60 GB voor wie veel colleges opneemt",
      ],
      cta: { label: "Kies Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9,99",
      period: "per maand · €84,99 / jaar (bespaar €34,89)",
      tagline: "Een AI die leest wat je schrijft, met een teller die altijd zichtbaar is.",
      features: [
        "De AI leest je aantekeningen en geeft elk begrip een naam",
        "Tutor, tentamens, chat, formules en transcriptie",
        "Je ziet altijd hoeveel AI je deze maand nog hebt, in procenten",
        "Tentamenreserve voor de zwaarste maanden",
        "14 dagen gratis om het te proberen",
      ],
      cta: { label: "Probeer de AI", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99,99",
      period: "per jaar · je bespaart €4,99 vergeleken met de twee los · met Cloud 60 €119,99 / jaar",
      tagline: "Alles van Cloud en alles van AI, in één abonnement.",
      features: [
        "Alles van Cloud en alles van AI",
        "20 GB, of 60 GB met Cloud 60 + AI",
        "Je ziet altijd hoeveel AI je deze maand nog hebt, in procenten",
        "Alleen jaarlijks",
      ],
      cta: { label: "Kies Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Aanbevolen",
    },
  ],
  faq: [
    {
      q: "Hoe zie ik hoeveel AI ik nog heb?",
      a: "In de app, altijd. Een teller laat in procenten zien hoeveel AI je deze maand nog hebt, wanneer die zich aanvult (op de 1e van de maand) en tot wanneer je in jouw tempo genoeg hebt. Geen verborgen limieten en geen credits om in je hoofd om te rekenen: wat je ziet, is wat je hebt.",
    },
    {
      q: "En als de AI van deze maand op is?",
      a: "Herhaling, vakken en je aantekeningen werken altijd, ook zonder AI. De AI komt terug op de 1e van de maand; heb je hem eerder nodig, dan zet je in de app de tentamenreserve aan of voeg je wat toe.",
    },
    {
      q: "Eén keer kopen: werkt het op al mijn apparaten?",
      a: "Ja. Je neemt een abonnement in de Fluera-app op je telefoon of tablet, via de App Store of Google Play, en betaalt met de betaalmethoden in je store-account. Je abonnement werkt daarna op elk apparaat waarop je inlogt met hetzelfde account, computers inbegrepen.",
    },
    {
      q: "Werkt Cloud al tussen apparaten?",
      a: "Nog niet. Cloud tussen telefoon, tablet en computer is in aanbouw en start met een update van de app. Tot dan blijven je canvassen op je apparaat, waar ze ook offline werken.",
    },
    {
      q: "Is er een gratis proefperiode?",
      a: "Ja: 14 dagen gratis, alleen op de AI. Je kunt altijd opzeggen in de store, vóór het einde van de proefperiode. Free verloopt niet en vraagt geen betaling.",
    },
    {
      q: "Wat gebeurt er met mijn canvassen als ik opzeg?",
      a: "Ze blijven van jou, op je apparaat: canvas, herhaling, vakken, penselen en export blijven werken met Free. De functies van het abonnement pauzeren tot je het opnieuw activeert. Niets wordt verwijderd zonder een actie van jou.",
    },
    {
      q: "Terugbetalingsbeleid?",
      a: "Voorwaarden voor terugbetaling en herroeping hangen af van de winkel en het aankoopkanaal. Het geldende beleid wordt vóór bevestiging getoond; mail voor hulp vanaf je geregistreerde adres naar support@fluera.dev.",
    },
    {
      q: "Team- of Education-plannen?",
      a: "Komen in fase 2 (gedeelde workspaces, admin-dashboard, SSO). Geïnteresseerd? Mail naar support@fluera.dev — we bouwen de roadmap met onze eerste design partners.",
    },
  ],
};

export default data;
