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
      period: "ikuisesti",
      tagline:
        "Koko canvas, kertaus ja kurssit. Ilman tilausta ja ilman päättymispäivää.",
      features: [
        "Loputon canvas ja käsin kirjoittaminen",
        "Kertaus, kurssit, kaikki siveltimet, vienti ja time travel",
        "Maistiainen tekoälyä ensimmäisenä kuukautena rekisteröitymisestä",
        "500 Mt pilvitilaa kaikilla laitteillasi, ilman ääntä, kun Cloud käynnistyy",
        "Toimii myös offline: canvasisi pysyvät laitteella",
      ],
      cta: { label: "Aloita ilmaiseksi", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "vuodessa · vain vuosittain · Cloud 60 hintaan €44,99 / vuosi",
      tagline:
        "Tilaa canvasillesi ja nauhoitetuille luennoille. Käynnistyy sovelluksen päivityksen myötä.",
      features: [
        "20 Gt laitteillasi: puhelin, tabletti ja tietokone",
        "Nauhoitetut luennot kuuluvat missä vain",
        "Canvasisi turvassa, vaikka vaihtaisit puhelinta",
        "Cloud 60: 60 Gt niille, jotka nauhoittavat paljon luentoja",
      ],
      cta: { label: "Valitse Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9,99",
      period: "kuukaudessa · €84,99 / vuosi (säästä €34,89)",
      tagline: "Tekoäly, joka lukee mitä kirjoitat, ja mittari, joka näkyy aina.",
      features: [
        "Tekoäly lukee muistiinpanosi ja nimeää jokaisen käsitteen",
        "Tutori, tentit, chat, kaavat ja litterointi",
        "Näet aina prosentteina, paljonko tekoälyä on kuukaudessa jäljellä",
        "Tenttivaranto raskaimpiin kuukausiin",
        "14 päivää ilmaiseksi kokeiltavaksi",
      ],
      cta: { label: "Kokeile tekoälyä", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99,99",
      period: "vuodessa · säästät €4,99 verrattuna kahteen erikseen · Cloud 60:n kanssa €119,99 / vuosi",
      tagline: "Koko Cloud ja koko tekoäly yhdellä tilauksella.",
      features: [
        "Koko Cloud ja koko tekoäly",
        "20 Gt, tai 60 Gt tilauksella Cloud 60 + AI",
        "Näet aina prosentteina, paljonko tekoälyä on kuukaudessa jäljellä",
        "Vain vuosittain",
      ],
      cta: { label: "Valitse Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Suositeltu",
    },
  ],
  faq: [
    {
      q: "Miten näen, paljonko tekoälyä on jäljellä?",
      a: "Sovelluksessa, aina. Mittari näyttää prosentteina, paljonko kuukauden tekoälystä on jäljellä, milloin se täyttyy (kuukauden 1. päivänä) ja kuinka pitkään se tahdillasi riittää. Ei piilotettuja rajoja eikä krediittejä, joita pitäisi muuntaa päässä: mitä näet, sitä sinulla on.",
    },
    {
      q: "Entä jos kuukauden tekoäly loppuu?",
      a: "Kertaus, kurssit ja muistiinpanosi toimivat aina, myös ilman tekoälyä. Tekoäly palaa kuukauden 1. päivänä; jos tarvitset sitä aiemmin, voit sovelluksessa ottaa tenttivarannon käyttöön tai lisätä vähän.",
    },
    {
      q: "Ostan kerran: toimiiko se kaikilla laitteillani?",
      a: "Kyllä. Tilaat Fluera-sovelluksessa puhelimella tai tabletilla App Storen tai Google Playn kautta ja maksat kauppatiliisi tallennetuilla maksutavoilla. Tilauksesi toimii sen jälkeen kaikilla laitteilla, joilla kirjaudut samalla tilillä, myös tietokoneilla.",
    },
    {
      q: "Toimiiko Cloud jo laitteiden välillä?",
      a: "Ei vielä. Cloud puhelimen, tabletin ja tietokoneen välillä on rakenteilla ja käynnistyy sovelluksen päivityksen myötä. Siihen asti canvasisi pysyvät laitteella, jossa ne toimivat myös offline.",
    },
    {
      q: "Onko ilmaista kokeilujaksoa?",
      a: "Kyllä: 14 päivää ilmaiseksi, vain tekoälylle. Voit perua kaupassa milloin tahansa ennen kokeilujakson loppua. Free ei vanhene eikä vaadi maksua.",
    },
    {
      q: "Mitä canvasilleni tapahtuu, jos perun?",
      a: "Ne pysyvät sinun, laitteella: canvas, kertaus, kurssit, siveltimet ja vienti toimivat edelleen Freellä. Tilauksen toiminnot ovat tauolla, kunnes otat sen uudelleen käyttöön. Mitään ei poisteta ilman omaa toimenpidettäsi.",
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
