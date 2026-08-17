import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catalogo — Template di studio che si installano nella tua memoria",
    "description": "Una pagina scritta a mano, più i concetti che ci stanno sotto. Installarla pianta un piano di ripassi tuo. In cima quello che resta, non i download.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Il Catalogo di Fluera",
    "description": "Un catalogo di pagine di studio scritte a mano che si installano come piani di ripetizione spaziata, ordinate per ritenzione misurata invece che per download.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "it"
  },
  "hero": {
    "kicker": "Catalogo",
    "title": "Qualcuno questo capitolo l'ha già capito.<br />Installalo, e a essere interrogato sei tu.",
    "description": "Un template di studio Fluera non è un PDF e non è un mazzo di flashcard. È una pagina di scrittura a mano vera, la struttura dei concetti che ci sta sotto e la ricetta del piano di ripassi che dovresti seguire. Installarne uno pianta quel piano dentro un canvas tuo.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Richiedi accesso anticipato →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Come funziona il piano di ripassi"
      }
    ]
  },
  "unit": {
    "kicker": "L'unità",
    "title": "Viaggiano tre cose.<br />La quarta resta a chi l'ha scritta.",
    "sub": "Ogni altro store ti consegna un documento e ti augura buona fortuna. Un template di studio porta la pagina, la struttura che rende quella pagina insegnabile e le istruzioni per programmarla — di proposito senza la parte che appartiene a chi l'ha fatta.",
    "items": [
      {
        "title": "Un foglio ritagliato",
        "body": "Non un quaderno intero: una regione che l'autore ha inquadrato sul suo canvas. Dentro la cornice ci sono i tratti, le forme, il testo digitato e le immagini; fuori non passa niente. Il PDF di partenza non viaggia con il template."
      },
      {
        "title": "L'impalcatura dei concetti",
        "body": "La struttura sotto l'inchiostro: quali sono i concetti, a che argomento appartiene ciascuno, come si reggono l'uno sull'altro. È la differenza tra una pagina che si legge e una pagina che insegna."
      },
      {
        "title": "La ricetta delle carte nuove",
        "body": "Non la memoria dell'autore: le istruzioni per costruire la tua. Ritenzione desiderata, tipo di materiale e quando deve cadere il primo ripasso. Il tuo piano nasce da lì, nel momento in cui installi."
      }
    ]
  },
  "install": {
    "kicker": "Installare",
    "title": "Un file lo archivi.<br />Un ripasso ti viene a cercare.",
    "paragraphs": [
      "Scaricare materiale di studio non è mai stato il problema. Il problema è tornarci sopra il giorno in cui stai per dimenticarlo, e nessuna cartella l'ha mai risolto.",
      "Per questo installare un template non ti mette un documento da qualche parte: ti pianta delle carte, con una data. Erediti i concetti dell'autore e la struttura che li tiene insieme — mai il suo storico dei ripassi, la sua confidenza, quanto bene li conoscesse lui. Nel formato del template non c'è posto per queste cose."
    ],
    "steps": [
      {
        "step": "01",
        "title": "La pagina arriva come inchiostro",
        "body": "Il foglio si riapre dentro un canvas tuo. È scrittura a mano vera su carta vera, non un PDF renderizzato: ci scrivi sopra, lo allunghi, lo tagli a pezzi."
      },
      {
        "step": "02",
        "title": "Ogni concetto diventa una carta",
        "body": "Per ogni concetto che ha un nome nasce una carta di ripetizione spaziata nuova, senza niente alle spalle: zero ripetizioni e una difficoltà di partenza a metà della scala di Fluera. Il primo ripasso cade il giorno dopo."
      },
      {
        "step": "03",
        "title": "Da lì in poi il piano è tuo",
        "body": "Finisce su disco, e alimenta il badge delle scadenze e il riepilogo quotidiano come qualsiasi cosa tu abbia scritto di tuo pugno. Reinstallare lo stesso template non azzera i ripassi che hai già fatto."
      }
    ]
  },
  "ranking": {
    "kicker": "La classifica",
    "title": "Conta quello che è rimasto in testa.<br />Non quello che ha fatto il giro.",
    "sub": "Un contatore di download misura una decisione presa prima che qualcuno imparasse qualcosa. Ed è il numero più facile da gonfiare che esista in uno store. Fluera può ordinare per qualcosa di meglio, perché l'app stima già quanto ogni studente sta tenendo ogni concetto.",
    "items": [
      {
        "label": "Misurato sul dispositivo",
        "body": "Quando riapri il canvas di un template al giorno 1, al 7 e al 30 — o più tardi — Fluera guarda quanto, secondo il modello di ripetizione spaziata, stai tenendo proprio quei concetti, e ne ricava un numero solo."
      },
      {
        "label": "Un numero, e basta",
        "body": "Quel numero è tutto ciò che parte. Nessun titolo di concetto, nessun contenuto delle carte, nessuno storico dei ripassi, nessuna identità. E parte solo se hai fatto l'accesso e hai acconsentito agli analytics, mai se il template è tuo."
      },
      {
        "label": "Sotto i cinque, tace",
        "body": "Un template non mostra alcun numero pubblico finché almeno cinque studenti diversi non ne hanno mandato uno. Sotto quella soglia l'ordinamento ripiega sulle installazioni, e la scheda non dice niente."
      },
      {
        "label": "Il download non fa classifica",
        "body": "La griglia sotto «Tutti i template» è ordinata di default per quel segnale misurato, non per la popolarità. Un template che si diffonde in fretta non se la compra, la posizione."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Cosa non è.</strong> È la stima che un modello fa di quanto i concetti di un template restano a chi è tornato a studiarli: non è un voto d'esame, non è un gruppo di controllo, e non dice niente su chi ha installato un template e non l'ha più aperto. Preferiamo descrivere il segnale per quello che è, invece di vestirlo a festa."
  },
  "discovery": {
    "kicker": "Trovarne uno",
    "title": "Tre modi per restringere il campo,<br />e uno che sa fare solo il tuo dispositivo.",
    "sub": "Un catalogo di materiale di studio fallisce sempre allo stesso modo: sulla carta tutto riguarda la tua materia, e quasi niente riguarda il tuo corso. Per questo i filtri sono quelli con cui uno studente ragiona davvero.",
    "paragraphs": [
      "Puoi restringere per <strong class=\"text-paper-100\">materia</strong>, per <strong class=\"text-paper-100\">corso o esame</strong> — testo libero, quindi <em>Maturità</em> e <em>MCAT</em> valgono quanto <em>Analisi I</em> — e per <strong class=\"text-paper-100\">lingua</strong>. Ogni filtro porta il suo conteggio in tempo reale, ogni scelta rinterroga gli altri, e un filtro che non ha niente dietro non compare proprio. Non ti viene mai offerta una strada che porta a una pagina vuota.",
      "Il catalogo si apre nella lingua in cui hai impostato l'app, perché un muro di materiale che non sai leggere non è un catalogo. È una preferenza, non uno steccato: un tocco lo allarga a tutte le lingue.",
      "La ricerca è full-text e perdona gli accenti. E lascia perdere la classifica: ordina per pertinenza, perché se hai già scritto quello che vuoi, quanto hanno trattenuto gli altri non è più la domanda che ti stai facendo."
    ],
    "marksHeading": "Cosa dicono i contrassegni di una scheda",
    "marks": [
      {
        "mark": "Ufficiale",
        "body": "Lo mette il catalogo, mai qualcosa che un autore possa scrivere in un modulo. Non si ottiene chiamandosi in un certo modo."
      },
      {
        "mark": "Nuovo",
        "body": "Si guadagna, alla lettera: nessuna installazione, nessuna valutazione, pubblicato nell'ultima settimana. Scade da sé, nessuno lo spegne."
      },
      {
        "mark": "Materia",
        "body": "La disciplina sotto cui il template è archiviato, per distinguere a colpo d'occhio una pagina di chimica da una che la sfiora soltanto."
      },
      {
        "mark": "Valutazione",
        "body": "Compare solo quando un template è stato valutato davvero, da chi lo ha installato davvero. Senza valutazioni la scheda tace, invece di partire da zero."
      }
    ],
    "note": "<strong class=\"text-paper-50\">E una riga che nessun altro potrebbe costruire.</strong> Fluera sa già su quali concetti stai lavorando, perché li hai scritti tu. Così può ordinare i template per quanto si sovrappongono a ciò che hai adesso sul canvas — e quel conto lo fa sul tuo dispositivo. Dal telefono escono la materia che studi di più e gli identificativi dei template che l'app aveva già recuperato dal catalogo. Il tuo insieme di concetti resta dov'è."
  },
  "privacy": {
    "kicker": "Cosa viaggia e cosa no",
    "title": "Pubblichi la pagina,<br />non come stavi andando.",
    "sub": "Condividere materiale di studio significa condividere qualcosa che hai fatto mentre lo stavi ancora imparando. Il confine tra le due cose è tracciato nel codice, non in un paragrafo di policy.",
    "items": [
      {
        "title": "Il tuo modello di studente non entra nel file",
        "body": "Il componente che costruisce l'impalcatura pubblica di un template, per come è scritto, non legge mai lo storico dei tuoi ripassi, la tua confidenza, quante volte hai studiato una cosa, quanto bene la stavi tenendo, né gli embedding che ci stanno sotto. Un autore che padroneggia la materia e uno che arranca, sulla stessa pagina, producono un'impalcatura identica byte per byte."
      },
      {
        "title": "A tenere il confine è un test, in CI",
        "body": "La garanzia la tiene un test che percorre l'output serializzato e fallisce se in un punto qualsiasi compare uno dei ventisei nomi di campo del modello dello studente o del comportamento. Gira in CI come gate dichiarato, non opzionale, e fallisce anche se qualcuno cancella il file di test."
      },
      {
        "title": "L'inchiostro è il limite onesto",
        "body": "Quello che nessuna ripulitura raggiunge è la scrittura a mano, e l'impalcatura si porta dietro un breve estratto troncato del testo riconosciuto: mai la trascrizione intera, ma nemmeno oscurata. Per questo, prima che parta un solo byte, il pannello di pubblicazione ti mette davanti l'immagine esatta che diventerebbe pubblica, sopra una casella di consenso."
      },
      {
        "title": "Il tuo nome non diventa mai la firma",
        "body": "Le letture pubbliche non restituiscono nessun id di account: un creator è identificato da un codice ricavato a senso unico dal suo account — con salt, hash e troncatura. È uno pseudonimo stabile, non la tua identità."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Leggi l'architettura di sicurezza →"
    }
  },
  "creators": {
    "kicker": "Per i creator",
    "title": "La spiegazione migliore di un'idea difficile<br />di solito sta in una pagina.",
    "paragraphs": [
      "Pubblicare comincia sul tuo canvas. Inquadri la regione che vale la pena condividere, Fluera la impacchetta, e un pannello ti chiede se debba diventare un file o un'inserzione. Viaggia quello che hai inquadrato: il resto del canvas non esce.",
      "Prima che parta qualsiasi cosa, vedi l'immagine esatta che diventerebbe pubblica, e la confermi. L'inserzione viene validata prima che venga salvato un solo byte, e il caricamento passa da URL firmati monouso; se fallisce, l'inserzione torna indietro invece di restare a metà.",
      "Ogni template è gratuito. In Fluera non c'è un checkout, non c'è un campo prezzo nell'API di pubblicazione, non c'è un registro dei pagamenti — e la colonna del prezzo nel catalogo la tiene a zero un vincolo del database, non una policy."
    ],
    "heading": "Cosa ti dà pubblicare",
    "benefits": [
      "Un handle pseudonimo da creator, che non è mai il tuo account né la tua email",
      "Un profilo facoltativo — nome visualizzato, bio, avatar — con l'avatar fermo finché non è stato controllato",
      "Follower, e uno scaffale che porta loro il tuo template più recente",
      "Versionamento: una correzione si pubblica come sostituzione, non come doppione",
      "Una motivazione ogni volta che una decisione ti va contro, e un ricorso che può rimettere tutto a posto"
    ],
    "note": "Per pubblicare servono l'accesso con un account e la conferma dell'età. Per sfogliare e installare non serve niente di tutto questo."
  },
  "safety": {
    "kicker": "Moderazione e fiducia",
    "title": "Un catalogo scritto a mano da sconosciuti<br />deve rispondere di quello che ospita.",
    "sub": "Aprire un catalogo lo sanno fare tutti. Il lavoro sta in cosa succede quando qualcosa va storto — e nell'evitare che a decidere sia il gruppo che urla più forte.",
    "items": [
      {
        "label": "L'invio non pubblica niente",
        "body": "Un template nuovo nasce in attesa di revisione. Finché non è stato controllato non esiste: né nella navigazione, né nella ricerca, né nel catalogo, e il suo link di condivisione non porta da nessuna parte."
      },
      {
        "label": "Il controllo legge il file vero",
        "body": "Il classificatore estrae le immagini incorporate nel template invece di fidarsi della miniatura di chi carica, si tiene il verdetto peggiore fra tutte e gira in regioni UE. Può far avanzare un elemento o alzarlo di livello; ribaltare un moderatore, mai."
      },
      {
        "label": "Le segnalazioni arrivano a persone, non a robot",
        "body": "Una segnalazione entra in una coda umana: una per segnalante, autosegnalazioni rifiutate. Un gruppo coordinato può alzare l'attenzione. Far sparire un'inserzione, no."
      },
      {
        "label": "Rimuovere vuol dire togliere i byte",
        "body": "Quando un'inserzione viene rimossa, gli oggetti pubblicati spariscono dal CDN, non solo dall'elenco — dopo che le prove sono state messe al sicuro in un bucket privato, visibile ai soli amministratori."
      },
      {
        "label": "Ogni decisione arriva con il motivo",
        "body": "Il creator sa cos'è successo al suo template e se a decidere è stata una macchina. E può fare ricorso: se il ricorso viene accolto, l'inserzione torna dov'era."
      },
      {
        "label": "Le valutazioni si guadagnano",
        "body": "Non puoi valutare un template che non hai installato, non puoi valutare il tuo, non puoi valutare in anonimo. Le medie si ricalcolano da capo, non si incrementano."
      }
    ]
  },
  "status": {
    "kicker": "Disponibilità",
    "title": "Il catalogo esce con l'app.<br />Ed è appena all'inizio.",
    "paragraphs": [
      "Dentro Fluera puoi già sfogliare, vedere l'anteprima e installare, in tutte e sedici le lingue che l'app parla. Anche la pubblicazione è attiva, per chi ha fatto l'accesso ed è maggiorenne, e la stiamo aprendo piano di proposito: ospitare il lavoro di altri è una responsabilità che ti prendi come si deve, oppure non te la prendi.",
      "Quindi il catalogo è piccolo, e su questa pagina non troverai un numero di template, né di installazioni, né di creator. Più avanti quei numeri vorranno dire qualcosa. Oggi sarebbero solo decorazione."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Richiedi accesso anticipato →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Scarica Fluera"
      }
    ]
  }
};

export default data;

