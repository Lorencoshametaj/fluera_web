import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "voor altijd",
      tagline:
        "Het volledige canvas, herhaling en vakken. Zonder abonnement en zonder einddatum.",
      features: [
        "Oneindig canvas en handschrift",
        "Herhalen, cursussen, alle penselen, export en time travel",
        "Mentor om te proberen in je eerste maand",
        "500 MB die op al je apparaten gelijk is, zonder audio, zodra synchroniseren start",
        "Werkt ook offline: je canvassen blijven op je apparaat",
      ],
      cta: { label: "Gratis beginnen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Overal",
      price: "€29,99",
      period: "per jaar · alleen jaarlijks · 60 GB voor €44,99 / jaar",
      tagline:
        "Alles op telefoon, tablet en computer, zonder aan ruimte te denken. Start met een update van de app.",
      features: [
        "20 GB in plaats van de 500 MB van gratis",
        "Opgenomen colleges, met geluid, op elk apparaat",
        "Deel een canvas en schrijf er samen in",
        "Stop je, dan heb je 6 maanden om alles te downloaden. De inkt blijft voor altijd.",
        "Geen extra leerfuncties: die zitten allemaal al in gratis",
      ],
      cta: { label: "Kies Overal", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "per maand · €84,99 / jaar (bespaar €34,89)",
      tagline:
        "Een tutor die je aantekeningen heeft gelezen, met een maandtegoed dat altijd in procenten zichtbaar is.",
      features: [
        "Stelt je vragen over wat je hebt geschreven",
        "Neemt je een mondeling af en zegt wat er ontbreekt",
        "Geeft elk begrip dat je schrijft een titel",
        "Maakt van handgeschreven formules bewerkbare formules",
        "En je kunt je aantekeningen vragen stellen, in een chat",
        "Een tegoed per maand, altijd zichtbaar in procenten",
        "De eerste 14 dagen zijn gratis",
      ],
      cta: { label: "Probeer Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Overal + Mentor",
      price: "€99,99",
      period: "per jaar · je bespaart €14,99 vergeleken met de twee los · met 60 GB €119,99 / jaar",
      tagline:
        "Heel Fluera, op elk apparaat, met de tutor. Het aanbevolen abonnement.",
      features: [
        "Heel Overal: 20 GB en colleges met geluid",
        "Heel Mentor: vragen, mondeling, titels en formules",
        "Een tegoed per maand, altijd zichtbaar in procenten",
        "Alleen jaarlijks",
      ],
      cta: { label: "Kies Overal + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Aanbevolen",
    },
  ],
  faq: [
    {
      q: "Hoe zie ik hoeveel Mentor ik nog heb?",
      a: "In de app, altijd. Een teller laat in procenten zien hoeveel er nog over is van het Mentor-tegoed van de maand, wanneer het wordt aangevuld (op de 1e van de maand) en hoe lang het in jouw tempo meegaat. Geen verborgen limieten en geen credits om om te rekenen: wat je ziet, is wat je hebt.",
    },
    {
      q: "En als Mentor voor de maand op is?",
      a: "Herhalen, cursussen en je aantekeningen werken altijd, ook zonder Mentor. Mentor komt terug op de 1e van de maand; heb je hem eerder nodig, dan kun je in de app de examenreserve aanzetten of wat bijkopen.",
    },
    {
      q: "Eén keer kopen: werkt het op al mijn apparaten?",
      a: "Ja. Je neemt een abonnement in de Fluera-app op je telefoon of tablet, via de App Store of Google Play, en betaalt met de betaalmethoden in je store-account. Je abonnement werkt daarna op elk apparaat waarop je inlogt met hetzelfde account, computers inbegrepen.",
    },
    {
      q: "Werkt Overal al tussen apparaten?",
      a: "Nog niet. Synchroniseren tussen telefoon, tablet en computer wordt gebouwd en start met een update van de app. Tot die tijd blijven je canvassen op het apparaat, waar ze ook offline werken.",
    },
    {
      q: "Is er een gratis proefperiode?",
      a: "Ja: 14 dagen gratis, alleen voor Mentor. Je kunt via de store altijd opzeggen, voor het einde van de proef. Gratis Fluera verloopt nooit en vraagt geen betaling.",
    },
    {
      q: "Wat gebeurt er met mijn canvassen als ik opzeg?",
      a: "Ze blijven van jou, op je apparaat: canvas, herhalen, cursussen, penselen en export blijven gratis werken. Had je Overal, dan heb je 6 maanden om alles te downloaden, en de inkt blijft voor altijd. Er wordt niets verwijderd zonder dat jij het doet.",
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
