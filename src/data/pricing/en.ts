import type { PricingData } from "../types";

// ─────────────────────────────────────────────────────────────────────────
// Price list of 2026-10-22: Free, Cloud, AI, Cloud + AI. Mirror of it.ts.
// Every amount in `price` and `period` is checked by
// `fluera_engine/tool/public_truth_gate.dart` against `FlueraPricing`, by `id`.
// ─────────────────────────────────────────────────────────────────────────

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "forever",
      tagline:
        "The full canvas, review and courses. No subscription and no expiry.",
      features: [
        "Infinite canvas and handwriting",
        "Review, courses, every brush, export and time travel",
        "A taste of AI in the first month after you sign up",
        "500 MB of cloud on all your devices, without audio, once Cloud goes live",
        "Works offline too: your canvases stay on your device",
      ],
      cta: { label: "Start free", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19.99",
      period: "per year · annual only · Cloud 60 at €44.99 / year",
      tagline:
        "Room for your canvases and recorded lectures. It goes live with an app update.",
      features: [
        "20 GB on your devices: phone, tablet and computer",
        "Recorded lectures play anywhere",
        "Your canvases safe, even if you change phones",
        "Cloud 60: 60 GB for people who record a lot of lectures",
      ],
      cta: { label: "Choose Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9.99",
      period: "per month · €84.99 / year (save €34.89)",
      tagline: "An AI that reads what you write, with a meter that is always visible.",
      features: [
        "The AI reads your notes and names every concept",
        "Tutor, exams, chat, formulas and transcription",
        "Always see how much AI you have left this month, as a percentage",
        "Exam reserve for the heaviest months",
        "14 days free to try it",
      ],
      cta: { label: "Try the AI", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99.99",
      period: "per year · save €4.99 compared with the two separately · with Cloud 60 €119.99 / year",
      tagline: "All of Cloud and all of the AI, in one subscription.",
      features: [
        "All of Cloud and all of the AI",
        "20 GB, or 60 GB with Cloud 60 + AI",
        "Always see how much AI you have left this month, as a percentage",
        "Annual only",
      ],
      cta: { label: "Choose Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Recommended",
    },
  ],
  faq: [
    {
      q: "How do I see how much AI I have left?",
      a: "In the app, always. A meter shows, as a percentage, how much of this month’s AI you have left, when it refills (on the 1st of the month) and how long it lasts at your pace. No hidden limits and no credits to convert in your head: what you see is what you have.",
    },
    {
      q: "What if this month’s AI runs out?",
      a: "Review, courses and your notes always work, even without AI. The AI comes back on the 1st of the month; if you need it sooner, you can turn on the exam reserve or add a little more from the app.",
    },
    {
      q: "If I buy once, does it work on all my devices?",
      a: "Yes. You subscribe inside the Fluera app on your phone or tablet, through the App Store or Google Play, and pay with the methods saved in your store account. Your plan then works on every device where you sign in with the same account, computers included.",
    },
    {
      q: "Does Cloud already work across devices?",
      a: "Not yet. Cloud across phone, tablet and computer is being built and goes live with an app update. Until then your canvases stay on your device, where they also work offline.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes: 14 days, on the AI only. You can cancel from the store at any time before the trial ends. Free never expires and asks for no payment.",
    },
    {
      q: "What happens to my canvases if I cancel?",
      a: "They stay yours, on your device: canvas, review, courses, brushes and export keep working on Free. The plan’s features pause until you reactivate it. Nothing is deleted without an explicit action from you.",
    },
    {
      q: "Refund policy?",
      a: "Refund and withdrawal terms depend on the store and purchase channel. The applicable policy is shown before you confirm; for help, email support@fluera.dev from the address you signed up with.",
    },
    {
      q: "Team or Education plans?",
      a: "Coming in phase 2 (shared workspaces, admin dashboard, SSO). Interested? Email support@fluera.dev — we're building the roadmap with our first design partners.",
    },
  ],
};

export default data;
