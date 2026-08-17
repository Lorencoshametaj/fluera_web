#!/usr/bin/env node
/**
 * Smoke test for the built site. Run after `npm run build`.
 *
 * Verifies:
 *   - Key routes are emitted (EN root, IT root, pricing, feature pages)
 *   - V1 content landed correctly (Exam Session pillar, Free/Plus/Pro pricing)
 *   - Hidden Education tier is actually hidden everywhere visible
 *   - Sitemap-index exists (i18n routing healthy)
 *
 * Exits 0 on success, 1 on any failure (with a list of failures).
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");

if (!existsSync(DIST)) {
  console.error(`✗ dist/ not found at ${DIST}. Run \`npm run build\` first.`);
  process.exit(1);
}

const failures = [];
let checksRun = 0;

function check(label, ok, detail = "") {
  checksRun++;
  const icon = ok ? "✓" : "✗";
  const tail = detail ? ` (${detail})` : "";
  console.log(`  ${icon} ${label}${tail}`);
  if (!ok) failures.push(label);
}

function fileExists(rel) {
  return existsSync(resolve(DIST, rel));
}

function read(rel) {
  return readFileSync(resolve(DIST, rel), "utf8");
}

function hasPublicV1Tiers(html) {
  return ["Free", "Plus", "Pro"].every((tier) => html.includes(`>${tier}<`))
    && !html.includes(">Team<")
    && !html.includes(">Education<");
}

function hasFaqSurface(html) {
  return html.includes("<details") && html.includes("FAQPage");
}

console.log("Routes emitted");
const ROUTES = [
  "index.html",
  "pricing/index.html",
  "features/index.html",
  "features/exam-session/index.html",
  "features/atlas/index.html",
  "features/reflow/index.html",
  "features/cross-zone-bridges/index.html",
  "it/index.html",
  "it/pricing/index.html",
  "it/features/exam-session/index.html",
  "ja/features/atlas/index.html",
  "de/pricing/index.html",
  "ko/index.html",
  "ko/pricing/index.html",
  "ko/features/index.html",
  "hi/index.html",
  "hi/pricing/index.html",
  "hi/features/index.html",
  "pl/index.html",
  "pl/pricing/index.html",
  "pl/features/index.html",
  "ar/index.html",
  "ar/pricing/index.html",
  "ar/features/index.html",
  "catalogue/index.html",
  "it/catalogue/index.html",
  "ja/catalogue/index.html",
  "ar/catalogue/index.html",
  "sitemap-index.xml",
];
for (const route of ROUTES) {
  check(`/${route}`, fileExists(route));
}

console.log("\nV1 content");
{
  const home = read("index.html");
  check("homepage Step 11 = Exam Session", home.includes("Exam Session · Step 11"));
  check("homepage pillar Exam Session present", home.includes("A closed-book exam built from your own notes"));
  check("homepage pricing snapshot has 3 public tiers (Free/Plus/Pro)", hasPublicV1Tiers(home));
}
{
  const pricing = read("pricing/index.html");
  check("pricing page has Plus €5.99", pricing.includes("€5.99"));
  check("pricing page has Pro €11.99", pricing.includes("€11.99"));
  check("pricing page has 3 public tiers (Free/Plus/Pro)", hasPublicV1Tiers(pricing));
}
{
  const examEn = read("features/exam-session/index.html");
  check("EN /features/exam-session renders content",
    examEn.includes("Exam Session") && examEn.includes("Hypercorrection") && (examEn.includes("Confidence picker") || examEn.includes("confidence picker")));
}
{
  const examIt = read("it/features/exam-session/index.html");
  check("IT /features/exam-session has IT body",
    examIt.includes("Exam Session") && examIt.includes("Cosa risolve"));
}
{
  const homeKo = read("ko/index.html");
  check("KO homepage has Korean body",
    homeKo.includes("학습 공간") && homeKo.includes("Exam Session"));
  check("KO homepage uses Korean nav",
    homeKo.includes(">과학<") || homeKo.includes(">기능<"));
}
{
  const pricingKo = read("ko/pricing/index.html");
  check("KO /pricing has 3 public tiers + FAQ",
    hasPublicV1Tiers(pricingKo) && hasFaqSurface(pricingKo));
}
{
  const homeHi = read("hi/index.html");
  check("HI homepage has Hindi body",
    homeHi.includes("अध्ययन स्थान") && homeHi.includes("Exam Session"));
  check("HI homepage uses Hindi nav",
    homeHi.includes(">विज्ञान<") || homeHi.includes(">विशेषताएं<"));
}
{
  const pricingHi = read("hi/pricing/index.html");
  check("HI /pricing has 3 public tiers + FAQ",
    hasPublicV1Tiers(pricingHi) && hasFaqSurface(pricingHi));
}
{
  const homePl = read("pl/index.html");
  check("PL homepage has Polish body",
    homePl.includes("Przestrzeń do nauki") && homePl.includes("Exam Session"));
  check("PL homepage uses Polish nav",
    homePl.includes(">Nauka<") || homePl.includes(">Funkcje<"));
}
{
  const pricingPl = read("pl/pricing/index.html");
  check("PL /pricing has 3 public tiers + FAQ",
    hasPublicV1Tiers(pricingPl) && hasFaqSurface(pricingPl));
}
{
  const homeAr = read("ar/index.html");
  check("AR homepage has Arabic body",
    homeAr.includes("دراستك كاملة. لوحة واحدة.") && homeAr.includes("Exam Session"));
  check("AR homepage uses RTL direction",
    homeAr.includes('dir="rtl"'));
  check("AR homepage uses Arabic nav",
    homeAr.includes(">العلم<") || homeAr.includes(">الميزات<"));
}
{
  const pricingAr = read("ar/pricing/index.html");
  check("AR /pricing has 3 public tiers + FAQ",
    hasPublicV1Tiers(pricingAr) && hasFaqSurface(pricingAr));
}

console.log("\nCatalogue");
{
  const mk = read("catalogue/index.html");
  check("/catalogue renders the hero", mk.includes("Someone already worked this chapter out"));
  check("/catalogue is linked from the nav", read("index.html").includes('href="/catalogue/"'));
  // The page deliberately carries no catalog/usage numbers: the catalog is new and
  // any count would be a vanity claim. Guard the promise so it can't silently rot.
  check("/catalogue quotes no retention percentage",
    !/\+\s*\d+\s*%\s*(retention|retenzione)/i.test(mk));
  check("/catalogue claims no template/install/creator count",
    !/\b\d[\d,.]*\+?\s+(templates|installs|creators|students|downloads)\b/i.test(mk));
  // The marketplace creator terms are still an unreviewed draft — the page must
  // not link to them or to a content policy that isn't published.
  check("/catalogue links to no unpublished legal doc",
    !/marketplace-terms|content-policy|creator-terms/i.test(mk));
}
{
  // The section mark (the returning-page arc) is the Catalogue's identity, and
  // it must appear on the Catalogue and nowhere else — a mark that leaks onto
  // other pages stops being a section mark.
  const MARK = 'class="catalogue-mark';
  check("/catalogue carries the section mark", read("catalogue/index.html").includes(MARK));
  check("the mark stays off other pages",
    !read("index.html").includes(MARK) && !read("pricing/index.html").includes(MARK));
}
{
  const mkIt = read("it/catalogue/index.html");
  check("IT /catalogue is a real translation", !mkIt.includes("Someone already worked this chapter out"));
  check("IT /catalogue declares lang=it", mkIt.includes('lang="it"'));
}
{
  const mkAr = read("ar/catalogue/index.html");
  check("AR /catalogue renders RTL", mkAr.includes('dir="rtl"'));
}

console.log("\nEducation hidden (UI surface only)");
{
  const home = read("index.html");
  check("homepage nav has no Education link",
    !/href="\/education\/?"[^>]*>\s*Education/i.test(home));
  check("homepage pricing snapshot has no Education card",
    !/<h3[^>]*>\s*Education\s*<\/h3>/.test(home));
}
{
  const pricing = read("pricing/index.html");
  check("/pricing has no Education tier",
    !pricing.includes(">Education<"));
  check("/pricing has no Enterprise CTA",
    !/Teaching a course\?|Running a department\?/i.test(pricing));
}

console.log("\nEvery localized homepage is the premium home");
{
  // The signature badge is short and unique per locale. A locale that silently
  // falls back to English copy — or loses its translation — turns this red.
  const HOME_BADGE = {
    "": "INK → ATLAS → RECALL",
    it: "INCHIOSTRO → ATLAS → RECUPERO",
    es: "TINTA → ATLAS → RECUPERACIÓN",
    "pt-br": "TINTA → ATLAS → RECUPERAÇÃO",
    fr: "ENCRE → ATLAS → RAPPEL",
    de: "TINTE → ATLAS → ABRUF",
    ja: "インク → ATLAS → 想起",
    ko: "잉크 → ATLAS → 인출",
    hi: "स्याही → ATLAS → पुनःस्मरण",
    ar: "حبر ← ATLAS ← استرجاع",
    pl: "ATRAMENT → ATLAS → PRZYWOŁANIE",
    nl: "INKT → ATLAS → OPHALEN",
    sv: "BLÄCK → ATLAS → ÅTERKALLNING",
    da: "BLÆK → ATLAS → GENKALDELSE",
    no: "BLEKK → ATLAS → GJENHENTING",
    fi: "MUSTE → ATLAS → PALAUTUS",
  };

  // Presence, not absence: each marker must be *there*, so an empty or truncated
  // page fails instead of sliding through.
  const REQUIRED = [
    ["signature flow", "signature-flow"],
    ["proof rail", "proof-rail"],
    ["single-canvas visual", 'data-media-placeholder="home-canvas-ink-loop"'],
    ["Ghost Map pillar", 'data-media-placeholder="home-ghost-loop"'],
    ["Socratic pillar", 'data-media-placeholder="home-socratic-loop"'],
    ["Fog of War pillar", 'data-media-placeholder="home-fog-loop"'],
    ["Exam Session pillar", 'data-media-placeholder="home-exam-loop"'],
    ["use-case timeline", 'id="use-case"'],
    ["platform rail", "platform-rail"],
    ["pricing preview", "pricing-preview-grid"],
  ];

  for (const [prefix, badge] of Object.entries(HOME_BADGE)) {
    const route = prefix ? `${prefix}/index.html` : "index.html";
    const label = prefix || "en";
    const html = read(route);

    const missing = REQUIRED.filter(([, marker]) => !html.includes(marker)).map(([n]) => n);
    check(`/${label} homepage carries every premium section`, missing.length === 0, missing.join(", "));

    // Four timeline cards and four signature steps — a partial render fails here.
    check(`/${label} homepage has 4 use-case steps`,
      (html.match(/timeline-card/g) || []).length === 4);
    check(`/${label} homepage has 4 signature steps`,
      (html.match(/signature-step/g) || []).length === 4);

    check(`/${label} homepage copy is localized`, html.includes(badge));

    // The retired pre-redesign grammar must not come back.
    check(`/${label} homepage carries no retired glow-orb chrome`, !html.includes("glow-orb"));
  }
}

console.log("\nResult");
if (failures.length === 0) {
  console.log(`\n✓ All ${checksRun} smoke checks passed.`);
  process.exit(0);
} else {
  console.error(`\n✗ ${failures.length} smoke check(s) failed:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
