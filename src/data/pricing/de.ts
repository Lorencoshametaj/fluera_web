import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "für immer",
      tagline: "Das volle Canvas. Drei Notizbücher. Für immer kostenlos.",
      features: [
        "Unendliches Canvas, 13 Pinsel, vollständige Handschrift-Engine",
        "3 Notizbücher, unbegrenzte Seiten",
        "Local-first — komplett offline",
        "Export als PNG und PDF",
        "Socratic Mode Basis",
      ],
      cta: { label: "Kostenlos starten", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "pro Monat · €49/Jahr",
      tagline: "Volles Canvas, Sync auf 2 Geräten, KI-Basis.",
      features: [
        "Alle Pinsel + unbegrenzte Ebenen",
        "Sync auf 2 Geräten",
        "PDF-Export und alle Basis-Formate",
        "KI-Basis-Kontingent (Atlas, Ghost Map Basis)",
        "Jährlich für €49 (rund €4,08/Monat)",
      ],
      cta: { label: "Mit Plus starten", href: "/beta" },
      highlighted: true,
      badge: "Empfohlen",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "pro Monat · €99/Jahr",
      tagline: "Exam Session, Atlas, vollständige KI-Suite, Time Travel und Sync unbegrenzt.",
      features: [
        "Exam Session — simulierte Prüfungen aus deinem Canvas mit Hyperkorrektur-Feedback",
        "Atlas Kontinent-Ansicht + Cross-Zone Bridges über alle Notebooks",
        "Vollständige KI-Suite (Ghost Map, Socratic, Fog of War, FSRS-Scheduler)",
        "Unbegrenzte Notizbücher",
        "Multi-Geräte-Sync mit Ende-zu-Ende-Verschlüsselung",
        "Time Travel mit audiosynchronem Replay",
        "Alle Export-Formate (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Priorisierter E-Mail-Support",
        "Jährlich für €99 (rund €8,25/Monat)",
      ],
      cta: { label: "Pro werden", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "pro Seat / Monat · €179/Jahr pro Seat · ab 5 Seats",
      tagline: "Geteilte Canvases für Studios, Labs und kleine Teams.",
      features: [
        "Alles aus Pro für jedes Teammitglied",
        "Geteilter Workspace mit Team-Atlas",
        "Rollenbasierte Berechtigungen und ACL",
        "Admin-Dashboard + Audit-Trail",
        "Team-Abrechnung (eine Rechnung, MwSt. abgewickelt)",
        "Priorisierter Support, dediziertes Onboarding",
      ],
      cta: { label: "Mit Sales sprechen", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Warum zeigt ihr Preise, obwohl ihr in Closed Beta seid?",
      a: "Das sind die V1-Preise. Wer jetzt abonniert, friert den Tarif des eigenen Plans für die gesamte Laufzeit des Abonnements ein — auch wenn die Preisliste später steigt.",
    },
    {
      q: "Wie funktioniert die Studierenden-Verifizierung?",
      a: "Du registrierst dich mit einer .edu-, .ac.uk- oder verifizierten akademischen E-Mail. Wenn deine Universität keine akademische Domain nutzt (in DACH häufig), akzeptieren wir einen gescannten Studierendenausweis, ISIC oder eine Einmal-Mail aus dem Studierendensekretariat.",
    },
    {
      q: "Was passiert mit meinen Notizbüchern, wenn ich Plus oder Pro kündige?",
      a: "Die Notizbücher bleiben auf deinem Gerät und du landest wieder im Free-Tier. Du behältst die ersten drei; die übrigen werden schreibgeschützt, bis du reaktivierst oder sie exportierst. Nichts wird ohne deine ausdrückliche Aktion gelöscht.",
    },
    {
      q: "Gibt es eine Rückerstattungsregel?",
      a: "Ja — 30 Tage, ohne Rückfragen, bei Monats- und Jahresplänen. Schreibe an support@fluera.dev von der Adresse, mit der du dich registriert hast.",
    },
    {
      q: "Kann ich Fluera selbst hosten?",
      a: "Der local-first Teil läuft schon heute komplett offline auf allen sechs Plattformen. Self-Hosting des Cloud-Sync steht auf der Education-Roadmap (on-prem, SSO, Audit-Trail) — heute noch nicht verfügbar.",
    },
    {
      q: "Bietet ihr Rabatte für Forschende oder Non-Profits?",
      a: "Ja. Forschungslabore, Promotionsprogramme und eingetragene Non-Profits können das unter /contact anfragen. Wir entscheiden im Einzelfall und gewähren in der Regel Pro zum Studierenden-Preis oder kostenlos im Tausch gegen strukturiertes Feedback.",
    },
    {
      q: "Warum gibt es keine kostenlose Testphase für Plus oder Pro?",
      a: "Der Free-Tier ist kein kastriertes Marketing-Produkt — er ist das volle Canvas. Nutze ihn, solange du willst. Plus und Pro schalten KI und Sync frei, und die haben laufende Cloud-Kosten, die wir nicht verschenken können.",
    },
    {
      q: "Welche Zahlungsarten akzeptiert ihr?",
      a: "Kredit- und Debitkarten via Stripe (alle gängigen Marken), SEPA für EU-Kunden, Apple Pay und Google Pay. Education-Kunden können per Banküberweisung oder Bestellung (Purchase Order) zahlen.",
    },
  ],
};

export default data;
