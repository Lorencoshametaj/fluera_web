---
lang: "fr"
title: "Pinceaux"
description: "Treize brush engines, chacun calibré pour un type de marque différent. Un guide court pour choisir le bon — et pourquoi ça compte moins que tu ne le penses."
section: canvas
sectionLabel: "Le canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera arrive avec treize brush engines. Chacun est une pipeline de rendu complète — pression, inclinaison, vitesse, fragment shaders par pinceau — pas un simple swap de texture. Ça paraît beaucoup ; en pratique, l'essentiel de ton apprentissage va se passer sur un ou deux d'entre eux.

## La réponse courte

- Si tu prends des notes : **stylo plume** ou **stylo bille**. Tous les deux rapides, lisibles, indulgents.
- Si tu annotes un PDF ou mets en valeur un concept : **surligneur**.
- Si tu dessines un diagramme avec des lignes géométriques nettes : **stylo technique**.
- Si tu fais une métaphore visuelle rapide ou une illustration : **crayon** (traits légers) ou **fusain** (traits dramatiques).

Tout le reste est pour des situations spécifiques. Ne sur-réfléchis pas.

## Les treize

| Pinceau             | Bon pour                                          | Notes                                          |
|---------------------|---------------------------------------------------|------------------------------------------------|
| Stylo plume         | Écriture manuscrite en forme longue               | Réagit à l'inclinaison, flux d'encre naturel   |
| Stylo bille         | Notes rapides, ligne uniforme                     | Largeur sensible à la pression                 |
| Crayon              | Traits doux, indulgents                           | Texture granuleuse, gradation par pression     |
| Stylo technique     | Diagrammes style CAD, géométrie précise           | Aucune sensibilité à la pression, exprès       |
| Marker              | Titres avec pointe biseautée, mises en valeur     | Traits plats, couleur vive                     |
| Surligneur          | Mises en valeur en overlay (20–30 % d'opacité)    | Fusion en mode overlay                         |
| Fusain              | Expressif, texture rugueuse                       | Effet estompé, déborde sur les bords           |
| Huile               | Traits picturaux, couleur en couches              | Wet-edge blending, assombrissement aux bords   |
| Aquarelle           | Couches douces, diffusion                         | Simulation de pigment                          |
| Lavis               | Sensation wet-on-paper                            | Saignement de couleur sur les bords            |
| Spray               | Effets de particules, ombres                      | Distorsion sur les bords                       |
| Néon                | Annotations lumineuses                            | Lueur externe, saturation fluo                 |
| Gomme               | Suppression pixel par pixel, pas un outil de delete | Consciente de l'historique — révèle les traits dessous |

## Pourquoi le moteur compte (rapidement)

Le moteur de Fluera préserve les signaux de pression, d'inclinaison et de vitesse avec une latence inférieure à 15 millisecondes sur iOS et macOS. Ce n'est pas du chichi produit. <a href="/fr/science/authors/van-der-meer">Le travail EEG de van der Meer</a> a montré que l'écriture manuscrite engage des réseaux sensorimoteurs que la frappe au clavier n'engage pas, et la richesse de ces signaux varie avec la fidélité de la capture.

En pratique : un canvas qui perd des traits, lague sous la pression ou aplatit les données d'inclinaison jette exactement le signal qui rend les notes manuscrites cognitivement supérieures. On a construit le moteur de zéro parce qu'aucune option off-the-shelf n'atteignait le niveau.

## Personnaliser un pinceau

Appuie longuement sur n'importe quel pinceau dans la toolbar. Un petit panneau s'ouvre avec :

- **Taille** (0,5 pt – 12 pt)
- **Opacité** (10 % – 100 %)
- **Stabilisation** (aucune / douce / ferme) — lisse le jitter sans tuer la personnalité
- **Courbe de pression** — ajuste la réponse aux pressions légères vs fortes

Les changements sont par canvas, pas globaux, donc tu peux avoir un crayon doux dans un cahier et un crayon sec dans un autre.

## Suite

- [Gestes et zoom](/fr/docs/gestures-zoom)
- [Export et backup](/fr/docs/cloud-sync)
