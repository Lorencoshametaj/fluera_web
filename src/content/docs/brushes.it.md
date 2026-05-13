---
lang: "it"
title: "Pennelli"
description: "Tredici brush engine, ognuno tarato per un tipo di tratto diverso. Una guida breve a scegliere quello giusto — e perché conta meno di quanto pensi."
section: canvas
sectionLabel: "Il canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera arriva con tredici brush engine. Ognuno è una pipeline di rendering completa — pressione, tilt, velocità, fragment shader per pennello — non uno scambio di texture. Sembrano tanti; in pratica, gran parte del tuo apprendimento avverrà su uno o due.

## La risposta breve

- Se prendi appunti: **penna stilografica** o **penna a sfera**. Entrambe veloci, leggibili, indulgenti.
- Se annoti un PDF o evidenzi un concetto: **evidenziatore**.
- Se disegni un diagramma con linee geometriche pulite: **penna tecnica**.
- Se fai una metafora visiva veloce o un'illustrazione: **matita** (tratti leggeri) o **carboncino** (tratti drammatici).

Tutto il resto è per situazioni specifiche. Non pensarci troppo.

## Tutti e tredici

| Pennello              | Adatto per                                       | Note                                          |
|-----------------------|--------------------------------------------------|-----------------------------------------------|
| Penna stilografica    | Scrittura a mano in forma lunga                  | Risponde al tilt, flusso naturale di inchiostro |
| Penna a sfera         | Note veloci, linea uniforme                      | Larghezza pressure-sensitive                   |
| Matita                | Tratti morbidi, indulgenti                       | Texture a grana, gradata in pressione          |
| Penna tecnica         | Diagrammi stile CAD, geometria precisa           | Zero sensibilità alla pressione di proposito   |
| Marker                | Titoli a punta piatta, evidenziature             | Tratti piatti, colore intenso                  |
| Evidenziatore         | Highlight in overlay (20–30 % opacità)           | Si fonde in modalità overlay                   |
| Carboncino            | Espressivo, texture grezza                       | Effetto sfumato, sbavatura ai bordi            |
| Olio                  | Tratti pittorici, colore stratificato            | Wet-edge blending, scurimento ai bordi         |
| Acquerello            | Velature morbide, diffusione                     | Simulazione pigmento                           |
| Inchiostro a velatura | Sensazione wet-on-paper                          | Bleed di colore ai bordi                       |
| Spray                 | Effetti particellari, ombre                      | Distorsione ai bordi                           |
| Neon                  | Annotazioni luminose                             | Bagliore esterno, saturazione fluorescente     |
| Gomma                 | Rimozione per pixel, non un delete tool          | History-aware — rivela i tratti sottostanti    |

## Perché il motore conta (brevemente)

Il motore di Fluera preserva i segnali di pressione, tilt e velocità con latenza sub-15-millisecondi su iOS e macOS. Non è solo polish di prodotto. <a href="/it/science/authors/van-der-meer">Il lavoro EEG di van der Meer</a> ha mostrato che la scrittura a mano ingaggia reti sensori-motorie che la digitazione non raggiunge, e la ricchezza di quei segnali scala con la fedeltà della cattura.

In pratica: un canvas che droppa tratti, rallenta sotto pressione o appiattisce i dati di tilt sta buttando via esattamente il segnale che rende gli appunti a mano cognitivamente superiori. Abbiamo costruito il motore da zero perché nessuna opzione off-the-shelf soddisfaceva il livello.

## Personalizzare un pennello

Long-press su un qualunque pennello nella toolbar. Si apre un pannello con:

- **Dimensione** (0.5pt – 12pt)
- **Opacità** (10 % – 100 %)
- **Stabilizzazione** (nessuna / morbida / forte) — smussa il jitter senza uccidere la personalità
- **Curva di pressione** — regola la risposta a tocchi leggeri vs forti

I cambiamenti sono per-canvas, non globali, così puoi avere una matita morbida su un quaderno e una netta su un altro.

## Successivo

- [Gesture e zoom](/it/docs/gestures-zoom)
- [Export e backup](/it/docs/cloud-sync)
