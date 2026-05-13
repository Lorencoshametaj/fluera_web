---
lang: "sv"
title: "Penslar"
description: "Tretton brush engines, var och en kalibrerad för en annan typ av streck. En kort guide för att välja rätt — och varför det spelar mindre roll än du tror."
section: canvas
sectionLabel: "Canvasen"
order: 1
updatedAt: 2026-04-20
---

Fluera kommer med tretton brush engines. Var och en är en komplett renderingspipeline — tryck, lutning, hastighet, fragment shaders per pensel — inte ett texturbyte. Det låter mycket; i praktiken kommer det mesta av ditt lärande att ske i en eller två av dem.

## Det korta svaret

- Om du antecknar: **reservoarpenna** eller **kulspetspenna**. Båda är snabba, läsbara, förlåtande.
- Om du annoterar en PDF eller markerar ett begrepp: **överstrykningspenna**.
- Om du ritar ett diagram med rena geometriska linjer: **teknisk penna**.
- Om du gör en snabb visuell metafor eller illustration: **blyerts** (lätta streck) eller **kol** (dramatiska streck).

Allt annat är för specifika situationer. Tänk inte för mycket.

## De tretton

| Pensel               | Bra för                                            | Anteckningar                                       |
|----------------------|----------------------------------------------------|----------------------------------------------------|
| Reservoarpenna       | Handskrift i långform                              | Reagerar på lutning, naturligt bläckflöde          |
| Kulspetspenna        | Snabba anteckningar, jämn linje                    | Tryckkänslig bredd                                 |
| Blyerts              | Mjuka streck, förlåtande                           | Kornig textur, gradering via tryck                 |
| Teknisk penna        | CAD-liknande diagram, exakt geometri               | Noll tryckkänslighet med flit                      |
| Marker               | Rubriker med avfasad spets, framhävanden           | Plana streck, livlig färg                          |
| Överstrykningspenna  | Markeringar i overlay (20–30 % opacitet)           | Blandar i overlay-läge                             |
| Kol                  | Uttrycksfullt, grov textur                         | Suddeffekt, blöder vid kanterna                    |
| Olja                 | Måleriska streck, lagrad färg                      | Wet-edge blending, mörkning vid kanter             |
| Akvarell             | Mjuka lager, diffusion                             | Pigmentsimulering                                  |
| Lavering             | Wet-on-paper-känsla                                | Färgblödning vid kanterna                          |
| Spray                | Partikeleffekter, skuggor                          | Kantförvrängning                                   |
| Neon                 | Lysande anteckningar                               | Yttre glöd, fluorescerande mättnad                 |
| Suddgummi            | Pixel-för-pixel-borttagning, inte ett delete-verktyg | Historikmedvetet — avslöjar streck under          |

## Varför motorn spelar roll (snabbt)

Fluera-motorn bevarar tryck-, lutnings- och hastighetssignaler med latens under 15 millisekunder på iOS och macOS. Det är inte bara produktstolthet. <a href="/sv/science/authors/van-der-meer">Van der Meers EEG-arbete</a> visade att handskrift engagerar sensorimotoriska nätverk som tangentbord inte gör, och rikedomen i dessa signaler skalar med fångstens trohet.

I praktiska termer: en canvas som tappar streck, lagar under tryck eller plattar ut lutningsdata kastar bort exakt den signal som gör handskrivna anteckningar kognitivt överlägsna. Vi byggde motorn från grunden eftersom inget off-the-shelf-alternativ höll måttet.

## Anpassa en pensel

Tryck och håll på vilken pensel som helst i verktygsfältet. En liten panel öppnas med:

- **Storlek** (0,5pt – 12pt)
- **Opacitet** (10 % – 100 %)
- **Stabilisering** (ingen / mjuk / fast) — släter ut jitter utan att döda personligheten
- **Tryckkurva** — justerar svaret på lätta vs hårda tryck

Ändringarna är per canvas, inte globala, så du kan ha en mjuk blyerts i en anteckningsbok och en vass i en annan.

## Nästa

- [Gester och zoom](/sv/docs/gestures-zoom)
- [Export och backup](/sv/docs/cloud-sync)
