---
title: Exam Session
tagline: "Simulated exams from your own canvas. Hypercorrection turns mistakes into permanent memory."
shortDescription: "Fluera generates a closed-book exam from the concepts you've actually drawn. Confidence picker before each answer. After you submit, Ghost Map overlays your work — the bigger the surprise, the harder the correction sticks."
status: beta
stepInCycle: 11
relatedPrinciples:
  - hypercorrection-effect
  - productive-failure
  - interleaving
  - retrieval-practice
  - metacognition
relatedAuthors:
  - butterfield-metcalfe
  - robert-bjork
  - roediger-karpicke
order: 7
---

## What it solves

Most students confuse *feeling prepared* with *being prepared*. They re-read their notes, watch a video at 2×, ask an LLM to summarise the chapter — and walk into the exam with a fluency that has nothing to do with retrieval. The result is the universal post-exam shock: "I knew this. Why couldn't I write it?"

Exam Session collapses that gap by making the exam happen — privately, on your own canvas, days before the real one.

## How it works

You finish a study session. You open the Atlas menu and tap **🎓 Interrogami** — or type *"interrogami"* into the canvas chat. Fluera reads the concepts you've actually drawn on the canvas (cluster cache plus stroke OCR) and generates a closed-book exam from them. Five, seven or ten questions. Mixed types: open-ended, multiple-choice, true/false, formula recall.

Before each answer, the confidence picker asks one thing: **how sure are you, one to five?** Move the dial. Commit.

Now answer — by hand, on a mini-canvas scratchpad, exactly the way you'd write it on the exam itself. No autocomplete. No copy-paste. No "regenerate response." Just you and the page.

When you submit, Fluera evaluates the answer token by token, streaming feedback as it reads. If you were wrong and confident, the **hypercorrection shock UI** fires — a deliberate, hard-to-ignore visual that primes the most durable form of correction the brain can produce. Then Fluera asks you to rewrite the correct answer in your own words: the **generation effect** locks it in.

After three correct in a row, difficulty boosts automatically. After every chunk of four questions, a short pause for feedback before the next set — chunking and interleaving by design.

When the session ends, the FSRS scheduler updates per-concept review intervals from your actual performance, not your self-reported ease. Blind spots flow back to Fog of War for surgical retrieval practice on Days 1, 3, 7, 14.

## The science behind it

Three decades of evidence converge on one finding: the most durable corrections come from the most surprising failures.

Butterfield & Metcalfe's **hypercorrection effect** (2001) is the central mechanism. High-confidence errors, once corrected, are retained more permanently than low-confidence ones — the surprise of being wrong when you were sure modulates hippocampal encoding via amygdala arousal. The confidence picker is not aesthetic; it primes this mechanism.

Robert Bjork's **desirable difficulties** framework (1994) explains why an open-ended hand-written answer beats multiple choice: the friction of generation is exactly what builds memory. Roediger & Karpicke (2006) round it out — a single retrieval attempt produces stronger long-term retention than four re-reading sessions.

Manu Kapur's **productive failure** research (2008) supports the hardest design choice: questions that begin slightly above your current level produce more lasting learning than questions tuned to your comfort. Adaptive difficulty escalates deliberately, not defensively.

## What's coming

- **Post-exam analytics** — per-cluster confidence calibration and hypercorrection magnitude graphs.
- **Voice-mode Exam** — spoken questions with handwritten answers, for clinical or oral-exam preparation.
- **Persistent surgical path overlay** — after Exam, Fog of War highlights only the missed concepts on the live canvas, scoped for next-day review.
- **Multi-subject Exam Sessions** — one session that interleaves clusters from multiple notebooks, weaponising transfer.
