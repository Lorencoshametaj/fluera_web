---
lang: "de"
title: "Cloud-Sync"
description: "Wie du Canvas zwischen Geräten synchronisierst, was verschlüsselt wird und wie du dich erholst, wenn du die Passphrase verlierst."
section: settings
sectionLabel: "Einstellungen"
order: 2
updatedAt: 2026-04-20
---

Cloud-Sync ist opt-in pro Heft. Du kannst ein Canvas synchronisieren und ein anderes strikt lokal halten. Nichts bewegt sich, bis du es sagst.

## Sync auf dem ersten Gerät aktivieren

1. Öffne **Einstellungen → Datenschutz** und aktiviere **Cloud-Sync**.
2. Erstelle oder gib deine **Sync-Passphrase** ein. Sie ist *getrennt* vom Konto-Passwort. Die Passphrase wird verwendet, um den Verschlüsselungsschlüssel abzuleiten — und bleibt nur auf deinem Gerät, nie auf unseren Servern.
3. Wähle, welche Hefte synchronisiert werden sollen. Rechtsklick (oder gedrückt halten) auf ein Heft → **Sync aktivieren**.

Ein kleines Cloud-Symbol erscheint auf jedem synchronisierten Heft. Eine rote Variante zeigt einen Fehler an; eine graue eine Pause.

## Ein zweites Gerät hinzufügen

1. Installiere Fluera auf dem zweiten Gerät.
2. Melde dich mit demselben Konto an.
3. Gib *dieselbe* Sync-Passphrase ein, wenn du dazu aufgefordert wirst. Die Passphrase ist nicht wiederherstellbar — wenn du sie nicht hast, sind die verschlüsselten Daten auf dem neuen Gerät nicht lesbar.
4. Cloud-Sync startet. Erwarte, dass die erste vollständige Synchronisierung für ein mittelgroßes Heft einige Minuten dauert.

## Was verschlüsselt wird und wie

- Jedes Heft wird lokal mit einem Schlüssel pro Heft verschlüsselt.
- Diese Schlüssel werden mit einem Root-Key verschlüsselt, der über PBKDF2-SHA256 mit 256.000 Iterationen aus deiner Sync-Passphrase abgeleitet wird.
- Nur die verschlüsselten Bytes erreichen den Server. Wir können deine Hefte nicht lesen.

Die Metadaten (Hefttitel, Timestamps, Größe) werden ebenfalls verschlüsselt — der Server sieht opake Blobs und Sync-Timestamps.

## Wenn du die Passphrase verlierst

Wenn du die Passphrase vergisst und kein Gerät mehr hast, das einen Schlüssel im Cache hält, sind deine verschlüsselten Daten **nicht wiederherstellbar**. Das ist by design. Die Alternative — ein serverseitiger Recovery-Mechanismus — würde das Ende-zu-Ende-Modell brechen, und das ist ein Trade-off, den wir bei Consumer-Konten nicht eingehen wollen.

Für **Education-Konten** kann optional ein vom Administrator verwalteter Recovery-Key bei der Bereitstellung konfiguriert werden. Es ist ein expliziter Opt-in, dokumentiert im institutionellen DPA und auditiert.

## Konfliktauflösung

Wenn du dasselbe Canvas auf zwei Geräten gleichzeitig bearbeitest, während eines offline ist, nutzt Fluera ein CRDT mit Vector Clocks, um den Merge ohne Konflikte zu machen. Du verlierst keine Arbeit. In seltenen Fällen, in denen der automatische Merge mehrdeutig ist, siehst du einen "merge needed"-Marker am betroffenen Knoten und eine Side-by-Side-Ansicht zur Bestätigung.

## Sync für ein bestimmtes Heft deaktivieren

Rechtsklick (oder gedrückt halten) auf ein Heft → **Sync deaktivieren**. Die Cloud-Kopie wird sofort widerrufen. Die lokale Kopie bleibt unverändert.

## Weiter

- [FAQ und Fehlerbehebung](/de/docs/faq)
- [Sicherheitsarchitektur](/de/security/architecture)
