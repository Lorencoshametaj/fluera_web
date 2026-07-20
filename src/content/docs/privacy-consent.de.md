---
lang: "de"
title: "Datenschutz und KI-Einwilligung"
description: "Welche Daten Fluera erhebt, welche Einwilligung du gibst und wie du alles abschaltest."
section: settings
sectionLabel: "Einstellungen"
order: 1
updatedAt: 2026-06-29
---

Fluera ist ein Local-first-Werkzeug. Standardmäßig verlässt nichts dein Gerät, es sei denn, du aktivierst explizit eine Funktion, die das benötigt.

## Die vier Einwilligungskategorien

Öffne **Einstellungen → Datenschutz**. Du siehst vier Toggles, alle standardmäßig aus:

- **Produkt-Analytics.** Anonyme Session-Daten — Aufruf-Zählungen von Funktionen, Sitzungsdauer, Dauer von KI-Aufrufen. Niemals Inhalt. Nutzer-ID mit SHA-256 gehasht, Aufbewahrung 180 Tage.
- **KI-Funktionen.** Notwendig, um Socratic, Ghost Map, LaTeX-OCR und Fog of War zu nutzen. Der ausgewählte Text vom Canvas wird über unseren serverseitigen Proxy an Google-Gemini-Modelle gesendet, die über Google Vertex AI in der EU (europe-west4 NL / europe-west1 BE) verarbeitet werden. Niemals das ganze Heft.
- **Cloud-Sync.** Notwendig, um Canvas zwischen Geräten zu synchronisieren. Synchronisierte Daten sind verschlüsselt bei der Übertragung (TLS) und at-rest auf EU-Infrastruktur (Supabase, eu-north-1). Sie sind nicht Ende-zu-Ende-verschlüsselt: Fluera kann als Verantwortlicher technisch darauf zugreifen, verkauft sie aber niemals und nutzt sie nie für Werbung.
- **Crash-Reporting.** Stack Traces und Geräte-Metadaten, wenn die App crasht. Kein Nutzerinhalt. Verarbeitet von Sentry mit `sendDefaultPii: false`.

Jeder Toggle ist unabhängig. Du kannst Cloud-Sync ohne Analytics aktivieren. Du kannst KI ohne Crash-Reporting nutzen. Die Berechtigungen sind absichtlich granular.

## Kognitives Gedächtnis (auf dem Gerät, Opt-out)

Unterschieden von den vier Cloud-Einwilligungen oben: Standardmäßig indexiert Fluera deine Notizen **nur auf deinem Gerät**, um automatische Titel, die Konzeptkarte (Ghost Map) und Spaced Repetition (FSRS) zu ermöglichen. Dieser Index **verlässt niemals dein Gerät** — kein Inhalt wird an die Cloud gesendet (anders als bei den *KI-Funktionen* und dem *Cloud-Sync*). Du kannst ihn in **Einstellungen → Datenschutz → Kognitives Gedächtnis** abschalten: Die Indexierung stoppt und die bereits auf dem Gerät aufgebauten kognitiven Daten werden sofort gelöscht (deine Notizen bleiben unverändert). Rechtsgrundlage: berechtigtes Interesse mit Widerspruchsrecht (GDPR Art. 6.1.f / 21) — deshalb ist es standardmäßig aktiviert und Opt-out, keine Opt-in-Einwilligung wie die vier oben.

## Was niemals erhoben wird

- Der Inhalt deiner Canvas (verschlüsselt at-rest mit SQLCipher, AES-256)
- Die Fragen, die die KI stellt, oder deine Antworten
- Das Audio, das du mit Time Travel aufnimmst (lokal gespeichert; der Opt-in-Sync überträgt es verschlüsselt via TLS und speichert es at-rest auf EU-Infrastruktur)
- Persönlich identifizierbare Information jeder Art ohne explizite Einwilligung

## Wie du es prüfen kannst

Lass die App im Flugmodus laufen. Mach alles außer Cloud-Sync und KI. Beobachte deine Firewall oder deinen Netzwerk-Monitor. Fluera macht null Netzwerk-Anfragen mit den vier Einwilligungs-Toggles ausgeschaltet. Es ist verifizierbar, by design.

## Einwilligung widerrufen

Die vier Toggles sind immer in **Einstellungen → Datenschutz** zugänglich. Einen Toggle auszuschalten hat sofortige Wirkung. Die zugehörigen Backend-Daten werden zur Löschung innerhalb von 30 Tagen eingeplant.

Für Konto-Löschung (das vollständige Recht auf Vergessenwerden), schreib an [lorenco@fluera.dev](mailto:lorenco@fluera.dev) von der Adresse deines Kontos aus.

## Education-Konten

Wenn deine Institution dein Fluera-Konto verwaltet, gelten die obigen Verhaltensweisen weiterhin für *deine* Daten. Der Administrator kann aggregierte Nutzungsstatistiken für Compliance-Audits sehen (über den Audit Trail), aber den Inhalt deiner Hefte nicht lesen. Auf deinem Gerät ist die lokale Datenbank at-rest mit SQLCipher (AES-256) verschlüsselt, und der Schlüssel bleibt in deinem Keychain, nicht in irgendeinem Admin-System.

## Weiter

- [Cloud-Sync-Setup](/de/docs/cloud-sync)
- [Sicherheitsarchitektur](/de/security/architecture) — das vollständige Modell
