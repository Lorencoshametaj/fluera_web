import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Katalog — studieskabeloner, der installeres i din hukommelse",
    "description": "En studieskabelon er håndskrift plus strukturen under den. Installér den, og du står med din egen repetitionsplan. Sorteret efter det, der sad fast.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flueras katalog",
    "description": "Et katalog af håndskrevne studieskabeloner, der installerer sig som repetitionsplaner og sorteres efter det, de lærende holdt fast i, frem for efter downloads.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "da"
  },
  "hero": {
    "kicker": "Katalog",
    "title": "Nogen har knækket kapitlet før dig.<br />Installér det, og bliv hørt i det.",
    "description": "En Fluera-studieskabelon er hverken en PDF eller en bunke huskekort. Det er en side håndskrift, stilladset af begreber under den, og en opskrift på den repetitionsplan, du bør følge. Installerer du den, bliver planen plantet i et canvas, der er dit eget.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Anmod om tidlig adgang →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Sådan virker repetitionsplanen"
      }
    ]
  },
  "unit": {
    "kicker": "Enheden",
    "title": "Tre ting følger med. Det gør forfatteren ikke.",
    "sub": "Andre butikker sender dig et dokument og ønsker dig held og lykke. En studieskabelon har siden med, strukturen, der gør siden til noget, man kan lære af, og anvisningen på, hvornår du skal se den igen — men bevidst ikke den del, der hører til forfatteren.",
    "items": [
      {
        "title": "Ét afgrænset ark",
        "body": "Ikke en hel notesbog. Et udsnit, forfatteren selv har rammet ind på sit canvas: stregerne, figurerne, den indtastede tekst og billederne inden for rammen — og intet uden for den. Kilde-PDF'en følger ikke med."
      },
      {
        "title": "Et stillads af begreber",
        "body": "Strukturen under blækket: hvilke begreber der er, hvilket emne hvert af dem hører under, og hvad der forudsætter hvad. Det er den, der gør et ark til noget, man kan lære af, og ikke bare læse."
      },
      {
        "title": "En opskrift på nye kort",
        "body": "Ikke forfatterens hukommelse — en opskrift på at bygge din egen: den fastholdelse, arket sigter efter, hvilken slags stof det er, og hvornår første repetition skal ligge. Din plan bliver lagt ud fra den, når du installerer."
      }
    ]
  },
  "install": {
    "kicker": "Installation",
    "title": "Forskellen på at eje en fil<br />og at have en dato i kalenderen.",
    "paragraphs": [
      "At hente studiemateriale har aldrig været det svære. Det svære er at komme tilbage til det den dag, hvor du var ved at glemme det, og det har ingen mappe nogensinde løst.",
      "Derfor lægger en installation ikke bare et dokument et sted. Den planter kort med datoer på. Du arver forfatterens begreber og strukturen mellem dem — aldrig historikken, sikkerheden eller hvor godt vedkommende selv kunne stoffet. Formatet kan ikke bære den slags."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Siden lander som blæk",
        "body": "Arket bliver genskabt i et canvas, der er dit. Det er håndskrift på papir, ikke en renderet PDF: du kan skrive oven i det, tegne videre og skære det op."
      },
      {
        "step": "02",
        "title": "Hvert begreb bliver til et kort",
        "body": "Ét nyt kort til distribueret repetition for hvert navngivet begreb, uden historik bag sig: nul repetitioner og en sværhedsgrad midt i Flueras skala. Første repetition ligger dagen efter."
      },
      {
        "step": "03",
        "title": "Derfra er planen din",
        "body": "Den bliver gemt på disken og styrer dit mærke for forfaldne kort og dagens opsamling på samme måde som alt det, du selv har skrevet. Installerer du den samme skabelon igen, nulstiller det ikke den historik, du allerede har bygget op."
      }
    ]
  },
  "ranking": {
    "kicker": "Rangeringen",
    "title": "Sorteret efter det, der sad fast.<br />Ikke efter det, der spredte sig.",
    "sub": "Et downloadtal måler en beslutning, der blev truffet, før nogen havde lært noget. Det er også det tal, der er nemmest at puste op i enhver butik. Fluera kan sortere efter noget bedre, for appen holder allerede regnskab med, hvor godt hver enkelt lærende holder fast i hvert enkelt begreb.",
    "items": [
      {
        "label": "Målt på enheden",
        "body": "Når du åbner en skabelons canvas igen på dag 1, 7 og 30 eller senere, aflæser Fluera, hvor godt modellen for distribueret repetition mener, du holder fast i netop de begreber, og samler det i ét tal."
      },
      {
        "label": "Ét tal, og ikke andet",
        "body": "Tallet er alt, hvad der bliver sendt. Ingen titler på begreber, intet indhold fra kortene, ingen historik, ingen identitet. Det bliver kun sendt, hvis du er logget ind og har sagt ja til at dele brugsstatistik — og aldrig, hvis skabelonen er din egen."
      },
      {
        "label": "Tavs indtil fem lærende",
        "body": "En skabelon får slet ikke noget offentligt tal, før mindst fem forskellige lærende har bidraget med et. Under den grænse sorterer vi efter antal installationer, og kortet siger ingenting."
      },
      {
        "label": "Downloads afgør ikke rækkefølgen",
        "body": "Listen under »Alle skabeloner« er som udgangspunkt sorteret efter det målte signal, ikke efter popularitet. En skabelon, der spreder sig hurtigt, kan ikke købe sig frem i rækken."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Hvad det ikke er.</strong> Det er et skøn fra en model over, hvor godt en skabelons begreber sidder hos de lærende, der kom tilbage for at studere dem. Ikke et eksamensresultat. Ikke en kontrolgruppe. Og ikke en påstand om nogen, der installerede en skabelon og aldrig åbnede den igen. Vi beskriver hellere signalet, som det er, end vi pynter på det."
  },
  "discovery": {
    "kicker": "At finde den rigtige",
    "title": "Tre filtre sætter du selv.<br />Ét kan kun din egen enhed sætte.",
    "sub": "Et katalog med studiemateriale går galt på en helt bestemt måde: alt handler på papiret om dit fag, og næsten intet handler om dit kursus. Derfor er filtrene dem, studerende faktisk tænker i.",
    "paragraphs": [
      "Du kan snævre ind efter <strong class=\"text-paper-100\">fag</strong>, efter <strong class=\"text-paper-100\">kursus eller eksamen</strong> — fri tekst, så <em>Maturità</em> og <em>MCAT</em> tæller lige så meget som <em>Analyse 1</em> — og efter <strong class=\"text-paper-100\">sprog</strong>. Hvert filter viser, hvor meget der ligger bag det, og alle filtre bliver regnet om, så snart du vælger noget. Er der intet bag et filter, dukker det slet ikke op. Du bliver aldrig tilbudt et valg, der ender på en tom side.",
      "Kataloget åbner på det sprog, appen er sat til, for en mur af tekst, du ikke kan læse, er ikke et katalog. Det er en indstilling, ikke et hegn: ét tryk åbner det for alle sprog.",
      "Søgningen tager hele teksten med og er ligeglad med accenter. Den lægger også rangeringen fra sig og sorterer efter relevans i stedet — når du selv har skrevet, hvad du leder efter, er det ikke længere andres fastholdelse, du spørger om."
    ],
    "marksHeading": "Hvad mærkerne på et kort betyder",
    "marks": [
      {
        "mark": "Officiel",
        "body": "Sat af kataloget, aldrig af noget, en forfatter kan taste ind i et felt. Man kan ikke skrive sig til det med et visningsnavn."
      },
      {
        "mark": "Ny",
        "body": "Skal fortjenes: ingen installationer, ingen bedømmelser, udgivet inden for den seneste uge. Mærket udløber af sig selv i stedet for at skulle slås fra."
      },
      {
        "mark": "Fag",
        "body": "Det fag, skabelonen er lagt ind under, så du med ét blik kan se forskel på en kemiside og en, der bare grænser op til kemi."
      },
      {
        "mark": "Bedømmelse",
        "body": "Vises først, når nogen faktisk har bedømt skabelonen — og kun folk, der har installeret den, kan gøre det. En skabelon uden bedømmelser siger ingenting frem for at starte på nul."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Og én række, ingen andre kunne bygge.</strong> Fluera ved allerede, hvilke begreber du arbejder med, for du har selv skrevet dem. Derfor kan den sortere skabeloner efter, hvor meget de overlapper med det, der ligger på dit canvas lige nu — og det regnestykke bliver løst på din enhed. Det, der forlader telefonen, er det fag, du studerer mest, og id'erne på de skabeloner, den allerede havde hentet. Selve sættet af begreber bliver, hvor det er."
  },
  "privacy": {
    "kicker": "Hvad der følger med, og hvad der ikke gør",
    "title": "Du udgiver siden, ikke hvordan det gik dig med den.",
    "sub": "At dele studiemateriale er at dele noget, du lavede, mens du selv var i gang med at lære det. Grænsen mellem de to ting er trukket i kode, ikke i et afsnit i en politik.",
    "items": [
      {
        "title": "Din læringsmodel ligger ikke i filen",
        "body": "Den del af appen, der bygger det offentlige stillads, læser aldrig — rent strukturelt — din historik, din sikkerhed, hvor mange gange du har været stoffet igennem, hvor godt du holdt fast i det, eller de vektorer, der ligger bag. En ekspert og en, der stadig kæmper med stoffet, sender byte for byte det samme stillads, når de udgiver den samme side."
      },
      {
        "title": "En test holder grænsen, i CI",
        "body": "Garantien er spændt fast af en test, der går det serialiserede output igennem og fejler, hvis bare ét af seksogtyve feltnavne fra læringsmodellen eller adfærdsdataene dukker op i det. Den kører som en navngiven kontrol i CI, der ikke kan slås fra, og som også fejler, hvis testfilen forsvinder."
      },
      {
        "title": "Blækket er den ærlige grænse",
        "body": "Ingen rensning når ind til selve håndskriften, og stilladset bærer et uddrag af den genkendte tekst med sig — afkortet, aldrig hele afskriften, men heller ikke sløret. Derfor viser udgivelsespanelet dig præcis det billede, der vil blive offentligt, med et samtykkefelt under, før noget som helst bliver sendt af sted."
      },
      {
        "title": "Dit navn bliver aldrig dit brugernavn",
        "body": "Offentlige opslag udleverer slet ikke noget konto-id, og en skaber optræder under et navn, der er udledt envejs fra kontoen: saltet, hashet og afkortet. Det er et fast pseudonym, ikke din identitet."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Læs sikkerhedsarkitekturen →"
    }
  },
  "creators": {
    "kicker": "Til skabere",
    "title": "Den bedste forklaring på noget svært<br />fylder som regel én side.",
    "paragraphs": [
      "Udgivelsen begynder på dit eget canvas. Du rammer det stykke ind, der er værd at dele, Fluera pakker det, og et panel spørger, om det skal blive til en fil eller et opslag. Det, du rammer ind, er det, der følger med. Resten af canvasset kommer aldrig ud.",
      "Før noget bliver sendt af sted, ser du præcis det billede, der vil blive offentligt, og siger god for det. Opslaget bliver valideret, før en eneste byte bliver gemt, og filerne bliver lagt op gennem signerede adresser til engangsbrug; går det galt undervejs, bliver opslaget rullet tilbage frem for at ligge halvfærdigt.",
      "Alle skabeloner er gratis. Der er ingen kasse i Fluera, intet prisfelt i udgivelses-API'et og intet regnskab over udbetalinger — priskolonnen i kataloget er sømmet fast på nul af en regel i databasen, ikke af en politik."
    ],
    "heading": "Det får du ud af at udgive",
    "benefits": [
      "Et pseudonymt skabernavn, der aldrig er din konto og aldrig din e-mail",
      "En valgfri profil — visningsnavn, kort tekst om dig, profilbillede — hvor billedet holdes tilbage, til det er screenet",
      "Følgere og en hylde, der bærer din nyeste skabelon ud til dem",
      "Versionering: udgiv en rettelse som en afløser frem for en dublet",
      "En begrundelse, hver gang en afgørelse går dig imod, og en klage, der kan omgøre den"
    ],
    "note": "Udgivelse kræver, at du er logget ind, og at du bekræfter din alder. At kigge og installere kræver ingen af delene."
  },
  "safety": {
    "kicker": "Moderation og tillid",
    "title": "Et katalog fyldt med fremmedes håndskrift<br />skal kunne svare for sig.",
    "sub": "Alle kan åbne et katalog. Arbejdet ligger i, hvad der sker, når noget går galt — og i at sikre, at det ikke er den mest højrøstede gruppe i rummet, der afgør sagen.",
    "items": [
      {
        "label": "Intet bliver slået op med det samme",
        "body": "En ny skabelon bliver oprettet som afventende gennemgang. Indtil den er screenet, findes den hverken i oversigten, i søgningen eller i kataloget, og dens delelink fører ingen steder hen."
      },
      {
        "label": "Screeningen læser den rigtige fil",
        "body": "Klassifikatoren trækker billederne ud af selve skabelonen frem for at stole på det miniaturebillede, der blev sendt med. Den tager den strengeste dom af dem alle, og den kører i EU-regioner. Den kan sende en sag videre eller op; den kan aldrig omgøre en moderator."
      },
      {
        "label": "Indberetninger går til mennesker, ikke til robotter",
        "body": "En indberetning er et signal ind i en kø, mennesker kigger på — én pr. person, og du kan ikke indberette dig selv. En koordineret gruppe kan skabe opmærksomhed. Den kan ikke få et opslag fjernet."
      },
      {
        "label": "Fjernelse fjerner selve filerne",
        "body": "Når et opslag bliver fjernet, bliver de offentliggjorte filer slettet fra CDN'et og ikke bare taget af listen — efter at dokumentationen er lagt til side i et privat lager, kun administratorer har adgang til."
      },
      {
        "label": "En afgørelse kommer med en begrundelse",
        "body": "Skaberen får at vide, hvad der skete med skabelonen, og om afgørelsen blev truffet automatisk, og kan klage. Får klagen medhold, kommer opslaget op igen."
      },
      {
        "label": "Bedømmelser skal fortjenes",
        "body": "Du kan ikke bedømme en skabelon, du aldrig har installeret, du kan ikke bedømme din egen, og du kan ikke bedømme anonymt. Gennemsnittene bliver regnet forfra hver gang i stedet for at blive talt op."
      }
    ]
  },
  "status": {
    "kicker": "Tilgængelighed",
    "title": "Kataloget følger med appen.<br />Det er lige begyndt.",
    "paragraphs": [
      "At kigge, se forhåndsvisninger og installere er bygget ind i Fluera og oversat til alle seksten sprog, appen taler. Udgivelse er også åben for voksne, der er logget ind, og vi lukker den op langsomt med vilje: at være vært for andres arbejde er et ansvar, man tager på sig ordentligt eller slet ikke.",
      "Derfor er kataloget lille, og derfor står der hverken antal skabeloner, antal installationer eller antal skabere på denne side. De tal kommer til at betyde noget en dag. I dag ville de kun være pynt."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Anmod om tidlig adgang →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Download Fluera"
      }
    ]
  }
};

export default data;

