---
lang: "fr"
title: "Tuning de performance"
description: "Fluera est construit pour tenir 60 FPS sur des canvas avec des centaines de milliers de traits. Voici quoi vérifier quand ce n'est pas le cas."
section: troubleshooting
sectionLabel: "Dépannage"
order: 2
updatedAt: 2026-04-20
---

Le moteur de Fluera est conçu pour tenir 60 FPS avec une latence de trait inférieure à 15 ms sur du matériel moderne — jusqu'à des centaines de milliers de traits par cahier. Quand ce n'est pas le cas, c'est généralement l'une d'une petite liste de causes.

## Diagnostic

Ouvre **Réglages → Avancé → Performance**. Tu verras :

- **FPS actuel** — doit rester à 60 (ou 120 sur les appareils ProMotion)
- **Latence de trait** — doit indiquer <15 ms sur iOS/macOS, <20 ms sur les autres plateformes
- **Mémoire utilisée** — absolue et en pourcentage du budget de l'appareil
- **Hit rate de la tile cache** — doit être >90 % pendant les zoom/pan normaux

Si quelque chose est en rouge ici, les coupables probables sont dans la liste ci-dessous.

## Grands canvas (&gt; 200k traits)

Le moteur encaisse ce volume, mais deux réglages comptent :

- **Budget mémoire.** Sur les appareils avec moins de 6 Go de RAM, le budget mémoire par défaut de Fluera est conservateur. Si tu as beaucoup de RAM et que tu veux des réponses de zoom plus rapides, monte à *Généreux* dans **Réglages → Canvas → Budget mémoire**.
- **Niveau de détail.** La politique LOD par défaut simplifie les traits aux très bas niveaux de zoom. Si tu remarques des traits à l'aspect tremblé quand le zoom est éloigné, passe le LOD à *Détail élevé* — mais attends-toi à environ 10 % de charge GPU en plus.

## Enregistrement synchronisé avec audio (Time Travel)

Time Travel stocke l'audio à côté des timestamps des traits. Pour un cours de 60 minutes, ça fait environ 20 Mo d'audio. Ce n'est pas l'audio qui ralentit les choses — c'est l'index. Essaie :

- **Réglages → Time Travel → Granularité de l'index** réglée sur *Standard* au lieu de *Fine*
- Supprimer les vieilles sessions Time Travel dont tu n'as pas besoin (elles sont gardées localement par défaut ; le bouton clear-cache les retire en sécurité)

## Apple Pencil spécifiquement

Sur iPad, le mode par défaut *Predicted touch* maintient la latence de trait sous 8 ms. Si tu as désactivé la prédiction (dans Réglages → Canvas → Latence de trait → Standard), repasse à Predicted. La prédiction est une API d'Apple Pencil, pas une devinette — elle utilise la prédiction de trajectoire du hardware lui-même.

## Quand rien n'aide

Lance **Réglages → Avancé → Exporter diagnostic**. Tu obtiens un petit fichier JSON avec des échantillons de FPS, l'usage mémoire et des infos (anonymes) sur l'appareil. Envoie-le à [support@fluera.dev](mailto:support@fluera.dev) avec une courte description du moment où ça ralentit.

On localise environ 95 % des régressions de performance visibles à l'utilisateur sur un bout de code précis dans l'heure qui suit la réception d'un export de diagnostic. Les 5 % restants sont vraiment difficiles et on te le dira.

## Suite

- [FAQ](/fr/docs/faq)
- [Toute la documentation utilisateur](/fr/docs)
