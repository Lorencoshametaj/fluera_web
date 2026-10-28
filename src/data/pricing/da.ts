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
      period: "for altid",
      tagline:
        "Hele canvasset, repetition og fag. Uden abonnement og uden udløbsdato.",
      features: [
        "Uendeligt canvas og håndskrift",
        "Repetition, kurser, alle pensler, eksport og time travel",
        "Mentor at prøve i første måned",
        "500 MB, der er ens på alle dine enheder, uden lyd, når synkroniseringen starter",
        "Virker også offline: dine canvas bliver på enheden",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Overalt",
      price: "€29,99",
      period: "om året · kun årligt · 60 GB til €44,99 / år",
      tagline:
        "Alt på telefon, tablet og computer, uden at tænke på plads. Starter med en opdatering af appen.",
      features: [
        "20 GB i stedet for gratisversionens 500 MB",
        "Optagede forelæsninger, med lyd, på hver enhed",
        "Del et canvas og skriv sammen",
        "Stopper du, har du 6 måneder til at hente alt. Blækket bliver for altid.",
        "Ingen ekstra studiefunktioner: de er alle allerede gratis",
      ],
      cta: { label: "Vælg Overalt", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "om måneden · €84,99 / år (spar €34,89)",
      tagline:
        "En tutor, der har læst dine noter, med en månedskvote, der altid vises i procent.",
      features: [
        "Stiller dig spørgsmål om det, du har skrevet",
        "Giver dig en mundtlig eksamen og siger, hvad der mangler",
        "Giver hvert begreb, du skriver, en titel",
        "Gør håndskrevne formler redigerbare",
        "Og du kan stille dine noter spørgsmål i en chat",
        "En kvote om måneden, altid vist i procent",
        "De første 14 dage er gratis",
      ],
      cta: { label: "Prøv Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Overalt + Mentor",
      price: "€99,99",
      period: "om året · spar €14,99 i forhold til de to hver for sig · med 60 GB €119,99 / år",
      tagline:
        "Hele Fluera, på hver enhed, med tutoren. Den anbefalede plan.",
      features: [
        "Hele Overalt: 20 GB og forelæsninger med lyd",
        "Hele Mentor: spørgsmål, eksamen, titler og formler",
        "En kvote om måneden, altid vist i procent",
        "Kun årligt",
      ],
      cta: { label: "Vælg Overalt + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Anbefalet",
    },
  ],
  faq: [
    {
      q: "Hvordan ser jeg, hvor meget Mentor jeg har tilbage?",
      a: "I appen, altid. En tæller viser i procent, hvor meget der er tilbage af månedens Mentor-kvote, hvornår den fyldes op (den 1. i måneden), og hvor længe den rækker i dit tempo. Ingen skjulte grænser og ingen kreditter at regne om i hovedet: det, du ser, er det, du har.",
    },
    {
      q: "Og hvis månedens Mentor slipper op?",
      a: "Repetition, kurser og dine noter virker altid, også uden Mentor. Mentor kommer tilbage den 1. i måneden; har du brug for den før, kan du slå eksamensreserven til eller købe lidt ekstra i appen.",
    },
    {
      q: "Køber jeg én gang, gælder det så på alle mine enheder?",
      a: "Ja. Du abonnerer i Fluera-appen på din telefon eller tablet via App Store eller Google Play og betaler med de betalingsmetoder, der er gemt på din butikskonto. Din plan gælder derefter på alle enheder, hvor du logger ind med den samme konto, også computere.",
    },
    {
      q: "Virker Overalt allerede mellem enhederne?",
      a: "Ikke endnu. Synkroniseringen mellem telefon, tablet og computer er under opbygning og starter med en opdatering af appen. Indtil da bliver dine canvas på enheden, hvor de også virker offline.",
    },
    {
      q: "Er der en gratis prøveperiode?",
      a: "Ja: 14 dage gratis, kun på Mentor. Du kan opsige i butikken når som helst, før prøveperioden slutter. Gratis Fluera udløber aldrig og kræver ingen betaling.",
    },
    {
      q: "Hvad sker der med mine canvas, hvis jeg opsiger?",
      a: "De forbliver dine, på din enhed: canvas, repetition, kurser, pensler og eksport bliver ved med at virke gratis. Havde du Overalt, har du 6 måneder til at hente alt, og blækket bliver for altid. Intet slettes, uden at du selv gør det.",
    },
    {
      q: "Refunderingspolitik?",
      a: "Vilkår for refundering og fortrydelse afhænger af butik og købskanal. Den gældende politik vises før bekræftelse; skriv til support@fluera.dev fra din registrerede adresse, hvis du har brug for hjælp.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fase 2 (delte workspaces, admin-dashboard, SSO). Interesseret? Skriv til support@fluera.dev — vi bygger roadmappen med vores første design partners.",
    },
  ],
};

export default data;
