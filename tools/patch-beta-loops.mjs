// Bulk patch: add Loops sync to all 16 beta.astro files.
// Idempotent: skips files that already have the Loops integration.
//
// Run: node tools/patch-beta-loops.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const FILES = execSync(
  `find src/pages -name 'beta.astro' -type f`,
  { encoding: "utf8" },
).trim().split("\n");

const ANCHOR = `okBox.classList.remove("hidden");
          form.reset();
          applyRoleVisibility();`;

const REPLACEMENT = `okBox.classList.remove("hidden");
          form.reset();
          applyRoleVisibility();

          // Fire-and-forget sync to Loops (welcome email + nurture sequence).
          // Failure here is non-critical — Supabase already has the data.
          const fullName = (formData.get("name") || "").trim();
          const firstName = fullName.split(/\\s+/)[0] || "";
          const loopsBody = new URLSearchParams({ email: payload.p_email });
          if (firstName) loopsBody.set("firstName", firstName);
          loopsBody.set("userGroup", "beta-waitlist");
          loopsBody.set("source", payload.p_referral_source || "fluera.dev");
          fetch("https://app.loops.so/api/newsletter-form/cmpb3hw2h06r50jyq0qx9jujs", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: loopsBody.toString(),
          }).catch((loopsErr) => {
            console.warn("Loops sync failed (non-critical):", loopsErr);
          });`;

let patched = 0;
let skipped = 0;
let errors = [];

for (const file of FILES) {
  let src = readFileSync(file, "utf8");

  if (src.includes("loops.so/api/newsletter-form")) {
    skipped++;
    continue;
  }

  if (!src.includes(ANCHOR)) {
    errors.push(`No anchor in: ${file}`);
    continue;
  }

  src = src.replace(ANCHOR, REPLACEMENT);
  writeFileSync(file, src, "utf8");
  patched++;
}

console.log(`Patched: ${patched}`);
console.log(`Skipped: ${skipped}`);
if (errors.length) {
  console.log(`Errors: ${errors.length}`);
  errors.forEach((e) => console.log(`  - ${e}`));
}
