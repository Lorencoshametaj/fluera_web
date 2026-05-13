---
lang: "no"
title: "Pensler"
description: "Tretten brush engines, hver kalibrert for en annen type strek. En kort guide til å velge riktig — og hvorfor det betyr mindre enn du tror."
section: canvas
sectionLabel: "Canvaset"
order: 1
updatedAt: 2026-04-20
---

Fluera kommer med tretten brush engines. Hver er en komplett render-pipeline — trykk, helning, hastighet, fragment shaders per pensel — ikke en teksturbytte. Det høres mye ut; i praksis kommer mesteparten av læringen din til å skje i én eller to av dem.

## Det korte svaret

- Hvis du tar notater: **fyllepenn** eller **kulepenn**. Begge raske, lesbare, tilgivende.
- Hvis du annoterer en PDF eller markerer et begrep: **markeringspenn**.
- Hvis du tegner et diagram med rene geometriske linjer: **teknisk penn**.
- Hvis du lager en rask visuell metafor eller illustrasjon: **blyant** (lette streker) eller **kull** (dramatiske streker).

Alt annet er for spesifikke situasjoner. Ikke tenk for mye på det.

## De tretten

| Pensel              | Bra for                                            | Notater                                          |
|---------------------|----------------------------------------------------|--------------------------------------------------|
| Fyllepenn           | Håndskrift i langform                              | Reagerer på helning, naturlig blekkflyt          |
| Kulepenn            | Raske notater, jevn linje                          | Trykksensitiv bredde                             |
| Blyant              | Myke, tilgivende streker                           | Kornete tekstur, gradering ved trykk             |
| Teknisk penn        | CAD-stil-diagrammer, presis geometri               | Null trykksensitivitet med vilje                 |
| Marker              | Skråskårne titler, uthevinger                      | Flate streker, livlig farge                      |
| Markeringspenn      | Overlay-markeringer (20–30 % opasitet)             | Blander i overlay-modus                          |
| Kull                | Ekspressivt, ru tekstur                            | Sotet effekt, flyter ut i kantene                |
| Olje                | Maleriske streker, lag på lag med farge            | Wet-edge blending, mørkere kanter                |
| Akvarell            | Myke lag, diffusjon                                | Pigmentsimulering                                |
| Lavering            | Wet-on-paper-følelse                               | Fargeblødning i kantene                          |
| Spray               | Partikkeleffekter, skygger                         | Forvrengning i kantene                           |
| Neon                | Lysende notater                                    | Ytre glød, fluorescerende metning                |
| Viskelær            | Pikselvis fjerning, ikke et delete-verktøy         | Historie-bevisst — avdekker streker under        |

## Hvorfor motoren betyr noe (kort)

Fluera-motoren bevarer trykk-, helning- og hastighetssignalene med under 15 millisekunder latens på iOS og macOS. Det er ikke bare produktforfengelighet. <a href="/no/science/authors/van-der-meer">EEG-arbeidet til van der Meer</a> viste at håndskrift engasjerer sensorimotoriske nettverk som tasting ikke gjør, og rikdommen i de signalene skalerer med fideliteten i fangsten.

I praksis: et canvas som mister streker, henger under trykk eller flater ut helningsdata, kaster bort akkurat det signalet som gjør håndnotater kognitivt overlegne. Vi bygde motoren fra bunnen av fordi ingen off-the-shelf-løsning holdt målet.

## Tilpasse en pensel

Trykk og hold på en hvilken som helst pensel i verktøylinjen. Et lite panel åpnes med:

- **Størrelse** (0,5 pt – 12 pt)
- **Opasitet** (10 % – 100 %)
- **Stabilisering** (ingen / myk / fast) — glatter ut jitter uten å drepe personligheten
- **Trykk-kurve** — justerer responsen på lette vs. harde trykk

Endringene er per canvas, ikke globale, så du kan ha en myk blyant i én notatbok og en skarp i en annen.

## Neste

- [Bevegelser og zoom](/no/docs/gestures-zoom)
- [Eksport og sikkerhetskopi](/no/docs/cloud-sync)
