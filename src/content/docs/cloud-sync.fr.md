---
lang: "fr"
title: "Cloud sync"
description: "Comment synchroniser des canvas entre appareils, ce qui est chiffré et comment récupérer si tu perds la passphrase."
section: settings
sectionLabel: "Réglages"
order: 2
updatedAt: 2026-04-20
---

Le cloud sync est opt-in par cahier. Tu peux synchroniser un canvas tout en gardant un autre strictement local. Rien ne bouge tant que tu ne le dis pas.

## Activer le sync sur le premier appareil

1. Ouvre **Réglages → Confidentialité** et active **Cloud sync**.
2. Crée ou saisis ta **passphrase de sync**. Elle est *séparée* du mot de passe du compte. La passphrase sert à dériver la clé de chiffrement — et reste uniquement sur ton appareil, jamais sur nos serveurs.
3. Choisis quels cahiers synchroniser. Clic droit (ou appui long) sur un cahier → **Activer le sync**.

Une petite icône de cloud apparaît sur chaque cahier synchronisé. Une variante rouge indique une erreur ; une variante grise indique une pause.

## Ajouter un deuxième appareil

1. Installe Fluera sur le deuxième appareil.
2. Connecte-toi avec le même compte.
3. Saisis la *même* passphrase de sync quand on te le demande. La passphrase n'est pas récupérable — si tu ne l'as pas, les données chiffrées ne sont pas lisibles sur le nouvel appareil.
4. Le cloud sync démarre. La première synchronisation complète d'un cahier de taille moyenne prend quelques minutes.

## Ce qui est chiffré et comment

- Chaque cahier est chiffré localement avec une clé par cahier.
- Ces clés sont chiffrées avec une root key dérivée de ta passphrase de sync via PBKDF2-SHA256, 256 000 itérations.
- Seuls les octets chiffrés arrivent au serveur. On ne peut pas lire tes cahiers.

Les métadonnées (titres des cahiers, timestamps, taille) sont également chiffrées — le serveur voit des blobs opaques et des timestamps de sync.

## Si tu perds la passphrase

Si tu oublies la passphrase et que tu n'as aucun appareil avec une clé encore en cache, tes données chiffrées sont **irrécupérables**. C'est par design. L'alternative — un mécanisme de recovery côté serveur — casserait le modèle de bout en bout et c'est un trade-off qu'on n'est pas prêts à faire pour les comptes consumer.

Pour les **comptes Education**, une clé de recovery optionnelle détenue par l'administrateur peut être configurée au moment du déploiement. C'est un opt-in explicite, documenté dans le DPA institutionnel et audité.

## Résolution de conflits

Si tu modifies le même canvas sur deux appareils en même temps alors que l'un est offline, Fluera utilise un CRDT avec vector clocks pour faire le merge sans conflit. Tu ne perdras pas de travail. Dans les rares cas où le merge automatique est ambigu, tu verras un marqueur "merge needed" sur le nœud concerné et une vue côte à côte pour confirmer.

## Désactiver le sync pour un cahier précis

Clic droit (ou appui long) sur un cahier → **Désactiver le sync**. La copie cloud est révoquée immédiatement. La copie locale reste intacte.

## Suite

- [FAQ et troubleshooting](/fr/docs/faq)
- [Architecture de sécurité](/fr/security/architecture)
