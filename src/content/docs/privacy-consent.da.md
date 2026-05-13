---
lang: "da"
title: "Privatliv og AI-samtykke"
description: "Hvilke data Fluera indsamler, hvilket samtykke du giver, og hvordan du slukker det hele."
section: settings
sectionLabel: "Indstillinger"
order: 1
updatedAt: 2026-04-20
---

Fluera er et local-first-værktøj. Som standard forlader intet din enhed, medmindre du eksplicit aktiverer en funktion, der har brug for det.

## De fire kategorier af samtykke

Åbn **Indstillinger → Privatliv**. Du vil se fire toggles, alle slukkede som standard:

- **Produkt-analytics.** Anonyme sessions-data — antal påkaldelser af funktioner, sessionsvarighed, varigheder af AI-kald. Aldrig indhold. Bruger-ID hashed med SHA-256, 180 dages opbevaring.
- **AI-funktioner.** Nødvendige for at bruge Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte tekst fra canvasset sendes til Google Gemini via vores server-side proxy. Aldrig hele notesbogen.
- **Cloud sync.** Nødvendig for at synkronisere canvasser mellem enheder. Alle notesbøger krypteres på din enhed inden upload. Cloud'en gemmer ciphertext.
- **Crash reporting.** Stack traces og enhedsmetadata når appen crasher. Ingen brugerindhold. Behandles af Sentry med `sendDefaultPii: false`.

Hver toggle er uafhængig. Du kan aktivere Cloud Sync uden Analytics. Du kan bruge AI uden Crash Reporting. Tilladelserne er bevidst granulære.

## Hvad der aldrig indsamles

- Indholdet af dine canvasser (krypteret i hvile med SQLCipher, AES-256)
- De spørgsmål AI'en stiller, eller dine svar
- Lyden du optager med Time Travel (gemmes lokalt; opt-in-sync krypterer inden upload)
- Personligt identificerbare oplysninger af nogen art uden eksplicit samtykke

## Hvordan du verificerer

Kør appen i flytilstand. Gør alt undtagen cloud sync og AI. Observér din firewall eller netværksmonitor. Fluera laver nul netværksforespørgsler med de fire samtykke-toggles slukkede. Det er verificerbart, by design.

## Tilbagekaldelse af samtykke

De fire toggles er altid tilgængelige i **Indstillinger → Privatliv**. At slukke en toggle har øjeblikkelig effekt. De tilknyttede backend-data planlægges til sletning inden for 30 dage.

For sletning på kontoniveau (den fulde ret til at blive glemt), skriv til [privacy@fluera.dev](mailto:privacy@fluera.dev) fra adressen på din konto.

## Education-konti

Hvis din institution administrerer din Fluera-konto, gælder ovenstående adfærd stadig for *dine* data. Administratoren kan se aggregerede brugsstatistikker til compliance-audits (via audit-trail), men kan ikke læse indholdet af dine notesbøger. Krypteringen håndhæves på din enhed; nøglen ligger i din keychain, ikke i noget admin-system.

## Næste

- [Setup af cloud sync](/da/docs/cloud-sync)
- [Sikkerhedsarkitektur](/da/security/architecture) — den fulde model
