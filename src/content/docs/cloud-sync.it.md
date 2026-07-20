---
lang: "it"
title: "Cloud sync"
description: "Come sincronizzare i canvas tra dispositivi e come vengono protetti i dati sincronizzati."
section: settings
sectionLabel: "Impostazioni"
order: 2
updatedAt: 2026-04-20
---

Il cloud sync è opt-in per quaderno. Puoi sincronizzare un canvas tenendone un altro strettamente locale. Niente si muove finché non glielo dici tu.

## Attivare il sync sul primo dispositivo

1. Apri **Impostazioni → Privacy** e attiva **Cloud sync**.
2. Scegli quali quaderni sincronizzare. Click destro (o long-press) su un quaderno → **Attiva sync**.

Una piccola icona cloud appare su ogni quaderno sincronizzato. Una variante rossa indica un errore; una grigia indica pausato.

## Aggiungere un secondo dispositivo

1. Installa Fluera sul secondo dispositivo.
2. Accedi con lo stesso account.
3. Il cloud sync inizia. Aspettati che il primo sync completo richieda qualche minuto per un quaderno di dimensioni medie.

## Come vengono protetti i dati sincronizzati

- Sul tuo dispositivo, il database locale è cifrato a riposo con SQLCipher.
- I quaderni sincronizzati viaggiano cifrati in transito (TLS) e sono conservati su infrastruttura europea (Supabase, regione `eu-north-1`), cifrata a riposo a livello infrastrutturale.
- Il cloud sync **non** è end-to-end: come titolare del trattamento, Fluera può tecnicamente accedere ai contenuti sincronizzati. Non li vendiamo e non li usiamo per pubblicità o profilazione.

Se esporti un quaderno come file `.fluera`, quel file è cifrato separatamente con AES-256-GCM.

## Recupero dei dati

Poiché i quaderni sincronizzati sono conservati sull'infrastruttura cloud, accedendo con lo stesso account puoi recuperarli su un nuovo dispositivo. La copia locale resta inoltre disponibile su qualsiasi dispositivo dove l'hai già scaricata.

Per gli **account Education** la conservazione e l'accesso sono regolati dal DPA istituzionale.

## Risoluzione dei conflitti

Se modifichi lo stesso canvas su due dispositivi contemporaneamente mentre uno è offline, Fluera usa un CRDT con vector clock per fare merge senza conflitti. Non perdi lavoro. In rari casi dove il merge automatico è ambiguo, vedrai un marker "merge needed" sul nodo interessato e una vista side-by-side per confermare.

## Disattivare il sync per un quaderno specifico

Click destro (o long-press) su un quaderno → **Disattiva sync**. La copia cloud viene revocata immediatamente. La copia locale resta intatta.

## Successivo

- [FAQ e troubleshooting](/it/docs/faq)
- [Architettura di sicurezza](/it/security/architecture)
