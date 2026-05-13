---
lang: "fr"
title: "FAQ"
description: "Les questions qu'on reçoit le plus souvent des beta testers. Si quelque chose est obsolète ici, écris au support et on corrige."
section: troubleshooting
sectionLabel: "Dépannage"
order: 1
updatedAt: 2026-04-20
---

## Pourquoi mon canvas est lent à ouvrir quand je n'y ai pas touché depuis une semaine ?

La première fois que Fluera charge un cahier après une pause, il reconstruit l'index spatial et réévalue quels nœuds arrivent à échéance pour review. Les ouvertures suivantes sont rapides. Si la pause a duré plus d'un mois, attends-toi aussi à ce que le planificateur de répétition espacée recalibre tes reviews en attente.

Si la première ouverture prend plus de 10 secondes sur un appareil moderne, c'est un bug — écris à [support@fluera.dev](mailto:support@fluera.dev) avec le nom du canvas et le nombre approximatif de nœuds.

## Puis-je importer mes decks Anki ?

Pas encore. L'import est sur la roadmap mais ce n'est pas un blocker de la Phase 1 — le modèle de récupération de Fluera est structurellement différent (spatial, pas atomique), donc un import direct perdrait l'essentiel de la valeur. Quand il arrivera, il sera disponible pour les comptes Pro et Education.

## Puis-je exporter mes canvas en PNG / SVG / PDF ?

Oui, tous, plus notre format ouvert `.fluera`. Vois le menu **Exporter**. Aucune restriction par tier — exporter est une fonction de base liée à la propriété des données, pas une fonction paywallée.

## L'IA m'a donné une réponse fausse. C'est attendu ?

Parfois, oui. Notre IA est Google Gemini, et Gemini — comme tout LLM — peut halluciner. Le Socratic Mode y est moins exposé parce qu'il pose des questions plutôt que de produire des réponses définitives, mais ce n'est pas zéro.

Si tu reçois une réponse de l'IA clairement fausse, appuie sur **Signaler** sur la réponse. Ce feedback sert à améliorer le prompting ; il est anonymisé et jamais lié à ton contenu.

## Fluera fonctionne-t-il sans Internet ?

Le canvas — écriture, lecture, export — est complètement offline. Les fonctions d'IA (Socratic, Ghost Map, scoring de Fog of War) ont besoin d'Internet. La planification de répétition espacée est locale ; seuls le sync et l'IA ont besoin d'une connexion.

## Je suis en France. Et le RGPD ?

Pleinement conforme. Fluera est hébergé dans l'UE et RGPD-natif. Tu peux exercer tes droits (accès, rectification, suppression, portabilité) via **Réglages → Confidentialité** ou en écrivant à [privacy@fluera.dev](mailto:privacy@fluera.dev). Réponse sous 30 jours ; généralement sous 48 heures.

## Le Pencil lague sur mon iPad. Qu'est-ce qui ne va pas ?

D'abord, vérifie que Fluera est à jour. Ensuite : **Réglages → Canvas → Latence de trait** doit être sur *Predicted (recommandé)* pour les appareils Apple Pencil. Si c'est sur *Standard* ou *Low-power*, repasse à Predicted.

Si le lag persiste avec Predicted activé, ferme et relance. Si ça persiste encore, écris-nous avec le modèle de ton iPad — il y a une régression sur l'iPad Air 3 qu'on suit activement.

## Comment je signale un bug ?

[support@fluera.dev](mailto:support@fluera.dev). Décris ce que tu faisais, ce que tu attendais, ce qui s'est passé, et inclus la version de l'app (Réglages → À propos). Les screenshots aident.

Pour les vulnérabilités de sécurité, utilise [security@fluera.dev](mailto:security@fluera.dev) et chiffre avec notre clé PGP (sur notre profil GitHub).

## Comment je donne un feedback sur la pédagogie ?

On lit chaque e-mail. [hello@fluera.dev](mailto:hello@fluera.dev) va directement aux founders. Particulièrement utile : ce qui n'a *pas* fonctionné pour toi, ce qui t'a paru être une friction non désirée, et tout ce qui t'a surpris.

## Suite

- [Tuning de performance](/fr/docs/performance) — tirer le maximum des grands canvas
- [Toute la documentation utilisateur](/fr/docs)
