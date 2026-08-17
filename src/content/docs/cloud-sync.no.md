---
lang: "no"
title: "Sky-synkronisering"
description: "Hvordan synkronisere canvas mellom enheter, hvordan dataene dine beskyttes, og hva du kan forvente."
section: settings
sectionLabel: "Innstillinger"
order: 2
updatedAt: 2026-04-20
---

Sky-synkronisering er opt-in per notatbok. Du kan synkronisere ett canvas mens du holder et annet strengt lokalt. Ingenting flytter seg før du sier det.

## Aktivere synkronisering på første enhet

1. Åpne **Innstillinger → Personvern** og slå på **Sky-synkronisering**.
2. Velg hvilke notatbøker som skal synkroniseres. Høyreklikk (eller trykk og hold) på en notatbok → **Aktiver synkronisering**.

Et lite skyikon vises på hver synkronisert notatbok. En rød variant indikerer feil; en grå indikerer pause.

## Legge til en andre enhet

1. Installer Fluera på den andre enheten.
2. Logg inn med samme konto.
3. Sky-synkroniseringen starter automatisk. Forvent at første full synkronisering tar noen minutter for en notatbok av middels størrelse.

## Hvordan synkroniserte data beskyttes

- På enheten din krypteres den lokale databasen i hvile med SQLCipher (AES-256).
- Når du synkroniserer, krypteres data under overføring med TLS 1.3 og moderne cipher suites.
- På serverne våre lagres data på EU-infrastruktur (Supabase, `eu-north-1`) og beskyttes av kryptering i hvile på infrastrukturnivå.

For å være tydelig: Sky-synkronisering er **ikke** ende-til-ende-kryptert. Som behandlingsansvarlig kan Fluera teknisk få tilgang til synkronisert innhold for å levere og drifte tjenesten. Vi selger aldri dataene dine, bruker dem aldri til annonsering og trener aldri modeller på dem. Hvis du vil ha en kopi som bare du kan åpne, eksporter en `.fluera`-fil; slike eksporter krypteres med AES-256-GCM.

## Gjenopprette dataene dine

Fordi synkroniserte notatbøker lagres på EU-serverne våre og er knyttet til kontoen din, kan du gjenopprette dem ved å logge inn igjen på en hvilken som helst enhet. Det finnes ingen separat passfrase du må huske eller kan miste.

Hvis du vil ha en kryptert kopi som bare du kan åpne, eksporter en `.fluera`-fil (AES-256-GCM) og oppbevar passordet selv; Fluera kan ikke lese denne filen.

## Konfliktløsning

Hvis du redigerer samme canvas på to enheter samtidig mens den ene er offline, bruker Fluera en CRDT med vector clocks for å gjøre merge uten konflikter. Du mister ikke arbeid. I sjeldne tilfeller der automatisk merge er tvetydig, ser du en "merge needed"-markør på den berørte noden og en side-ved-side-visning for å bekrefte.

## Slå av synkronisering for en spesifikk notatbok

Høyreklikk (eller trykk og hold) på en notatbok → **Deaktiver synkronisering**. Skykopien tilbakekalles umiddelbart. Den lokale kopien forblir intakt.

## Neste

- [FAQ og feilsøking](/no/docs/faq)
- [Sikkerhetsarkitektur](/no/security/architecture)
