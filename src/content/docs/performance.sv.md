---
lang: "sv"
title: "Prestandatuning"
description: "Fluera siktar på 60 FPS och bläck med låg latens på hårdvara som stöds. Den faktiska prestandan varierar med enhet, canvas-komplexitet och aktiva funktioner."
section: troubleshooting
sectionLabel: "Felsökning"
order: 2
updatedAt: 2026-04-20
---

Fluera-motorn siktar på 60 FPS och bläck med låg latens på hårdvara som stöds. Den faktiska prestandan varierar med enhet, inputstack, canvas-komplexitet och aktiva funktioner.

## Diagnos

Öppna **Inställningar → Avancerat → Prestanda**. Du ser:

- **Aktuell FPS** — bör hålla 60 (eller 120 på ProMotion-enheter)
- **Strecklatens** — jämför mätningen med det dokumenterade målet för din enhet och inputstack; det finns inget universellt gränsvärde
- **Använt minne** — absolut och som procent av enhetens budget
- **Tile cache hit rate** — bör vara >90 % under normal zoom/panorera

Om något här är rött finns de troliga skyldiga i listan nedan.

## Stora canvasar

Stora canvasar kan behöva justeras. Börja med de här två inställningarna:

- **Minnesbudget.** På enheter med mindre än 6 GB RAM är Flueras standardminnesbudget konservativ. Om du har gott om RAM och vill ha snabbare zoomsvar, höj till *Generös* i **Inställningar → Canvas → Minnesbudget**.
- **Detaljnivå.** Standard-LOD-policyn förenklar streck vid mycket låga zoomnivåer. Om du märker att streck ser flimmriga ut när zoomen är utzoomad, ändra LOD till *Hög detalj* — men räkna med ~10 % mer GPU-belastning.

## Ljudsynkad inspelning (Time Travel)

Time Travel lagrar ljud tillsammans med streckens tidsstämplar. För en 60-minuters föreläsning är det ungefär 20 MB ljud. Det är inte ljudet som gör saker långsamma — det är indexet. Försök:

- **Inställningar → Time Travel → Indexgranularitet** satt till *Standard* istället för *Fin*
- Radera gamla Time Travel-sessioner du inte behöver (de lagras lokalt som standard; clear-cache-knappen tar bort dem säkert)

## Apple Pencil specifikt

På iPad är standardläget *Predicted touch* utformat för att minska den upplevda strecklatensen. Resultatet varierar med iPad, Pencil, systemversion och canvasbelastning. Om du inaktiverat prediktion (i Inställningar → Canvas → Strecklatens → Standard), gå tillbaka till Predicted. Prediktion är ett Apple Pencil-API, inte en gissning — det använder hårdvarans egen banprediktion.

## När inget hjälper

Kör **Inställningar → Avancerat → Exportera diagnostik**. Du får en liten JSON-fil med FPS-prover, minnesanvändning och (anonym) enhetsinformation. Skicka den till [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivning av när saker blir långsamma.

Diagnostikdata hjälper supporten att undersöka prestandaproblem. Undersökningens längd och resultat varierar beroende på problemet och tillgängliga data.

## Nästa

- [FAQ](/sv/docs/faq)
- [All användardokumentation](/sv/docs)
