---
lang: "fr"
title: "Tuning de performance"
description: "Fluera vise 60 FPS et une encre à faible latence sur le matériel pris en charge. Les performances réelles varient selon l'appareil, la complexité du canvas et les fonctions actives."
section: troubleshooting
sectionLabel: "Dépannage"
order: 2
updatedAt: 2026-04-20
---

Le moteur de Fluera vise 60 FPS et une encre à faible latence sur le matériel pris en charge. Les performances réelles varient selon l'appareil, la chaîne d'entrée, la complexité du canvas et les fonctions actives.

## Diagnostic

Ouvre **Réglages → Avancé → Performance**. Tu verras :

- **FPS actuel** — doit rester à 60 (ou 120 sur les appareils ProMotion)
- **Latence de trait** — compare la mesure à la cible documentée pour ton appareil et ta chaîne d'entrée ; il n'existe pas de seuil universel
- **Mémoire utilisée** — absolue et en pourcentage du budget de l'appareil
- **Hit rate de la tile cache** — doit être >90 % pendant les zoom/pan normaux

Si quelque chose est en rouge ici, les coupables probables sont dans la liste ci-dessous.

## Grands canvas

Les grands canvas peuvent nécessiter des réglages. Commence par ces deux paramètres :

- **Budget mémoire.** Sur les appareils avec moins de 6 Go de RAM, le budget mémoire par défaut de Fluera est conservateur. Si tu as beaucoup de RAM et que tu veux des réponses de zoom plus rapides, monte à *Généreux* dans **Réglages → Canvas → Budget mémoire**.
- **Niveau de détail.** La politique LOD par défaut simplifie les traits aux très bas niveaux de zoom. Si tu remarques des traits à l'aspect tremblé quand le zoom est éloigné, passe le LOD à *Détail élevé* — mais attends-toi à environ 10 % de charge GPU en plus.

## Enregistrement synchronisé avec audio (Time Travel)

Time Travel stocke l'audio à côté des timestamps des traits. Pour un cours de 60 minutes, ça fait environ 20 Mo d'audio. Ce n'est pas l'audio qui ralentit les choses — c'est l'index. Essaie :

- **Réglages → Time Travel → Granularité de l'index** réglée sur *Standard* au lieu de *Fine*
- Supprimer les vieilles sessions Time Travel dont tu n'as pas besoin (elles sont gardées localement par défaut ; le bouton clear-cache les retire en sécurité)

## Apple Pencil spécifiquement

Sur iPad, le mode par défaut *Predicted touch* est conçu pour réduire la latence perçue du trait. Le résultat varie selon l'iPad, le Pencil, la version du système et la charge du canvas. Si tu as désactivé la prédiction (dans Réglages → Canvas → Latence de trait → Standard), repasse à Predicted. La prédiction est une API d'Apple Pencil, pas une devinette — elle utilise la prédiction de trajectoire du hardware lui-même.

## Quand rien n'aide

Lance **Réglages → Avancé → Exporter diagnostic**. Tu obtiens un petit fichier JSON avec des échantillons de FPS, l'usage mémoire et des infos (anonymes) sur l'appareil. Envoie-le à [support@fluera.dev](mailto:support@fluera.dev) avec une courte description du moment où ça ralentit.

Les données de diagnostic aident le support à examiner les problèmes de performance. La durée et le résultat de l'analyse varient selon le problème et les données disponibles.

## Suite

- [FAQ](/fr/docs/faq)
- [Toute la documentation utilisateur](/fr/docs)
