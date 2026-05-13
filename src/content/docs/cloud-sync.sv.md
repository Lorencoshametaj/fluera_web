---
lang: "sv"
title: "Cloud sync"
description: "Hur du synkroniserar canvasar mellan enheter, vad som krypteras och hur du återhämtar dig om du tappar lösenfrasen."
section: settings
sectionLabel: "Inställningar"
order: 2
updatedAt: 2026-04-20
---

Cloud sync är opt-in per anteckningsbok. Du kan synkronisera en canvas och hålla en annan strikt lokal. Inget flyttas förrän du säger till.

## Aktivera sync på första enheten

1. Öppna **Inställningar → Integritet** och slå på **Cloud sync**.
2. Skapa eller ange din **sync-lösenfras**. Den är *separat* från kontolösenordet. Lösenfrasen används för att härleda krypteringsnyckeln — och lagras endast på din enhet, aldrig på våra servrar.
3. Välj vilka anteckningsböcker som ska synkroniseras. Högerklicka (eller tryck och håll) på en anteckningsbok → **Aktivera sync**.

En liten molnikon visas på varje synkroniserad anteckningsbok. En röd variant indikerar fel; en grå indikerar paus.

## Lägg till en andra enhet

1. Installera Fluera på den andra enheten.
2. Logga in med samma konto.
3. Ange *samma* sync-lösenfras när du blir tillfrågad. Lösenfrasen kan inte återställas — om du inte har den är de krypterade datan inte läsbar på den nya enheten.
4. Cloud sync startar. Räkna med att den första kompletta synkroniseringen tar några minuter för en medelstor anteckningsbok.

## Vad som krypteras och hur

- Varje anteckningsbok krypteras lokalt med en nyckel per anteckningsbok.
- Dessa nycklar krypteras med en root key som härleds från din sync-lösenfras via PBKDF2-SHA256, 256 000 iterationer.
- Endast de krypterade byten når servern. Vi kan inte läsa dina anteckningsböcker.

Metadata (anteckningsboktitlar, tidsstämplar, storlek) är också krypterade — servern ser opaka blobs och sync-tidsstämplar.

## Om du tappar lösenfrasen

Om du glömmer lösenfrasen och inte har en enhet som fortfarande har en nyckel i cache, är dina krypterade data **oåterkalleligen förlorade**. Det är medvetet. Alternativet — en återställningsmekanism på serversidan — skulle bryta end-to-end-modellen och är en avvägning vi inte är villiga att göra för konsumentkonton.

För **Education-konton** kan en valfri återställningsnyckel som hålls av administratören konfigureras vid driftsättning. Det är ett uttryckligt opt-in, dokumenterat i det institutionella DPA:t och granskat.

## Konfliktlösning

Om du redigerar samma canvas på två enheter samtidigt medan en är offline, använder Fluera en CRDT med vector clocks för att slå samman utan konflikter. Du tappar inte arbete. I sällsynta fall där den automatiska sammanslagningen är tvetydig ser du en "merge needed"-markör på den drabbade noden och en sida-vid-sida-vy för att bekräfta.

## Inaktivera sync för en specifik anteckningsbok

Högerklicka (eller tryck och håll) på en anteckningsbok → **Inaktivera sync**. Molnkopian återkallas omedelbart. Den lokala kopian förblir intakt.

## Nästa

- [FAQ och felsökning](/sv/docs/faq)
- [Säkerhetsarkitektur](/sv/security/architecture)
