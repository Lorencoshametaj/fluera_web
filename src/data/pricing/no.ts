// 🇳🇴 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "for alltid",
      tagline:
        "Hele lerretet for å prøve metoden. 100 AI-kreditter per måned, alltid synlige.",
      features: [
        "Uendelig lerret, håndskriftsinntasting, fullstendig rendring-motor",
        "3 grunnpensler (blyant, fyllepenn, markør — flere i Plus)",
        "PNG-eksport",
        "100 AI-kreditter per måned — Atlas og Chat Fluera AI alltid gratis",
        "Socratic 3 økter/uke, Ghost Map 3 sammenligninger/uke, 1 Exam/uke",
        "Fog of War, FSRS (intervallrepetisjon)",
        "Cross-Zone Bridges — se forbindelsene mellom konsepter som systemet oppdager",
        "📍 3 Checkpoints per lerret — lagre et studieøyeblikk og hopp tilbake når du vil",
        "Forhåndsvisning av Time Travel + lyd↔strek-sync på demo-lerret (kun lesing)",
        "Local-first, helt offline (1 enhet)",
      ],
      cta: { label: "Start gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "per måned · €49 / år (spar €22 — 2 måneder gratis)",
      tagline:
        "Komplett individuell studie: cloud sync, AI uten ukentlige grenser, ubegrenset stemmeopptak.",
      features: [
        "Cloud sync 5 GB på 2 enheter — lerretene dine også på iPad og desktop",
        "Socratic, Ghost Map, Exam uten frekvensgrenser (ikke lenger 3/uke)",
        "5× flere AI-kreditter enn Free (500 per måned — ca. 60 Ghost Map eller 18 fullstendige Socratic-økter)",
        "Ubegrenset stemmeopptak",
        "Alle V1-pensler (6 totalt, flere på vei)",
        "Fullstendig eksport (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — lag og rediger dine egne konseptlenker",
        "📍 Ubegrensede checkpoints per lerret",
        "7 dagers gratis prøveperiode, kanseller når som helst",
      ],
      cta: { label: "Prøv Plus", href: "/beta" },
      highlighted: true,
      badge: "Anbefalt",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "per måned · €99 / år (spar €44 — 3,5 måneder gratis)",
      tagline:
        "Forsterket studie: Time Travel, lyd↔strek-sync, samarbeid i sanntid, søk på alle lerret.",
      features: [
        "⏱️ Time Travel-scrubber — se studien din i avspilling",
        "🎤 Lyd ↔ strek-sync — trykk på et strek og hør hva du sa i det øyeblikket",
        "🤝 Lerret-samarbeid i sanntid (CRDT) — inviter medstudenter med en lenke",
        "🔍 Proaktiv Background OCR — finn en formel du skrev for måneder siden, på alle lerret",
        "Cloud sync 50 GB, ubegrensede enheter",
        "Prioritert e-poststøtte",
        "2000 AI-kreditter per måned",
      ],
      cta: { label: "Bli Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Hvordan fungerer AI-kredittene?",
      a: "Hver AI-operasjon har en fast kredittkostnad: Ghost Map 8, Socratic 4 per stage, Exam 12 per spørsmål, Chat 1 per melding. Atlas (lerret-handlinger) og basis-Background-OCR er gratis. Du ser alltid resterende saldo i lerret-headeren — ingen skjulte rate limits, ingen overraskelser. Ubrukte kreditter rulles ikke over: planen fylles på hver 30. dag fra registreringsdatoen din (ikke den 1. i måneden — du betaler for 30 dager og får 30 dager).",
    },
    {
      q: "Hva skjer hvis jeg går tom for kreditter før reset?",
      a: "Vi varsler på forhånd — en mild advarsel når du har brukt 80% av syklusen. Når du når null, stopper AI-funksjoner med en klar melding (aldri stille blokkeringer). Vent på neste 30-dagers syklus, eller oppgrader.",
    },
    {
      q: "Hvorfor koster Pro dobbelt så mye for bare tre pilarer?",
      a: "Pro er ikke 'Plus med flere kreditter' — det er forsterket studie. Time Travel spiller av studieøkten din med lyd synkronisert per strek: trykk på en formel og hør forklaringen du ga deg selv. CRDT-samarbeid i sanntid lar deg jobbe samtidig med medstudenter eller kolleger på samme lerret. Notability, GoodNotes og Notion AI leverer ikke denne stacken — ikke på dette integrasjonsnivået.",
    },
    {
      q: "Hva skjer med lerretene mine hvis jeg sier opp Plus eller Pro?",
      a: "Alt forblir på enheten din (local-first), og de 3 grunnpenslene + PNG-eksport fortsetter å fungere i Free tier. Ekstra lerret blir skrivebeskyttet til du reaktiverer eller eksporterer. Ingenting slettes uten din eksplisitte handling.",
    },
    {
      q: "Hvorfor er det ingen gratis Pro-prøveperiode?",
      a: "Plus har 7 dagers gratis prøveperiode. Pro har ikke det: sanntidssamarbeid + Time Travel-scrubber er tilbakevendende funksjoner med skykostnader vi ikke kan gi bort. Vil du evaluere metoden, er Free hele lerretet — bruk det så lenge du vil.",
    },
    {
      q: "Hva er et Checkpoint?",
      a: "Et Checkpoint er et bokmerke av lerretet ditt i et bestemt øyeblikk — som \"lagre som\". Du oppretter ett når du vil (f.eks. \"før prøven\", \"etter å ha fullført kapittel 3\") og hopper tilbake når som helst: gjenoppretter lerretstilstanden på det punktet. Det er forskjellig fra Time Travel: et Checkpoint er et fast punkt du har valgt, Time Travel er den kontinuerlige scrubberen over hele historikken. Free inkluderer 3 Checkpoints per lerret, Plus ubegrenset.",
    },
    {
      q: "Kan jeg prøve Time Travel + lyd↔strek-sync før jeg oppgraderer til Pro?",
      a: "Ja. Hver Free-bruker får et forhåndslastet demo-lerret der du kan åpne Time Travel-scrubberen og trykke på strek for å høre den synkroniserte lyden — kun lesing, på demoen. For å ta opp dine egne studier trenger du Pro.",
    },
    {
      q: "Refusjonspolicy?",
      a: "30 dager, uten spørsmål, både månedlig og årlig. Send e-post til support@fluera.dev fra adressen du registrerte deg med.",
    },
    {
      q: "Hvordan fungerer studentverifisering?",
      a: "Verifisert .edu eller akademisk e-post. For europeiske universiteter uten .edu aksepterer vi skannet studentkort, ISIC eller en engangs-e-post fra fakultetskontoret.",
    },
    {
      q: "Rabatter for forskere eller non-profit?",
      a: "Ja. Forskningslaboratorier, doktorgradsprogrammer og registrerte non-profits kan søke på /contact — vanligvis gir vi Pro til Plus-pris eller gratis mot strukturert tilbakemelding.",
    },
    {
      q: "Hvilke betalingsmetoder aksepterer dere?",
      a: "Vipps, Klarna, kreditt-/debetkort via Stripe, SEPA, Apple Pay og Google Pay. Education-kunder kan betale via bankoverføring eller innkjøpsordre.",
    },
    {
      q: "Team- eller Education-planer?",
      a: "Kommer i fase 2 (delte workspaces, admin-dashbord, SSO). Interessert? Send e-post til sales@fluera.dev — vi bygger veikartet med våre første design partners.",
    },
  ],
};

export default data;
