import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Vastleggen",                verb: "Dag van het college",   description: "Schrijf de concepten met de hand tijdens het college. Plaats ze in de ruimte. De trage pen dwingt mentale compressie af — daar ontstaat de codering." },
    { n: 2,  title: "Reconstructie",             verb: "Diezelfde avond",       description: "Sluit het boek. Reconstrueer wat je je herinnert op een leeg canvas. De rode knopen waar je aarzelt zijn de kaart van wat je moet herhalen (Kapur, productief falen, 2008)." },
    { n: 3,  title: "Socratisch",                verb: "Binnen 48 uur",         description: "De AI vraagt, jij antwoordt. Geef je zekerheid van 1 tot 5 op vóór elke onthulling. Metacognitie expliciet gemaakt." },
    { n: 4,  title: "Centaur",                   verb: "Direct daarna",         description: "Ghost Map legt je redenering over de ideale kaart. Hypercorrectie veranker de correcties in het geheugen (Butterfield en Metcalfe, 2001)." },
    { n: 5,  title: "Slaap",                     verb: "Die nacht",             description: "Doe niets. Slow-wave-slaap speelt de dag opnieuw af. De hippocampus draagt de sporen over aan de cortex. Onze taak is uit de weg te gaan." },
    { n: 6,  title: "Eerste herinnering",        verb: "Dag 1",                 description: "Kom de volgende dag terug. Het canvas vervaagt wat je bijna wist. Haal het op uit je geheugen en herschrijf wat je ontglipte." },
    { n: 7,  title: "Leren met medestudenten",   verb: "Dag 2–3",               description: "Bezoek het canvas van een medestudent. Leer. Laat je leren. Het structureren voor anderen consolideert het bij jou (lesgeefeffect)." },
    { n: 8,  title: "Gespreide herhalingen",     verb: "Dag 3 · 7 · 14…",       description: "Successieve herleren in groeiende intervallen. De goldstandard-strategie in het wetenschappelijke bewijs (Rawson en Dunlosky, 2011)." },
    { n: 9,  title: "Bruggen tussen domeinen",   verb: "Weken later",           description: "Zoom uit naar het continentaanzicht. Trek pijlen tussen scheikunde en differentiaalvergelijkingen. Transfer is de echte test van leren." },
    { n: 10, title: "Tentamenvoorbereiding",     verb: "7–14 dagen ervoor",     description: "Fog of War. Navigeer door de mist van je eigen canvas. Groen, rood, blinde vlekken — de beheersingskaart tekent zichzelf." },
    { n: 11, title: "Exam Session",              verb: "7 dagen ervoor · De dag",description: "Fluera genereert een closed-book-tentamen uit je eigen canvas. Je geeft je zekerheid van 1 tot 5 op, antwoordt met de hand, en Ghost Map legt het gat over. Hypercorrectie veranker voorgoed de plekken waar je zeker was en het mis had (Butterfield en Metcalfe, 2001)." },
    { n: 12, title: "Permanente groei",          verb: "Voor altijd",           description: "Het canvas blijft als cognitieve autobiografie. Je komt twee jaar later terug en ziet de tastbare vorm van hoeveel je gegroeid bent." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Wenselijke moeilijkheden — de contra-intuïtieve ontdekking dat moeilijker studeren betere herinnering oplevert.", year: "1994" },
    { name: "Butterfield en Metcalfe", contribution: "Hypercorrectie-effect — fouten gemaakt met hoge zekerheid zijn, eenmaal gecorrigeerd, het meest duurzaam.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "Systeem 1 vs. Systeem 2 — snelle intuïtie tegenover trage deliberatie in denken en geheugen.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "Zone van naaste ontwikkeling — het smalle bereik waarin leren met steun het leren alleen overtreft.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Zelfeffectiviteit — de sterkste voorspeller van academisch succes, boven IQ.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Groeimindset — inspanning prijzen in plaats van talent verandert de reactie op moeilijkheid.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — maximale cognitieve prestatie wanneer uitdaging en vaardigheid in balans zijn met directe feedback.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Concept mapping — een kaart bouwen verslaat een kant-en-klare bestuderen, in elk vakgebied.", year: "1984" },
    { name: "O'Keefe en Moser",        contribution: "Place cells en grid cells — het biologische GPS van het brein. Waarom het geheugenpaleis werkt.", year: "Nobel 2014", nobel: true },
    { name: "Mueller en Oppenheimer",  contribution: "Handgeschreven aantekeningen verslaan laptopaantekeningen bij conceptuele vragen — zelfs als de laptopaantekeningen vollediger zijn.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEG-bewijs: handschrift activeert bredere hersennetwerken dan typen.", year: "2020" },
    { name: "Roediger en Karpicke",    contribution: "Ophaalpraktijk — de toets meet niet het geheugen, hij creëert het.", year: "2006" },
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
