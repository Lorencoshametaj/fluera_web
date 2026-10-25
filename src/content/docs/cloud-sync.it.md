---
lang: "it"
title: "Sincronizza fra i tuoi dispositivi"
description: "Un interruttore per tutto l'account, con il piano Cloud: cosa viaggia, una scrivania alla volta, le copie in conflitto, il Cestino e come si cancella."
section: settings
sectionLabel: "Impostazioni"
order: 2
updatedAt: 2026-10-23
---
Con **Sincronizza fra i tuoi dispositivi** ritrovi i tuoi canvas, il tuo studio e le tue impostazioni su ogni dispositivo con cui entri. È un solo interruttore per tutto l'account, non uno per canvas, ed è spento finché non lo accendi tu.

## Accendere la sincronizzazione

1. Entra con un account (una sessione ospite non basta). Serve il piano Cloud.
2. Apri **Impostazioni → Dati e sincronizzazione** e accendi **Sincronizza fra i tuoi dispositivi**.

Vale subito per tutto l'account: ogni dispositivo con cui entri si sincronizza da solo. Quando lo accendi, il server registra la data e la versione dell'informativa privacy che avevi davanti. Senza il piano Cloud l'interruttore ti dice che serve; se il piano finisce, resta acceso ma in pausa.

## Su un dispositivo nuovo

1. Installa Fluera ed entra con lo stesso account.
2. La galleria mostra subito l'elenco dei tuoi canvas. Un canvas che è ancora solo nel cloud porta il segno della nuvola: si scarica quando lo apri, e per farlo serve la rete.
3. Il resto scende da solo in sottofondo, quando sei su Wi-Fi o su una rete via cavo e la batteria non è scarica.

## Cosa viaggia e cosa resta sul dispositivo

Con l'interruttore acceso salgono nel cloud:

- i canvas interi: tratti, sezioni, formule, tabelle, grafici, collegamenti, i PDF con i segni fatti nel lettore, le foto;
- le lezioni registrate: l'audio, a pezzi, con i tratti legati all'audio;
- lo studio di ogni canvas: le carte del ripasso con la storia delle risposte, i concetti, gli esami con il loro inchiostro, il tutor socratico, la chat, il richiamo, la mappa concettuale, i corsi;
- le cartelle della galleria, la cartella di ogni canvas, i canvas fissati, le etichette e il Cestino;
- il testo che Fluera ha riconosciuto nella tua scrittura a mano, con le tue correzioni;
- le tue scelte nelle impostazioni: aspetto, lingua, carta, ripasso, esami e promemoria, colori, gomma e simili.

Restano sul dispositivo la cronologia del canvas (Time Travel), l'annulla e le impostazioni legate a quel dispositivo (mano, palmo, penna, finestra). Le pieghe del browser hanno un interruttore loro, **Le pieghe del browser**, e viaggiano cifrate end-to-end.

## Una scrivania alla volta

Fra i tuoi dispositivi, un canvas si scrive su un dispositivo alla volta.

- Il dispositivo su cui apri un canvas prende il turno e lo rinnova ogni minuto.
- Se lo stesso canvas è aperto altrove, qui lo vedi in sola lettura con **Aperto su …**. Tocca **Scrivi qui**: l'altro dispositivo salva, manda il suo lavoro nel cloud e ti passa il turno. Se non risponde, il turno passa a te dopo circa un minuto e mezzo.
- Quando metti Fluera in secondo piano, il dispositivo manda il suo lavoro e libera il turno. Un turno che nessuno rinnova si libera da solo dopo due minuti e mezzo (app chiusa, niente rete).
- Se il canvas è cambiato su un altro dispositivo mentre lo avevi aperto, vedi **Questo canvas è cambiato su un altro dispositivo**: tocca **Chiudi e aggiorna** per scaricare il lavoro dell'altro.

Senza rete scrivi lo stesso: è la tua copia sul dispositivo.

## Le copie in conflitto

Se lo stesso canvas è cambiato su due dispositivi senza rete, Fluera non scrive una versione sopra l'altra: quando tornano in rete, il lavoro che manca in una delle due resta come canvas a parte nella galleria.

