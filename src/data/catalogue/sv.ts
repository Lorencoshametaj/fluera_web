import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Katalog — studiemallar som installeras i minnet",
    "description": "En studiemall är en handskriven sida och strukturen under den. Installera en och få ett eget repetitionsschema. Rankade efter vad som fastnade.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flueras katalog",
    "description": "En katalog med handskrivna studiemallar som installeras som scheman för distribuerad repetition, rankade efter uppmätt retention i stället för nedladdningar.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "sv"
  },
  "hero": {
    "kicker": "Katalog",
    "title": "Någon har redan knäckt det här kapitlet.<br />Installera det, så blir du förhörd på det.",
    "description": "En studiemall i Fluera är varken en PDF eller en kortlek med flashcards. Det är en sida med riktig handskrift, konceptstrukturen under den och ett recept på det repetitionsschema du borde följa. Installerar du en, planteras schemat i en canvas som är din egen.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Begär tidig åtkomst →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Så fungerar repetitionsschemat"
      }
    ]
  },
  "unit": {
    "kicker": "Byggstenen",
    "title": "Tre saker packas ner. Författaren stannar hemma.",
    "sub": "Alla andra butiker skickar dig ett dokument och önskar dig lycka till. En studiemall bär med sig sidan, strukturen som gör sidan möjlig att lära sig av och anvisningen för hur den ska repeteras. Men inte den del som tillhör den som skrev den — och det är med flit.",
    "items": [
      {
        "title": "Ett avgränsat arbetsblad",
        "body": "Inte en hel anteckningsbok — en yta som författaren ramade in på sin egen canvas. Penndragen, formerna, den skrivna texten och bilderna innanför ramen. Ingenting utanför den. Ingen käll-PDF följer med."
      },
      {
        "title": "En konceptstomme",
        "body": "Strukturen under bläcket: vilka koncepten är, vilket ämne vart och ett hör till och vilka som bygger på vilka. Det är stommen som skiljer en mall du kan lära dig av från en sida du bara kan läsa."
      },
      {
        "title": "Ett recept på nya kort",
        "body": "Inte författarens minne — ett recept för att bygga ditt eget. Önskad retention, vilken sorts material det är och när första repetitionen ska infalla. Ur det byggs ditt schema när du installerar."
      }
    ]
  },
  "install": {
    "kicker": "Att installera",
    "title": "En fil ligger stilla.<br />Ett schema hämtar dig.",
    "paragraphs": [
      "Att ladda ner studiematerial har aldrig varit det svåra. Det svåra är att komma tillbaka till det just den dag du höll på att glömma bort det, och den saken har ingen mapp någonsin löst.",
      "Därför lägger en installation inte undan ett dokument någonstans. Den planterar kort, med datum på. Du ärver författarens koncept och strukturen mellan dem — aldrig repetitionshistoriken, säkerheten eller hur väl författaren själv kunde stoffet. Det ryms inte i formatet."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Sidan kommer som bläck",
        "body": "Arbetsbladet återskapas i en canvas som är din. Riktig handskrift på riktigt papper, inte en renderad PDF — du kan skriva ovanpå, bygga vidare och klippa isär."
      },
      {
        "step": "02",
        "title": "Varje koncept blir ett kort",
        "body": "Ett splitternytt repetitionskort per namngivet koncept, utan historik bakom sig: noll repetitioner och en startsvårighet mitt i Flueras skala. Första repetitionen infaller en dag senare."
      },
      {
        "step": "03",
        "title": "Från och med då är schemat ditt",
        "body": "Det sparas på disk och räknas in i antalet förfallna kort och i ditt dagliga sammandrag, precis som allt annat du skrivit. Installerar du om samma mall nollställs inte den historik du redan byggt upp."
      }
    ]
  },
  "ranking": {
    "kicker": "Rankningen",
    "title": "Sorterad efter vad som fastnade.<br />Inte efter vad som spreds.",
    "sub": "En nedladdningssiffra mäter ett beslut som fattades innan någon hade lärt sig något. Den är dessutom den siffra som är enklast att blåsa upp i vilken butik som helst. Fluera kan ranka efter något bättre, eftersom appen redan modellerar hur väl varje studerande håller kvar varje koncept.",
    "items": [
      {
        "label": "Mäts på enheten",
        "body": "Öppnar du en malls canvas igen på eller efter dag 1, 7 och 30 läser Fluera av hur väl modellen för distribuerad repetition tror att du håller kvar just de koncepten. Ur det härleds ett enda tal."
      },
      {
        "label": "Ett tal, inget mer",
        "body": "Talet är allt som skickas. Inga konceptnamn, inget kortinnehåll, ingen repetitionshistorik, ingen identitet. Det lämnar enheten bara om du är inloggad och har tackat ja till analysdata — och aldrig om du själv skrev mallen."
      },
      {
        "label": "Tyst under fem studerande",
        "body": "En mall har ingen offentlig siffra alls förrän minst fem olika studerande har bidragit med en. Under den tröskeln sorteras mallarna i stället efter antal installationer, och kortet i katalogen säger helt enkelt ingenting."
      },
      {
        "label": "Nedladdningar är inte rankningen",
        "body": "Rutnätet under ”Alla mallar” sorteras som standard efter den uppmätta signalen, inte efter popularitet. En mall som sprids fort kan inte köpa sig uppåt."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Vad det här inte är.</strong> Det är en modells uppskattning av hur väl en malls koncept sitter kvar hos de studerande som kom tillbaka och pluggade på dem — inte ett tentaresultat, inte en kontrollgrupp och inget påstående om någon som installerade en mall och aldrig öppnade den igen. Vi vill hellre beskriva signalen som den är än snygga till den."
  },
  "discovery": {
    "kicker": "Att hitta rätt",
    "title": "Tre sätt att sålla,<br />och ett som bara din egen enhet klarar.",
    "sub": "En katalog med studiematerial brister på ett bestämt sätt: allt handlar på pappret om ditt ämne och nästan ingenting om just din kurs. Därför följer filtren hur studerande faktiskt tänker.",
    "paragraphs": [
      "Du kan sålla på <strong class=\"text-paper-100\">ämne</strong>, på <strong class=\"text-paper-100\">kurs eller prov</strong> — fritext, så <em>Maturità</em> och <em>MCAT</em> går lika bra som <em>Analys I</em> — och på <strong class=\"text-paper-100\">språk</strong>. Varje filter visar hur många träffar det ger, varje val räknar om de andras siffror, och ett filter utan något bakom sig visas inte alls. Du erbjuds aldrig ett val som leder till en tom sida.",
      "Katalogen öppnas på det språk appen står på, för en vägg av material du inte kan läsa är ingen katalog. Det är en inställning, inte ett stängsel: ett tryck öppnar den för alla språk.",
      "Sökningen är fritext och överseende med accenter. Den släpper dessutom rankningen och ordnar efter relevans i stället — har du väl skrivit vad du letar efter frågar du inte längre efter vad andra behöll."
    ],
    "marksHeading": "Vad märkena på ett kort står för",
    "marks": [
      {
        "mark": "Officiell",
        "body": "Sätts av katalogen, aldrig av något en författare kan skriva in i ett formulär. Inget visningsnamn i världen ger dig den."
      },
      {
        "mark": "Ny",
        "body": "Måste förtjänas: inga installationer, inga betyg, publicerad den senaste veckan. Den löper ut av sig själv, ingen stänger av den."
      },
      {
        "mark": "Ämne",
        "body": "Ämnet mallen sorterats in under, så att du med en blick skiljer en kemisida från en som bara gränsar till kemi."
      },
      {
        "mark": "Betyg",
        "body": "Visas först när en mall verkligen har fått betyg, och bara från personer som installerat den. En obetygsatt mall säger ingenting i stället för att börja på noll."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Och en rad ingen annan kunde bygga.</strong> Fluera vet redan vilka koncept du arbetar med, eftersom du skrev dem. Alltså kan appen ranka mallar efter hur mycket de överlappar med det som ligger på din canvas just nu — och den uträkningen sker på din enhet. Det som lämnar enheten är ämnet du studerar mest och id:n för de mallar appen redan hämtat. Koncepten själva stannar kvar."
  },
  "privacy": {
    "kicker": "Vad som följer med och vad som stannar",
    "title": "Att publicera en sida ska inte publicera hur du låg till.",
    "sub": "Att dela studiematerial är att dela något du gjorde medan du fortfarande höll på att lära dig det. Gränsen mellan de två dras i kod, inte i en policytext.",
    "items": [
      {
        "title": "Din inlärningsmodell finns inte i filen",
        "body": "Rent strukturellt läser komponenten som bygger en malls offentliga stomme aldrig din repetitionshistorik, din säkerhet, hur många gånger du övat på något, hur väl du hållit kvar det eller inbäddningarna bakom. Om en expert och en författare som kämpar publicerar samma sida skickar de ut en byte-identisk stomme."
      },
      {
        "title": "Ett test håller linjen — i CI",
        "body": "Testet går igenom hela den serialiserade utdatan och faller om något av tjugosex fältnamn ur inlärningsmodellen eller beteendedatan dyker upp någonstans i den. Det körs som en namngiven, obligatorisk grind i CI — och faller även om testfilen raderas."
      },
      {
        "title": "Bläcket är den ärliga gränsen",
        "body": "Det ingen sanering kommer åt är handskriften själv, och stommen bär faktiskt med sig ett kort, avklippt utdrag ur den igenkända texten — aldrig hela transkriptionen, men inte heller maskerat. Därför visar publiceringsvyn exakt den bild som skulle bli offentlig, ovanför en samtyckesruta, innan något laddas upp."
      },
      {
        "title": "Ditt namn blir aldrig ditt alias",
        "body": "Offentliga uppslagningar lämnar aldrig ut något konto-id, och som skapare identifieras du med en kod som härletts envägs ur kontot — saltad, hashad och avkortad. En stabil pseudonym, inte din identitet."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Läs säkerhetsarkitekturen →"
    }
  },
  "creators": {
    "kicker": "För dig som publicerar",
    "title": "Den bästa förklaringen av en svår sak<br />får oftast plats på en sida.",
    "paragraphs": [
      "Publiceringen börjar på din egen canvas. Du ramar in det som är värt att dela, Fluera gör en mall av det, och en vy frågar om den ska bli en fil eller hamna i katalogen. Det du ramar in är det som följer med — resten av canvasen stannar hos dig.",
      "Innan något laddas upp ser du exakt den bild som skulle bli offentlig, och bekräftar den. Mallen valideras innan en enda byte lagras, och uppladdningen går via signerade engångslänkar. Misslyckas den rullas publiceringen tillbaka i stället för att lämnas halvfärdig.",
      "Varje mall är gratis. Det finns ingen kassa i Fluera, inget prisfält i publicerings-API:et och ingen utbetalningsreskontra — priskolumnen i katalogen hålls på noll av ett databasvillkor, inte av en policy."
    ],
    "heading": "Vad publicering ger dig",
    "benefits": [
      "Ett pseudonymt skaparalias som varken är ditt konto eller din e-post",
      "En valfri profil — visningsnamn, presentation, avatar — där avataren hålls tillbaka tills den granskats",
      "Följare, och en hylla som bär din senaste mall till dem",
      "Versionering: publicera en rättelse som en ersättning, inte som en dubblett",
      "Ett skäl varje gång ett beslut går emot dig, och en överklagan som kan sätta tillbaka mallen"
    ],
    "note": "Att publicera kräver inloggat konto och en åldersbekräftelse. Att bläddra och installera kräver ingetdera."
  },
  "safety": {
    "kicker": "Moderering och tillit",
    "title": "En katalog med främlingars handstil<br />måste kunna stå till svars.",
    "sub": "Vem som helst kan öppna en katalog. Arbetet ligger i vad som händer när något går fel — och i att se till att den som skriker högst inte är den som bestämmer.",
    "items": [
      {
        "label": "Ingenting syns när du skickar in",
        "body": "En ny mall skrivs in som väntande på granskning. Innan den är granskad saknas den helt — i bläddringen, i sökningen och i katalogen — och delningslänken leder ingenstans."
      },
      {
        "label": "Granskningen läser den riktiga filen",
        "body": "Klassificeraren plockar ut bilderna som ligger inbäddade i själva mallen i stället för att lita på uppladdarens miniatyrbild, tar det sämsta utfallet av dem och körs i EU-regioner. Den kan släppa fram eller eskalera ett ärende. Den kan aldrig köra över en moderator."
      },
      {
        "label": "Anmälningar går till människor, inte till robotar",
        "body": "En anmälan är en signal in i en mänsklig kö — en per anmälare, självanmälningar nekas. En samordnad grupp kan väcka uppmärksamhet. Den kan inte plocka bort en mall."
      },
      {
        "label": "Borttaget är borttaget",
        "body": "När en mall tas bort avlistas den inte bara: de publicerade objekten raderas från CDN:en — efter att bevisen sparats i en privat bucket som bara administratörer når."
      },
      {
        "label": "Varje beslut kommer med ett skäl",
        "body": "Du får veta vad som hände med din mall och om beslutet fattades automatiskt, och du kan överklaga. Går överklagan igenom hamnar mallen tillbaka i katalogen."
      },
      {
        "label": "Betyg måste förtjänas",
        "body": "Du kan inte betygsätta en mall du aldrig installerat, du kan inte betygsätta din egen och du kan inte betygsätta anonymt. Medelvärdena räknas om från grunden i stället för att räknas upp."
      }
    ]
  },
  "status": {
    "kicker": "Tillgänglighet",
    "title": "Katalogen följer med appen.<br />Den har just börjat.",
    "paragraphs": [
      "Att bläddra, förhandsgranska och installera finns inbyggt i Fluera, på alla sexton språk appen talar. Publiceringen är igång den också, för inloggade vuxna, och vi öppnar den långsamt med flit: att vara värd för andras arbete är ett ansvar man tar på allvar eller låter bli.",
      "Katalogen är alltså liten, och den här sidan har ingen siffra för antal mallar, installationer eller skapare. De siffrorna kommer att betyda något längre fram. I dag vore de bara dekor."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Begär tidig åtkomst →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Ladda ner Fluera"
      }
    ]
  }
};

export default data;

