---
lang: "sv"
title: "FAQ"
description: "Frågorna vi får mest från betatestare. Om något här är inaktuellt, skriv till supporten så fixar vi det."
section: troubleshooting
sectionLabel: "Felsökning"
order: 1
updatedAt: 2026-04-20
---

## Varför är min canvas långsam att öppna efter att jag inte använt den på en vecka?

Första gången Fluera laddar en anteckningsbok efter en paus återbygger den det rumsliga indexet och omvärderar vilka noder som är på väg att förfalla för review. Efterföljande öppningar är snabba. Om pausen var längre än en månad, räkna också med att schemaläggaren för distribuerad repetition omkalibrerar dina väntande reviews.

Om den första öppningen tar mer än 10 sekunder på en modern enhet är det en bugg — skriv till [support@fluera.dev](mailto:support@fluera.dev) med canvasens namn och ungefärligt antal noder.

## Kan jag importera mina Anki-decks?

Inte än. Import finns på roadmappen men är inte en blockerare för Phase 1 — Flueras återhämtningsmodell är strukturellt annorlunda (rumslig, inte atomär), så en direkt import skulle förlora det mesta av värdet. När den kommer blir den tillgänglig för Pro- och Education-konton.

## Kan jag exportera mina canvasar till PNG / SVG / PDF?

Ja, alla, plus vårt öppna `.fluera`-format. Se menyn **Exportera**. Inga restriktioner per tier — export är en grundläggande funktion för dataägarskap, inte något bakom betalvägg.

## AI:n gav mig ett felaktigt svar. Är det förväntat?

Ibland, ja. Vår AI är Google Gemini, och Gemini — som varje LLM — kan hallucinera. Socratic Mode är mindre utsatt eftersom den ställer frågor istället för att producera definitiva svar, men inte noll.

Om du får ett tydligt felaktigt AI-svar, tryck på **Flagga** på svaret. Den feedbacken används för att förbättra promptingen; den är anonymiserad och aldrig kopplad till ditt innehåll.

## Fungerar Fluera utan internet?

Canvasen — skriva, läsa, exportera — är helt offline. AI-funktionerna (Socratic, Ghost Map, Fog of War-poängsättning) behöver internet. Schemaläggning av distribuerad repetition är lokal; bara sync och AI behöver anslutning.

## Jag är i Sverige. Och GDPR?

Fullt kompatibel. Fluera hostas i EU och är GDPR-native. Du kan utöva dina rättigheter (åtkomst, rättelse, radering, portabilitet) via **Inställningar → Integritet** eller genom att skriva till [privacy@fluera.dev](mailto:privacy@fluera.dev). Svar inom 30 dagar; oftast inom 48 timmar.

## Pencil laggar på min iPad. Vad är fel?

Kontrollera först att Fluera är uppdaterad. Sedan: **Inställningar → Canvas → Strecklatens** ska visa *Predicted (rekommenderad)* för Apple Pencil-enheter. Om den visar *Standard* eller *Low-power*, gå tillbaka till Predicted.

Om laggen kvarstår med Predicted på, stäng och starta om. Om den ändå kvarstår, skriv till oss med din iPad-modell — det finns en regression på iPad Air 3 som vi aktivt spårar.

## Hur rapporterar jag en bugg?

[support@fluera.dev](mailto:support@fluera.dev). Beskriv vad du gjorde, vad du förväntade dig, vad som hände, och inkludera appversionen (Inställningar → Om). Skärmdumpar hjälper.

För säkerhetssårbarheter, använd [security@fluera.dev](mailto:security@fluera.dev) och kryptera med vår PGP-nyckel (på vår GitHub-profil).

## Hur ger jag feedback på pedagogiken?

Vi läser varje mejl. [hello@fluera.dev](mailto:hello@fluera.dev) går direkt till grundarna. Särskilt användbart: vad som *inte* fungerade för dig, vad som kändes som friktion som inte var önskvärd, och något som överraskade dig.

## Nästa

- [Prestandatuning](/sv/docs/performance) — få ut mesta möjliga av stora canvasar
- [All användardokumentation](/sv/docs)
