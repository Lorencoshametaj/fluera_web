---
lang: "no"
title: "Sky-synkronisering"
description: "Hvordan synkronisere canvas mellom enheter, hva som krypteres, og hvordan du gjenoppretter hvis du mister passfrasen."
section: settings
sectionLabel: "Innstillinger"
order: 2
updatedAt: 2026-04-20
---

Sky-synkronisering er opt-in per notatbok. Du kan synkronisere ett canvas mens du holder et annet strengt lokalt. Ingenting flytter seg før du sier det.

## Aktivere synkronisering på første enhet

1. Åpne **Innstillinger → Personvern** og slå på **Sky-synkronisering**.
2. Opprett eller skriv inn **synk-passfrasen** din. Den er *separat* fra kontopassordet. Passfrasen brukes til å utlede krypteringsnøkkelen — og lagres bare på enheten din, aldri på serverne våre.
3. Velg hvilke notatbøker som skal synkroniseres. Høyreklikk (eller trykk og hold) på en notatbok → **Aktiver synkronisering**.

Et lite skyikon vises på hver synkronisert notatbok. En rød variant indikerer feil; en grå indikerer pause.

## Legge til en andre enhet

1. Installer Fluera på den andre enheten.
2. Logg inn med samme konto.
3. Skriv inn *samme* synk-passfrase når du blir spurt. Passfrasen kan ikke gjenopprettes — hvis du ikke har den, kan ikke de krypterte dataene leses på den nye enheten.
4. Sky-synkroniseringen starter. Forvent at første full synkronisering tar noen minutter for en notatbok av middels størrelse.

## Hva som krypteres og hvordan

- Hver notatbok krypteres lokalt med en nøkkel per notatbok.
- Disse nøklene krypteres med en rotnøkkel utledet fra synk-passfrasen din via PBKDF2-SHA256, 256 000 iterasjoner.
- Bare de krypterte bytene når serveren. Vi kan ikke lese notatbøkene dine.

Metadata (notatboktitler, tidsstempler, størrelse) krypteres også — serveren ser ugjennomsiktige blobs og synk-tidsstempler.

## Hvis du mister passfrasen

Hvis du glemmer passfrasen og ikke har en enhet som fortsatt har en nøkkel i hurtigminnet, er de krypterte dataene **ikke gjenopprettelige**. Det er by design. Alternativet — en server-side recovery-mekanisme — ville brutt ende-til-ende-modellen, og er en avveining vi ikke er villige til å gjøre for forbrukerkontoer.

For **Education-kontoer** kan en valgfri recovery-nøkkel som administratoren beholder, settes opp ved utrulling. Det er en eksplisitt opt-in, dokumentert i institusjonell DPA og revidert.

## Konfliktløsning

Hvis du redigerer samme canvas på to enheter samtidig mens den ene er offline, bruker Fluera en CRDT med vector clocks for å gjøre merge uten konflikter. Du mister ikke arbeid. I sjeldne tilfeller der automatisk merge er tvetydig, ser du en "merge needed"-markør på den berørte noden og en side-ved-side-visning for å bekrefte.

## Slå av synkronisering for en spesifikk notatbok

Høyreklikk (eller trykk og hold) på en notatbok → **Deaktiver synkronisering**. Skykopien tilbakekalles umiddelbart. Den lokale kopien forblir intakt.

## Neste

- [FAQ og feilsøking](/no/docs/faq)
- [Sikkerhetsarkitektur](/no/security/architecture)
