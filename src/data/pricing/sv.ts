// 🇸🇪 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "för alltid",
      tagline:
        "Hela canvasen för att testa metoden. 100 AI-krediter per månad, alltid synliga.",
      features: [
        "Oändlig canvas, handskriftsinmatning, fullständig renderingsmotor",
        "3 baspenslar (penna, reservoarpenna, markör — fler i Plus)",
        "PNG-export",
        "100 AI-krediter per månad — Atlas och Chat Fluera AI alltid gratis",
        "Socratic 3 sessioner/v., Ghost Map 3 jämförelser/v., 1 Exam/v.",
        "Fog of War, FSRS (intervallrepetition)",
        "Cross-Zone Bridges — se kopplingarna mellan koncept som systemet upptäcker",
        "📍 3 Checkpoints per canvas — spara ett studiemoment och hoppa tillbaka när du vill",
        "Förhandsvisning av Time Travel + ljud↔streck-sync på demo-canvas (endast läsning)",
        "Local-first, helt offline (1 enhet)",
      ],
      cta: { label: "Börja gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per månad · €49 / år (spara €22 — 2 månader gratis)",
      tagline:
        "Komplett individuella studier: cloud sync, AI utan veckogränser, obegränsad röstinspelning.",
      features: [
        "Cloud sync 5 GB på 2 enheter — dina canvases även på iPad och dator",
        "Socratic, Ghost Map, Exam utan frekvensgränser (inte längre 3/vecka)",
        "5× fler AI-krediter än Free (500 per månad — ca 60 Ghost Map eller 18 fullständiga Socratic-sessioner)",
        "Obegränsad röstinspelning",
        "Alla V1-penslar (6 totalt, fler på väg)",
        "Fullständig export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — skapa och redigera dina egna konceptlänkar",
        "📍 Obegränsade checkpoints per canvas",
        "7 dagars gratis provperiod, säg upp när som helst",
      ],
      cta: { label: "Prova Plus", href: "/beta" },
      highlighted: true,
      badge: "Rekommenderas",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per månad · €99 / år (spara €44 — 3,5 månader gratis)",
      tagline:
        "Förstärkta studier: Time Travel, ljud↔streck-sync, realtidssamarbete, sökning i alla canvases.",
      features: [
        "⏱️ Time Travel-scrubber — se din studie i uppspelning",
        "🎤 Ljud ↔ streck-sync — tryck på ett streck och hör vad du sa i det ögonblicket",
        "🤝 Canvas-samarbete i realtid (CRDT) — bjud in kamrater med en länk",
        "🔍 Proaktiv Background OCR — hitta en formel du skrev för månader sedan, i alla canvases",
        "Cloud sync 50 GB, obegränsade enheter",
        "Prioriterad e-postsupport",
        "2000 AI-krediter per månad",
      ],
      cta: { label: "Bli Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hur fungerar AI-krediterna?",
      a: "Varje AI-operation har en fast kreditkostnad: Ghost Map 8, Socratic 4 per stage, Exam 12 per fråga, Chat 1 per meddelande. Atlas (canvas-åtgärder) och bas-Background-OCR är gratis. Du ser alltid kvarvarande saldo i canvas-headern — inga dolda rate limits, inga överraskningar. Oanvända krediter rullar inte över: planen fylls på var 30:e dag från ditt registreringsdatum (inte den 1:a varje månad — du betalar för 30 dagar och får 30 dagar).",
    },
    {
      q: "Vad händer om krediterna tar slut innan reset?",
      a: "Vi varnar i förväg — en mjuk varning när du använt 80% av cykeln. När du når noll stoppar AI-funktioner med ett tydligt meddelande (aldrig tysta blockeringar). Vänta på nästa 30-dagarscykel eller uppgradera.",
    },
    {
      q: "Varför kostar Pro dubbelt så mycket för bara tre pelare?",
      a: "Pro är inte 'Plus med fler krediter' — det är förstärkta studier. Time Travel spelar upp din studiesession med ljud synkat per streck: tryck på en formel och hör förklaringen du gav dig själv. CRDT-samarbete i realtid låter dig arbeta samtidigt med klasskamrater eller kollegor på samma canvas. Notability, GoodNotes och Notion AI levererar inte den här stacken — inte på den här integrationsnivån.",
    },
    {
      q: "Vad händer med mina canvases om jag säger upp Plus eller Pro?",
      a: "Allt stannar på din enhet (local-first) och de 3 baspenslarna + PNG-export fortsätter fungera i Free tier. Extra canvases blir skrivskyddade tills du återaktiverar eller exporterar. Inget raderas utan din uttryckliga åtgärd.",
    },
    {
      q: "Varför finns det ingen gratis Pro-provperiod?",
      a: "Plus har 7 dagars gratis provperiod. Pro har inte: realtidssamarbete + Time Travel-scrubber är återkommande funktioner med molnkostnader vi inte kan ge bort. Vill du utvärdera metoden är Free hela canvasen — använd den så länge du vill.",
    },
    {
      q: "Vad är en Checkpoint?",
      a: "En Checkpoint är ett bokmärke av din canvas vid ett specifikt ögonblick — typ \"spara som\". Du skapar en när du vill (t.ex. \"före provet\", \"efter att ha klarat kapitel 3\") och hoppar tillbaka när som helst: återställer canvasens tillstånd till den punkten. Det skiljer sig från Time Travel: en Checkpoint är en fast punkt du valt, Time Travel är den kontinuerliga scrubbern över hela historiken. Free innehåller 3 Checkpoints per canvas, Plus obegränsat.",
    },
    {
      q: "Kan jag prova Time Travel + ljud↔streck-sync innan jag uppgraderar till Pro?",
      a: "Ja. Varje Free-användare får en förladdad demo-canvas där du kan öppna Time Travel-scrubbern och trycka på streck för att höra det synkroniserade ljudet — endast läsning, på demon. För att spela in dina egna studier behöver du Pro.",
    },
    {
      q: "Återbetalningspolicy?",
      a: "30 dagar, inga frågor, både månadsvis och årsvis. Mejla support@fluera.dev från adressen du registrerade dig med.",
    },
    {
      q: "Hur fungerar studentverifiering?",
      a: "Verifierad .edu eller akademisk e-post. För europeiska universitet utan .edu accepterar vi inskannat studentkort, ISIC, eller en engångsmejl från fakultetens kansli.",
    },
    {
      q: "Rabatter för forskare eller icke-vinstdrivande?",
      a: "Ja. Forskningslabb, doktorandprogram och registrerade icke-vinstdrivande kan ansöka på /contact — vanligtvis ger vi Pro till Plus-pris eller gratis i utbyte mot strukturerad feedback.",
    },
    {
      q: "Vilka betalningsmetoder accepterar ni?",
      a: "Klarna, Swish, kredit-/betalkort via Stripe, SEPA, Apple Pay och Google Pay. Education-kunder kan betala via banköverföring eller inköpsorder.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fas 2 (delade workspaces, admin-dashboard, SSO). Intresserad? Mejla sales@fluera.dev — vi bygger roadmappen med våra första design partners.",
    },
  ],
};

export default data;
