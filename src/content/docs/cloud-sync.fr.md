---
lang: "fr"
title: "Synchronisation cloud"
description: "Comment synchroniser des canvas entre appareils, protéger tes données et les récupérer grâce à ton compte."
section: settings
sectionLabel: "Réglages"
order: 2
updatedAt: 2026-08-12
---

La synchronisation cloud est facultative pour chaque cahier. Tu peux synchroniser un canvas tout en gardant un autre entièrement local. Aucune donnée n’est envoyée tant que tu n’actives pas toi-même la synchronisation.

## Activer la synchronisation sur le premier appareil

1. Ouvre **Réglages → Confidentialité** et active **Synchronisation cloud**.
2. Choisis les cahiers à synchroniser. Fais un clic droit (ou un appui long) sur un cahier → **Activer la synchronisation**.

Une petite icône de nuage apparaît sur chaque cahier synchronisé. Le rouge signale une erreur, le gris une pause.

## Ajouter un deuxième appareil

1. Installe Fluera sur le deuxième appareil.
2. Connecte-toi avec le même compte.
3. La synchronisation cloud démarre automatiquement. La première synchronisation complète d’un cahier de taille moyenne peut prendre quelques minutes.

## Comment les données synchronisées sont protégées

- Sur ton appareil, la base de données locale est chiffrée au repos avec SQLCipher (AES-256).
- Pendant la synchronisation, les données transitent via une connexion chiffrée TLS.
- Sur nos serveurs, elles sont stockées sur une infrastructure européenne (Supabase, région `eu-north-1`) avec un chiffrement au repos au niveau de l’infrastructure.

Pour être clair : la synchronisation cloud **n’est pas chiffrée de bout en bout**. En tant que responsable du traitement, Fluera peut techniquement accéder au contenu synchronisé pour fournir et exploiter le service. Nous ne vendons jamais tes données et ne les utilisons jamais à des fins publicitaires.

Si tu exportes un cahier sous forme de fichier `.fluera` protégé par mot de passe, ce fichier est chiffré séparément avec AES-256-GCM. Le mot de passe d’exportation protège uniquement ce fichier et ne sert pas à la synchronisation cloud.

## Récupérer tes données

Les cahiers synchronisés sont associés à ton compte. Après la procédure habituelle de récupération du compte, reconnecte-toi sur un nouvel appareil pour les télécharger. Il n’existe aucune phrase secrète distincte pour la synchronisation cloud que tu pourrais oublier ou perdre.

## Résolution des conflits

Si tu modifies le même canvas sur deux appareils tandis que l’un est hors ligne, Fluera fusionne les changements à l’aide d’un CRDT avec horloges vectorielles. Dans les rares cas où la fusion automatique est ambiguë, un indicateur « fusion nécessaire » et une vue côte à côte te permettent de confirmer.

## Désactiver la synchronisation pour un cahier

Fais un clic droit (ou un appui long) sur un cahier → **Désactiver la synchronisation**. La copie cloud est immédiatement révoquée ; la copie locale reste intacte.

## Suite

- [FAQ et dépannage](/fr/docs/faq)
- [Architecture de sécurité](/fr/security/architecture)
