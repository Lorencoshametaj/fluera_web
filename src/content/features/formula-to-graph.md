---
title: Live Formulas
tagline: "Write an equation by hand. Drag it. Watch it move."
shortDescription: "Fluera doesn't just recognise your handwritten formula — it understands the role and dimension of each symbol, then turns it into an interactive graph you can manipulate, right inside your notes."
status: beta
order: 0
keywords:
  - interactive graph
  - handwriting math
  - dimensional analysis
  - graphing calculator
  - math notes
---

## What it solves

The moment a formula matters, you leave your notes. You retype it into Desmos, or you stare at a static expression and try to *imagine* what it does. A written formula is frozen: it shows the answer, never the behaviour. And a graphing calculator doesn't know that your `m` is a mass and your `t` is time — it just plots letters.

So the understanding stalls in the gap between three apps. The notebook stays passive.

## How it works

Fluera reads the formula in your own handwriting and *understands* it: which symbol is the output, which are the inputs, what each one means dimensionally — a mass, a length, a time — and which are constants. From that it builds the view a good teacher would draw at the board: the right axes, and a draggable slider for every quantity that isn't on an axis. Then it renders it live on the GPU — as a 2D curve, an implicit relation, or a 3D surface when the shape is genuinely spatial.

Write `F = ma`. Fluera puts acceleration on the x-axis, force on the y-axis, and mass on a slider — because it knows which is which. Drag the mass and the line tilts. You don't read that more mass needs more force for the same acceleration — you *feel* it. That is the jump from "it shows you" to "it makes you do."

## Why it's different

No other tool reads your handwriting **in context** and turns it into a manipulable, dimensionally-aware graph.

- **Desmos / GeoGebra** want a typed expression and treat every letter the same — a slider for `m` is identical to a slider for `c`. They have no idea what your symbols *mean*, and they live in a separate tab.
- **Apple's and OneNote's math tools** plot the literal symbols, but don't tell a mass from a frequency, offer no manipulation worth the name, and sit alone in a single note with nothing around them.

Fluera does both at once — because the same engine that clusters your notes by discipline is exactly what tells the graph that `m` is a mass and belongs on a slider.

## The learning, not the picture

A graph here is a *therapy for a specific confusion*, not decoration. Predict the shape before you reveal it. Vary one quantity and watch what stays invariant. See where the relation breaks down. And the formula you just brought to life becomes a spaced-repetition card — with the curve itself as the memory cue.

## Honest status

Recognition and the interactive 2D / 3D rendering run on-device. The deeper semantic reading — dimensions, roles, sensible ranges — uses a single cloud pass when you allow it, and falls back to a local read when you're offline or private. Some of the richer cognitive overlays (predict-the-shape, misconception contrasts) are still rolling out. We'd rather ship the one gesture that teaches than a wall of half-features.
