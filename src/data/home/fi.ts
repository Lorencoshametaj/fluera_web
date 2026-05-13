import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Kaappaus",                    verb: "Luentopäivä",            description: "Kirjoita käsitteet käsin luennon aikana. Sijoita ne tilaan. Hidas kynä pakottaa henkiseen tiivistämiseen — juuri siitä syntyy enkoodaus." },
    { n: 2,  title: "Rekonstruktio",               verb: "Samana iltana",          description: "Sulje kirja. Rakenna muistamasi uudelleen tyhjälle canvakselle. Punaiset solmut, joissa epäröit, ovat kartta siitä, mitä sinun täytyy kerrata (Kapur, tuottava epäonnistuminen, 2008)." },
    { n: 3,  title: "Sokraattinen",                verb: "48 tunnin sisällä",      description: "Tekoäly kysyy, sinä vastaat. Ilmoita varmuutesi 1–5 ennen jokaista paljastusta. Metakognitio tehdään näkyväksi." },
    { n: 4,  title: "Centaur",                     verb: "Heti perään",            description: "Ghost Map asettaa päättelysi ihanteellisen kartan päälle. Hyperkorjaus kiinnittää korjaukset muistiin (Butterfield ja Metcalfe, 2001)." },
    { n: 5,  title: "Uni",                         verb: "Sinä yönä",              description: "Älä tee mitään. Hidasaaltouni toistaa päivän. Hippokampus siirtää jäljet aivokuoreen. Meidän tehtävämme on pysyä poissa tieltä." },
    { n: 6,  title: "Ensimmäinen palautus",        verb: "Päivä 1",                description: "Palaa seuraavana päivänä. Canvas haalistaa sen, mitä melkein tiesit. Kaiva se muistista ja kirjoita uudelleen mikä karkasi." },
    { n: 7,  title: "Vertaisoppiminen",            verb: "Päivät 2–3",             description: "Käy opiskelukaverin canvaksessa. Opeta. Anna itseäsi opettaa. Toisille jäsentäminen vahvistaa sinussa (opettamisen vaikutus)." },
    { n: 8,  title: "Jaksotetut palautukset",      verb: "Päivä 3 · 7 · 14…",      description: "Peräkkäinen uudelleenoppiminen kasvavissa väleissä. Tieteellisten todisteiden gold standard -strategia (Rawson ja Dunlosky, 2011)." },
    { n: 9,  title: "Sillat alueiden välillä",     verb: "Viikkoja myöhemmin",     description: "Loitonna mantereen näkymään. Vedä nuolet kemian ja differentiaaliyhtälöiden välille. Siirtovaikutus on oppimisen todellinen testi." },
    { n: 10, title: "Tenttiin valmistautuminen",   verb: "7–14 päivää aiemmin",    description: "Fog of War. Navigoi oman canvaksesi sumun läpi. Vihreä, punainen, sokeat pisteet — hallinnan kartta piirtyy itsestään." },
    { n: 11, title: "Exam Session",                verb: "7 päivää aiemmin · Päivä",description: "Fluera luo omasta canvaksestasi suljetun kirjan tentin. Ilmoitat varmuutesi 1–5, vastaat käsin, ja Ghost Map asettaa aukon päälle. Hyperkorjaus kiinnittää pysyvästi ne kohdat, joissa olit varma ja väärässä (Butterfield ja Metcalfe, 2001)." },
    { n: 12, title: "Pysyvä kasvu",                verb: "Ikuisesti",              description: "Canvas pysyy kognitiivisena omaelämäkertana. Palaat kahden vuoden päästä ja näet konkreettisen muodon sille, kuinka paljon olet kasvanut." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Toivotut vaikeudet — vastaintuitiivinen löytö, että vaikeampi opiskelu tuottaa parempaa muistamista.", year: "1994" },
    { name: "Butterfield ja Metcalfe", contribution: "Hyperkorjausvaikutus — virheet, jotka on tehty korkealla varmuudella ja kerran korjattu, ovat kestävimpiä.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "Järjestelmä 1 vs. järjestelmä 2 — nopea intuitio vastaan hidas harkinta ajattelussa ja muistissa.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "Lähikehityksen vyöhyke — kapea alue, jolla tuettu oppiminen ylittää yksin oppimisen.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Minäpystyvyys — vahvin akateemisen menestyksen ennustaja, ennen älykkyysosamäärää.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Kasvun ajattelutapa — ponnistelun kehuminen lahjakkuuden sijaan muuttaa reaktion vaikeuteen.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — maksimaalinen kognitiivinen suorituskyky, kun haaste ja taito tasapainottuvat välittömällä palautteella.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Käsitekartta — kartan rakentaminen voittaa valmiin opiskelun, jokaisessa oppiaineessa.", year: "1984" },
    { name: "O'Keefe ja Moser",        contribution: "Place cells ja grid cells — aivojen biologinen GPS. Miksi muistipalatsi toimii.", year: "Nobel 2014", nobel: true },
    { name: "Mueller ja Oppenheimer",  contribution: "Käsin tehdyt muistiinpanot voittavat läppärillä tehdyt käsitteellisissä kysymyksissä — vaikka läppärimuistiinpanot olisivat täydellisemmät.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEG-todisteet: käsin kirjoittaminen aktivoi laajempia aivoverkkoja kuin näppäileminen.", year: "2020" },
    { name: "Roediger ja Karpicke",    contribution: "Palauttamisharjoittelu — testi ei mittaa muistia, se luo sen.", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "Beta" },
    { name: "iPadOS",  api: "Metal",       status: "Beta" },
    { name: "macOS",   api: "Metal",       status: "Beta" },
    { name: "Windows", api: "Direct3D 11", status: "Alpha" },
    { name: "Android", api: "Vulkan",      status: "Alpha" },
    { name: "Linux",   api: "OpenGL",      status: "Alpha" },
    { name: "Web",     api: "WebGPU",      status: "Demo" },
  ],
};

export default data;
