---
lang: "nl"
title: "Privacy en AI-toestemming"
description: "Welke data Fluera verzamelt, welke toestemming je geeft, en hoe je alles uitzet."
section: settings
sectionLabel: "Instellingen"
order: 1
updatedAt: 2026-04-20
---

Fluera is een local-first tool. Standaard verlaat niets je apparaat tenzij je expliciet een functie aanzet die dat nodig heeft.

## De vier toestemmingscategorieën

Open **Instellingen → Privacy**. Je ziet vier toggles, alle standaard uit:

- **Productanalytics.** Anonieme sessiedata — aanroep-aantallen van functies, sessieduur, AI-call-duur. Nooit inhoud. Gebruikers-ID gehasht met SHA-256, 180 dagen retentie.
- **AI-functies.** Vereist om Socratic, Ghost Map, LaTeX OCR en Fog of War te gebruiken. Geselecteerde tekst van het canvas wordt naar Google Gemini gestuurd via onze server-side proxy. Nooit het hele notitieboek.
- **Cloud sync.** Vereist om canvasses tussen apparaten te synchroniseren. Alle notitieboeken worden op je apparaat versleuteld voor de upload. De cloud bewaart ciphertext.
- **Crashrapportage.** Stack traces en apparaatmetadata wanneer de app crasht. Geen gebruikersinhoud. Verwerkt door Sentry met `sendDefaultPii: false`.

Elke toggle is onafhankelijk. Je kunt Cloud Sync aanzetten zonder Analytics. Je kunt AI gebruiken zonder Crash Reporting. De permissies zijn bewust granulair.

## Wat nooit wordt verzameld

- De inhoud van je canvasses (in rust versleuteld met SQLCipher, AES-256)
- De vragen die de AI stelt, of jouw antwoorden
- De audio die je opneemt met Time Travel (lokaal opgeslagen; opt-in sync versleutelt voor de upload)
- Persoonlijk identificeerbare informatie van welke aard ook zonder expliciete toestemming

## Hoe je het controleert

Zet de app in vliegtuigmodus. Doe alles behalve cloud sync en AI. Houd je firewall of netwerkmonitor in de gaten. Fluera doet nul netwerkverzoeken met de vier toestemmingstoggles uit. Het is verifieerbaar, by design.

## Toestemming intrekken

De vier toggles zijn altijd bereikbaar in **Instellingen → Privacy**. Een toggle uitzetten heeft onmiddellijk effect. De bijbehorende backend-data zijn gepland voor verwijdering binnen 30 dagen.

Voor volledige accountverwijdering (het recht om volledig vergeten te worden), schrijf naar [privacy@fluera.dev](mailto:privacy@fluera.dev) vanaf het adres van je account.

## Education-accounts

Beheert jouw instelling je Fluera-account, dan blijven de bovenstaande gedragingen gelden voor *jouw* data. De beheerder kan geaggregeerde gebruiksstatistieken zien voor compliance-audits (via de audittrail) maar kan de inhoud van je notitieboeken niet lezen. De versleuteling wordt afgedwongen op je apparaat; de sleutel blijft in je keychain, niet in een beheersysteem.

## Verder

- [Cloud sync setup](/nl/docs/cloud-sync)
- [Beveiligingsarchitectuur](/nl/security/architecture) — het volledige model
