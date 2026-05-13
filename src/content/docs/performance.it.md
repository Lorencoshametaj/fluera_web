---
lang: "it"
title: "Tuning delle performance"
description: "Fluera è costruito per tenere 60 FPS su canvas con centinaia di migliaia di tratti. Ecco cosa controllare quando non lo fa."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

Il motore di Fluera è progettato per restare a 60 FPS con latenza tratto sub-15 ms su hardware moderno — fino a centinaia di migliaia di tratti per quaderno. Quando non lo fa, di solito uno di un piccolo insieme di cose è responsabile.

## Diagnostica

Apri **Impostazioni → Avanzate → Performance**. Vedrai:

- **FPS attuale** — dovrebbe stare a 60 (o 120 su dispositivi ProMotion)
- **Latenza tratto** — dovrebbe leggere <15 ms su iOS/macOS, <20 ms su altre piattaforme
- **Memoria usata** — assoluta e come percentuale del budget del dispositivo
- **Hit rate della tile cache** — dovrebbe essere >90 % durante zoom/pan normali

Se qualcosa qui è rosso, i probabili colpevoli sono nella lista sotto.

## Canvas grandi (&gt; 200k tratti)

Il motore regge questo volume, ma due impostazioni contano:

- **Budget di memoria.** Su dispositivi con meno di 6 GB di RAM, il budget memoria di default di Fluera è conservativo. Se hai molta RAM e vuoi risposte di zoom più rapide, alzalo in **Impostazioni → Canvas → Budget memoria** a *Generoso*.
- **Livello di dettaglio.** La policy LOD di default semplifica i tratti a livelli di zoom molto bassi. Se noti tratti dall'aspetto jittery quando sei zoomato fuori, passa LOD a *Alto dettaglio* — ma aspettati ~10 % di carico GPU in più.

## Registrazione audio-sincronizzata (Time Travel)

Time Travel salva l'audio insieme ai timestamp dei tratti. Per una lezione di 60 minuti, sono circa 20 MB di audio. Non è l'audio che rallenta — è l'indice. Prova:

- **Impostazioni → Time Travel → Granularità indice** impostata a *Standard* invece di *Fine*
- Cancellare le vecchie sessioni Time Travel che non ti servono (sono tenute localmente di default; il pulsante clear-cache le rimuove in sicurezza)

## Apple Pencil nello specifico

Su iPad, la modalità di default *Predicted touch* tiene la latenza tratto sotto gli 8 ms. Se hai disattivato la predizione (in Impostazioni → Canvas → Latenza tratto → Standard), rimettila su Predicted. La predizione è un'API Apple Pencil, non una congettura — usa la predizione di traiettoria dell'hardware stesso.

## Quando niente aiuta

Esegui **Impostazioni → Avanzate → Esporta diagnostica**. Ottieni un piccolo file JSON con campioni FPS, uso memoria e info dispositivo (anonime). Mandalo a [support@fluera.dev](mailto:support@fluera.dev) con una breve descrizione di quando le cose rallentano.

Logghiamo ≈95 % delle regressioni di performance visibili all'utente a uno specifico pezzo di codice entro un'ora dalla ricezione di un export diagnostico. Il restante 5 % è genuinamente difficile e te lo diremo.

## Successivo

- [FAQ](/it/docs/faq)
- [Tutta la documentazione utente](/it/docs)
