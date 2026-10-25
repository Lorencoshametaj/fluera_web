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
      period: "for altid",
      tagline:
        "Hele canvasset, repetition og fag. Uden abonnement og uden udløbsdato.",
      features: [
        "Uendeligt canvas og håndskrift",
        "Repetition, fag, alle pensler, eksport og time travel",
        "En smagsprøve på AI i den første måned efter tilmelding",
        "500 MB cloud på alle dine enheder, uden lyd, når Cloud starter",
        "Virker også offline: dine canvas bliver på enheden",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "om året · kun årligt · Cloud 60 til €44,99 / år",
      tagline:
        "Plads til dine canvas og optagede forelæsninger. Starter med en opdatering af appen.",
      features: [
        "20 GB på dine enheder: telefon, tablet og computer",
        "Optagede forelæsninger kan høres overalt",
        "Dine canvas er sikre, også hvis du skifter telefon",
        "Cloud 60: 60 GB til dig, der optager mange forelæsninger",
      ],
      cta: { label: "Vælg Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9,99",
      period: "om måneden · €84,99 / år (spar €34,89)",
      tagline: "En AI, der læser det, du skriver, med en måler, der altid er synlig.",
      features: [
        "AI’en læser dine noter og giver hvert begreb et navn",
        "Tutor, eksamener, chat, formler og transskription",
        "Du ser altid, hvor meget AI du har tilbage i måneden, i procent",
        "Eksamensreserve til de travleste måneder",
        "14 dage gratis til at prøve den",
      ],
      cta: { label: "Prøv AI’en", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99,99",
      period: "om året · spar €4,99 i forhold til de to hver for sig · med Cloud 60 €119,99 / år",
      tagline: "Hele Cloud og al AI, i ét abonnement.",
      features: [
        "Hele Cloud og al AI",
        "20 GB, eller 60 GB med Cloud 60 + AI",
        "Du ser altid, hvor meget AI du har tilbage i måneden, i procent",
        "Kun årligt",
      ],
      cta: { label: "Vælg Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Anbefalet",
    },
  ],
  faq: [
    {
      q: "Hvordan ser jeg, hvor meget AI jeg har tilbage?",
      a: "I appen, altid. En måler viser i procent, hvor meget af månedens AI du har tilbage, hvornår den fyldes op (den 1. i måneden), og hvor længe den rækker i dit tempo. Ingen skjulte grænser og ingen kreditter at regne om i hovedet: det, du ser, er det, du har.",
    },
    {
      q: "Hvad hvis månedens AI slipper op?",
      a: "Repetition, fag og dine noter virker altid, også uden AI. AI’en kommer tilbage den 1. i måneden; hvis du skal bruge den før, kan du i appen slå eksamensreserven til eller tilføje lidt mere.",
    },
    {
      q: "Køber jeg én gang, gælder det så på alle mine enheder?",
      a: "Ja. Du abonnerer i Fluera-appen på din telefon eller tablet via App Store eller Google Play og betaler med de betalingsmetoder, der er gemt på din butikskonto. Din plan gælder derefter på alle enheder, hvor du logger ind med den samme konto, også computere.",
    },
    {
      q: "Virker Cloud allerede mellem enhederne?",
      a: "Ikke endnu. Cloud mellem telefon, tablet og computer er under opbygning og starter med en opdatering af appen. Indtil da bliver dine canvas på enheden, hvor de også virker offline.",
    },
    {
      q: "Er der en gratis prøveperiode?",
      a: "Ja: 14 dage gratis, kun på AI’en. Du kan opsige i butikken når som helst, før prøveperioden slutter. Free udløber aldrig og kræver ingen betaling.",
    },
    {
      q: "Hvad sker der med mine canvas, hvis jeg opsiger?",
      a: "De forbliver dine, på enheden: canvas, repetition, fag, pensler og eksport virker fortsat med Free. Planens funktioner står stille, indtil du genaktiverer den. Intet slettes uden en handling fra dig.",
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
