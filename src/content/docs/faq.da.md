---
lang: "da"
title: "FAQ"
description: "Spørgsmålene vi oftest får fra beta-testere. Hvis noget her er forældet, så skriv til support, og vi retter det."
section: troubleshooting
sectionLabel: "Fejlfinding"
order: 1
updatedAt: 2026-04-20
---

## Hvorfor er mit canvas langsomt at åbne, når jeg ikke har brugt det i en uge?

Første gang Fluera indlæser en notesbog efter en pause, genopbygger den det rumlige indeks og revurderer, hvilke noder der skal repeteres. De følgende åbninger er hurtige. Hvis pausen var på mere end en måned, så forvent også at planlæggeren for distribueret gentagelse rekalibrerer dine ventende repetitioner.

Hvis den første åbning tager mere end 10 sekunder på en moderne enhed, er det en bug — skriv til [support@fluera.dev](mailto:support@fluera.dev) med navnet på canvasset og det omtrentlige antal noder.

## Kan jeg importere mine Anki-decks?

Ikke endnu. Import er på roadmappet, men er ikke en blocker for Phase 1 — Flueras genfindingsmodel er strukturelt anderledes (rumlig, ikke atomisk), så en direkte import ville miste det meste af værdien. Når den kommer, vil den være tilgængelig for Pro- og Education-konti.

## Kan jeg eksportere mine canvasser til PNG / SVG / PDF?

Ja, alle sammen, plus vores åbne `.fluera`-format. Se menuen **Eksportér**. Ingen begrænsninger pr. tier — eksport er en grundlæggende funktion for dataejerskab, ikke en paywall'd funktion.

## AI'en gav mig et forkert svar. Er det forventet?

Nogle gange, ja. Vores AI er Google Gemini, og Gemini — som enhver LLM — kan hallucinere. Socratic Mode er mindre udsat for det, fordi den stiller spørgsmål i stedet for at producere endelige svar, men det er ikke nul.

Hvis du modtager et tydeligt forkert AI-svar, så tryk på **Markér** i svaret. Den feedback bruges til at forbedre prompt'en; den anonymiseres og knyttes aldrig til dit indhold.

## Vil Fluera fungere uden internet?

Canvasset — skrivning, læsning, eksport — er fuldstændigt offline. AI-funktioner (Socratic, Ghost Map, scoring i Fog of War) kræver internet. Planlægning af distribueret gentagelse er lokal; kun sync og AI kræver forbindelse.

## Jeg er i Danmark. Og GDPR?

Fuldt overholdt. Fluera hostes i EU og er GDPR-native. Du kan udøve dine rettigheder (adgang, berigtigelse, sletning, dataportabilitet) via **Indstillinger → Privatliv** eller ved at skrive til [privacy@fluera.dev](mailto:privacy@fluera.dev). Svar inden for 30 dage; typisk inden for 48 timer.

## Pencil'en hakker på min iPad. Hvad er galt?

Tjek først, at Fluera er opdateret. Dernæst: **Indstillinger → Canvas → Streg-latens** skal læse *Predicted (anbefalet)* for Apple Pencil-enheder. Hvis der står *Standard* eller *Low-power*, så skift tilbage til Predicted.

Hvis hakket fortsætter med Predicted slået til, så luk og genstart. Hvis det stadig fortsætter, så skriv til os med din iPad-model — der er en regression på iPad Air 3, vi aktivt sporer.

## Hvordan rapporterer jeg en bug?

[support@fluera.dev](mailto:support@fluera.dev). Beskriv hvad du var ved at gøre, hvad du forventede, hvad der skete, og inkluder app-versionen (Indstillinger → Om). Skærmbilleder hjælper.

For sikkerhedssårbarheder, brug [security@fluera.dev](mailto:security@fluera.dev) og kryptér med vores PGP-nøgle (på vores GitHub-profil).

## Hvordan giver jeg feedback om pædagogikken?

Vi læser hver eneste e-mail. [hello@fluera.dev](mailto:hello@fluera.dev) går direkte til grundlæggerne. Særligt nyttigt: hvad der *ikke* virkede for dig, hvad der føltes som friktion, der ikke var ønskværdig, og alt der overraskede dig.

## Næste

- [Tuning af ydeevne](/da/docs/performance) — få mest ud af store canvasser
- [Hele brugerdokumentationen](/da/docs)
