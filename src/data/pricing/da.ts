// 🇩🇰 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "for altid",
      tagline:
        "Hele canvasset for at prøve metoden. 100 AI-kreditter pr. måned, altid synlige.",
      features: [
        "Uendeligt canvas, håndskriftsinput, fuld renderings-motor",
        "3 grundpenslar (blyant, fyldepen, marker — flere i Plus)",
        "PNG-eksport",
        "100 AI-kreditter pr. måned — Atlas og Chat Fluera AI altid gratis",
        "Socratic 3 sessioner/uge, Ghost Map 3 sammenligninger/uge, 1 Exam/uge",
        "Fog of War, FSRS (interval-gentagelse)",
        "Cross-Zone Bridges — se forbindelserne mellem koncepter, systemet opdager",
        "📍 3 Checkpoints pr. canvas — gem et studiemoment og hop tilbage når du vil",
        "Forhåndsvisning af Time Travel + lyd↔strøg-sync på demo-canvas (kun læsning)",
        "Local-first, helt offline (1 enhed)",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "pr. måned · €49 / år (spar €22 — 2 måneder gratis)",
      tagline:
        "Komplette individuelle studier: cloud sync, AI uden ugentlige grænser, ubegrænset stemmeoptagelse.",
      features: [
        "Cloud sync 5 GB på 2 enheder — dine canvases også på iPad og desktop",
        "Socratic, Ghost Map, Exam uden frekvensgrænser (ikke længere 3/uge)",
        "5× flere AI-kreditter end Free (500 pr. måned — ca. 60 Ghost Map eller 18 fulde Socratic-sessioner)",
        "Ubegrænset stemmeoptagelse",
        "Alle V1-pensler (6 i alt, flere på vej)",
        "Fuld eksport (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — opret og rediger dine egne konceptlinks",
        "📍 Ubegrænsede checkpoints pr. canvas",
        "7 dages gratis prøveperiode, opsig når som helst",
      ],
      cta: { label: "Prøv Plus", href: "/beta" },
      highlighted: true,
      badge: "Anbefalet",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "pr. måned · €99 / år (spar €44 — 3,5 måneder gratis)",
      tagline:
        "Forstærkede studier: Time Travel, lyd↔strøg-sync, samarbejde i realtid, søgning på alle canvases.",
      features: [
        "⏱️ Time Travel-scrubber — se dit studie i afspilning",
        "🎤 Lyd ↔ strøg-sync — tryk på et strøg og hør, hvad du sagde i det øjeblik",
        "🤝 Canvas-samarbejde i realtid (CRDT) — inviter kammerater med et link",
        "🔍 Proaktiv Background OCR — find en formel, du skrev for måneder siden, på alle canvases",
        "Cloud sync 50 GB, ubegrænsede enheder",
        "Prioriteret e-mail-support",
        "2000 AI-kreditter pr. måned",
      ],
      cta: { label: "Bliv Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hvordan fungerer AI-kreditterne?",
      a: "Hver AI-operation har en fast kreditomkostning: Ghost Map 8, Socratic 4 pr. stage, Exam 12 pr. spørgsmål, Chat 1 pr. besked. Atlas (canvas-handlinger) og basis-Background-OCR er gratis. Du ser altid den resterende saldo i canvas-headeren — ingen skjulte rate limits, ingen overraskelser. Ubrugte kreditter ruller ikke over: planen genopfyldes hver 30. dag fra din tilmeldingsdato (ikke den 1. i måneden — du betaler for 30 dage og får 30 dage).",
    },
    {
      q: "Hvad sker der, hvis jeg løber tør for kreditter før reset?",
      a: "Vi advarer på forhånd — en blød advarsel, når du har brugt 80% af cyklussen. Når du når nul, stopper AI-funktioner med en klar besked (aldrig tavse blokeringer). Vent på næste 30-dages cyklus, eller opgrader.",
    },
    {
      q: "Hvorfor koster Pro dobbelt så meget for kun tre søjler?",
      a: "Pro er ikke 'Plus med flere kreditter' — det er forstærkede studier. Time Travel afspiller din studiesession med lyd synkroniseret pr. strøg: tryk på en formel og hør forklaringen, du gav dig selv. CRDT-samarbejde i realtid lader dig arbejde samtidig med klassekammerater eller kolleger på samme canvas. Notability, GoodNotes og Notion AI leverer ikke denne stack — ikke på dette integrationsniveau.",
    },
    {
      q: "Hvad sker der med mine canvases, hvis jeg opsiger Plus eller Pro?",
      a: "Alt forbliver på din enhed (local-first), og de 3 grundpenslar + PNG-eksport fortsætter med at fungere i Free tier. Ekstra canvases bliver skrivebeskyttede, indtil du genaktiverer eller eksporterer. Intet slettes uden din eksplicitte handling.",
    },
    {
      q: "Hvorfor er der ingen gratis Pro-prøveperiode?",
      a: "Plus har 7 dages gratis prøveperiode. Pro har ikke: realtids-samarbejde + Time Travel-scrubber er tilbagevendende funktioner med cloud-omkostninger, vi ikke kan give væk. Vil du evaluere metoden, er Free hele canvasset — brug det så længe du vil.",
    },
    {
      q: "Hvad er et Checkpoint?",
      a: "Et Checkpoint er et bogmærke af dit canvas på et præcist tidspunkt — ligesom \"gem som\". Du opretter det, når du vil (f.eks. \"før testen\", \"efter kapitel 3 er færdigt\") og hopper tilbage når som helst: gendanner canvas-tilstanden på det punkt. Det er anderledes end Time Travel: et Checkpoint er et fast punkt, du har valgt, Time Travel er den kontinuerlige scrubber over hele historikken. Free indeholder 3 Checkpoints pr. canvas, Plus ubegrænset.",
    },
    {
      q: "Kan jeg prøve Time Travel + lyd↔strøg-sync, før jeg opgraderer til Pro?",
      a: "Ja. Hver Free-bruger får et forudindlæst demo-canvas, hvor du kan åbne Time Travel-scrubberen og trykke på strøg for at høre den synkroniserede lyd — kun læsning, på demoen. For at optage dine egne studier skal du have Pro.",
    },
    {
      q: "Refunderingspolitik?",
      a: "30 dage, ingen spørgsmål, både månedlig og årlig. Skriv til support@fluera.dev fra den adresse, du tilmeldte dig med.",
    },
    {
      q: "Hvordan fungerer studieverifikation?",
      a: "Verificeret .edu eller akademisk e-mail. For europæiske universiteter uden .edu accepterer vi scannet studiekort, ISIC eller en engangsmail fra fakultetets sekretariat.",
    },
    {
      q: "Rabatter til forskere eller non-profits?",
      a: "Ja. Forskningslaboratorier, ph.d.-programmer og registrerede non-profits kan ansøge på /contact — vi giver typisk Pro til Plus-pris eller gratis mod struktureret feedback.",
    },
    {
      q: "Hvilke betalingsmetoder accepterer I?",
      a: "MobilePay, Klarna, kredit-/debetkort via Stripe, SEPA, Apple Pay og Google Pay. Education-kunder kan betale via bankoverførsel eller indkøbsordre.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fase 2 (delte workspaces, admin-dashboard, SSO). Interesseret? Skriv til sales@fluera.dev — vi bygger roadmappen med vores første design partners.",
    },
  ],
};

export default data;
