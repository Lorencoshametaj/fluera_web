import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "forever",
      tagline: "The full canvas. Three notebooks. Forever free.",
      features: [
        "Infinite canvas, 13 brushes, full handwriting engine",
        "3 notebooks, unlimited pages",
        "Local-first — fully offline",
        "Export to PNG and PDF",
        "Basic Socratic mode",
      ],
      cta: { label: "Start free", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5.99",
      period: "per month · €49/year",
      tagline: "The full canvas, 2-device sync, baseline AI.",
      features: [
        "All 13 brushes + unlimited layers",
        "Sync across 2 devices, end-to-end encrypted",
        "Export to PDF and all base formats",
        "Baseline AI quota (Atlas, Ghost Map base)",
        "Annual billing at €49 (~€4.08/month)",
      ],
      cta: { label: "Start with Plus", href: "/beta" },
      highlighted: true,
      badge: "Recommended",
    },
    {
      name: "Pro",
      price: "€11.99",
      period: "per month · €99/year",
      tagline: "Exam Session, Atlas, full AI suite, unlimited time travel and sync.",
      features: [
        "Exam Session — simulated exams from your canvas with hypercorrection feedback",
        "Atlas continent view + Cross-Zone Bridges across all your notebooks",
        "Full AI suite (Ghost Map, Socratic, Fog of War, FSRS scheduler)",
        "Unlimited notebooks",
        "Multi-device end-to-end encrypted sync",
        "Time Travel audio-synced replay",
        "All export formats (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Priority email support",
        "Annual billing at €99 (~€8.25/month)",
      ],
      cta: { label: "Get Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19.99",
      period: "per seat / month · €179/year per seat · 5+ seats",
      tagline: "Shared canvases for studios, labs, and small teams.",
      features: [
        "Everything in Pro for every team member",
        "Shared workspace with team Atlas",
        "Role-based permissions and ACL",
        "Admin dashboard + audit log",
        "Team billing (single invoice, VAT-handled)",
        "Priority support, dedicated onboarding",
      ],
      cta: { label: "Talk to sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Why publish pricing during a private beta?",
      a: "These are the V1 prices. Whoever signs up now locks their tier rate for as long as the subscription stays active — even if list prices move later.",
    },
    {
      q: "Is there a student discount?",
      a: "Yes. Verified students get Plus or Pro at 50% off through the Education pilot program. Sign up via /contact with a .edu / .ac.uk address or an ISIC card. We process verifications manually during the beta.",
    },
    {
      q: "What happens to my notebooks if I cancel Plus or Pro?",
      a: "Your notebooks stay on your device and revert to the Free tier. You keep the first three; the rest become read-only until you resubscribe or export them. Nothing is ever deleted without your explicit action.",
    },
    {
      q: "Is there a refund policy?",
      a: "Yes — 30 days, no questions asked, on monthly and annual plans. Email support@fluera.dev from the address you signed up with.",
    },
    {
      q: "Can I self-host Fluera?",
      a: "The local-first part already runs fully offline on all six platforms. Cloud sync self-hosting is on the Education roadmap (on-prem, SSO, audit log) — not yet available in Phase 1.",
    },
    {
      q: "Do you offer discounts for researchers or non-profits?",
      a: "Yes. Research labs, PhD programs, and registered non-profits can apply at /contact. We review case by case and usually grant Pro at the Student rate, or free in exchange for structured feedback.",
    },
    {
      q: "Why no free trial of Plus or Pro?",
      a: "The Free tier isn't crippled marketing — it's the full canvas. Use it as long as you need. Plus and Pro unlock sync and AI, which carry ongoing cloud costs we can't give away.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Credit/debit cards via Stripe (all major brands), SEPA direct debit for EU customers, and Apple Pay / Google Pay. Education customers can pay by bank transfer or purchase order.",
    },
  ],
};

export default data;
