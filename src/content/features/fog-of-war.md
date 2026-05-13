---
title: Fog of War
tagline: "Exam mode that hides what you almost remember."
shortDescription: "Mask regions of your canvas. Pull them back from memory. The retrieval struggle — not the seeing again — is where memory hardens."
status: beta
stepInCycle: 10
relatedPrinciples:
  - desirable-difficulties
  - retrieval-practice
  - spatial-cognition
  - spacing-effect
relatedAuthors:
  - robert-bjork
  - roediger-karpicke
  - okeefe-moser
order: 4
---

## What it solves

Exam preparation typically degenerates into one of two bad modes: rereading (feels productive, teaches nothing) or panic-cramming (teaches briefly, then collapses). Both avoid the thing that actually builds durable memory — the *struggle* of trying to retrieve without support.

Fog of War makes that struggle the default state of your canvas.

## How it works

Seven to fourteen days before an exam, you activate Fog of War on the canvas region you want to test. The zone is masked — a semi-opaque blur that hides content until you either retrieve it from memory or explicitly reveal it.

Navigate your canvas. Stop at a masked node. Try to remember what was there. Speak it aloud or write it on a companion surface. Only then tap to reveal.

Three outcomes:
- **Green** — you retrieved it correctly. The mask thins permanently.
- **Amber** — you got it partially. The mask becomes transparent but the node stays highlighted for revisit.
- **Red** — you missed it entirely. Fluera schedules an immediate return and prompts you to rewrite the node by hand — reinforcing via generation, not re-reading.

Run the loop until most of the canvas shifts to green. What remains red is the map of what you don't know — exactly the map you needed.

## The science behind it

Robert Bjork's **desirable difficulties** framework is the load-bearing idea. Fluency during study is a bad signal — a warning that encoding is shallow. The friction of retrieval under occlusion is the opposite: unfluent, slow, frustrating *and* exactly what cements memory.

Roediger and Karpicke's 2006 work showed that a single retrieval attempt produces stronger long-term retention than four rereading sessions. Fog of War is retrieval attempts at scale, across your entire canvas, without cost-per-question friction.

The spatial element matters too. Because your canvas is a memory palace (O'Keefe & Moser, Nobel 2014), retrieving from position reinforces not just the concept but the spatial index that leads to it. In the exam, you don't recall the fact — you *navigate* to it.

## What's coming

- **Automatic mask scheduling** — FSRS-driven fog that thickens on items due for review.
- **Timed exam simulation** — realistic pressure with configurable constraints.
- **Post-mortem map** — after the real exam, annotate which questions you aced and which you missed, and let Fluera update the scheduler with that ground truth.
