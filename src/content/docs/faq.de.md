---
lang: "de"
title: "FAQ"
description: "Die Fragen, die wir am häufigsten von Beta-Tester/innen bekommen. Wenn etwas hier veraltet ist, schreib an den Support, und wir bringen es in Ordnung."
section: troubleshooting
sectionLabel: "Fehlerbehebung"
order: 1
updatedAt: 2026-04-20
---

## Warum ist mein Canvas langsam beim Öffnen, wenn ich eine Woche lang nichts gemacht habe?

Beim ersten Mal, wenn Fluera ein Heft nach einer Pause lädt, baut es den räumlichen Index neu auf und bewertet erneut, welche Knoten zur Review fällig sind. Die folgenden Öffnungen sind schnell. Wenn die Pause länger als einen Monat war, erwarte zudem, dass der Scheduler für räumliche Wiederholung deine ausstehenden Reviews neu kalibriert.

Wenn das erste Öffnen auf einem modernen Gerät länger als 10 Sekunden dauert, ist das ein Bug — schreib an [support@fluera.dev](mailto:support@fluera.dev) mit dem Namen des Canvas und der ungefähren Knotenanzahl.

## Kann ich meine Anki-Decks importieren?

Noch nicht. Der Import steht auf der Roadmap, ist aber kein Blocker für Phase 1 — Flueras Recall-Modell ist strukturell anders (räumlich, nicht atomar), also würde ein direkter Import den Großteil des Wertes verlieren. Wenn er kommt, wird er für Pro- und Education-Konten verfügbar sein.

## Kann ich meine Canvas als PNG / SVG / PDF exportieren?

Ja, alle, plus unser offenes Format `.fluera`. Siehe das Menü **Exportieren**. Keine Einschränkungen nach Tier — Exportieren ist eine grundlegende Funktion zum Datenbesitz, keine Paywall.

## Die KI hat mir eine falsche Antwort gegeben. Ist das zu erwarten?

Manchmal, ja. Unsere KI ist Google Gemini, und Gemini — wie jedes LLM — kann halluzinieren. Der Socratic Mode ist weniger anfällig dafür, weil er Fragen stellt, statt definitive Antworten zu produzieren, aber es ist nicht null.

Wenn du eine eindeutig falsche KI-Antwort bekommst, tippe bei der Antwort auf **Melden**. Dieses Feedback wird zur Verbesserung des Promptings verwendet; es ist anonymisiert und nie mit deinem Inhalt verknüpft.

## Funktioniert Fluera ohne Internet?

Das Canvas — Schreiben, Lesen, Exportieren — ist komplett offline. Die KI-Funktionen (Socratic, Ghost Map, Fog-of-War-Scoring) brauchen Internet. Das Scheduling für räumliche Wiederholung ist lokal; nur Sync und KI brauchen eine Verbindung.

## Ich bin in Deutschland. Und die DSGVO?

Vollständig konform. Fluera wird in der EU gehostet und ist DSGVO-nativ. Du kannst deine Rechte (Auskunft, Berichtigung, Löschung, Datenübertragbarkeit) über **Einstellungen → Datenschutz** wahrnehmen oder an [privacy@fluera.dev](mailto:privacy@fluera.dev) schreiben. Antwort innerhalb von 30 Tagen; meistens innerhalb von 48 Stunden.

## Der Pencil laggt auf meinem iPad. Was ist falsch?

Erst prüf, ob Fluera aktualisiert ist. Dann: **Einstellungen → Canvas → Strichlatenz** sollte *Predicted (empfohlen)* anzeigen für Apple-Pencil-Geräte. Wenn es *Standard* oder *Low-Power* anzeigt, geh zurück auf Predicted.

Wenn der Lag mit eingeschaltetem Predicted bleibt, schließ die App und starte sie neu. Wenn es immer noch bleibt, schreib uns mit dem Modell deines iPads — es gibt eine Regression beim iPad Air 3, die wir aktiv tracken.

## Wie melde ich einen Bug?

[support@fluera.dev](mailto:support@fluera.dev). Beschreibe, was du gemacht hast, was du erwartet hast, was passiert ist, und füge die App-Version (Einstellungen → Über) hinzu. Screenshots helfen.

Für Sicherheitslücken nutze [security@fluera.dev](mailto:security@fluera.dev) und verschlüssele mit unserem PGP-Key (in unserem GitHub-Profil).

## Wie gebe ich Feedback zur Pädagogik?

Wir lesen jede E-Mail. [hello@fluera.dev](mailto:hello@fluera.dev) geht direkt an die Founder. Besonders nützlich: was *nicht* für dich funktioniert hat, was sich nach Reibung anfühlte, die nicht erwünscht war, und alles, was dich überrascht hat.

## Weiter

- [Performance-Tuning](/de/docs/performance) — das Maximum aus großen Canvas herausholen
- [Die ganze Nutzerdokumentation](/de/docs)
