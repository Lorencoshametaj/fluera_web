import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catalogus — Studiesjablonen die je in je geheugen installeert",
    "description": "Een studiesjabloon is handschrift plus de conceptstructuur eronder. Je installeert er een herhalingsschema mee. Geordend op wat beklijft, niet op downloads.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "De Fluera-catalogus",
    "description": "Een catalogus van handgeschreven studiesjablonen die zich installeren als schema's voor gespreide herhaling, geordend op gemeten retentie in plaats van op downloads.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "nl"
  },
  "hero": {
    "kicker": "Catalogus",
    "title": "Iemand heeft dit hoofdstuk al uitgedokterd.<br />Installeer het en laat je erop overhoren.",
    "description": "Een Fluera-studiesjabloon is geen PDF en geen stapel flashcards. Het is een pagina echt handschrift, de conceptstructuur die eronder ligt, en een recept voor het herhalingsschema dat je zou moeten volgen. Installeren plant dat schema in een eigen canvas.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Vroege toegang aanvragen →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Zo werkt het herhalingsschema"
      }
    ]
  },
  "unit": {
    "kicker": "De eenheid",
    "title": "Er gaan drie dingen mee. De auteur blijft thuis.",
    "sub": "Elke andere winkel stuurt je een document en wenst je verder veel succes. Een studiesjabloon draagt de pagina, de structuur die de pagina leerbaar maakt en de instructies om hem in te plannen — met opzet zonder het deel dat van de maker zelf is.",
    "items": [
      {
        "title": "Een afgebakend werkblad",
        "body": "Geen heel notitieboek — een gebied dat de auteur op het eigen canvas heeft afgebakend. De streken, vormen, getypte tekst en afbeeldingen die daarbinnen vallen, en niets daarbuiten. De bron-PDF blijft achter."
      },
      {
        "title": "Een conceptraamwerk",
        "body": "De structuur onder de inkt: welke concepten er zijn, bij welk onderwerp ze horen en hoe ze van elkaar afhangen. Dat maakt een sjabloon leerbaar en niet alleen leesbaar."
      },
      {
        "title": "Een recept voor nieuwe kaarten",
        "body": "Niet het geheugen van de auteur — een recept om je eigen geheugen op te bouwen. Gewenste retentie, het soort materiaal en wanneer de eerste herhaling moet vallen. Zodra je installeert, bouwt Fluera daaruit jouw schema."
      }
    ]
  },
  "install": {
    "kicker": "Installeren",
    "title": "Een bestand blijft liggen.<br />Een schema komt terug.",
    "paragraphs": [
      "Studiemateriaal downloaden was nooit het moeilijke deel. Erop terugkomen op de dag dat je het bijna vergeten was, dat is het moeilijke deel — en dat heeft geen enkele map ooit opgelost.",
      "Een sjabloon installeren zet dus geen document ergens neer. Het plant kaarten, met een datum erop. Je erft de concepten van de auteur en de structuur ertussen — nooit de herhalingsgeschiedenis van de auteur, diens zekerheid of hoe goed die het zelf kende. Het sjabloonformaat kan dat niet dragen."
    ],
    "steps": [
      {
        "step": "01",
        "title": "De pagina komt binnen als inkt",
        "body": "Het werkblad landt in een eigen canvas. Echt handschrift op echt papier, geen gerenderde PDF — je kunt eroverheen schrijven, het uitbreiden en het uit elkaar knippen."
      },
      {
        "step": "02",
        "title": "Elk concept wordt een kaart",
        "body": "Eén gloednieuwe kaart voor gespreide herhaling per benoemd concept, zonder enige geschiedenis erachter: nul herhalingen, en een startmoeilijkheid midden in het bereik van Fluera. De eerste herhaling valt één dag later."
      },
      {
        "step": "03",
        "title": "Vanaf dat moment is het schema van jou",
        "body": "Het staat op schijf en voedt je teller met openstaande herhalingen en je dagelijkse overzicht, net als alles wat je zelf hebt geschreven. Installeer je hetzelfde sjabloon nog eens, dan blijft de herhalingsgeschiedenis die je al hebt opgebouwd gewoon staan."
      }
    ]
  },
  "ranking": {
    "kicker": "De ordening",
    "title": "Geordend op wat beklijft.<br />Niet op wat rondgaat.",
    "sub": "Een downloadteller meet een beslissing die iemand nam voordat hij ook maar iets geleerd had. Het is bovendien het getal dat in elke winkel het makkelijkst is op te blazen. Fluera kan op iets beters ordenen, want de app modelleert toch al hoe goed elke lerende elk concept vasthoudt.",
    "items": [
      {
        "label": "Gemeten op het apparaat",
        "body": "Open je het canvas van een sjabloon op of na dag 1, 7 en 30, dan leest Fluera af hoe goed het model voor gespreide herhaling inschat dat jij die specifieke concepten vasthoudt, en leidt daar één getal uit af."
      },
      {
        "label": "Eén getal, verder niets",
        "body": "Meer dan dat getal vertrekt er niet. Geen concepttitels, geen kaartinhoud, geen herhalingsgeschiedenis, geen identiteit. Het vertrekt alleen als je bent ingelogd en analytics hebt aangezet, en nooit als je zelf de auteur van het sjabloon bent."
      },
      {
        "label": "Met minder dan vijf lerenden zwijgt de kaart",
        "body": "Een sjabloon krijgt pas een openbaar cijfer als minstens vijf verschillende lerenden er één hebben bijgedragen. Daaronder valt de sortering terug op het aantal installaties, en zegt de kaart eenvoudigweg niets."
      },
      {
        "label": "Downloads zijn de ranglijst niet",
        "body": "Het raster onder ‘Alle sjablonen’ staat standaard gesorteerd op dat gemeten signaal, niet op populariteit. Een sjabloon dat snel rondgaat, kan zich daarin niet omhoog kopen."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Wat dit niet is.</strong> Een model schat hier hoe goed de concepten van een sjabloon blijven hangen bij de lerenden die terugkwamen om ze te studeren — geen tentamenuitslag, geen controlegroep en geen uitspraak over wie een sjabloon installeerde en het daarna nooit meer opende. We beschrijven het signaal liever precies dan dat we het mooier maken."
  },
  "discovery": {
    "kicker": "De juiste vinden",
    "title": "Drie manieren om de catalogus in te perken.<br />De vierde bedenkt je apparaat zelf.",
    "sub": "Een catalogus met studiemateriaal faalt op een heel eigen manier: alles gaat in naam over jouw vakgebied en bijna niets gaat over jouw vak. Daarom filtert de catalogus op precies de dingen waarin studenten zelf denken.",
    "paragraphs": [
      "Je kunt filteren op <strong class=\"text-paper-100\">vakgebied</strong>, op <strong class=\"text-paper-100\">vak of tentamen</strong> — vrije tekst, dus <em>Maturità</em> en <em>MCAT</em> tellen net zo goed als <em>Analyse I</em> — en op <strong class=\"text-paper-100\">taal</strong>. Elk filter draagt een actueel aantal, elk filter rekent de andere opnieuw door zodra je iets kiest, en een filter waar niets achter zit verschijnt niet. Je krijgt nooit een keuze voorgeschoteld die op een lege pagina uitkomt.",
      "De catalogus opent in de taal waarop je app staat, want een muur met materiaal dat je niet kunt lezen is geen catalogus. Het is een voorkeur, geen hek: één tik zet hem open voor alle talen.",
      "Zoeken gaat door de volledige tekst en trekt zich niets aan van accenten. Het laat de ordening ook los en sorteert op relevantie — heb je getypt wat je zoekt, dan is wat anderen onthielden niet langer de vraag."
    ],
    "marksHeading": "Wat de labels op een kaart betekenen",
    "marks": [
      {
        "mark": "Officieel",
        "body": "Dit label zet de catalogus zelf, nooit iets wat een auteur in een formulier typt. Je kunt het er niet met een weergavenaam bij verzinnen."
      },
      {
        "mark": "Nieuw",
        "body": "Niet gegeven, maar verdiend: geen installaties, geen beoordelingen, in de afgelopen week gepubliceerd. Het verloopt vanzelf; niemand zet het uit."
      },
      {
        "mark": "Vakgebied",
        "body": "Het vakgebied waaronder het sjabloon is ingedeeld, zodat je in één oogopslag een scheikundepagina onderscheidt van een pagina die er alleen aan grenst."
      },
      {
        "mark": "Beoordeling",
        "body": "Verschijnt pas als een sjabloon echt beoordeeld is, door mensen die het echt geïnstalleerd hebben. Een onbeoordeeld sjabloon zegt niets in plaats van bij nul te beginnen."
      }
    ],
    "note": "<strong class=\"text-paper-50\">En één rij die niemand anders kan bouwen.</strong> Fluera weet al aan welke concepten je werkt, want jij hebt ze geschreven. Dus kan het sjablonen ordenen naar hoeveel ze overlappen met wat er nu op je canvas staat — en dat rekenwerk gebeurt op je apparaat. Wat je telefoon verlaat, is het vakgebied dat je het meest studeert plus de identificatiecodes van sjablonen die het al heeft opgehaald. Jouw verzameling concepten hoort daar niet bij."
  },
  "privacy": {
    "kicker": "Wat meereist, wat niet",
    "title": "Je deelt de pagina, niet hoe je ervoor stond.",
    "sub": "Studiemateriaal delen betekent iets delen dat je maakte terwijl je het nog aan het leren was. De grens tussen die twee staat in code, niet in een beleidsparagraaf.",
    "items": [
      {
        "title": "Jouw leerdersmodel zit niet in het bestand",
        "body": "De component die het openbare raamwerk van een sjabloon opbouwt, leest structureel nooit je herhalingsgeschiedenis, je zekerheid, hoe vaak je iets studeert, hoe goed je het vasthoudt of de embeddings daarachter. Een expert en iemand die er nog mee worstelt leveren met dezelfde pagina een byte-identiek raamwerk op."
      },
      {
        "title": "Een test bewaakt die grens, in CI",
        "body": "De garantie ligt vast in een test die de geserialiseerde uitvoer doorloopt en faalt zodra een van de zesentwintig veldnamen uit het leerdersmodel of uit je gedrag er ergens in opduikt. Hij draait als benoemde, verplichte CI-gate, die ook faalt als iemand het testbestand weghaalt."
      },
      {
        "title": "De inkt is de eerlijke grens",
        "body": "Geen enkele opschoning komt aan het handschrift zelf. En het raamwerk draagt wél een kort, afgekapt fragment van de herkende tekst mee — nooit de hele transcriptie, maar ook niet weggelakt. Daarom laat het publicatievenster je precies de afbeelding zien die openbaar wordt, boven een toestemmingsvinkje, voordat er iets vertrekt."
      },
      {
        "title": "Je account is nooit je makersnaam",
        "body": "Wie het openbaar opvraagt, krijgt helemaal geen account-id terug; een maker herken je aan een code die in één richting uit het account is afgeleid — gesalt, gehasht, afgekapt. Een stabiel pseudoniem, geen identiteit."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Lees de beveiligingsarchitectuur →"
    }
  },
  "creators": {
    "kicker": "Voor makers",
    "title": "De beste uitleg van een moeilijk idee<br />past meestal op één pagina.",
    "paragraphs": [
      "Publiceren begint op je eigen canvas. Je bakent het gebied af dat het delen waard is, Fluera maakt er een sjabloon van, en een venster vraagt of het een bestand moet worden of een vermelding. Wat je afbakent, gaat mee — de rest van het canvas blijft waar het is.",
      "Voordat er iets vertrekt, zie je precies de afbeelding die openbaar wordt en bevestig je die. Fluera keurt de vermelding voordat er ook maar één byte de opslag in gaat, en de upload loopt via eenmalige ondertekende URL's; mislukt hij, dan draait Fluera de vermelding terug in plaats van hem halfaf te laten staan.",
      "Elk sjabloon is gratis. Er is geen afrekenscherm in Fluera, geen prijsveld in de publicatie-API en geen uitbetalingsadministratie — een databaseconstraint zet de prijskolom van de catalogus op nul, geen beleidsregel."
    ],
    "heading": "Wat publiceren je oplevert",
    "benefits": [
      "Een pseudonieme makersnaam, nooit je account en nooit je e-mailadres",
      "Een profiel als je dat wilt — weergavenaam, bio, avatar — waarbij de avatar pas verschijnt zodra hij gescreend is",
      "Volgers, en een schap dat je nieuwste sjabloon bij hen brengt",
      "Versiebeheer: publiceer een correctie als vervanging, niet als duplicaat",
      "Een reden zodra een beslissing tegen je uitvalt, en een bezwaar dat die beslissing kan terugdraaien"
    ],
    "note": "Voor publiceren heb je een ingelogd account en een leeftijdsbevestiging nodig. Voor bladeren en installeren geen van beide."
  },
  "safety": {
    "kicker": "Moderatie en vertrouwen",
    "title": "Een catalogus vol handschrift van vreemden<br />moet aanspreekbaar zijn.",
    "sub": "Een catalogus opzetten kan iedereen. Het werk begint zodra er iets misgaat — en het zit hem erin dat niet de luidruchtigste groep in de zaal beslist.",
    "items": [
      {
        "label": "Insturen is nog niet publiceren",
        "body": "Een nieuw sjabloon komt binnen met de status ‘wacht op screening’. Tot die screening rond is, duikt het niet op als je bladert, niet in de zoekresultaten en niet in de catalogus, en loopt de deellink dood."
      },
      {
        "label": "De screening leest het echte bestand",
        "body": "De classifier haalt de afbeeldingen uit het sjabloon zelf en vertrouwt niet op de miniatuur van de inzender; van die beelden houdt hij het ongunstigste oordeel aan, en hij draait in EU-regio's. Hij kan een inzending doorlaten of escaleren; over een moderator heen gaan kan hij nooit."
      },
      {
        "label": "Meldingen gaan naar mensen, niet naar robots",
        "body": "Een melding is een signaal in een menselijke wachtrij — één per melder, en jezelf melden kan niet. Een gecoördineerde groep kan de aandacht vergroten, maar krijgt niets offline."
      },
      {
        "label": "Verwijderen wist de bytes",
        "body": "Verdwijnt een vermelding, dan gaan de gepubliceerde objecten echt uit het CDN, niet alleen uit de lijst — nadat het bewijsmateriaal veilig staat in een privébucket die alleen beheerders zien."
      },
      {
        "label": "Een beslissing komt met redenen",
        "body": "Een maker hoort wat er met het sjabloon gebeurd is en of de beslissing geautomatiseerd was, en kan bezwaar maken. Slaagt het bezwaar, dan komt de vermelding terug."
      },
      {
        "label": "Een beoordeling moet je verdienen",
        "body": "Je beoordeelt geen sjabloon dat je nooit hebt geïnstalleerd, je eigen sjabloon niet, en anoniem al helemaal niet. Fluera rekent de gemiddelden opnieuw uit in plaats van ze op te hogen."
      }
    ]
  },
  "status": {
    "kicker": "Beschikbaarheid",
    "title": "De catalogus zit in de app.<br />Hij staat nog aan het begin.",
    "paragraphs": [
      "Bladeren, vooraf bekijken en installeren zitten in Fluera ingebouwd, in alle zestien talen die de app spreekt. Publiceren staat ook open, voor ingelogde volwassenen, en we laten dat met opzet langzaam gaan: het werk van anderen hosten doe je goed of je doet het niet.",
      "De catalogus is dus klein, en op deze pagina staat geen aantal sjablonen, geen aantal installaties en geen aantal makers. Later gaan die getallen iets zeggen. Vandaag zouden ze alleen versiering zijn."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Vroege toegang aanvragen →"
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

