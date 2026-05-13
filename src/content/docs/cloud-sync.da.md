---
lang: "da"
title: "Cloud sync"
description: "Sådan synkroniserer du canvasser mellem enheder, hvad der er krypteret, og hvordan du kommer ud af det, hvis du mister din adgangsfrase."
section: settings
sectionLabel: "Indstillinger"
order: 2
updatedAt: 2026-04-20
---

Cloud sync er opt-in pr. notesbog. Du kan synkronisere ét canvas, mens du holder et andet strengt lokalt. Intet bevæger sig, før du siger til.

## Aktivering af sync på den første enhed

1. Åbn **Indstillinger → Privatliv** og slå **Cloud sync** til.
2. Opret eller indtast din **sync-adgangsfrase**. Den er *adskilt* fra adgangskoden til kontoen. Adgangsfrasen bruges til at udlede krypteringsnøglen — og opbevares kun på din enhed, aldrig på vores servere.
3. Vælg hvilke notesbøger der skal synkroniseres. Højreklik (eller tryk og hold) på en notesbog → **Slå sync til**.

Et lille sky-ikon vises på hver synkroniseret notesbog. En rød variant indikerer fejl; en grå indikerer pause.

## Tilføjelse af en anden enhed

1. Installér Fluera på den anden enhed.
2. Log ind med den samme konto.
3. Indtast den *samme* sync-adgangsfrase, når du bliver bedt om det. Adgangsfrasen kan ikke gendannes — har du den ikke, kan de krypterede data ikke læses på den nye enhed.
4. Cloud sync starter. Forvent at den første komplette synkronisering tager nogle minutter for en notesbog af mellemstørrelse.

## Hvad der er krypteret og hvordan

- Hver notesbog er krypteret lokalt med en nøgle pr. notesbog.
- Disse nøgler er krypteret med en root-nøgle udledt af din sync-adgangsfrase via PBKDF2-SHA256, 256.000 iterationer.
- Kun de krypterede bytes når serveren. Vi kan ikke læse dine notesbøger.

Metadata (notesbogstitler, tidsstempler, størrelse) er også krypteret — serveren ser opake blobs og sync-tidsstempler.

## Hvis du mister adgangsfrasen

Hvis du glemmer adgangsfrasen og ikke har en enhed, der stadig har en nøgle i cachen, er dine krypterede data **uoprettelige**. Det er bevidst. Alternativet — en server-side recovery-mekanisme — ville bryde end-to-end-modellen og er en afvejning, vi ikke er villige til at lave for forbrugerkonti.

For **Education-konti** kan en valgfri recovery-nøgle, som administratoren opbevarer, konfigureres ved udrulning. Det er en eksplicit opt-in, dokumenteret i den institutionelle DPA og auditeret.

## Konfliktløsning

Hvis du redigerer det samme canvas på to enheder samtidig, mens den ene er offline, bruger Fluera en CRDT med vector clocks til at flette uden konflikter. Du mister ikke arbejde. I sjældne tilfælde, hvor den automatiske flet er flertydig, vil du se en "merge needed"-markør på den berørte node og en side-om-side-visning til bekræftelse.

## Slå sync fra for en specifik notesbog

Højreklik (eller tryk og hold) på en notesbog → **Slå sync fra**. Cloud-kopien tilbagekaldes øjeblikkeligt. Den lokale kopi forbliver intakt.

## Næste

- [FAQ og fejlfinding](/da/docs/faq)
- [Sikkerhedsarkitektur](/da/security/architecture)
