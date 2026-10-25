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
      period: "for alltid",
      tagline:
        "Hele canvaset, repetisjon og fag. Uten abonnement og uten utløpsdato.",
      features: [
        "Uendelig canvas og håndskrift",
        "Repetisjon, fag, alle pensler, eksport og time travel",
        "En smakebit av KI den første måneden etter registrering",
        "500 MB sky på alle enhetene dine, uten lyd, når Cloud starter",
        "Fungerer også offline: canvasene dine blir på enheten",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "per år · kun årlig · Cloud 60 for €44,99 / år",
      tagline:
        "Plass til canvasene dine og innspilte forelesninger. Starter med en oppdatering av appen.",
      features: [
        "20 GB på enhetene dine: telefon, nettbrett og datamaskin",
        "Innspilte forelesninger kan høres overalt",
        "Canvasene dine er trygge, også om du bytter telefon",
        "Cloud 60: 60 GB for deg som spiller inn mange forelesninger",
      ],
      cta: { label: "Velg Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "KI",
      price: "€9,99",
      period: "per måned · €84,99 / år (spar €34,89)",
      tagline: "En KI som leser det du skriver, med en måler som alltid er synlig.",
      features: [
        "KI-en leser notatene dine og gir hvert begrep et navn",
        "Veileder, eksamener, chat, formler og transkripsjon",
        "Du ser alltid hvor mye KI du har igjen denne måneden, i prosent",
        "Eksamensreserve for de travleste månedene",
        "14 dager gratis for å prøve den",
      ],
      cta: { label: "Prøv KI-en", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + KI",
      price: "€99,99",
      period: "per år · spar €4,99 sammenlignet med de to hver for seg · med Cloud 60 €119,99 / år",
      tagline: "Hele Cloud og all KI, i ett abonnement.",
      features: [
        "Hele Cloud og all KI",
        "20 GB, eller 60 GB med Cloud 60 + KI",
        "Du ser alltid hvor mye KI du har igjen denne måneden, i prosent",
        "Kun årlig",
      ],
      cta: { label: "Velg Cloud + KI", href: "/beta" },
      highlighted: true,
      badge: "Anbefalt",
    },
  ],
  faq: [
    {
      q: "Hvordan ser jeg hvor mye KI jeg har igjen?",
      a: "I appen, alltid. En måler viser i prosent hvor mye av månedens KI du har igjen, når den fylles på (den 1. hver måned) og hvor lenge den holder i ditt tempo. Ingen skjulte grenser og ingen kreditter å regne om i hodet: det du ser, er det du har.",
    },
    {
      q: "Hva om månedens KI tar slutt?",
      a: "Repetisjon, fag og notatene dine fungerer alltid, også uten KI. KI-en kommer tilbake den 1. hver måned; trenger du den før, kan du i appen slå på eksamensreserven eller legge til litt mer.",
    },
    {
      q: "Kjøper jeg én gang, gjelder det på alle enhetene mine?",
      a: "Ja. Du abonnerer i Fluera-appen på telefonen eller nettbrettet via App Store eller Google Play, og betaler med betalingsmåtene som er lagret på butikkontoen din. Planen din gjelder deretter på alle enheter der du logger inn med samme konto, også datamaskiner.",
    },
    {
      q: "Fungerer Cloud allerede mellom enhetene?",
      a: "Ikke ennå. Cloud mellom telefon, nettbrett og datamaskin er under bygging og starter med en oppdatering av appen. Frem til da blir canvasene dine på enheten, der de også fungerer offline.",
    },
    {
      q: "Finnes det en gratis prøveperiode?",
      a: "Ja: 14 dager gratis, bare på KI-en. Du kan si opp i butikken når du vil, før prøveperioden er over. Free utløper aldri og krever ingen betaling.",
    },
    {
      q: "Hva skjer med canvasene mine hvis jeg sier opp?",
      a: "De forblir dine, på enheten: canvas, repetisjon, fag, pensler og eksport fortsetter å fungere med Free. Planens funksjoner står på pause til du aktiverer den igjen. Ingenting slettes uten en handling fra deg.",
    },
    {
      q: "Refusjonspolicy?",
      a: "Vilkår for refusjon og angrerett avhenger av butikk og kjøpskanal. Gjeldende policy vises før bekreftelse; send e-post til support@fluera.dev fra den registrerte adressen din hvis du trenger hjelp.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fase 2 (delte workspaces, admin-dashbord, SSO). Interessert? Send e-post til support@fluera.dev — vi bygger veikartet med våre første design partners.",
    },
  ],
};

export default data;
