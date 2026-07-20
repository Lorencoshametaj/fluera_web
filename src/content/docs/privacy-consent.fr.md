---
lang: "fr"
title: "Confidentialité et consentement IA"
description: "Quelles données Fluera collecte, quel consentement tu donnes, et comment tout désactiver."
section: settings
sectionLabel: "Réglages"
order: 1
updatedAt: 2026-06-29
---

Fluera est un outil local-first. Par défaut, rien ne sort de ton appareil à moins que tu n'actives explicitement une fonction qui en a besoin.

## Les quatre catégories de consentement

Ouvre **Réglages → Confidentialité**. Tu verras quatre toggles, tous désactivés par défaut :

- **Analytics produit.** Données de session anonymes — comptes d'invocation des fonctionnalités, durée de session, durées d'appel IA. Jamais de contenu. ID utilisateur hashé en SHA-256, rétention 180 jours.
- **Fonctions IA.** Nécessaires pour utiliser Socratic, Ghost Map, OCR LaTeX et Fog of War. Le texte sélectionné du canvas est envoyé aux modèles Google Gemini servis via Google Vertex AI, traités dans l'UE (europe-west4 NL / europe-west1 BE). Jamais le cahier entier.
- **Cloud sync.** Nécessaire pour synchroniser des canvas entre appareils. Les données synchronisées sont chiffrées en transit (TLS) et au repos sur une infrastructure européenne (Supabase, eu-north-1). Ce n'est **pas** un chiffrement de bout en bout : en tant que responsable de traitement, Fluera peut techniquement accéder au contenu synchronisé. Nous ne le vendons jamais et ne l'utilisons jamais à des fins publicitaires.
- **Crash reporting.** Stack traces et métadonnées de l'appareil quand l'app crashe. Aucun contenu utilisateur. Traité par Sentry avec `sendDefaultPii: false`.

Chaque toggle est indépendant. Tu peux activer Cloud Sync sans Analytics. Tu peux utiliser l'IA sans Crash Reporting. Les permissions sont granulaires exprès.

## Mémoire cognitive (sur l'appareil, opt-out)

Distincte des quatre consentements cloud ci-dessus : par défaut, Fluera indexe tes notes **uniquement sur ton appareil** pour alimenter les titres automatiques, la carte des concepts (Ghost Map) et la répétition espacée (FSRS). Cet index **ne quitte jamais ton appareil** — aucun contenu n'est envoyé vers le cloud (contrairement aux *Fonctions IA* et au *Cloud sync*). Tu peux le désactiver dans **Réglages → Confidentialité → Mémoire cognitive** : l'indexation s'arrête et les données cognitives déjà construites sur l'appareil sont effacées immédiatement (tes notes restent intactes). Base légale : intérêt légitime avec un droit d'opposition (GDPR Art. 6.1.f / 21) — c'est pourquoi elle est activée par défaut et en opt-out, et non un consentement opt-in comme les quatre ci-dessus.

## Ce qui n'est jamais collecté

- Le contenu de tes canvas (chiffré au repos avec SQLCipher, AES-256)
- Les questions que l'IA pose, ni tes réponses
- L'audio que tu enregistres avec Time Travel (stocké localement ; le sync opt-in le transfère chiffré en transit (TLS) et au repos sur l'infrastructure européenne, sans chiffrement de bout en bout)
- Information personnellement identifiable de quelque type que ce soit sans consentement explicite

## Comment vérifier

Lance l'app en mode avion. Fais tout sauf cloud sync et IA. Observe ton firewall ou ton moniteur réseau. Fluera fait zéro requête réseau quand les quatre toggles de consentement sont désactivés. C'est vérifiable, par design.

## Révoquer le consentement

Les quatre toggles sont toujours accessibles dans **Réglages → Confidentialité**. Désactiver un toggle prend effet immédiatement. Les données backend associées sont planifiées pour suppression sous 30 jours.

Pour la suppression au niveau du compte (le droit à l'oubli complet), écris à [lorenco@fluera.dev](mailto:lorenco@fluera.dev) depuis l'adresse de ton compte.

## Comptes Education

Si ton institution administre ton compte Fluera, les comportements ci-dessus s'appliquent toujours à *tes* données. L'administrateur peut voir des statistiques d'usage agrégées pour des audits de conformité (via la piste d'audit) mais ne peut pas lire le contenu de tes cahiers. Le chiffrement est imposé sur ton appareil ; la clé reste dans ton keychain, pas dans un système admin.

## Suite

- [Setup du cloud sync](/fr/docs/cloud-sync)
- [Architecture de sécurité](/fr/security/architecture) — le modèle complet
