#!/usr/bin/env node
/**
 * Smoke test for the built site. Run after `npm run build`.
 *
 * Verifies:
 *   - Key routes are emitted (EN root, IT root, pricing, feature pages)
 *   - Phase-1/2 content landed correctly (Exam Session pillar, Team tier)
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

function check(label, ok, detail = "") {
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
  "sitemap-index.xml",
];
for (const route of ROUTES) {
  check(`/${route}`, fileExists(route));
}

console.log("\nPhase 1/2 content");
{
  const home = read("index.html");
  check("homepage Step 11 = Exam Session", home.includes("Exam Session · Step 11"));
  check("homepage pillar Exam Session present", home.includes("Simulated exams from your own canvas"));
  check("homepage pricing snapshot has Team", home.includes(">Team<"));
}
{
  const pricing = read("pricing/index.html");
  check("pricing page has Team tier", pricing.includes(">Team<") && pricing.includes("€19.99"));
  check("pricing page has Pro €11.99", pricing.includes("€11.99"));
  check("pricing page has 4 tiers (Free/Plus/Pro/Team)",
    /Free/.test(pricing) && /Plus/.test(pricing) && /Pro/.test(pricing) && />Team</.test(pricing));
}
{
  const examEn = read("features/exam-session/index.html");
  check("EN /features/exam-session renders content",
    examEn.includes("Exam Session") && examEn.includes("Hypercorrection") && examEn.includes("Confidence picker") || examEn.includes("confidence picker"));
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
  check("KO /pricing has 4 Korean tiers + FAQ",
    pricingKo.includes(">Team<") && pricingKo.includes("€19.99") && pricingKo.includes("자주 묻는 질문"));
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
  check("HI /pricing has 4 Hindi tiers + FAQ",
    pricingHi.includes(">Team<") && pricingHi.includes("€19.99") && pricingHi.includes("अक्सर पूछे जाने वाले प्रश्न"));
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
  check("PL /pricing has 4 Polish tiers + FAQ",
    pricingPl.includes(">Team<") && pricingPl.includes("€19,99") && pricingPl.includes("Najczęściej zadawane pytania"));
}
{
  const homeAr = read("ar/index.html");
  check("AR homepage has Arabic body",
    homeAr.includes("فضاء دراسة") && homeAr.includes("Exam Session"));
  check("AR homepage uses RTL direction",
    homeAr.includes('dir="rtl"'));
  check("AR homepage uses Arabic nav",
    homeAr.includes(">العلم<") || homeAr.includes(">الميزات<"));
}
{
  const pricingAr = read("ar/pricing/index.html");
  check("AR /pricing has 4 Arabic tiers + FAQ",
    pricingAr.includes(">Team<") && pricingAr.includes("€19.99") && pricingAr.includes("الأسئلة الشائعة"));
}

console.log("\nEducation hidden (UI surface only)");
{
  const home = read("index.html");
  check("homepage nav has no Education link",
    !/href="\/education"[^>]*>\s*Education/i.test(home));
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

console.log("\nResult");
if (failures.length === 0) {
  console.log(`\n✓ All ${ROUTES.length + 17} smoke checks passed.`);
  process.exit(0);
} else {
  console.error(`\n✗ ${failures.length} smoke check(s) failed:`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
