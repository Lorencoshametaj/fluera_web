---
lang: "nl"
title: "Performance-tuning"
description: "Fluera is gebouwd om 60 FPS aan te houden op canvasses met honderdduizenden streken. Hier lees je wat je moet controleren wanneer dat niet lukt."
section: troubleshooting
sectionLabel: "Probleemoplossing"
order: 2
updatedAt: 2026-04-20
---

De engine van Fluera is ontworpen om 60 FPS aan te houden met streek-latentie onder de 15 ms op moderne hardware — tot honderdduizenden streken per notitieboek. Wanneer dat niet lukt, is meestal een van een kleine reeks oorzaken verantwoordelijk.

## Diagnose

Open **Instellingen → Geavanceerd → Prestaties**. Je ziet:

- **Huidige FPS** — moet op 60 staan (of 120 op ProMotion-apparaten)
- **Streek-latentie** — moet < 15 ms zijn op iOS/macOS, < 20 ms op andere platformen
- **Gebruikt geheugen** — absoluut en als percentage van het apparaatbudget
- **Tile cache hit rate** — moet > 90% zijn tijdens normaal zoomen/pannen

Staat hier iets op rood, dan staan de waarschijnlijke boosdoeners in de lijst hieronder.

## Grote canvasses (&gt; 200k streken)

De engine kan dit volume aan, maar twee instellingen doen ertoe:

- **Geheugenbudget.** Op apparaten met minder dan 6 GB RAM is het standaard geheugenbudget van Fluera conservatief. Heb je veel RAM en wil je snellere zoomrespons, zet hem dan op *Royaal* in **Instellingen → Canvas → Geheugenbudget**.
- **Detailniveau.** De standaard LOD-policy vereenvoudigt streken op zeer lage zoomniveaus. Zie je trillerige streken bij uitgezoomde stand, zet LOD dan op *Hoog detail* — verwacht ~10% meer GPU-belasting.

## Audiogesynchroniseerde opname (Time Travel)

Time Travel slaat audio op samen met de streek-timestamps. Voor een college van 60 minuten is dat zo'n 20 MB audio. Het is niet de audio die het traag maakt — het is de index. Probeer:

- **Instellingen → Time Travel → Indexgranulariteit** op *Standaard* zetten in plaats van *Fijn*
- Oude Time Travel-sessies die je niet meer nodig hebt verwijderen (ze worden standaard lokaal bewaard; de clear-cache-knop verwijdert ze veilig)

## Apple Pencil specifiek

Op de iPad houdt de standaardmodus *Predicted touch* de streek-latentie onder 8 ms. Heb je voorspelling uitgeschakeld (in Instellingen → Canvas → Streek-latentie → Standaard), zet hem dan terug op Predicted. De voorspelling is een Apple Pencil-API, geen gok — ze gebruikt de eigen baanvoorspelling van de hardware.

## Als niets helpt

Voer **Instellingen → Geavanceerd → Diagnose exporteren** uit. Je krijgt een klein JSON-bestand met FPS-monsters, geheugengebruik en (anonieme) apparaatinformatie. Stuur het naar [support@fluera.dev](mailto:support@fluera.dev) met een korte beschrijving van wanneer het traag wordt.

We loggen ≈95% van de voor de gebruiker zichtbare prestatieregressies op een specifiek stuk code binnen een uur na ontvangst van een diagnose-export. De resterende 5% zijn werkelijk lastig en dat zeggen we dan.

## Verder

- [FAQ](/nl/docs/faq)
- [De volledige gebruikersdocumentatie](/nl/docs)
