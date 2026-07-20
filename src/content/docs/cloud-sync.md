---
title: "Cloud sync"
description: "How to sync canvases between devices, how your data is protected, and what to expect."
section: settings
sectionLabel: "Settings"
order: 2
updatedAt: 2026-04-20
---

Cloud sync is opt-in per notebook. You can sync one canvas while keeping another strictly local. Nothing moves until you tell it to.

## Enabling sync on your first device

1. Open **Settings → Privacy** and enable **Cloud sync**.
2. Choose which notebooks sync. Right-click (or long-press) a notebook → **Enable sync**.

A small cloud icon appears on each synced notebook. A red variant means an error; a grey one means paused.

## Adding a second device

1. Install Fluera on the second device.
2. Sign in with the same account.
3. Cloud sync begins automatically. Expect the first full sync to take a few minutes for a moderately large notebook.

## How your synced data is protected

- On your device, the local database is encrypted at rest with SQLCipher (AES-256).
- When you sync, your data travels encrypted in transit (TLS 1.3 with modern cipher suites).
- On our servers it is stored on EU infrastructure (Supabase, `eu-north-1`) and is protected by at-rest encryption at the infrastructure level.

To be clear: cloud sync is **not** end-to-end encrypted. As the data controller, Fluera can technically access synced content to provide and operate the service. We never sell your data and never use it for advertising. If you want a copy that only you can open, export a `.fluera` file — those exports are encrypted with AES-256-GCM.

## Recovering your data

Because synced notebooks are stored on our EU servers (and tied to your account), you can recover them by signing in again on any device. There is no separate passphrase to remember or lose.

If you want a copy that is encrypted so that only you can open it, export a `.fluera` file (AES-256-GCM) and keep its password yourself — that file is not readable by Fluera.

## Conflict resolution

If you edit the same canvas on two devices simultaneously while one is offline, Fluera uses a CRDT with vector clocks to merge without conflicts. You will not lose work. In rare cases where automatic merge is ambiguous, you will see a "merge needed" marker on the affected node and a side-by-side view to confirm.

## Disabling sync for a specific notebook

Right-click (or long-press) a notebook → **Disable sync**. The cloud copy is immediately revoked. The local copy stays untouched.

## Next

- [FAQ and troubleshooting](/docs/faq)
- [Security architecture](/security/architecture)
