---
title: "FAQ"
description: "The questions we get most often from beta users. If something here is out of date, email support and we'll fix it."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 1
updatedAt: 2026-04-20
---

## Why is my canvas slow to open after I haven't used it in a week?

The first time Fluera loads a notebook after a pause, it rebuilds the spatial index and re-evaluates which nodes are due for review. Subsequent opens are fast. If the pause was more than a month, also expect the spaced-repetition scheduler to recalibrate your pending reviews.

If the first open takes more than 10 seconds on a modern device, that's a bug — please email [support@fluera.dev](mailto:support@fluera.dev) with the canvas name and approximate node count.

## Can I import my Anki decks?

Not yet. Import is on the roadmap but not a Phase 1 blocker — Fluera's retrieval model is structurally different (spatial, not atomic), so a direct import would lose most of the value. When it lands, it will be available for Pro and Education accounts.

## Can I export my canvases to PNG / SVG / PDF?

Yes, all of them, plus our open `.fluera` format. See the **Export** menu. No restrictions on which tier you're on — export is a basic data-ownership feature, not a paywalled one.

## The AI gave me a wrong answer. Is that expected?

Sometimes, yes. Our AI is Google Gemini, and Gemini — like every LLM — can hallucinate. The Socratic mode is less prone to it because it asks questions rather than producing definitive answers, but it is not zero.

If you get a clearly wrong AI response, tap **Flag** on the response. That feedback is used to improve the prompting; it is anonymised and never linked to your content.

## Will Fluera work without internet?

The canvas — writing, reading, export — is fully offline. The AI features (Socratic, Ghost Map, Fog of War scoring) require internet. Spaced repetition scheduling is local; only sync and AI need a connection.

## I'm in the EU. How does GDPR apply here?

Fully. Fluera is EU-hosted and GDPR-native. You can exercise your rights (access, rectification, deletion, portability) via **Settings → Privacy** or by emailing [privacy@fluera.dev](mailto:privacy@fluera.dev). Response within 30 days; typically within 48 hours.

## The Pencil is lagging on my iPad. What's wrong?

First, check that Fluera is up to date. Then: **Settings → Canvas → Stroke latency** should read *Predicted (recommended)* for Apple Pencil devices. If it says *Standard* or *Low-power*, switch it back to Predicted.

If the lag persists with Predicted turned on, quit and relaunch. If it still persists, email us with your iPad model — there is one regression on iPad Air 3 that we are actively tracking.

## How do I report a bug?

[support@fluera.dev](mailto:support@fluera.dev). Describe what you were doing, what you expected, what happened, and include your app version (Settings → About). Screenshots help.

For security vulnerabilities, use [security@fluera.dev](mailto:security@fluera.dev) and encrypt with our PGP key (on our GitHub profile).

## How do I give feedback on the pedagogy?

We read every email. [hello@fluera.dev](mailto:hello@fluera.dev) goes to the founders directly. Specifically helpful: what *didn't* work for you, what felt like friction that wasn't desirable, and anything that surprised you.

## Next

- [Performance tuning](/docs/performance) — getting the most out of large canvases
- [All user docs](/docs)
