---
lang: "no"
title: "Personvern og AI-samtykke"
description: "Hvilke data Fluera samler inn, hvilket samtykke du gir, og hvordan du slår av alt."
section: settings
sectionLabel: "Innstillinger"
order: 1
updatedAt: 2026-06-29
---

Fluera er et local-first-verktøy. Som standard forlater ingenting enheten din med mindre du eksplisitt aktiverer en funksjon som krever det.

## De fire samtykkekategoriene

Åpne **Innstillinger → Personvern**. Du ser fire brytere, alle av som standard:

- **Produkt-analytics.** Anonyme øktdata — antall funksjons-aktiveringer, øktvarighet, varighet på AI-kall. Aldri innhold. Bruker-ID hashet i SHA-256, 180 dagers oppbevaring.
- **AI-funksjoner.** Påkrevd for å bruke Socratic, Ghost Map, LaTeX OCR og Fog of War. Den valgte teksten fra canvaset sendes til Google Gemini-modeller via Google Vertex AI, behandlet i EU (europe-west4 NL / europe-west1 BE). Aldri hele notatboken.
- **Sky-synkronisering.** Påkrevd for å synkronisere canvas mellom enheter. Synkroniserte data krypteres under overføring (TLS) og i hvile på EU-infrastruktur (Supabase, eu-north-1). De er ikke ende-til-ende-kryptert: Fluera kan som behandlingsansvarlig få tilgang til dem, men selger dem aldri og bruker dem aldri til annonsering.
- **Crash reporting.** Stack traces og enhets-metadata når appen krasjer. Ingen brukerinnhold. Behandlet av Sentry med `sendDefaultPii: false`.

Hver bryter er uavhengig. Du kan aktivere Sky-synkronisering uten Analytics. Du kan bruke AI uten Crash Reporting. Tillatelsene er granulære med vilje.

## Kognitivt minne (på enheten, opt-out)

Atskilt fra de fire sky-samtykkene over: som standard indekserer Fluera notatene dine **kun på enheten din** for å drive automatiske titler, konseptkartet (Ghost Map) og spaced repetition (FSRS). Denne indeksen **forlater aldri enheten din** — ingen innhold sendes til skyen (i motsetning til *AI-funksjoner* og *Sky-synkronisering*). Du kan slå den av i **Innstillinger → Personvern → Kognitivt minne**: indekseringen stopper, og de kognitive dataene som allerede er bygget på enheten slettes umiddelbart (notatene dine forblir intakte). Rettslig grunnlag: berettiget interesse med en rett til å protestere (GDPR Art. 6.1.f / 21) — derfor er det på som standard og opt-out, ikke et opt-in-samtykke som de fire over.

## Hva som aldri samles inn

- Innholdet i canvasene dine (kryptert i hvile med SQLCipher, AES-256)
- Spørsmålene AI-en stiller, eller svarene dine
- Lyden du tar opp med Time Travel (lagret lokalt; opt-in-synk overfører den kryptert under overføring (TLS) og lagrer den på EU-infrastruktur, ikke ende-til-ende-kryptert)
- Personidentifiserbar informasjon av noen art uten eksplisitt samtykke

## Hvordan du verifiserer

Kjør appen i flymodus. Gjør alt unntatt sky-synkronisering og AI. Observer brannmuren eller nettverksmonitoren din. Fluera gjør null nettverksforespørsler med alle fire samtykke-bryterne av. Det er verifiserbart, by design.

## Tilbakekalle samtykke

De fire bryterne er alltid tilgjengelige i **Innstillinger → Personvern**. Å slå av en bryter får umiddelbar effekt. Tilknyttede backend-data planlegges for sletting innen 30 dager.

For sletting på kontonivå (full retten til å bli glemt), skriv til [lorenco@fluera.dev](mailto:lorenco@fluera.dev) fra adressen knyttet til kontoen din.

## Education-kontoer

Hvis institusjonen din administrerer Fluera-kontoen din, gjelder atferdene over fortsatt for *dine* data. Administratoren kan se aggregerte bruksstatistikker for compliance-revisjoner (via revisjonsspor), men kan ikke lese innholdet i notatbøkene dine. Krypteringen håndheves på enheten din; nøkkelen ligger i din keychain, ikke i noe admin-system.

## Neste

- [Oppsett av sky-synkronisering](/no/docs/cloud-sync)
- [Sikkerhetsarkitektur](/no/security/architecture) — hele modellen
