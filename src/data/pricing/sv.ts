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
      period: "för alltid",
      tagline:
        "Hela canvasen, repetitionen och kurserna. Utan prenumeration och utan slutdatum.",
      features: [
        "Oändlig canvas och handskrift",
        "Repetition, kurser, alla penslar, export och time travel",
        "Ett smakprov på AI under första månaden efter registreringen",
        "500 MB moln på alla dina enheter, utan ljud, när Cloud startar",
        "Fungerar även offline: dina canvas stannar på enheten",
      ],
      cta: { label: "Börja gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "per år · endast årsvis · Cloud 60 för €44,99 / år",
      tagline:
        "Plats för dina canvas och inspelade föreläsningar. Startar med en uppdatering av appen.",
      features: [
        "20 GB på dina enheter: telefon, surfplatta och dator",
        "Inspelade föreläsningar hörs överallt",
        "Dina canvas är säkra, även om du byter telefon",
        "Cloud 60: 60 GB för dig som spelar in många föreläsningar",
      ],
      cta: { label: "Välj Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9,99",
      period: "per månad · €84,99 / år (spara €34,89)",
      tagline: "En AI som läser det du skriver, med en mätare som alltid syns.",
      features: [
        "AI:n läser dina anteckningar och ger varje begrepp ett namn",
        "Handledare, tentor, chatt, formler och transkribering",
        "Du ser alltid hur mycket AI du har kvar i månaden, i procent",
        "Tentareserv för de tyngsta månaderna",
        "14 dagar gratis att prova den",
      ],
      cta: { label: "Prova AI:n", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99,99",
      period: "per år · spara €4,99 jämfört med de två var för sig · med Cloud 60 €119,99 / år",
      tagline: "Hela Cloud och all AI, i en enda prenumeration.",
      features: [
        "Hela Cloud och all AI",
        "20 GB, eller 60 GB med Cloud 60 + AI",
        "Du ser alltid hur mycket AI du har kvar i månaden, i procent",
        "Endast årsvis",
      ],
      cta: { label: "Välj Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Rekommenderas",
    },
  ],
  faq: [
    {
      q: "Hur ser jag hur mycket AI jag har kvar?",
      a: "I appen, alltid. En mätare visar i procent hur mycket av månadens AI du har kvar, när den fylls på (den 1:a varje månad) och hur länge den räcker i din takt. Inga dolda gränser och inga krediter att räkna om i huvudet: det du ser är det du har.",
    },
    {
      q: "Och om månadens AI tar slut?",
      a: "Repetition, kurser och dina anteckningar fungerar alltid, även utan AI. AI:n kommer tillbaka den 1:a varje månad; behöver du den tidigare kan du i appen slå på tentareserven eller lägga till lite till.",
    },
    {
      q: "Köper jag en gång, gäller det på alla mina enheter?",
      a: "Ja. Du prenumererar i Fluera-appen på din telefon eller surfplatta via App Store eller Google Play och betalar med de betalningsmetoder som finns sparade på ditt butikskonto. Din plan gäller sedan på alla enheter där du loggar in med samma konto, datorer inräknade.",
    },
    {
      q: "Fungerar Cloud redan mellan enheter?",
      a: "Inte än. Cloud mellan telefon, surfplatta och dator byggs just nu och startar med en uppdatering av appen. Fram till dess stannar dina canvas på enheten, där de även fungerar offline.",
    },
    {
      q: "Finns det en gratis provperiod?",
      a: "Ja: 14 dagar gratis, bara på AI:n. Du kan säga upp i butiken när du vill, innan provperioden tar slut. Free går aldrig ut och kräver ingen betalning.",
    },
    {
      q: "Vad händer med mina canvas om jag säger upp?",
      a: "De förblir dina, på enheten: canvas, repetition, kurser, penslar och export fortsätter att fungera med Free. Planens funktioner pausas tills du aktiverar den igen. Inget raderas utan en åtgärd från dig.",
    },
    {
      q: "Återbetalningspolicy?",
      a: "Villkor för återbetalning och ångerrätt beror på butik och köpkanal. Gällande policy visas före bekräftelse; mejla support@fluera.dev från din registrerade adress om du behöver hjälp.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fas 2 (delade workspaces, admin-dashboard, SSO). Intresserad? Mejla support@fluera.dev — vi bygger roadmappen med våra första design partners.",
    },
  ],
};

export default data;
