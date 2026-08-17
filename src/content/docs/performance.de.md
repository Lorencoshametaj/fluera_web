---
lang: "de"
title: "Performance-Tuning"
description: "Fluera zielt auf 60 FPS und latenzarme Freihandeingabe auf unterstützter Hardware. Die tatsächliche Leistung hängt von Gerät, Canvas-Komplexität und aktiven Funktionen ab."
section: troubleshooting
sectionLabel: "Fehlerbehebung"
order: 2
updatedAt: 2026-04-20
---

Die Engine von Fluera zielt auf 60 FPS und latenzarme Freihandeingabe auf unterstützter Hardware. Die tatsächliche Leistung hängt von Gerät, Eingabe-Stack, Canvas-Komplexität und aktiven Funktionen ab.

## Diagnose

Öffne **Einstellungen → Erweitert → Performance**. Du siehst:

- **Aktuelle FPS** — sollte bei 60 bleiben (oder 120 auf ProMotion-Geräten)
- **Strichlatenz** — vergleiche den Wert mit dem dokumentierten Ziel für dein Gerät und deinen Eingabe-Stack; es gibt keinen universellen Grenzwert
- **Genutzter Speicher** — absolut und als Prozentsatz des Geräte-Budgets
- **Hit Rate des Tile-Caches** — sollte bei normalem Zoom/Pan >90 % sein

Wenn hier etwas rot ist, stehen die wahrscheinlichen Verdächtigen in der Liste unten.

## Große Canvas

Große Canvas können eine Abstimmung erfordern. Beginne mit diesen beiden Einstellungen:

- **Speicher-Budget.** Auf Geräten mit weniger als 6 GB RAM ist Flueras Standard-Speicher-Budget konservativ. Wenn du viel RAM hast und schnellere Zoom-Antworten willst, geh in **Einstellungen → Canvas → Speicher-Budget** auf *Großzügig*.
- **Detail-Level.** Die Standard-LOD-Policy vereinfacht Striche auf sehr niedrigen Zoom-Stufen. Wenn dir bei herausgezoomter Ansicht zittrig aussehende Striche auffallen, wechsel den LOD auf *Hohes Detail* — aber erwarte ~10 % mehr GPU-Last.

## Audio-synchronisierte Aufnahme (Time Travel)

Time Travel speichert das Audio zusammen mit den Strich-Timestamps. Für eine 60-minütige Vorlesung sind das etwa 20 MB Audio. Es ist nicht das Audio, das die Sache langsam macht — es ist der Index. Versuche:

- **Einstellungen → Time Travel → Index-Granularität** auf *Standard* statt *Fein* gesetzt
- Alte Time-Travel-Sessions löschen, die du nicht brauchst (sie werden standardmäßig lokal gespeichert; die Clear-Cache-Schaltfläche entfernt sie sicher)

## Speziell Apple Pencil

Auf dem iPad soll der Standardmodus *Predicted Touch* die wahrgenommene Strichlatenz verringern. Das Ergebnis hängt von iPad, Pencil, Betriebssystemversion und Canvas-Last ab. Wenn du die Prediction deaktiviert hast (in Einstellungen → Canvas → Strichlatenz → Standard), geh zurück auf Predicted. Die Prediction ist eine Apple-Pencil-API, kein Schätzwert — sie nutzt die Trajektorien-Prediction der Hardware selbst.

## Wenn nichts hilft

Führe **Einstellungen → Erweitert → Diagnose exportieren** aus. Du bekommst eine kleine JSON-Datei mit FPS-Samples, Speichernutzung und (anonymisierten) Geräte-Infos. Schick sie an [support@fluera.dev](mailto:support@fluera.dev) mit einer kurzen Beschreibung, wann die Sachen langsam werden.

Diagnosedaten helfen dem Support, Performance-Probleme zu untersuchen. Dauer und Ergebnis der Untersuchung hängen vom Problem und den verfügbaren Daten ab.

## Weiter

- [FAQ](/de/docs/faq)
- [Die ganze Nutzerdokumentation](/de/docs)
