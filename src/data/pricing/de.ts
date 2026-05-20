// 🇩🇪 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "für immer",
      tagline:
        "Das volle Canvas, um die Methode auszuprobieren. 100 KI-Credits pro Monat, immer sichtbar.",
      features: [
        "Unendliches Canvas, Handschrift-Eingabe, vollständige Rendering-Engine",
        "3 Basis-Pinsel (Bleistift, Füllfederhalter, Marker — mehr ab Plus)",
        "PNG-Export",
        "100 KI-Credits pro Monat — Atlas und Chat Fluera AI immer gratis",
        "Socratic 3 Sitzungen/Woche, Ghost Map 3 Vergleiche/Woche, 1 Exam/Woche",
        "Fog of War, FSRS-Wiederholungsplaner",
        "Cross-Zone Bridges — sieh die Verbindungen zwischen Konzepten, die das System entdeckt",
        "📍 3 Checkpoints pro Canvas — speichere einen Lernmoment und springe jederzeit zurück",
        "Time-Travel- + Audio↔Strich-Sync-Vorschau auf einem Demo-Canvas (nur Lesemodus)",
        "Local-first, vollständig offline (1 Gerät)",
      ],
      cta: { label: "Kostenlos starten", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "pro Monat · €49 / Jahr (sparst €22 — 2 Monate gratis)",
      tagline:
        "Komplettes Einzelstudium: Cloud-Sync, KI ohne Wochenlimits, unbegrenzte Sprachaufnahme.",
      features: [
        "Cloud-Sync 5 GB auf 2 Geräten — deine Canvases auch auf iPad und Desktop",
        "Socratic, Ghost Map, Exam ohne Frequenzlimits (kein 3/Woche mehr)",
        "5× mehr KI-Credits als Free (500 pro Monat — etwa 60 Ghost Maps oder 18 vollständige Socratic-Sitzungen)",
        "Unbegrenzte Sprachaufnahme",
        "Alle V1-Pinsel (6 insgesamt, weitere folgen)",
        "Vollständiger Export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — erstelle und bearbeite deine eigenen Konzeptverbindungen",
        "📍 Unbegrenzte Checkpoints pro Canvas",
        "7 Tage kostenlos testen, jederzeit kündbar",
      ],
      cta: { label: "Plus testen", href: "/beta" },
      highlighted: true,
      badge: "Empfohlen",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "pro Monat · €99 / Jahr (sparst €44 — 3,5 Monate gratis)",
      tagline:
        "Verstärktes Studium: Time Travel, Audio↔Strich-Sync, Echtzeit-Kollaboration, Suche über alle Canvases.",
      features: [
        "⏱️ Time-Travel-Scrubber — sieh dir dein Studium im Playback an",
        "🎤 Audio ↔ Strich-Sync — tippe auf einen Strich und höre, was du in diesem Moment gesagt hast",
        "🤝 Echtzeit-Canvas-Kollaboration (CRDT) — lade Kommilitonen mit einem Link ein",
        "🔍 Proaktives Background-OCR — finde eine Formel, die du vor Monaten geschrieben hast, in allen Canvases",
        "Cloud-Sync 50 GB, unbegrenzte Geräte",
        "Prioritärer E-Mail-Support",
        "2000 KI-Credits pro Monat",
      ],
      cta: { label: "Pro werden", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Wie funktionieren die KI-Credits?",
      a: "Jede KI-Operation kostet feste Credits: Ghost Map 8, Socratic 4 pro Stage, Exam 12 pro Frage, Chat 1 pro Nachricht. Atlas (Canvas-Aktionen) und Basis-Background-OCR sind kostenlos. Du siehst dein Restguthaben immer im Canvas-Header — keine versteckten Rate Limits, keine Überraschungen. Ungenutzte Credits werden nicht übertragen: Der Plan füllt sich alle 30 Tage ab deinem Anmeldedatum wieder auf (nicht am 1. des Monats — du zahlst für 30 Tage und bekommst 30 Tage).",
    },
    {
      q: "Was passiert, wenn ich vor dem Reset alle Credits aufbrauche?",
      a: "Wir sagen es dir vorher — eine sanfte Warnung, wenn du 80% des Zyklus verbraucht hast. Bei Null stoppen KI-Funktionen mit einer klaren Nachricht (nie stille Blockaden). Warte auf den nächsten 30-Tage-Zyklus oder upgrade.",
    },
    {
      q: "Warum kostet Pro doppelt so viel für nur drei Pillars?",
      a: "Pro ist nicht 'Plus mit mehr Credits' — es ist verstärktes Studium. Time Travel spielt deine Lerneinheit mit pro Strich synchronisiertem Audio ab: tippe auf eine Formel und höre die Erklärung, die du dir selbst gegeben hast. Echtzeit-CRDT-Kollaboration lässt dich gleichzeitig mit Kommilitonen oder Kollegen am selben Canvas arbeiten. Notability, GoodNotes und Notion AI bieten diesen Stack nicht — nicht auf diesem Integrationslevel.",
    },
    {
      q: "Was passiert mit meinen Canvases, wenn ich Plus oder Pro kündige?",
      a: "Alles bleibt auf deinem Gerät (local-first) und die 3 Basis-Pinsel + PNG-Export funktionieren weiter im Free-Tier. Zusätzliche Canvases werden schreibgeschützt, bis du reaktivierst oder exportierst. Nichts wird ohne deine explizite Aktion gelöscht.",
    },
    {
      q: "Warum keine kostenlose Pro-Probephase?",
      a: "Plus hat 7 Tage gratis. Pro nicht: Echtzeit-Kollaboration + Time-Travel-Scrubber sind wiederkehrende Features mit Cloud-Kosten, die wir nicht verschenken können. Zum Testen der Methode ist Free das volle Canvas — nutze es so lange du willst.",
    },
    {
      q: "Was ist ein Checkpoint?",
      a: "Ein Checkpoint ist ein Lesezeichen deines Canvas zu einem bestimmten Zeitpunkt — wie „Speichern unter“. Du erstellst ihn, wann du willst (z. B. „vor dem Test“, „nach Kapitel 3 fertig“) und springst jederzeit zurück: stellt den Canvas-Zustand auf diesen Punkt wieder her. Anders als Time Travel: der Checkpoint ist ein fester, von dir gewählter Punkt, Time Travel ist der durchgehende Scrubber über die gesamte Historie. Free enthält 3 Checkpoints pro Canvas, Plus unbegrenzt.",
    },
    {
      q: "Kann ich Time Travel + Audio↔Strich-Sync vor dem Pro-Upgrade testen?",
      a: "Ja. Jeder Free-User findet ein vorinstalliertes Demo-Canvas, bei dem du den Time-Travel-Scrubber öffnen und Striche antippen kannst, um das synchronisierte Audio abzuspielen — nur Lesemodus, auf dem Demo. Für eigene Aufnahmen brauchst du Pro.",
    },
    {
      q: "Gibt es eine Rückerstattungsregelung?",
      a: "30 Tage, ohne Fragen, sowohl für Monats- als auch Jahresabos. E-Mail an support@fluera.dev von der Adresse, mit der du dich registriert hast.",
    },
    {
      q: "Wie funktioniert die Studentenverifikation?",
      a: "Verifizierte .edu- oder akademische E-Mail. Für europäische Universitäten ohne .edu akzeptieren wir gescannten Studentenausweis, ISIC oder eine einmalige E-Mail vom Sekretariat.",
    },
    {
      q: "Rabatte für Forscher oder Non-Profits?",
      a: "Ja. Forschungslabore, Doktorandenprogramme und registrierte Non-Profits können sich unter /contact bewerben — wir gewähren typischerweise Pro zum Plus-Preis oder kostenlos im Austausch für strukturiertes Feedback.",
    },
    {
      q: "Welche Zahlungsmethoden akzeptiert ihr?",
      a: "Klarna, SOFORT, giropay, Kredit-/Debitkarten via Stripe, SEPA-Lastschrift, Apple Pay und Google Pay. Education-Kunden zahlen per Banküberweisung oder Bestellung.",
    },
    {
      q: "Team- oder Education-Pläne?",
      a: "Kommen in Phase 2 (geteilte Workspaces, Admin-Dashboard, SSO). Interesse? E-Mail an sales@fluera.dev — wir bauen die Roadmap mit unseren ersten Design-Partnern.",
    },
  ],
};

export default data;
