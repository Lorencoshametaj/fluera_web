---
lang: "nl"
title: "Privacy en AI-toestemming"
description: "Welke data Fluera verzamelt, welke toestemming je geeft, en hoe je alles uitzet."
section: settings
sectionLabel: "Instellingen"
order: 1
updatedAt: 2026-10-23
---

Fluera is een local-first tool. Standaard verlaat niets je apparaat tenzij je expliciet een functie aanzet die dat nodig heeft.

## De vier toestemmingscategorieën

Open **Instellingen → Privacy**. Je ziet vier toggles, alle standaard uit:

- **Productanalytics.** Gebruiksdata gekoppeld aan de ID van je account, zodat je ze kunt zien en wissen — gebruik van functies, sessieduur, duur van AI-aanroepen. Nooit inhoud. Maximaal 180 dagen bewaard.
- **AI-functies.** Vereist om Socratic, Ghost Map, LaTeX OCR en Fog of War te gebruiken. Geselecteerde tekst van het canvas wordt naar Google Gemini-modellen gestuurd, geserveerd via Google Vertex AI en verwerkt in de EU (2.5-modellen in de regio's europe-west4 NL / europe-west1 BE, 3.x-modellen op het EU-multiregio-endpoint van Vertex AI): de gegevens blijven in de EU-lidstaten. Nooit het hele canvas.
- **Cloud sync.** Vereist om canvasses tussen apparaten te synchroniseren. Gesynchroniseerde data is versleuteld tijdens transport (TLS) en in rust op EU-infrastructuur (Supabase, eu-north-1). De sync is niet end-to-end versleuteld: Fluera kan de inhoud als verwerkingsverantwoordelijke benaderen, maar verkoopt deze nooit en gebruikt deze nooit voor advertenties. Met het Cloud-abonnement neemt **Synchroniseren tussen je apparaten** (hieronder) ook je studie en je instellingen mee.
- **Crashrapportage.** Stack traces en apparaatmetadata wanneer de app crasht. Geen gebruikersinhoud. Verwerkt door Sentry met `sendDefaultPii: false`.

Elke toggle is onafhankelijk. Je kunt Cloud Sync aanzetten zonder Analytics. Je kunt AI gebruiken zonder Crash Reporting. De permissies zijn bewust granulair.

## Cognitief geheugen (op het apparaat, opt-out)

Los van de vier cloud-toestemmingen hierboven: standaard indexeert Fluera je notities **op je apparaat** voor automatische titels, de conceptkaart (Ghost Map) en gespreide herhaling (FSRS). De index wordt op je apparaat opgebouwd en berekend en blijft daar, tenzij je **Synchroniseren tussen je apparaten** aanzet (volgende sectie): dan gaan je herhaalkaarten met de geschiedenis van je antwoorden, je concepten, de conceptkaart en de titels van je notitiegroepen via de cloud van Fluera naar je andere apparaten. Je kunt het geheugen uitzetten in **Instellingen → Privacy → Cognitief geheugen**: het indexeren stopt en de cognitieve gegevens op dit apparaat worden meteen gewist (je notities blijven intact); gebruik je Synchroniseren tussen je apparaten, dan worden ook de kopieën in de cloud gewist, en gaat er niets meer heen tot je het weer aanzet. Rechtsgrond: gerechtvaardigd belang met recht van bezwaar (AVG art. 6.1.f / 21) — daarom staat het standaard aan en is het opt-out, geen opt-in-toestemming zoals de vier hierboven.

## Synchroniseren tussen je apparaten (Cloud-abonnement)

De schakelaar **Instellingen → Gegevens en synchronisatie → Synchroniseren tussen je apparaten** staat uit tot je hem aanzet. Hij vraagt een account en het Cloud-abonnement, en geldt voor je hele account: aan op één apparaat betekent aan op elk apparaat waarop je inlogt. Als je hem aanzet, legt de server de datum vast en de versie van het privacybeleid die je voor je had. Rechtsgrond: overeenkomst (AVG art. 6.1.b) — het is de Cloud-dienst waarvoor je betaalt.

- **Wat naar de cloud gaat, alleen zolang hij aan staat:** hele canvassen (lijnen, secties, formules, pdf's met de markeringen uit de lezer, foto's); opgenomen colleges (de audio, in stukken); de studie van elk canvas (herhaalkaarten met je antwoorden, concepten, examens met hun inkt, de socratische tutor, de chat, het ophalen, cursussen); de mappen van de galerij (met hun namen), de map van elk canvas, de vastgezette, de labels en de Prullenbak; de tekst die Fluera in je handschrift herkende; je keuzes in de instellingen (uiterlijk, taal, papier, herhaling, kleuren, gum en dergelijke). Instellingen die bij één apparaat horen (hand, handpalm, pen, venster) blijven daar.
- **Wat altijd op het apparaat blijft:** de geschiedenis van het canvas (Time Travel) en ongedaan maken.
- **Wie het ziet:** jij. Op een canvas dat je deelt, zien de leden het canvas en de titels van notitiegroepen; je studie zie alleen jij.
- **Waar:** Supabase, EU-regio `eu-north-1` (Stockholm), versleuteld tijdens overdracht en in rust, **niet** end-to-end versleuteld.
- **Uitzetten** op welk apparaat ook stopt het op alle apparaten en wist niets. Hetzelfde geldt als je de toestemming voor Cloud sync intrekt.
- **Als het Cloud-abonnement afloopt,** pauzeert de synchronisatie en blijft alles 6 maanden te downloaden. Daarna kunnen we de audio van colleges, pdf's en foto's boven de 500 MB van het Free-abonnement verwijderen, de oudste eerst; de inkt van je canvassen blijft.
- **Wissen:** **Definitief verwijderen** bij een canvas in de **Prullenbak** haalt het uit de cloud met wat erbij hoort, de inkt van de examens inbegrepen; **Instellingen → Privacy en telemetrie → Al mijn gegevens uit de cloud verwijderen** haalt alle canvassen, de colleges, de examen-inkt, de instellingen en de mappen weg en zet Synchroniseren tussen je apparaten uit; **Instellingen → Profiel en account → Account verwijderen** haalt alles weg, instellingen inbegrepen.

Zonder de schakelaar blijft dit allemaal op je apparaat, zoals voorheen.

## AI-trainingsdata (aparte sectie, alleen opt-in)

We bouwen een eigen handschriftherkenning, afgestemd op hoe Fluera-gebruikers echt schrijven. Onder **Instellingen → Privacy → AI-trainingsdata** vind je nog twee schakelaars, ook standaard uit en los van de vier hierboven:

- **Kalibratiesessie (~5 min).** Een eenmalige begeleide sessie waarin je 30 voorgelegde symbolen schrijft (cijfers, wiskundige operatoren, Griekse letters, veelgebruikte letters). Het symbool op het scherm is de grondwaarheid, gekoppeld aan je streken.
- **Automatisch vastleggen tijdens het schrijven.** Terwijl je gewoon op het canvas schrijft, bewaren we de ruwe streken (coördinaten, timing, druk, kanteling van de pen waar ondersteund) en een kleine versleutelde PNG van elk cluster. De data blijft versleuteld op onze server. **Zodra onze overeenkomst met Google rond is** (verwerkersovereenkomst voor Vertex AI, in uitvoering) analyseert Google Gemini de afbeeldingen, zodat we Fluera kunnen leren wat je schreef. Tot dan verlaat geen trainingsdata onze infrastructuur richting derden.

Beide schakelaars gebruiken een eigen pseudonieme ID, berekend op je apparaat en **niet** dezelfde als die van de productanalytics: uit de data zelf is een bijdrage niet aan je account te koppelen.

Specifieke waarborgen voor deze categorie:
- Versleuteling van de data met AES-256-GCM *vóór* het uploaden; de sleutel om te ontsleutelen is een asymmetrisch sleutelpaar (X25519) waarvan de privéhelft offline op papier staat en nooit gedigitaliseerd wordt.
- Row-Level Security op de Supabase-tabellen: niemand kan de samples van een ander lezen.
- Ruisfilter: clusters met minder dan 3 punten (tikjes, vegen) worden vóór het opslaan weggegooid.
- Blijvende deduplicatie via een geometrische vingerafdruk: hetzelfde cluster precies opnieuw tekenen maakt geen duplicaat.
- Voorbeeld van elke sample in **Instellingen → AI-trainingsdata → Recent vastgelegd**: je ziet miniaturen van precies wat we bewaard hebben.

## Wat nooit wordt verzameld

- De inhoud van je canvasses (in rust versleuteld met sqlite3mc, ChaCha20-Poly1305), tenzij je **Synchroniseren tussen je apparaten** aanzet (hierboven)
- De vragen die de AI stelt, of jouw antwoorden
- De audio die je opneemt, tenzij je **Synchroniseren tussen je apparaten** aanzet (hierboven): dan gaat die net als je canvassen naar de cloud, versleuteld tijdens overdracht en in rust, niet end-to-end
- Persoonlijk identificeerbare informatie van welke aard ook zonder expliciete toestemming

## Hoe je het controleert

Zet de vier schakelaars uit en houd je firewall of netwerkmonitor in de gaten: je canvassen, je opnames en wat je schrijft blijven op het apparaat. De app praat nog wel met het netwerk voor dingen zonder canvasinhoud, bijvoorbeeld: inloggen op je account, je abonnement controleren bij de store (RevenueCat), de modellen downloaden die sommige functies nodig hebben, het marketplace-signaal als je een kaart uit de catalogus installeert of bestudeert (standaard aan, uit te zetten in **Instellingen → Privacy en telemetrie → Marketplace-signaal**) en de pagina's die je in de ingebouwde browser opent.

## Toestemming intrekken

De vier toggles zijn altijd bereikbaar in **Instellingen → Privacy**. Een toggle uitzetten heeft onmiddellijk effect. Wat er gebeurt met gegevens die al verzameld zijn, hangt af van de categorie:

- **Productanalytics:** zodra de intrekking onze servers bereikt, wordt de telemetrie die al met je account is verzameld meteen gewist. Langer dan 180 dagen blijft ze sowieso nooit.
- **AI-functies:** de verzoeken stoppen meteen, ook op onze server. Het AI-gebruikslogboek (welke functie, hoeveel tokens, geen inhoud) blijft 24 maanden, voor de limieten van het abonnement.
- **Cloud sync:** uitzetten, of Synchroniseren tussen je apparaten uitzetten, wist niets wat al in de cloud staat — gebruik daarvoor **Al mijn gegevens uit de cloud verwijderen**.
- **Crashrapportage:** de intrekking wist al verzonden rapporten niet: Sentry bewaart ze 30 dagen, en zijn versleutelde back-ups tot 90.

Om je account en de gegevens ervan in de cloud te verwijderen, gebruik je **Instellingen → Profiel en account → Account verwijderen**. Lukt dat niet, mail dan naar [lorenco@fluera.dev](mailto:lorenco@fluera.dev) vanaf het adres van je account.

## Verder

- [Cloud sync setup](/nl/docs/cloud-sync)
- [Beveiligingsarchitectuur](/nl/security/architecture) — het volledige model
