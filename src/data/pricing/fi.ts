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
      period: "ikuisesti",
      tagline:
        "Koko canvas, kertaus ja kurssit. Ilman tilausta ja ilman päättymispäivää.",
      features: [
        "Loputon canvas ja käsin kirjoittaminen",
        "Kertaus, kurssit, kaikki siveltimet, vienti ja time travel",
        "Mentori kokeiltavaksi ensimmäisenä kuukautena",
        "500 Mt samana kaikilla laitteillasi, ilman ääntä, kun synkronointi käynnistyy",
        "Toimii myös offline: canvasisi pysyvät laitteella",
      ],
      cta: { label: "Aloita ilmaiseksi", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Kaikkialla",
      price: "€29,99",
      period: "vuodessa · vain vuosittain · 60 GB hintaan €44,99 / vuosi",
      tagline:
        "Kaikki puhelimessa, tabletissa ja tietokoneella, tilaa ajattelematta. Käynnistyy sovelluksen päivityksen myötä.",
      features: [
        "20 Gt ilmaisversion 500 Mt:n sijaan",
        "Tallennetut luennot äänineen jokaisella laitteella",
        "Jaa canvas ja kirjoittakaa yhdessä",
        "Jos lopetat, sinulla on 6 kuukautta aikaa ladata kaikki. Muste säilyy aina.",
        "Ei lisää opiskelutoimintoja: ne ovat kaikki jo ilmaisia",
      ],
      cta: { label: "Valitse Kaikkialla", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentori",
      price: "€9,99",
      period: "kuukaudessa · €84,99 / vuosi (säästä €34,89)",
      tagline:
        "Tutori, joka on lukenut muistiinpanosi, ja kuukausikiintiö aina näkyvissä prosentteina.",
      features: [
        "Kysyy sinulta kirjoittamastasi",
        "Pitää sinulle suullisen kokeen ja kertoo, mitä puuttuu",
        "Antaa otsikon jokaiselle kirjoittamallesi käsitteelle",
        "Muuttaa käsin kirjoitetut kaavat muokattaviksi",
        "Ja voit kysyä muistiinpanoiltasi chatissa",
        "Kuukausikiintiö, aina näkyvissä prosentteina",
        "Ensimmäiset 14 päivää ovat ilmaisia",
      ],
      cta: { label: "Kokeile Mentoria", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Kaikkialla + Mentori",
      price: "€99,99",
      period: "vuodessa · säästät €14,99 verrattuna kahteen erikseen · 60 GB:n kanssa €119,99 / vuosi",
      tagline:
        "Koko Fluera, jokaisella laitteella, tutorin kanssa. Suositeltu tilaus.",
      features: [
        "Koko Kaikkialla: 20 Gt ja luennot äänineen",
        "Koko Mentori: kysymykset, koe, otsikot ja kaavat",
        "Kuukausikiintiö, aina näkyvissä prosentteina",
        "Vain vuosittain",
      ],
      cta: { label: "Valitse Kaikkialla + Mentori", href: "/beta" },
      highlighted: true,
      badge: "Suositeltu",
    },
  ],
  faq: [
    {
      q: "Mistä näen, paljonko Mentoria on jäljellä?",
      a: "Sovelluksessa, aina. Laskuri näyttää prosentteina, paljonko kuukauden Mentori-kiintiöstä on jäljellä, milloin se täyttyy (kuun 1. päivä) ja kuinka pitkään se riittää sinun tahdillasi. Ei piilotettuja rajoja eikä päässä muunnettavia krediittejä: mitä näet, sitä sinulla on.",
    },
    {
      q: "Entä jos kuukauden Mentori loppuu?",
      a: "Kertaus, kurssit ja muistiinpanosi toimivat aina, myös ilman Mentoria. Mentori palaa kuun 1. päivä; jos tarvitset sitä aiemmin, voit sovelluksessa ottaa käyttöön koevarauksen tai ostaa vähän lisää.",
    },
    {
      q: "Ostan kerran: toimiiko se kaikilla laitteillani?",
      a: "Kyllä. Tilaat Fluera-sovelluksessa puhelimella tai tabletilla App Storen tai Google Playn kautta ja maksat kauppatiliisi tallennetuilla maksutavoilla. Tilauksesi toimii sen jälkeen kaikilla laitteilla, joilla kirjaudut samalla tilillä, myös tietokoneilla.",
    },
    {
      q: "Toimiiko Kaikkialla jo laitteiden välillä?",
      a: "Ei vielä. Synkronointi puhelimen, tabletin ja tietokoneen välillä on rakenteilla ja käynnistyy sovelluksen päivityksen myötä. Siihen asti canvasisi pysyvät laitteella, jossa ne toimivat myös ilman verkkoa.",
    },
    {
      q: "Onko ilmaista kokeilua?",
      a: "Kyllä: 14 päivää ilmaiseksi, vain Mentorissa. Voit perua kaupassa milloin tahansa ennen kokeilun loppua. Ilmainen Fluera ei vanhene eikä pyydä maksua.",
    },
    {
      q: "Mitä canvasilleni tapahtuu, jos perun?",
      a: "Ne pysyvät sinun, laitteellasi: canvas, kertaus, kurssit, siveltimet ja vienti toimivat edelleen ilmaiseksi. Jos sinulla oli Kaikkialla, sinulla on 6 kuukautta aikaa ladata kaikki, ja muste säilyy aina. Mitään ei poisteta ilman omaa toimintaasi.",
    },
    {
      q: "Hyvitysehdot?",
      a: "Hyvitys- ja peruutusehdot riippuvat kaupasta ja ostokanavasta. Sovellettava käytäntö näytetään ennen vahvistusta; saat apua lähettämällä viestin rekisteröidystä osoitteestasi osoitteeseen support@fluera.dev.",
    },
    {
      q: "Team- tai Education-suunnitelmat?",
      a: "Tulossa vaiheessa 2 (jaetut työtilat, admin-dashboard, SSO). Kiinnostunut? Lähetä sähköpostia osoitteeseen support@fluera.dev — rakennamme tiekarttaa ensimmäisten design partnereiden kanssa.",
    },
  ],
};

export default data;
