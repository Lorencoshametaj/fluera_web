import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "ikuisesti",
      tagline: "Koko canvas. Kolme muistikirjaa. Ilmainen ikuisesti.",
      features: [
        "Ääretön canvas, 13 sivellintä, täysi käsinkirjoitusmoottori",
        "3 muistikirjaa, rajaton sivumäärä",
        "Local-first — täysin offline",
        "Vienti PNG- ja PDF-muodossa",
        "Socratic Mode -perusversio",
      ],
      cta: { label: "Aloita ilmaiseksi", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "kuukaudessa · €49/v",
      tagline: "Koko canvas, sync 2 laitteessa, perustekoäly.",
      features: [
        "Kaikki siveltimet + rajattomat tasot",
        "Sync 2 laitteessa",
        "PDF-vienti ja kaikki perusmuodot",
        "AI-peruskiintiö (Atlas, Ghost Mapin perusversio)",
        "Vuosittain €49 (noin €4,08/kk)",
      ],
      cta: { label: "Aloita Plussalla", href: "/beta" },
      highlighted: true,
      badge: "Suositeltu",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "kuukaudessa · €99/v",
      tagline: "Exam Session, Atlas, koko AI-paketti, Time Travel ja rajaton sync.",
      features: [
        "Exam Session — simuloituja tenttejä canvaksestasi hyperkorjauspalautteella",
        "Atlas-mannernäkymä + Cross-Zone Bridges kaikkien muistikirjojen läpi",
        "Koko AI-paketti (Ghost Map, Socratic, Fog of War, FSRS-aikataulutus)",
        "Rajattomat muistikirjat",
        "Monilaitesynkronointi päästä päähän -salauksella",
        "Time Travel äänisynkronoidulla toistolla",
        "Kaikki vientimuodot (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Priorisoitu sähköpostituki",
        "Vuosittain €99 (noin €8,25/kk)",
      ],
      cta: { label: "Siirry Prohon", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "per paikka / kk · €179/v per paikka · vähintään 5 paikkaa",
      tagline: "Jaetut canvakset studioille, laboratorioille ja pienille tiimeille.",
      features: [
        "Kaikki Pro-ominaisuudet jokaiselle tiimin jäsenelle",
        "Jaettu työtila tiimi-Atlaksella",
        "Roolipohjaiset käyttöoikeudet ja ACL",
        "Admin-koontinäyttö + auditointiloki",
        "Tiimilaskutus (yksi lasku, ALV hoidettu)",
        "Priorisoitu tuki, omistettu onboarding",
      ],
      cta: { label: "Keskustele myynnin kanssa", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Miksi näytätte hintoja, vaikka olette suljetussa betassa?",
      a: "Nämä ovat V1-hinnat. Nyt tilaava lukitsee oman tilauksensa hinnan koko tilauksen ajaksi — vaikka hinnasto myöhemmin nousisi.",
    },
    {
      q: "Miten opiskelijavahvistus toimii?",
      a: "Rekisteröidyt .edu-, .ac.uk- tai vahvistetulla akateemisella sähköpostilla. Jos yliopistosi ei käytä akateemista verkkotunnusta (yleistä Suomessa), hyväksymme skannatun opiskelijakortin, ISIC-kortin tai kertaluonteisen viestin opintotoimistosta.",
    },
    {
      q: "Mitä muistikirjoilleni tapahtuu, jos peruutan Plus- tai Pro-tilauksen?",
      a: "Muistikirjat pysyvät laitteellasi ja palaat Free-tasolle. Säilytät kolme ensimmäistä; loput muuttuvat vain luettaviksi, kunnes aktivoit uudelleen tai viet ne. Mitään ei poisteta ilman nimenomaista toimintaasi.",
    },
    {
      q: "Onko teillä palautuskäytäntö?",
      a: "Kyllä — 30 päivää, ilman kysymyksiä, sekä kuukausi- että vuositilauksissa. Kirjoita osoitteeseen support@fluera.dev siltä osoitteelta, jolla rekisteröidyit.",
    },
    {
      q: "Voinko isännöidä Flueraa itse?",
      a: "Local-first-osa toimii jo täysin offline kaikilla kuudella alustalla. Cloud syncin self-hosting on Education-tiekartalla (on-prem, SSO, auditointiloki) — ei vielä saatavilla tänään.",
    },
    {
      q: "Tarjoatteko alennuksia tutkijoille tai voittoa tavoittelemattomille?",
      a: "Kyllä. Tutkimuslaboratoriot, tohtoriohjelmat ja rekisteröidyt voittoa tavoittelemattomat voivat pyytää osoitteessa /contact. Arvioimme tapauskohtaisesti ja myönnämme tyypillisesti Pron opiskelijahintaan tai ilmaiseksi vastineeksi jäsennellystä palautteesta.",
    },
    {
      q: "Miksi Plus tai Pro ei ole ilmainen kokeilu?",
      a: "Free-taso ei ole karsittu markkinointiversio — se on koko canvas. Käytä niin kauan kuin tarvitset. Plus ja Pro avaavat tekoälyn ja synkronoinnin, joilla on jatkuvia pilvikustannuksia, joita emme voi antaa ilmaiseksi.",
    },
    {
      q: "Mitä maksutapoja hyväksytte?",
      a: "Luotto- ja debit-kortit Stripen kautta (kaikki yleisimmät), SEPA EU-asiakkaille, Apple Pay ja Google Pay. Education-asiakkaat voivat maksaa pankkisiirrolla tai ostotilauksella.",
    },
  ],
};

export default data;
