---
title: Spaced Repetition
tagline: "Successive relearning — the strongest evidence-based study strategy, baked into your canvas."
shortDescription: "The AI schedules returns at widening intervals. Each return is retrieval practice, not rereading. Spacing and retrieval combined produce superadditive results."
status: beta
stepInCycle: 8
relatedPrinciples:
  - spacing-effect
  - retrieval-practice
  - successive-relearning
  - interleaving
relatedAuthors:
  - roediger-karpicke
  - robert-bjork
  - albert-bandura
order: 5
---

## What it solves

Most spaced repetition tools are flashcard apps. They decontextualise knowledge into atomic cards, then rebuild intervals based on self-reported ease. They work — but at the cost of removing the spatial and structural meaning that made the knowledge retrievable in the first place.

Fluera's spaced repetition lives inside your canvas. The node you review is the node you wrote, in the position you wrote it, connected to the concepts you drew lines between. Nothing gets atomised.

## How it works

After every Socratic session and Ghost Map overlay, Fluera updates a per-node memory strength estimate. It knows which concepts you answered easily, which ones triggered hypercorrection, and which ones you haven't seen in a while.

On each return (day 3, 7, 14, 30, 60+), Fluera opens your canvas with the due nodes rendered in Fog of War. You navigate, retrieve, reveal. The scheduler updates. The next interval widens or tightens based on what you actually remembered, not on what you said you remembered.

**Personalised FSRS.** The scheduler is not a fixed algorithm. It calibrates eight weight parameters per user via gradient descent on your review history — the same method as the most modern spaced repetition research, adapted for Fluera's richer signal (confidence, response time, hypercorrection magnitude).

## The science behind it

Roediger & Karpicke (2006) established that retrieval practice beats re-reading. Bjork's decades of work showed that spaced practice beats massed practice. In 2011, Rawson and Dunlosky combined the two — *successive relearning* — and demonstrated **superadditive** results: spaced retrieval practice produces effects larger than the sum of spacing alone plus retrieval alone.

This is the single strongest evidence base in learning science for any specific study strategy. Fluera's job is not to reinvent it but to remove every obstacle to practising it — especially the biggest one, which is the tedium of building flashcards in the first place. On Fluera, the canvas you already have *is* the review material.

## What's coming

- **Interleaved paths** — the AI picks review routes that cross subject zones, disabling autopilot.
- **Per-subject calibration** — separate FSRS weights for languages vs math vs clinical medicine, where memory dynamics differ measurably.
- **Import from Anki** — for students with existing decks who want to migrate gradually.
