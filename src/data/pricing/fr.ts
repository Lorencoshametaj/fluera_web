import type { PricingData } from "../types";

// Listino del 22/10/2026 (Free, Cloud, IA, Cloud + IA). Allineato a it.ts.
// Gli importi di `price` e `period` li controlla
// fluera_engine/tool/public_truth_gate.dart contro FlueraPricing, per `id`.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "pour toujours",
      tagline:
        "Le canvas complet, la révision et les cours. Sans abonnement et sans échéance.",
      features: [
        "Canvas infini et écriture à la main",
        "Révision, cours, tous les pinceaux, export et time travel",
        "Un avant-goût de l’IA le premier mois après ton inscription",
        "500 Mo de cloud sur tous tes appareils, sans audio, quand le Cloud sera activé",
        "Fonctionne aussi hors ligne : tes canvas restent sur l’appareil",
      ],
      cta: { label: "Commencer gratuitement", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "par an · annuel uniquement · Cloud 60 à €44,99 / an",
      tagline:
        "De la place pour tes canvas et tes cours enregistrés. Il s’active avec une mise à jour de l’app.",
      features: [
        "20 Go sur tes appareils : téléphone, tablette et ordinateur",
        "Les cours enregistrés s’écoutent partout",
        "Tes canvas à l’abri, même si tu changes de téléphone",
        "Cloud 60 : 60 Go pour qui enregistre beaucoup de cours",
      ],
      cta: { label: "Choisir Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "IA",
      price: "€9,99",
      period: "par mois · €84,99 / an (économise €34,89)",
      tagline: "Une IA qui lit ce que tu écris, avec un compteur toujours visible.",
      features: [
        "L’IA lit tes notes et donne un nom à chaque concept",
        "Tuteur, examens, chat, formules et transcription",
        "Tu vois toujours combien d’IA il te reste ce mois-ci, en pourcentage",
        "Réserve d’examen pour les mois les plus chargés",
        "14 jours gratuits pour l’essayer",
      ],
      cta: { label: "Essayer l’IA", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + IA",
      price: "€99,99",
      period: "par an · tu économises €4,99 par rapport aux deux séparés · avec Cloud 60 €119,99 / an",
      tagline: "Tout le Cloud et toute l’IA, en un seul abonnement.",
      features: [
        "Tout le Cloud et toute l’IA",
        "20 Go, ou 60 Go avec Cloud 60 + IA",
        "Tu vois toujours combien d’IA il te reste ce mois-ci, en pourcentage",
        "Annuel uniquement",
      ],
      cta: { label: "Choisir Cloud + IA", href: "/beta" },
      highlighted: true,
      badge: "Recommandé",
    },
  ],
  faq: [
    {
      q: "Comment je vois combien d’IA il me reste ?",
      a: "Dans l’app, toujours. Un compteur te dit en pourcentage combien d’IA du mois il te reste, quand elle se recharge (le 1er du mois) et, à ton rythme, jusqu’à quand elle te suffit. Aucune limite cachée et aucun crédit à convertir de tête : ce que tu vois, c’est ce que tu as.",
    },
    {
      q: "Et si l’IA du mois est épuisée ?",
      a: "La révision, les cours et tes notes fonctionnent toujours, même sans IA. L’IA revient le 1er du mois ; si tu en as besoin avant, tu peux activer la réserve d’examen ou en ajouter un peu depuis l’app.",
    },
    {
      q: "J’achète une fois : ça vaut sur tous mes appareils ?",
      a: "Oui. Tu t’abonnes depuis l’app Fluera sur ton téléphone ou ta tablette, via l’App Store ou Google Play, et tu paies avec les moyens enregistrés dans ton compte du store. Ton forfait vaut ensuite sur tous les appareils où tu te connectes avec le même compte, ordinateurs compris.",
    },
    {
      q: "Le Cloud fonctionne-t-il déjà entre les appareils ?",
      a: "Pas encore. Le Cloud entre téléphone, tablette et ordinateur est en construction et s’active avec une mise à jour de l’app. D’ici là, tes canvas restent sur l’appareil, où ils fonctionnent aussi hors ligne.",
    },
    {
      q: "Y a-t-il un essai gratuit ?",
      a: "Oui : 14 jours gratuits, uniquement sur l’IA. Tu peux résilier depuis la boutique quand tu veux, avant la fin de l’essai. Free n’expire pas et ne demande aucun paiement.",
    },
    {
      q: "Que deviennent mes canvas si je résilie ?",
      a: "Ils restent à toi, sur l’appareil : canvas, révision, cours, pinceaux et export continuent de fonctionner avec Free. Les fonctions du forfait s’arrêtent jusqu’à ce que tu le réactives. Rien n’est supprimé sans une action de ta part.",
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
