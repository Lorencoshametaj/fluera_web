import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "forever",
      tagline:
        "The full canvas, review and courses. No subscription and no expiry.",
      features: [
        "Infinite canvas and handwriting",
        "Review, courses, every brush, export and time travel",
        "Mentor to try in your first month",
        "500 MB that match on all your devices, without audio, once sync goes live",
        "Works offline too: your canvases stay on your device",
      ],
      cta: { label: "Start free", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Anywhere",
      price: "€29.99",
      period: "per year · annual only · 60 GB at €44.99 / year",
      tagline:
        "Everything on phone, tablet and computer, without thinking about space. It goes live with an app update.",
      features: [
        "20 GB instead of the 500 MB of the free plan",
        "Recorded lectures, with the audio, on every device",
        "Share a canvas and write in it together",
        "If you stop, 6 months to download everything. The ink stays forever.",
        "No extra study features: they are all in the free plan already",
      ],
      cta: { label: "Choose Anywhere", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9.99",
      period: "per month · €84.99 / year (save €34.89)",
      tagline:
        "A tutor who has read your notes, with a monthly allowance always shown as a percentage.",
      features: [
        "Asks you questions about what you wrote",
        "Gives you an oral exam and tells you what is missing",
        "Gives a title to every concept you write",
        "Turns handwritten formulas into editable ones",
        "And you can ask your notes questions, in a chat",
        "A monthly allowance, always shown as a percentage",
        "The first 14 days are free",
      ],
      cta: { label: "Try Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Anywhere + Mentor",
      price: "€99.99",
      period: "per year · save €14.99 compared with the two separately · with 60 GB €119.99 / year",
      tagline:
        "All of Fluera, on every device, with the tutor. The recommended plan.",
      features: [
        "All of Anywhere: 20 GB and lectures with audio",
        "All of Mentor: questions, exam, titles and formulas",
        "A monthly allowance, always shown as a percentage",
        "Annual only",
      ],
      cta: { label: "Choose Anywhere + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Recommended",
    },
  ],
  faq: [
    {
      q: "How do I see how much Mentor I have left?",
      a: "In the app, always. A meter shows, as a percentage, how much of this month’s Mentor allowance you have left, when it refills (on the 1st of the month) and how long it lasts at your pace. No hidden limits and no credits to convert in your head: what you see is what you have.",
    },
    {
      q: "What if this month’s Mentor runs out?",
      a: "Review, courses and your notes always work, even without Mentor. Mentor comes back on the 1st of the month; if you need it sooner, you can turn on the exam reserve or add a little more from the app.",
    },
    {
      q: "If I buy once, does it work on all my devices?",
      a: "Yes. You subscribe inside the Fluera app on your phone or tablet, through the App Store or Google Play, and pay with the methods saved in your store account. Your plan then works on every device where you sign in with the same account, computers included.",
    },
    {
      q: "Does Anywhere already work across devices?",
      a: "Not yet. Sync across phone, tablet and computer is being built and goes live with an app update. Until then your canvases stay on your device, where they also work offline.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes: 14 days, on Mentor only. You can cancel from the store at any time before the trial ends. Free Fluera never expires and asks for no payment.",
    },
    {
      q: "What happens to my canvases if I cancel?",
      a: "They stay yours, on your device: canvas, review, courses, brushes and export keep working for free. If you had Anywhere, you get 6 months to download everything, and the ink stays forever. Nothing is deleted without an explicit action from you.",
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
