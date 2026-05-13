import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "pour toujours",
      tagline: "Le canvas complet. Trois cahiers. Gratuit pour toujours.",
      features: [
        "Canvas infini, 13 pinceaux, moteur d'écriture manuscrite complet",
        "3 cahiers, pages illimitées",
        "Local-first — entièrement hors ligne",
        "Export PNG et PDF",
        "Socratic Mode basique",
      ],
      cta: { label: "Commencer gratuitement", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "par mois · €49/an",
      tagline: "Canvas complet, sync sur 2 appareils, IA basique.",
      features: [
        "Tous les pinceaux + calques illimités",
        "Synchronisation sur 2 appareils",
        "Export PDF et tous les formats basiques",
        "Quota IA basique (Atlas, Ghost Map basique)",
        "Annuel à €49 (environ €4,08/mois)",
      ],
      cta: { label: "Commencer avec Plus", href: "/beta" },
      highlighted: true,
      badge: "Recommandé",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "par mois · €99/an",
      tagline: "Exam Session, Atlas, suite IA complète, time travel et sync illimités.",
      features: [
        "Exam Session — examens simulés depuis ton canvas avec feedback d'hypercorrection",
        "Atlas vue continent + Cross-Zone Bridges sur tous les cahiers",
        "Suite IA complète (Ghost Map, Socratic, Fog of War, scheduler FSRS)",
        "Cahiers illimités",
        "Sync multi-appareils avec chiffrement de bout en bout",
        "Time Travel avec replay synchronisé à l'audio",
        "Tous les formats d'export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Support e-mail prioritaire",
        "Annuel à €99 (environ €8,25/mois)",
      ],
      cta: { label: "Passer au Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "par siège / mois · €179/an par siège · à partir de 5 sièges",
      tagline: "Canvas partagés pour studios, labs et petites équipes.",
      features: [
        "Tout ce qu'il y a dans Pro pour chaque membre de l'équipe",
        "Workspace partagé avec team Atlas",
        "Permissions role-based et ACL",
        "Dashboard admin + piste d'audit",
        "Facturation équipe (facture unique, TVA gérée)",
        "Support prioritaire, onboarding dédié",
      ],
      cta: { label: "Parler à sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Pourquoi affichez-vous des prix si vous êtes en bêta privée ?",
      a: "Ce sont les prix de la V1. Ceux qui s'abonnent maintenant verrouillent le tarif de leur plan pour toute la durée de l'abonnement — même si la grille évolue ensuite.",
    },
    {
      q: "Comment fonctionne la vérification étudiante ?",
      a: "Tu t'inscris avec un e-mail .edu, .ac.uk ou un e-mail académique vérifié. Si ton université n'utilise pas un domaine académique, on accepte une carte étudiante scannée, ISIC ou un e-mail unique du secrétariat de la fac.",
    },
    {
      q: "Que deviennent mes cahiers si j'annule Plus ou Pro ?",
      a: "Les cahiers restent sur ton appareil et reviennent au tier Free. Tu gardes les trois premiers ; les autres passent en lecture seule jusqu'à ce que tu réactives ou les exportes. Rien n'est supprimé sans une action explicite de ta part.",
    },
    {
      q: "Y a-t-il une politique de remboursement ?",
      a: "Oui — 30 jours, sans questions, sur les plans mensuels et annuels. Écris à support@fluera.dev depuis l'adresse avec laquelle tu t'es inscrit.",
    },
    {
      q: "Puis-je auto-héberger Fluera ?",
      a: "La partie local-first tourne déjà entièrement hors ligne sur les six plateformes. Le self-hosting du cloud sync est sur la roadmap Education (on-prem, SSO, piste d'audit) — pas encore disponible aujourd'hui.",
    },
    {
      q: "Proposez-vous des réductions pour les chercheurs ou les ONG ?",
      a: "Oui. Laboratoires de recherche, programmes de doctorat et ONG enregistrées peuvent en faire la demande sur /contact. On évalue au cas par cas et on accorde généralement le Pro au prix Student, ou gratuit en échange d'un feedback structuré.",
    },
    {
      q: "Pourquoi pas de trial gratuit du Plus ou du Pro ?",
      a: "Le tier Free n'est pas du marketing bridé — c'est le canvas complet. Utilise-le aussi longtemps qu'il te faut. Plus et Pro débloquent l'IA et la sync, qui ont des coûts cloud récurrents qu'on ne peut pas offrir.",
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Carte de crédit/débit via Stripe (toutes les principales marques), SEPA pour les clients UE, Apple Pay et Google Pay. Les clients Education peuvent payer par virement bancaire ou bon de commande.",
    },
  ],
};

export default data;
