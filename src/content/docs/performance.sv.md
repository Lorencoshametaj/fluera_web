---
lang: "sv"
title: "Prestandatuning"
description: "Fluera är byggd för att hålla 60 FPS på canvasar med hundratusentals streck. Här är vad du ska kontrollera när det inte händer."
section: troubleshooting
sectionLabel: "Felsökning"
order: 2
updatedAt: 2026-04-20
---

Fluera-motorn är designad för att hålla 60 FPS med strecklatens under 15 ms på modern hårdvara — upp till hundratusentals streck per anteckningsbok. När den inte gör det är det oftast en av en liten uppsättning saker som ligger bakom.

## Diagnos

Öppna **Inställningar → Avancerat → Prestanda**. Du ser:

- **Aktuell FPS** — bör hålla 60 (eller 120 på ProMotion-enheter)
- **Strecklatens** — bör visa <15 ms på iOS/macOS, <20 ms på andra plattformar
- **Använt minne** — absolut och som procent av enhetens budget
- **Tile cache hit rate** — bör vara >90 % under normal zoom/panorera

Om något här är rött finns de troliga skyldiga i listan nedan.

## Stora canvasar (&gt; 200k streck)

Motorn klarar den volymen, men två inställningar spelar roll:

- **Minnesbudget.** På enheter med mindre än 6 GB RAM är Flueras standardminnesbudget konservativ. Om du har gott om RAM och vill ha snabbare zoomsvar, höj till *Generös* i **Inställningar → Canvas → Minnesbudget**.
- **Detaljnivå.** Standard-LOD-policyn förenklar streck vid mycket låga zoomnivåer. Om du märker att streck ser flimmriga ut när zoomen är utzoomad, ändra LOD till *Hög detalj* — men räkna med ~10 % mer GPU-belastning.

## Ljudsynkad inspelning (Time Travel)

Time Travel lagrar ljud tillsammans med streckens tidsstämplar. För en 60-minuters föreläsning är det ungefär 20 MB ljud. Det är inte ljudet som gör saker långsamma — det är indexet. Försök:

- **Inställningar → Time Travel → Indexgranularitet** satt till *Standard* istället för *Fin*
- Radera gamla Time Travel-sessioner du inte behöver (de lagras lokalt som standard; clear-cache-knappen tar bort dem säkert)

## Apple Pencil specifikt

På iPad håller standardläget *Predicted touch* strecklatensen under 8 ms. Om du inaktiverat prediktion (i Inställningar → Canvas → Strecklatens → Standard), gå tillbaka till Predicted. Prediktion är ett Apple Pencil-API, inte en gissning — det använder hårdvarans egen banprediktion.

## När inget hjälper

Kör **Inställningar → Avancerat → Exportera diagnostik**. Du får en liten JSON-fil med FPS-prover, minnesanvändning och (anonym) enhetsinformation. Skicka den till [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivning av när saker blir långsamma.

Vi loggar ≈95 % av användarsynliga prestandaregressioner till en specifik kodbit inom en timme efter att ha tagit emot en diagnostikexport. De återstående 5 % är genuint svåra och vi säger till dig.

## Nästa

- [FAQ](/sv/docs/faq)
- [All användardokumentation](/sv/docs)
