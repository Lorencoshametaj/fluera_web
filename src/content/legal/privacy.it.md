---
lang: "it"
slug: "privacy"
title: "Informativa Privacy"
versione: "1.8.4"
aggiornato: "29 settembre 2026"
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
- I contenuti sono conservati in un database locale dedicato al tuo account. Dalla versione 1.5 quel database è **cifrato a riposo con AES-256** (art. 32 GDPR) con una chiave a 256 bit generata sul tuo dispositivo e custodita nel portachiavi del sistema operativo — Keychain su iOS/macOS, Keystore su Android, libsecret su Linux, DPAPI su Windows. La chiave non lascia mai il dispositivo e noi non la vediamo mai. I contenuti lasciano il tuo dispositivo in tre casi, tutti su tua azione: quando attivi il **Cloud Sync**; quando **pubblichi** una scheda di studio nel catalogo; quando tieni una scheda nel tuo **catalogo privato** per condividerla con un link. Gli ultimi due funzionano anche con il Cloud Sync spento e riguardano solo la porzione di appunti che scegli tu, mai l'intero canvas — vedi §2.11
- **Cosa comporta se perdi il dispositivo o reinstalli:** poiché la chiave vive solo nel portachiavi del tuo dispositivo, disinstallare l'app, cancellarne i dati o passare a un dispositivo nuovo rende il database locale illeggibile — a te come a noi. **La via di recupero è il Cloud Sync**, ed è opt-in: se non l'hai attivato, i tuoi canvas esistono solo su quel dispositivo.
- **Nota beta:** i database creati prima della versione 1.5 non sono cifrati e non possono essere aperti con una chiave. Al primo avvio della 1.5 un database del genere viene **cancellato** e ne nasce uno cifrato. I canvas già sincronizzati sul cloud tornano; quelli esistiti solo in locale no.

### 2.3 Dati di utilizzo (telemetria)
Solo se l'utente ha prestato consenso alla categoria **Analytics di prodotto**:
- `session_id` anonimo generato casualmente per sessione
- L'identificativo del tuo account, così che tu possa accedere alla tua telemetria e cancellarla (§6). Al processor di crash reporting (§5) viene inviato solo un hash SHA-256, mai l'identificativo in chiaro
- Piattaforma, versione app, tier di abbonamento, lingua del dispositivo
- Eventi di prodotto da whitelist server-side (inizio/fine sessione, Ghost Map, Socratic, review SRS, chiamate AI con durata e token)
- **Non sono raccolti:** contenuto degli appunti, testo delle domande, informazioni identificative.

