---
lang: "de"
title: "Datenschutz und KI-Einwilligung"
description: "Welche Daten Fluera erhebt, welche Einwilligung du gibst und wie du alles abschaltest."
section: settings
sectionLabel: "Einstellungen"
order: 1
updatedAt: 2026-10-23
---

Fluera ist ein Local-first-Werkzeug. Standardmäßig verlässt nichts dein Gerät, es sei denn, du aktivierst explizit eine Funktion, die das benötigt.

## Die vier Einwilligungskategorien

Öffne **Einstellungen → Datenschutz**. Du siehst vier Toggles, alle standardmäßig aus:

- **Produkt-Analytics.** Nutzungsdaten, an die Kennung deines Kontos gebunden, damit du sie sehen und löschen kannst — Nutzung von Funktionen, Sitzungsdauer, Dauer von KI-Aufrufen. Niemals Inhalt. Höchstens 180 Tage aufbewahrt.
- **KI-Funktionen.** Notwendig, um Socratic, Ghost Map, LaTeX-OCR und Fog of War zu nutzen. Der ausgewählte Text vom Canvas wird über unseren serverseitigen Proxy an Google-Gemini-Modelle gesendet, die über Google Vertex AI in der EU verarbeitet werden (2.5-Modelle in den Regionen europe-west4 NL / europe-west1 BE, 3.x-Modelle über den EU-Multiregion-Endpunkt von Vertex AI): Die Daten bleiben in den EU-Mitgliedstaaten. Niemals der ganze Canvas.
- **Cloud-Sync.** Notwendig, um Canvas zwischen Geräten zu synchronisieren. Synchronisierte Daten sind verschlüsselt bei der Übertragung (TLS) und at-rest auf EU-Infrastruktur (Supabase, eu-north-1). Sie sind nicht Ende-zu-Ende-verschlüsselt: Fluera kann als Verantwortlicher technisch darauf zugreifen, verkauft sie aber niemals und nutzt sie nie für Werbung. Mit dem Cloud-Tarif überträgt **Zwischen deinen Geräten synchronisieren** (unten) auch dein Lernen und deine Einstellungen.
- **Crash-Reporting.** Stack Traces und Geräte-Metadaten, wenn die App crasht. Kein Nutzerinhalt. Verarbeitet von Sentry mit `sendDefaultPii: false`.

Jeder Toggle ist unabhängig. Du kannst Cloud-Sync ohne Analytics aktivieren. Du kannst KI ohne Crash-Reporting nutzen. Die Berechtigungen sind absichtlich granular.

## Kognitives Gedächtnis (auf dem Gerät, Opt-out)

Unterschieden von den vier Cloud-Einwilligungen oben: Standardmäßig indexiert Fluera deine Notizen **auf deinem Gerät**, um automatische Titel, die Konzeptkarte (Ghost Map) und Spaced Repetition (FSRS) zu ermöglichen. Der Index wird auf deinem Gerät aufgebaut und berechnet und bleibt dort, außer du schaltest **Zwischen deinen Geräten synchronisieren** ein (nächster Abschnitt): Dann gelangen deine Wiederholungskarten mit dem Verlauf deiner Antworten, deine Konzepte, die Konzeptkarte und die Titel deiner Notizgruppen über die Cloud von Fluera auf deine anderen Geräte. Du kannst das Gedächtnis in **Einstellungen → Datenschutz → Kognitives Gedächtnis** abschalten: Die Indexierung stoppt und die kognitiven Daten auf diesem Gerät werden sofort gelöscht (deine Notizen bleiben unverändert); Nutzt du Zwischen deinen Geräten synchronisieren, werden auch die Kopien in der Cloud gelöscht, und nichts davon wird mehr hochgeladen, bis du es wieder einschaltest. Rechtsgrundlage: berechtigtes Interesse mit Widerspruchsrecht (GDPR Art. 6.1.f / 21) — deshalb ist es standardmäßig aktiviert und Opt-out, keine Opt-in-Einwilligung wie die vier oben.

## Zwischen deinen Geräten synchronisieren (Cloud-Tarif)

