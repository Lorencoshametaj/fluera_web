import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Cattura",             verb: "Giorno lezione",        description: "Scrivi i concetti a mano durante la lezione. Posizionali nello spazio. La penna lenta forza la compressione mentale — è lì che nasce la codifica." },
    { n: 2,  title: "Ricostruzione",       verb: "Stessa sera",           description: "Chiudi il libro. Ricostruisci ciò che ricordi su un canvas vuoto. I nodi rossi dove vacilli sono la mappa di cosa studiare (Kapur, productive failure, 2008)." },
    { n: 3,  title: "Socratica",           verb: "Entro 48h",             description: "L'IA chiede, tu rispondi. Dichiari la tua confidenza da 1 a 5 prima di ogni rivelazione. Metacognizione resa esplicita." },
    { n: 4,  title: "Centauro",            verb: "Subito dopo",           description: "Ghost Map sovrappone il tuo ragionamento alla mappa ideale. L'ipercorrezione fissa le correzioni nella memoria (Butterfield & Metcalfe, 2001)." },
    { n: 5,  title: "Sonno",               verb: "Quella notte",          description: "Non fare nulla. Il sonno a onde lente rigioca il giorno. L'ippocampo passa le tracce alla corteccia. Noi ci facciamo da parte." },
    { n: 6,  title: "Primo ritorno",       verb: "Giorno 1",              description: "Torna il giorno dopo. Il canvas sfuma ciò che quasi sapevi. Lo recuperi dalla memoria e riscrivi ciò che è scivolato." },
    { n: 7,  title: "Apprendimento solidale",verb: "Giorni 2–3",           description: "Visita il canvas di un compagno. Insegna. Fatti insegnare. Organizzare per altri lo consolida per te (apprendimento per insegnamento)." },
    { n: 8,  title: "Ritorni SRS",         verb: "Giorno 3 · 7 · 14…",    description: "Riapprendimento successivo a intervalli crescenti. La strategia gold standard nell'evidenza scientifica (Rawson & Dunlosky, 2011)." },
    { n: 9,  title: "Ponti cross-dominio", verb: "Settimane dopo",        description: "Zoom out alla vista continente. Traccia frecce tra chimica ed equazioni differenziali. Il transfer è il test vero dell'apprendimento." },
    { n: 10, title: "Preparazione esame",  verb: "7–14 giorni prima",     description: "Fog of War. Naviga nella nebbia del tuo canvas. Verde, rosso, punti ciechi — la mappa della padronanza si disegna da sola." },
    { n: 11, title: "Exam Session",        verb: "7 giorni prima · Il giorno",description: "Fluera genera un esame closed-book dal tuo canvas. Dichiari la confidenza da 1 a 5, rispondi a mano, poi Ghost Map sovrappone il divario. L'ipercorrezione fissa per sempre i punti dove eri sicuro e hai sbagliato (Butterfield e Metcalfe, 2001)." },
    { n: 12, title: "Crescita permanente", verb: "Per sempre",            description: "Il canvas persiste come autobiografia cognitiva. Torni dopo due anni e vedi la forma tangibile di quanto sei cresciuto." },
  ],
  authors: [
    { name: "Robert A. Bjork", contribution: "Desirable difficulties — la scoperta controintuitiva che uno studio più difficile produce ricordo migliore.", year: "1994" },
    { name: "Butterfield e Metcalfe", contribution: "Effetto ipercorrezione — gli errori fatti con alta confidenza, una volta corretti, sono i più duraturi.", year: "2001" },
    { name: "Daniel Kahneman", contribution: "Sistema 1 vs Sistema 2 — intuizione veloce contro deliberazione lenta nel pensiero e nella memoria.", year: "2011" },
    { name: "Lev Vygotsky", contribution: "Zona di sviluppo prossimale — la fascia stretta dove imparare con scaffolding supera l'imparare da soli.", year: "1978" },
    { name: "Albert Bandura", contribution: "Auto-efficacia — il predittore singolo più forte del successo accademico, superiore al QI.", year: "1977" },
    { name: "Carol Dweck", contribution: "Growth mindset — lodare lo sforzo invece del talento cambia la risposta alla difficoltà.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — massima prestazione cognitiva quando sfida e abilità si bilanciano.", year: "1990" },
    { name: "Joseph Novak", contribution: "Concept mapping — costruire una mappa batte studiarne una precostruita, in ogni disciplina.", year: "1984" },
    { name: "O'Keefe e Moser", contribution: "Place cells e grid cells — il GPS biologico del cervello. Perché il Palazzo della Memoria funziona.", year: "Nobel 2014", nobel: true },
    { name: "Mueller e Oppenheimer", contribution: "Gli appunti a mano battono quelli al laptop sulle domande concettuali — anche quando quelli al laptop sono più completi.", year: "2014" },
    { name: "Audrey van der Meer", contribution: "Evidenza EEG: la scrittura a mano attiva reti cerebrali più ampie della digitazione.", year: "2020" },
    { name: "Roediger e Karpicke", contribution: "Retrieval practice — il test non misura la memoria, la crea.", year: "2006" },
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
  comparison: {
    kicker: "Differente per costruzione",
    title: "Fluera, contro le app che usi già.",
    sub: "La maggior parte delle app di studio ottimizza la parte di studio che sembra già produttiva — cattura, formattazione, ripasso. Fluera ottimizza la parte che produce memoria.",
    columns: { fluera: "Fluera", goodNotes: "GoodNotes", notion: "Notion", anki: "Anki" },
    rows: [
      { feature: "Handwriting nativo + canvas infinito", fluera: "Sì — sei piattaforme", goodNotes: "Sì — Apple-first", notion: "No", anki: "No" },
      { feature: "Forza il recupero prima della risposta", fluera: "Sì — modalità Socratica", goodNotes: "No", notion: "No", anki: "Sì — per design" },
      { feature: "Ripetizione spaziata integrata (FSRS)", fluera: "Sì — FSRS moderno", goodNotes: "No", notion: "No", anki: "Sì — SM-2 storico" },
      { feature: "Ipercorrezione sugli errori sicuri", fluera: "Sì — Ghost Map", goodNotes: "No", notion: "No", anki: "No" },
      { feature: "Metacognizione (calibrazione confidenza)", fluera: "Sì — slider 1–5", goodNotes: "No", notion: "No", anki: "Parziale" },
      { feature: "Anti-passivo: no evidenziatore, no streak", fluera: "Sì — per design", goodNotes: "No", notion: "No", anki: "Streak presenti" },
      { feature: "AI che chiede, non risponde", fluera: "Sì", goodNotes: "No", notion: "Riassunti", anki: "No" },
      { feature: "Rivedi il tuo pensiero nel tempo", fluera: "Sì — time travel", goodNotes: "Page replay", notion: "No", anki: "No" },
    ],
    footnote: "La tabella riflette le impostazioni di default di ciascuna app nel 2026. Anki e GoodNotes restano strumenti notevoli — Fluera è una scommessa diversa: il ciclo di studio completo, end-to-end, costruito sull'evidenza scientifica.",
  },
  medicalUseCase: {
    kicker: "Costruito per i curricula più duri",
    title: "Medicina, in un unico canvas.",
    intro: "Anatomia, fisiologia, farmacologia. Migliaia di nozioni che devono restare collegate — e recuperabili sotto pressione d'esame. Lo studio che funziona davvero in medicina è quello che sembra duro mentre lo fai. Fluera trasforma quel tipo di studio nella via di minima resistenza.",
    steps: [
      {
        phase: "Giorno della lezione",
        title: "Un canvas per ogni apparato.",
        description: "Scrivi ogni lezione a mano su un canvas infinito — strutture anatomiche, meccanismi farmacologici, vie metaboliche. La posizione nello spazio diventa àncora di memoria. Tredici brush engine, latenza tratto sotto i 15ms su iPad e tablet Android.",
      },
      {
        phase: "Stessa sera",
        title: "Ricostruisci dalla memoria, prima del libro.",
        description: "Chiudi il materiale della lezione. Prova a ricostruire ciò che ricordi su un canvas vuoto. I vuoti che trovi — il nervo cranico saltato, il recettore confuso — sono la mappa di cosa studiare stasera. Productive failure, per design (Kapur, 2008).",
      },
      {
        phase: "Entro 48 ore",
        title: "Interrogazione socratica sul canvas che hai costruito.",
        description: "L'IA chiede, tu rispondi. Prima di ogni rivelazione dichiari la confidenza 1–5. Ogni errore fatto con alta sicurezza — ogni farmaco di cui eri certo e hai sbagliato — viene rinforzato più duramente. Ipercorrezione (Butterfield e Metcalfe, 2001).",
      },
      {
        phase: "7–14 giorni prima dell'esame",
        title: "Fog of War sull'apparato in cui sei più debole.",
        description: "Maschera sezioni del canvas. Recupera l'anatomia dalla memoria prima di scoprirla. Fluera schedula i ritorni con FSRS — l'algoritmo moderno di ripetizione spaziata. Il giorno dell'esame, il canvas stesso è la simulazione.",
      },
    ],
    closing: "Se questo è il workflow che già fai a metà con carta, PDF e tre app aperte, Fluera lo trasforma in un unico ciclo continuo. Costruito per come funziona la memoria, testato contro curricula che non perdonano altro.",
  },
};

export default data;