### 2.4 Dati per funzioni AI
Solo se l'utente ha prestato consenso alla categoria **Funzioni AI**:
- Contenuti selezionati del canvas inviati per Socratic Mode, Ghost Map, LaTeX OCR, Exam Session — porzioni di testo e immagini PNG renderizzate delle singole regioni-cluster di scrittura a mano (mai l'intero blocco note)
- L'inferenza AI gira su Google Vertex AI nell'**Unione Europea** (europe-west4 Paesi Bassi, con failover europe-west1 Belgio); i contenuti del canvas non vengono trasferiti fuori dall'UE per l'inferenza AI
- Token di utilizzo per enforcement dei limiti di piano
- In produzione le chiamate transitano via proxy Supabase Edge Function (chiave API server-side)

### 2.5 Dati per Cloud Sync
Solo se l'utente ha prestato consenso alla categoria **Cloud Sync**:
- Copie dei canvas archiviate su Supabase (regione UE `eu-north-1`), cifrate in transito (TLS) e a riposo a livello infrastrutturale. Il Cloud Sync **non** è cifrato end-to-end: in qualità di titolare del trattamento, Fluera può tecnicamente accedere ai contenuti sincronizzati per erogare, proteggere e supportare il servizio (non li vende né li usa per pubblicità)
- Metadati di sincronizzazione (hash, timestamp, dimensione)

### 2.6 Dati di diagnostica e crash
Solo se l'utente ha prestato consenso alla categoria **Report dei crash**:
- Stack trace, versione OS, modello dispositivo, versione app
- Nessun contenuto utente nei report (`sendDefaultPii: false`)
- Gli indirizzi IP non vengono memorizzati (scrubbing IP lato server attivo su Sentry)
- Processati tramite Sentry — privacy policy: https://sentry.io/privacy/

### 2.7 Dati di abbonamento
- Stato dell'abbonamento (free / essential / plus / pro), date di attivazione, rinnovo, scadenza
- Identificativi RevenueCat / Apple / Google per matching ricevute
- Nessun dato di pagamento (numeri di carta, IBAN) viene memorizzato dai nostri sistemi: le transazioni sono gestite da Apple, Google e RevenueCat

### 2.8 Componenti software third-party (on-device)

Fluera include alcuni SDK third-party embedded che processano dati **esclusivamente sul tuo dispositivo**, senza inviare nulla ai loro produttori. Per trasparenza:

- **Google ML Kit** (riconoscimento on-device di scrittura a mano e testo — Digital Ink & Text Recognition) — il riconoscimento avviene localmente sul dispositivo; inchiostri e immagini non vengono inviati a Google per queste API on-device (i modelli di riconoscimento vengono scaricati da Google). Google non riceve alcun contenuto del canvas da Fluera tramite ML Kit.
- **sqlite3mc** — il motore del database locale, che realizza la cifratura AES-256 descritta al §2.2. La chiave gliela fornisce l'app prendendola dal portachiavi del tuo dispositivo; sqlite3mc di suo non invia nulla da nessuna parte. Tutta l'elaborazione è on-device.
- **Sentry SDK** (Functional Software Inc.) — solo la libreria embedded; vedi §4 per il responsabile del trattamento e §3 per la base giuridica del trasferimento di crash report (consenso, opt-in).

Questi componenti non sono **responsabili del trattamento** ai sensi dell'art. 28 GDPR perché non ricevono dati personali. Sono **componenti software** di terze parti come qualsiasi altra libreria utilizzata per costruire l'app.

### 2.9 Memoria cognitiva (indicizzazione on-device)

Attiva per impostazione predefinita (opt-out) ed elaborata **esclusivamente sul tuo dispositivo**: Fluera costruisce un indice cognitivo dei tuoi appunti che alimenta le funzioni di studio — titoli automatici dei cluster, mappa concettuale ("Ghost Map"), ripetizione dilazionata (FSRS) e i checkpoint dello stato di apprendimento ("Sé").

- **Nessun trasferimento:** questo indice **non lascia mai il dispositivo**. È distinto dalle *Funzioni AI* (§2.4, che inviano contenuti al cloud) e dal *Cloud Sync* (§2.5), che restano consensi separati e opt-in.
- **Dati derivati e trattati localmente:** identificatori di cluster e concetti, titoli generati on-device, struttura del grafo concettuale, log degli eventi concettuali, programmazione delle ripetizioni. Conservati localmente con la stessa protezione descritta al §2.2.
- **Controllo (opt-out):** puoi disattivarla in qualsiasi momento da *Impostazioni → Privacy → Memoria cognitiva*. Alla disattivazione l'indicizzazione si interrompe e **i dati cognitivi già creati sul dispositivo vengono cancellati immediatamente**; i tuoi appunti restano intatti. Riattivandola, l'indice viene ricostruito.

### 2.10 Dataset di riconoscimento della scrittura (opt-in, disattivo per impostazione predefinita)

Fluera sta costruendo un proprio riconoscitore della scrittura a mano,
addestrato sulla scrittura reale degli utenti Fluera. **Ogni modalità di
raccolta è disattiva per impostazione predefinita**, ognuna è una decisione
separata, e ognuna è revocabile in qualsiasi momento da *Impostazioni →
Privacy → AI Training Data*.

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
dalla moderazione. I link scaduti e le autorizzazioni revocate restano
registrati per poter dimostrare chi ha avuto accesso e quando. Alla
cancellazione dell'account i byte delle schede di cui **sei l'autore** vengono
cancellati dai nostri server insieme al resto; le schede che hai soltanto
ricevuto non vengono toccate, perché appartengono a chi le ha scritte.

**I tuoi diritti su questa funzione.** Puoi in ogni momento revocare un link,
togliere l'accesso a una persona, uscire da una scheda che hai ricevuto,
rimuovere una tua scheda, e segnalare una scheda che hai ricevuto. Le schede di
cui sei autore rientrano nell'export dei tuoi dati (§7).

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

## 3. Finalità e basi giuridiche

- **Erogazione del servizio** (account, canvas locali): esecuzione del contratto (art. 6.1.b GDPR)
- **Funzioni AI**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Cloud Sync**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Analytics di prodotto**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Report dei crash**: consenso esplicito e revocabile (art. 6.1.a GDPR)
- **Dataset di riconoscimento della scrittura** (§2.10): consenso esplicito e revocabile (art. 6.1.a GDPR), separato dalle Funzioni AI
- **Catalogo e condivisione delle schede** (§2.11): esecuzione del contratto (art. 6.1.b GDPR), su tua richiesta esplicita — nessuna scheda viene caricata senza che tu lo chieda
- **Moderazione dei contenuti condivisi, gestione delle segnalazioni e prevenzione degli abusi** (§2.11): obbligo legale (art. 6.1.c GDPR, Regolamento UE 2022/2065 «DSA») e legittimo interesse (art. 6.1.f GDPR) a impedire che il servizio veicoli contenuti illeciti. Rientra qui anche la registrazione della versione dei Termini che accetti e della tua dichiarazione sui diritti relativi al contenuto, che è ciò che rende dimostrabile a quali condizioni hai condiviso
- **Gestione abbonamenti**: esecuzione del contratto (art. 6.1.b GDPR)
- **Sicurezza e prevenzione abusi** (enforcement quote AI): legittimo interesse (art. 6.1.f GDPR)
- **Memoria cognitiva on-device** (indicizzazione locale per titoli, Ghost Map, ripetizione): legittimo interesse (art. 6.1.f GDPR) all'erogazione delle funzioni di studio, con elaborazione esclusivamente locale (nessun trasferimento) e diritto di opposizione (art. 21 GDPR) esercitabile in ogni momento tramite l'opt-out in *Impostazioni → Privacy*

## 4. Destinatari dei dati

Tutti i destinatari sono responsabili del trattamento vincolati da contratto ex art. 28 GDPR:

- **Supabase Inc.** — database, autenticazione, storage, telemetria, Edge Functions (regione UE `eu-north-1`, Stoccolma) — https://supabase.com/privacy
- **Google Cloud (Google Ireland Ltd.)** — Vertex AI (Gemini), elaborazione nell'UE (Paesi Bassi / Belgio) — https://cloud.google.com/terms/data-processing-addendum
- **Google LLC** — Sign in with Google (solo autenticazione) — https://policies.google.com/privacy
- **Apple Inc.** — Sign in with Apple, App Store — https://www.apple.com/legal/privacy/
- **RevenueCat Inc.** — abbonamenti — https://www.revenuecat.com/privacy
- **Functional Software Inc. (Sentry)** — crash reporting — https://sentry.io/privacy/
- **Deno Land Inc.** — hosting di share.fluera.dev (catalogo web, pagine delle schede, modulo di segnalazione, connettore dell'assistente): indirizzo IP e dati delle richieste di chi visita (§2.13) — https://docs.deno.com/deploy/privacy_policy/

**Fornitori che trattano come titolari autonomi.** fluera.dev è ospitato su GitHub Pages: GitHub Inc. registra i dati tecnici delle visite (indirizzo IP, ora, pagina richiesta) per la sicurezza del proprio servizio, come titolare autonomo e secondo la propria informativa — https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement. Lo stesso vale per i caratteri tipografici che share.fluera.dev carica da fluera.dev (§2.13).

**Allarmi interni.** Per gli avvisi di servizio — i costi e le segnalazioni sulla sicurezza dei minori — usiamo Discord. I messaggi non contengono dati personali: né identificativi di account, né contenuti, né chi ha segnalato o chi è stato segnalato; solo il tipo di avviso, la fascia di abbonamento, gli importi e il numero interno dell'avviso o della segnalazione.

**Altri utenti.** Quando pubblichi una scheda nel catalogo, o ne condividi una privata con un link (§2.11), i dati contenuti in quella scheda raggiungono le persone a cui hai scelto di darla — chiunque, nel caso del catalogo pubblico; solo chi apre il tuo link, nel caso privato. Non sono responsabili del trattamento per nostro conto: sono destinatari che decidi tu, e la comunicazione avviene solo per tua azione.

**Assistenti che colleghi tu.** Se attivi l'estratto di studio (§2.12), l'assistente AI che colleghi lo legge tramite il tuo token personale del connettore. Il suo fornitore (per esempio Anthropic o OpenAI) è un destinatario che scegli e autorizzi tu, non un responsabile per nostro conto; ciò che fa dei dati letti è regolato dai suoi termini, e la comunicazione avviene solo per tua azione di collegamento.

A parte questo, non vendiamo, non cediamo e non comunichiamo i dati personali a parti diverse da quelle indicate. Nessuna profilazione pubblicitaria viene effettuata.

Le condizioni di trattamento ex art. 28 di ciascun responsabile si applicano a noi, o tramite un DPA sottoscritto separatamente o tramite il DPA richiamato per riferimento nei loro termini di servizio. Le copie controfirmate sono conservate internamente quando il responsabile ne emette una; lo stato aggiornato per ciascun responsabile è disponibile su richiesta scritta a `lorenco@fluera.dev`. L'elenco aggiornato dei sub-processor di ciascun responsabile è consultabile ai link delle rispettive privacy policy.

## 5. Trasferimenti extra-UE

Alcuni responsabili — Sign in with Google (Google LLC), Apple, Sentry, RevenueCat, Deno — hanno sede negli Stati Uniti. Il trasferimento verso di essi avviene sulla base delle Clausole Contrattuali Standard approvate dalla Commissione Europea (art. 46 GDPR) e, ove applicabile, dell'adesione del fornitore al EU-US Data Privacy Framework.

**L'inferenza AI non lascia l'UE.** I contenuti del canvas inviati alle funzioni AI sono elaborati da Google Vertex AI esclusivamente nell'Unione Europea (europe-west4 Paesi Bassi, con failover europe-west1 Belgio) e non vengono trasferiti negli Stati Uniti.

Supabase consente di scegliere la regione del database: utilizziamo la regione `eu-north-1` (Stoccolma) all'interno dell'area SEE.

## 6. Periodi di conservazione

- **Account e contenuti utente:** per tutta la durata del rapporto contrattuale e fino alla richiesta di cancellazione
- **Eventi di telemetria:** 180 giorni
- **Eventi dei report di crash:** 30 giorni in Sentry. Le copie di backup cifrate vengono eliminate entro 90 giorni dalla loro creazione
- **Log di utilizzo AI (`ai_usage_events`):** 24 mesi
- **Dati di abbonamento:** 10 anni a fini fiscali (art. 2220 c.c.). Presso RevenueCat (§4) i dati del subscriber e degli acquisti non vengono cancellati alla scadenza dell'abbonamento: vengono rimossi quando cancelliamo il customer, e dai loro sistemi a valle entro 30 giorni. Attenzione: cancellare il customer **non disdice** l'abbonamento con Apple o Google — quello puoi farlo solo tu dal tuo account dello store, e finché non lo fai un ripristino degli acquisti può ricreare il record
- **Schede del catalogo (§2.11):** finché non le rimuovi o non vengono rimosse dalla moderazione. I **link** scaduti o revocati e le **autorizzazioni** revocate restano registrati (senza il testo del link, di cui conserviamo solo l'impronta) per poter dimostrare chi ha avuto accesso e quando. Alla cancellazione dell'account, le schede di cui sei **autore** vengono cancellate insieme ai loro file; le copie già installate da altre persone restano sui loro dispositivi e non sono raggiungibili né da te né da noi
- **Decisioni di moderazione e segnalazioni:** conservate per la durata necessaria a gestire un eventuale reclamo o ricorso, e comunque per rispondere agli obblighi del DSA
- **Audit trail del consenso:** fino alla revoca + 3 anni (art. 7.1 GDPR)
- **Dataset di riconoscimento della scrittura (§2.10):** fino a 5 anni dopo la cancellazione dell'account, o finché non lo revochi da *Impostazioni → Privacy → AI Training Data* — quello che viene prima, sempre in forma pseudonimizzata. La revoca raggiunge solo i contributi fatti da un dispositivo i cui dati dell'app sono ancora presenti; dopo una disinstallazione ciò che li limita è la finestra di 5 anni (vedi §2.10, art. 11 GDPR)
- **Indice di memoria cognitiva (on-device):** conservato localmente finché la funzione resta attiva; cancellato immediatamente alla disattivazione (opt-out) o su richiesta di cancellazione dei dati
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
- Scrivere a lorenco@fluera.dev per cancellazione account o rettifiche manuali

Il Titolare risponde entro 30 giorni dalla ricezione (art. 12.3 GDPR), salvo proroga motivata.

## 9. Reclami all'autorità di controllo

Qualora l'utente ritenga che il trattamento violi il GDPR, ha diritto di proporre reclamo:

- **Garante per la protezione dei dati personali**
- Piazza Venezia 11, 00187 Roma
- https://www.garanteprivacy.it

### 9.1 Notifica di violazione dei dati

In caso di violazione dei dati personali, Fluera notificherà l'autorità di controllo competente (il *Garante per la protezione dei dati personali*, o l'autorità locale dell'utente) senza ingiustificato ritardo e, ove possibile, entro **72 ore** dal momento in cui ne è venuta a conoscenza, ai sensi dell'art. 33 GDPR. Qualora la violazione possa comportare un rischio elevato per i diritti e le libertà dell'utente, informeremo anche gli utenti interessati senza ingiustificato ritardo e con linguaggio chiaro, ai sensi dell'art. 34 GDPR. Manteniamo un registro interno delle violazioni come richiesto dall'art. 33(5).

## 10. Utenti minorenni

**Fluera non è destinata a utenti di età inferiore ai 14 anni. Utilizzando il Servizio dichiari di avere almeno 14 anni.**

Per età 14-18 il trattamento è consentito ai sensi dell'art. 2-quinquies D.Lgs. 196/2003, eventualmente subordinato al consenso di chi esercita la responsabilità genitoriale ove richiesto dalla legge nazionale applicabile. Per età inferiori a 14 anni la creazione di account non è consentita.

Se veniamo a conoscenza di dati raccolti da un minore di 14 anni, sospendiamo l'account e cancelliamo i dati associati entro 30 giorni. Segnalazioni a `support@fluera.dev` o `lorenco@fluera.dev`.

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

**Categorie di informazioni raccolte** (Cal. Civ. Code §1798.130): identificatori (user_id pseudonimo), informazioni commerciali (subscription tier), attività internet (telemetria di prodotto se consentita), informazioni inferite (preferenze d'uso). Nessun dato sensibile ai sensi CCPA.

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

**Cross-border transfer consent**: quando attivi `Funzioni AI` o `Report dei crash`, i dati sono trasferiti rispettivamente a Google LLC (Stati Uniti) e Functional Software Inc./Sentry (Stati Uniti). Confermando i consensi nella consent screen autorizzi esplicitamente tali trasferimenti ai sensi dell'Art. 28 APPI. Puoi revocare il consenso in qualsiasi momento da Impostazioni → Privacy.

**Diritti**: disclosure dei dati conservati, correzione, addizione, cancellazione, cessazione dell'uso, cessazione del trasferimento a terzi. Contatto: `lorenco@fluera.dev`.

### 12.4 Corea del Sud (PIPA)

Residenti in Corea del Sud sono protetti dal *Personal Information Protection Act* (PIPA).

**Personal Information Processing Notice**: Fluera tratta i tuoi dati personali per le finalità descritte nella sezione 3, conservandoli per i periodi indicati nella sezione 6. I sub-processori USA (Sign in with Google, Sentry, RevenueCat) ricevono i dati solo dopo il tuo consenso esplicito tramite la consent screen. Le funzioni AI sono elaborate da Vertex AI nell'UE e non vengono trasferite negli USA.

**Diritti**: accesso, correzione, cancellazione, sospensione del trattamento. Per esercitarli: `lorenco@fluera.dev`. In caso di reclamo, l'autorità competente è la **Personal Information Protection Commission (PIPC)** — <https://www.pipc.go.kr>.

**Chief Privacy Officer (CPO)**: Lorenco Shametaj (founder, Fluera). Contatto operativo: `lorenco@fluera.dev`. Designato ai sensi dell'Art. 31 PIPA che richiede la nomina di un CPO per ogni controller di dati personali, indipendentemente dal volume di utenti trattati. In caso di reclami non risolti tramite il canale CPO, gli utenti coreani possono contattare direttamente la Personal Information Protection Commission (PIPC) al link sopra.

### 12.5 India (DPDP Act 2023)

Residenti in India sono protetti dal *Digital Personal Data Protection Act 2023*.

**Diritti del Data Principal**:
- Conferma + sintesi dei dati trattati (Sec. 11)
- Correzione e cancellazione (Sec. 12-13)
- Grievance redressal entro 30 giorni (Sec. 14)
- Nomina di un Consent Manager (Sec. 6)

**Minori**: il DPDP Act richiede **consenso genitoriale per utenti sotto i 18 anni**, soglia più stretta del GDPR (14 in Italia). Fluera applica l'età minima dichiarata in ToS §4.3 (≥14) e, per residenti indiani, richiede che gli utenti tra 14-18 anni acquisiscano il consenso del genitore prima dell'uso. Le segnalazioni di non conformità sono gestite via `support@fluera.dev` con cancellazione entro 30 giorni come da policy globale.

Contatto Data Protection Officer / Grievance Officer: `lorenco@fluera.dev`.

### 12.6 Arabia Saudita (PDPL)

Residenti in Arabia Saudita sono protetti dal *Personal Data Protection Law* (in vigore dal 14 settembre 2024), regolato dalla **Saudi Data and AI Authority (SDAIA)**.

**Cross-border transfer**: i dati raccolti da utenti KSA sono trasferiti a server EEA (Supabase Stockholm; inferenza AI su Vertex AI nell'UE) e a sub-processori USA (Sign in with Google, Sentry, RevenueCat). Tale trasferimento avviene solo dopo il tuo consenso esplicito tramite la consent screen, ai sensi dell'Art. 29 PDPL.

**Diritti**: essere informato sul trattamento, accesso, correzione, cancellazione, opposizione al trattamento. Per esercitarli: `lorenco@fluera.dev`. Reclami formali possono essere indirizzati a SDAIA — <https://sdaia.gov.sa>.

### 12.7 Canada (PIPEDA + Quebec Law 25)

Residenti canadesi sono protetti dal *Personal Information Protection and Electronic Documents Act* (PIPEDA, federale) e, per i residenti del Quebec, anche dalla *Loi sur la protection des renseignements personnels dans le secteur privé* modificata dalla **Law 25** (in vigore dal 2023, notoriamente più strict del PIPEDA).

**Diritti garantiti**:
- Accesso ai propri dati personali e informazioni sul loro trattamento
- Rettifica di dati inaccurati o incompleti
- Ritiro del consenso al trattamento
- Portabilità (Quebec Law 25, Art. 27)
- Cancellazione / "right to be forgotten" (Quebec Law 25, Art. 28.1)

**Cross-border transfer**: Quebec Law 25 Art. 17 richiede valutazione di privacy impact prima del trasferimento di dati personali fuori dal Quebec. I dati Fluera transitano verso server EEA (Supabase Stockholm; inferenza AI su Vertex AI nell'UE) e sub-processori USA (Sign in with Google, Sentry, RevenueCat) — copertura fornita dalle SCC di cui ai DPA dei processori e dal consenso esplicito tramite consent screen.

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
- Disclosure cross-border accountability (APP 8): Fluera resta responsabile per il trattamento da parte dei sub-processori USA, ai quali l'utente acconsente esplicitamente tramite la consent screen

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
