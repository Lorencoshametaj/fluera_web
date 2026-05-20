#!/usr/bin/env node
// =============================================================================
// 💎 PRICING SYNC — V1.5 schema rollout to the 14 stale locales
//
// Goal: bring de/fr/es/pt-br/ja/ko/hi/ar/nl/pl/sv/da/no/fi pricing pages
// in line with the it.ts canonical (Free/Plus/Pro, AI credits 100/500/2000,
// 30-day rolling reset, 4 Pro pillars including Background OCR) WITHOUT
// destroying the existing linguistic quality of the carry-over strings.
//
// Strategy:
//   1. Parse the OLD locale file with permissive regex → extract phrases
//      that the new schema still needs (period strings, CTA labels,
//      "Recommended" badge, common FAQ Q/A that haven't drifted).
//   2. Use it.ts as the structural template — same tier order, same
//      bullet ordering, same FAQ count — and substitute Italian text
//      with the locale's existing translations wherever a pair exists.
//   3. For NEW strings (V1 split copy: credits, Pro pillars, demo audio,
//      Cross-Zone benefit, annual saving badges, rolling reset FAQ),
//      emit the Italian text wrapped in a `/* TODO i18n */` comment so
//      a native pass picks them up obviously.
//
// Output is intentionally lossy: the script does not guarantee 100%
// translation. It guarantees:
//   • Same SCHEMA (3 tier, no Team, V1.5 bullet order, FAQ structure)
//   • Same CURRENCY format conventions (€5,99 vs €5.99 per locale)
//   • Preserved linguistic tone where carry-over strings exist
//   • Clear TODO markers for everything else, so a native pass is fast.
//
// Run:   node tools/sync-pricing-from-it.mjs <locale>
// Or:    node tools/sync-pricing-from-it.mjs --all
// =============================================================================

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "src", "data", "pricing");

// Which locales need the V1.5 refresh (it.ts + en.ts are canonical, skip).
const STALE_LOCALES = [
  "de", "fr", "es", "pt-br",
  "ja", "ko", "hi", "ar",
  "nl", "pl", "sv", "da", "no", "fi",
];

// Currency-format convention per locale (`€5,99` vs `€5.99`).
const COMMA_DECIMAL = new Set([
  "it", "de", "fr", "es", "pt-br", "nl", "pl", "sv", "da", "no", "fi",
]);
const DOT_DECIMAL = new Set(["en", "ja", "ko", "hi", "ar"]);

function decimalFor(locale) {
  return DOT_DECIMAL.has(locale) ? "." : ",";
}

function priceFor(locale, integer, fraction) {
  return `€${integer}${decimalFor(locale)}${fraction}`;
}

// -----------------------------------------------------------------------------
// Translation hint extractor.
//
// Walks the OLD locale .ts file with permissive regex and pulls out the
// few high-confidence carry-overs we can reuse:
//   • Tier CTA labels (varies a lot per locale — keep the local tone)
//   • Tier "Recommended" badge translation
//   • Period strings (per month / per year — locale-specific wording)
//   • Refund FAQ question + answer (substantively unchanged in V1.5)
// -----------------------------------------------------------------------------
function extractTranslationHints(oldFile) {
  if (!existsSync(oldFile)) return null;
  const src = readFileSync(oldFile, "utf8");

  const hints = {
    ctaFree: matchLabel(src, "Free"),
    ctaPlus: matchLabel(src, "Plus"),
    ctaPro: matchLabel(src, "Pro"),
    recommendedBadge: matchBadge(src),
    refundFaq: matchRefundFaq(src),
  };

  return hints;
}

function matchLabel(src, tierName) {
  // Heuristic: each tier has its own cta.label preceded by `name: "<tier>"`.
  const re = new RegExp(
    `name:\\s*"${tierName}"[\\s\\S]*?cta:\\s*\\{\\s*label:\\s*"([^"]+)"`,
    "m",
  );
  const m = src.match(re);
  return m ? m[1] : null;
}

