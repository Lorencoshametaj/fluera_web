---
title: "Privacy and AI consent"
description: "What data Fluera collects, what consent you are giving, and how to turn everything off."
section: settings
sectionLabel: "Settings"
order: 1
updatedAt: 2026-10-23
---

Fluera is a local-first tool. By default, nothing leaves your device unless you explicitly enable a feature that requires it.

## The four core consent categories

Open **Settings → Privacy**. You will see four toggles, all off by default:

- **Product analytics.** Usage data tied to your account identifier, so that you can see and delete it — feature use, session length, AI call durations. Never content. Kept at most 180 days.
- **AI features.** Required to use Socratic, Ghost Map, LaTeX OCR, and Fog of War. Selected canvas text is sent to Google Gemini models served via Google Vertex AI, processed in the EU (2.5 models in the `europe-west4` NL / `europe-west1` BE regions, 3.x models on the Vertex AI EU multi-region endpoint): the data stays within EU member states. Never the whole canvas.
- **Cloud sync.** Required to sync canvases between devices. Synced data is encrypted in transit (TLS) and at rest on EU infrastructure (Supabase, `eu-north-1`). It is **not** end-to-end encrypted: as data controller Fluera can technically access synced content. We never sell it and never use it for advertising. With the Cloud plan, **Sync across your devices** (below) also carries your study and your settings.
- **Crash reporting.** Stack traces and device metadata when the app crashes. No user content. Processed by Sentry with `sendDefaultPii: false`.

Each toggle is independent. You can enable Cloud Sync without Analytics. You can use AI without Crash Reporting. The permissions are granular on purpose.

## Cognitive memory (on-device, opt-out)

Distinct from the four cloud consents above: by default Fluera indexes your notes **on your device** to power automatic titles, the concept map (Ghost Map) and spaced repetition (FSRS). The index is built and computed on your device and stays there, unless you turn on **Sync across your devices** (next section): then your review cards with the history of your answers, your concepts, the concept map and the titles of your note groups go through Fluera's cloud to your other devices. You can turn the memory off in **Settings → Privacy → Cognitive memory**: indexing stops and the cognitive data on this device is erased immediately (your notes stay intact); if you use Sync across your devices, the copies in the cloud are deleted too, and none goes up again until you turn it back on. Legal basis: legitimate interest with a right to object (GDPR Art. 6.1.f / 21) — which is why it is on by default and opt-out, not an opt-in consent like the four above.

## Sync across your devices (Cloud plan)

The switch **Settings → Data and sync → Sync across your devices** is off until you turn it on. It needs an account and the Cloud plan, and it applies to your whole account: on for one device means on for every device you sign in on. When you turn it on, the server records the date and the version of the privacy policy you had in front of you. Legal basis: contract (GDPR Art. 6.1.b) — it is the Cloud service you pay for.

- **What goes to the cloud, only while it is on:** whole canvases (strokes, sections, formulas, PDFs with the marks you made in the reader, photos); recorded lessons (the audio, in pieces); the study of each canvas (review cards with your answers, concepts, exams with their ink, the Socratic tutor, chat, recall, courses); the gallery's folders (with their names), each canvas's folder, the pinned ones, the labels and the Trash; the text Fluera recognised in your handwriting; your settings choices (appearance, language, paper, review, colours, eraser and similar). Settings tied to one device (hand, palm, pen, window) stay on it.
- **What always stays on the device:** the canvas history (Time Travel) and undo.
- **Who sees it:** you. On a canvas you share, its members see the canvas and the titles of note groups; your study is visible to you alone.
- **Where:** Supabase, EU region `eu-north-1` (Stockholm), encrypted in transit and at rest, **not** end-to-end encrypted.
- **Turning it off** from any device stops it on all of them and deletes nothing. The same goes for withdrawing the Cloud sync consent.
- **When the Cloud plan ends,** syncing pauses and everything stays downloadable for 6 months. After that we may remove the lesson audio, PDFs and photos beyond the 500 MB of the Free plan, oldest first; the ink of your canvases stays.
- **Deleting:** **Delete forever** on a canvas in the **Trash** removes it from the cloud with what belongs to it, its exam ink included; **Settings → Privacy and telemetry → Delete all my data from the cloud** removes every canvas, the lessons, the exam ink, the settings and the folders, and turns off Sync across your devices; **Settings → Profile and account → Delete account** removes everything, settings included.

