---
lang: "da"
title: "Privatliv og AI-samtykke"
description: "Hvilke data Fluera indsamler, hvilket samtykke du giver, og hvordan du slukker det hele."
section: settings
sectionLabel: "Indstillinger"
order: 1
updatedAt: 2026-10-23
---

Fluera er et local-first-værktøj. Som standard forlader intet din enhed, medmindre du eksplicit aktiverer en funktion, der har brug for det.

## De fire kategorier af samtykke

Åbn **Indstillinger → Privatliv**. Du vil se fire toggles, alle slukkede som standard:

- **Produkt-analytics.** Brugsdata knyttet til din kontos id, så du kan se og slette dem — brug af funktioner, sessionsvarighed, varighed af AI-kald. Aldrig indhold. Opbevares højst 180 dage.
- **AI-funktioner.** Nødvendige for at bruge Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte tekst fra canvasset sendes til Google Gemini-modeller, der serveres via Google Vertex AI og behandles i EU (2.5-modeller i regionerne europe-west4 NL / europe-west1 BE, 3.x-modeller på Vertex AI's EU-multiregionsendpoint): dataene forbliver i EU's medlemsstater. Aldrig hele canvassen.
- **Cloud sync.** Nødvendig for at synkronisere canvasser mellem enheder. Synkroniserede data krypteres under overførsel (TLS) og i hvile på EU-infrastruktur (Supabase, eu-north-1). Det er ikke end-to-end-krypteret: Fluera kan som dataansvarlig tilgå dem, men sælger dem aldrig og bruger dem aldrig til annoncering. Med Cloud-abonnementet tager **Synkroniser mellem dine enheder** (nedenfor) også dit studie og dine indstillinger med.
- **Crash reporting.** Stack traces og enhedsmetadata når appen crasher. Ingen brugerindhold. Behandles af Sentry med `sendDefaultPii: false`.

Hver toggle er uafhængig. Du kan aktivere Cloud Sync uden Analytics. Du kan bruge AI uden Crash Reporting. Tilladelserne er bevidst granulære.

## Kognitiv hukommelse (on-device, opt-out)

Adskilt fra de fire cloud-samtykker ovenfor: som standard indekserer Fluera dine noter **på din enhed** for at give automatiske titler, begrebskortet (Ghost Map) og spaced repetition (FSRS). Indekset bygges og beregnes på din enhed og bliver der, medmindre du slår **Synkroniser mellem dine enheder** til (næste afsnit): så går dine repetitionskort med historikken over dine svar, dine begreber, begrebskortet og titlerne på dine notegrupper gennem Flueras sky til dine andre enheder. Du kan slå hukommelsen fra i **Indstillinger → Privatliv → Kognitiv hukommelse**: indekseringen stopper, og de kognitive data på denne enhed slettes med det samme (dine noter forbliver urørte); bruger du Synkroniser mellem dine enheder, slettes kopierne i skyen også, og intet uploades igen, før du slår den til igen. Retsgrundlag: legitim interesse med ret til indsigelse (GDPR art. 6.1.f / 21) — derfor er den slået til som standard og opt-out, ikke et opt-in-samtykke som de fire ovenfor.

## Synkroniser mellem dine enheder (Cloud-abonnement)

Kontakten **Indstillinger → Data og synkronisering → Synkroniser mellem dine enheder** er slået fra, indtil du slår den til. Den kræver en konto og Cloud-abonnementet og gælder for hele din konto: slået til på én enhed betyder slået til på alle enheder, du logger ind på. Når du slår den til, registrerer serveren datoen og den version af privatlivspolitikken, du havde foran dig. Retsgrundlag: kontrakt (GDPR art. 6.1.b) — det er den Cloud-tjeneste, du betaler for.

- **Hvad der går til skyen, kun mens den er slået til:** hele canvas (streger, sektioner, formler, PDF'er med de markeringer, du lavede i læseren, fotos); optagede forelæsninger (lyden, i stykker); studiet på hvert canvas (repetitionskort med dine svar, begreber, eksamener med deres blæk, den sokratiske tutor, chatten, genkaldelse, kurser); galleriets mapper (med deres navne), hvert canvas' mappe, de fastgjorte, etiketterne og Papirkurven; den tekst, Fluera genkendte i din håndskrift; dine valg i indstillingerne (udseende, sprog, papir, repetition, farver, viskelæder og lignende). Indstillinger, der hører til én enhed (hånd, håndflade, pen, vindue), bliver på den.
- **Hvad der altid bliver på enheden:** canvassets historik (Time Travel) og fortryd.
- **Hvem der ser det:** dig. På et canvas, du deler, ser medlemmerne canvasset og titlerne på notegrupperne; dit studie ser kun du.
- **Hvor:** Supabase, EU-regionen `eu-north-1` (Stockholm), krypteret under overførsel og i hvile, **ikke** end-to-end-krypteret.
- **At slå den fra** på en hvilken som helst enhed stopper den på dem alle og sletter intet. Det samme gælder, hvis du trækker samtykket til Cloud sync tilbage.
- **Når Cloud-abonnementet slutter,** sættes synkroniseringen på pause, og alt kan stadig downloades i 6 måneder. Derefter kan vi fjerne lyden fra forelæsninger, PDF'er og fotos ud over de 500 MB i Free-abonnementet, de ældste først; blækket i dine canvas bliver.
- **Sletning:** **Slet permanent** på et canvas i **Papirkurv** fjerner det fra skyen med det, der hører til, også blækket fra dets eksamener; **Indstillinger → Privatliv og telemetri → Slet alle mine data fra skyen** fjerner alle canvas, forelæsningerne, eksamensblækket, indstillingerne og mapperne og slår Synkroniser mellem dine enheder fra; **Indstillinger → Profil og konto → Slet konto** fjerner alt, også indstillingerne.

Uden kontakten bliver alt dette på din enhed, som før.

## AI-træningsdata (særskilt afsnit, kun opt-in)

Vi bygger vores egen håndskriftsgenkendelse, skræddersyet til hvordan Fluera-brugere faktisk skriver. Under **Indstillinger → Privatliv → AI-træningsdata** finder du to kontakter mere, også slået fra som standard og uafhængige af de fire ovenfor:

- **Kalibreringssession (~5 min).** En guidet session, kun én gang, hvor du skriver 30 viste symboler (cifre, matematiske operatorer, græske bogstaver, almindelige bogstaver). Symbolet på skærmen er facit, parret med dine streger.
- **Automatisk opsamling, mens du skriver.** Mens du skriver helt normalt på canvassen, gemmer vi de rå streger (koordinater, tid, tryk, pennens hældning hvor det understøttes) og et lille krypteret PNG af hver klynge. Dataene forbliver krypterede på vores server. **Når vores aftale med Google er på plads** (databehandleraftale for Vertex AI, i gang), analyserer Google Gemini billederne, så vi kan lære Fluera, hvad du skrev. Indtil da forlader ingen træningsdata vores infrastruktur til tredjeparter.

Begge kontakter bruger en særskilt pseudonym id, beregnet på din enhed og **ikke** den samme som produkt-analytics bruger: ud fra dataene alene kan et bidrag ikke kobles til din konto.

Særlige sikkerhedsforanstaltninger for denne kategori:
- Kryptering af dataene med AES-256-GCM *før* upload; nøglen til at dekryptere er et asymmetrisk nøglepar (X25519), hvis private halvdel opbevares offline på papir og aldrig digitaliseres.
- Row-Level Security på Supabase-tabellerne: ingen kan læse en andens prøver.
- Støjfilter: klynger med færre end 3 punkter (tryk, udtværinger) kasseres, før de gemmes.
- Varig deduplikering via geometrisk fingeraftryk: at tegne den samme klynge helt ens igen giver ingen dublet.
- Forhåndsvisning af hver prøve i **Indstillinger → AI-træningsdata → Seneste opsamlinger**: du ser miniaturer af præcis det, vi har gemt.

## Hvad der aldrig indsamles

- Indholdet af dine canvasser (krypteret i hvile med sqlite3mc, ChaCha20-Poly1305), medmindre du slår **Synkroniser mellem dine enheder** til (ovenfor)
- De spørgsmål AI'en stiller, eller dine svar
- Den lyd, du optager, medmindre du slår **Synkroniser mellem dine enheder** til (ovenfor): så går den til skyen ligesom dine canvas, krypteret under overførsel og i hvile, ikke end-to-end
- Personligt identificerbare oplysninger af nogen art uden eksplicit samtykke

## Hvordan du verificerer

Slå de fire kontakter fra, og hold øje med din firewall eller netværksmonitor: dine canvasser, dine optagelser og det, du skriver, bliver på enheden. Appen taler stadig med nettet om ting uden canvasindhold, for eksempel: login på din konto, tjek af dit abonnement hos butikken (RevenueCat), download af de modeller, nogle funktioner skal bruge, marketplace-signalet, når du installerer eller studerer et kort fra kataloget (slået til som standard, slås fra i **Indstillinger → Privatliv og telemetri → Marketplace-signal**), og de sider, du åbner i den indbyggede browser.

## Tilbagekaldelse af samtykke

De fire toggles er altid tilgængelige i **Indstillinger → Privatliv**. At slukke en toggle har øjeblikkelig effekt. Hvad der sker med data, der allerede er indsamlet, afhænger af kategorien:

- **Produkt-analytics:** når tilbagekaldelsen når vores servere, slettes den telemetri, der allerede er indsamlet med din konto, med det samme. Den gemmes under alle omstændigheder aldrig i mere end 180 dage.
- **AI-funktioner:** forespørgslerne stopper med det samme, også på vores server. AI-brugsloggen (hvilken funktion, hvor mange tokens, intet indhold) gemmes i 24 måneder af hensyn til abonnementets grænser.
- **Cloud sync:** at slå den fra, eller slå Synkroniser mellem dine enheder fra, sletter intet af det, der allerede er i skyen — brug **Slet alle mine data fra skyen** til det.
- **Crash reporting:** tilbagekaldelsen sletter ikke rapporter, der allerede er sendt: Sentry gemmer dem i 30 dage og sine krypterede sikkerhedskopier i op til 90.

For at slette din konto og dens data i skyen skal du bruge **Indstillinger → Profil og konto → Slet konto**. Hvis det ikke lykkes, så skriv til [lorenco@fluera.dev](mailto:lorenco@fluera.dev) fra adressen på din konto.

## Næste

- [Setup af cloud sync](/da/docs/cloud-sync)
- [Sikkerhedsarkitektur](/da/security/architecture) — den fulde model
