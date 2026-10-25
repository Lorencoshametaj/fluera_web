---
lang: "fr"
title: "Confidentialité et consentement IA"
description: "Quelles données Fluera collecte, quel consentement tu donnes, et comment tout désactiver."
section: settings
sectionLabel: "Réglages"
order: 1
updatedAt: 2026-10-23
---

Fluera est un outil local-first. Par défaut, rien ne sort de ton appareil à moins que tu n'actives explicitement une fonction qui en a besoin.

## Les quatre catégories de consentement

Ouvre **Réglages → Confidentialité**. Tu verras quatre toggles, tous désactivés par défaut :

- **Analytics produit.** Données d'usage liées à l'identifiant de ton compte, pour que tu puisses les voir et les supprimer — usage des fonctionnalités, durée de session, durées d'appel IA. Jamais de contenu. Conservées 180 jours au plus.
- **Fonctions IA.** Nécessaires pour utiliser Socratic, Ghost Map, OCR LaTeX et Fog of War. Le texte sélectionné du canvas est envoyé aux modèles Google Gemini servis via Google Vertex AI, traités dans l'UE (modèles 2.5 dans les régions europe-west4 NL / europe-west1 BE, modèles 3.x sur le point de terminaison multirégional UE de Vertex AI) : les données restent dans les États membres de l'UE. Jamais le canvas entier.
- **Cloud sync.** Nécessaire pour synchroniser des canvas entre appareils. Les données synchronisées sont chiffrées en transit (TLS) et au repos sur une infrastructure européenne (Supabase, eu-north-1). Ce n'est **pas** un chiffrement de bout en bout : en tant que responsable de traitement, Fluera peut techniquement accéder au contenu synchronisé. Nous ne le vendons jamais et ne l'utilisons jamais à des fins publicitaires. Avec la formule Cloud, **Synchroniser entre tes appareils** (plus bas) transporte aussi ton étude et tes réglages.
- **Crash reporting.** Stack traces et métadonnées de l'appareil quand l'app crashe. Aucun contenu utilisateur. Traité par Sentry avec `sendDefaultPii: false`.

Chaque toggle est indépendant. Tu peux activer Cloud Sync sans Analytics. Tu peux utiliser l'IA sans Crash Reporting. Les permissions sont granulaires exprès.

## Mémoire cognitive (sur l'appareil, opt-out)

Distincte des quatre consentements cloud ci-dessus : par défaut, Fluera indexe tes notes **sur ton appareil** pour fournir les titres automatiques, la carte conceptuelle (Ghost Map) et la répétition espacée (FSRS). L'index est construit et calculé sur ton appareil et y reste, sauf si tu actives **Synchroniser entre tes appareils** (section suivante) : alors tes cartes de révision avec l'historique de tes réponses, tes concepts, la carte conceptuelle et les titres de tes groupes de notes passent par le cloud de Fluera pour arriver sur tes autres appareils. Tu peux désactiver la mémoire dans **Réglages → Confidentialité → Mémoire cognitive** : l'indexation s'arrête et les données cognitives de cet appareil sont effacées immédiatement (tes notes restent intactes) ; si tu utilises Synchroniser entre tes appareils, les copies dans le cloud s'effacent aussi, et plus aucune ne remonte tant que tu ne la réactives pas. Base juridique : intérêt légitime avec droit d'opposition (RGPD art. 6.1.f / 21) — c'est pourquoi elle est activée par défaut et en opt-out, pas un consentement opt-in comme les quatre ci-dessus.

## Synchroniser entre tes appareils (formule Cloud)

L'interrupteur **Réglages → Données et synchronisation → Synchroniser entre tes appareils** est éteint tant que tu ne l'allumes pas. Il faut un compte et la formule Cloud, et il vaut pour tout ton compte : allumé sur un appareil, il l'est sur chaque appareil où tu te connectes. Quand tu l'allumes, le serveur enregistre la date et la version de la politique de confidentialité que tu avais sous les yeux. Base juridique : contrat (RGPD art. 6.1.b) — c'est le service Cloud que tu paies.