Der Schalter **Einstellungen → Daten und Synchronisierung → Zwischen deinen Geräten synchronisieren** ist aus, bis du ihn einschaltest. Er braucht ein Konto und den Cloud-Tarif und gilt für dein ganzes Konto: an auf einem Gerät heißt an auf jedem Gerät, auf dem du dich anmeldest. Wenn du ihn einschaltest, speichert der Server das Datum und die Version der Datenschutzerklärung, die du vor dir hattest. Rechtsgrundlage: Vertrag (GDPR Art. 6.1.b) — es ist der Cloud-Dienst, für den du bezahlst.

- **Was in die Cloud geht, nur solange er an ist:** ganze Canvas (Striche, Abschnitte, Formeln, PDFs mit den Markierungen aus dem Reader, Fotos); aufgenommene Vorlesungen (das Audio, in Stücken); das Lernen in jedem Canvas (Wiederholungskarten mit deinen Antworten, Konzepte, Prüfungen mit ihrer Tinte, der Sokratische Tutor, Chat, Abruf, Kurse); die Ordner der Galerie (mit ihren Namen), der Ordner jedes Canvas, die angehefteten, die Etiketten und der Papierkorb; der Text, den Fluera in deiner Handschrift erkannt hat; deine Entscheidungen in den Einstellungen (Aussehen, Sprache, Papier, Wiederholung, Farben, Radierer und Ähnliches). Einstellungen, die zu einem einzigen Gerät gehören (Hand, Handballen, Stift, Fenster), bleiben dort.
- **Was immer auf dem Gerät bleibt:** der Verlauf des Canvas (Time Travel) und Rückgängig.
- **Wer es sieht:** du. Auf einem Canvas, das du teilst, sehen die Mitglieder das Canvas und die Titel der Notizgruppen; dein Lernen siehst nur du.
- **Wo:** Supabase, EU-Region `eu-north-1` (Stockholm), verschlüsselt bei der Übertragung und at-rest, **nicht** Ende-zu-Ende-verschlüsselt.
- **Ausschalten** auf irgendeinem Gerät stoppt es auf allen und löscht nichts. Dasselbe gilt, wenn du die Cloud-Sync-Einwilligung widerrufst.
- **Wenn der Cloud-Tarif endet,** pausiert die Synchronisierung und alles bleibt 6 Monate lang herunterladbar. Danach können wir das Audio der Vorlesungen, PDFs und Fotos über den 500 MB des Free-Tarifs entfernen, die ältesten zuerst; die Tinte deiner Canvas bleibt.
- **Löschen:** **Endgültig löschen** bei einem Canvas im **Papierkorb** entfernt es mit allem, was dazugehört, aus der Cloud, die Tinte seiner Prüfungen eingeschlossen; **Einstellungen → Datenschutz und Telemetrie → Alle meine Daten aus der Cloud löschen** entfernt alle Canvas, die Vorlesungen, die Prüfungstinte, die Einstellungen und die Ordner und schaltet Zwischen deinen Geräten synchronisieren aus; **Einstellungen → Profil und Konto → Konto löschen** entfernt alles, auch die Einstellungen.

Ohne den Schalter bleibt all das auf deinem Gerät, wie bisher.

## KI-Trainingsdaten (eigener Bereich, nur Opt-in)

Wir bauen eine eigene Handschrifterkennung, zugeschnitten darauf, wie Fluera-Nutzer wirklich schreiben. Unter **Einstellungen → Datenschutz → KI-Trainingsdaten** findest du zwei weitere Schalter, ebenfalls standardmäßig aus und unabhängig von den vier oben:

- **Kalibrierungssitzung (~5 Min.).** Eine einmalige geführte Sitzung, in der du 30 vorgegebene Symbole schreibst (Ziffern, mathematische Operatoren, griechische Buchstaben, häufige Buchstaben). Das Symbol auf dem Bildschirm ist die Grundwahrheit, gepaart mit deinen Strichen.
- **Automatische Erfassung beim Schreiben.** Während du ganz normal auf dem Canvas schreibst, speichern wir die rohen Striche (Koordinaten, Zeit, Druck, Stiftneigung, wo unterstützt) und ein kleines verschlüsseltes PNG jedes Clusters. Die Daten bleiben auf unserem Server verschlüsselt. **Sobald unsere Vereinbarung mit Google abgeschlossen ist** (Auftragsverarbeitungsvertrag für Vertex AI, in Arbeit), analysiert Google Gemini die Bilder, damit wir Fluera beibringen können, was du geschrieben hast. Bis dahin verlässt kein Trainingsdatum unsere Infrastruktur in Richtung Dritter.

