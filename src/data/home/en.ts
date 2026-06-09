import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Capture",              verb: "Lecture day",    description: "Write concepts by hand during the lecture. Position them in space. Compression — forced by the slowness of the pen — is where encoding begins." },
    { n: 2,  title: "Reconstruct",          verb: "Same evening",   description: "Close the book. Rebuild what you remember on a blank canvas. The red nodes where you falter are the map of what to study next (Kapur, productive failure, 2008)." },
    { n: 3,  title: "Socratic",             verb: "Within 48h",     description: "The AI asks; you answer. Rate your confidence one to five before each reveal. Metacognition made explicit." },
    { n: 4,  title: "Centaur",              verb: "Right after",    description: "Ghost Map overlays your reasoning against the ideal. Hypercorrection makes the gaps permanent (Butterfield & Metcalfe, 2001)." },
    { n: 5,  title: "Sleep",                verb: "That night",     description: "Do nothing. Slow-wave sleep replays the day. The hippocampus hands traces to the neocortex. Our job is to get out of the way." },
    { n: 6,  title: "First Return",         verb: "Day 1",          description: "Come back the next day. The canvas fades what you almost knew. Pull it back from memory, then rewrite what slipped." },
    { n: 7,  title: "Peer Learning",        verb: "Days 2–3",       description: "Visit a classmate's canvas. Teach. Be taught. Recall duels. Organising for others cements it for you (protégé effect)." },
    { n: 8,  title: "Spaced Returns",       verb: "Day 3 · 7 · 14…",description: "Successive relearning at widening intervals. The gold-standard evidence-based strategy (Rawson & Dunlosky, 2011)." },
    { n: 9,  title: "Cross-Domain Bridges", verb: "Weeks later",    description: "Zoom out to continent view. Draw arrows between chemistry and differential equations. Transfer is the real test of learning." },
    { n: 10, title: "Exam Prep",            verb: "7–14 days before",description: "Fog of War mode. Navigate the mist of your own canvas. Green, red, blind spots — the mastery map makes itself." },
    { n: 11, title: "Exam Session",         verb: "7 days before · The day", description: "Fluera generates a closed-book exam from your own canvas. Rate your confidence one to five, answer by hand, then Ghost Map overlays the gap. Hypercorrection makes overconfident misses permanent (Butterfield & Metcalfe, 2001)." },
    { n: 12, title: "Lasting Growth",       verb: "Forever after",  description: "The canvas persists as a cognitive autobiography. Return in two years and see the tangible shape of how much you've grown." },
  ],
  authors: [
    { name: "Robert A. Bjork", contribution: "Desirable difficulties — the counterintuitive finding that harder study produces better retention.", year: "1994" },
    { name: "Butterfield & Metcalfe", contribution: "Hypercorrection Effect — confident errors are remembered most permanently once corrected.", year: "2001" },
    { name: "Daniel Kahneman", contribution: "System 1 vs System 2 — fast intuition versus slow deliberation in thinking and memory.", year: "2011" },
    { name: "Lev Vygotsky", contribution: "Zone of Proximal Development — the narrow band where scaffolded practice beats solo practice.", year: "1978" },
    { name: "Albert Bandura", contribution: "Self-efficacy — the single strongest predictor of academic success, stronger than IQ.", year: "1977" },
    { name: "Carol Dweck", contribution: "Growth mindset — praising effort over talent changes how learners respond to difficulty.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — peak cognitive performance when challenge matches skill and feedback is immediate.", year: "1990" },
    { name: "Joseph Novak", contribution: "Concept mapping — building a map beats studying a pre-built one, across disciplines.", year: "1984" },
    { name: "O'Keefe & Moser", contribution: "Place and grid cells — the brain's built-in GPS. Why memory palaces work.", year: "Nobel 2014", nobel: true },
    { name: "Mueller & Oppenheimer", contribution: "Handwritten notes beat laptop notes on conceptual recall — even when the laptop notes were more complete.", year: "2014" },
    { name: "Audrey van der Meer", contribution: "EEG evidence that handwriting recruits broader brain networks than typing.", year: "2020" },
    { name: "Roediger & Karpicke", contribution: "Retrieval practice — testing does not measure memory, it creates it.", year: "2006" },
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
    kicker: "Built different",
    title: "Fluera, against the apps you already use.",
    sub: "Most study tools optimize for the part of studying that already feels productive — capture, formatting, review. Fluera optimizes for the part that produces memory.",
    columns: { fluera: "Fluera", goodNotes: "GoodNotes", notion: "Notion", anki: "Anki" },
    rows: [
      { feature: "Native handwriting + infinite canvas", fluera: "Yes — six platforms", goodNotes: "Yes — Apple-first", notion: "No", anki: "No" },
      { feature: "Forces retrieval before reveal", fluera: "Yes — Socratic mode", goodNotes: "No", notion: "No", anki: "Yes — by design" },
      { feature: "Spaced repetition built-in (FSRS)", fluera: "Yes — modern FSRS", goodNotes: "No", notion: "No", anki: "Yes — SM-2 legacy" },
      { feature: "Hypercorrection on overconfident errors", fluera: "Yes — Ghost Map", goodNotes: "No", notion: "No", anki: "No" },
      { feature: "Metacognition (confidence calibration)", fluera: "Yes — 1–5 slider", goodNotes: "No", notion: "No", anki: "Partial" },
      { feature: "Anti-passive: no highlighter, no streaks", fluera: "Yes — by design", goodNotes: "No", notion: "No", anki: "Streaks present" },
      { feature: "AI that asks, not answers", fluera: "Yes", goodNotes: "No", notion: "Summaries", anki: "No" },
      { feature: "Replay your own thinking over time", fluera: "Yes — time travel", goodNotes: "Page replay", notion: "No", anki: "No" },
    ],
    footnote: "Comparison reflects each app's defaults as of 2026. Anki and GoodNotes are admirable tools — Fluera is a different bet: the study loop, end-to-end, built on the evidence.",
  },
  medicalUseCase: {
    kicker: "Built for the hardest curricula",
    title: "Medical school, on a single canvas.",
    intro: "Anatomy, physiology, pharmacology. Thousands of facts that have to interconnect — and stay retrievable under exam pressure. The studying that actually works for medicine is the kind that feels hard while you do it. Fluera makes that kind the path of least resistance.",
    steps: [
      {
        phase: "Lecture day",
        title: "One canvas per organ system.",
        description: "Write each lesson by hand on an infinite canvas — anatomical structures, drug mechanisms, pathways. Spatial position becomes memory anchor. Thirteen brush engines, sub-15ms latency on iPad and Android tablets.",
      },
      {
        phase: "Same evening",
        title: "Reconstruct from memory, before the book.",
        description: "Close the lecture material. Try to rebuild what you remember on a blank canvas. The gaps you find — the cranial nerve you skipped, the receptor you confused — are the map of what to study tonight. Productive failure, by design (Kapur, 2008).",
      },
      {
        phase: "Within 48h",
        title: "Socratic interrogation on the canvas you built.",
        description: "The AI asks; you answer. Before each reveal, you predict your confidence 1–5. Every overconfident miss — every drug you were sure about and got wrong — gets reinforced harder. Hypercorrection (Butterfield & Metcalfe, 2001).",
      },
      {
        phase: "7–14 days before the exam",
        title: "Fog of War on the system you're weakest at.",
        description: "Mask sections of the canvas. Pull anatomy back from memory before revealing. Fluera schedules returns with FSRS — the modern spaced-repetition algorithm. By exam day, the canvas itself is the simulation.",
      },
    ],
    closing: "If this is the workflow you already half-do with paper and PDFs and three open apps, Fluera makes it one continuous loop. Built for the way memory works, tested against curricula that punish anything else.",
  },
};

export default data;
