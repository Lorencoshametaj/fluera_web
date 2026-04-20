---
title: Time Travel
tagline: "Replay any stroke. Synced to the lecture audio that made you write it."
shortDescription: "Touch a note from three weeks ago and the audio picks up where your pen was moving. Re-experience your own thinking."
status: coming-soon
stepInCycle: 5
relatedPrinciples:
  - spatial-cognition
  - spacing-effect
  - embodied-cognition
  - levels-of-processing
relatedAuthors:
  - okeefe-moser
  - van-der-meer
order: 4
---

## What it solves

The traditional failure of lecture notes is that they're dead. Weeks later, you look at something you wrote and cannot remember why. What was the professor saying? What was the context? The note is decontextualised — and decontextualised notes are close to useless.

Time Travel keeps the context alive.

## How it works

Start a recording when the lecture begins. Write normally. Every stroke you draw is timestamp-linked to the audio frame being recorded.

Later — days, weeks, or months — touch any stroke on your canvas. The audio rewinds to the exact moment you were writing it. You hear the professor's voice, your own thinking, the question someone asked from the back row. The context snaps back.

Scrub the audio and watch the canvas replay itself stroke by stroke, at the original pace or accelerated. See your own mind working.

All storage is local by default, encrypted with SQLCipher. Sync of audio is opt-in and end-to-end encrypted when enabled.

## The science behind it

Two principles converge:

- **Cue-dependent retrieval** (Tulving, 1972): memory is best recalled when the retrieval context matches the encoding context. Fluera reproduces the encoding context on demand — the professor's voice, the room ambience, your own hand movements.
- **Spatial cognition** (O'Keefe & Moser, Nobel 2014): the canvas position is itself a retrieval cue. Touching a stroke combines spatial cue (location) with contextual cue (audio) — two retrieval routes instead of one.

Van der Meer's EEG work (2020) adds a third layer: handwriting activates broad sensorimotor networks at the time of writing. Time Travel lets the student re-traverse that same network weeks later — not merely by remembering it, but by *replaying* the stroke that originally fired it.

## What's coming

Time Travel is in private alpha. Full release ships with:

- **Cross-device audio sync** (currently local-only)
- **Transcript search** — find moments in a lecture by what was said
- **Chapter markers** auto-generated from pauses and topic shifts
- **Export as annotated video** — for sharing a lecture walkthrough
