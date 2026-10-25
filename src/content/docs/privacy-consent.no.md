---
lang: "no"
title: "Personvern og AI-samtykke"
description: "Hvilke data Fluera samler inn, hvilket samtykke du gir, og hvordan du slår av alt."
section: settings
sectionLabel: "Innstillinger"
order: 1
updatedAt: 2026-10-23
---

Fluera er et local-first-verktøy. Som standard forlater ingenting enheten din med mindre du eksplisitt aktiverer en funksjon som krever det.

## De fire samtykkekategoriene

Åpne **Innstillinger → Personvern**. Du ser fire brytere, alle av som standard:

- **Produkt-analytics.** Bruksdata knyttet til kontoens ID, slik at du kan se og slette dem — bruk av funksjoner, øktvarighet, varighet på AI-kall. Aldri innhold. Lagres i høyst 180 dager.
- **AI-funksjoner.** Påkrevd for å bruke Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte teksten fra canvaset sendes til Google Gemini-modeller via Google Vertex AI, behandlet i EU (2.5-modeller i regionene europe-west4 NL / europe-west1 BE, 3.x-modeller via Vertex AIs EU-multiregionsendepunkt): dataene blir i EUs medlemsstater. Aldri hele canvasen.
- **Sky-synkronisering.** Påkrevd for å synkronisere canvas mellom enheter. Synkroniserte data krypteres under overføring (TLS) og i hvile på EU-infrastruktur (Supabase, eu-north-1). De er ikke ende-til-ende-kryptert: Fluera kan som behandlingsansvarlig få tilgang til dem, men selger dem aldri og bruker dem aldri til annonsering. Med Cloud-abonnementet tar **Synkroniser mellom enhetene dine** (nedenfor) også med studiet og innstillingene dine.
- **Crash reporting.** Stack traces og enhets-metadata når appen krasjer. Ingen brukerinnhold. Behandlet av Sentry med `sendDefaultPii: false`.

Hver bryter er uavhengig. Du kan aktivere Sky-synkronisering uten Analytics. Du kan bruke AI uten Crash Reporting. Tillatelsene er granulære med vilje.

## Kognitivt minne (på enheten, opt-out)

Atskilt fra de fire sky-samtykkene ovenfor: som standard indekserer Fluera notatene dine **på enheten din** for å gi automatiske titler, begrepskartet (Ghost Map) og repetisjon med mellomrom (FSRS). Indeksen bygges og beregnes på enheten din og blir der, med mindre du slår på **Synkroniser mellom enhetene dine** (neste avsnitt): da går repetisjonskortene dine med historikken over svarene dine, begrepene dine, begrepskartet og titlene på notatgruppene dine gjennom Flueras sky til de andre enhetene dine. Du kan slå av minnet i **Innstillinger → Personvern → Kognitivt minne**: indekseringen stopper, og de kognitive dataene på denne enheten slettes umiddelbart (notatene dine forblir urørt); bruker du Synkroniser mellom enhetene dine, slettes også kopiene i skyen, og ingenting lastes opp igjen før du slår det på igjen. Rettslig grunnlag: berettiget interesse med rett til å protestere (GDPR art. 6.1.f / 21) — derfor er det på som standard og opt-out, ikke et opt-in-samtykke som de fire ovenfor.

## Synkroniser mellom enhetene dine (Cloud-abonnement)

Bryteren **Innstillinger → Data og synkronisering → Synkroniser mellom enhetene dine** er av til du slår den på. Den krever en konto og Cloud-abonnementet, og den gjelder for hele kontoen din: på på én enhet betyr på på alle enheter du logger inn på. Når du slår den på, registrerer serveren datoen og versjonen av personvernerklæringen du hadde foran deg. Rettslig grunnlag: avtale (GDPR art. 6.1.b) — det er Cloud-tjenesten du betaler for.

- **Hva som går til skyen, bare mens den er på:** hele canvas (streker, seksjoner, formler, PDF-er med markeringene du gjorde i leseren, bilder); innspilte forelesninger (lyden, i biter); studiet på hvert canvas (repetisjonskort med svarene dine, begreper, eksamener med blekket sitt, den sokratiske tutoren, chatten, gjenkalling, kurs); galleriets mapper (med navnene), mappen til hvert canvas, de festede, etikettene og Papirkurven; teksten Fluera gjenkjente i håndskriften din; valgene dine i innstillingene (utseende, språk, papir, repetisjon, farger, viskelær og lignende). Innstillinger som hører til én enhet (hånd, håndflate, penn, vindu), blir der.
- **Hva som alltid blir på enheten:** historikken til canvaset (Time Travel) og angre.
- **Hvem som ser det:** du. På et canvas du deler, ser medlemmene canvaset og titlene på notatgruppene; studiet ditt ser bare du.
- **Hvor:** Supabase, EU-regionen `eu-north-1` (Stockholm), kryptert under overføring og i ro, **ikke** ende-til-ende-kryptert.
- **Å slå den av** fra hvilken som helst enhet stopper den på alle og sletter ingenting. Det samme gjelder hvis du trekker tilbake samtykket til Cloud sync.
- **Når Cloud-abonnementet slutter,** settes synkroniseringen på pause, og alt kan fortsatt lastes ned i 6 måneder. Etter det kan vi fjerne lyden fra forelesninger, PDF-er og bilder utover de 500 MB i Free-abonnementet, de eldste først; blekket i canvasene dine blir.
- **Sletting:** **Slett for godt** på et canvas i **Papirkurv** fjerner det fra skyen med det som hører til, også blekket fra eksamenene; **Innstillinger → Personvern og telemetri → Slett alle dataene mine fra skyen** fjerner alle canvas, forelesningene, eksamensblekket, innstillingene og mappene og slår av Synkroniser mellom enhetene dine; **Innstillinger → Profil og konto → Slett kontoen** fjerner alt, også innstillingene.

