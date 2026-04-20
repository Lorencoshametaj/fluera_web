---
title: "Performance tuning"
description: "Fluera is built to keep 60 FPS on canvases with hundreds of thousands of strokes. Here is what to check when it doesn't."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

Fluera's engine is designed to stay at 60 FPS with sub-15 ms stroke latency on modern hardware — up to hundreds of thousands of strokes per notebook. When it doesn't, one of a small set of things is usually responsible.

## Diagnostics

Open **Settings → Advanced → Performance**. You'll see:

- **Current FPS** — should hover at 60 (or 120 on ProMotion devices)
- **Stroke latency** — should read <15 ms on iOS/macOS, <20 ms on other platforms
- **Memory used** — absolute and as percentage of your device's budget
- **Tile cache hit rate** — should be >90 % during normal zoom/pan

If anything here is red, the likely culprits are in the list below.

## Large canvases (&gt; 200k strokes)

The engine is fine with this volume, but two settings matter:

- **Memory budget.** On devices with less than 6 GB of RAM, Fluera's default memory budget is conservative. If you have lots of RAM and want faster zoom responses, raise it in **Settings → Canvas → Memory budget** to *Generous*.
- **Level of detail.** The default LOD policy simplifies strokes at very low zoom levels. If you notice jittery-looking strokes when zoomed out, switch LOD to *High detail* — but expect ~10 % more GPU load.

## Audio-synced recording (Time Travel)

Time Travel stores audio alongside stroke timestamps. For a 60-minute lecture, that's roughly 20 MB of audio. It's not the audio that slows things down — it's the index. Try:

- **Settings → Time Travel → Index granularity** set to *Standard* rather than *Fine*
- Clearing old Time Travel sessions you don't need (they are kept locally by default; the clear-cache button removes them safely)

## Apple Pencil specifically

On iPad, the default *Predicted touch* mode keeps stroke latency under 8 ms. If you've disabled prediction (in Settings → Canvas → Stroke latency → Standard), put it back to Predicted. Prediction is an Apple Pencil API, not a guess — it uses the hardware's own trajectory prediction.

## When nothing helps

Run **Settings → Advanced → Export diagnostics**. You get a small JSON file with FPS samples, memory usage, and (anonymous) device information. Email it to [support@fluera.dev](mailto:support@fluera.dev) with a short description of when things slow down.

We log ≈95 % of user-visible perf regressions to a specific piece of code within one hour of receiving a diagnostics export. The remaining 5 % are genuinely hard and we'll tell you so.

## Next

- [FAQ](/docs/faq)
- [All user docs](/docs)
