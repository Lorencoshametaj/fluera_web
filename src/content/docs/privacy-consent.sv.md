---
lang: "sv"
title: "Integritet och AI-samtycke"
description: "Vilka data Fluera samlar in, vilket samtycke du ger och hur du stänger av allt."
section: settings
sectionLabel: "Inställningar"
order: 1
updatedAt: 2026-06-29
---

Fluera är ett local-first-verktyg. Som standard lämnar inget din enhet om du inte uttryckligen aktiverar en funktion som kräver det.

## De fyra samtyckeskategorierna

Öppna **Inställningar → Integritet**. Du ser fyra växlar, alla avstängda som standard:

- **Produktanalys.** Anonym sessionsdata — antal funktionsanrop, sessionslängd, AI-anropslängder. Aldrig innehåll. Användar-ID hashat i SHA-256, 180 dagars retention.
- **AI-funktioner.** Krävs för att använda Socratic, Ghost Map, LaTeX-OCR och Fog of War. Den valda texten från canvasen skickas till Google Gemini-modeller via Google Vertex AI och behandlas i EU (europe-west4 NL / europe-west1 BE). Aldrig hela anteckningsboken.
- **Cloud sync.** Krävs för att synkronisera canvasar mellan enheter. Synkroniserade data krypteras under överföring (TLS) och i vila på EU-infrastruktur (Supabase, eu-north-1). Det är inte end-to-end-krypterat: Fluera kan som personuppgiftsansvarig komma åt innehållet, men säljer det aldrig och använder det aldrig för annonsering.
- **Crash reporting.** Stack traces och enhetsmetadata när appen kraschar. Inget användarinnehåll. Behandlas av Sentry med `sendDefaultPii: false`.

Varje växel är oberoende. Du kan aktivera Cloud Sync utan Analytics. Du kan använda AI utan Crash Reporting. Behörigheterna är medvetet granulära.

## Kognitivt minne (på enheten, opt-out)

Skilt från de fyra molnsamtyckena ovan: som standard indexerar Fluera dina anteckningar **endast på din enhet** för att driva automatiska titlar, konceptkartan (Ghost Map) och spaced repetition (FSRS). Detta index **lämnar aldrig din enhet** — inget innehåll skickas till molnet (till skillnad från *AI-funktioner* och *Cloud sync*). Du kan stänga av det i **Inställningar → Integritet → Kognitivt minne**: indexeringen stoppas och den kognitiva data som redan byggts på enheten raderas omedelbart (dina anteckningar förblir intakta). Rättslig grund: berättigat intresse med rätt att invända (GDPR Art. 6.1.f / 21) — vilket är varför det är på som standard och opt-out, inte ett opt-in-samtycke som de fyra ovan.

## Vad som aldrig samlas in

- Innehållet i dina canvasar (krypterat i vila med SQLCipher, AES-256)
- Frågorna AI:n ställer eller dina svar
- Ljudet du spelar in med Time Travel (lagrat lokalt; opt-in-sync krypteras under överföring (TLS) och i vila på EU-infrastruktur, inte end-to-end)
- Personligt identifierbar information av något slag utan uttryckligt samtycke

## Hur du verifierar

Kör appen i flygplansläge. Gör allt utom cloud sync och AI. Observera din brandvägg eller nätverksmonitor. Fluera gör noll nätverksförfrågningar med de fyra samtyckesväxlarna avstängda. Det är verifierbart, by design.

## Återkalla samtycke

De fyra växlarna är alltid tillgängliga i **Inställningar → Integritet**. Att stänga av en växel får omedelbar effekt. Den associerade backend-datan schemaläggs för radering inom 30 dagar.

För radering på kontonivå (rätten att bli helt glömd), skriv till [lorenco@fluera.dev](mailto:lorenco@fluera.dev) från din kontoadress.

## Education-konton

Om din institution administrerar ditt Fluera-konto gäller beteendena ovan fortfarande för *dina* data. Administratören kan se aggregerad användningsstatistik för efterlevnadsrevisioner (via revisionsspår) men har ingen åtkomst till innehållet i dina anteckningsböcker. På din enhet skyddas innehållet av kryptering i vila (SQLCipher); nyckeln ligger i din keychain, inte i något adminsystem. Om du aktiverar cloud sync lagras innehållet på EU-infrastruktur där Fluera som personuppgiftsansvarig tekniskt kan komma åt det, men aldrig din administratör.

## Nästa

- [Setup av cloud sync](/sv/docs/cloud-sync)
- [Säkerhetsarkitektur](/sv/security/architecture) — hela modellen
