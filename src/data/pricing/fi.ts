// 🇫🇮 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "ikuisesti",
      tagline:
        "Koko canvas menetelmän kokeiluun. 100 AI-krediittiä kuukaudessa, aina näkyvillä.",
      features: [
        "Ääretön canvas, käsinkirjoituksen syöttö, täydellinen renderöintimoottori",
        "3 perussivellintä (lyijykynä, mustekynä, tussi — lisää Plus-tasolla)",
        "PNG-vienti",
        "100 AI-krediittiä kuukaudessa — Atlas ja Chat Fluera AI aina ilmaisia",
        "Socratic 3 istuntoa/vk, Ghost Map 3 vertailua/vk, 1 Exam/vk",
        "Fog of War, FSRS (välitön toisto)",
        "Cross-Zone Bridges — näe käsitteiden väliset yhteydet, jotka järjestelmä löytää",
        "📍 3 Checkpointia per canvas — tallenna opiskeluhetki ja palaa siihen milloin haluat",
        "Time Travel + ääni↔veto-sync esikatselu demo-canvasilla (vain luku)",
        "Local-first, täysin offline (1 laite)",
      ],
      cta: { label: "Aloita ilmaiseksi", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "kuukaudessa · €49 / vuosi (säästä €22 — 2 kuukautta ilmaiseksi)",
      tagline:
        "Täydellinen yksilöopiskelu: cloud sync, AI ilman viikoittaisia rajoja, rajaton äänitys.",
      features: [
        "Cloud sync 5 GB kahdessa laitteessa — canvasisi myös iPadissa ja työpöydällä",
        "Socratic, Ghost Map, Exam ilman frekvenssirajoja (ei enää 3/viikko)",
        "5× enemmän AI-krediittejä kuin Free (500/kk — noin 60 Ghost Mapia tai 18 täyttä Socratic-istuntoa)",
        "Rajaton äänitys",
        "Kaikki V1-siveltimet (6 yhteensä, lisää tulossa)",
        "Täydellinen vienti (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — luo ja muokkaa omat käsiteyhteytesi",
        "📍 Rajattomat checkpointit per canvas",
        "7 päivän ilmainen kokeilu, peruuta milloin tahansa",
      ],
      cta: { label: "Kokeile Plusia", href: "/beta" },
      highlighted: true,
      badge: "Suositeltu",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "kuukaudessa · €99 / vuosi (säästä €44 — 3,5 kuukautta ilmaiseksi)",
      tagline:
        "Tehostettu opiskelu: Time Travel, ääni↔veto-sync, reaaliaikainen yhteistyö, haku kaikista canvasista.",
      features: [
        "⏱️ Time Travel -scrubber — katso opiskeluasi toistossa",
        "🎤 Ääni ↔ veto-sync — kosketa vetoa ja kuule, mitä sanoit sillä hetkellä",
        "🤝 Reaaliaikainen canvas-yhteistyö (CRDT) — kutsu kavereita linkillä",
        "🔍 Proaktiivinen Background OCR — etsi kuukausia sitten kirjoittama kaava kaikista canvasista",
        "Cloud sync 50 GB, rajattomat laitteet",
        "Prioriteetti-sähköpostituki",
        "2000 AI-krediittiä kuukaudessa",
      ],
      cta: { label: "Hanki Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Miten AI-krediitit toimivat?",
      a: "Jokaisella AI-toiminnolla on kiinteä krediittikustannus: Ghost Map 8, Socratic 4 per vaihe, Exam 12 per kysymys, Chat 1 per viesti. Atlas (canvas-toiminnot) ja perus-Background-OCR ovat ilmaisia. Näet aina jäljellä olevan saldon canvas-headerissa — ei piilotettuja rate limittejä, ei yllätyksiä. Käyttämättömät krediitit eivät siirry seuraavaan jaksoon: suunnitelma täydentyy 30 päivän välein liittymispäivästäsi (ei kuukauden 1. päivänä — maksat 30 päivästä ja saat 30 päivää).",
    },
    {
      q: "Mitä jos krediitit loppuvat ennen resetointia?",
      a: "Kerromme etukäteen — pehmeä varoitus, kun olet käyttänyt 80% syklistä. Nollaan tultaessa AI-toiminnot pysähtyvät selkeällä viestillä (ei koskaan hiljaisia esto). Odota seuraavaa 30 päivän sykliä tai päivitä.",
    },
    {
      q: "Miksi Pro maksaa kaksinkertaisesti vain kolmesta pilarista?",
      a: "Pro ei ole 'Plus enemmillä krediiteillä' — se on tehostettu opiskelu. Time Travel toistaa opiskeluistuntosi äänen kanssa vetokohtaisesti synkronoituna: kosketa kaavaa ja kuule selitys, jonka annoit itsellesi. Reaaliaikainen CRDT-yhteistyö antaa työskennellä samanaikaisesti opiskelukavereiden tai kollegoiden kanssa samalla canvasilla. Notability, GoodNotes ja Notion AI eivät tarjoa tätä pakettia — ei tällä integraatiotasolla.",
    },
    {
      q: "Mitä canvaseilleni tapahtuu, jos peruutan Plusin tai Pron?",
      a: "Kaikki pysyy laitteessasi (local-first), ja 3 perussivellintä + PNG-vienti jatkavat toimintaa Free-tasolla. Ylimääräiset canvasit muuttuvat vain luettaviksi, kunnes aktivoit uudelleen tai viet. Mitään ei poisteta ilman eksplisiittistä toimenpidettäsi.",
    },
    {
      q: "Miksi ei ole ilmaista Pro-kokeilua?",
      a: "Plusilla on 7 päivän ilmainen kokeilu. Prolla ei: reaaliaikainen yhteistyö + Time Travel -scrubber ovat toistuvia ominaisuuksia, joiden pilvikustannuksia emme voi antaa ilmaiseksi. Jos haluat arvioida menetelmää, Free on koko canvas — käytä sitä niin kauan kuin tarvitset.",
    },
    {
      q: "Mikä on Checkpoint?",
      a: "Checkpoint on canvasisi kirjanmerkki tiettyyn hetkeen — vähän kuin \"tallenna nimellä\". Luot sen milloin haluat (esim. \"ennen koetta\", \"luvun 3 jälkeen\") ja palaat siihen milloin tahansa: palauttaa canvasin tilan siihen kohtaan. Se eroaa Time Travelista: Checkpoint on kiinteä piste, jonka olet itse valinnut, Time Travel on jatkuva scrubber koko historian yli. Free sisältää 3 Checkpointia per canvas, Plus rajattomasti.",
    },
    {
      q: "Voinko kokeilla Time Travelia + ääni↔veto-syncia ennen Pro-päivitystä?",
      a: "Kyllä. Jokainen Free-käyttäjä saa esiladatun demo-canvasin, jossa voit avata Time Travel -scrubberin ja koskettaa vetoja kuullaksesi synkronoidun äänen — vain luku, demolla. Omien opiskelujesi tallentamiseen tarvitset Pron.",
    },
    {
      q: "Hyvitysehdot?",
      a: "30 päivää, ilman kysymyksiä, sekä kuukausi- että vuositilauksissa. Lähetä sähköpostia osoitteeseen support@fluera.dev rekisteröitymisosoitteesta.",
    },
    {
      q: "Miten opiskelijavarmennus toimii?",
      a: "Vahvistettu .edu- tai akateeminen sähköposti. Euroopan yliopistoille ilman .edu-osoitetta hyväksymme skannatun opiskelijakortin, ISIC:n tai kertaluonteisen sähköpostin tiedekunnan toimistosta.",
    },
    {
      q: "Alennuksia tutkijoille tai voittoa tavoittelemattomille?",
      a: "Kyllä. Tutkimuslaboratoriot, tohtorikoulutusohjelmat ja rekisteröidyt voittoa tavoittelemattomat voivat hakea osoitteessa /contact — yleensä myönnämme Pron Plus-hintaan tai ilmaiseksi vastineeksi jäsennellystä palautteesta.",
    },
    {
      q: "Mitä maksutapoja hyväksytte?",
      a: "MobilePay, Klarna, verkkopankkimaksut, luotto-/maksukortit Stripen kautta, SEPA, Apple Pay ja Google Pay. Education-asiakkaat voivat maksaa pankkisiirrolla tai ostotilauksella.",
    },
    {
      q: "Team- tai Education-suunnitelmat?",
      a: "Tulossa vaiheessa 2 (jaetut työtilat, admin-dashboard, SSO). Kiinnostunut? Lähetä sähköpostia osoitteeseen sales@fluera.dev — rakennamme tiekarttaa ensimmäisten design partnereiden kanssa.",
    },
  ],
};

export default data;
