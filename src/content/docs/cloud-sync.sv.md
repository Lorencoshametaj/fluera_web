---
lang: "sv"
title: "Cloud sync"
description: "Hur du synkroniserar canvasar mellan enheter, hur datan skyddas under överföring och lagring, och hur sync fungerar mellan dina enheter."
section: settings
sectionLabel: "Inställningar"
order: 2
updatedAt: 2026-04-20
---

Cloud sync är opt-in per anteckningsbok. Du kan synkronisera en canvas och hålla en annan strikt lokal. Inget flyttas förrän du säger till.

## Aktivera sync på första enheten

1. Öppna **Inställningar → Integritet** och slå på **Cloud sync**.
2. Logga in med ditt konto. Synkroniserad data skyddas under överföringen (TLS) och lagras krypterad i vila på vår EU-infrastruktur (Supabase, eu-north-1).
3. Välj vilka anteckningsböcker som ska synkroniseras. Högerklicka (eller tryck och håll) på en anteckningsbok → **Aktivera sync**.

En liten molnikon visas på varje synkroniserad anteckningsbok. En röd variant indikerar fel; en grå indikerar paus.

## Lägg till en andra enhet

1. Installera Fluera på den andra enheten.
2. Logga in med samma konto.
3. Cloud sync startar. Räkna med att den första kompletta synkroniseringen tar några minuter för en medelstor anteckningsbok.

## Vad som skyddas och hur

- Den lokala databasen på din enhet är krypterad i vila med SQLCipher (AES-256).
- När du exporterar en `.fluera`-fil krypteras den med AES-256-GCM.
- Synkroniserad data skyddas under överföringen med TLS 1.3 och moderna chiffersviter, och lagras krypterad i vila på vår EU-infrastruktur (Supabase, eu-north-1).

Cloud sync är **inte** end-to-end-krypterad: som personuppgiftsansvarig kan Fluera tekniskt komma åt synkroniserat innehåll. Vi säljer det aldrig och använder det aldrig för annonsering. Anteckningsboktitlar, tidsstämplar och storlek lagras tillsammans med innehållet på samma EU-infrastruktur.

## Åtkomst till kontot

Synkroniserad data är knuten till ditt konto och skyddas i vila på vår EU-infrastruktur. Om du tappar åtkomsten till ditt konto kan du återställa det via vanlig kontoåterställning och återansluta dina enheter — synkroniserade anteckningsböcker laddas ner på nytt.

Den lokala kopian på varje enhet förblir krypterad i vila med SQLCipher.

## Konfliktlösning

Om du redigerar samma canvas på två enheter samtidigt medan en är offline, använder Fluera en CRDT med vector clocks för att slå samman utan konflikter. Du tappar inte arbete. I sällsynta fall där den automatiska sammanslagningen är tvetydig ser du en "merge needed"-markör på den drabbade noden och en sida-vid-sida-vy för att bekräfta.

## Inaktivera sync för en specifik anteckningsbok

Högerklicka (eller tryck och håll) på en anteckningsbok → **Inaktivera sync**. Molnkopian återkallas omedelbart. Den lokala kopian förblir intakt.

## Nästa

- [FAQ och felsökning](/sv/docs/faq)
- [Säkerhetsarkitektur](/sv/security/architecture)
