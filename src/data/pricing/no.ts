import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "for alltid",
      tagline: "Hele canvaset. Tre notatbøker. Gratis for alltid.",
      features: [
        "Uendelig canvas, 13 pensler, fullstendig håndskrift-motor",
        "3 notatbøker, ubegrenset antall sider",
        "Local-first — helt offline",
        "Eksport som PNG og PDF",
        "Socratic Mode basis",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per måned · €49/år",
      tagline: "Hele canvaset, sync på 2 enheter, AI-basis.",
      features: [
        "Alle pensler + ubegrenset antall lag",
        "Sync på 2 enheter",
        "PDF-eksport og alle basisformater",
        "AI-basis-kvote (Atlas, Ghost Map basis)",
        "Årlig for €49 (rundt €4,08/måned)",
      ],
      cta: { label: "Start med Plus", href: "/beta" },
      highlighted: true,
      badge: "Anbefalt",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per måned · €99/år",
      tagline: "Exam Session, Atlas, hele AI-pakken, Time Travel og ubegrenset sync.",
      features: [
        "Exam Session — simulerte eksamener fra ditt canvas med hyperkorreksjon-tilbakemelding",
        "Atlas kontinentvisning + Cross-Zone Bridges på tvers av alle notatbøker",
        "Full AI-pakke (Ghost Map, Socratic, Fog of War, FSRS-scheduler)",
        "Ubegrenset antall notatbøker",
        "Multi-enhet-sync med ende-til-ende-kryptering",
        "Time Travel med audio-synkronisert avspilling",
        "Alle eksportformater (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Prioritert e-poststøtte",
        "Årlig for €99 (rundt €8,25/måned)",
      ],
      cta: { label: "Bli Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "per sete / måned · €179/år per sete · fra 5 seter",
      tagline: "Delte canvas for studioer, labber og små team.",
      features: [
        "Alt fra Pro for hvert teammedlem",
        "Delt arbeidsområde med Team-Atlas",
        "Rollebaserte tillatelser og ACL",
        "Admin-dashboard + audit-spor",
        "Team-fakturering (én faktura, mva. håndtert)",
        "Prioritert støtte, dedikert onboarding",
      ],
      cta: { label: "Snakk med salg", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hvorfor viser dere priser når dere er i closed beta?",
      a: "Dette er V1-prisene. Tegner du deg nå, fryser du satsen for hele varigheten av abonnementet — selv om prislisten skulle stige senere.",
    },
    {
      q: "Hvordan virker studentverifiseringen?",
      a: "Du registrerer deg med en .edu-, .ac.uk- eller verifisert akademisk e-postadresse. Hvis universitetet ditt ikke bruker akademisk domene (vanlig i Norge), godtar vi skannet studentbevis, ISIC eller en engangs-e-post fra studieadministrasjonen.",
    },
    {
      q: "Hva skjer med notatbøkene mine hvis jeg sier opp Plus eller Pro?",
      a: "Notatbøkene blir liggende på enheten og du havner tilbake i Free-tieret. Du beholder de tre første; resten blir skrivebeskyttet til du reaktiverer eller eksporterer dem. Ingenting slettes uten din uttrykkelige handling.",
    },
    {
      q: "Finnes det en angrerett?",
      a: "Ja — 30 dager, uten oppfølgingsspørsmål, på måneds- og årsplaner. Skriv til support@fluera.dev fra adressen du registrerte deg med.",
    },
    {
      q: "Kan jeg self-hoste Fluera?",
      a: "Den local-first delen kjører allerede helt offline på alle seks plattformer. Self-hosting av cloud-sync står på Education-veikartet (on-prem, SSO, audit-spor) — ikke tilgjengelig i dag.",
    },
    {
      q: "Tilbyr dere rabatt for forskere eller non-profits?",
      a: "Ja. Forskningslabber, doktorgradsprogrammer og registrerte non-profits kan be om det på /contact. Vi vurderer fra sak til sak, og gir som regel Pro til studentpris eller gratis i bytte mot strukturert tilbakemelding.",
    },
    {
      q: "Hvorfor finnes det ingen gratis prøveperiode for Plus eller Pro?",
      a: "Free-tieret er ikke et nedbarbert markedsføringsprodukt — det er hele canvaset. Bruk det så lenge du vil. Plus og Pro låser opp AI og sync, og det har løpende cloud-kostnader vi ikke kan gi bort.",
    },
    {
      q: "Hvilke betalingsmåter aksepterer dere?",
      a: "Kreditt- og debetkort via Stripe (alle vanlige merker), SEPA for EU-kunder, Apple Pay og Google Pay. Education-kunder kan betale med bankoverføring eller bestilling (Purchase Order).",
    },
  ],
};

export default data;
