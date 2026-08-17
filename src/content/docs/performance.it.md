---
lang: "it"
title: "Tuning delle performance"
description: "Fluera punta a 60 FPS e a un inchiostro a bassa latenza sull'hardware supportato. Le prestazioni effettive variano in base a dispositivo, complessità del canvas e funzioni attive."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

Il motore di Fluera punta a 60 FPS e a un inchiostro a bassa latenza sull'hardware supportato. Le prestazioni effettive variano in base a dispositivo, stack di input, complessità del canvas e funzioni attive.

## Diagnostica

Apri **Impostazioni → Avanzate → Performance**. Vedrai:

- **FPS attuale** — dovrebbe stare a 60 (o 120 su dispositivi ProMotion)
- **Latenza tratto** — confronta il valore con il target documentato per il tuo dispositivo e stack di input; non esiste una soglia universale
- **Memoria usata** — assoluta e come percentuale del budget del dispositivo
- **Hit rate della tile cache** — dovrebbe essere >90 % durante zoom/pan normali

Se qualcosa qui è rosso, i probabili colpevoli sono nella lista sotto.

## Canvas grandi

I canvas grandi possono richiedere ottimizzazioni. Parti da queste due impostazioni:

- **Budget di memoria.** Su dispositivi con meno di 6 GB di RAM, il budget memoria di default di Fluera è conservativo. Se hai molta RAM e vuoi risposte di zoom più rapide, alzalo in **Impostazioni → Canvas → Budget memoria** a *Generoso*.
- **Livello di dettaglio.** La policy LOD di default semplifica i tratti a livelli di zoom molto bassi. Se noti tratti dall'aspetto jittery quando sei zoomato fuori, passa LOD a *Alto dettaglio* — ma aspettati ~10 % di carico GPU in più.

## Registrazione audio-sincronizzata (Time Travel)

Time Travel salva l'audio insieme ai timestamp dei tratti. Per una lezione di 60 minuti, sono circa 20 MB di audio. Non è l'audio che rallenta — è l'indice. Prova:

- **Impostazioni → Time Travel → Granularità indice** impostata a *Standard* invece di *Fine*
- Cancellare le vecchie sessioni Time Travel che non ti servono (sono tenute localmente di default; il pulsante clear-cache le rimuove in sicurezza)

## Apple Pencil nello specifico

Su iPad, la modalità di default *Predicted touch* è progettata per ridurre la latenza percepita del tratto. I risultati variano in base a iPad, Pencil, versione del sistema e carico del canvas. Se hai disattivato la predizione (in Impostazioni → Canvas → Latenza tratto → Standard), rimettila su Predicted. La predizione è un'API Apple Pencil, non una congettura — usa la predizione di traiettoria dell'hardware stesso.

## Quando niente aiuta

Esegui **Impostazioni → Avanzate → Esporta diagnostica**. Ottieni un piccolo file JSON con campioni FPS, uso memoria e info dispositivo (anonime). Mandalo a [support@fluera.dev](mailto:support@fluera.dev) con una breve descrizione di quando le cose rallentano.

I dati diagnostici aiutano il supporto a indagare sui problemi di performance. Tempi ed esiti dell'analisi variano in base al problema e ai dati disponibili.

## Successivo

- [FAQ](/it/docs/faq)
- [Tutta la documentazione utente](/it/docs)
