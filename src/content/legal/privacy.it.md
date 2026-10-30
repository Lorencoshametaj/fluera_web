---
lang: "it"
slug: "privacy"
title: "Informativa Privacy"
versione: "1.10.0"
aggiornato: "30 ottobre 2026"
sommario: "Informativa sul trattamento dei dati personali degli utenti dell'applicazione Fluera, redatta ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (**GDPR**) e del D.Lgs. 196/2003 come novellato dal D.Lgs. 101/2018."
fonte: "Fluera/assets/legal/privacy_it.md"
---
<!-- GENERATO da tools/testi_legali_sul_sito.py: NON modificare qui. La sorgente è Fluera/assets/legal/privacy_it.md, il testo che l'app mostra. -->


## 1. Titolare del trattamento

Il Titolare del trattamento dei dati personali è:

- **Titolare:** Lorenco Shametaj (persona fisica; "Fluera" è il marchio/prodotto — società in corso di costituzione, a cui il ruolo sarà trasferito)
- **Indirizzo:** `Via Boccaccio 44, 35128 Padova (PD), Italia`
- **P.IVA / C.F.:** non ancora attribuita (da inserire alla costituzione)
- **Email privacy:** lorenco@fluera.dev
- **Email supporto:** support@fluera.dev

Non è stato nominato un Data Protection Officer (DPO) in quanto non ricorrono i presupposti dell'art. 37 GDPR. Per qualsiasi questione relativa al trattamento dei propri dati, l'utente può contattare il Titolare agli indirizzi indicati sopra.

## 2. Dati personali trattati

Fluera tratta le seguenti categorie di dati personali, esclusivamente nella misura necessaria alle finalità dichiarate e previo consenso granulare ove richiesto.

### 2.1 Dati di account
- Indirizzo email se l'utente crea un account (Supabase Auth)
- Identificativo utente (`user_id`) generato da Supabase — anche per sessioni anonime
- Dati del provider di autenticazione se utilizzato (Google Sign-In, Sign in with Apple): email, nome, identificativo univoco

