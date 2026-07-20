---
lang: "da"
title: "Cloud sync"
description: "Sådan synkroniserer du canvasser mellem enheder, hvordan dine data beskyttes, og hvordan du administrerer sync pr. notesbog."
section: settings
sectionLabel: "Indstillinger"
order: 2
updatedAt: 2026-04-20
---

Cloud sync er opt-in pr. notesbog. Du kan synkronisere ét canvas, mens du holder et andet strengt lokalt. Intet bevæger sig, før du siger til.

## Aktivering af sync på den første enhed

1. Åbn **Indstillinger → Privatliv** og slå **Cloud sync** til.
2. Log ind med din konto. Sync er knyttet til din konto.
3. Vælg hvilke notesbøger der skal synkroniseres. Højreklik (eller tryk og hold) på en notesbog → **Slå sync til**.

Et lille sky-ikon vises på hver synkroniseret notesbog. En rød variant indikerer fejl; en grå indikerer pause.

## Tilføjelse af en anden enhed

1. Installér Fluera på den anden enhed.
2. Log ind med den samme konto.
3. Cloud sync starter automatisk. Forvent at den første komplette synkronisering tager nogle minutter for en notesbog af mellemstørrelse.

## Hvordan dine data beskyttes

- På din enhed er den lokale database krypteret i hvile med SQLCipher.
- Synkroniserede canvasser overføres krypteret i transit (TLS 1.3 med moderne cipher suites) og opbevares krypteret i hvile på EU-infrastruktur (Supabase, region eu-north-1).
- Synkroniseret data er **ikke** end-to-end-krypteret. Som dataansvarlig kan Fluera teknisk set tilgå synkroniseret indhold for at levere tjenesten. Vi sælger det aldrig og bruger det aldrig til annoncering.
- Eksporterer du en `.fluera`-fil, er den krypteret med AES-256-GCM.

## Hvis du mister adgangen til din konto

Synkroniseret data er knyttet til din konto. Mister du adgangen til kontoen, gendanner du den via den normale konto-gendannelse — dine synkroniserede notesbøger er stadig tilgængelige, når du logger ind igen.

Bemærk: en eksporteret `.fluera`-fil er krypteret med AES-256-GCM, og hvis du mister dens adgangsfrase, kan netop den fil ikke gendannes. Det er bevidst, da eksporten er beregnet til offline opbevaring uden for tjenesten.

## Konfliktløsning

Hvis du redigerer det samme canvas på to enheder samtidig, mens den ene er offline, bruger Fluera en CRDT med vector clocks til at flette uden konflikter. Du mister ikke arbejde. I sjældne tilfælde, hvor den automatiske flet er flertydig, vil du se en "merge needed"-markør på den berørte node og en side-om-side-visning til bekræftelse.

## Slå sync fra for en specifik notesbog

Højreklik (eller tryk og hold) på en notesbog → **Slå sync fra**. Cloud-kopien tilbagekaldes øjeblikkeligt. Den lokale kopi forbliver intakt.

## Næste

- [FAQ og fejlfinding](/da/docs/faq)
- [Sikkerhedsarkitektur](/da/security/architecture)
