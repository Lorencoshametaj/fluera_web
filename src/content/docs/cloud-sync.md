---
title: "Cloud sync"
description: "How to sync canvases between devices, what gets encrypted, and how to recover if you lose your passphrase."
section: settings
sectionLabel: "Settings"
order: 2
updatedAt: 2026-04-20
---

Cloud sync is opt-in per notebook. You can sync one canvas while keeping another strictly local. Nothing moves until you tell it to.

## Enabling sync on your first device

1. Open **Settings → Privacy** and enable **Cloud sync**.
2. Create or enter your **sync passphrase**. This is *separate* from your account password. The passphrase is used to derive the encryption key — and it is held only on your device, never on our servers.
3. Choose which notebooks sync. Right-click (or long-press) a notebook → **Enable sync**.

A small cloud icon appears on each synced notebook. A red variant means an error; a grey one means paused.

## Adding a second device

1. Install Fluera on the second device.
2. Sign in with the same account.
3. Enter the *same* sync passphrase when prompted. The passphrase is not recoverable — if you don't have it, the encrypted data is not readable on the new device.
4. Cloud sync begins. Expect the first full sync to take a few minutes for a moderately large notebook.

## What is encrypted and how

- Every notebook is encrypted locally with a per-notebook key.
- Those keys are encrypted with a root key derived from your sync passphrase via PBKDF2-SHA256, 256,000 iterations.
- Only the encrypted bytes ever reach the server. We cannot read your notebooks.

Metadata (notebook titles, timestamps, size) is also encrypted — the server sees opaque blobs and sync timestamps.

## Losing your passphrase

If you forget your passphrase and you have no device that still has a cached key, your encrypted data becomes **unrecoverable**. This is by design. The alternative — a server-side recovery mechanism — would break the end-to-end model and is a trade-off we are not willing to make for consumer accounts.

For **Education accounts**, an optional administrator-held recovery key can be configured at deployment time. This is an explicit opt-in, documented on the institutional DPA, and audited.

## Conflict resolution

If you edit the same canvas on two devices simultaneously while one is offline, Fluera uses a CRDT with vector clocks to merge without conflicts. You will not lose work. In rare cases where automatic merge is ambiguous, you will see a "merge needed" marker on the affected node and a side-by-side view to confirm.

## Disabling sync for a specific notebook

Right-click (or long-press) a notebook → **Disable sync**. The cloud copy is immediately revoked. The local copy stays untouched.

## Next

- [FAQ and troubleshooting](/docs/faq)
- [Security architecture](/security/architecture)
