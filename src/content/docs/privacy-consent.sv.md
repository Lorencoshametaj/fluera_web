---
lang: "sv"
title: "Integritet och AI-samtycke"
description: "Vilka data Fluera samlar in, vilket samtycke du ger och hur du stänger av allt."
section: settings
sectionLabel: "Inställningar"
order: 1
updatedAt: 2026-04-20
---

Fluera är ett local-first-verktyg. Som standard lämnar inget din enhet om du inte uttryckligen aktiverar en funktion som kräver det.

## De fyra samtyckeskategorierna

Öppna **Inställningar → Integritet**. Du ser fyra växlar, alla avstängda som standard:

- **Produktanalys.** Anonym sessionsdata — antal funktionsanrop, sessionslängd, AI-anropslängder. Aldrig innehåll. Användar-ID hashat i SHA-256, 180 dagars retention.
- **AI-funktioner.** Krävs för att använda Socratic, Ghost Map, LaTeX-OCR och Fog of War. Den valda texten från canvasen skickas till Google Gemini via vår serverside-proxy. Aldrig hela anteckningsboken.
- **Cloud sync.** Krävs för att synkronisera canvasar mellan enheter. Alla anteckningsböcker krypteras på din enhet före uppladdning. Molnet lagrar ciphertext.
- **Crash reporting.** Stack traces och enhetsmetadata när appen kraschar. Inget användarinnehåll. Behandlas av Sentry med `sendDefaultPii: false`.

Varje växel är oberoende. Du kan aktivera Cloud Sync utan Analytics. Du kan använda AI utan Crash Reporting. Behörigheterna är medvetet granulära.

## Vad som aldrig samlas in

- Innehållet i dina canvasar (krypterat i vila med SQLCipher, AES-256)
- Frågorna AI:n ställer eller dina svar
- Ljudet du spelar in med Time Travel (lagrat lokalt; opt-in-sync krypterar före uppladdning)
- Personligt identifierbar information av något slag utan uttryckligt samtycke

## Hur du verifierar

Kör appen i flygplansläge. Gör allt utom cloud sync och AI. Observera din brandvägg eller nätverksmonitor. Fluera gör noll nätverksförfrågningar med de fyra samtyckesväxlarna avstängda. Det är verifierbart, by design.

## Återkalla samtycke

De fyra växlarna är alltid tillgängliga i **Inställningar → Integritet**. Att stänga av en växel får omedelbar effekt. Den associerade backend-datan schemaläggs för radering inom 30 dagar.

För radering på kontonivå (rätten att bli helt glömd), skriv till [privacy@fluera.dev](mailto:privacy@fluera.dev) från din kontoadress.

## Education-konton

Om din institution administrerar ditt Fluera-konto gäller beteendena ovan fortfarande för *dina* data. Administratören kan se aggregerad användningsstatistik för efterlevnadsrevisioner (via revisionsspår) men kan inte läsa innehållet i dina anteckningsböcker. Krypteringen tillämpas på din enhet; nyckeln ligger i din keychain, inte i något adminsystem.

## Nästa

- [Setup av cloud sync](/sv/docs/cloud-sync)
- [Säkerhetsarkitektur](/sv/security/architecture) — hela modellen
