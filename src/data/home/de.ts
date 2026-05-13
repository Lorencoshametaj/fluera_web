import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Erfassen",                  verb: "Vorlesungstag",         description: "Schreib die Konzepte während der Vorlesung von Hand. Platziere sie im Raum. Der langsame Stift erzwingt mentale Verdichtung — genau dort entsteht die Encodierung." },
    { n: 2,  title: "Rekonstruktion",             verb: "Am selben Abend",       description: "Schließ das Buch. Rekonstruiere, woran du dich erinnerst, auf einem leeren Canvas. Die roten Knoten, an denen du zögerst, sind die Karte dessen, was du wiederholen musst (Kapur, produktives Scheitern, 2008)." },
    { n: 3,  title: "Sokratisch",                 verb: "Innerhalb von 48 h",    description: "Die KI fragt, du antwortest. Bewerte deine Sicherheit von 1 bis 5 vor jeder Auflösung. Metakognition explizit gemacht." },
    { n: 4,  title: "Centaur",                    verb: "Direkt danach",         description: "Ghost Map legt dein Denken über die ideale Karte. Hyperkorrektur verankert die Korrekturen im Gedächtnis (Butterfield und Metcalfe, 2001)." },
    { n: 5,  title: "Schlaf",                     verb: "In dieser Nacht",       description: "Tu nichts. Slow-Wave-Schlaf spielt den Tag erneut ab. Der Hippocampus überträgt die Spuren in den Cortex. Unsere Aufgabe ist es, aus dem Weg zu gehen." },
    { n: 6,  title: "Erster Rückruf",             verb: "Tag 1",                 description: "Komm am nächsten Tag zurück. Das Canvas blendet aus, was du fast wusstest. Hol es aus dem Gedächtnis und schreib neu, was entglitten ist." },
    { n: 7,  title: "Peer-Lernen",                verb: "Tag 2–3",               description: "Besuch das Canvas einer Kommilitonin. Lehre. Lass dich lehren. Für andere zu strukturieren festigt es bei dir (Lehreffekt)." },
    { n: 8,  title: "Verteilte Rückrufe",         verb: "Tag 3 · 7 · 14…",       description: "Sukzessives Wiederlernen in wachsenden Intervallen. Die Gold-Standard-Strategie in den wissenschaftlichen Belegen (Rawson und Dunlosky, 2011)." },
    { n: 9,  title: "Brücken zwischen Domänen",   verb: "Wochen später",         description: "Zoom heraus auf die Kontinentansicht. Zieh Pfeile zwischen Chemie und Differenzialgleichungen. Transfer ist der eigentliche Test des Lernens." },
    { n: 10, title: "Prüfungsvorbereitung",       verb: "7–14 Tage vorher",      description: "Fog of War. Navigiere durch den Nebel deines eigenen Canvas. Grün, rot, blinde Flecken — die Mastery-Karte zeichnet sich von selbst." },
    { n: 11, title: "Exam Session",               verb: "7 Tage vorher · Der Tag",description: "Fluera erzeugt aus deinem eigenen Canvas eine Closed-Book-Prüfung. Du gibst deine Sicherheit von 1 bis 5 an, antwortest von Hand, und Ghost Map überlagert die Lücke. Hyperkorrektur verankert dauerhaft die Stellen, an denen du sicher warst und falsch lagst (Butterfield und Metcalfe, 2001)." },
    { n: 12, title: "Dauerhaftes Wachstum",       verb: "Für immer",             description: "Das Canvas bleibt als kognitive Autobiografie. Du kommst zwei Jahre später zurück und siehst die greifbare Form dessen, wie viel du gewachsen bist." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Erwünschte Schwierigkeiten — die kontraintuitive Entdeckung, dass härteres Lernen besseres Erinnern erzeugt.", year: "1994" },
    { name: "Butterfield und Metcalfe", contribution: "Hyperkorrektur-Effekt — Fehler, die mit hoher Sicherheit gemacht und einmal korrigiert wurden, sind die langlebigsten.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "System 1 vs. System 2 — schnelle Intuition gegen langsame Überlegung im Denken und im Gedächtnis.", year: "2011" },
    { name: "Lev Vygotskij",           contribution: "Zone der nächsten Entwicklung — der schmale Bereich, in dem Lernen mit Unterstützung das Lernen allein übertrifft.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Selbstwirksamkeit — der stärkste Prädiktor akademischen Erfolgs, vor dem IQ.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Wachstumsdenken — Anstrengung statt Talent zu loben verändert die Reaktion auf Schwierigkeit.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — maximale kognitive Leistung, wenn Herausforderung und Können sich mit unmittelbarem Feedback ausbalancieren.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Concept Mapping — eine Karte zu bauen schlägt das Studieren einer fertigen, in jeder Disziplin.", year: "1984" },
    { name: "O'Keefe und Moser",       contribution: "Place cells und grid cells — das biologische GPS des Gehirns. Warum der Gedächtnispalast funktioniert.", year: "Nobel 2014", nobel: true },
    { name: "Mueller und Oppenheimer", contribution: "Handgeschriebene Notizen schlagen Laptop-Notizen bei konzeptuellen Fragen — auch wenn die Laptop-Notizen vollständiger sind.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEG-Belege: Handschrift aktiviert breitere Hirnnetzwerke als Tippen.", year: "2020" },
    { name: "Roediger und Karpicke",   contribution: "Abrufpraxis — der Test misst nicht das Gedächtnis, er erzeugt es.", year: "2006" },
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