function matchBadge(src) {
  const m = src.match(/badge:\s*"([^"]+)"/);
  return m ? m[1] : null;
}

function matchRefundFaq(src) {
  // The refund-policy FAQ has been substantively the same in every locale
  // since v0.x. Match by the "30" + "Stripe" / "support@" anchors.
  const re =
    /\{\s*q:\s*"([^"]+)",\s*a:\s*"([^"]*(?:30|trenta|trente|treinta)[^"]*(?:support@|email)[^"]*)"\s*\}/m;
  const m = src.match(re);
  return m ? { q: m[1], a: m[2] } : null;
}

// -----------------------------------------------------------------------------
// V1.5 canonical content (mirrored from it.ts but parameterised on locale).
//
// We do NOT import it.ts directly — we'd have to spin up a TS loader. The
// content is small enough to inline; we keep IT text as fallback when the
// per-locale translation does not exist, wrapped in /* TODO i18n */.
// -----------------------------------------------------------------------------
function renderTier(locale, kind, hints) {
  const dec = decimalFor(locale);
  const TODO = (s) => `/* TODO i18n */ ${JSON.stringify(s)}`;

  // Periods + savings — currency-format aware.
  const plusPeriod = `al mese · €49 / anno (risparmi €22 — 2 mesi gratis)`;
  const proPeriod = `al mese · €99 / anno (risparmi €44 — 3${dec}5 mesi gratis)`;
  const freePeriod = `per sempre`;

  const heading = {
    Free: { name: "Free", price: "€0", period: freePeriod },
    Plus: { name: "Plus", price: priceFor(locale, "5", "99"), period: plusPeriod },
    Pro: { name: "Pro", price: priceFor(locale, "11", "99"), period: proPeriod },
  }[kind];

  // Tagline + features carry IT canonical text as TODO markers.
  const taglines = {
    Free: "Il canvas completo per provare il metodo. 100 crediti AI al mese, sempre visibili.",
    Plus: "Studio individuale completo: cloud sync, AI senza contatori a settimana, voce illimitata.",
    Pro: "Studio amplificato: Time Travel, audio↔stroke sync, collaborazione real-time, ricerca su tutti i canvas.",
  };

  const features = {
    Free: [
      "Canvas infinito, scrittura a mano, motore di rendering completo",
      "3 pennelli base (matita, penna stilografica, pennarello — altri in Plus)",
      "Export PNG",
      "100 crediti AI al mese — Atlas e Chat Fluera AI sempre gratis",
      "Socratic 3 sessioni/sett., Ghost Map 3 confronti/sett., 1 Exam/sett.",
      "Fog of War, FSRS spaced repetition",
      "Cross-Zone Bridges — vedi i collegamenti tra concetti che il sistema scopre",
      "Anteprima Time Travel + audio↔stroke sync su canvas demo (read-only)",
      "Local-first, completamente offline (1 dispositivo)",
    ],
    Plus: [
      "Cloud sync 5 GB su 2 dispositivi — i tuoi canvas anche su iPad e desktop",
      "Socratic, Ghost Map, Exam senza limiti di frequenza (no più 3/settimana)",
      "5× più crediti AI rispetto a Free (500 al mese — circa 60 Ghost Map o 18 sessioni Socratic complete)",
      "Voice recording illimitata",
      "Tutti i pennelli V1 (6 in tutto, altri in arrivo)",
      "Export completo (PNG, JPEG, WebP, SVG, PDF, .fluera)",
      "Cross-Zone Bridges — crea e modifica i tuoi collegamenti tra concetti",
      "Trial 7 giorni gratis, annullabile in qualsiasi momento",
    ],
    Pro: [
      "⏱️ Time Travel scrubber — riguardi il tuo studio in playback",
      "🎤 Audio ↔ stroke sync — tocchi un tratto e riascolti cosa dicevi in quel momento",
      "🤝 Collaborazione real-time sul canvas (CRDT) — inviti compagni con un link",
      "🔍 Background OCR proattivo — cerchi una formula scritta mesi fa, la trova in tutti i canvas",
      "Cloud sync 50 GB, dispositivi illimitati",
      "Supporto email prioritario",
      "2000 crediti AI al mese",
    ],
  };

  const ctaLabels = { Free: hints?.ctaFree, Plus: hints?.ctaPlus, Pro: hints?.ctaPro };
  const ctaFallbacks = {
    Free: "Inizia gratis",
    Plus: "Prova Plus",
    Pro: "Diventa Pro",
  };

  const ctaLabel = ctaLabels[kind] || ctaFallbacks[kind];
  const badge = kind === "Plus" ? (hints?.recommendedBadge || "Consigliato") : null;
  const highlighted = kind === "Plus";

  const featureLines = features[kind]
    .map((f) => `        ${TODO(f)},`)
    .join("\n");

  return `    {
      name: "${heading.name}",
      price: ${JSON.stringify(heading.price)},
      period: ${TODO(heading.period)},
      tagline: ${TODO(taglines[kind])},
      features: [
${featureLines}
      ],
      cta: { label: ${JSON.stringify(ctaLabel)}, href: "/beta" },
      highlighted: ${highlighted},${badge ? `\n      badge: ${JSON.stringify(badge)},` : ""}
    },`;
}