- **Ce qui va dans le cloud, seulement quand il est allumé :** les canvas entiers (traits, sections, formules, PDF avec les marques faites dans le lecteur, photos) ; les cours enregistrés (l'audio, en morceaux) ; l'étude de chaque canvas (cartes de révision avec tes réponses, concepts, examens avec leur encre, le tuteur socratique, le chat, le rappel, les cours) ; les dossiers de la galerie (avec leurs noms), le dossier de chaque canvas, les épinglés, les étiquettes et la Corbeille ; le texte que Fluera a reconnu dans ton écriture manuscrite ; tes choix dans les réglages (apparence, langue, papier, révision, couleurs, gomme et autres). Les réglages liés à un seul appareil (main, paume, stylet, fenêtre) y restent.
- **Ce qui reste toujours sur l'appareil :** l'historique du canvas (Time Travel) et l'annulation.
- **Qui le voit :** toi. Sur un canvas que tu partages, les membres voient le canvas et les titres des groupes de notes ; ton étude, toi seul la vois.
- **Où :** Supabase, région UE `eu-north-1` (Stockholm), chiffré en transit et au repos, **pas** chiffré de bout en bout.
- **L'éteindre** depuis n'importe quel appareil l'arrête sur tous et n'efface rien. C'est pareil si tu retires le consentement Cloud sync.
- **Quand la formule Cloud prend fin,** la synchronisation se met en pause et tout reste téléchargeable pendant 6 mois. Ensuite, nous pouvons retirer l'audio des cours, les PDF et les photos au-delà des 500 Mo de la formule Free, en commençant par les plus anciens ; l'encre de tes canvas reste.
- **Effacer :** **Supprimer définitivement** un canvas dans la **Corbeille** le retire du cloud avec ce qui lui appartient, l'encre de ses examens comprise ; **Réglages → Confidentialité et télémétrie → Supprimer toutes mes données du cloud** retire tous les canvas, les cours, l'encre des examens, les réglages et les dossiers, et désactive Synchroniser entre tes appareils ; **Réglages → Profil et compte → Supprimer le compte** retire tout, réglages compris.

Sans l'interrupteur, tout cela reste sur ton appareil, comme avant.

## Données d'entraînement de l'IA (section à part, opt-in uniquement)

Nous construisons notre propre reconnaissance de l'écriture manuscrite, adaptée à la façon dont les utilisateurs de Fluera écrivent vraiment. Dans **Réglages → Confidentialité → Données d'entraînement de l'IA**, tu trouves deux interrupteurs de plus, eux aussi désactivés par défaut et indépendants des quatre ci-dessus :

- **Session de calibrage (~5 min).** Une session guidée, une seule fois, où tu écris 30 symboles proposés (chiffres, opérateurs mathématiques, lettres grecques, lettres courantes). Le symbole à l'écran est la vérité de référence, associée à tes traits.
- **Capture automatique pendant l'écriture.** Pendant que tu écris normalement sur le canvas, nous enregistrons les traits bruts (coordonnées, temps, pression, inclinaison du stylet quand elle est disponible) et une petite image PNG chiffrée de chaque cluster. Les données restent chiffrées sur notre serveur. **Quand notre accord avec Google sera finalisé** (accord de traitement des données Vertex AI, en cours), Google Gemini analysera les images pour que nous puissions apprendre à Fluera ce que tu as écrit. D'ici là, aucune donnée d'entraînement ne sort de notre infrastructure vers un tiers.

Les deux interrupteurs utilisent un identifiant pseudonyme dédié, calculé sur ton appareil et **différent** de celui des Analytics produit : à partir des données seules, on ne peut pas rattacher une contribution à ton compte.

Mesures de sécurité propres à cette catégorie :
- Chiffrement des données en AES-256-GCM *avant* l'envoi ; la clé de déchiffrement est une paire de clés asymétrique (X25519) dont la moitié privée est conservée hors ligne sur papier et jamais numérisée.
- Row-Level Security sur les tables Supabase : personne ne peut lire les échantillons d'un autre.
- Filtre de bruit : les clusters de moins de 3 points (tapotements, traces) sont écartés avant l'enregistrement.
- Déduplication persistante par empreinte géométrique : redessiner le même cluster à l'identique ne crée pas de doublon.
- Aperçu de chaque échantillon dans **Réglages → Données d'entraînement de l'IA → Captures récentes** : tu vois les miniatures exactes de ce que nous avons enregistré.

## Ce qui n'est jamais collecté

- Le contenu de tes canvas (chiffré au repos avec sqlite3mc, ChaCha20-Poly1305), sauf si tu actives **Synchroniser entre tes appareils** (plus haut)
- Les questions que l'IA pose, ni tes réponses
- L'audio que tu enregistres, sauf si tu actives **Synchroniser entre tes appareils** (plus haut) : il va alors dans le cloud comme tes canvas, chiffré en transit et au repos, pas de bout en bout
- Information personnellement identifiable de quelque type que ce soit sans consentement explicite

## Comment vérifier

Désactive les quatre interrupteurs et observe ton firewall ou ton moniteur réseau : tes canvas, tes enregistrements et ce que tu écris restent sur l'appareil. L'app parle quand même au réseau pour des choses qui ne contiennent pas le contenu des canvas, par exemple : la connexion à ton compte, la vérification de ton abonnement auprès du store (RevenueCat), le téléchargement des modèles dont certaines fonctions ont besoin, le signal du marketplace quand tu installes ou étudies une fiche du catalogue (activé par défaut, désactivable dans **Réglages → Confidentialité et télémétrie → Signal du marketplace**) et les pages que tu ouvres dans le navigateur intégré.

## Révoquer le consentement

Les quatre toggles sont toujours accessibles dans **Réglages → Confidentialité**. Désactiver un toggle prend effet immédiatement. Ce qui arrive aux données déjà collectées dépend de la catégorie :

- **Analytics produit :** dès que le retrait atteint nos serveurs, la télémétrie déjà collectée avec ton compte est supprimée tout de suite. De toute façon, elle n'est jamais gardée plus de 180 jours.
- **Fonctions IA :** les requêtes s'arrêtent tout de suite, sur notre serveur aussi. Le journal d'utilisation de l'IA (quelle fonction, combien de tokens, aucun contenu) reste 24 mois, pour les limites de l'offre.
- **Cloud sync :** l'éteindre, ou éteindre Synchroniser entre tes appareils, n'efface rien de ce qui est déjà dans le cloud — pour cela, utilise **Supprimer toutes mes données du cloud**.
- **Crash reporting :** le retrait n'efface pas les rapports déjà envoyés : Sentry les garde 30 jours, et ses sauvegardes chiffrées jusqu'à 90.

Pour supprimer ton compte et ses données dans le cloud, utilise **Réglages → Profil et compte → Supprimer le compte**. Si cela échoue, écris à [lorenco@fluera.dev](mailto:lorenco@fluera.dev) depuis l'adresse de ton compte.

## Suite

- [Setup du cloud sync](/fr/docs/cloud-sync)
- [Architecture de sécurité](/fr/security/architecture) — le modèle complet
