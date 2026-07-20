---
lang: "nl"
title: "Privacy en AI-toestemming"
description: "Welke data Fluera verzamelt, welke toestemming je geeft, en hoe je alles uitzet."
section: settings
sectionLabel: "Instellingen"
order: 1
updatedAt: 2026-06-29
---

Fluera is een local-first tool. Standaard verlaat niets je apparaat tenzij je expliciet een functie aanzet die dat nodig heeft.

## De vier toestemmingscategorieën

Open **Instellingen → Privacy**. Je ziet vier toggles, alle standaard uit:

- **Productanalytics.** Anonieme sessiedata — aanroep-aantallen van functies, sessieduur, AI-call-duur. Nooit inhoud. Gebruikers-ID gehasht met SHA-256, 180 dagen retentie.
- **AI-functies.** Vereist om Socratic, Ghost Map, LaTeX OCR en Fog of War te gebruiken. Geselecteerde tekst van het canvas wordt naar Google Gemini-modellen gestuurd, geserveerd via Google Vertex AI en verwerkt in de EU (europe-west4 NL / europe-west1 BE). Nooit het hele notitieboek.
- **Cloud sync.** Vereist om canvasses tussen apparaten te synchroniseren. Gesynchroniseerde data is versleuteld tijdens transport (TLS) en in rust op EU-infrastructuur (Supabase, eu-north-1). De sync is niet end-to-end versleuteld: Fluera kan de inhoud als verwerkingsverantwoordelijke benaderen, maar verkoopt deze nooit en gebruikt deze nooit voor advertenties.
- **Crashrapportage.** Stack traces en apparaatmetadata wanneer de app crasht. Geen gebruikersinhoud. Verwerkt door Sentry met `sendDefaultPii: false`.

Elke toggle is onafhankelijk. Je kunt Cloud Sync aanzetten zonder Analytics. Je kunt AI gebruiken zonder Crash Reporting. De permissies zijn bewust granulair.

## Cognitief geheugen (op het apparaat, opt-out)

In tegenstelling tot de vier cloud-toestemmingen hierboven: standaard indexeert Fluera je notities **alleen op je apparaat** om automatische titels, de conceptmap (Ghost Map) en spaced repetition (FSRS) mogelijk te maken. Deze index **verlaat je apparaat nooit** — er wordt geen inhoud naar de cloud gestuurd (in tegenstelling tot *AI-functies* en *Cloud sync*). Je kunt het uitzetten in **Instellingen → Privacy → Cognitief geheugen**: het indexeren stopt en de cognitieve data die al op het apparaat is opgebouwd, wordt onmiddellijk gewist (je notities blijven intact). Rechtsgrond: gerechtvaardigd belang met een recht van bezwaar (GDPR Art. 6.1.f / 21) — daarom staat het standaard aan en is het opt-out, geen opt-in-toestemming zoals de vier hierboven.

## Wat nooit wordt verzameld

- De inhoud van je canvasses (in rust versleuteld met SQLCipher, AES-256)
- De vragen die de AI stelt, of jouw antwoorden
- De audio die je opneemt met Time Travel (lokaal opgeslagen; bij opt-in sync versleuteld tijdens transport en in rust op EU-infrastructuur, niet end-to-end)
- Persoonlijk identificeerbare informatie van welke aard ook zonder expliciete toestemming

## Hoe je het controleert

Zet de app in vliegtuigmodus. Doe alles behalve cloud sync en AI. Houd je firewall of netwerkmonitor in de gaten. Fluera doet nul netwerkverzoeken met de vier toestemmingstoggles uit. Het is verifieerbaar, by design.

## Toestemming intrekken

De vier toggles zijn altijd bereikbaar in **Instellingen → Privacy**. Een toggle uitzetten heeft onmiddellijk effect. De bijbehorende backend-data zijn gepland voor verwijdering binnen 30 dagen.

Voor volledige accountverwijdering (het recht om volledig vergeten te worden), schrijf naar [lorenco@fluera.dev](mailto:lorenco@fluera.dev) vanaf het adres van je account.

## Education-accounts

Beheert jouw instelling je Fluera-account, dan blijven de bovenstaande gedragingen gelden voor *jouw* data. De beheerder kan geaggregeerde gebruiksstatistieken zien voor compliance-audits (via de audittrail). Op je apparaat wordt je lokale database in rust versleuteld met SQLCipher en blijft de sleutel in je keychain, niet in een beheersysteem. Houd er rekening mee dat gesynchroniseerde data niet end-to-end versleuteld is: Fluera kan deze als verwerkingsverantwoordelijke benaderen, maar verkoopt deze nooit en gebruikt deze nooit voor advertenties.

## Verder

- [Cloud sync setup](/nl/docs/cloud-sync)
- [Beveiligingsarchitectuur](/nl/security/architecture) — het volledige model
