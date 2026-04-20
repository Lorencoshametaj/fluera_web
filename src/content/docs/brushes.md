---
title: "Brushes"
description: "Thirteen brush engines, each tuned for a different kind of mark. A short guide to picking the right one — and why it matters less than you think."
section: canvas
sectionLabel: "The canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera ships with thirteen brush engines. Each is a full rendering pipeline — pressure, tilt, velocity, per-brush fragment shaders — not a texture swap. That sounds like a lot; in practice, most of your learning will happen on one or two of them.

## The short answer

- If you are taking notes: **fountain pen** or **ballpoint**. Both are fast, readable, and forgiving.
- If you are annotating a PDF or highlighting a concept: **highlighter**.
- If you are drawing a diagram with clean geometric lines: **technical pen**.
- If you are making a quick visual metaphor or illustration: **pencil** (light strokes) or **charcoal** (dramatic strokes).

Everything else is for specific situations. Don't overthink it.

## All thirteen

| Brush           | Best for                                         | Notes                                    |
|-----------------|--------------------------------------------------|------------------------------------------|
| Fountain pen    | Long-form handwriting                            | Responds to tilt, shows natural ink flow |
| Ballpoint       | Fast notes, uniform line                         | Pressure-sensitive width                 |
| Pencil          | Soft, forgiving strokes                          | Grain texture, pressure-graded           |
| Technical pen   | CAD-style diagrams, precise geometry             | Zero pressure sensitivity on purpose     |
| Marker          | Chisel-tip headings, highlights                  | Flat strokes, vivid color                |
| Highlighter     | Overlay highlights (20–30 % opacity)             | Blends in overlay mode                   |
| Charcoal        | Expressive, rough texture                        | Smudge effect, bleed at edges            |
| Oil             | Painterly strokes, layered color                 | Wet-edge blending, edge darkening        |
| Watercolor      | Soft washes, diffusion                           | Pigment simulation                       |
| Ink wash        | Wet-on-paper feel                                | Color bleed at edges                     |
| Spray           | Particle effects, shadows                        | Edge distortion                          |
| Neon            | Glowing annotations                              | Outer glow, fluorescent saturation       |
| Eraser          | Per-pixel removal, not a delete tool             | History-aware — reveals underlying marks |

## Why the engine matters (briefly)

Fluera's engine preserves pressure, tilt, and velocity signals at sub-15-millisecond latency on iOS and macOS. That is not just a product nicety. <a href="/science/authors/van-der-meer">Van der Meer's EEG work</a> showed that handwriting engages sensorimotor networks that typing does not, and the richness of those signals scales with the fidelity of the capture.

In practical terms: a canvas that drops strokes, lags under pressure, or flattens tilt data is throwing away the exact signal that makes handwritten notes cognitively superior. We built the engine from scratch because no off-the-shelf option met the bar.

## Customising a brush

Long-press any brush in the toolbar. A small panel opens with:

- **Size** (0.5pt – 12pt)
- **Opacity** (10 % – 100 %)
- **Stabilisation** (none / soft / firm) — smooths jitter without killing personality
- **Pressure curve** — adjust the response to light vs heavy presses

Changes are per-canvas, not global, so you can have a soft pencil on one notebook and a sharp one on another.

## Next

- [Gestures and zoom](/docs/gestures-zoom)
- [Export and backup](/docs/cloud-sync)