- **«Titolo» · da questo dispositivo**: il lavoro fatto qui.
- **«Titolo» · dall'altro dispositivo**: la versione arrivata dal cloud.

Aprili tutti e due e riunisci a mano quello che ti serve. Un dispositivo con una Fluera più vecchia non scrive sopra un canvas salvato con una Fluera più nuova: ti chiede di aggiornare (**Aggiorna Fluera per salvare nel cloud**) e il suo lavoro sale come copia accanto, **«Titolo» — dal …, da riunire**.

## Cestino e cartelle

- Le cartelle viaggiano con nome, colore, cartella madre e fissate; ogni canvas resta nella sua cartella su tutti i dispositivi.
- Un canvas nel **Cestino** è nel Cestino su ogni dispositivo. I 30 giorni del Cestino contano dall'ora in cui ci è entrato, la stessa ovunque. Se ci scrivi ancora da un altro dispositivo, esce dal Cestino.
- Se elimini una cartella, i canvas che conteneva restano.

## Spegnere non cancella niente

Puoi spegnere l'interruttore da qualunque dispositivo: si ferma su tutti. Si spegne anche se togli il consenso **Cloud sync** in **Impostazioni → Privacy e telemetria**. Spegnerlo **non cancella niente**: quello che è nel cloud resta finché non lo cancelli tu, e sui dispositivi resta tutto.

## Se il piano Cloud si chiude

Se il piano Cloud si chiude (scadenza, rimborso, cambio di piano o revoca), la sincronizzazione va in pausa e per **6 mesi** resta tutto nel cloud: lo puoi scaricare su ogni tuo dispositivo, e l'app ti dice fino a quando. Dopo i 6 mesi possiamo togliere dal cloud l'audio delle lezioni, i PDF e le foto che superano i 500 MB del piano Free, cominciando dai più vecchi. L'inchiostro dei canvas resta sempre, e non togliamo niente da un canvas condiviso con un altro account né dalle schede del catalogo privato. Se riattivi il Cloud prima, la chiusura si annulla.

## Cancellare dal cloud

- **Elimina definitivamente** su un canvas nel Cestino lo toglie dal cloud insieme a ciò che gli appartiene: tratti, foto, PDF, lezioni, carte del ripasso con le risposte, concetti, titoli, studio, testo riconosciuto e l'inchiostro dei suoi esami.
- Una risposta d'esame scartata e una foto tolta da un canvas lasciano il cloud appena il dispositivo è in rete.
- **Cancella tutti i miei dati dal cloud** (**Impostazioni → Privacy e telemetria**) toglie tutti i canvas, le lezioni, l'inchiostro degli esami, le impostazioni che viaggiano e le cartelle, e spegne l'interruttore su tutti i tuoi dispositivi. Resta solo la registrazione dell'interruttore (quando l'hai acceso e spento, con la versione dell'informativa), che è la prova del tuo consenso.
- **Cancella l'account** (**Impostazioni → Profilo e account**) cancella anche quella.
- Se spegni la **Memoria cognitiva**, si cancellano anche le sue copie nel cloud: carte del ripasso con le risposte, concetti, mappa concettuale e titoli dei gruppi di appunti.

Le copie sui tuoi dispositivi restano finché non le elimini lì.

## Come sono protetti i dati

- Sul dispositivo il database locale è cifrato a riposo con ChaCha20-Poly1305 (sqlite3mc); la chiave sta nel portachiavi del sistema.
- Nel cloud i dati stanno su Supabase, regione UE `eu-north-1` (Stoccolma), cifrati in transito (TLS) e a riposo a livello di infrastruttura.
- La sincronizzazione **non** è cifrata end-to-end: Fluera, come titolare del trattamento, può tecnicamente accedere ai dati per far funzionare, proteggere e assistere il servizio. Non li vendiamo e non li usiamo per la pubblicità. Fanno eccezione le pieghe del browser, cifrate end-to-end.

## Successivo

- [Privacy e consenso](/it/docs/privacy-consent)
- [FAQ e troubleshooting](/it/docs/faq)
- [Architettura di sicurezza](/it/security/architecture)
