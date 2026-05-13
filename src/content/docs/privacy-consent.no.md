---
lang: "no"
title: "Personvern og AI-samtykke"
description: "Hvilke data Fluera samler inn, hvilket samtykke du gir, og hvordan du slår av alt."
section: settings
sectionLabel: "Innstillinger"
order: 1
updatedAt: 2026-04-20
---

Fluera er et local-first-verktøy. Som standard forlater ingenting enheten din med mindre du eksplisitt aktiverer en funksjon som krever det.

## De fire samtykkekategoriene

Åpne **Innstillinger → Personvern**. Du ser fire brytere, alle av som standard:

- **Produkt-analytics.** Anonyme øktdata — antall funksjons-aktiveringer, øktvarighet, varighet på AI-kall. Aldri innhold. Bruker-ID hashet i SHA-256, 180 dagers oppbevaring.
- **AI-funksjoner.** Påkrevd for å bruke Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte teksten fra canvaset sendes til Google Gemini via vår server-side proxy. Aldri hele notatboken.
- **Sky-synkronisering.** Påkrevd for å synkronisere canvas mellom enheter. Alle notatbøker krypteres på enheten din før opplasting. Skyen lagrer ciphertext.
- **Crash reporting.** Stack traces og enhets-metadata når appen krasjer. Ingen brukerinnhold. Behandlet av Sentry med `sendDefaultPii: false`.

Hver bryter er uavhengig. Du kan aktivere Sky-synkronisering uten Analytics. Du kan bruke AI uten Crash Reporting. Tillatelsene er granulære med vilje.

## Hva som aldri samles inn

- Innholdet i canvasene dine (kryptert i hvile med SQLCipher, AES-256)
- Spørsmålene AI-en stiller, eller svarene dine
- Lyden du tar opp med Time Travel (lagret lokalt; opt-in-synk krypterer før opplasting)
- Personidentifiserbar informasjon av noen art uten eksplisitt samtykke

## Hvordan du verifiserer

Kjør appen i flymodus. Gjør alt unntatt sky-synkronisering og AI. Observer brannmuren eller nettverksmonitoren din. Fluera gjør null nettverksforespørsler med alle fire samtykke-bryterne av. Det er verifiserbart, by design.

## Tilbakekalle samtykke

De fire bryterne er alltid tilgjengelige i **Innstillinger → Personvern**. Å slå av en bryter får umiddelbar effekt. Tilknyttede backend-data planlegges for sletting innen 30 dager.

For sletting på kontonivå (full retten til å bli glemt), skriv til [privacy@fluera.dev](mailto:privacy@fluera.dev) fra adressen knyttet til kontoen din.

## Education-kontoer

Hvis institusjonen din administrerer Fluera-kontoen din, gjelder atferdene over fortsatt for *dine* data. Administratoren kan se aggregerte bruksstatistikker for compliance-revisjoner (via revisjonsspor), men kan ikke lese innholdet i notatbøkene dine. Krypteringen håndheves på enheten din; nøkkelen ligger i din keychain, ikke i noe admin-system.

## Neste

- [Oppsett av sky-synkronisering](/no/docs/cloud-sync)
- [Sikkerhetsarkitektur](/no/security/architecture) — hele modellen
