import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Capture",                    verb: "Jour de cours",         description: "Écris les concepts à la main pendant le cours. Place-les dans l'espace. Le stylo lent force la compression mentale — c'est là que naît l'encodage." },
    { n: 2,  title: "Reconstruction",             verb: "Le soir même",          description: "Ferme le livre. Reconstruis ce dont tu te souviens sur un canvas vierge. Les nœuds rouges où tu hésites sont la carte de ce qu'il faut réviser (Kapur, échec productif, 2008)." },
    { n: 3,  title: "Socratique",                 verb: "Sous 48 h",             description: "L'IA pose les questions, tu réponds. Déclare ta confiance de 1 à 5 avant chaque révélation. La métacognition rendue explicite." },
    { n: 4,  title: "Centaure",                   verb: "Juste après",           description: "Ghost Map superpose ton raisonnement à la carte idéale. L'hypercorrection ancre les corrections dans la mémoire (Butterfield et Metcalfe, 2001)." },
    { n: 5,  title: "Sommeil",                    verb: "Cette nuit-là",         description: "Ne fais rien. Le sommeil à ondes lentes rejoue la journée. L'hippocampe transmet les traces au cortex. Notre travail est de ne pas être dans le chemin." },
    { n: 6,  title: "Premier rappel",             verb: "Jour 1",                description: "Reviens le lendemain. Le canvas estompe ce que tu savais à peu près. Récupère depuis la mémoire et réécris ce qui a échappé." },
    { n: 7,  title: "Apprentissage entre pairs",  verb: "Jours 2–3",             description: "Visite le canvas d'un camarade. Enseigne. Laisse-toi enseigner. Organiser pour les autres consolide chez toi (effet d'enseignement)." },
    { n: 8,  title: "Rappels espacés",            verb: "Jour 3 · 7 · 14…",      description: "Réapprentissage successif à intervalles croissants. La stratégie gold standard dans les preuves scientifiques (Rawson et Dunlosky, 2011)." },
    { n: 9,  title: "Ponts entre domaines",       verb: "Semaines plus tard",    description: "Dézoome jusqu'à la vue continent. Trace des flèches entre la chimie et les équations différentielles. Le transfert est le vrai test de l'apprentissage." },
    { n: 10, title: "Préparation à l'examen",     verb: "7 à 14 jours avant",    description: "Fog of War. Navigue dans le brouillard de ton propre canvas. Vert, rouge, angles morts — la carte de maîtrise se dessine d'elle-même." },
    { n: 11, title: "Exam Session",               verb: "7 jours avant · Le jour J",description: "Fluera génère un examen à livre fermé depuis ton canvas. Tu déclares ta confiance de 1 à 5, tu réponds à la main, puis Ghost Map superpose l'écart. L'hypercorrection grave pour de bon les points où tu étais sûr et tu t'es trompé (Butterfield et Metcalfe, 2001)." },
    { n: 12, title: "Croissance permanente",      verb: "Pour toujours",         description: "Le canvas persiste comme autobiographie cognitive. Tu y reviens deux ans plus tard et tu vois la forme tangible de tout ce que tu as appris." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Difficultés désirables — la découverte contre-intuitive qu'étudier plus difficilement produit un meilleur rappel.", year: "1994" },
    { name: "Butterfield et Metcalfe", contribution: "Effet d'hypercorrection — les erreurs commises avec une grande confiance, une fois corrigées, sont les plus durables.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "Système 1 vs Système 2 — intuition rapide contre délibération lente dans la pensée et la mémoire.", year: "2011" },
    { name: "Lev Vygotski",            contribution: "Zone proximale de développement — la bande étroite où apprendre avec un soutien dépasse apprendre seul.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Auto-efficacité — le prédicteur le plus fort de la réussite académique, devant le QI.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Mentalité de croissance — féliciter l'effort plutôt que le talent change la réponse à la difficulté.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — performance cognitive maximale quand le défi et la compétence s'équilibrent avec un retour immédiat.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Cartographie conceptuelle — construire une carte dépasse en étudier une toute faite, dans toute discipline.", year: "1984" },
    { name: "O'Keefe et Moser",        contribution: "Place cells et grid cells — le GPS biologique du cerveau. Pourquoi le Palais de la Mémoire fonctionne.", year: "Nobel 2014", nobel: true },
    { name: "Mueller et Oppenheimer",  contribution: "Les notes à la main dépassent celles au laptop sur les questions conceptuelles — même quand celles au laptop sont plus complètes.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "Preuves EEG : l'écriture à la main active des réseaux cérébraux plus larges que la frappe au clavier.", year: "2020" },
    { name: "Roediger et Karpicke",    contribution: "Pratique de récupération — le test ne mesure pas la mémoire, il la crée.", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "Bêta" },
    { name: "iPadOS",  api: "Metal",       status: "Bêta" },
    { name: "macOS",   api: "Metal",       status: "Bêta" },
    { name: "Windows", api: "Direct3D 11", status: "Alpha" },
    { name: "Android", api: "Vulkan",      status: "Alpha" },
    { name: "Linux",   api: "OpenGL",      status: "Alpha" },
    { name: "Web",     api: "WebGPU",      status: "Démo" },
  ],
};

export default data;