Uten bryteren blir alt dette på enheten din, som før.

## Treningsdata for AI (egen del, bare opt-in)

Vi bygger vår egen håndskriftgjenkjenning, tilpasset hvordan Fluera-brukere faktisk skriver. Under **Innstillinger → Personvern → Treningsdata for AI** finner du to brytere til, også av som standard og uavhengige av de fire ovenfor:

- **Kalibreringsøkt (~5 min).** En veiledet økt, bare én gang, der du skriver 30 viste symboler (sifre, matematiske operatorer, greske bokstaver, vanlige bokstaver). Symbolet på skjermen er fasiten, paret med strekene dine.
- **Automatisk fangst mens du skriver.** Mens du skriver som vanlig på canvasen, lagrer vi de rå strekene (koordinater, tid, trykk, pennens helning der det støttes) og et lite kryptert PNG av hver klynge. Dataene forblir kryptert på serveren vår. **Når avtalen vår med Google er på plass** (databehandleravtale for Vertex AI, pågår), analyserer Google Gemini bildene, slik at vi kan lære Fluera hva du skrev. Inntil da forlater ingen treningsdata infrastrukturen vår til tredjeparter.

Begge bryterne bruker en egen pseudonym ID, beregnet på enheten din og **ikke** den samme som produkt-analytics bruker: ut fra dataene alene kan et bidrag ikke knyttes til kontoen din.

Særlige sikkerhetstiltak for denne kategorien:
- Kryptering av dataene med AES-256-GCM *før* opplasting; nøkkelen for å dekryptere er et asymmetrisk nøkkelpar (X25519) der den private halvdelen oppbevares offline på papir og aldri digitaliseres.
- Row-Level Security på Supabase-tabellene: ingen kan lese en annens prøver.
- Støyfilter: klynger med færre enn 3 punkter (trykk, flekker) forkastes før de lagres.
- Varig deduplisering via geometrisk fingeravtrykk: å tegne samme klynge helt likt igjen gir ingen duplikat.
- Forhåndsvisning av hver prøve i **Innstillinger → Treningsdata for AI → Nylig fanget**: du ser miniatyrer av nøyaktig det vi har lagret.

## Hva som aldri samles inn

- Innholdet i canvasene dine (kryptert i hvile med sqlite3mc, ChaCha20-Poly1305), med mindre du slår på **Synkroniser mellom enhetene dine** (ovenfor)
- Spørsmålene AI-en stiller, eller svarene dine
- Lyden du tar opp, med mindre du slår på **Synkroniser mellom enhetene dine** (ovenfor): da går den til skyen som canvasene dine, kryptert under overføring og i ro, ikke ende-til-ende
- Personidentifiserbar informasjon av noen art uten eksplisitt samtykke

## Hvordan du verifiserer

Slå av de fire bryterne og følg med på brannmuren eller nettverksmonitoren: canvasene dine, opptakene dine og det du skriver blir på enheten. Appen snakker likevel med nettet om ting uten canvasinnhold, for eksempel: innlogging på kontoen din, sjekk av abonnementet hos butikken (RevenueCat), nedlasting av modeller som noen funksjoner trenger, marketplace-signalet når du installerer eller studerer et kort fra katalogen (på som standard, slås av i **Innstillinger → Personvern og telemetri → Marketplace-signal**), og sidene du åpner i den innebygde nettleseren.

## Tilbakekalle samtykke

De fire bryterne er alltid tilgjengelige i **Innstillinger → Personvern**. Å slå av en bryter får umiddelbar effekt. Hva som skjer med data som allerede er samlet inn, avhenger av kategorien:

- **Produkt-analytics:** når tilbaketrekkingen når serverne våre, slettes telemetrien som allerede er samlet inn med kontoen din, med en gang. Den lagres uansett aldri i mer enn 180 dager.
- **AI-funksjoner:** forespørslene stopper med en gang, også på serveren vår. AI-bruksloggen (hvilken funksjon, hvor mange tokens, ikke noe innhold) lagres i 24 måneder, for abonnementets grenser.
- **Sky-synkronisering:** å slå den av, eller slå av Synkroniser mellom enhetene dine, sletter ingenting som allerede er i skyen — bruk **Slett alle dataene mine fra skyen** til det.
- **Crash reporting:** tilbaketrekkingen sletter ikke rapporter som allerede er sendt: Sentry lagrer dem i 30 dager, og sine krypterte sikkerhetskopier i opptil 90.

For å slette kontoen din og dataene i skyen, bruk **Innstillinger → Profil og konto → Slett kontoen**. Hvis det ikke går, skriv til [lorenco@fluera.dev](mailto:lorenco@fluera.dev) fra adressen til kontoen din.

## Neste

- [Oppsett av sky-synkronisering](/no/docs/cloud-sync)
- [Sikkerhetsarkitektur](/no/security/architecture) — hele modellen
