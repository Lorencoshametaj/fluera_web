import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Indfang",                    verb: "Forelæsningsdag",        description: "Skriv begreberne i hånden under forelæsningen. Placer dem i rummet. Den langsomme pen tvinger mental fortætning — det er præcis dér, indkodningen sker." },
    { n: 2,  title: "Rekonstruktion",             verb: "Samme aften",            description: "Luk bogen. Rekonstruér det, du husker, på et tomt canvas. De røde knuder, hvor du tøver, er kortet over det, du skal repetere (Kapur, produktivt fejl, 2008)." },
    { n: 3,  title: "Sokratisk",                  verb: "Inden for 48 t",         description: "AI'en spørger, du svarer. Vurdér din sikkerhed fra 1 til 5 før hver opklaring. Metakognition gjort eksplicit." },
    { n: 4,  title: "Centaur",                    verb: "Lige efter",             description: "Ghost Map lægger din tanke oven på det ideelle kort. Hyperkorrektion forankrer rettelserne i hukommelsen (Butterfield og Metcalfe, 2001)." },
    { n: 5,  title: "Søvn",                       verb: "Den nat",                description: "Gør ingenting. Slow-wave-søvnen genafspiller dagen. Hippocampus overfører sporene til cortex. Vores opgave er at gå af vejen." },
    { n: 6,  title: "Første genkald",             verb: "Dag 1",                  description: "Kom tilbage dagen efter. Canvasset toner det ud, du næsten kunne. Hent det fra hukommelsen og skriv det, der gled væk, om." },
    { n: 7,  title: "Peer-læring",                verb: "Dag 2–3",                description: "Besøg en medstuderendes canvas. Undervis. Lad dig undervise. At strukturere det for andre styrker det hos dig (lærer-effekten)." },
    { n: 8,  title: "Distribuerede genkald",      verb: "Dag 3 · 7 · 14…",        description: "Successiv genindlæring i voksende intervaller. Guld-standard-strategien i den videnskabelige evidens (Rawson og Dunlosky, 2011)." },
    { n: 9,  title: "Broer mellem domæner",       verb: "Uger senere",            description: "Zoom ud til kontinent-visningen. Træk pile mellem kemi og differentialligninger. Transfer er den egentlige test på læring." },
    { n: 10, title: "Eksamensforberedelse",       verb: "7–14 dage før",          description: "Fog of War. Naviger gennem tågen i dit eget canvas. Grøn, rød, blinde pletter — mestrings-kortet tegner sig selv." },
    { n: 11, title: "Exam Session",               verb: "7 dage før · Dagen",     description: "Fluera genererer en closed-book-eksamen ud fra dit eget canvas. Du angiver din sikkerhed fra 1 til 5, svarer i hånden, og Ghost Map lægger sig oven på hullet. Hyperkorrektion forankrer varigt de steder, hvor du var sikker og tog fejl (Butterfield og Metcalfe, 2001)." },
    { n: 12, title: "Vedvarende vækst",           verb: "For altid",              description: "Canvasset bliver stående som en kognitiv selvbiografi. Du kommer tilbage to år senere og ser den håndgribelige form på, hvor meget du er vokset." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Ønskværdige vanskeligheder — den kontraintuitive opdagelse, at hårdere læring producerer bedre erindring.", year: "1994" },
    { name: "Butterfield og Metcalfe", contribution: "Hyperkorrektion-effekten — fejl begået med høj sikkerhed og rettet én gang er de mest holdbare.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "System 1 vs. system 2 — hurtig intuition mod langsom overvejelse i tænkning og hukommelse.", year: "2011" },
    { name: "Lev Vygotskij",           contribution: "Nærmeste udviklingszone — det smalle bånd, hvor læring med støtte slår læring alene.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Self-efficacy — den stærkeste prædiktor for akademisk succes, foran IQ.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Vækst-mindset — at rose indsats frem for talent ændrer reaktionen på modgang.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — maksimal kognitiv ydeevne, når udfordring og evne balancerer med umiddelbar feedback.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Begrebskortlægning — at bygge et kort slår at studere et færdigt, i alle discipliner.", year: "1984" },
    { name: "O'Keefe og Moser",        contribution: "Place cells og grid cells — hjernens biologiske GPS. Hvorfor hukommelsespaladset virker.", year: "Nobel 2014", nobel: true },
    { name: "Mueller og Oppenheimer",  contribution: "Håndskrevne noter slår laptop-noter på konceptuelle spørgsmål — selv når laptop-noterne er mere fuldstændige.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEG-evidens: håndskrift aktiverer bredere hjernenetværk end tastning.", year: "2020" },
    { name: "Roediger og Karpicke",    contribution: "Genfindelsespraksis — testen måler ikke hukommelse, den skaber den.", year: "2006" },
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
