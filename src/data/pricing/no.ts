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
      period: "for alltid",
      tagline:
        "Hele canvaset, repetisjon og fag. Uten abonnement og uten utløpsdato.",
      features: [
        "Uendelig canvas og håndskrift",
        "Repetisjon, kurs, alle pensler, eksport og time travel",
        "Mentor å prøve den første måneden",
        "500 MB som er like på alle enhetene dine, uten lyd, når synkroniseringen starter",
        "Fungerer også offline: canvasene dine blir på enheten",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Overalt",
      price: "€29,99",
      period: "per år · kun årlig · 60 GB for €44,99 / år",
      tagline:
        "Alt på telefon, nettbrett og datamaskin, uten å tenke på plass. Starter med en oppdatering av appen.",
      features: [
        "20 GB i stedet for gratisversjonens 500 MB",
        "Innspilte forelesninger, med lyd, på hver enhet",
        "Del et canvas og skriv sammen",
        "Slutter du, har du 6 måneder til å laste ned alt. Blekket blir for alltid.",
        "Ingen ekstra studiefunksjoner: alle er allerede gratis",
      ],
      cta: { label: "Velg Overalt", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "per måned · €84,99 / år (spar €34,89)",
      tagline:
        "En veileder som har lest notatene dine, med en månedskvote som alltid vises i prosent.",
      features: [
        "Stiller deg spørsmål om det du har skrevet",
        "Gir deg en muntlig eksamen og sier hva som mangler",
        "Gir hvert begrep du skriver en tittel",
        "Gjør håndskrevne formler redigerbare",
        "Og du kan stille notatene dine spørsmål i en chat",
        "En kvote i måneden, alltid vist i prosent",
        "De første 14 dagene er gratis",
      ],
      cta: { label: "Prøv Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Overalt + Mentor",
      price: "€99,99",
      period: "per år · spar €14,99 sammenlignet med de to hver for seg · med 60 GB €119,99 / år",
      tagline:
        "Hele Fluera, på hver enhet, med veilederen. Den anbefalte planen.",
      features: [
        "Hele Overalt: 20 GB og forelesninger med lyd",
        "Hele Mentor: spørsmål, eksamen, titler og formler",
        "En kvote i måneden, alltid vist i prosent",
        "Kun årlig",
      ],
      cta: { label: "Velg Overalt + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Anbefalt",
    },
  ],
  faq: [
    {
      q: "Hvordan ser jeg hvor mye Mentor jeg har igjen?",
      a: "I appen, alltid. En teller viser i prosent hvor mye som er igjen av månedens Mentor-kvote, når den fylles på (den 1. i måneden) og hvor lenge den varer i ditt tempo. Ingen skjulte grenser og ingen kreditter å regne om i hodet: det du ser, er det du har.",
    },
    {
      q: "Og hvis månedens Mentor tar slutt?",
      a: "Repetisjon, kurs og notatene dine virker alltid, også uten Mentor. Mentor kommer tilbake den 1. i måneden; trenger du den før, kan du slå på eksamensreserven eller kjøpe litt ekstra i appen.",
    },
    {
      q: "Kjøper jeg én gang, gjelder det på alle enhetene mine?",
      a: "Ja. Du abonnerer i Fluera-appen på telefonen eller nettbrettet via App Store eller Google Play, og betaler med betalingsmåtene som er lagret på butikkontoen din. Planen din gjelder deretter på alle enheter der du logger inn med samme konto, også datamaskiner.",
    },
    {
      q: "Fungerer Overalt allerede mellom enhetene?",
      a: "Ikke ennå. Synkroniseringen mellom telefon, nettbrett og datamaskin bygges og starter med en oppdatering av appen. Frem til da blir canvasene dine på enheten, der de også virker uten nett.",
    },
    {
      q: "Finnes det en gratis prøveperiode?",
      a: "Ja: 14 dager gratis, bare på Mentor. Du kan si opp i butikken når du vil, før prøveperioden er over. Gratis Fluera utløper aldri og krever ingen betaling.",
    },
    {
      q: "Hva skjer med canvasene mine hvis jeg sier opp?",
      a: "De forblir dine, på enheten din: canvas, repetisjon, kurs, pensler og eksport fortsetter å virke gratis. Hadde du Overalt, har du 6 måneder til å laste ned alt, og blekket blir for alltid. Ingenting slettes uten at du gjør det selv.",
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
