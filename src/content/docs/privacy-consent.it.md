---
lang: "it"
title: "Privacy e consenso AI"
description: "Quali dati Fluera raccoglie, che consenso stai dando e come spegnere tutto."
section: settings
sectionLabel: "Impostazioni"
order: 1
updatedAt: 2026-05-19
---

Fluera è uno strumento local-first. Di default, niente lascia il tuo dispositivo a meno che tu non attivi esplicitamente una funzione che lo richiede.

## Le quattro categorie di consenso principali

Apri **Impostazioni → Privacy**. Vedrai quattro toggle, tutti disattivati di default:

- **Analytics di prodotto.** Dati di sessione anonimi — conteggio invocazioni feature, durata sessione, durata chiamate AI. Mai contenuto. ID utente hashato SHA-256, retention 180 giorni.
- **Funzioni AI.** Richieste per usare Socratic, Ghost Map, LaTeX OCR e Fog of War. Il testo selezionato dal canvas viene inviato a Google Gemini via il nostro proxy lato server. Mai il quaderno intero.
- **Cloud sync.** Richiesta per sincronizzare i canvas tra dispositivi. Tutti i quaderni sono cifrati sul tuo dispositivo prima dell'upload. Il cloud tiene ciphertext.
- **Crash reporting.** Stack trace e metadata del dispositivo quando l'app crasha. Nessun contenuto utente. Trattato da Sentry con `sendDefaultPii: false`.

Ogni toggle è indipendente. Puoi attivare Cloud Sync senza Analytics. Puoi usare l'AI senza Crash Reporting. I permessi sono granulari di proposito.

## AI Training Data (sezione separata, solo opt-in)

Stiamo costruendo un riconoscitore di scrittura proprietario, su misura per come scrivono gli utenti Fluera. Sotto **Impostazioni → Privacy → AI Training Data** trovi altri due toggle, anch'essi disattivati di default e indipendenti dai quattro sopra:

- **Sessione di calibrazione (~5 min).** Una sessione guidata una tantum dove scrivi 30 simboli che ti mostriamo (cifre, operatori matematici, lettere greche, lettere italiane comuni). Il simbolo a schermo è la verità di base, accoppiato ai tuoi tratti. Dati di qualità più alta per singolo campione.
- **Cattura automatica della scrittura.** Mentre scrivi naturalmente sul canvas, salviamo i tratti grezzi (coordinate, timing, pressione, tilt dello stilo dove supportato) più una piccola immagine PNG cifrata di ogni cluster. I dati restano cifrati sul nostro server. **Quando avremo completato gli accordi con Google** (Data Processing Agreement Vertex AI, in corso) Google Gemini Vision analizzerà le immagini per insegnare a Fluera AI cosa hai scritto. Fino ad allora nessun dato di AI Training esce dalla nostra infrastruttura verso terzi.

Entrambi i toggle usano un identificatore pseudonimizzato dedicato (SHA-256 dell'user id + un salt fresco) **diverso** da quello usato dagli Analytics di prodotto. La correlazione incrociata tra i due corpora è matematicamente non fattibile senza la nostra infrastruttura.

Misure di sicurezza specifiche per questa categoria:
- Cifratura del payload con AES-256-GCM *prima* dell'upload; la chiave di decifratura del corpus è una keypair asimmetrica (X25519) la cui metà privata è custodita su carta offline e mai digitalizzata.
- Row-Level Security sulle tabelle Supabase — un utente non può mai leggere i campioni di un altro utente.
- Filtro rumore: i cluster con meno di 3 punti totali (tap accidentali, smudge) vengono scartati prima del salvataggio.
- Deduplicazione persistente via fingerprint geometrico — re-disegnare identicamente lo stesso cluster non produce duplicati.
- Anteprima per-sample in **Impostazioni → AI Training Data → Catture recenti**: vedi le miniature di esattamente cosa abbiamo salvato.

## Cosa non viene mai raccolto

- Il contenuto dei tuoi canvas (cifrato a riposo con SQLCipher, AES-256)
- Le domande che l'AI fa, o le tue risposte
- L'audio che registri con Time Travel (storato localmente; il sync opt-in cifra prima dell'upload)
- Informazioni personalmente identificabili di qualsiasi tipo senza consenso esplicito

## Come verificare

Fai girare l'app in modalità aereo. Fai tutto tranne cloud sync e AI. Osserva il firewall o il network monitor. Fluera fa zero richieste di rete con tutti e quattro i toggle di consenso disattivati. È verificabile, per design.

## Revocare il consenso

Tutti e quattro i toggle sono sempre accessibili in **Impostazioni → Privacy**. Disattivare un toggle ha effetto immediato. I dati backend associati vengono programmati per cancellazione entro 30 giorni.

Per la cancellazione a livello di account (il diritto all'oblio completo), scrivi a [lorenco@fluera.dev](mailto:lorenco@fluera.dev) dall'indirizzo del tuo account.

## Account Education

Se la tua istituzione amministra il tuo account Fluera, i comportamenti sopra si applicano comunque ai *tuoi* dati. L'amministratore può vedere statistiche aggregate di uso per audit di compliance (via audit log) ma non può leggere il contenuto dei tuoi quaderni. La cifratura è imposta sul tuo dispositivo; la chiave sta nel tuo keychain, non in nessun sistema admin.

## Successivo

- [Setup cloud sync](/it/docs/cloud-sync)
- [Architettura di sicurezza](/it/security/architecture) — il modello completo
