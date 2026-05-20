---
title: "Privacy and AI consent"
description: "What data Fluera collects, what consent you are giving, and how to turn everything off."
section: settings
sectionLabel: "Settings"
order: 1
updatedAt: 2026-05-19
---

Fluera is a local-first tool. By default, nothing leaves your device unless you explicitly enable a feature that requires it.

## The four core consent categories

Open **Settings → Privacy**. You will see four toggles, all off by default:

- **Product analytics.** Anonymous session data — feature invocation counts, session length, AI call durations. Never content. SHA-256-hashed user ID, 180-day retention.
- **AI features.** Required to use Socratic, Ghost Map, LaTeX OCR, and Fog of War. Selected canvas text is sent to Google Gemini via our server-side proxy. Never the full notebook.
- **Cloud sync.** Required to sync canvases between devices. All notebooks are encrypted on your device before upload. The cloud holds ciphertext.
- **Crash reporting.** Stack traces and device metadata when the app crashes. No user content. Processed by Sentry with `sendDefaultPii: false`.

Each toggle is independent. You can enable Cloud Sync without Analytics. You can use AI without Crash Reporting. The permissions are granular on purpose.

## AI Training Data (separate, opt-in only)

We are building a proprietary handwriting recognizer tailored to how Fluera users actually write. Under **Settings → Privacy → AI Training Data** you'll find two more toggles, also off by default and independent of the four above:

- **Calibration session (~5 min).** A one-time guided session where you write 30 prompted symbols (digits, math operators, Greek letters, common Italian letters). The symbol on screen is the ground truth, paired with your strokes. Highest-quality data per sample.
- **Automatic capture during writing.** While you write naturally on the canvas, we save the raw strokes (coordinates, timing, pressure, stylus tilt where supported) plus a small encrypted PNG of each cluster. The data stays encrypted on our server. **When our agreement with Google is finalized** (Vertex AI Data Processing Agreement, in progress) Google Gemini Vision will analyze the images so we can teach Fluera AI what you wrote. Until then no AI Training Data leaves our infrastructure to any third party.

Both toggles use a separate, dedicated pseudonymized identifier (SHA-256 of your user id + a fresh salt) that is **not** the same identifier used by Product analytics. Cross-correlation between the two corpora is mathematically infeasible without our infrastructure.

Specific safeguards for this category:
- Payload-level AES-256-GCM encryption *before* upload; the corpus decryption key is an asymmetric (X25519) keypair whose private half is paper-backed offline and never digitized.
- Row-Level Security on the Supabase tables — a user can never read another user's samples.
- Noise filter: clusters with fewer than 3 total points (taps, smudges) are discarded before save.
- Persistent dedup via geometric fingerprint — identical re-draws of the same cluster don't produce duplicate samples.
- Per-sample preview in **Settings → AI Training Data → Recent captures**: you can see thumbnails of exactly what we've stored.

## What is never collected

- The content of your canvases (encrypted at rest with SQLCipher, AES-256)
- The questions the AI asks, or your answers
- The audio you record with Time Travel (stored locally; opt-in sync encrypts before upload)
- Personally identifiable information of any kind without explicit consent

## How to verify

Run the app in airplane mode. Do everything except cloud sync and AI. Observe your firewall or network monitor. Fluera makes zero network requests with all four consent toggles off. This is verifiable, by design.

## Revoking consent

All four toggles are always accessible at **Settings → Privacy**. Turning a toggle off takes effect immediately. The associated backend data is scheduled for deletion within 30 days.

For account-level deletion (the full right-to-be-forgotten), email [lorenco@fluera.dev](mailto:lorenco@fluera.dev) from the address on your account.

## Education accounts

If your institution administers your Fluera account, the above behaviours still apply to *your* data. The administrator can see aggregate usage statistics for compliance reviews (via the audit log) but cannot read the content of your notebooks. The encryption is enforced on your device; the key is in your keychain, not in any admin system.

## Next

- [Cloud sync setup](/docs/cloud-sync)
- [Security architecture](/security/architecture) — the full model
