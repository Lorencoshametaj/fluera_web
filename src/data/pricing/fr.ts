// 🇫🇷 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "pour toujours",
      tagline:
        "Le canvas complet pour tester la méthode. 100 crédits IA par mois, toujours visibles.",
      features: [
        "Canvas infini, saisie manuscrite, moteur de rendu complet",
        "3 pinceaux de base (crayon, plume, marqueur — plus dans Plus)",
        "Export PNG",
        "100 crédits IA par mois — Atlas et Chat Fluera AI toujours gratuits",
        "Socratic 3 sessions/sem., Ghost Map 3 comparaisons/sem., 1 Exam/sem.",
        "Fog of War, FSRS (répétition espacée)",
        "Cross-Zone Bridges — voir les liens entre concepts que le système découvre",
        "📍 3 Checkpoints par canvas — enregistre un moment d'étude et reviens-y quand tu veux",
        "Aperçu Time Travel + sync audio↔trait sur un canvas démo (lecture seule)",
        "Local-first, totalement hors-ligne (1 appareil)",
      ],
      cta: { label: "Commencer gratuitement", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "par mois · €49 / an (économise €22 — 2 mois offerts)",
      tagline:
        "Étude personnelle complète : cloud sync, IA sans limites hebdo, voix illimitée.",
      features: [
        "Cloud sync 5 Go sur 2 appareils — tes canvas aussi sur iPad et bureau",
        "Socratic, Ghost Map, Exam sans limites de fréquence (plus de 3/semaine)",
        "5× plus de crédits IA que Free (500 par mois — env. 60 Ghost Map ou 18 sessions Socratic complètes)",
        "Enregistrement vocal illimité",
        "Tous les pinceaux V1 (6 au total, d'autres à venir)",
        "Export complet (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — crée et édite tes propres liens entre concepts",
        "📍 Checkpoints illimités par canvas",
        "Essai gratuit 7 jours, annulable à tout moment",
      ],
      cta: { label: "Essayer Plus", href: "/beta" },
      highlighted: true,
      badge: "Recommandé",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "par mois · €99 / an (économise €44 — 3,5 mois offerts)",
      tagline:
        "Étude amplifiée : Time Travel, sync audio↔trait, collab temps réel, recherche dans tous les canvas.",
      features: [
        "⏱️ Scrubber Time Travel — revois ton étude en replay",
        "🎤 Sync audio ↔ trait — touche un trait et réécoute ce que tu disais à ce moment",
        "🤝 Collaboration canvas en temps réel (CRDT) — invite des camarades par lien",
        "🔍 Background OCR proactif — retrouve une formule écrite il y a des mois, dans tous tes canvas",
        "Cloud sync 50 Go, appareils illimités",
        "Support email prioritaire",
        "2000 crédits IA par mois",
      ],
      cta: { label: "Devenir Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Comment fonctionnent les crédits IA ?",
      a: "Chaque opération IA a un coût fixe en crédits : Ghost Map 8, Socratic 4 par étape, Exam 12 par question, Chat 1 par message. Atlas (actions canvas) et Background OCR de base sont gratuits. Tu vois ton solde restant dans l'en-tête du canvas — aucun rate limit caché, aucune surprise. Les crédits non utilisés ne se reportent pas : le plan se recharge tous les 30 jours à partir de ta date d'inscription (pas le 1er du mois — tu paies 30 jours et reçois 30 jours).",
    },
    {
      q: "Et si je finis les crédits avant le reset ?",
      a: "On te prévient — une alerte douce à 80% du cycle. À zéro, les fonctions IA s'arrêtent avec un message clair (jamais de blocages silencieux). Attends le prochain cycle de 30 jours ou upgrade.",
    },
    {
      q: "Pourquoi Pro coûte le double pour seulement trois piliers ?",
      a: "Pro n'est pas 'Plus avec plus de crédits' — c'est l'étude amplifiée. Time Travel rejoue ta séance avec l'audio synchronisé par trait : touche une formule et réécoute l'explication que tu te donnais. La collaboration CRDT temps réel te laisse travailler simultanément avec des camarades sur le même canvas. Notability, GoodNotes et Notion AI ne proposent pas cette stack — pas à ce niveau d'intégration.",
    },
    {
      q: "Que deviennent mes canvas si j'annule Plus ou Pro ?",
      a: "Tout reste sur ton appareil (local-first) et les 3 pinceaux de base + export PNG continuent de fonctionner sur le tier Free. Les canvas supplémentaires deviennent en lecture seule jusqu'à réactivation ou export. Rien n'est supprimé sans action explicite de ta part.",
    },
    {
      q: "Pourquoi pas d'essai gratuit Pro ?",
      a: "Plus a 7 jours d'essai gratuit. Pas Pro : la collab temps réel + scrubber Time Travel sont des fonctions récurrentes avec des coûts cloud qu'on ne peut pas offrir. Pour tester la méthode, Free est le canvas complet — utilise-le aussi longtemps qu'il te convient.",
    },
    {
      q: "C'est quoi un Checkpoint ?",
      a: "Un Checkpoint est un marque-page de ton canvas à un instant précis — genre « enregistrer sous ». Tu en crées un quand tu veux (ex. « avant le contrôle », « après avoir fini le chapitre 3 ») et tu y reviens quand tu veux : restaure l'état du canvas à ce point. C'est différent de Time Travel : le Checkpoint est un point fixe que tu as choisi, Time Travel est le scrubber continu sur tout l'historique. Free inclut 3 Checkpoints par canvas, Plus illimités.",
    },
    {
      q: "Puis-je essayer Time Travel + sync audio↔trait avant de passer à Pro ?",
      a: "Oui. Chaque utilisateur Free trouve un canvas démo pré-chargé où tu peux ouvrir le scrubber Time Travel et toucher les traits pour réécouter l'audio synchronisé — en lecture seule, sur la démo. Pour enregistrer tes propres études, il faut Pro.",
    },
    {
      q: "Politique de remboursement ?",
      a: "30 jours, sans condition, sur les plans mensuels et annuels. Email à support@fluera.dev depuis l'adresse d'inscription.",
    },
    {
      q: "Comment fonctionne la vérification étudiante ?",
      a: "Email .edu ou académique vérifié. Pour les universités européennes sans .edu, on accepte une carte étudiante scannée, ISIC ou un email ponctuel du secrétariat.",
    },
    {
      q: "Réductions pour chercheurs ou non-profits ?",
      a: "Oui. Laboratoires de recherche, programmes de doctorat et non-profits enregistrés peuvent en faire la demande sur /contact — typiquement on accorde Pro au tarif Plus ou gratuit en échange de feedback structuré.",
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Cartes via Stripe, SEPA pour les clients UE, Apple Pay, Google Pay. Les clients Education peuvent payer par virement ou bon de commande.",
    },
    {
      q: "Plans Team ou Education ?",
      a: "À venir en phase 2 (workspaces partagés, dashboard admin, SSO). Intéressé ? Email à sales@fluera.dev — on construit la roadmap avec nos premiers design partners.",
    },
  ],
};

export default data;
