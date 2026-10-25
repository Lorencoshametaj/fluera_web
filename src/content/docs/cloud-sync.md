---
title: "Sync across your devices"
description: "One switch for your whole account, with the Cloud plan: what travels, one desk at a time, conflict copies, the Trash and how to delete."
section: settings
sectionLabel: "Settings"
order: 2
updatedAt: 2026-10-23
---
With **Sync across your devices** you find your canvases, your study and your settings on every device you sign in on. It is one switch for your whole account, not one per canvas, and it stays off until you turn it on.

## Turning sync on

1. Sign in with an account (a guest session is not enough). You need the Cloud plan.
2. Open **Settings → Data and sync** and turn on **Sync across your devices**.

It applies at once to your whole account: every device you sign in on syncs by itself. When you turn it on, the server records the date and the version of the [privacy policy](/legal/privacy/en) you had in front of you. Without the Cloud plan the switch tells you it is needed; if the plan ends, it stays on but paused.

## On a new device

1. Install Fluera and sign in with the same account.
2. The gallery shows the list of your canvases right away. A canvas that is still only in the cloud carries the cloud mark: it downloads when you open it, and that needs a connection.
3. The rest comes down by itself in the background, when you are on Wi-Fi or a wired network and the battery is not low.

## What travels and what stays on the device

While the switch is on, these go to the cloud:

- whole canvases: strokes, sections, formulas, tables, charts, links, PDFs with the marks you made in the reader, photos;
- recorded lessons: the audio, in pieces, with the strokes tied to the audio;
- the study of each canvas: review cards with the history of your answers, concepts, exams with their ink, the Socratic tutor, chat, recall, the concept map, courses;
- gallery folders, each canvas's folder, pinned canvases, labels and the Trash;
- the text Fluera recognised in your handwriting, with your corrections;
- your settings choices: appearance, language, paper, review, exams and reminders, colours, eraser and similar.

The canvas history (Time Travel), undo and the settings tied to that device (hand, palm, pen, window) stay on the device. Browser folds have a switch of their own, **Browser folds**, and travel end-to-end encrypted.

## One desk at a time

Across your devices, a canvas is written on one device at a time.

- The device where you open a canvas takes the turn and renews it every minute.
- If the same canvas is open elsewhere, here you see it read-only with **Open on …**. Tap **Write here**: the other device saves, sends its work to the cloud and hands you the turn. If it does not answer, the turn passes to you after about a minute and a half.
- When you put Fluera in the background, the device sends its work and frees the turn. A turn nobody renews frees itself after two and a half minutes (app closed, no connection).
- If the canvas changed on another device while you had it open, you see **This canvas changed on another device**: tap **Close and update** to bring down the other device's work.

Without a connection you can still write: it is your copy on the device.

## Conflict copies

If the same canvas changed on two devices without a connection, Fluera does not write one version over the other: once they are back online, the work missing from one of the two stays as a separate canvas in the gallery.

- **"Title" · from this device**: the work done here.
- **"Title" · from the other device**: the version that came from the cloud.

Open both and bring together by hand what you need. A device with an older Fluera does not write over a canvas saved with a newer Fluera: it asks you to update (**Update Fluera to save to the cloud**) and its work goes up as a copy alongside, **"Title" — from …, to bring together**.

## Trash and folders

- Folders travel with their name, colour, parent folder and pin; each canvas stays in its folder on every device.
- A canvas in the **Trash** is in the Trash on every device. The Trash's 30 days count from the time it went in, the same everywhere. If you write in it again from another device, it leaves the Trash.
- If you delete a folder, the canvases it held stay.

## Turning it off deletes nothing

You can turn the switch off from any device: it stops on all of them. It also turns off if you withdraw the **Cloud sync** consent in **Settings → Privacy and telemetry**. Turning it off **deletes nothing**: what is in the cloud stays until you delete it, and everything stays on your devices.

## If the Cloud plan closes

If the Cloud plan closes (expiry, refund, plan change or revocation), sync pauses and for **6 months** everything stays in the cloud: you can download it on any of your devices, and the app tells you until when. After the 6 months we may remove from the cloud the lesson audio, PDFs and photos beyond the 500 MB of the Free plan, oldest first. The ink of your canvases always stays, and we remove nothing from a canvas shared with another account or from private catalogue cards. If you reactivate Cloud before then, the closure is cancelled.

## Deleting from the cloud

- **Delete forever** on a canvas in the Trash removes it from the cloud with what belongs to it: strokes, photos, PDFs, lessons, review cards with answers, concepts, titles, study, recognised text and the ink of its exams.
- A discarded exam answer and a photo removed from a canvas leave the cloud as soon as the device is online.
- **Delete all my data from the cloud** (**Settings → Privacy and telemetry**) removes every canvas, the lessons, the exam ink, the settings that travel and the folders, and turns the switch off on all your devices. Only the record of the switch remains (when you turned it on and off, with the policy version), which is the proof of your consent.
- **Delete account** (**Settings → Profile and account**) deletes that too.
- If you turn off **Cognitive memory**, its copies in the cloud are deleted too: review cards with answers, concepts, the concept map and the titles of note groups.

The copies on your devices stay until you delete them there.

## How the data is protected

- On the device, the local database is encrypted at rest with ChaCha20-Poly1305 (sqlite3mc); the key lives in the system keychain.
- In the cloud the data sits on Supabase, EU region `eu-north-1` (Stockholm), encrypted in transit (TLS) and at rest at the infrastructure level.
- Sync is **not** end-to-end encrypted: Fluera, as data controller, can technically access the data to run, protect and support the service. We do not sell it and do not use it for advertising. Browser folds are the exception: end-to-end encrypted.

## Next

- [Privacy and consent](/docs/privacy-consent)
- [Privacy policy](/legal/privacy/en) — the full text
- [FAQ and troubleshooting](/docs/faq)
- [Security architecture](/security/architecture)