Beide Schalter verwenden eine eigene pseudonyme Kennung, auf deinem Gerät berechnet und **nicht** dieselbe wie die der Produkt-Analytics: Aus den Daten selbst lässt sich ein Beitrag nicht auf dein Konto zurückführen.

Besondere Schutzmaßnahmen:
- Verschlüsselung der Daten mit AES-256-GCM *vor* dem Hochladen; der Schlüssel zum Entschlüsseln ist ein asymmetrisches Schlüsselpaar (X25519), dessen privater Teil offline auf Papier liegt und nie digitalisiert wird.
- Row-Level Security auf den Supabase-Tabellen: Niemand kann die Proben eines anderen lesen.
- Rauschfilter: Cluster mit weniger als 3 Punkten (Tippen, Wischer) werden vor dem Speichern verworfen.
- Dauerhafte Deduplizierung per geometrischem Fingerabdruck: Wer denselben Cluster identisch neu zeichnet, erzeugt kein Duplikat.
- Vorschau jeder Probe in **Einstellungen → KI-Trainingsdaten → Zuletzt erfasst**: Du siehst Miniaturen genau dessen, was wir gespeichert haben.

## Was niemals erhoben wird

- Der Inhalt deiner Canvas (verschlüsselt at-rest mit sqlite3mc, ChaCha20-Poly1305), außer du schaltest **Zwischen deinen Geräten synchronisieren** ein (oben)
- Die Fragen, die die KI stellt, oder deine Antworten
- Das Audio, das du aufnimmst, außer du schaltest **Zwischen deinen Geräten synchronisieren** ein (oben): Dann geht es wie deine Canvas in die Cloud, verschlüsselt bei der Übertragung und at-rest, nicht Ende-zu-Ende
- Persönlich identifizierbare Information jeder Art ohne explizite Einwilligung

## Wie du es prüfen kannst

Schalte die vier Schalter aus und beobachte deine Firewall oder deinen Netzwerkmonitor: Deine Canvas, deine Aufnahmen und was du schreibst bleiben auf dem Gerät. Die App spricht trotzdem mit dem Netz für Dinge ohne Canvas-Inhalt, zum Beispiel: die Anmeldung bei deinem Konto, die Prüfung deines Abos beim Store (RevenueCat), der Download der Modelle, die manche Funktionen brauchen, das Marketplace-Signal, wenn du eine Karte aus dem Katalog installierst oder lernst (standardmäßig an, abschaltbar in **Einstellungen → Datenschutz und Telemetrie → Marketplace-Signal**), und die Seiten, die du im eingebauten Browser öffnest.

## Einwilligung widerrufen

Die vier Toggles sind immer in **Einstellungen → Datenschutz** zugänglich. Einen Toggle auszuschalten hat sofortige Wirkung. Was mit bereits erhobenen Daten passiert, hängt von der Kategorie ab:

- **Produkt-Analytics:** Sobald der Widerruf unsere Server erreicht, wird die mit deinem Konto bereits erhobene Telemetrie sofort gelöscht. Länger als 180 Tage bleibt sie ohnehin nie.
- **KI-Funktionen:** Die Anfragen stoppen sofort, auch auf unserem Server. Das KI-Nutzungsprotokoll (welche Funktion, wie viele Tokens, kein Inhalt) bleibt 24 Monate, für die Tariflimits.
- **Cloud-Sync:** Ausschalten, oder Zwischen deinen Geräten synchronisieren ausschalten, löscht nichts, was schon in der Cloud ist — dafür gibt es **Alle meine Daten aus der Cloud löschen**.
- **Crash-Reporting:** Der Widerruf löscht bereits gesendete Berichte nicht: Sentry bewahrt sie 30 Tage auf, seine verschlüsselten Backups bis zu 90.

Um dein Konto und seine Daten in der Cloud zu löschen, nutze **Einstellungen → Profil und Konto → Konto löschen**. Wenn das nicht klappt, schreib an [lorenco@fluera.dev](mailto:lorenco@fluera.dev) von der Adresse deines Kontos aus.

## Weiter

- [Cloud-Sync-Setup](/de/docs/cloud-sync)
- [Sicherheitsarchitektur](/de/security/architecture) — das vollständige Modell
