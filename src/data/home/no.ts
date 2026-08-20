import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Fange opp",                  verb: "Forelesningsdag",        description: "Skriv konseptene for hånd under forelesningen. Plasser dem i rommet. Den langsomme pennen tvinger fram mental fortetning — det er der innkodingen skjer." },
    { n: 2,  title: "Rekonstruksjon",              verb: "Samme kveld",            description: "Lukk boka. Rekonstruer det du husker, i et ledig område på det samme canvaset. De røde nodene der du nøler, er kartet over det du må repetere (Kapur, produktiv feil, 2008)." },
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
    { name: "Flanigan m.fl.", contribution: "På tvers av 24 studier gjør håndskrevne notater det litt bedre enn tastede — en liten fordel som vokser når du repeterer dem.", year: "2024" },
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
  medicalUseCase: {
    kicker: "Bygd for de tøffeste studiene",
    title: "Medisinstudiet, på ett canvas.",
    intro: "Anatomi, fysiologi, farmakologi. Tusenvis av fakta som må henge sammen — og kunne hentes fram under eksamenspress. Lesingen som faktisk virker på medisin, er den som føles hard mens du gjør den. Fluera gjør nettopp den til veien med minst motstand.",
    steps: [
      {
        phase: "Forelesningsdag",
        title: "Hvert organsystem blir en region.",
        description: "Skriv hver forelesning i sin egen region av det samme uendelige canvaset — anatomiske strukturer, virkningsmekanismer, metabolske veier. Plasseringen i rommet blir et hukommelsesanker. Tolv penselmotorer og blekk med lav latens på støttede nettbrett.",
      },
      {
        phase: "Samme kveld",
        title: "Gjenskap fra hukommelsen, før boka.",
        description: "Lukk forelesningsmaterialet. Prøv å bygge opp igjen det du husker i et ledig område av det samme canvaset. Hullene du finner — hjernenerven du hoppet over, reseptoren du blandet — er kartet over hva som må leses i kveld. Produktiv fiasko, med hensikt (Kapur, 2008).",
      },
      {
        phase: "Innen 48 timer",
        title: "Sokratisk utspørring på canvaset du selv bygde.",
        description: "KI-en spør, du svarer. Før hver avsløring forutsier du sikkerheten din fra 1 til 5. Hver bom gjort med høy sikkerhet — hvert legemiddel du var sikker på og tok feil av — forsterkes hardere. Hyperkorreksjon (Butterfield og Metcalfe, 2001).",
      },
      {
        phase: "7–14 dager før eksamen",
        title: "Fog of War på systemet du er svakest i.",
        description: "Masker deler av canvaset. Hent anatomien tilbake fra hukommelsen før du avslører. Fluera planlegger gjensynene med FSRS — den moderne algoritmen for spredt repetisjon. På eksamensdagen er canvaset selv simuleringen.",
      },
    ],
    closing: "Hvis dette er arbeidsmåten du allerede gjør halvveis med papir, PDF-er og tre åpne apper, gjør Fluera den om til én sammenhengende sløyfe. Bygd for måten hukommelsen virker på, og prøvd mot studier som ikke tilgir noe annet.",
  },
};

export default data;
