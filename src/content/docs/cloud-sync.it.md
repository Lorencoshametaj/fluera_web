---
lang: "it"
title: "Cloud sync"
description: "Come sincronizzare i canvas tra dispositivi, cosa viene cifrato e come recuperare se perdi la passphrase."
section: settings
sectionLabel: "Impostazioni"
order: 2
updatedAt: 2026-04-20
---

Il cloud sync è opt-in per quaderno. Puoi sincronizzare un canvas tenendone un altro strettamente locale. Niente si muove finché non glielo dici tu.

## Attivare il sync sul primo dispositivo

1. Apri **Impostazioni → Privacy** e attiva **Cloud sync**.
2. Crea o inserisci la tua **passphrase di sync**. È *separata* dalla password dell'account. La passphrase serve a derivare la chiave di cifratura — ed è custodita solo sul tuo dispositivo, mai sui nostri server.
3. Scegli quali quaderni sincronizzare. Click destro (o long-press) su un quaderno → **Attiva sync**.

Una piccola icona cloud appare su ogni quaderno sincronizzato. Una variante rossa indica un errore; una grigia indica pausato.

## Aggiungere un secondo dispositivo

1. Installa Fluera sul secondo dispositivo.
2. Accedi con lo stesso account.
3. Inserisci la *stessa* passphrase di sync quando richiesta. La passphrase non è recuperabile — se non ce l'hai, i dati cifrati non sono leggibili sul nuovo dispositivo.
4. Il cloud sync inizia. Aspettati che il primo sync completo richieda qualche minuto per un quaderno di dimensioni medie.

## Cosa viene cifrato e come

- Ogni quaderno è cifrato localmente con una chiave per-quaderno.
- Quelle chiavi sono cifrate con una root key derivata dalla tua passphrase di sync via PBKDF2-SHA256, 256.000 iterazioni.
- Solo i byte cifrati arrivano mai al server. Non possiamo leggere i tuoi quaderni.

Anche i metadata (titoli quaderni, timestamp, dimensione) sono cifrati — il server vede blob opachi e timestamp di sync.

## Se perdi la passphrase

Se dimentichi la passphrase e non hai un dispositivo che ha ancora una chiave in cache, i tuoi dati cifrati diventano **irrecuperabili**. È intenzionale. L'alternativa — un meccanismo di recovery lato server — romperebbe il modello end-to-end ed è un trade-off che non siamo disposti a fare per gli account consumer.

Per gli **account Education** si può configurare una chiave di recovery opzionale custodita dall'amministratore al momento del deploy. È un opt-in esplicito, documentato sul DPA istituzionale e auditato.

## Risoluzione dei conflitti

Se modifichi lo stesso canvas su due dispositivi contemporaneamente mentre uno è offline, Fluera usa un CRDT con vector clock per fare merge senza conflitti. Non perdi lavoro. In rari casi dove il merge automatico è ambiguo, vedrai un marker "merge needed" sul nodo interessato e una vista side-by-side per confermare.

## Disattivare il sync per un quaderno specifico

Click destro (o long-press) su un quaderno → **Disattiva sync**. La copia cloud viene revocata immediatamente. La copia locale resta intatta.

## Successivo

- [FAQ e troubleshooting](/it/docs/faq)
- [Architettura di sicurezza](/it/security/architecture)
