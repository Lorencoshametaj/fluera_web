---
lang: "de"
title: "Cloud-Sync"
description: "So synchronisierst du Canvas zwischen Geräten, schützt deine Daten und stellst sie über dein Konto wieder her."
section: settings
sectionLabel: "Einstellungen"
order: 2
updatedAt: 2026-08-12
---

Cloud-Sync ist für jedes Heft optional. Du kannst ein Canvas synchronisieren und ein anderes vollständig lokal halten. Es werden keine Daten hochgeladen, bevor du die Synchronisierung selbst aktivierst.

## Sync auf dem ersten Gerät aktivieren

1. Öffne **Einstellungen → Datenschutz** und aktiviere **Cloud-Sync**.
2. Wähle die Hefte aus, die synchronisiert werden sollen. Klicke mit der rechten Maustaste auf ein Heft (oder halte es gedrückt) → **Sync aktivieren**.

Auf jedem synchronisierten Heft erscheint ein kleines Cloud-Symbol. Rot weist auf einen Fehler hin, Grau auf eine Pause.

## Ein zweites Gerät hinzufügen

1. Installiere Fluera auf dem zweiten Gerät.
2. Melde dich mit demselben Konto an.
3. Cloud-Sync startet automatisch. Die erste vollständige Synchronisierung eines mittelgroßen Hefts kann einige Minuten dauern.

## So werden synchronisierte Daten geschützt

- Auf deinem Gerät wird die lokale Datenbank mit SQLCipher (AES-256) verschlüsselt gespeichert.
- Während der Synchronisierung werden die Daten verschlüsselt über TLS übertragen.
- Auf unseren Servern liegen sie auf EU-Infrastruktur (Supabase, Region `eu-north-1`) und sind dort auf Infrastrukturebene verschlüsselt.

Zur Klarstellung: Cloud-Sync ist **nicht Ende-zu-Ende-verschlüsselt**. Als Verantwortlicher kann Fluera technisch auf synchronisierte Inhalte zugreifen, um den Dienst bereitzustellen und zu betreiben. Wir verkaufen deine Daten niemals und verwenden sie nie für Werbung.

Wenn du ein Heft als passwortgeschützte `.fluera`-Datei exportierst, wird diese Datei separat mit AES-256-GCM verschlüsselt. Das Exportpasswort schützt nur diese Datei und ist kein Zugangsdatenbestandteil des Cloud-Syncs.

## Daten wiederherstellen

Synchronisierte Hefte sind mit deinem Konto verknüpft. Nach der normalen Kontowiederherstellung kannst du dich auf einem neuen Gerät erneut anmelden und sie herunterladen. Es gibt keine separate Cloud-Sync-Passphrase, die du dir merken oder verlieren könntest.

## Konflikte auflösen

Wenn du dasselbe Canvas auf zwei Geräten bearbeitest, während eines offline ist, führt Fluera die Änderungen mithilfe eines CRDT mit Vector Clocks zusammen. In den seltenen Fällen, in denen der automatische Merge nicht eindeutig ist, erscheint am betroffenen Knoten ein Hinweis „Merge erforderlich“ mit einer Gegenüberstellung zur Bestätigung.

## Sync für ein bestimmtes Heft deaktivieren

Klicke mit der rechten Maustaste auf ein Heft (oder halte es gedrückt) → **Sync deaktivieren**. Die Cloud-Kopie wird sofort widerrufen; die lokale Kopie bleibt unverändert.

## Weiter

- [FAQ und Fehlerbehebung](/de/docs/faq)
- [Sicherheitsarchitektur](/de/security/architecture)