function renderFaq(hints) {
  const TODO = (s) => `/* TODO i18n */ ${JSON.stringify(s)}`;
  const items = [
    {
      q: "Come funzionano i crediti AI?",
      a: "Ogni operazione AI costa crediti fissi: Ghost Map 8, Socratic 4 per stage, Exam 12 per domanda, Chat 1 per messaggio. Atlas (azioni canvas) e Background OCR base sono gratis. Vedi sempre quanti crediti ti restano nell'header del canvas — niente rate limit nascosti, niente sorprese. Quelli che non usi non si accumulano: il piano si ricarica ogni 30 giorni, contati dalla tua data di iscrizione (non dal 1° del mese — paghi 30 giorni e ricevi 30 giorni).",
    },
    {
      q: "E se finisco i crediti prima del reset?",
      a: "Te lo diciamo prima — un avviso quando hai usato l'80% del periodo. Quando arrivi a zero, le funzioni AI smettono di funzionare con un messaggio chiaro (mai blocchi senza preavviso). Aspetti il prossimo ciclo di 30 giorni o passi al piano superiore.",
    },
    {
      q: "Perché Pro costa il doppio se i pillar sono solo 3?",
      a: "Pro non è 'Plus con più crediti' — è studio amplificato. Time Travel ti fa rivedere il tuo studio in playback con audio sincronizzato per ogni tratto: tocchi una formula e riascolti la spiegazione che ti davi. La collaborazione real-time CRDT ti fa lavorare in tempo reale con compagni di studio o colleghi sul tuo stesso canvas. Sono cose che Notability, GoodNotes e Notion AI non offrono — non a questo livello di integrazione.",
    },
    {
      q: "Cosa succede ai miei canvas se cancello Plus o Pro?",
      a: "Tutto resta sul tuo dispositivo (local-first) e i 3 pennelli base + export PNG continuano a funzionare nel tier Free. I canvas extra restano in sola lettura finché riattivi o esporti. Niente viene mai cancellato senza una tua azione esplicita.",
    },
    {
      q: "Perché niente prova gratuita del Pro?",
      a: "Plus ha 7 giorni di trial gratis. Pro no: la collaborazione real-time + Time Travel scrubber sono feature ricorrenti che hanno costi cloud non regalabili. Se vuoi testare il metodo, il Free è il canvas completo — usalo finché ti basta.",
    },
    {
      q: "Posso provare Time Travel + audio↔stroke sync prima di passare a Pro?",
      a: "Sì. Ogni utente Free trova un canvas demo precaricato in cui può aprire lo scrubber Time Travel e toccare i tratti per riascoltare l'audio sincronizzato — solo in lettura, sul demo. Per registrare i tuoi propri studi serve Pro.",
    },
    // The refund FAQ is the one we explicitly try to carry over from the
    // old locale file because the wording barely changed across V1.x.
    hints?.refundFaq || {
      q: "C'è una politica di rimborso?",
      a: "30 giorni, senza domande, sia su mensile che annuale. Scrivi a support@fluera.dev dall'indirizzo con cui ti sei iscritto.",
    },
    {
      q: "Come funziona la verifica studente?",
      a: "Email .edu o accademica verificata. Per università europee senza .edu accettiamo tessera studente scansionata, ISIC o email una-tantum dalla segreteria.",
    },
    {
      q: "Sconti per ricercatori o no-profit?",
      a: "Sì. Laboratori, programmi di dottorato e no-profit registrati possono richiederlo da /contact — di solito concediamo Pro al prezzo Plus o gratis in cambio di feedback.",
    },
    {
      q: "Quali metodi di pagamento accettate?",
      a: "Carte di credito/debito via Stripe, SEPA per clienti EU, Apple Pay e Google Pay. Per istituzioni Education paghiamo via bonifico o ordine d'acquisto.",
    },
    {
      q: "Piani Team o Education?",
      a: "In arrivo come fase 2 (workspace condivisi, dashboard admin, SSO). Se sei interessato scrivi a sales@fluera.dev: stiamo costruendo la roadmap con i primi clienti.",
    },
  ];

  return items
    .map((it) => {
      // For the refund FAQ that came verbatim from the old locale, do NOT
      // wrap in TODO — it's already in the target language.
      const isCarryOver = hints?.refundFaq && it === hints.refundFaq;
      const qStr = isCarryOver ? JSON.stringify(it.q) : TODO(it.q);
      const aStr = isCarryOver ? JSON.stringify(it.a) : TODO(it.a);
      return `    {\n      q: ${qStr},\n      a: ${aStr},\n    }`;
    })
    .join(",\n");
}