### 2.2 Contenuti prodotti dall'utente
- Canvas, tratti, note, annotazioni PDF, immagini inserite
- Registrazioni audio delle sessioni di studio (solo se Time Travel attivo)
- I contenuti sono conservati in un database locale dedicato al tuo account. Il database sul dispositivo è **cifrato a riposo con ChaCha20-Poly1305** (art. 32 GDPR) con una chiave a 256 bit generata sul tuo dispositivo e custodita nel portachiavi del sistema operativo — Keychain su iOS/macOS, Keystore su Android, libsecret su Linux, DPAPI su Windows. Noi la chiave non la vediamo mai. Perché un cambio di telefono non ti faccia perdere i canvas, la chiave ha una copia nel **backup cifrato del sistema**, accanto alla copia del database che il sistema fa già: su Android in Block Store di Google Play services, salvata nel tuo account Google solo se quel backup è cifrato end-to-end con il blocco schermo del telefono (Android 9 o successivi con PIN, sequenza o password), altrimenti solo sul telefono; su iOS nel backup cifrato di iCloud o del Finder, insieme al resto del Keychain (non in iCloud Keychain). I contenuti lasciano il tuo dispositivo in tre casi, tutti su tua azione: quando attivi il **Cloud Sync**; quando **pubblichi** una scheda di studio nel catalogo; quando tieni una scheda nel tuo **catalogo privato** per condividerla con un link. Gli ultimi due funzionano anche con il Cloud Sync spento e riguardano solo la porzione di appunti che scegli tu, mai l'intero canvas — vedi §2.11
- **Foto, PDF, audio e cronologia:** le foto e le immagini inserite, i PDF importati, le registrazioni audio e la cronologia del canvas (Time Travel) non stanno in quel database: sono file a parte nelle cartelle dell'app. Fluera non li cifra con la chiave del database; li protegge il sistema operativo, che tiene la cartella dell'app chiusa alle altre app e, quando è attiva, la cifratura del dispositivo.
- **Cosa comporta se cambi dispositivo o reinstalli:** se ripristini un backup del sistema (telefono nuovo, ripristino del telefono o, su Android con il backup Google attivo, reinstallazione dell'app), database e chiave tornano insieme e i canvas si riaprono da soli, così com'erano all'ultimo backup fatto dal sistema. Non tornano se il backup del sistema è spento; su Android senza Google Play services, o nel backup Google senza blocco schermo; se cancelli i dati dell'app, o la disinstalli e la reinstalli senza ripristino (su iOS il database non sopravvive alla disinstallazione); su Android se i dati dell'app superano i 25 MB del backup Google, perché allora il sistema non ne fa il backup. In questi casi il database locale resta illeggibile — a te come a noi — e **la via di recupero è il Cloud Sync**, che è opt-in: se non l'hai attivato, i tuoi canvas esistono solo su quel dispositivo.
- **Nota beta:** i database creati prima che la cifratura arrivasse nell'app (agosto 2026) non sono cifrati e non possono essere aperti con una chiave. Al primo avvio di una versione con la cifratura un database del genere viene **cancellato** e ne nasce uno cifrato. I canvas già sincronizzati sul cloud tornano; quelli esistiti solo in locale no.

### 2.3 Dati di utilizzo (telemetria)
Solo se l'utente ha prestato consenso alla categoria **Analytics di prodotto**:
- `session_id` anonimo generato casualmente per sessione
- L'identificativo del tuo account, così che tu possa accedere alla tua telemetria e cancellarla (§6). Al processor di crash reporting (§5) viene inviato solo un hash SHA-256, mai l'identificativo in chiaro
- Piattaforma, versione app, tier di abbonamento, lingua del dispositivo
- Eventi di prodotto da whitelist server-side (inizio/fine sessione, Ghost Map, Socratic, review SRS, chiamate AI con durata e token)
- **Quanto ricordi di una scheda del catalogo:** se installi una scheda dal catalogo e riapri il suo canvas dopo 1, 7 e 30 giorni, l'app manda ogni volta un solo numero: quanto il tuo ricordo dei suoi concetti, calcolato sul dispositivo, sta sopra quello che resterebbe senza studiarla. Con il numero viaggiano l'identificativo della scheda, il giorno (1, 7 o 30) e la versione della formula. È legato al tuo account, anche alla sessione anonima. Nel catalogo nessuno lo vede da solo: conta solo nella media di almeno 5 account veri, per mostrare con quali schede si impara davvero. Non parte se la telemetria è spenta o se è spenta la memoria cognitiva (§2.9), e il server lo scarta se il Segnale del marketplace è spento (§2.11). Resta finché non togli il consenso Analytics, non spegni il Segnale del marketplace, non usi «Cancella tutti i miei dati dal cloud» o non cancelli l'account
- **Non sono raccolti:** contenuto degli appunti, testo delle domande, informazioni identificative.

### 2.4 Dati per funzioni AI
Solo se l'utente ha prestato consenso alla categoria **Funzioni AI**:
- Contenuti selezionati del canvas inviati per Socratic Mode, Ghost Map, LaTeX OCR, Exam Session — porzioni di testo e immagini PNG renderizzate delle singole regioni-cluster di scrittura a mano (mai l'intero canvas)
- L'inferenza AI gira su Google Vertex AI nell'**Unione Europea**, solo su endpoint dell'UE: le regioni europe-west4 (Paesi Bassi) ed europe-west1 (Belgio), oppure l'endpoint multi-regione UE di Vertex AI, che Google vincola agli Stati membri dell'UE; i contenuti del canvas non vengono trasferiti fuori dall'UE per l'inferenza AI
- Token di utilizzo per enforcement dei limiti di piano
- In produzione le chiamate transitano via proxy Supabase Edge Function (chiave API server-side)

### 2.5 Dati per Cloud Sync
Solo se l'utente ha prestato consenso alla categoria **Cloud Sync**:
- Copie dei canvas archiviate su Supabase (regione UE `eu-north-1`), cifrate in transito (TLS) e a riposo a livello infrastrutturale. Il Cloud Sync **non** è cifrato end-to-end: in qualità di titolare del trattamento, Fluera può tecnicamente accedere ai contenuti sincronizzati per erogare, proteggere e supportare il servizio (non li vende né li usa per pubblicità)
- **Le pieghe del browser fanno eccezione.** Se accendi «Le pieghe del browser» in Impostazioni → Dati, le pagine piegate in un canvas (indirizzi, frasi, copie delle pagine, il retro, i fili, l'inchiostro al minuto) passano ai tuoi altri dispositivi **cifrate end-to-end**: chiuse sul dispositivo con AES-256-GCM e una chiave nata sul dispositivo, che il server non riceve mai. La chiave passa a un tuo nuovo dispositivo con un abbinamento che mostra lo stesso codice di 6 cifre sui due, o con il codice di recupero che vedi una sola volta all'accensione; sul server ne resta solo una copia chiusa con quel codice. Il server vede a quale canvas appartiene ogni piega, di che tipo è e quando cambia, mai il contenuto. Con la stessa chiave viaggiano anche la cronologia, i preferiti, le preferenze dei siti e le schede aperte di Fludomi, se non li fermi in «Cosa viaggia» (§2.14). Se perdi tutti i tuoi dispositivi e il codice di recupero, quelle pieghe non si possono recuperare (i canvas sì). «Spegni su tutti i dispositivi» le cancella dal server
- Metadati di sincronizzazione (hash, timestamp, dimensione)

**Sincronizzazione fra i tuoi dispositivi** *(piano Cloud; con il piano Free fino a 500 MB, senza le lezioni registrate)*. In *Impostazioni → Dati e sincronizzazione* c'è l'interruttore «Sincronizza fra i tuoi dispositivi». È spento finché non lo accendi tu. Vale per tutto il tuo account: acceso su un dispositivo, vale su ogni dispositivo con cui entri. Per accenderlo servono un account (non una sessione ospite) e il piano Cloud. Quando lo accendi, il server registra la data e la versione di questa informativa che avevi davanti.

- **Cosa sale nel cloud, solo con l'interruttore acceso:** i canvas interi (tratti, sezioni, formule, tabelle, grafici, collegamenti, i PDF con i segni fatti nel lettore, le foto); le lezioni registrate (l'audio, a pezzi, con i tratti legati all'audio); lo studio di ogni canvas (le carte del ripasso con la storia delle tue risposte, i concetti, gli esami con il loro inchiostro, il tutor socratico, la chat, il richiamo, la mappa concettuale, i corsi); le cartelle della galleria (nome, colore, cartella madre, fissata), la cartella di ogni canvas, i canvas fissati, le etichette e il Cestino (quali canvas ci sono e da quando); il testo che Fluera ha riconosciuto nella tua scrittura a mano, con le tue correzioni; le tue scelte nelle impostazioni (aspetto, lingua, carta e formato di esportazione, ordine della galleria, ripasso, esami e promemoria, colori, gomma, formule usate di recente, impostazioni del browser, gruppi di strumenti dell'astuccio). Le impostazioni legate al singolo dispositivo (mano, palmo, penna, finestra) restano sul dispositivo.
- **Cosa resta sul dispositivo anche con l'interruttore acceso:** la cronologia del canvas (Time Travel) e la pila di annulla e ripeti.
- **Titoli dei gruppi di appunti, tra i tuoi dispositivi.** Quando dai un nome a un gruppo di appunti, quel nome è testo scritto da te. Con l'interruttore acceso sale nel cloud insieme a un riferimento ai tratti a cui appartiene e all'ora in cui l'hai cambiato, così vince il nome più recente anche se lo modifichi su due dispositivi.
- **Chi vede questi dati:** tu. Su un canvas che condividi con altre persone, i membri vedono il canvas e i titoli dei gruppi di appunti; il tuo studio (carte, risposte, esami, chat) lo vedi solo tu.
- **Il nome del dispositivo.** Per dirti dove è aperto un canvas («Aperto su Redmi 15 5G») e per portare la chiave delle pieghe su un altro dispositivo, l'app manda al server il nome che il dispositivo ha nelle impostazioni del sistema (su un computer, il suo nome), insieme a un codice casuale nato con l'installazione. Se in quel nome c'è il tuo nome («Telefono di Mario»), arriva anche quello. Lo vedi solo tu, sui dispositivi del tuo account. Resta sul server solo finché serve: il turno di un canvas dura pochi minuti e si rinnova mentre il canvas è aperto; una richiesta di abbinamento scade dopo 15 minuti. Una riga scaduta può restare fino alla prossima apertura di quel canvas o al prossimo abbinamento, e se ne va con l'account. Un caso dura di più: se una versione meno recente di Fluera, su un tuo dispositivo, ha scritto in un canvas che nel frattempo una versione più nuova aveva salvato, il lavoro di quel dispositivo sale nel cloud come canvas a parte, col nome del canvas seguito da «dal» e dal nome del dispositivo («Fisica — dal Redmi 15 5G, da riunire»), così sai da dove viene. Lì il nome del dispositivo fa parte del titolo e resta quanto quel canvas, come ogni altro titolo (§6). Non mandiamo il numero di serie né altri codici del dispositivo.
- **Dove e come:** su Supabase, nella regione UE `eu-north-1` (Stoccolma), come il resto del Cloud Sync: cifrati in transito (TLS) e a riposo a livello infrastrutturale, **non** cifrati end-to-end. Fluera, come titolare, può tecnicamente accedervi per erogare, proteggere e supportare il servizio; non li vende e non li usa per pubblicità.
- **Spegnere:** puoi spegnere l'interruttore da qualunque dispositivo, e si ferma su tutti. Si spegne anche se togli il consenso **Cloud Sync** in *Impostazioni → Privacy e telemetria*. Se il piano Cloud finisce, la sincronizzazione va in pausa. In tutti e tre i casi **non si cancella niente**: quello che è già nel cloud resta finché non lo cancelli tu, salvo la regola del §6 per un piano Cloud chiuso da più di 6 mesi, e sui dispositivi resta tutto.
- **Senza l'interruttore** questi dati restano sul dispositivo, come prima: canvas, lezioni, studio, memoria cognitiva (§2.9), testo riconosciuto e impostazioni. Di questi dati esce solo quello che mandi tu: un canvas che condividi con altre persone, le schede del catalogo (§2.11), le richieste alle funzioni AI (§2.4).

### 2.6 Dati di diagnostica e crash
Solo se l'utente ha prestato consenso alla categoria **Report dei crash**:
- Stack trace, versione OS, modello dispositivo, versione app
- Nessun contenuto utente nei report (`sendDefaultPii: false`)
- Gli indirizzi IP non vengono memorizzati (scrubbing IP lato server attivo su Sentry)
- Processati tramite Sentry — privacy policy: https://sentry.io/privacy/

### 2.7 Dati di abbonamento
- Stato dell'abbonamento (free / essential / plus / pro), date di attivazione, rinnovo, scadenza
- Identificativi RevenueCat / Apple / Google per matching ricevute
- Se il piano Cloud si chiude: quando, il motivo (scadenza, rimborso, cambio di piano, revoca) e fino a quando conserviamo i tuoi file (§6)
- Nessun dato di pagamento (numeri di carta, IBAN) viene memorizzato dai nostri sistemi: le transazioni sono gestite da Apple, Google e RevenueCat

### 2.8 Componenti software third-party (on-device)

Fluera include alcuni SDK third-party embedded che processano dati **esclusivamente sul tuo dispositivo**, senza inviare nulla ai loro produttori. Per trasparenza:

- **Google ML Kit** (riconoscimento on-device di scrittura a mano e testo — Digital Ink & Text Recognition) — il riconoscimento avviene localmente sul dispositivo; inchiostri e immagini non vengono inviati a Google per queste API on-device (i modelli di riconoscimento vengono scaricati da Google). Google non riceve alcun contenuto del canvas da Fluera tramite ML Kit.
- **sqlite3mc** — il motore del database locale, che realizza la cifratura ChaCha20-Poly1305 descritta al §2.2. La chiave gliela fornisce l'app prendendola dal portachiavi del tuo dispositivo; sqlite3mc di suo non invia nulla da nessuna parte. Tutta l'elaborazione è on-device.
- **Sentry SDK** (Functional Software Inc.) — solo la libreria embedded; vedi §4 per il responsabile del trattamento e §3 per la base giuridica del trasferimento di crash report (consenso, opt-in).

Questi componenti non sono **responsabili del trattamento** ai sensi dell'art. 28 GDPR perché non ricevono dati personali. Sono **componenti software** di terze parti come qualsiasi altra libreria utilizzata per costruire l'app.

### 2.9 Memoria cognitiva (indicizzazione sul dispositivo)

Attiva per impostazione predefinita (opt-out). Fluera costruisce **sul tuo dispositivo** un indice cognitivo dei tuoi appunti che alimenta le funzioni di studio — titoli automatici dei cluster, mappa concettuale ("Ghost Map"), ripetizione dilazionata (FSRS) e i checkpoint dello stato di apprendimento ("Sé"). L'indice si costruisce e si calcola sempre sul dispositivo.

- **Dove resta:** sul tuo dispositivo. Esce solo se accendi «Sincronizza fra i tuoi dispositivi» (§2.5, piano Cloud): allora le carte del ripasso con la storia delle tue risposte, i concetti, la mappa concettuale e i titoli dei gruppi di appunti passano dal cloud di Fluera per arrivare ai tuoi altri dispositivi. Senza l'interruttore l'indice resta sul dispositivo, come prima. È distinto dalle *Funzioni AI* (§2.4), che restano un consenso separato.
- **Dati derivati:** identificatori di cluster e concetti, titoli generati sul dispositivo, struttura del grafo concettuale, log degli eventi concettuali, programmazione delle ripetizioni. Sul dispositivo sono conservati con la stessa protezione descritta al §2.2; la copia nel cloud, se accendi la sincronizzazione, come descritto al §2.5.
- **Controllo (opt-out):** puoi disattivarla in qualsiasi momento da *Impostazioni → Privacy → Memoria cognitiva*. Alla disattivazione l'indicizzazione si interrompe e **i dati cognitivi già creati su questo dispositivo vengono cancellati immediatamente**; i tuoi appunti restano intatti. Se usi «Sincronizza fra i tuoi dispositivi», si cancellano anche le copie nel cloud (le carte del ripasso con le risposte, i concetti, la mappa concettuale e i titoli dei gruppi di appunti), e da nessun tuo dispositivo ne sale più una finché non la riattivi; sugli altri tuoi dispositivi le copie restano finché non la disattivi anche lì. Riattivandola, l'indice viene ricostruito.

### 2.10 Dataset di riconoscimento della scrittura (opt-in, disattivo per impostazione predefinita)

Fluera sta costruendo un proprio riconoscitore della scrittura a mano,
addestrato sulla scrittura reale degli utenti Fluera. **Ogni modalità di
raccolta è disattiva per impostazione predefinita**, ognuna è una decisione
separata, e ognuna è revocabile in qualsiasi momento da *Impostazioni →
Privacy → Migliorare il riconoscimento*.

- **Cosa viene raccolto:** tratti grezzi (coordinate, tempi, pressione,
  inclinazione dello stilo dove supportata), una piccola immagine PNG di ogni
  gruppo di scrittura, e informazioni di base sul dispositivo (piattaforma,
  tipo di puntatore). Mai il tuo nome, la tua email o il contenuto dei PDF che
  leggi.
- **Come è protetto:** cifrato sul tuo dispositivo con AES-256-GCM **prima**
  del caricamento. Insieme al dato viaggia solo un identificativo pseudonimo —
  mai nome o email — quindi dal dato stesso non possiamo risalire al tuo
  account.
- **Dove finisce:** Supabase, regione UE `eu-north-1` (Stoccolma), la stessa
  del §2.5. Quando l'accordo Vertex AI sarà finalizzato, Google Gemini
  analizzerà le immagini per generare le etichette di addestramento; fino ad
  allora nulla viene inviato a Google.
- **Base giuridica:** consenso esplicito e revocabile (art. 6.1.a GDPR),
  separato dal consenso alle *Funzioni AI* del §2.4.
- **Conservazione:** fino a 5 anni dopo la cancellazione dell'account, o finché
  non lo revochi — quello che viene prima, sempre in forma pseudonimizzata.
  E' l'unica categoria che sopravvive deliberatamente al tuo account: proprio
  perché i contributi sono pseudonimizzati prima del caricamento, cancellare
  l'account non li raggiunge.
- **Come revocare, e il limite che devi conoscere (art. 11 GDPR):** lo
  pseudonimo attaccato ai tuoi contributi è calcolato sul tuo dispositivo, a
  partire da una chiave che non lo lascia mai. È questo che rende il dataset
  davvero non collegabile al tuo account — e ha una conseguenza che
  preferiamo dirti invece di nasconderla. *Impostazioni → Privacy → AI Training
  Data* cancella i contributi fatti **da quel dispositivo**, finché i dati
  dell'app sono ancora lì. Se disinstalli l'app, ne cancelli i dati o passi a un
  altro dispositivo, quella chiave non esiste più: né tu né noi possiamo più
  sapere quali contributi fossero tuoi. In quel caso non siamo in grado di
  identificarti all'interno di questo dataset (art. 11 GDPR), e ciò che li
  limita è la conservazione di 5 anni qui sopra. Se hai intenzione di revocare,
  fallo **prima** di disinstallare. I contributi fatti da un altro dispositivo
  vanno revocati da quel dispositivo.

### 2.11 Catalogo: schede pubblicate e schede private

Fluera permette di ricavare da una porzione dei tuoi appunti una **scheda di
studio** e di condividerla. È sempre una tua azione esplicita: senza, nulla di
quanto scrivi lascia il dispositivo per questa via. Esistono due destinazioni,
e la differenza fra le due è tutta qui.

- **Catalogo pubblico** — la scheda diventa visibile a chiunque, indicizzabile
  dai motori di ricerca e raggiungibile da una pagina di condivisione pubblica.
- **Catalogo privato** — la scheda resta tua e raggiunge **solo le persone a cui
  mandi un link**. Non compare in nessuna ricerca, non ha una pagina pubblica, e
  l'anteprima social del link non mostra il contenuto: chi lo riceve in una chat
  di gruppo vede soltanto «qualcuno ti ha condiviso una scheda».

**Cosa viene caricato.** I byte della scheda (la porzione di appunti che hai
selezionato, più l'elenco dei concetti che ne ricaviamo), una **miniatura PNG**
— che è un'immagine della pagina scritta a mano —, il titolo che scrivi tu, il
numero di concetti, la dimensione, un'impronta SHA-256 del contenuto, la
versione dei Termini che accetti e il tuo identificativo di account. **Non**
viene caricato il tuo modello di apprendimento (quanto ricordi, quando ripeti):
quello resta sul dispositivo.

**Perché la miniatura è obbligatoria.** È ciò che chi riceve il link guarda
prima di decidere se installare, ed è l'unica cosa che un moderatore può vedere
se la scheda viene segnalata. Senza, una rimozione sarebbe decisa alla cieca.

**Chi può vederla.**

- **Tu**, sempre.
- **Le persone che aprono il tuo link.** Diventano destinatarie dei dati che la
  scheda contiene: è una comunicazione a terzi, e la decidi tu.
- **Un controllo automatico** al caricamento, che analizza la miniatura e le
  immagini contenute nella scheda per intercettare contenuti illeciti. Gira
  presso Google Cloud (Vertex AI) nell'Unione Europea — vedi §4 e §5.
- **Un moderatore umano**, e **soltanto** se la scheda è stata segnalata. In quel
  caso vede la miniatura, mai i byte della scheda. Non esiste alcun modo di
  aprire una scheda privata che nessuno ha segnalato.

**Il link.** Ha una **scadenza** (predefinita 72 ore, mai oltre 7 giorni) e un
**tetto di persone** (predefinito 25). Puoi revocarlo quando vuoi, e puoi
togliere l'accesso a una singola persona senza toccare le altre. Del link
conserviamo soltanto un'impronta crittografica, mai il testo: per questo non
possiamo mostrartelo di nuovo, e «ricrea il link» è l'unica strada.

**Cosa la revoca NON raggiunge, detto chiaramente.** Chi ha già **installato**
la scheda ne ha una copia sul proprio dispositivo, e quella copia resta. Una
copia consegnata non si richiama — né da te né da noi. Revocare impedisce nuovi
accessi, non cancella ciò che è già stato consegnato.

**Chi ti ha mandato una scheda, e chi l'ha ricevuta.** L'autore vede **quante**
persone hanno aperto il suo link e **quando**, mai chi sono: non gli
restituiamo il loro identificativo. Il destinatario, a sua volta, non riceve
l'identificativo dell'autore.

**Conservazione.** La scheda resta finché non la rimuovi tu o non viene rimossa
dalla moderazione. Quando togli una scheda, i suoi link smettono di funzionare e
i suoi file lasciano il catalogo; cosa resta, e per quanto, è al §6 (la riga
della scheda, una copia riservata dei suoi file, e la prova di una segnalazione
aperta che riguarda i minori). I link scaduti e le
autorizzazioni revocate restano registrati per poter dimostrare chi ha avuto
accesso e quando. Alla
cancellazione dell'account i byte delle schede di cui **sei l'autore** vengono
cancellati dai nostri server insieme al resto; le schede che hai soltanto
ricevuto non vengono toccate, perché appartengono a chi le ha scritte.

**I tuoi diritti su questa funzione.** Puoi in ogni momento revocare un link,
togliere l'accesso a una persona, uscire da una scheda che hai ricevuto,
rimuovere una tua scheda, e segnalare una scheda che hai ricevuto. Le schede di
cui sei autore rientrano nell'export dei tuoi dati (§7).

**La foto del tuo profilo da autore.** Se aggiungi una foto al tuo profilo da
autore nel catalogo, la carichiamo su Supabase, nell'UE (§4), e passa da un
**controllo automatico** come quello delle schede, che gira presso Google Cloud
(Vertex AI) nell'Unione Europea — vedi §4 e §5. Il controllo riceve soltanto
l'immagine, senza il tuo nome né altri dati del profilo. Lo scopo è lo stesso:
impedire che il catalogo mostri contenuti illeciti (§3). Per questo avviene
anche se non hai dato il consenso alle `Funzioni AI`: il consenso riguarda le
funzioni di studio (§2.4), non questo controllo.

- **Finché il controllo non l'ha approvata**, la foto non la mostriamo a
  nessuno tranne te. Dopo l'approvazione è visibile a chiunque apra il tuo
  profilo da autore.
- **Se il controllo non la approva**, la togliamo dal profilo e cancelliamo il
  file. Solo se vi riconosce abusi sessuali su minori ne conserviamo una copia
  riservata, come prova per le autorità.
- **Puoi toglierla o cambiarla quando vuoi**: la foto vecchia smette subito di
  essere mostrata. Se la cambi, il file della foto vecchia viene cancellato
  quando la nuova è approvata. Se la togli, o se la nuova non viene approvata,
  il file della vecchia resta sui nostri server finché non approviamo una tua
  nuova foto o non elimini l'account: non lo mostriamo più, ma chi ne conosce
  già l'indirizzo può ancora aprirlo.

**Il segnale del marketplace.** Quando installi una scheda dal catalogo, l'app
lo dice al nostro server, e gli dice anche se torni a studiarla. Serve a contare
quali schede le persone installano e a quali tornano, e a riconoscere così i
creator le cui schede servono davvero. È acceso per impostazione predefinita e
lo spegni da *Impostazioni → Privacy e telemetria → Segnale del marketplace*.

- **Cosa viaggia:** l'identificativo della scheda installata e, se torni a
  studiarla (un ripasso completato, o una riapertura almeno 20 ore dopo
  l'installazione), il fatto che sei tornato. Viaggia legato al tuo account,
  anche alla sessione anonima che l'app apre se non hai fatto l'accesso. Il
  server aggiunge l'ora dell'installazione e del ritorno.
- **Cosa non viaggia:** il tuo nome, la tua email, il contenuto della scheda e
  dei tuoi appunti, quanto ricordi (quello viaggia solo con le Analytics, §2.3).
- **A cosa serve:** contano solo le installazioni degli account veri, non
  quelle delle sessioni anonime. Contano nel numero di installazioni mostrato
  sulla scheda, nell'ordine del catalogo (le schede popolari, di tendenza, più
  efficaci) e nei conti del creator (le installazioni sul suo profilo e i suoi
  badge). La stessa riga serve per votare: il server accetta il voto su una
  scheda solo da chi l'ha installata.
- **Sul dispositivo** l'app tiene l'elenco delle schede installate, con l'ora,
  per accorgersi del ritorno. Una scheda esce dall'elenco quando torni a
  studiarla o dopo 30 giorni.
- **Chi lo vede:** noi, su Supabase nell'UE (§4), e tu: le tue righe e
  l'interruttore sono nell'esportazione dei tuoi dati. I creator e le altre persone vedono solo i
  totali, mai chi ha installato.
- **Spegnerlo:** l'interruttore vale per il tuo account, su tutti i tuoi
  dispositivi. Il server registra quando l'hai spento, con la versione di
  questa informativa, e da quel momento rifiuta le installazioni e i ritorni
  del tuo account, anche quelli di una versione precedente dell'app che non
  conosce l'interruttore. Spegnerlo cancella dal server tutte le installazioni
  del tuo account, arrivate da qualunque dispositivo, e le misure di quanto
  ricordi di quelle schede (§2.3); il numero di installazioni delle schede e
  i conti dei creator si rifanno senza di loro. Se il dispositivo è offline,
  smette subito di mandare, e lo spegnimento arriva al server da solo alla
  prossima apertura di un canvas. Se l'avevi spento con una versione
  precedente dell'app, che lo teneva solo sul dispositivo, e sul server non
  c'è ancora una tua scelta, la prima volta che l'app legge il tuo account da
  quel dispositivo lo spegne anche sul server.
  Se lo riaccendi, si riparte da zero. «Cancella tutti i miei dati dal cloud»
  fa le stesse cancellazioni senza spegnerlo, e «Cancella l'account» le fa
  prima di cancellare l'account.
- **Se voti con il segnale spento:** il server accetta un voto solo da chi ha
  installato la scheda, quindi l'app registra che l'hai installata, in una
  riga a parte che non conta: niente nel numero di installazioni, nei conti
  dei creator o nell'ordine del catalogo. Se poi riaccendi il segnale, quella
  riga continua a non contare. Da una versione precedente dell'app, con il
  segnale spento, il voto passa solo se quella riga c'è già.
- **Il codice del dispositivo:** le versioni precedenti dell'app mandavano
  anche un codice casuale di 128 bit nato sul dispositivo, senza account. Il
  server non lo accetta più e l'app non lo manda più. Le righe rimaste si
  cancellano da sole 30 giorni dopo l'installazione, o prima se da quel
  dispositivo spegni il segnale o usi una delle due cancellazioni qui sopra;
  poi il dispositivo dimentica il codice.

### 2.12 Estratto di studio per il tuo assistente AI collegato (opt-in, disattivo per impostazione predefinita)

Se attivi «Assistente AI collegato», Fluera pubblica sul nostro server un
**estratto di studio** compatto, così che un assistente AI collegato DA TE
possa leggere il tuo stato di studio tramite il Model Context Protocol.

- **Cosa contiene, e nient'altro:** solo i nomi dei corsi, le date e gli esiti d'esame, la prontezza come conteggi, i titoli dei concetti in scadenza con la loro data, lo stadio, la solidita' in giorni secondo il modello e quante volte sono gia' caduti, i titoli dei concetti che non hai mai studiato, il CONCETTO su cui hai una correzione ancora da ricontrollare con la data del ricontrollo, e — dove disponibili — i topic deboli come fasce, quanti argomenti hanno superato il controllo che precede una prova a libro chiuso e quanti no, e per quelli che non l'hanno superato il titolo e il MOTIVO che manca: poche domande impegnative, una sola sessione, sessioni troppo ravvicinate, manca il ritrovamento dopo una pausa, troppi errori recenti, ricordo raffreddato, competenza ancora sotto soglia, oppure una risposta che ti sembrava giusta e non lo era, ancora da rivedere. Quel motivo è un'etichetta tecnica scelta da Fluera fra otto possibili — mai una tua frase.
- **Cosa non contiene mai:** le tue note, la calligrafia, il testo OCR, le immagini e il contenuto del diario errori — la frase che avevi scritto, la correzione e la critica — non sono inclusi: del diario esce solo il concetto a cui appartiene e la data del ricontrollo. L'interruttore «Solo conteggi» (Impostazioni → Funzioni cognitive) rimuove anche i titoli.
- **Dove è conservato:** su Supabase nella regione UE `eu-north-1`, una riga per corso, sovrascritta sul posto. Rientra nell'export dei tuoi dati (§7).
- **Per quanto:** solo finché tieni attiva la funzione. La revoca di questo consenso cancella l'estratto conservato; cancellare un corso o una tela cancella la sua riga; eliminare l'account cancella tutto.
- **Chi può leggerlo:** solo un assistente in possesso di un token personale del connettore, che crei nell'app e puoi revocare in ogni momento. La revoca di questo consenso impedisce inoltre a ogni token di funzionare.
- **Base giuridica:** consenso, art. 6(1)(a), revocabile in ogni momento da Impostazioni → Privacy.

L'assistente collegato lo scegli e lo autorizzi tu; il suo fornitore tratta
ciò che legge secondo i propri termini (vedi §4, «Assistenti che colleghi
tu»). Fluera non invia il tuo estratto ad alcun fornitore AI di propria
iniziativa.

### 2.13 Visitatori del sito e del catalogo web

Questa sezione riguarda chi visita **fluera.dev** o **share.fluera.dev** con un
browser, anche senza un account Fluera.

- **Log tecnici dei fornitori di hosting.** fluera.dev è servito da GitHub
  (GitHub Pages), share.fluera.dev da Deno (Deno Deploy). Come ogni server web,
  registrano per ogni richiesta l'indirizzo IP, l'ora, la pagina chiesta e
  l'identificativo del browser, per far funzionare e proteggere il servizio. Li
  conservano i fornitori secondo le proprie regole (§4); Fluera non li usa per
  identificarti né per profilarti.
- **Nessun cookie nostro, nessuno strumento di analisi.** Le pagine non
  impostano cookie propri e non caricano strumenti di analisi o di
  tracciamento. fluera.dev ricorda nel tuo browser soltanto la scelta del tema
  chiaro o scuro e la chiusura dell'avviso sulla lingua: restano sul tuo
  dispositivo e non ci vengono inviate.
- **Immagini del catalogo.** Le anteprime delle schede sono servite da
  Supabase attraverso la rete di Cloudflare, che può impostare il cookie
  tecnico `__cf_bm` (protezione dai bot, durata 30 minuti). È un cookie tecnico
  del fornitore, necessario al servizio e non usato per profilarti.
- **Link di invito.** Quando qualcuno apre un link di invito di un autore
  (share.fluera.dev/i/…), contiamo il clic per quel codice, con la piattaforma
  (per esempio «Android») e l'ora: nessun dato di chi ha cliccato.
- **Modulo di segnalazione** (share.fluera.dev/report). Se segnali un
  contenuto trattiamo ciò che scrivi nel modulo — il contenuto segnalato, il
  motivo, la descrizione, la dichiarazione di buona fede e, se li dai, nome ed
  email (necessari per le segnalazioni sul diritto d'autore, facoltativi per le
  altre) — per gestire la segnalazione e risponderti, come chiede l'art. 16 del
  Regolamento UE 2022/2065 («DSA»). Per fermare gli invii automatici, il
  numero di invii recenti per indirizzo IP resta solo nella memoria del server,
  per 10 minuti.
- **Basi giuridiche:** legittimo interesse al funzionamento e alla sicurezza
  del servizio per i log, i clic e la protezione dagli abusi (art. 6.1.f
  GDPR); obbligo legale per le segnalazioni (art. 6.1.c GDPR, DSA).
- **Conservazione:** i log restano presso i fornitori per il tempo indicato
  dalle loro regole; le segnalazioni come le decisioni di moderazione (§6).

### 2.14 Fludomi, il browser integrato

Fludomi apre le pagine web **direttamente dal tuo dispositivo**: i nostri server non vedono le
pagine che visiti, né le ricerche che fai.

- **I siti che visiti** ricevono ciò che riceve qualunque sito da un browser: indirizzo IP, il
  tipo di browser (in forma ridotta: niente modello del dispositivo), la lingua, i cookie che quel
  sito ha impostato. Sono titolari autonomi dei dati che raccolgono, secondo le loro informative.
- **Quando scrivi sulla pagina con la penna**, il sito non riceve i tuoi tratti: riceve solo i
  tocchi che Fludomi gli passa (un clic, un controllo da trascinare, un riquadro di un altro sito
  incorporato nella pagina). Non riceve nemmeno dove passa la penna sospesa. Su iPad restano due
  limiti: il sito può ancora sapere sopra quale elemento della pagina si trova la Pencil sospesa
  (lo stile «:hover»), e un riquadro che la pagina riempie da sé, senza caricarlo da un indirizzo,
  può ancora ricevere la Pencil, compreso l'inizio dei tratti.
- **Il motore di ricerca** che scegli nelle impostazioni (predefinito: DuckDuckGo) riceve ciò che
  cerchi e il tuo indirizzo IP. Anche «Cerca in Fludomi» manda al motore il testo che hai
  selezionato nella nota o nel PDF.
- **Google Lens**, solo quando lo usi tu, riceve l'immagine che scegli (un ritaglio del PDF,
  un'immagine della nota o della pagina) e il tuo indirizzo IP. Lens gira in uno spazio separato:
  lì resta solo il consenso di Google, mai l'accesso al tuo account Google della navigazione.
- **Quando un sito ti manda alla pagina di accesso di Google** e sei entrato in Fluera con Google,
  Fludomi apre quella pagina con l'indirizzo email del tuo account Google già scritto, così non
  devi digitarlo. Lo riceve solo Google, sulla sua pagina, e solo se in Fludomi non hai già fatto
  l'accesso a un account Google; mai nelle schede private. Su Windows e Linux non succede.
- **La protezione dai siti pericolosi** controlla gli indirizzi prima di aprirli. Su Android è il
  servizio Safe Browsing di Google: al servizio arrivano solo frammenti cifrati degli indirizzi.
  Su iPhone, iPad e Mac è l'avviso di sito fraudolento di Apple. È attiva di fabbrica e si spegne
  nelle impostazioni di Fludomi («Navigazione sicura»).
- **Su Windows e Linux la protezione dai siti pericolosi non c'è**: Fludomi non controlla gli
  indirizzi presso un servizio di siti pericolosi. Su Windows quello del sistema (Microsoft
  SmartScreen) riceverebbe l'indirizzo intero di ogni pagina, e lo teniamo spento; su Linux non
  ce n'è uno.
- **L'avviso dei siti sosia**, su tutti i dispositivi: se l'indirizzo di una pagina imita quello di
  un sito noto (per esempio «paypa1.com», o lettere di un altro alfabeto che sembrano quelle di
  «paypal.com»), Fludomi ferma la pagina e mostra un avviso al suo posto. Il controllo si fa sul
  dispositivo, con elenchi che sono dentro l'app, e non manda niente a nessuno.
- **La scrittura a mano** nella barra si riconosce sul dispositivo. Il modello della lingua si
  scarica una volta dai server di Google.

**Cosa resta sul dispositivo.** Restano nel database cifrato del tuo account (§2.2):
- la cronologia, cancellata in automatico dopo il periodo che scegli (1 giorno, 1 settimana, 1 mese
  o 3 mesi, di fabbrica) senza visite; si può anche spegnere;
- i preferiti, le schede aperte;
- le icone dei siti visitati, che si cancellano con la cronologia;
- le evidenziature, le pieghe, le fonti e la copia di testo delle pagine che pieghi;
- le preferenze per sito.

I cookie e i dati che i siti salvano (accessi, preferenze) stanno nello spazio del browser
dedicato al tuo account:
- non entrano nei backup di Google o di iCloud;
- si cancellano con «Cancella dati di navigazione»;
- si cancellano quando esci dall'account o lo elimini;
- si cancellano per un sito solo con «Dimentica questo sito»;
- se attivi «Cancella tutto alla chiusura», si cancellano ogni volta che chiudi Fludomi o Fluera,
  insieme alla cronologia e alle schede aperte.

Se elimini l'account, anche il suo database locale viene cancellato dal dispositivo.

**Schede private.** Non salvano cronologia, schede o pieghe, e su Android la tastiera non impara
ciò che vi scrivi. I loro cookie si cancellano alla chiusura, o al primo avvio successivo se l'app è stata
chiusa di colpo. Si chiudono da sole dopo 15 minuti con Fluera in secondo piano. Il sistema non conserva immagini della scheda nell'elenco delle app recenti.

**Protezioni attive per impostazione predefinita:**
- blocchiamo i servizi di tracciamento più diffusi, con una lista scritta da noi;
- niente cookie di terze parti;
- i banner dei cookie vengono rifiutati, non accettati, quando non hai ancora risposto;
- ogni sito riceve il segnale Global Privacy Control (non vendere né condividere i miei dati);
- dagli indirizzi togliamo i parametri che servono a seguirti (per esempio `utm_`, `fbclid`,
  `gclid`);
- apriamo i link in https quando il sito lo offre; un sito senza https si apre solo dopo un
  avviso, e su Android nel browser del telefono.

Se attivi la sincronizzazione, fra i tuoi dispositivi viaggiano le pieghe, la cronologia, i
preferiti, la grandezza del testo e i blocchi di fotocamera e microfono scelti per ogni sito, e le
schede aperte su ciascun dispositivo (con il suo nome e l'icona dei loro siti). Sono cifrati da un capo all'altro con la
chiave delle pieghe (§2.5): il server vede quante voci ci sono, di che tipo e quando cambiano, mai
gli indirizzi o i titoli. Le schede private, i cookie, gli accessi ai siti e i permessi concessi a
un sito non viaggiano. In «Cosa viaggia» puoi fermare uno per uno la cronologia, i preferiti, le preferenze dei siti e le schede aperte. La scelta vale per tutti i tuoi dispositivi: il server non accetta più quel tipo e ne cancella le copie, mentre sui dispositivi resta tutto, tranne l'elenco delle schede degli altri dispositivi. «Cancella dati di navigazione» li cancella anche dal server e, alla loro
prossima sincronizzazione, dagli altri tuoi dispositivi; «Cancella tutto alla chiusura» cancella
solo sul dispositivo dove è attivo. Se spegni la sincronizzazione, le loro copie lasciano il
server; sui tuoi dispositivi restano.

### 2.15 Segnalazioni dei contenuti scritti dall'IA

Accanto a un contenuto scritto dall'IA (le domande del Socratico e dell'Esame, i messaggi dell'IA nella chat con gli appunti) c'è una bandierina per segnalarlo. La segnalazione parte solo se la premi e confermi, e parte anche se hai tolto il consenso Analytics: è una tua richiesta, non telemetria. Con la segnalazione mandiamo:
- il testo della domanda o del messaggio segnalato, la sua lingua e la funzione che l'ha scritto;
- il motivo, se lo scrivi;
- la versione dell'app, l'identificativo del tuo account, l'ora e un codice casuale della segnalazione, che serve a non registrarla due volte se l'invio si ripete.

Non mandiamo le tue risposte, i tuoi messaggi né altro dei tuoi appunti. Senza rete la segnalazione resta sul dispositivo, nel database cifrato dell'app, e parte appena possibile; senza un account non parte. Le segnalazioni servono a correggere i contenuti sbagliati o offensivi e a migliorare quelli che non suonano naturali. Le leggiamo noi, nessun altro utente le vede, e ne accettiamo al massimo 20 al giorno per account. Le trovi nell'esportazione dei tuoi dati.

## 3. Finalità e basi giuridiche

- **Erogazione del servizio** (account, canvas locali): esecuzione del contratto (art. 6.1.b GDPR)
- **Funzioni AI**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Cloud Sync**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Analytics di prodotto**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Report dei crash**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Dataset di riconoscimento della scrittura** (§2.10): consenso esplicito e revocabile (art. 6.1.a GDPR), separato dalle Funzioni AI
- **Catalogo e condivisione delle schede** (§2.11): esecuzione del contratto (art. 6.1.b GDPR), su tua richiesta esplicita — nessuna scheda viene caricata senza che tu lo chieda
- **Moderazione dei contenuti condivisi, gestione delle segnalazioni e prevenzione degli abusi** (§2.11): obbligo legale (art. 6.1.c GDPR, Regolamento UE 2022/2065 «DSA») e legittimo interesse (art. 6.1.f GDPR) a impedire che il servizio veicoli contenuti illeciti. Rientra qui anche la registrazione della versione dei Termini che accetti e della tua dichiarazione sui diritti relativi al contenuto, che è ciò che rende dimostrabile a quali condizioni hai condiviso
- **Segnalazioni dei contenuti scritti dall'IA** (§2.15): legittimo interesse (art. 6.1.f GDPR) a correggere i contenuti generati dall'IA che ci segnali, su tua richiesta esplicita; il limite di 20 al giorno serve a prevenire gli abusi
- **Gestione abbonamenti**: esecuzione del contratto (art. 6.1.b GDPR)
- **Segnale del marketplace** (§2.11): legittimo interesse (art. 6.1.f GDPR) a misurare in modo equo quali schede del catalogo vengono installate e studiate davvero, per riconoscere i creator, con l'identificativo del tuo account e senza contenuti. Puoi opporti (art. 21 GDPR) in ogni momento spegnendo il segnale in *Impostazioni → Privacy e telemetria*: l'opposizione vale per il tuo account su tutti i tuoi dispositivi, il server la registra con l'ora e la versione di questa informativa, e cancella anche le installazioni del tuo account
- **Sicurezza e prevenzione abusi** (enforcement quote AI): legittimo interesse (art. 6.1.f GDPR)
- **Memoria cognitiva sul dispositivo** (indicizzazione locale per titoli, Ghost Map, ripetizione): legittimo interesse (art. 6.1.f GDPR) all'erogazione delle funzioni di studio, con elaborazione sul dispositivo e diritto di opposizione (art. 21 GDPR) esercitabile in ogni momento tramite l'opt-out in *Impostazioni → Privacy*. La copia che viaggia fra i tuoi dispositivi segue la base della voce qui sotto
- **Sincronizzazione fra i tuoi dispositivi** (§2.5): esecuzione del contratto (art. 6.1.b GDPR). È il servizio del piano Cloud che acquisti, e parte solo quando accendi tu l'interruttore. Il server registra quando l'hai acceso e quale versione dell'informativa avevi davanti; puoi spegnerlo quando vuoi

## 4. Destinatari dei dati

I responsabili del trattamento, vincolati da contratto ex art. 28 GDPR, sono:

- **Supabase Inc.** — database, autenticazione, storage, telemetria, Edge Functions (regione UE `eu-north-1`, Stoccolma) — https://supabase.com/privacy
- **Google Cloud (Google Ireland Ltd.)** — Vertex AI (Gemini), elaborazione nell'UE (regioni europe-west4 Paesi Bassi ed europe-west1 Belgio, o endpoint multi-regione UE) — https://cloud.google.com/terms/data-processing-addendum
- **RevenueCat Inc.** — abbonamenti — https://www.revenuecat.com/privacy
- **Functional Software Inc. (Sentry)** — crash reporting — https://sentry.io/privacy/
- **Deno Land Inc.** — hosting di share.fluera.dev (catalogo web, pagine delle schede, modulo di segnalazione, connettore dell'assistente): indirizzo IP e dati delle richieste di chi visita, e il testo delle segnalazioni, che il modulo inoltra a Supabase (§2.13) — https://docs.deno.com/deploy/privacy_policy/

**Fornitori che trattano come titolari autonomi.** fluera.dev è ospitato su GitHub Pages: GitHub Inc. registra i dati tecnici delle visite (indirizzo IP, ora, pagina richiesta) per la sicurezza del proprio servizio, come titolare autonomo e secondo la propria informativa — https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement. Lo stesso vale per i caratteri tipografici che share.fluera.dev carica da fluera.dev (§2.13).

**Apple e Google, per l'accesso e gli acquisti in-app.** Se usi Sign in with Apple o Sign in with Google, o ti abboni tramite App Store o Google Play, Apple e Google non sono responsabili del trattamento dei dati di Fluera: agiscono come titolari autonomi per i dati delle loro piattaforme, e quel rapporto è regolato dai termini e dalle informative delle loro piattaforme — https://www.apple.com/legal/privacy/ e https://policies.google.com/privacy. Da loro riceviamo solo quanto descritto ai §2.1 e §2.7.

**Allarmi interni.** Per gli avvisi di servizio — i costi e le segnalazioni sulla sicurezza dei minori — usiamo Discord. I messaggi non contengono dati personali: né identificativi di account, né contenuti, né chi ha segnalato o chi è stato segnalato; solo il tipo di avviso, la fascia di abbonamento, gli importi e il numero interno dell'avviso o della segnalazione.

**Altri utenti.** Quando pubblichi una scheda nel catalogo, o ne condividi una privata con un link (§2.11), i dati contenuti in quella scheda raggiungono le persone a cui hai scelto di darla — chiunque, nel caso del catalogo pubblico; solo chi apre il tuo link, nel caso privato. Non sono responsabili del trattamento per nostro conto: sono destinatari che decidi tu, e la comunicazione avviene solo per tua azione.

**Assistenti che colleghi tu.** Se attivi l'estratto di studio (§2.12), l'assistente AI che colleghi lo legge tramite il tuo token personale del connettore. Il suo fornitore (per esempio Anthropic o OpenAI) è un destinatario che scegli e autorizzi tu, non un responsabile per nostro conto; ciò che fa dei dati letti è regolato dai suoi termini, e la comunicazione avviene solo per tua azione di collegamento.

**Destinatari che scegli tu nel browser.** Quando usi Fludomi, alcuni dati arrivano a destinatari
che non trattano dati per nostro conto: ricevono i dati per tua azione e ne sono titolari
autonomi, secondo le loro informative (§2.14). Sono:
- i siti che visiti;
- il motore di ricerca che scegli;
- Google per Lens, quando lo usi;
- Google, quando un sito ti manda alla sua pagina di accesso: l'indirizzo email del tuo account
  Google con cui sei entrato in Fluera;
- il servizio di protezione dai siti pericolosi del sistema: Google Safe Browsing su Android,
  Apple su iPhone, iPad e Mac (su Windows e Linux nessuno).

A parte questo, non vendiamo, non cediamo e non comunichiamo i dati personali a parti diverse da quelle indicate. Nessuna profilazione pubblicitaria viene effettuata.

Le condizioni di trattamento ex art. 28 di ciascun responsabile si applicano a noi, o tramite un DPA sottoscritto separatamente o tramite il DPA richiamato per riferimento nei loro termini di servizio. Le copie controfirmate sono conservate internamente quando il responsabile ne emette una; lo stato aggiornato per ciascun responsabile è disponibile su richiesta scritta a `lorenco@fluera.dev`. L'elenco aggiornato dei sub-processor di ciascun responsabile è consultabile ai link delle rispettive privacy policy.

## 5. Trasferimenti extra-UE

Alcuni responsabili — Sentry, RevenueCat, Deno — hanno sede negli Stati Uniti. Il trasferimento verso di essi avviene sulla base delle Clausole Contrattuali Standard approvate dalla Commissione Europea (art. 46 GDPR) e, ove applicabile, dell'adesione del fornitore al EU-US Data Privacy Framework.

Apple e Google, per l'accesso e gli acquisti in-app, sono titolari autonomi (§4): ciò che ricevono, compreso un eventuale trasferimento fuori dall'UE, è regolato dai loro termini e dalle loro informative.

**L'inferenza AI non lascia l'UE.** I contenuti del canvas inviati alle funzioni AI sono elaborati da Google Vertex AI esclusivamente nell'Unione Europea (regioni europe-west4 Paesi Bassi ed europe-west1 Belgio, o endpoint multi-regione UE di Vertex AI, che resta negli Stati membri dell'UE) e non vengono trasferiti negli Stati Uniti.

Supabase consente di scegliere la regione del database: utilizziamo la regione `eu-north-1` (Stoccolma) all'interno dell'area SEE.

## 6. Periodi di conservazione

- **Account e contenuti utente:** per tutta la durata del rapporto contrattuale e fino alla richiesta di cancellazione
- **Dati della sincronizzazione fra i tuoi dispositivi (§2.5):** restano nel cloud finché non li cancelli tu. Spegnere l'interruttore o togliere il consenso Cloud Sync non cancellano niente, tranne le copie dei dati di Fludomi (cronologia, preferiti, preferenze dei siti, schede), che lasciano il server allo spegnimento, o quando ne fermi il tipo in «Cosa viaggia». Se il piano Cloud si chiude (scadenza, rimborso, cambio di piano o revoca), il server registra quando e perché, e per 6 mesi da quel momento resta tutto e lo puoi scaricare su ogni tuo dispositivo. Dopo i 6 mesi possiamo togliere dal cloud l'audio delle lezioni, i PDF e le foto che superano i 500 MB del piano Free, cominciando dai più vecchi; l'inchiostro dei canvas resta, e non togliamo niente da un canvas condiviso con un altro account né dalle schede del catalogo privato. Se il Cloud torna attivo prima, la chiusura si annulla. Un canvas messo nel **Cestino** è nel Cestino su ogni tuo dispositivo e resta nel cloud com'era; i 30 giorni del Cestino contano dall'ora in cui ci è entrato, la stessa su tutti; se ci scrivi ancora da un altro dispositivo, ne esce. Una risposta d'esame scartata e una foto tolta da un canvas lasciano il cloud appena il dispositivo è in rete. Di una cartella eliminata resta nel cloud solo il suo identificativo con l'ora, perché non torni; i canvas che conteneva restano. «Elimina definitivamente» su un canvas (nel Cestino) lo toglie dal cloud insieme a ciò che gli appartiene: tratti, foto, PDF, lezioni, carte del ripasso con le risposte, concetti, titoli, studio, testo riconosciuto e l'inchiostro dei suoi esami. «Cancella tutti i miei dati dal cloud» (*Impostazioni → Privacy e telemetria*) toglie tutti i canvas con le stesse cose, le lezioni, l'inchiostro degli esami, le impostazioni che viaggiano e le cartelle, e spegne l'interruttore su tutti i tuoi dispositivi; resta solo la registrazione dell'interruttore (quando l'hai acceso, con la versione di questa informativa, e quando l'hai spento), che è la prova del consenso. «Cancella l'account» (*Impostazioni → Profilo e account*) cancella anche quella. Le copie sui tuoi dispositivi restano finché non le elimini lì
- **Eventi di telemetria:** 180 giorni
- **Segnalazioni dei contenuti scritti dall'IA (§2.15):** 12 mesi, poi le cancella un job pianificato sui nostri server; prima, se cancelli l'account
- **Eventi dei report di crash:** 30 giorni in Sentry. Le copie di backup cifrate vengono eliminate entro 90 giorni dalla loro creazione
- **Log di utilizzo AI (`ai_usage_events`):** 24 mesi
- **Misure di quanto ricordi delle schede del catalogo (§2.3):** finché non togli il consenso Analytics, non spegni il Segnale del marketplace, non usi «Cancella tutti i miei dati dal cloud» o non cancelli l'account
- **Segnale del marketplace (§2.11):** sul server, le installazioni del tuo account finché non spegni il segnale, non usi «Cancella tutti i miei dati dal cloud» o non cancelli l'account (la riga scritta per un voto con il segnale spento, che non conta, resta finché non usi una delle due cancellazioni); la registrazione dell'interruttore (quando l'hai spento o riacceso, con la versione di questa informativa) finché non cancelli l'account, perché è la prova della tua scelta; le righe del vecchio codice del dispositivo, 30 giorni dall'installazione. Sul dispositivo, ogni scheda esce dall'elenco quando torni a studiarla o dopo 30 giorni, e resta l'ultima risposta del server sull'interruttore, per quando sei offline
- **Dati di abbonamento:** 10 anni a fini fiscali (art. 2220 c.c.). Presso RevenueCat (§4) i dati del subscriber e degli acquisti non vengono cancellati alla scadenza dell'abbonamento: vengono rimossi quando cancelliamo il customer, e dai loro sistemi a valle entro 30 giorni. Attenzione: cancellare il customer **non disdice** l'abbonamento con Apple o Google — quello puoi farlo solo tu dal tuo account dello store, e finché non lo fai un ripristino degli acquisti può ricreare il record
- **Schede del catalogo (§2.11):** finché non le rimuovi o non vengono rimosse dalla moderazione. Quando togli una tua scheda **privata**, i suoi link e le sue autorizzazioni vengono revocati subito e poi un processo programmato sui nostri server ne cancella i file; la riga della scheda resta, senza titolo né contenuto, perché ci sono appesi i registri dei suoi link, delle autorizzazioni e delle eventuali segnalazioni. Quando togli una scheda **pubblica**, smette subito di essere mostrata e i suoi file vengono cancellati dal catalogo pubblico; la sua voce (titolo, descrizione e gli altri dati che hai scritto, l'impronta del contenuto e l'identificativo del tuo account) resta sui nostri server finché non cancelli l'account. Una copia dei suoi file va in un'area riservata che nessun utente può raggiungere, perché una segnalazione o un ricorso si possano ancora gestire; quella copia si cancella 1 anno dopo che hai tolto la scheda, o dopo l'ultima decisione di moderazione su di essa se è venuta dopo. Una scheda rimossa dalla moderazione tiene la sua voce fino alla cancellazione dell'account, e una copia dei suoi file nella stessa area riservata per 1 anno dall'ultima decisione del moderatore, poi la copia si cancella. Una copia resta oltre l'anno solo finché serve ancora: una segnalazione aperta che riguarda la tutela dei minori, un ricorso aperto, o un obbligo di legge (una notifica di rimozione non ancora chiusa, o un blocco legale). **L'eccezione per i minori:** se su una tua scheda privata è aperta una segnalazione che riguarda la tutela dei minori, toglierla ferma subito i link e le autorizzazioni, ma i file e il titolo restano dove sono finché un moderatore non ha deciso, perché sono la prova che deve esaminare (art. 17.3.e GDPR); dopo la decisione i file se ne vanno come sopra, e il titolo resta fino alla cancellazione dell'account. I **link** scaduti o revocati e le **autorizzazioni** revocate restano registrati (senza il testo del link, di cui conserviamo solo l'impronta) per poter dimostrare chi ha avuto accesso e quando. Alla cancellazione dell'account, le schede di cui sei **autore** vengono cancellate insieme ai loro file, comprese le copie dell'area riservata; le copie già installate da altre persone restano sui loro dispositivi e non sono raggiungibili né da te né da noi
- **Decisioni di moderazione e segnalazioni:** conservate per la durata necessaria a gestire un eventuale reclamo o ricorso, e comunque per rispondere agli obblighi del DSA
- **Audit trail del consenso:** fino alla revoca + 3 anni (art. 7.1 GDPR)
- **Dataset di riconoscimento della scrittura (§2.10):** fino a 5 anni dopo la cancellazione dell'account, o finché non lo revochi da *Impostazioni → Privacy → Migliorare il riconoscimento* — quello che viene prima, sempre in forma pseudonimizzata. La revoca raggiunge solo i contributi fatti da un dispositivo i cui dati dell'app sono ancora presenti; dopo una disinstallazione ciò che li limita è la finestra di 5 anni (vedi §2.10, art. 11 GDPR)
- **Cronologia di Fludomi (sul dispositivo e, con la sincronizzazione, cifrata nel cloud, §2.14):** per il periodo che scegli senza nuove visite — 1 giorno, 1 settimana, 1 mese o 3 mesi (di fabbrica); una pagina tolta lascia nel cloud un segno cifrato per 30 giorni; cookie e dati dei siti finché non li cancelli, esci dall'account o lo elimini
- **Indice di memoria cognitiva (sul dispositivo):** conservato localmente finché la funzione resta attiva; cancellato immediatamente alla disattivazione (opt-out) o su richiesta di cancellazione dei dati. La sua copia nel cloud, se hai acceso la sincronizzazione fra i tuoi dispositivi, si cancella anch'essa alla disattivazione (§2.9)
- **Sessioni anonime:** quando usi Fluera senza account permanente, i dati sono associati a un identificatore device temporaneo. Se non converti la sessione in un account permanente entro **24 ore di inattività** dall'apertura di una nuova sessione su un altro device, l'account anonimo e tutti i dati associati vengono cancellati automaticamente tramite un job pianificato sui nostri server.

## 7. Diritti dell'utente

L'utente può esercitare i seguenti diritti ai sensi degli artt. 15-22 GDPR:

- **Accesso** (art. 15): conferma del trattamento e copia dei dati
- **Rettifica** (art. 16): correzione di dati inesatti
- **Cancellazione** (art. 17, "diritto all'oblio")
- **Limitazione** (art. 18)
- **Portabilità** (art. 20): export in JSON (funzione in-app)
- **Opposizione** (art. 21)
- **Revoca del consenso** (art. 7.3): immediata via *Impostazioni → Privacy*

## 8. Come esercitare i diritti

- Toggle in *Impostazioni → Privacy* dell'app
- Funzione *Esporta i miei dati* (art. 20 GDPR)
- Per una copia che includa i contenuti dei canvas (art. 15): usare *Esporta* su ciascun canvas — il formato `.fluera` conserva tutto. L'esportazione dati dell'app copre i dati lato server e i metadati dei canvas; i corpi dei tratti sono un formato binario proprietario e sono elencati sotto `excluded` nel suo `manifest.json`, con questa stessa indicazione.
- *Cancella l'account* in *Impostazioni → Profilo e account*: cancella l'account e i suoi dati nel cloud (§6)
- Scrivere a lorenco@fluera.dev per rettifiche manuali, o se la cancellazione dell'account dall'app non riesce

Il Titolare risponde entro 30 giorni dalla ricezione (art. 12.3 GDPR), salvo proroga motivata.

## 9. Reclami all'autorità di controllo

Qualora l'utente ritenga che il trattamento violi il GDPR, ha diritto di proporre reclamo:

- **Garante per la protezione dei dati personali**
- Piazza Venezia 11, 00187 Roma
- https://www.garanteprivacy.it

### 9.1 Notifica di violazione dei dati

In caso di violazione dei dati personali, Fluera notificherà l'autorità di controllo competente (il *Garante per la protezione dei dati personali*, o l'autorità locale dell'utente) senza ingiustificato ritardo e, ove possibile, entro **72 ore** dal momento in cui ne è venuta a conoscenza, ai sensi dell'art. 33 GDPR. Qualora la violazione possa comportare un rischio elevato per i diritti e le libertà dell'utente, informeremo anche gli utenti interessati senza ingiustificato ritardo e con linguaggio chiaro, ai sensi dell'art. 34 GDPR. Manteniamo un registro interno delle violazioni come richiesto dall'art. 33(5).

## 10. Utenti minorenni

**Fluera non è destinata a utenti di età inferiore ai 16 anni. Utilizzando il Servizio dichiari di avere almeno 16 anni.**

Per età 16-18 il trattamento è consentito ai sensi dell'art. 2-quinquies D.Lgs. 196/2003, eventualmente subordinato al consenso di chi esercita la responsabilità genitoriale ove richiesto dalla legge nazionale applicabile. Per età inferiori a 16 anni la creazione di account non è consentita.

Se veniamo a conoscenza di dati raccolti da un minore di 16 anni, sospendiamo l'account e cancelliamo i dati associati entro 30 giorni. Segnalazioni a `support@fluera.dev` o `lorenco@fluera.dev`.

## 11. Modifiche alla presente informativa

Può essere aggiornata per riflettere evoluzioni del servizio o modifiche normative. In caso di modifiche sostanziali l'utente viene informato via notifica in-app e, se registrato, via email. Gli utenti dovranno riconfermare il consenso alle categorie interessate.

## 12. Diritti per giurisdizioni specifiche (non-UE)

Per utenti residenti fuori dall'Unione Europea, oltre ai diritti GDPR-equivalenti descritti nelle sezioni 7-8, si applicano le seguenti tutele locali. Per esercitarli, scrivi a `lorenco@fluera.dev` indicando il paese di residenza — risposta entro 30 giorni.

### 12.1 Stati Uniti — California (CCPA/CPRA) e altri stati

Residenti della **California** beneficiano dei diritti del *California Consumer Privacy Act* (CCPA, modificato dal CPRA 2023):

- **Right to Know**: ottenere conferma del trattamento e copia dei dati raccolti negli ultimi 12 mesi.
- **Right to Delete**: richiedere la cancellazione dei dati personali.
- **Right to Correct**: chiedere la correzione di dati inaccurati.
- **Right to Limit Use of Sensitive Personal Information**: Fluera **non raccoglie SPI** (no geolocalizzazione precisa, no biometrici, no dati sanitari) — diritto non applicabile in pratica.
- **Right to Non-Discrimination**: l'esercizio dei diritti non comporta degradazione del servizio.
- **Right to Opt-Out of Sale/Share**: vedi sotto.

**Do Not Sell or Share Notice**: Fluera **non vende, condivide o cede** i tuoi dati personali per advertising cross-context behavioral o qualsiasi altro scopo commerciale. Onoriamo i segnali *Global Privacy Control* (GPC) ove tecnicamente rilevanti.

**Categorie di informazioni raccolte** (Cal. Civ. Code §1798.130): identificatori (user_id pseudonimo; il codice casuale del dispositivo che il segnale del marketplace usava prima, §2.11), informazioni commerciali (subscription tier), attività internet (telemetria di prodotto se consentita), informazioni inferite (preferenze d'uso). Nessun dato sensibile ai sensi CCPA.

Diritti analoghi si applicano in **Virginia (CDPA)**, **Colorado (CPA)**, **Connecticut (CTDPA)**, **Utah (UCPA)** e nelle nuove leggi 2024-2025 (Texas, Oregon, Delaware, Iowa, New Hampshire, Montana). Per esercitarli usa lo stesso canale `lorenco@fluera.dev`.

### 12.2 Brasile (LGPD)

Residenti in Brasile sono protetti dalla *Lei Geral de Proteção de Dados* (Lei 13.709/2018). Diritti del **Titular** ex Art. 18 LGPD:

- Conferma dell'esistenza del trattamento
- Accesso ai dati
- Correzione di dati incompleti, inaccurati o non aggiornati
- Anonimizzazione, blocco o eliminazione di dati eccessivi
- Portabilità dei dati a un altro fornitore di servizi
- Eliminazione dei dati trattati con consenso
- Informazioni sui soggetti pubblici e privati con cui i dati sono stati condivisi
- Informazioni sulla possibilità di non fornire il consenso e relative conseguenze
- Revoca del consenso

Autorità di controllo: **ANPD — Autoridade Nacional de Proteção de Dados** (<https://www.gov.br/anpd>). I trasferimenti internazionali di dati avvengono verso paesi con livello di protezione adeguato o sulla base di clausole contrattuali standard.

### 12.3 Giappone (APPI)

Residenti in Giappone sono protetti dall'*Act on the Protection of Personal Information* (APPI, modificato 2022).

**Cross-border transfer consent**: quando attivi `Funzioni AI`, i dati sono elaborati da Google Ireland Ltd. (Vertex AI) nell'Unione Europea e non vengono trasferiti negli Stati Uniti (§5); quando attivi `Report dei crash`, i dati sono trasferiti a Functional Software Inc./Sentry (Stati Uniti). Confermando i consensi nella consent screen autorizzi esplicitamente tali trasferimenti ai sensi dell'Art. 28 APPI. Puoi revocare il consenso in qualsiasi momento da Impostazioni → Privacy.

**Diritti**: disclosure dei dati conservati, correzione, addizione, cancellazione, cessazione dell'uso, cessazione del trasferimento a terzi. Contatto: `lorenco@fluera.dev`.

### 12.4 Corea del Sud (PIPA)

Residenti in Corea del Sud sono protetti dal *Personal Information Protection Act* (PIPA).

**Personal Information Processing Notice**: Fluera tratta i tuoi dati personali per le finalità descritte nella sezione 3, conservandoli per i periodi indicati nella sezione 6. Ricevono dati tre responsabili con sede negli Stati Uniti (§5): Sentry, solo dopo il tuo consenso esplicito ai `Report dei crash` nella consent screen; RevenueCat, dall'avvio dell'app su iOS, macOS e Android, senza un consenso separato, perché gestisce l'abbonamento (§2.7; esecuzione del contratto, §3): riceve l'identificativo pseudonimo del tuo account, o un identificativo anonimo se non hai fatto l'accesso, i dati dell'abbonamento e i dati tecnici della connessione (come l'indirizzo IP), mai i contenuti; Deno, quando usi share.fluera.dev (§2.13). Le funzioni AI sono elaborate da Vertex AI nell'UE e non vengono trasferite negli USA.

**Diritti**: accesso, correzione, cancellazione, sospensione del trattamento. Per esercitarli: `lorenco@fluera.dev`. In caso di reclamo, l'autorità competente è la **Personal Information Protection Commission (PIPC)** — <https://www.pipc.go.kr>.

**Chief Privacy Officer (CPO)**: Lorenco Shametaj (founder, Fluera). Contatto operativo: `lorenco@fluera.dev`. Designato ai sensi dell'Art. 31 PIPA che richiede la nomina di un CPO per ogni controller di dati personali, indipendentemente dal volume di utenti trattati. In caso di reclami non risolti tramite il canale CPO, gli utenti coreani possono contattare direttamente la Personal Information Protection Commission (PIPC) al link sopra.

### 12.5 India (DPDP Act 2023)

Residenti in India sono protetti dal *Digital Personal Data Protection Act 2023*.

**Diritti del Data Principal**:
- Conferma + sintesi dei dati trattati (Sec. 11)
- Correzione e cancellazione (Sec. 12-13)
- Grievance redressal entro 30 giorni (Sec. 14)
- Nomina di un Consent Manager (Sec. 6)

**Minori**: il DPDP Act richiede **consenso genitoriale per utenti sotto i 18 anni**, soglia più stretta del GDPR (14 in Italia). Fluera applica l'età minima dichiarata in ToS §4.3 (≥16) e, per residenti indiani, richiede che gli utenti tra 16-18 anni acquisiscano il consenso del genitore prima dell'uso. Le segnalazioni di non conformità sono gestite via `support@fluera.dev` con cancellazione entro 30 giorni come da policy globale.

Contatto Data Protection Officer / Grievance Officer: `lorenco@fluera.dev`.

### 12.6 Arabia Saudita (PDPL)

Residenti in Arabia Saudita sono protetti dal *Personal Data Protection Law* (in vigore dal 14 settembre 2024), regolato dalla **Saudi Data and AI Authority (SDAIA)**.

**Cross-border transfer**: i dati raccolti da utenti KSA sono trasferiti a server EEA (Supabase Stockholm; Vertex AI nell'UE, per le funzioni AI solo se attivi `Funzioni AI`, e per il controllo automatico delle schede e delle foto profilo che carichi, §2.11) e a responsabili con sede negli Stati Uniti (Sentry, RevenueCat, Deno). Verso Sentry il trasferimento avviene solo dopo il tuo consenso esplicito ai `Report dei crash` nella consent screen, ai sensi dell'Art. 29 PDPL. Verso RevenueCat avviene dall'avvio dell'app su iOS, macOS e Android, senza un consenso separato, perché gestisce l'abbonamento (§2.7; esecuzione del contratto, §3): riceve l'identificativo pseudonimo del tuo account, o un identificativo anonimo se non hai fatto l'accesso, i dati dell'abbonamento e i dati tecnici della connessione (come l'indirizzo IP), mai i contenuti. Verso Deno avviene quando usi share.fluera.dev (§2.13). Verso gli Stati Uniti il trasferimento si basa sulle Clausole Contrattuali Standard dei DPA dei responsabili (§5).

**Diritti**: essere informato sul trattamento, accesso, correzione, cancellazione, opposizione al trattamento. Per esercitarli: `lorenco@fluera.dev`. Reclami formali possono essere indirizzati a SDAIA — <https://sdaia.gov.sa>.

### 12.7 Canada (PIPEDA + Quebec Law 25)

Residenti canadesi sono protetti dal *Personal Information Protection and Electronic Documents Act* (PIPEDA, federale) e, per i residenti del Quebec, anche dalla *Loi sur la protection des renseignements personnels dans le secteur privé* modificata dalla **Law 25** (in vigore dal 2023, notoriamente più strict del PIPEDA).

**Diritti garantiti**:
- Accesso ai propri dati personali e informazioni sul loro trattamento
- Rettifica di dati inaccurati o incompleti
- Ritiro del consenso al trattamento
- Portabilità (Quebec Law 25, Art. 27)
- Cancellazione / "right to be forgotten" (Quebec Law 25, Art. 28.1)

**Cross-border transfer**: Quebec Law 25 Art. 17 richiede valutazione di privacy impact prima del trasferimento di dati personali fuori dal Quebec. I dati Fluera transitano verso server EEA (Supabase Stockholm; inferenza AI su Vertex AI nell'UE) e responsabili con sede negli Stati Uniti (Sentry, RevenueCat, Deno) — copertura fornita dalle SCC di cui ai DPA dei responsabili e, per Sentry, dal consenso esplicito ai `Report dei crash` nella consent screen.

**Privacy Officer designato**: Lorenco Shametaj (founder, Fluera). Contatto operativo: `lorenco@fluera.dev`. Designato ai sensi dell'Art. 8 Quebec Law 25.

**Autorità di controllo**:
- Federale: Office of the Privacy Commissioner of Canada (OPC) — <https://www.priv.gc.ca>
- Quebec: Commission d'accès à l'information du Québec — <https://www.cai.gouv.qc.ca>

### 12.8 Australia (Privacy Act 1988 + Australian Privacy Principles)

Residenti australiani sono protetti dal *Privacy Act 1988* (incluse le riforme 2024), che definisce 13 **Australian Privacy Principles (APPs)** vincolanti.

**Diritti garantiti**:
- Notifica al momento della raccolta (APP 5) — fornita tramite il consent screen + Privacy Policy
- Accesso ai dati conservati (APP 12) e correzione (APP 13)
- Opt-out da uso/disclosure per scopi diversi dal primario (APP 6)
- Disclosure cross-border accountability (APP 8): Fluera resta responsabile per il trattamento da parte dei responsabili con sede negli Stati Uniti (Sentry, RevenueCat, Deno — §5), anche quando il trasferimento non dipende da un consenso nella consent screen (RevenueCat: §2.7; Deno: §2.13)

**Sensitive Personal Information**: Fluera non raccoglie informazioni sensibili ai sensi APP (no health, no biometric, no political/religious).

**Notifiable Data Breach scheme** (Part IIIC): in caso di "eligible data breach" che possa causare "serious harm", Fluera notifica l'Office of the Australian Information Commissioner (OAIC) e gli utenti interessati "as soon as practicable", in linea con la stessa policy di breach notification GDPR a 72 ore.

**Autorità di controllo**: Office of the Australian Information Commissioner (OAIC) — <https://www.oaic.gov.au>. Reclami formali: <https://www.oaic.gov.au/privacy/privacy-complaints>.

### 12.9 Altre giurisdizioni

Per i residenti di qualsiasi altra giurisdizione non specificamente elencata sopra rispettiamo i tuoi diritti ai sensi della normativa nazionale applicabile in materia di protezione dei dati personali. La lista che segue è esemplificativa e non esaustiva:

- 🇳🇿 **Nuova Zelanda** — Privacy Act 2020
- 🇸🇬 **Singapore** — PDPA 2012
- 🇭🇰 **Hong Kong** — PDPO
- 🇿🇦 **Sudafrica** — POPIA 2013
- 🇵🇭 **Filippine** — Data Privacy Act 2012
- 🇲🇽 **Messico** — LFPDPPP
- 🇦🇷 **Argentina** — Ley 25.326
- 🇮🇱 **Israele** — Privacy Protection Law 1981
- 🇻🇳 **Vietnam** — PDPD 2024
- 🇮🇩 **Indonesia** — UU PDP 2022
- 🇹🇭 **Thailand** — PDPA 2022
- 🇹🇷 **Turchia** — KVKK 2016
- 🇳🇬 **Nigeria** — NDPA 2023
- 🇰🇪 **Kenya** — DPA 2019
- 🇰🇿 **Kazakhstan** — Data localization law
- altri ordinamenti con leggi privacy equivalenti

Se la legge locale del tuo paese di residenza richiede tutele più specifiche di quelle qui descritte, prevarranno quelle tutele locali nei limiti in cui sono applicabili.

**Come esercitarli**: scrivi a `lorenco@fluera.dev` indicando il tuo paese di residenza — risposta entro 30 giorni (compatibile con i termini massimi delle leggi citate sopra).

**Self-service**: le operazioni più comuni (export dati ai sensi del "right to portability" equivalente, cancellazione cloud ai sensi del "right to erasure" equivalente, revoca consenso) sono già disponibili in **Impostazioni → Privacy** e funzionano in modo identico indipendentemente dalla giurisdizione.

---

**Nota generale per tutte le giurisdizioni**: le operazioni pratiche (export dei dati, cancellazione cloud, revoca consensi) sono già implementate nell'app: vai a **Impostazioni → Privacy** per esercitarle in autonomia, senza dover scrivere a `lorenco@fluera.dev`. Il canale email è disponibile per richieste che non sono coperte dai self-service tile o per chiarimenti.
