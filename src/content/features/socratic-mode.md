---
title: Socratic Mode
tagline: "Our AI doesn't answer. It asks."
shortDescription: "Fluera's AI interrogates your canvas instead of summarising it. You rate your confidence one to five before every reveal. Because metacognition is half of mastery."
status: beta
stepInCycle: 3
relatedPrinciples:
  - system-1-2
  - zone-proximal-development
  - metacognition
  - retrieval-practice
  - illusion-of-competence
relatedAuthors:
  - daniel-kahneman
  - lev-vygotsky
  - roediger-karpicke
  - butterfield-metcalfe
order: 2
---

## What it solves

The easiest way to feel like you've studied is to ask an LLM to explain something. The reading is fluent. The explanation feels clear. Three seconds later, you have the distinct sensation of understanding — and three weeks later, you cannot retrieve any of it.

This is the **illusion of competence** at industrial scale. Socratic Mode is the antidote.

## How it works

You finish writing a concept on your canvas. You tap Socratic Mode. Fluera does *not* give you an explanation, a summary, or a definition.

Instead, it asks.

"You drew an arrow from kinetic energy to momentum. In what frame is that relationship scalar rather than vector?"

Before you answer, the UI asks one more thing: **how confident are you — 1 to 5?** Move the slider. Commit to a number. Now answer — by writing on your canvas, not in a chat box. The answer is part of your notebook from now on.

Only after you've answered does the AI react. If you were right and confident, it moves on. If you were wrong and confident, it doesn't lecture — it asks a follow-up that exposes the mismatch. If you were hesitant, it scaffolds with a progressively narrowing hint chain until you find it yourself.

The scaffolding progressively withdraws as the AI reads your growing canvas. Questions that seemed the right difficulty in week one become too easy by week three — the AI recalibrates without being asked.

## The science behind it

Three forces converge here:

- **Retrieval practice** (Roediger & Karpicke, 2006): being *tested* on material produces vastly stronger memory than being *told* the material — even when retrieval attempts fail.
- **The Zone of Proximal Development** (Vygotsky, 1978): learning happens in the calibrated gap between what you can do alone and what you can do with scaffolded guidance. Socratic questions live in this zone by design.
- **Metacognitive calibration** (Butterfield & Metcalfe, 2001): declaring your confidence *before* feedback is a metacognitive intervention in its own right. It primes the hypercorrection effect and trains you to separate *knowing* from *recognising*.

Kahneman's System 1 / System 2 dichotomy frames the whole mode. An LLM that answers you instantly speaks to System 1. An AI that forces you to stop, declare confidence, and then retrieve engages System 2 — and System 2 is where learning lives.

## What's coming

- **Voice mode** — spoken Socratic sessions for when the pen isn't practical (walking, commuting).
- **Cross-canvas Socratic** — the AI pulls questions that bridge your current topic with older canvases, weaponising interleaving.
- **Socratic quiver packs** from expert authors for specific fields (medicine, law, ML).
