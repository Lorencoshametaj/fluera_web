---
lang: "de"
title: "Performance-Tuning"
description: "Fluera ist gebaut, um 60 FPS auf Canvas mit Hunderttausenden von Strichen zu halten. Hier ist, was du prüfen sollst, wenn das nicht passiert."
section: troubleshooting
sectionLabel: "Fehlerbehebung"
order: 2
updatedAt: 2026-04-20
---

Die Engine von Fluera ist darauf ausgelegt, 60 FPS mit Strichlatenz unter 15 ms auf moderner Hardware zu halten — bis zu Hunderttausenden von Strichen pro Heft. Wenn das nicht passiert, ist meistens eine Sache aus einem kleinen Set verantwortlich.

## Diagnose

Öffne **Einstellungen → Erweitert → Performance**. Du siehst:

- **Aktuelle FPS** — sollte bei 60 bleiben (oder 120 auf ProMotion-Geräten)
- **Strichlatenz** — sollte <15 ms auf iOS/macOS, <20 ms auf anderen Plattformen anzeigen
- **Genutzter Speicher** — absolut und als Prozentsatz des Geräte-Budgets
- **Hit Rate des Tile-Caches** — sollte bei normalem Zoom/Pan >90 % sein

Wenn hier etwas rot ist, stehen die wahrscheinlichen Verdächtigen in der Liste unten.

## Große Canvas (&gt; 200k Striche)

Die Engine packt dieses Volumen, aber zwei Einstellungen zählen:

- **Speicher-Budget.** Auf Geräten mit weniger als 6 GB RAM ist Flueras Standard-Speicher-Budget konservativ. Wenn du viel RAM hast und schnellere Zoom-Antworten willst, geh in **Einstellungen → Canvas → Speicher-Budget** auf *Großzügig*.
- **Detail-Level.** Die Standard-LOD-Policy vereinfacht Striche auf sehr niedrigen Zoom-Stufen. Wenn dir bei herausgezoomter Ansicht zittrig aussehende Striche auffallen, wechsel den LOD auf *Hohes Detail* — aber erwarte ~10 % mehr GPU-Last.

## Audio-synchronisierte Aufnahme (Time Travel)

Time Travel speichert das Audio zusammen mit den Strich-Timestamps. Für eine 60-minütige Vorlesung sind das etwa 20 MB Audio. Es ist nicht das Audio, das die Sache langsam macht — es ist der Index. Versuche:

- **Einstellungen → Time Travel → Index-Granularität** auf *Standard* statt *Fein* gesetzt
- Alte Time-Travel-Sessions löschen, die du nicht brauchst (sie werden standardmäßig lokal gespeichert; die Clear-Cache-Schaltfläche entfernt sie sicher)

## Speziell Apple Pencil

Auf dem iPad hält der Standardmodus *Predicted Touch* die Strichlatenz unter 8 ms. Wenn du die Prediction deaktiviert hast (in Einstellungen → Canvas → Strichlatenz → Standard), geh zurück auf Predicted. Die Prediction ist eine Apple-Pencil-API, kein Schätzwert — sie nutzt die Trajektorien-Prediction der Hardware selbst.

## Wenn nichts hilft

Führe **Einstellungen → Erweitert → Diagnose exportieren** aus. Du bekommst eine kleine JSON-Datei mit FPS-Samples, Speichernutzung und (anonymisierten) Geräte-Infos. Schick sie an [support@fluera.dev](mailto:support@fluera.dev) mit einer kurzen Beschreibung, wann die Sachen langsam werden.

Wir loggen ≈95 % der vom Nutzer sichtbaren Performance-Regressionen auf einen bestimmten Code-Abschnitt innerhalb einer Stunde nach Erhalt eines Diagnose-Exports. Die restlichen 5 % sind ehrlich schwer und wir sagen es dir.

## Weiter

- [FAQ](/de/docs/faq)
- [Die ganze Nutzerdokumentation](/de/docs)
