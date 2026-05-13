import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Fange opp",                  verb: "Forelesningsdag",        description: "Skriv konseptene for hånd under forelesningen. Plasser dem i rommet. Den langsomme pennen tvinger fram mental fortetning — det er der innkodingen skjer." },
    { n: 2,  title: "Rekonstruksjon",              verb: "Samme kveld",            description: "Lukk boka. Rekonstruer det du husker, på et tomt canvas. De røde nodene der du nøler, er kartet over det du må repetere (Kapur, produktiv feil, 2008)." },
    { n: 3,  title: "Sokratisk",                   verb: "Innen 48 timer",         description: "AI spør, du svarer. Vurder din egen sikkerhet fra 1 til 5 før hver oppløsning. Metakognisjon gjort eksplisitt." },
    { n: 4,  title: "Centaur",                     verb: "Rett etterpå",           description: "Ghost Map legger din tankegang oppå det ideelle kartet. Hyperkorreksjon forankrer rettelsene i hukommelsen (Butterfield og Metcalfe, 2001)." },
    { n: 5,  title: "Søvn",                        verb: "Den natten",             description: "Ikke gjør noe. Slow-wave-søvn spiller dagen om igjen. Hippocampus overfører sporene til cortex. Vår oppgave er å holde oss unna." },
    { n: 6,  title: "Første gjenkalling",          verb: "Dag 1",                  description: "Kom tilbake dagen etter. Canvaset gråer ut det du nesten husket. Hent det fra hukommelsen og skriv på nytt det som glapp." },
    { n: 7,  title: "Peer-læring",                 verb: "Dag 2–3",                description: "Besøk canvaset til en medstudent. Lær bort. La deg bli lært opp. Å strukturere for andre festner det hos deg selv (lærereffekten)." },
    { n: 8,  title: "Distribuerte gjenkallinger",  verb: "Dag 3 · 7 · 14…",        description: "Suksessiv gjeninnlæring i økende intervaller. Den gylne strategien i den vitenskapelige evidensen (Rawson og Dunlosky, 2011)." },
    { n: 9,  title: "Broer mellom domener",        verb: "Uker senere",            description: "Zoom ut til kontinentvisningen. Trekk piler mellom kjemi og differensiallikninger. Overføring er den egentlige testen på læring." },
    { n: 10, title: "Eksamensforberedelse",        verb: "7–14 dager før",         description: "Fog of War. Naviger gjennom tåka i ditt eget canvas. Grønt, rødt, blinde flekker — mestringskartet tegner seg selv." },
    { n: 11, title: "Exam Session",                verb: "7 dager før · Selve dagen", description: "Fluera genererer en closed-book-eksamen ut fra ditt eget canvas. Du oppgir sikkerheten din fra 1 til 5, svarer for hånd, og Ghost Map legger gapet oppå. Hyperkorreksjon forankrer varig de stedene der du var sikker og tok feil (Butterfield og Metcalfe, 2001)." },
    { n: 12, title: "Varig vekst",                 verb: "For alltid",             description: "Canvaset blir stående som en kognitiv selvbiografi. Du kommer tilbake to år senere og ser den håndfaste formen av hvor mye du har vokst." },
  ],
  authors: [
    { name: "Robert A. Bjork",          contribution: "Ønskede vanskeligheter — den kontraintuitive oppdagelsen av at hardere læring gir bedre gjenkalling.", year: "1994" },
    { name: "Butterfield og Metcalfe",  contribution: "Hyperkorreksjon-effekten — feil gjort med høy sikkerhet og rettet én gang er de mest varige.", year: "2001" },
    { name: "Daniel Kahneman",          contribution: "System 1 vs. system 2 — rask intuisjon mot langsom resonnering i tenkning og hukommelse.", year: "2011" },
    { name: "Lev Vygotskij",            contribution: "Proksimal utviklingssone — det smale området der læring med støtte slår læring alene.", year: "1978" },
    { name: "Albert Bandura",           contribution: "Self-efficacy — den sterkeste prediktoren for akademisk suksess, foran IQ.", year: "1977" },
    { name: "Carol Dweck",              contribution: "Vekst-mindset — å rose innsats framfor talent endrer reaksjonen på vanskeligheter.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi",  contribution: "Flow — maksimal kognitiv ytelse når utfordring og evne balanserer hverandre med umiddelbar tilbakemelding.", year: "1990" },
    { name: "Joseph Novak",             contribution: "Begrepskart — å bygge et kart slår å studere et ferdig ett, i alle disipliner.", year: "1984" },
    { name: "O'Keefe og Moser",         contribution: "Place cells og grid cells — hjernens biologiske GPS. Derfor virker memory palace.", year: "Nobel 2014", nobel: true },
    { name: "Mueller og Oppenheimer",   contribution: "Håndskrevne notater slår laptop-notater på konseptuelle spørsmål — selv når laptop-notatene er mer fullstendige.", year: "2014" },
    { name: "Audrey van der Meer",      contribution: "EEG-evidens: håndskrift aktiverer bredere hjernenettverk enn tasting.", year: "2020" },
    { name: "Roediger og Karpicke",     contribution: "Gjenkalling-praksis — testen måler ikke hukommelsen, den skaper den.", year: "2006" },
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
