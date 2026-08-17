---
title: "Performance tuning"
description: "Fluera targets 60 FPS and low-latency ink on supported hardware. Actual performance varies by device, canvas complexity, and active features."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

Fluera's engine targets 60 FPS and low-latency ink on supported hardware. Actual performance varies with the device, input stack, canvas complexity, and active features.

## Diagnostics

Open **Settings → Advanced → Performance**. You'll see:

- **Current FPS** — should hover at 60 (or 120 on ProMotion devices)
- **Stroke latency** — compare the reading with the target documented for your device and input stack; there is no universal threshold
- **Memory used** — absolute and as percentage of your device's budget
- **Tile cache hit rate** — should be >90 % during normal zoom/pan

If anything here is red, the likely culprits are in the list below.

## Large canvases

Large canvases may require tuning. Start with these two settings:

- **Memory budget.** On devices with less than 6 GB of RAM, Fluera's default memory budget is conservative. If you have lots of RAM and want faster zoom responses, raise it in **Settings → Canvas → Memory budget** to *Generous*.
- **Level of detail.** The default LOD policy simplifies strokes at very low zoom levels. If you notice jittery-looking strokes when zoomed out, switch LOD to *High detail* — but expect ~10 % more GPU load.

## Audio-synced recording (Time Travel)

Time Travel stores audio alongside stroke timestamps. For a 60-minute lecture, that's roughly 20 MB of audio. It's not the audio that slows things down — it's the index. Try:

- **Settings → Time Travel → Index granularity** set to *Standard* rather than *Fine*
- Clearing old Time Travel sessions you don't need (they are kept locally by default; the clear-cache button removes them safely)

## Apple Pencil specifically

On iPad, the default *Predicted touch* mode is designed to reduce perceived stroke latency. Results vary by iPad, Pencil, OS version, and canvas load. If you've disabled prediction (in Settings → Canvas → Stroke latency → Standard), put it back to Predicted. Prediction is an Apple Pencil API, not a guess — it uses the hardware's own trajectory prediction.

## When nothing helps

Run **Settings → Advanced → Export diagnostics**. You get a small JSON file with FPS samples, memory usage, and (anonymous) device information. Email it to [support@fluera.dev](mailto:support@fluera.dev) with a short description of when things slow down.

Diagnostics help support investigate performance issues. Investigation time and outcomes vary with the issue and the available data.

## Next

- [FAQ](/docs/faq)
- [All user docs](/docs)
