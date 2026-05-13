---
lang: "de"
title: "Pinsel"
description: "Dreizehn Brush Engines, jede für einen anderen Strichtyp kalibriert. Ein kurzer Leitfaden zur Wahl des richtigen — und warum es weniger wichtig ist, als du denkst."
section: canvas
sectionLabel: "Das Canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera kommt mit dreizehn Brush Engines. Jede ist eine vollständige Render-Pipeline — Druck, Neigung, Geschwindigkeit, Fragment Shader pro Pinsel — kein Texturwechsel. Klingt nach viel; in der Praxis findet der Großteil deines Lernens in einem oder zwei davon statt.

## Die kurze Antwort

- Wenn du Notizen machst: **Füllfederhalter** oder **Kugelschreiber**. Beide schnell, lesbar, nachsichtig.
- Wenn du ein PDF annotierst oder ein Konzept hervorhebst: **Textmarker**.
- Wenn du ein Diagramm mit sauberen geometrischen Linien zeichnest: **Technischer Stift**.
- Wenn du eine schnelle visuelle Metapher oder Illustration machst: **Bleistift** (leichte Striche) oder **Kohle** (dramatische Striche).

Alles andere ist für spezifische Situationen. Überdenk es nicht.

## Die dreizehn

| Pinsel              | Gut für                                          | Notizen                                          |
|---------------------|--------------------------------------------------|--------------------------------------------------|
| Füllfederhalter     | Handschrift in Langform                          | Reagiert auf Neigung, natürlicher Tintenfluss    |
| Kugelschreiber      | Schnelle Notizen, gleichmäßige Linie             | Druckempfindliche Breite                         |
| Bleistift           | Weiche, nachsichtige Striche                     | Gekörnte Textur, Druck-Gradation                 |
| Technischer Stift   | Diagramme im CAD-Stil, präzise Geometrie         | Bewusst null Druckempfindlichkeit                |
| Marker              | Headlines mit abgeschrägter Spitze, Hervorhebungen | Flache Striche, lebendige Farbe                |
| Textmarker          | Hervorhebungen als Overlay (20–30 % Deckkraft)   | Mischt im Overlay-Modus                          |
| Kohle               | Expressiv, raue Textur                           | Verwischter Effekt, blutet an den Rändern        |
| Öl                  | Malerische Striche, Farbe in Schichten           | Wet-Edge-Blending, Verdunkelung an den Rändern   |
| Aquarell            | Weiche Schichten, Diffusion                      | Pigmentsimulation                                |
| Lavierung           | Wet-on-Paper-Gefühl                              | Farbblutung an den Rändern                       |
| Spray               | Partikeleffekte, Schatten                        | Verzerrung an den Rändern                        |
| Neon                | Leuchtende Anmerkungen                           | Außenglühen, fluoreszierende Sättigung           |
| Radiergummi         | Pixelweises Entfernen, kein Delete-Werkzeug      | History-bewusst — legt Markierungen darunter frei |

## Warum die Engine zählt (kurz)

Die Engine von Fluera bewahrt die Druck-, Neigungs- und Geschwindigkeitssignale mit einer Latenz unter 15 Millisekunden auf iOS und macOS. Das ist nicht nur Produkt-Eitelkeit. <a href="/de/science/authors/van-der-meer">Van der Meers EEG-Arbeit</a> hat gezeigt, dass Handschrift sensomotorische Netzwerke aktiviert, die das Tippen nicht aktiviert, und der Reichtum dieser Signale skaliert mit der Erfassungstreue.

In praktischer Hinsicht: Ein Canvas, das Striche verliert, unter Druck verzögert oder die Neigungsdaten flach macht, wirft genau das Signal weg, das handschriftliche Notizen kognitiv überlegen macht. Wir haben die Engine von Grund auf gebaut, weil keine Standardlösung den Anspruch erfüllte.

## Einen Pinsel anpassen

Halte einen beliebigen Pinsel in der Toolbar gedrückt. Ein kleines Panel öffnet sich mit:

- **Größe** (0,5pt – 12pt)
- **Deckkraft** (10 % – 100 %)
- **Stabilisierung** (keine / weich / fest) — glättet Jitter, ohne die Persönlichkeit zu töten
- **Druckkurve** — passt die Reaktion auf leichten vs. starken Druck an

Die Änderungen sind pro Canvas, nicht global, also kannst du in einem Heft einen weichen Bleistift haben und in einem anderen einen scharfen.

## Weiter

- [Gesten und Zoom](/de/docs/gestures-zoom)
- [Export und Backup](/de/docs/cloud-sync)
