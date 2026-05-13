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
};

export default data;
