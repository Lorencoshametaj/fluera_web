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
      period: "för alltid",
      tagline:
        "Hela canvasen, repetitionen och kurserna. Utan prenumeration och utan slutdatum.",
      features: [
        "Oändlig canvas och handskrift",
        "Repetition, kurser, alla penslar, export och time travel",
        "Mentor att prova första månaden",
        "500 MB som är likadana på alla dina enheter, utan ljud, när synkningen startar",
        "Fungerar även offline: dina canvas stannar på enheten",
      ],
      cta: { label: "Börja gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Överallt",
      price: "€29,99",
      period: "per år · endast årsvis · 60 GB för €44,99 / år",
      tagline:
        "Allt på telefon, surfplatta och dator, utan att tänka på utrymmet. Startar med en uppdatering av appen.",
      features: [
        "20 GB i stället för gratisversionens 500 MB",
        "Inspelade föreläsningar, med ljud, på varje enhet",
        "Dela en canvas och skriv tillsammans",
        "Om du slutar har du 6 månader att ladda ned allt. Bläcket finns kvar för alltid.",
        "Inga extra studiefunktioner: alla finns redan gratis",
      ],
      cta: { label: "Välj Överallt", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "per månad · €84,99 / år (spara €34,89)",
      tagline:
        "En handledare som har läst dina anteckningar, med en månadskvot som alltid syns i procent.",
      features: [
        "Ställer frågor om det du har skrivit",
        "Ger dig en muntlig tenta och säger vad som saknas",
        "Ger varje begrepp du skriver en titel",
        "Gör handskrivna formler redigerbara",
        "Och du kan ställa frågor till dina anteckningar i en chatt",
        "En kvot per månad, alltid synlig i procent",
        "De första 14 dagarna är gratis",
      ],
      cta: { label: "Prova Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Överallt + Mentor",
      price: "€99,99",
      period: "per år · spara €14,99 jämfört med de två var för sig · med 60 GB €119,99 / år",
      tagline:
        "Hela Fluera, på varje enhet, med handledaren. Den rekommenderade planen.",
      features: [
        "Hela Överallt: 20 GB och föreläsningar med ljud",
        "Hela Mentor: frågor, tenta, titlar och formler",
        "En kvot per månad, alltid synlig i procent",
        "Endast årsvis",
      ],
      cta: { label: "Välj Överallt + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Rekommenderas",
    },
  ],
  faq: [
    {
      q: "Hur ser jag hur mycket Mentor jag har kvar?",
      a: "I appen, alltid. En räknare visar i procent hur mycket som finns kvar av månadens Mentor-kvot, när den fylls på (den 1:a i månaden) och hur länge den räcker i din takt. Inga dolda gränser och inga krediter att räkna om i huvudet: det du ser är det du har.",
    },
    {
      q: "Och om månadens Mentor tar slut?",
      a: "Repetition, kurser och dina anteckningar fungerar alltid, även utan Mentor. Mentor kommer tillbaka den 1:a i månaden; behöver du den tidigare kan du slå på tentareserven eller köpa till lite i appen.",
    },
    {
      q: "Köper jag en gång, gäller det på alla mina enheter?",
      a: "Ja. Du prenumererar i Fluera-appen på din telefon eller surfplatta via App Store eller Google Play och betalar med de betalningsmetoder som finns sparade på ditt butikskonto. Din plan gäller sedan på alla enheter där du loggar in med samma konto, datorer inräknade.",
    },
    {
      q: "Fungerar Överallt redan mellan enheter?",
      a: "Inte än. Synkningen mellan telefon, surfplatta och dator byggs och startar med en uppdatering av appen. Till dess stannar dina canvas på enheten, där de också fungerar offline.",
    },
    {
      q: "Finns det en gratis provperiod?",
      a: "Ja: 14 dagar gratis, bara på Mentor. Du kan säga upp i butiken när du vill, innan provperioden tar slut. Gratis Fluera går aldrig ut och kräver ingen betalning.",
    },
    {
      q: "Vad händer med mina canvas om jag säger upp?",
      a: "De förblir dina, på din enhet: canvas, repetition, kurser, penslar och export fortsätter fungera gratis. Hade du Överallt har du 6 månader att ladda ned allt, och bläcket finns kvar för alltid. Inget raderas utan att du gör det.",
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
