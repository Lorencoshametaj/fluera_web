import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "pour toujours",
      tagline:
        "Le canvas complet, la révision et les cours. Sans abonnement et sans échéance.",
      features: [
        "Canvas infini et écriture à la main",
        "Révision, cours, tous les pinceaux, export et time travel",
        "Mentor à essayer le premier mois",
        "500 Mo identiques sur tous tes appareils, sans audio, quand la synchronisation sera activée",
        "Fonctionne aussi hors ligne : tes canvas restent sur l’appareil",
      ],
      cta: { label: "Commencer gratuitement", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Partout",
      price: "€29,99",
      period: "par an · annuel uniquement · 60 GB à €44,99 / an",
      tagline:
        "Tout sur téléphone, tablette et ordinateur, sans penser à l’espace. Il s’active avec une mise à jour de l’app.",
      features: [
        "20 Go au lieu des 500 Mo du gratuit",
        "Les cours enregistrés, avec le son, sur chaque appareil",
        "Partage un canvas et écrivez ensemble",
        "Si tu arrêtes, 6 mois pour tout télécharger. L’encre reste pour toujours.",
        "Aucune fonction d’étude en plus : elles sont toutes déjà dans le gratuit",
      ],
      cta: { label: "Choisir Partout", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "par mois · €84,99 / an (économise €34,89)",
      tagline:
        "Un tuteur qui a lu tes notes, avec un quota du mois toujours visible en pourcentage.",
      features: [
        "Te pose des questions sur ce que tu as écrit",
        "Te fait passer un oral et te dit ce qui manque",
        "Donne un titre à chaque concept que tu écris",
        "Transforme les formules manuscrites en formules modifiables",
        "Et tu peux poser des questions à tes notes, dans un chat",
        "Un quota par mois, toujours visible en pourcentage",
        "Les 14 premiers jours sont gratuits",
      ],
      cta: { label: "Essayer Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Partout + Mentor",
      price: "€99,99",
      period: "par an · tu économises €14,99 par rapport aux deux séparés · avec 60 GB €119,99 / an",
      tagline:
        "Tout Fluera, sur chaque appareil, avec le tuteur. Le plan recommandé.",
      features: [
        "Tout Partout : 20 Go et les cours avec le son",
        "Tout Mentor : questions, examen, titres et formules",
        "Un quota par mois, toujours visible en pourcentage",
        "Annuel uniquement",
      ],
      cta: { label: "Choisir Partout + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Recommandé",
    },
  ],
  faq: [
    {
      q: "Comment voir ce qu’il me reste de Mentor ?",
      a: "Dans l’app, toujours. Un compteur te dit en pourcentage ce qu’il te reste du quota de Mentor du mois, quand il se recharge (le 1er du mois) et, à ton rythme, jusqu’à quand il te suffit. Pas de limites cachées ni de crédits à convertir de tête : ce que tu vois, c’est ce que tu as.",
    },
    {
      q: "Et si Mentor du mois est épuisé ?",
      a: "La révision, les cours et tes notes fonctionnent toujours, même sans Mentor. Mentor revient le 1er du mois ; si tu en as besoin avant, tu peux activer la réserve d’examen ou en ajouter un peu depuis l’app.",
    },
    {
      q: "J’achète une fois : ça vaut sur tous mes appareils ?",
      a: "Oui. Tu t’abonnes depuis l’app Fluera sur ton téléphone ou ta tablette, via l’App Store ou Google Play, et tu paies avec les moyens enregistrés dans ton compte du store. Ton forfait vaut ensuite sur tous les appareils où tu te connectes avec le même compte, ordinateurs compris.",
    },
    {
      q: "Partout fonctionne-t-il déjà entre les appareils ?",
      a: "Pas encore. La synchronisation entre téléphone, tablette et ordinateur est en construction et s’active avec une mise à jour de l’app. D’ici là, tes canvas restent sur l’appareil, où ils fonctionnent aussi hors ligne.",
    },
    {
      q: "Y a-t-il un essai gratuit ?",
      a: "Oui : 14 jours gratuits, uniquement sur Mentor. Tu peux résilier depuis le store quand tu veux, avant la fin de l’essai. Fluera gratuit n’expire jamais et ne demande aucun paiement.",
    },
    {
      q: "Que deviennent mes canvas si je résilie ?",
      a: "Ils restent à toi, sur ton appareil : canvas, révision, cours, pinceaux et export continuent de fonctionner gratuitement. Si tu avais Partout, tu as 6 mois pour tout télécharger, et l’encre reste pour toujours. Rien n’est supprimé sans une action de ta part.",
    },
    {
      q: "Politique de remboursement ?",
      a: "Les conditions de remboursement et de rétractation dépendent de la boutique et du canal d'achat. La politique applicable est affichée avant confirmation ; pour obtenir de l'aide, écris à support@fluera.dev depuis ton adresse d'inscription.",
    },
    {
      q: "Plans Team ou Education ?",
      a: "À venir en phase 2 (workspaces partagés, dashboard admin, SSO). Intéressé ? Email à support@fluera.dev — on construit la roadmap avec nos premiers design partners.",
    },
  ],
};

export default data;
