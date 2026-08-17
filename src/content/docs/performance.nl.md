---
lang: "nl"
title: "Performance-tuning"
description: "Fluera mikt op 60 FPS en inkt met lage latentie op ondersteunde hardware. De werkelijke prestaties variëren per apparaat, canvascomplexiteit en actieve functies."
section: troubleshooting
sectionLabel: "Probleemoplossing"
order: 2
updatedAt: 2026-04-20
---

De engine van Fluera mikt op 60 FPS en inkt met lage latentie op ondersteunde hardware. De werkelijke prestaties variëren per apparaat, inputstack, canvascomplexiteit en actieve functies.

## Diagnose

Open **Instellingen → Geavanceerd → Prestaties**. Je ziet:

- **Huidige FPS** — moet op 60 staan (of 120 op ProMotion-apparaten)
- **Streek-latentie** — vergelijk de meting met het gedocumenteerde doel voor je apparaat en inputstack; er is geen universele grenswaarde
- **Gebruikt geheugen** — absoluut en als percentage van het apparaatbudget
- **Tile cache hit rate** — moet > 90% zijn tijdens normaal zoomen/pannen

Staat hier iets op rood, dan staan de waarschijnlijke boosdoeners in de lijst hieronder.

## Grote canvasses

Grote canvasses kunnen afstelling vereisen. Begin met deze twee instellingen:

- **Geheugenbudget.** Op apparaten met minder dan 6 GB RAM is het standaard geheugenbudget van Fluera conservatief. Heb je veel RAM en wil je snellere zoomrespons, zet hem dan op *Royaal* in **Instellingen → Canvas → Geheugenbudget**.
- **Detailniveau.** De standaard LOD-policy vereenvoudigt streken op zeer lage zoomniveaus. Zie je trillerige streken bij uitgezoomde stand, zet LOD dan op *Hoog detail* — verwacht ~10% meer GPU-belasting.

## Audiogesynchroniseerde opname (Time Travel)

Time Travel slaat audio op samen met de streek-timestamps. Voor een college van 60 minuten is dat zo'n 20 MB audio. Het is niet de audio die het traag maakt — het is de index. Probeer:

- **Instellingen → Time Travel → Indexgranulariteit** op *Standaard* zetten in plaats van *Fijn*
- Oude Time Travel-sessies die je niet meer nodig hebt verwijderen (ze worden standaard lokaal bewaard; de clear-cache-knop verwijdert ze veilig)

## Apple Pencil specifiek

Op de iPad is de standaardmodus *Predicted touch* ontworpen om de waargenomen streek-latentie te verlagen. Het resultaat varieert per iPad, Pencil, systeemversie en canvasbelasting. Heb je voorspelling uitgeschakeld (in Instellingen → Canvas → Streek-latentie → Standaard), zet hem dan terug op Predicted. De voorspelling is een Apple Pencil-API, geen gok — ze gebruikt de eigen baanvoorspelling van de hardware.

## Als niets helpt

Voer **Instellingen → Geavanceerd → Diagnose exporteren** uit. Je krijgt een klein JSON-bestand met FPS-monsters, geheugengebruik en (anonieme) apparaatinformatie. Stuur het naar [support@fluera.dev](mailto:support@fluera.dev) met een korte beschrijving van wanneer het traag wordt.

Diagnostische gegevens helpen support bij het onderzoeken van prestatieproblemen. De duur en uitkomst van het onderzoek hangen af van het probleem en de beschikbare gegevens.

## Verder

- [FAQ](/nl/docs/faq)
- [De volledige gebruikersdocumentatie](/nl/docs)
