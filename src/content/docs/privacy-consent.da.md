---
lang: "da"
title: "Privatliv og AI-samtykke"
description: "Hvilke data Fluera indsamler, hvilket samtykke du giver, og hvordan du slukker det hele."
section: settings
sectionLabel: "Indstillinger"
order: 1
updatedAt: 2026-06-29
---

Fluera er et local-first-værktøj. Som standard forlader intet din enhed, medmindre du eksplicit aktiverer en funktion, der har brug for det.

## De fire kategorier af samtykke

Åbn **Indstillinger → Privatliv**. Du vil se fire toggles, alle slukkede som standard:

- **Produkt-analytics.** Anonyme sessions-data — antal påkaldelser af funktioner, sessionsvarighed, varigheder af AI-kald. Aldrig indhold. Bruger-ID hashed med SHA-256, 180 dages opbevaring.
- **AI-funktioner.** Nødvendige for at bruge Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte tekst fra canvasset sendes til Google Gemini-modeller, der serveres via Google Vertex AI og behandles i EU (europe-west4 NL / europe-west1 BE). Aldrig hele notesbogen.
- **Cloud sync.** Nødvendig for at synkronisere canvasser mellem enheder. Synkroniserede data krypteres under overførsel (TLS) og i hvile på EU-infrastruktur (Supabase, eu-north-1). Det er ikke end-to-end-krypteret: Fluera kan som dataansvarlig tilgå dem, men sælger dem aldrig og bruger dem aldrig til annoncering.
- **Crash reporting.** Stack traces og enhedsmetadata når appen crasher. Ingen brugerindhold. Behandles af Sentry med `sendDefaultPii: false`.

Hver toggle er uafhængig. Du kan aktivere Cloud Sync uden Analytics. Du kan bruge AI uden Crash Reporting. Tilladelserne er bevidst granulære.

## Kognitiv hukommelse (on-device, opt-out)

Adskilt fra de fire cloud-samtykker ovenfor: som standard indekserer Fluera dine noter **kun på din enhed** for at drive automatiske titler, konceptkortet (Ghost Map) og spaced repetition (FSRS). Dette indeks **forlader aldrig din enhed** — intet indhold sendes til skyen (i modsætning til *AI-funktioner* og *Cloud sync*). Du kan slukke det i **Indstillinger → Privatliv → Kognitiv hukommelse**: indekseringen stopper, og de kognitive data, der allerede er bygget på enheden, slettes øjeblikkeligt (dine noter forbliver intakte). Retsgrundlag: legitim interesse med en ret til at gøre indsigelse (GDPR Art. 6.1.f / 21) — hvilket er grunden til, at det er tændt som standard og opt-out, ikke et opt-in-samtykke som de fire ovenfor.

## Hvad der aldrig indsamles

- Indholdet af dine canvasser (krypteret i hvile med SQLCipher, AES-256)
- De spørgsmål AI'en stiller, eller dine svar
- Lyden du optager med Time Travel (gemmes lokalt; opt-in-sync overfører den krypteret under overførsel (TLS) og i hvile på EU-infrastruktur, ikke end-to-end-krypteret)
- Personligt identificerbare oplysninger af nogen art uden eksplicit samtykke

## Hvordan du verificerer

Kør appen i flytilstand. Gør alt undtagen cloud sync og AI. Observér din firewall eller netværksmonitor. Fluera laver nul netværksforespørgsler med de fire samtykke-toggles slukkede. Det er verificerbart, by design.

## Tilbagekaldelse af samtykke

De fire toggles er altid tilgængelige i **Indstillinger → Privatliv**. At slukke en toggle har øjeblikkelig effekt. De tilknyttede backend-data planlægges til sletning inden for 30 dage.

For sletning på kontoniveau (den fulde ret til at blive glemt), skriv til [lorenco@fluera.dev](mailto:lorenco@fluera.dev) fra adressen på din konto.

## Education-konti

Hvis din institution administrerer din Fluera-konto, gælder ovenstående adfærd stadig for *dine* data. Administratoren kan se aggregerede brugsstatistikker til compliance-audits (via audit-trail), men kan ikke læse indholdet af dine notesbøger. Krypteringen håndhæves på din enhed; nøglen ligger i din keychain, ikke i noget admin-system.

## Næste

- [Setup af cloud sync](/da/docs/cloud-sync)
- [Sikkerhedsarkitektur](/da/security/architecture) — den fulde model
