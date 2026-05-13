---
title: Reflow Physics
tagline: "Drag a concept. Watch the canvas reorganise itself around what matters."
shortDescription: "Reflow keeps spatial encoding alive while understanding evolves. Move a node and its neighbours follow the gradient — handwriting stays where your hand drew it, structure breathes."
status: beta
relatedPrinciples:
  - spatial-cognition
  - embodied-cognition
  - generation-effect
relatedAuthors:
  - okeefe-moser
  - mueller-oppenheimer
  - van-der-meer
order: 8
---

## What it solves

A canvas built in week one of a semester is not the canvas you want in week ten. Topics turn out to belong together. Distant clusters collapse into a single chapter. New material bursts open a node that used to be a single word.

Without reflow, the only options are: leave the canvas frozen and increasingly wrong, or hand-redraw the layout — wasting hours and breaking every spatial cue your hippocampus had already encoded.

Reflow Physics is the third option. The canvas reorganises itself, while keeping every stroke you ever drew exactly where you drew it.

## How it works

Drag any node — a concept, a cluster, a paragraph of handwriting. As your finger or pen moves, neighbouring elements respond like a soft physical system: closer nodes follow proportionally, distant nodes barely shift, and ghost displacements show you the proposed final layout *before* you commit.

Release. The reflow settles in a single fluid animation. Underneath, every stroke retains its original ID, its original timestamp, its original audio link from [Time Travel](/features/time-travel). Spatial cues update; identity does not.

Reflow respects manually drawn arrows and [Cross-Zone Bridges](/features/cross-zone-bridges): they stretch, they curve, they breathe — but they never break. Connections are first-class citizens of the layout.

Three modes:

- **Local reflow** — drag a single node; only its immediate cluster reorganises.
- **Cluster reflow** — long-press a cluster; the whole region becomes draggable as a unit while internal structure preserves.
- **Atlas reflow** — at continent zoom, drag a whole canvas in [Atlas](/features/atlas) view; subjects rearrange relative to each other.

Undo and redo work at the reflow level. A bad rearrangement is one tap away from reverting — every layout state is a checkpoint.

## The science behind it

The hippocampus encodes more than what you wrote: it encodes **where** you wrote it. O'Keefe and Moser's place-cell work (Nobel 2014) showed that the same neural population that maps your apartment also maps your concepts — provided the concepts have stable spatial coordinates. Static maps strengthen these cells; chaos destroys them.

Reflow's design constraint is a direct consequence: spatial change must be **smooth and intentional**, never abrupt. A node teleporting to a new position resets the place-cell mapping; a node sliding through intermediate positions preserves it. The physics aren't decorative — they're how memory survives reorganisation.

Mueller & Oppenheimer (2014) and van der Meer (2020) established that **handwriting itself** encodes memory through sensorimotor traces. Reflow protects these traces: the strokes never re-render, never get re-rasterised, never lose the pressure/tilt/velocity signature that the original act of writing produced. Move a concept; the motor trace moves with it.

Finally, the **generation effect** (Slamecka & Graf, 1978) cuts both ways. The act of deciding *where* a concept belongs — and revising that decision as understanding deepens — is itself a generative move that strengthens encoding. Reflow makes that revision cheap enough to do every week.

## What's coming

- **Per-zone gravity** — different reflow strengths for different subjects (math wants tight clusters; history wants timeline drift).
- **Reflow timeline** — scrub through the layout history of a canvas; see how your mental map evolved week by week.
- **Auto-reflow suggestions** — Atlas proposes consolidations when it detects clusters drifting toward each other across multiple sessions.
- **Reflow-aware export** — PDFs and SVGs that preserve the latest layout while keeping deep links to historical positions.
