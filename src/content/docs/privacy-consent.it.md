---
lang: "it"
title: "Privacy e consenso AI"
description: "Quali dati Fluera raccoglie, che consenso stai dando e come spegnere tutto."
section: settings
sectionLabel: "Impostazioni"
order: 1
updatedAt: 2026-10-23
---

Fluera è uno strumento local-first. Di default, niente lascia il tuo dispositivo a meno che tu non attivi esplicitamente una funzione che lo richiede.

## Le quattro categorie di consenso principali

Apri **Impostazioni → Privacy**. Vedrai quattro toggle, tutti disattivati di default:

- **Analytics di prodotto.** Dati d'uso legati all'identificativo del tuo account, perché tu possa vederli e cancellarli — uso delle funzioni, durata della sessione, durata delle chiamate AI. Mai contenuto. Restano al massimo 180 giorni.
- **Funzioni AI.** Richieste per usare Socratic, Ghost Map, LaTeX OCR e Fog of War. Il testo selezionato dal canvas viene inviato ai modelli Google Gemini serviti tramite Google Vertex AI, con elaborazione nell'UE (modelli 2.5 nelle regioni europe-west4 NL / europe-west1 BE, modelli 3.x sull'endpoint multi-regione UE di Vertex AI): i dati restano negli Stati membri dell'UE. Mai il canvas intero.
- **Cloud sync.** Richiesta per sincronizzare i canvas tra dispositivi. I dati sincronizzati sono cifrati in transito (TLS) e a riposo sull'infrastruttura UE (Supabase, eu-north-1). Il sync **non** è cifrato end-to-end: Fluera, in quanto titolare del trattamento, può accedere ai contenuti sincronizzati. Non li vendiamo mai né li usiamo per pubblicità. Con il piano Cloud, **Sincronizza fra i tuoi dispositivi** (sotto) porta anche il tuo studio e le tue impostazioni.
- **Crash reporting.** Stack trace e metadata del dispositivo quando l'app crasha. Nessun contenuto utente. Trattato da Sentry con `sendDefaultPii: false`.

Ogni toggle è indipendente. Puoi attivare Cloud Sync senza Analytics. Puoi usare l'AI senza Crash Reporting. I permessi sono granulari di proposito.

## Memoria cognitiva (sul dispositivo, opt-out)

Distinta dai quattro consensi cloud sopra: per impostazione predefinita Fluera indicizza i tuoi appunti **sul dispositivo** per dare titoli automatici, mappa concettuale (Ghost Map) e ripetizione dilazionata (FSRS). L'indice si costruisce e si calcola sul dispositivo e resta lì, a meno che tu non accenda **Sincronizza fra i tuoi dispositivi** (sezione seguente): allora le carte del ripasso con la storia delle tue risposte, i concetti, la mappa concettuale e i titoli dei gruppi di appunti passano dal cloud di Fluera per arrivare ai tuoi altri dispositivi. Puoi disattivarla in **Impostazioni → Privacy → Memoria cognitiva**: l'indicizzazione si ferma e i dati cognitivi su questo dispositivo vengono cancellati subito (i tuoi appunti restano intatti); se usi Sincronizza fra i tuoi dispositivi, si cancellano anche le copie nel cloud, e non ne sale più nessuna finché non la riattivi. Base giuridica: legittimo interesse con diritto di opposizione (GDPR Art. 6.1.f / 21) — per questo è attiva di default e opt-out, non un consenso opt-in come i quattro sopra.

## Sincronizza fra i tuoi dispositivi (piano Cloud)

L'interruttore **Impostazioni → Dati e sincronizzazione → Sincronizza fra i tuoi dispositivi** è spento finché non lo accendi tu. Servono un account e il piano Cloud, e vale per tutto il tuo account: acceso su un dispositivo, vale su ogni dispositivo con cui entri. Quando lo accendi, il server registra la data e la versione dell'informativa che avevi davanti. Base giuridica: contratto (GDPR Art. 6.1.b) — è il servizio Cloud che paghi.

