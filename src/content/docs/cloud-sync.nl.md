---
lang: "nl"
title: "Cloud sync"
description: "Hoe je canvasses synchroniseert tussen apparaten en hoe gesynchroniseerde data wordt beschermd."
section: settings
sectionLabel: "Instellingen"
order: 2
updatedAt: 2026-04-20
---

Cloud sync is opt-in per notitieboek. Je kunt het ene canvas synchroniseren terwijl je een ander strikt lokaal houdt. Niets beweegt totdat jij het zegt.

## Sync inschakelen op het eerste apparaat

1. Open **Instellingen → Privacy** en zet **Cloud sync** aan.
2. Kies welke notitieboeken je synchroniseert. Rechtsklik (of houd ingedrukt) op een notitieboek → **Sync inschakelen**.

Een klein wolkje verschijnt bij elk gesynchroniseerd notitieboek. Een rode variant duidt op een fout; een grijze op een pauze.

## Een tweede apparaat toevoegen

1. Installeer Fluera op het tweede apparaat.
2. Meld je aan met hetzelfde account.
3. Cloud sync start. Verwacht dat de eerste volledige sync een paar minuten duurt voor een notitieboek van gemiddelde grootte.

## Hoe gesynchroniseerde data wordt beschermd

- Lokaal op je apparaat wordt elk notitieboek at-rest versleuteld met SQLCipher.
- Gesynchroniseerde data wordt verzonden over een versleutelde verbinding (TLS 1.3 met moderne cipher suites) en at-rest opgeslagen op EU-infrastructuur (Supabase, regio eu-north-1).
- Cloud sync is **niet** end-to-end versleuteld. Als verwerkingsverantwoordelijke kan Fluera technisch toegang krijgen tot gesynchroniseerde inhoud. We verkopen je data nooit en gebruiken die nooit voor advertenties.

De metadata (notitieboektitels, timestamps, grootte) worden samen met de inhoud op dezelfde EU-infrastructuur opgeslagen.

## Toegang en herstel

Omdat gesynchroniseerde data op EU-infrastructuur wordt opgeslagen en niet aan een lokale passphrase is gekoppeld, kun je je gesynchroniseerde notitieboeken terugkrijgen door je opnieuw aan te melden met hetzelfde account op een nieuw apparaat. Er is geen aparte sync-passphrase die verloren kan gaan.

Wil je dat een notitieboek nooit de cloud raakt, laat **Cloud sync** dan uit voor dat notitieboek; het blijft dan strikt lokaal, at-rest versleuteld met SQLCipher.

## Conflict-resolutie

Bewerk je hetzelfde canvas op twee apparaten tegelijk terwijl een offline is, dan gebruikt Fluera een CRDT met vector clocks om zonder conflicten te mergen. Je verliest geen werk. In zeldzame gevallen waarin de automatische merge ambigu is, zie je een "merge needed"-markering op het betreffende knooppunt en een zij-aan-zij weergave om te bevestigen.

## Sync uitschakelen voor een specifiek notitieboek

Rechtsklik (of houd ingedrukt) op een notitieboek → **Sync uitschakelen**. De cloudkopie wordt onmiddellijk ingetrokken. De lokale kopie blijft intact.

## Verder

- [FAQ en probleemoplossing](/nl/docs/faq)
- [Beveiligingsarchitectuur](/nl/security/architecture)
