---
lang: "nl"
title: "Cloud sync"
description: "Hoe je canvasses synchroniseert tussen apparaten, wat versleuteld wordt en hoe je herstelt als je je passphrase verliest."
section: settings
sectionLabel: "Instellingen"
order: 2
updatedAt: 2026-04-20
---

Cloud sync is opt-in per notitieboek. Je kunt het ene canvas synchroniseren terwijl je een ander strikt lokaal houdt. Niets beweegt totdat jij het zegt.

## Sync inschakelen op het eerste apparaat

1. Open **Instellingen → Privacy** en zet **Cloud sync** aan.
2. Maak of vul je **sync-passphrase** in. Die is *gescheiden* van je accountwachtwoord. De passphrase wordt gebruikt om de versleutelingssleutel af te leiden — en wordt alleen op je apparaat bewaard, nooit op onze servers.
3. Kies welke notitieboeken je synchroniseert. Rechtsklik (of houd ingedrukt) op een notitieboek → **Sync inschakelen**.

Een klein wolkje verschijnt bij elk gesynchroniseerd notitieboek. Een rode variant duidt op een fout; een grijze op een pauze.

## Een tweede apparaat toevoegen

1. Installeer Fluera op het tweede apparaat.
2. Meld je aan met hetzelfde account.
3. Voer *dezelfde* sync-passphrase in wanneer daar om wordt gevraagd. De passphrase is niet herstelbaar — heb je hem niet, dan zijn de versleutelde data op het nieuwe apparaat niet leesbaar.
4. Cloud sync start. Verwacht dat de eerste volledige sync een paar minuten duurt voor een notitieboek van gemiddelde grootte.

## Wat wordt versleuteld en hoe

- Elk notitieboek wordt lokaal versleuteld met een sleutel per notitieboek.
- Die sleutels worden versleuteld met een root-sleutel afgeleid uit je sync-passphrase via PBKDF2-SHA256, 256.000 iteraties.
- Alleen de versleutelde bytes komen op de server. We kunnen je notitieboeken niet lezen.

De metadata (notitieboektitels, timestamps, grootte) zijn ook versleuteld — de server ziet ondoorzichtige blobs en sync-timestamps.

## Als je de passphrase verliest

Vergeet je de passphrase en heb je geen apparaat meer waar een sleutel in cache staat, dan worden je versleutelde data **onherstelbaar**. Dat is by design. Het alternatief — een server-side herstelmechanisme — zou het end-to-end-model breken en is een trade-off die we voor consumer-accounts niet willen maken.

Voor **Education-accounts** kan optioneel een recovery-sleutel worden geconfigureerd die de beheerder bewaart, tijdens de uitrol. Het is een expliciete opt-in, gedocumenteerd in de institutionele DPA en geaudit.

## Conflict-resolutie

Bewerk je hetzelfde canvas op twee apparaten tegelijk terwijl een offline is, dan gebruikt Fluera een CRDT met vector clocks om zonder conflicten te mergen. Je verliest geen werk. In zeldzame gevallen waarin de automatische merge ambigu is, zie je een "merge needed"-markering op het betreffende knooppunt en een zij-aan-zij weergave om te bevestigen.

## Sync uitschakelen voor een specifiek notitieboek

Rechtsklik (of houd ingedrukt) op een notitieboek → **Sync uitschakelen**. De cloudkopie wordt onmiddellijk ingetrokken. De lokale kopie blijft intact.

## Verder

- [FAQ en probleemoplossing](/nl/docs/faq)
- [Beveiligingsarchitectuur](/nl/security/architecture)
