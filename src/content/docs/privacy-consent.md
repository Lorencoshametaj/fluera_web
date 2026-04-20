---
title: "Privacy and AI consent"
description: "What data Fluera collects, what consent you are giving, and how to turn everything off."
section: settings
sectionLabel: "Settings"
order: 1
updatedAt: 2026-04-20
---

Fluera is a local-first tool. By default, nothing leaves your device unless you explicitly enable a feature that requires it.

## The four consent categories

Open **Settings → Privacy**. You will see four toggles, all off by default:

- **Product analytics.** Anonymous session data — feature invocation counts, session length, AI call durations. Never content. SHA-256-hashed user ID, 180-day retention.
- **AI features.** Required to use Socratic, Ghost Map, LaTeX OCR, and Fog of War. Selected canvas text is sent to Google Gemini via our server-side proxy. Never the full notebook.
- **Cloud sync.** Required to sync canvases between devices. All notebooks are encrypted on your device before upload. The cloud holds ciphertext.
- **Crash reporting.** Stack traces and device metadata when the app crashes. No user content. Processed by Sentry with `sendDefaultPii: false`.

Each toggle is independent. You can enable Cloud Sync without Analytics. You can use AI without Crash Reporting. The permissions are granular on purpose.

## What is never collected

- The content of your canvases (encrypted at rest with SQLCipher, AES-256)
- The questions the AI asks, or your answers
- The audio you record with Time Travel (stored locally; opt-in sync encrypts before upload)
- Personally identifiable information of any kind without explicit consent

## How to verify

Run the app in airplane mode. Do everything except cloud sync and AI. Observe your firewall or network monitor. Fluera makes zero network requests with all four consent toggles off. This is verifiable, by design.

## Revoking consent

All four toggles are always accessible at **Settings → Privacy**. Turning a toggle off takes effect immediately. The associated backend data is scheduled for deletion within 30 days.

For account-level deletion (the full right-to-be-forgotten), email [privacy@fluera.dev](mailto:privacy@fluera.dev) from the address on your account.

## Education accounts

If your institution administers your Fluera account, the above behaviours still apply to *your* data. The administrator can see aggregate usage statistics for compliance reviews (via the audit log) but cannot read the content of your notebooks. The encryption is enforced on your device; the key is in your keychain, not in any admin system.

## Next

- [Cloud sync setup](/docs/cloud-sync)
- [Security architecture](/security/architecture) — the full model
