---
lang: "it"
title: "FAQ"
description: "Le domande che riceviamo più spesso dai beta tester. Se qualcosa qui è obsoleto, scrivi al supporto e lo sistemiamo."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 1
updatedAt: 2026-04-20
---

## Perché il canvas è lento ad aprirsi dopo che non lo uso da una settimana?

La prima volta che Fluera carica un quaderno dopo una pausa, ricostruisce l'indice spaziale e ri-valuta quali nodi sono in scadenza per la review. Le aperture successive sono veloci. Se la pausa è stata di più di un mese, aspettati anche che lo scheduler di ripetizione spaziata ricalibri le tue review pendenti.

Se la prima apertura richiede più di 10 secondi su un dispositivo moderno, è un bug — scrivi a [support@fluera.dev](mailto:support@fluera.dev) con il nome del canvas e il conteggio approssimativo di nodi.

## Posso importare i miei mazzi Anki?

Non ancora. L'import è sulla roadmap ma non è un blocker di Phase 1 — il modello di recupero di Fluera è strutturalmente diverso (spaziale, non atomico), quindi un import diretto perderebbe gran parte del valore. Quando arriverà, sarà disponibile per gli account Pro ed Education.

## Posso esportare i miei canvas in PNG / SVG / PDF?

Sì, tutti, più il nostro formato aperto `.fluera`. Vedi il menu **Esporta**. Nessuna restrizione sul tier — l'export è una funzione base di proprietà dati, non paywalled.

## L'AI mi ha dato una risposta sbagliata. È atteso?

A volte, sì. La nostra AI è Google Gemini, e Gemini — come ogni LLM — può allucinare. La modalità Socratica è meno soggetta perché fa domande invece di produrre risposte definitive, ma non è zero.

Se ricevi una risposta AI chiaramente sbagliata, tocca **Segnala** sulla risposta. Quel feedback viene usato per migliorare il prompting; è anonimo e mai collegato al tuo contenuto.

## Fluera funzionerà senza internet?

Il canvas — scrittura, lettura, export — è completamente offline. Le funzioni AI (Socratic, Ghost Map, scoring di Fog of War) richiedono internet. Lo scheduling della ripetizione spaziata è locale; solo sync e AI hanno bisogno di connessione.

## Sono nell'UE. Come si applica il GDPR qui?

Pienamente. Fluera è ospitata in EU e GDPR per default. Puoi esercitare i tuoi diritti (accesso, rettifica, cancellazione, portabilità) via **Impostazioni → Privacy** o scrivendo a [privacy@fluera.dev](mailto:privacy@fluera.dev). Risposta entro 30 giorni; di solito entro 48 ore.

## La Pencil è laggosa sul mio iPad. Cosa c'è che non va?

Per prima cosa, controlla che Fluera sia aggiornato. Poi: **Impostazioni → Canvas → Latenza tratto** dovrebbe leggere *Predicted (consigliato)* per dispositivi Apple Pencil. Se dice *Standard* o *Low-power*, rimettila su Predicted.

Se il lag persiste con Predicted attivo, chiudi e rilancia. Se persiste ancora, scrivici col modello del tuo iPad — c'è una regressione su iPad Air 3 che stiamo tracciando attivamente.

## Come segnalo un bug?

[support@fluera.dev](mailto:support@fluera.dev). Descrivi cosa stavi facendo, cosa ti aspettavi, cosa è successo e includi la versione app (Impostazioni → Info). Gli screenshot aiutano.

Per vulnerabilità di sicurezza, usa [security@fluera.dev](mailto:security@fluera.dev) e cifra con la nostra chiave PGP (sul nostro profilo GitHub).

## Come do feedback sulla pedagogia?

Leggiamo ogni email. [hello@fluera.dev](mailto:hello@fluera.dev) va direttamente ai founder. Particolarmente utili: cosa *non* ha funzionato per te, cosa è sembrato attrito non desiderabile e qualsiasi cosa ti abbia sorpreso.

## Successivo

- [Tuning delle performance](/it/docs/performance) — ottenere il massimo da canvas grandi
- [Tutta la documentazione utente](/it/docs)
