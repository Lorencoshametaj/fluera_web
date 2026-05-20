import type { PricingData } from "../types";

// ─────────────────────────────────────────────────────────────────────────
// 🇬🇧 PRICING — V1 split (decision 2026-05-14)
//
// Mirror of pricing/it.ts. See it.ts for the full rationale; this is the
// English copy for the Tier 1 #1 audience.
//
// 3 public tiers (Free / Plus / Pro). Team + Edu are phase 2 and NOT
// listed publicly during V1. Unified AI credits, server-authoritative
// via Supabase.
//
// Positioning pillars:
//   • Transparency-first: credit numbers always visible, no hidden rate
//     limits like Notion AI / ChatGPT Plus.
//   • Pro pillars: Time Travel scrubber + audio↔ink sync + real-time
//     collab CRDT. The three things that justify the Plus → Pro upgrade
//     (never "Plus with a higher cap").
//   • Atlas + Chat AI are always free (0 credits) even on Free — they are
//     the canvas' conversational UX core.
// ─────────────────────────────────────────────────────────────────────────

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "forever",
      tagline:
        "The full canvas to try the method. 100 AI credits per month, always visible.",
      features: [
        "Infinite canvas, handwriting input, full rendering engine",
        "3 base brushes (pencil, fountain pen, marker — more in Plus)",
        "PNG export",
        "100 AI credits per month — Atlas and Chat Fluera AI always free",
        "Socratic 3 sessions/week, Ghost Map 3 comparisons/week, 1 Exam/week",
        "Fog of War, FSRS spaced repetition",
        "Cross-Zone Bridges — see the links between concepts the system discovers",
        "📍 3 Checkpoints per canvas — save a study moment and jump back anytime",
        "Time Travel + audio↔stroke sync preview on a demo canvas (read-only)",
        "Local-first, fully offline (1 device)",
      ],
      cta: { label: "Start free", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5.99",
      period: "per month · €49 / year (save €22 — 2 months free)",
      tagline:
        "Complete personal study: cloud sync, AI without weekly caps, unlimited voice.",
      features: [
        "Cloud sync 5 GB across 2 devices — your canvases on iPad and desktop",
        "Socratic, Ghost Map, Exam with no frequency limits (no more 3/week)",
        "5× more AI credits than Free (500 per month — roughly 60 Ghost Maps or 18 full Socratic sessions)",
        "Unlimited voice recording",
        "All V1 brushes (6 total, more coming)",
        "Full export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — create and edit your own concept links",
        "📍 Unlimited checkpoints per canvas",
        "7-day free trial, cancel anytime",
      ],
      cta: { label: "Try Plus", href: "/beta" },
      highlighted: true,
      badge: "Recommended",
    },
    {
      name: "Pro",
      price: "€11.99",
      period: "per month · €99 / year (save €44 — 3.5 months free)",
      tagline:
        "Amplified study: Time Travel, audio↔stroke sync, real-time collab, search across all canvases.",
      features: [
        "⏱️ Time Travel scrubber — watch yourself studying in playback",
        "🎤 Audio ↔ stroke sync — tap a stroke and hear what you were saying then",
        "🤝 Real-time canvas collaboration (CRDT) — invite peers with a link",
        "🔍 Proactive Background OCR — find a formula you wrote months ago across all your canvases",
        "Cloud sync 50 GB, unlimited devices",
        "Priority email support",
        "2000 AI credits per month",
      ],
      cta: { label: "Get Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "How do AI credits work?",
      a: "Every AI operation has a fixed credit cost: Ghost Map 8, Socratic 4 per stage, Exam 12 per question, Chat 1 per message. Atlas (canvas actions) and basic Background OCR are free. You always see your remaining balance in the canvas header — no hidden rate limits, no surprises. Unused credits don't roll over: the plan refills every 30 days from your signup date (not on the 1st of the month — you pay for 30 days and get 30 days).",
    },
    {
      q: "What happens if I run out of credits before the reset?",
      a: "We tell you in advance — a soft warning when you've used 80% of the cycle. When you hit zero, AI features stop with a clear message (never silent blocks). Wait for the next 30-day cycle or upgrade.",
    },
    {
      q: "Why does Pro cost twice as much for just three pillars?",
      a: "Pro isn't 'Plus with more credits' — it's amplified study. Time Travel replays your study session with audio synced per stroke: tap a formula and rehear the explanation you gave yourself. Real-time CRDT collaboration lets you work simultaneously with classmates or colleagues on the same canvas. Notability, GoodNotes and Notion AI don't ship this stack — not at this level of integration.",
    },
    {
      q: "What happens to my canvases if I cancel Plus or Pro?",
      a: "Everything stays on your device (local-first) and the 3 base brushes + PNG export keep working in the Free tier. Extra canvases become read-only until you reactivate or export. Nothing is ever deleted without an explicit action from you.",
    },
    {
      q: "Why no free trial of Pro?",
      a: "Plus has a 7-day free trial. Pro doesn't: real-time collab + Time Travel scrubber are recurring features with cloud costs we can't give away. If you want to evaluate the method, Free is the full canvas — use it as long as it works for you.",
    },
    {
      q: "What's a Checkpoint?",
      a: "A Checkpoint is a bookmark of your canvas at a precise moment — like \"save as\". Create one whenever you want (e.g. \"before the quiz\", \"after finishing chapter 3\") and jump back anytime to restore that state. It's different from Time Travel: a Checkpoint is a fixed point you chose, Time Travel is the continuous scrubber over the whole history. Free includes 3 Checkpoints per canvas, Plus unlimited.",
    },
    {
      q: "Can I try Time Travel + audio↔stroke sync before upgrading to Pro?",
      a: "Yes. Every Free user finds a pre-loaded demo canvas where you can open the Time Travel scrubber and tap strokes to replay the synchronised audio — read-only, on the demo. To record your own studies you'll need Pro.",
    },
    {
      q: "Refund policy?",
      a: "30 days, no questions asked, on both monthly and annual plans. Email support@fluera.dev from the address you signed up with.",
    },
    {
      q: "How does student verification work?",
      a: "Verified .edu or academic email. For European universities without .edu we accept a scanned student card, ISIC card, or a one-time email from your faculty office.",
    },
    {
      q: "Discounts for researchers or non-profits?",
      a: "Yes. Research labs, PhD programs, and registered non-profits can apply at /contact — we typically grant Pro at the Plus rate or free in exchange for structured feedback.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Credit/debit cards via Stripe, SEPA direct debit for EU customers, Apple Pay and Google Pay. Education customers can pay by bank transfer or purchase order.",
    },
    {
      q: "Team or Education plans?",
      a: "Coming in phase 2 (shared workspaces, admin dashboard, SSO). Interested? Email sales@fluera.dev — we're building the roadmap with our first design partners.",
    },
  ],
};

export default data;
