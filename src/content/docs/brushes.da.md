---
lang: "da"
title: "Pensler"
description: "Tretten brush engines, hver kalibreret til en forskellig type af mærke. En kort guide til at vælge den rigtige — og hvorfor det betyder mindre, end du tror."
section: canvas
sectionLabel: "Canvasset"
order: 1
updatedAt: 2026-04-20
---

Fluera kommer med tretten brush engines. Hver enkelt er en komplet rendering-pipeline — tryk, hældning, hastighed, fragment shaders pr. pensel — ikke en udskiftning af tekstur. Det lyder af meget; i praksis sker størstedelen af din læring i én eller to af dem.

## Det korte svar

- Hvis du tager noter: **fyldepen** eller **kuglepen**. Begge hurtige, læsbare, tilgivende.
- Hvis du annoterer en PDF eller fremhæver et begreb: **tekstmarker**.
- Hvis du tegner et diagram med rene geometriske linjer: **teknisk pen**.
- Hvis du laver en hurtig visuel metafor eller illustration: **blyant** (lette streger) eller **kul** (dramatiske streger).

Alt det andet er til specifikke situationer. Tænk ikke for meget over det.

## De tretten

| Pensel              | God til                                               | Noter                                          |
|---------------------|-------------------------------------------------------|------------------------------------------------|
| Fyldepen            | Håndskrift i lang form                                | Reagerer på hældning, naturligt blækflow       |
| Kuglepen            | Hurtige noter, ensartet linje                         | Trykfølsom bredde                              |
| Blyant              | Bløde, tilgivende streger                             | Granulær tekstur, gradering ved tryk           |
| Teknisk pen         | CAD-stil-diagrammer, præcis geometri                  | Bevidst nul trykfølsomhed                      |
| Marker              | Overskrifter med skråpidset spids, fremhævninger      | Flade streger, levende farve                   |
| Tekstmarker         | Overlay-fremhævninger (20-30 % opacitet)              | Blander i overlay-tilstand                     |
| Kul                 | Ekspressivt, ru tekstur                               | Sløret effekt, blødende kanter                 |
| Olie                | Maleriske streger, lagdelt farve                      | Wet-edge blending, mørklægning ved kanter      |
| Akvarel             | Bløde lag, diffusion                                  | Pigmentsimulering                              |
| Lavering            | Wet-on-paper-fornemmelse                              | Farveblødning ved kanter                       |
| Spray               | Partikeleffekter, skygger                             | Kantforvrængning                               |
| Neon                | Lysende annotationer                                  | Ydre glød, fluorescerende mætning              |
| Viskelæder          | Fjernelse pixel for pixel, ikke et sletteværktøj      | Historik-bevidst — afslører mærker nedenunder  |

## Hvorfor motoren betyder noget (kort)

Fluera-motoren bevarer signaler om tryk, hældning og hastighed med en latens under 15 millisekunder på iOS og macOS. Det er ikke bare produktforfængelighed. <a href="/da/science/authors/van-der-meer">Van der Meers EEG-arbejde</a> har vist, at håndskrift engagerer sensorimotoriske netværk, som tastning ikke gør, og rigdommen i disse signaler skalerer med fideliteten af optagelsen.

Praktisk talt: et canvas der taber streger, hakker under tryk eller udflader hældningsdata, smider præcis det signal væk, der gør håndskrevne noter kognitivt overlegne. Vi byggede motoren fra bunden, fordi ingen hyldevare-løsning levede op til standarden.

## Tilpas en pensel

Tryk og hold på en hvilken som helst pensel i værktøjslinjen. Et lille panel åbnes med:

- **Størrelse** (0,5 pt – 12 pt)
- **Opacitet** (10 % – 100 %)
- **Stabilisering** (ingen / blød / fast) — udjævner jitter uden at dræbe personligheden
- **Trykkurve** — justerer respons på let vs. hårdt tryk

Ændringerne er pr. canvas, ikke globale, så du kan have en blød blyant i én notesbog og en spids i en anden.

## Næste

- [Bevægelser og zoom](/da/docs/gestures-zoom)
- [Eksport og backup](/da/docs/cloud-sync)