Without the switch, all of this stays on your device, as before.

## Improve recognition (separate, opt-in only)

We are building a proprietary handwriting recognizer tailored to how Fluera users actually write. Under **Settings → Privacy → Improve recognition** you'll find two more toggles, also off by default and independent of the four above:

- **Calibration session (~5 min).** A one-time guided session where you write 30 prompted symbols (digits, math operators, Greek letters, common Italian letters). The symbol on screen is the ground truth, paired with your strokes. Highest-quality data per sample.
- **Automatic capture during writing.** While you write naturally on the canvas, we save the raw strokes (coordinates, timing, pressure, stylus tilt where supported) plus a small encrypted PNG of each cluster. The data stays encrypted on our server. **When our agreement with Google is finalized** (Vertex AI Data Processing Agreement, in progress) Google Gemini Vision will analyze the images so we can teach Fluera's handwriting recognizer what you wrote. Until then none of your handwriting samples leave our infrastructure to any third party.

Both toggles use a separate, dedicated pseudonymized identifier (SHA-256 of your user id + a fresh salt) that is **not** the same identifier used by Product analytics. Cross-correlation between the two corpora is mathematically infeasible without our infrastructure.

Specific safeguards for this category:
- Payload-level AES-256-GCM encryption *before* upload; the corpus decryption key is an asymmetric (X25519) keypair whose private half is paper-backed offline and never digitized.
- Row-Level Security on the Supabase tables — a user can never read another user's samples.
- Noise filter: clusters with fewer than 3 total points (taps, smudges) are discarded before save.
- Persistent dedup via geometric fingerprint — identical re-draws of the same cluster don't produce duplicate samples.
- Per-sample preview in **Settings → Privacy → Improve recognition → Recent captures**: you can see thumbnails of exactly what we've stored.

## What is never collected

- The content of your canvases (encrypted at rest with sqlite3mc, ChaCha20-Poly1305), unless you turn on **Sync across your devices** (above)
- The questions the AI asks, or your answers
- The audio you record, unless you turn on **Sync across your devices** (above): then it goes to the cloud like your canvases, encrypted in transit and at rest, not end-to-end
- Personally identifiable information of any kind without explicit consent

## How to verify

Turn the four switches off and watch your firewall or network monitor: your canvases, your recordings and what you write stay on the device. The app still talks to the network for things that carry no canvas content, for example: signing in to your account, checking your subscription with the store (RevenueCat), downloading the models some features need, the marketplace signal when you install or study a catalogue card (on by default, off in **Settings → Privacy and telemetry → Marketplace signal**), and the pages you open in the built-in browser.

## Revoking consent

All four toggles are always accessible at **Settings → Privacy**. Turning a toggle off takes effect immediately. What happens to data already collected depends on the category:

- **Product analytics:** once the withdrawal reaches our servers, the telemetry already collected with your account is deleted at once. In any case it is never kept for more than 180 days.
- **AI features:** requests stop at once, on our server too. The AI usage log (which feature, how many tokens, no content) stays for 24 months, for plan limits.
- **Cloud sync:** turning it off, or turning off Sync across your devices, deletes nothing already in the cloud — use **Delete all my data from the cloud** for that.
- **Crash reporting:** withdrawing does not delete reports already sent: Sentry keeps them for 30 days, and its encrypted backups for up to 90.

To delete your account and its data in the cloud, use **Settings → Profile and account → Delete account**. If that fails, email [lorenco@fluera.dev](mailto:lorenco@fluera.dev) from the address on your account.

## Next

- [Cloud sync setup](/docs/cloud-sync)
- [Security architecture](/security/architecture) — the full model
