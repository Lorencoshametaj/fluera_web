import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Katalog – studiemaler som installeres i hukommelsen",
    "description": "En studiemal er håndskrift pluss strukturen under. Installer den, og du får din egen repetisjonsplan. Rangert etter hva som sitter, ikke nedlastinger.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flueras katalog",
    "description": "En katalog med håndskrevne studiemaler som installeres som repetisjonsplaner, rangert etter hva som ble sittende i stedet for nedlastinger.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "no"
  },
  "hero": {
    "kicker": "Katalog",
    "title": "Noen har allerede knekt dette kapittelet.<br />Installer siden, og la den høre deg.",
    "description": "En Fluera-studiemal er verken en PDF eller en bunke flashcards. Den er en side med ekte håndskrift, konseptstrukturen under den, og en oppskrift på repetisjonsplanen som hører til. Installerer du en, plantes den planen i et canvas som er ditt.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Be om tidlig tilgang →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Slik virker repetisjonsplanen"
      }
    ]
  },
  "unit": {
    "kicker": "Formatet",
    "title": "Tre ting følger med. Forfatteren er ikke en av dem.",
    "sub": "Alle andre butikker sender deg et dokument og ønsker deg lykke til. En studiemal bærer med seg siden, strukturen som gjør at siden kan lære deg noe, og oppskriften på når du skal se den igjen – bevisst uten den delen som hører forfatteren til.",
    "items": [
      {
        "title": "Et innrammet ark",
        "body": "Ikke hele notatboka – bare området forfatteren rammet inn på sitt eget canvas. Strekene, formene, den skrevne teksten og bildene innenfor rammen. Ingenting utenfor. Kilde-PDF-en følger aldri med."
      },
      {
        "title": "Et konseptstillas",
        "body": "Strukturen under blekket: hvilke konsepter siden inneholder, hvilket tema hvert av dem hører til, og hva som må sitte før noe annet gir mening. Det er dette som gjør at en mal kan lære deg noe og ikke bare bli lest."
      },
      {
        "title": "En oppskrift på nye kort",
        "body": "Ikke forfatterens hukommelse – en oppskrift på din egen. Ønsket retensjon, hva slags stoff det er og når den første repetisjonen skal falle. Planen din bygges fra oppskriften når du installerer."
      }
    ]
  },
  "install": {
    "kicker": "Installasjon",
    "title": "En fil blir liggende.<br />En plan kommer tilbake til deg.",
    "paragraphs": [
      "Å laste ned pensum har aldri vært det vanskelige. Det vanskelige er å komme tilbake til det den dagen du holder på å glemme det, og ingen mappe har løst den oppgaven ennå.",
      "Derfor legger ikke en installasjon fra seg et dokument et eller annet sted. Den planter kort, med dato. Du arver forfatterens konsepter og strukturen mellom dem – aldri repetisjonshistorikken, aldri hvor sikker forfatteren var, aldri hvor godt stoffet satt. Malformatet har ikke plass til det."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Siden kommer inn som blekk",
        "body": "Arket gjenopprettes i et canvas som er ditt. Det er ekte håndskrift på ekte papir, ikke en ferdig gjengitt PDF – du kan skrive oppå det, utvide det og klippe det opp."
      },
      {
        "step": "02",
        "title": "Hvert konsept blir et kort",
        "body": "Ett helt nytt repetisjonskort per navngitt konsept, uten historikk bak seg: null repetisjoner og en startvanskelighet midt på Flueras skala. Første repetisjon faller dagen etter."
      },
      {
        "step": "03",
        "title": "Fra da av er planen din",
        "body": "Den lagres på disk og styrer forfallsmerket og det daglige sammendraget, akkurat som alt annet du har skrevet selv. Installerer du den samme malen på nytt, nullstilles ikke historikken du allerede har bygd."
      }
    ]
  },
  "ranking": {
    "kicker": "Rangeringen",
    "title": "Rangert etter hva som ble sittende.<br />Ikke etter hva som spredte seg.",
    "sub": "Et nedlastingstall måler en avgjørelse som ble tatt før noen hadde lært noe som helst. Det er dessuten det enkleste tallet å blåse opp i en hvilken som helst butikk. Fluera kan rangere på noe bedre, for appen modellerer allerede hvor godt hver enkelt holder på hvert enkelt konsept.",
    "items": [
      {
        "label": "Målt på enheten",
        "body": "Åpner du malens canvas igjen på eller etter dag 1, 7 og 30, leser Fluera av hvor godt repetisjonsmodellen mener du holder på nettopp de konseptene, og samler det i ett tall."
      },
      {
        "label": "Ett tall, ikke noe mer",
        "body": "Det tallet er alt som sendes. Ingen konsepttitler, ikke noe kortinnhold, ingen historikk, ingen identitet. Det går bare av gårde hvis du er innlogget og har sagt ja til analyse – og aldri hvis malen er din egen."
      },
      {
        "label": "Taus til fem har bidratt",
        "body": "En mal får ikke noe offentlig tall i det hele tatt før minst fem forskjellige personer har bidratt med hvert sitt. Under den grensen sorteres det på antall installasjoner, og kortet sier rett og slett ingenting."
      },
      {
        "label": "Nedlastinger er ikke rangeringen",
        "body": "Rutenettet under «Alle maler» sorteres som standard på det målte signalet, ikke på popularitet. En mal som sprer seg fort, kan ikke kjøpe seg oppover."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Hva dette ikke er.</strong> Det er et anslag fra en modell på hvor godt konseptene i en mal sitter hos dem som kom tilbake for å øve på dem – ikke et eksamensresultat, ikke en kontrollgruppe og ikke en påstand om noen som installerte en mal og aldri åpnet den igjen. Vi beskriver signalet som det er, i stedet for å pynte på det."
  },
  "discovery": {
    "kicker": "Å finne fram",
    "title": "Tre måter å snevre inn på.<br />Og én som må skje på din egen enhet.",
    "sub": "En katalog med studiemateriell svikter på én bestemt måte: alt handler på papiret om faget ditt, og nesten ingenting om emnet du faktisk går på. Derfor er filtrene de samme som studenter tenker i.",
    "paragraphs": [
      "Du kan snevre inn på <strong class=\"text-paper-100\">fag</strong>, på <strong class=\"text-paper-100\">emne eller eksamen</strong> – fritekst, så <em>Maturità</em> og <em>MCAT</em> teller like mye som <em>Analyse I</em> – og på <strong class=\"text-paper-100\">språk</strong>. Hvert filter viser et antall som oppdaterer seg, hvert valg du tar stiller spørsmålet på nytt for de andre, og et filter uten noe bak seg vises ikke. Ingen av valgene du får, ender i en tom side.",
      "Katalogen åpner på språket appen din står på, for en vegg av stoff du ikke kan lese, er ingen katalog. Det er en preferanse, ikke en sperre: ett trykk åpner den for alle språk.",
      "Søket er fulltekst og bryr seg ikke om aksenter. Det legger også rangeringen til side og sorterer på relevans i stedet – har du først skrevet inn hva du er ute etter, er ikke hva andre husket lenger spørsmålet du stiller."
    ],
    "marksHeading": "Hva merkene på et kort betyr",
    "marks": [
      {
        "mark": "Offisiell",
        "body": "Settes av katalogen, aldri av noe en forfatter kan skrive inn i et skjema. Ingen kan skrive seg til merket i visningsnavnet sitt."
      },
      {
        "mark": "Ny",
        "body": "Må fortjenes: ingen installasjoner, ingen vurderinger, publisert den siste uka. Merket utløper av seg selv i stedet for å bli skrudd av."
      },
      {
        "mark": "Fag",
        "body": "Faget malen er lagt under, så du straks ser forskjell på en kjemiside og en side som bare grenser til kjemi."
      },
      {
        "mark": "Vurdering",
        "body": "Vises først når malen faktisk er vurdert, av folk som har installert den. En mal uten vurderinger sier ingenting i stedet for å begynne på null."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Og én rad ingen andre kunne bygd.</strong> Fluera vet allerede hvilke konsepter du står i, for du skrev dem selv. Derfor kan appen rangere maler etter hvor mye de overlapper med det som ligger på canvaset ditt nå – og det regnestykket gjøres på enheten din. Det som forlater telefonen, er faget du studerer mest og identifikatorene til malene appen allerede har hentet. Konseptene dine blir liggende."
  },
  "privacy": {
    "kicker": "Hva som drar, og hva som blir igjen",
    "title": "Du publiserer siden. Ikke hvordan du lå an med den.",
    "sub": "Å dele studiemateriell er å dele noe du lagde mens du fortsatt holdt på å lære det. Grensen mellom de to tingene er trukket i kode, ikke i et avsnitt med retningslinjer.",
    "items": [
      {
        "title": "Læringsmodellen din ligger ikke i fila",
        "body": "Komponenten som bygger det offentlige stillaset, rører aldri ved repetisjonshistorikken din, hvor sikker du var, hvor mange ganger du har vært gjennom noe, hvor godt det satt eller embeddingene under. Det er ikke en innstilling, men slik komponenten er bygd: publiserer en ekspert og en som strever den samme siden, kommer det ut det samme stillaset, byte for byte."
      },
      {
        "title": "En test holder grensen, i CI",
        "body": "Det er en test som holder garantien: den går gjennom det serialiserte resultatet felt for felt og feiler hvis ett eneste av tjueseks navn fra læringsmodellen eller atferdsdataene dukker opp i det. Testen kjører som en navngitt sperre i CI, og ingen kan hoppe over den. Sletter noen testfila, feiler den også."
      },
      {
        "title": "Blekket er den ærlige grensen",
        "body": "Det ingen automatisk vasking når fram til, er håndskriften selv. Og stillaset bærer faktisk med seg et kort utdrag av teksten som ble gjenkjent – avkortet, aldri hele transkripsjonen, men heller ikke sladdet. Derfor viser publiseringspanelet deg nøyaktig det bildet som blir offentlig, over en samtykkeboks du må krysse av, før én eneste byte lastes opp."
      },
      {
        "title": "Navnet ditt blir aldri skapernavnet",
        "body": "Offentlige oppslag gir ingen konto-ID i det hele tatt, og en skaper identifiseres med en kode som er utledet énveis fra kontoen – saltet, hashet og avkortet. Et stabilt pseudonym, ikke identiteten din."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Les sikkerhetsarkitekturen →"
    }
  },
  "creators": {
    "kicker": "For skapere",
    "title": "Den beste forklaringen på noe vanskelig<br />får som regel plass på én side.",
    "paragraphs": [
      "Publisering begynner på ditt eget canvas. Du rammer inn det som er verdt å dele, Fluera pakker det sammen, og et panel spør om det skal bli en fil eller en oppføring. Det du rammer inn, er det som drar av gårde – resten av canvaset blir liggende.",
      "Før noe lastes opp, ser du nøyaktig det bildet som blir offentlig, og bekrefter det. Oppføringen valideres før én eneste byte lagres, og opplastingen går gjennom signerte engangslenker. Går det galt, rulles oppføringen tilbake i stedet for å bli liggende halvferdig.",
      "Alle maler er gratis. Det finnes ingen kasse i Fluera, ingen prisfelt i publiserings-API-et og ingen utbetalinger å føre – priskolonnen i katalogen holdes på null av en begrensning i selve databasen, ikke av en retningslinje."
    ],
    "heading": "Hva publisering gir deg",
    "benefits": [
      "Et pseudonymt skapernavn som verken er kontoen din eller e-posten din",
      "En valgfri profil – visningsnavn, presentasjon, avatar – der avataren ikke vises før den er kontrollert",
      "Følgere og en hylle som bærer den nyeste malen din ut til dem",
      "Versjonering: publiser en rettelse som erstatning, ikke som duplikat",
      "En begrunnelse hver gang en avgjørelse går imot deg, og en klage som kan gjøre den om"
    ],
    "note": "Å publisere krever innlogget konto og en aldersbekreftelse. Å bla i katalogen og installere krever ingen av delene."
  },
  "safety": {
    "kicker": "Moderering og tillit",
    "title": "En katalog med fremmedes håndskrift<br />må stå til ansvar.",
    "sub": "Hvem som helst kan åpne en katalog. Jobben ligger i hva som skjer når noe går galt – og i å sørge for at den som roper høyest, ikke er den som bestemmer.",
    "items": [
      {
        "label": "Å sende inn er ikke å bli oppført",
        "body": "En ny mal skrives inn med status «venter på gjennomgang». Inntil den er kontrollert, finnes den verken i utforskingen, i søket eller i katalogen, og delingslenken fører ingen steder."
      },
      {
        "label": "Kontrollen leser den ekte fila",
        "body": "Klassifisereren henter bildene ut av selve malen i stedet for å stole på miniatyrbildet fra den som lastet opp, legger den strengeste dommen blant dem til grunn og kjører i EU-regioner. Den kan slippe en sak videre eller løfte den oppover. Overprøve en moderator kan den aldri."
      },
      {
        "label": "Rapporter går til mennesker, ikke roboter",
        "body": "En rapport er et signal inn i en kø mennesker jobber i – én per rapportør, og du kan ikke rapportere deg selv. En samkjørt gruppe kan skaffe oppmerksomhet. Ta ned en oppføring kan den ikke."
      },
      {
        "label": "Fjernet betyr slettet",
        "body": "Når en oppføring fjernes, slettes de publiserte objektene fra CDN-en; de blir ikke bare skjult. Bevisene er sikret på forhånd, i et privat område bare administratorer kommer til."
      },
      {
        "label": "En avgjørelse kommer med en begrunnelse",
        "body": "Skaperen får vite hva som skjedde med malen og om avgjørelsen ble tatt automatisk – og kan klage. Fører klagen fram, kommer oppføringen tilbake."
      },
      {
        "label": "Vurderinger må fortjenes",
        "body": "Du kan ikke vurdere en mal du aldri har installert, ikke din egen og ikke anonymt. Snittene regnes ut på nytt fra bunnen i stedet for å telles opp underveis."
      }
    ]
  },
  "status": {
    "kicker": "Tilgjengelighet",
    "title": "Katalogen er med i appen.<br />Den har så vidt begynt.",
    "paragraphs": [
      "Å bla, forhåndsvise og installere er bygd inn i Fluera og oversatt til alle seksten språkene appen snakker. Publisering er også i drift, for innloggede voksne, og vi åpner den langsomt med vilje: å være vert for andres arbeid er et ansvar man tar ordentlig, eller lar være.",
      "Derfor er katalogen liten, og derfor står det verken antall maler, antall installasjoner eller antall skapere på denne siden. De tallene kommer til å bety noe en gang. I dag ville de bare vært pynt."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Be om tidlig tilgang →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Last ned Fluera"
      }
    ]
  }
};

export default data;