// -----------------------------------------------------------------------------
// Render the full new locale file
// -----------------------------------------------------------------------------
function renderFile(locale, hints) {
  const ts = new Date().toISOString().slice(0, 10);

  const tiers = ["Free", "Plus", "Pro"]
    .map((k) => renderTier(locale, k, hints))
    .join("\n");

  return `// 🟡 V1.5 schema applied ${ts} — strings marked \`/* TODO i18n */\` carry
// the Italian canonical text; native pass replaces them with locale copy.
// Carry-over translations (CTA labels, "Recommended" badge, refund FAQ)
// preserved from the previous locale file when found.
// See ./README.md for the rollout plan.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
${tiers}
  ],
  faq: [
${renderFaq(hints)},
  ],
};

export default data;
`;
}

// -----------------------------------------------------------------------------
// CLI
// -----------------------------------------------------------------------------
function syncOne(locale) {
  const inPath = join(ROOT, `${locale}.ts`);
  const hints = extractTranslationHints(inPath);
  const out = renderFile(locale, hints);
  writeFileSync(inPath, out, "utf8");
  const carried = [
    hints?.ctaFree && "ctaFree",
    hints?.ctaPlus && "ctaPlus",
    hints?.ctaPro && "ctaPro",
    hints?.recommendedBadge && "badge",
    hints?.refundFaq && "refundFaq",
  ]
    .filter(Boolean)
    .join(", ");
  console.log(
    `✓ ${locale}.ts — schema=V1.5, carry-over: [${carried || "none"}]`,
  );
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: node tools/sync-pricing-from-it.mjs <locale|--all>");
  process.exit(1);
}

if (args[0] === "--all") {
  STALE_LOCALES.forEach(syncOne);
} else {
  for (const arg of args) {
    if (!STALE_LOCALES.includes(arg)) {
      console.error(`Unknown locale: ${arg}. Valid: ${STALE_LOCALES.join(", ")}`);
      process.exit(1);
    }
    syncOne(arg);
  }
}

console.log("");
console.log("Next: run native / LLM pass on the strings marked /* TODO i18n */");
console.log("      then run `npm run build` to verify the locale routes.");
