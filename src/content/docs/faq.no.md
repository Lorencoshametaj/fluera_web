---
lang: "no"
title: "FAQ"
description: "Spørsmålene vi får mest fra beta-testere. Hvis noe her er utdatert, skriv til support, så fikser vi det."
section: troubleshooting
sectionLabel: "Feilsøking"
order: 1
updatedAt: 2026-04-20
---

## Hvorfor er canvaset mitt tregt å åpne etter at jeg ikke har brukt det på en uke?

Første gang Fluera laster en notatbok etter en pause, bygger den om den romlige indeksen og revurderer hvilke noder som forfaller til repetisjon. Påfølgende åpninger er raske. Hvis pausen var på mer enn en måned, forvent også at planleggeren for distribuert repetisjon rekalibrerer ventende repetisjoner.

Hvis første åpning tar mer enn 10 sekunder på en moderne enhet, er det en feil — skriv til [support@fluera.dev](mailto:support@fluera.dev) med navnet på canvaset og omtrentlig nodetall.

## Kan jeg importere Anki-deckene mine?

Ikke ennå. Import er på roadmapen, men er ikke en blocker for Fase 1 — Flueras gjenkalling-modell er strukturelt annerledes (romlig, ikke atomær), så en direkte import ville mistet mesteparten av verdien. Når den kommer, blir den tilgjengelig for Pro- og Education-kontoer.

## Kan jeg eksportere canvas til PNG / SVG / PDF?

Ja, alle, pluss vårt åpne `.fluera`-format. Se **Eksport**-menyen. Ingen tier-restriksjoner — eksport er en grunnleggende funksjon for dataeierskap, ikke noe som skal stå bak betalingsmur.

## AI-en ga meg et feil svar. Er det forventet?

Av og til, ja. AI-en vår er Google Gemini, og Gemini — som alle LLM-er — kan hallusinere. Socratic Mode er mindre utsatt for dette fordi det stiller spørsmål i stedet for å produsere definitive svar, men det er ikke null.

Hvis du får et åpenbart feil AI-svar, trykk på **Flagg** i svaret. Tilbakemeldingen brukes til å forbedre prompting; den er anonymisert og aldri knyttet til innholdet ditt.

## Funker Fluera uten internett?

Canvaset — skriving, lesing, eksport — er helt offline. AI-funksjoner (Socratic, Ghost Map, Fog of War-scoring) krever internett. Planlegging av distribuert repetisjon er lokal; bare synkronisering og AI trenger tilkobling.

## Jeg er i Norge. Og GDPR?

Fullt kompatibel. Fluera hostes i EU og er GDPR-native. Du kan utøve rettighetene dine (innsyn, retting, sletting, dataportabilitet) via **Innstillinger → Personvern** eller ved å skrive til [privacy@fluera.dev](mailto:privacy@fluera.dev). Svar innen 30 dager; vanligvis innen 48 timer.

## Apple Pencil henger på iPaden min. Hva er galt?

Først, sjekk at Fluera er oppdatert. Deretter: **Innstillinger → Canvas → Strek-latens** bør stå på *Predicted (anbefalt)* for Apple Pencil-enheter. Hvis den står på *Standard* eller *Low-power*, sett den tilbake til Predicted.

Hvis lagget vedvarer med Predicted på, lukk og start på nytt. Hvis det fortsatt vedvarer, skriv til oss med iPad-modellen din — det er en regresjon på iPad Air 3 vi sporer aktivt.

## Hvordan rapporterer jeg en feil?

[support@fluera.dev](mailto:support@fluera.dev). Beskriv hva du holdt på med, hva du forventet, hva som skjedde, og inkluder app-versjonen (Innstillinger → Om). Skjermbilder hjelper.

For sikkerhetssårbarheter, bruk [security@fluera.dev](mailto:security@fluera.dev) og krypter med PGP-nøkkelen vår (på GitHub-profilen vår).

## Hvordan gir jeg tilbakemelding på pedagogikken?

Vi leser hver e-post. [hello@fluera.dev](mailto:hello@fluera.dev) går rett til grunnleggerne. Spesielt nyttig: hva som *ikke* funket for deg, hva som føltes som friksjon som ikke var ønsket, og alt som overrasket deg.

## Neste

- [Ytelses-tuning](/no/docs/performance) — få mest mulig ut av store canvas
- [All brukerdokumentasjon](/no/docs)