- **Cosa sale nel cloud, solo con l'interruttore acceso:** i canvas interi (tratti, sezioni, formule, i PDF con i segni fatti nel lettore, le foto); le lezioni registrate (l'audio, a pezzi); lo studio di ogni canvas (le carte del ripasso con le tue risposte, i concetti, gli esami con il loro inchiostro, il tutor socratico, la chat, il richiamo, i corsi); le cartelle della galleria (con i loro nomi), la cartella di ogni canvas, i fissati, le etichette e il Cestino; il testo che Fluera ha riconosciuto nella tua scrittura a mano; le tue scelte nelle impostazioni (aspetto, lingua, carta, ripasso, colori, gomma e simili). Le impostazioni legate a un solo dispositivo (mano, palmo, penna, finestra) restano lì.
- **Cosa resta sempre sul dispositivo:** la cronologia del canvas (Time Travel) e l'annulla.
- **Chi lo vede:** tu. Su un canvas che condividi, i membri vedono il canvas e i titoli dei gruppi di appunti; il tuo studio lo vedi solo tu.
- **Dove:** Supabase, regione UE `eu-north-1` (Stoccolma), cifrato in transito e a riposo, **non** cifrato end-to-end.
- **Spegnerlo** da un dispositivo qualsiasi lo ferma su tutti e non cancella niente. Lo stesso vale se togli il consenso Cloud sync.
- **Quando il piano Cloud finisce,** la sincronizzazione va in pausa e tutto resta scaricabile per 6 mesi. Dopo, possiamo togliere l'audio delle lezioni, i PDF e le foto oltre i 500 MB del piano Free, cominciando dai più vecchi; l'inchiostro dei tuoi canvas resta.
- **Cancellare:** **Elimina definitivamente** su un canvas nel **Cestino** lo toglie dal cloud con ciò che gli appartiene, l'inchiostro dei suoi esami compreso; **Impostazioni → Privacy e telemetria → Cancella tutti i miei dati dal cloud** toglie tutti i canvas, le lezioni, l'inchiostro degli esami, le impostazioni e le cartelle, e spegne Sincronizza fra i tuoi dispositivi; **Impostazioni → Profilo e account → Cancella l'account** toglie tutto, impostazioni comprese.

Senza l'interruttore tutto questo resta sul tuo dispositivo, come prima.

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

- Il contenuto dei tuoi canvas (cifrato a riposo con sqlite3mc, ChaCha20-Poly1305), a meno che tu non accenda **Sincronizza fra i tuoi dispositivi** (sopra)
- Le domande che l'AI fa, o le tue risposte
- L'audio che registri, a meno che tu non accenda **Sincronizza fra i tuoi dispositivi** (sopra): allora va nel cloud come i tuoi canvas, cifrato in transito e a riposo, non end-to-end
- Informazioni personalmente identificabili di qualsiasi tipo senza consenso esplicito

## Come verificare

Spegni i quattro interruttori e guarda il firewall o il network monitor: i tuoi canvas, le registrazioni e quello che scrivi restano sul dispositivo. L'app parla ancora con la rete per cose che non portano il contenuto dei canvas, per esempio: l'accesso al tuo account, il controllo dell'abbonamento con lo store (RevenueCat), il download dei modelli che servono ad alcune funzioni, il segnale del marketplace quando installi o studi una scheda del catalogo (acceso di default, si spegne in **Impostazioni → Privacy e telemetria → Segnale del marketplace**) e le pagine che apri nel browser integrato.

## Revocare il consenso

Tutti e quattro i toggle sono sempre accessibili in **Impostazioni → Privacy**. Disattivare un toggle ha effetto immediato. Cosa succede ai dati già raccolti dipende dalla categoria:

- **Analytics di prodotto:** quando la revoca arriva ai nostri server, la telemetria già raccolta con il tuo account si cancella subito. In ogni caso non resta mai più di 180 giorni.
- **Funzioni AI:** le richieste si fermano subito, anche sul nostro server. Il registro di utilizzo dell'AI (quale funzione, quanti token, nessun contenuto) resta 24 mesi, per i limiti del piano.
- **Cloud sync:** spegnerlo, o spegnere Sincronizza fra i tuoi dispositivi, non cancella niente di ciò che è già nel cloud — per quello usa **Cancella tutti i miei dati dal cloud**.
- **Crash reporting:** la revoca non cancella i report già mandati: Sentry li tiene 30 giorni, e le sue copie di backup cifrate fino a 90.

Per cancellare l'account e i suoi dati nel cloud, usa **Impostazioni → Profilo e account → Cancella l'account**. Se non riesce, scrivi a [lorenco@fluera.dev](mailto:lorenco@fluera.dev) dall'indirizzo del tuo account.

## Successivo

- [Setup cloud sync](/it/docs/cloud-sync)
- [Architettura di sicurezza](/it/security/architecture) — il modello completo
