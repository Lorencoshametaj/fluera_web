// Bulk patch: add waitlist position counter + share/blog buttons to /beta
// success state across all 16 locale variants. Plus JS to fetch the count.
//
// Idempotent: skips files that already have the waitlist-position element.
//
// Run: node tools/patch-beta-success-extras.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const FILES = execSync(
  `find src/pages -name 'beta.astro' -type f`,
  { encoding: "utf8" },
).trim().split("\n");

// ── HTML enhancement: insert position + buttons BEFORE the closing </div>
// of #status-success. Anchor on `</p>\n              </div>` which is the
// end of the existing 2-paragraph block (consistent across locales).
//
// We detect the success-block close by looking for `</div>\n\n              <div id="status-already"`
// which separates success from already-signed blocks.
const HTML_ANCHOR = `</div>

              <div id="status-already"`;

const HTML_INSERT = `<p id="waitlist-position" class="hidden text-xs text-emerald-200/80 mt-2">
                  You're <span class="font-mono font-medium text-paper-100">#<span id="waitlist-position-num">…</span></span> in line.
                </p>
                <div class="mt-4 pt-3 border-t border-emerald-400/15 flex flex-wrap gap-2">
                  <a
                    href={\`https://twitter.com/intent/tweet?text=\${encodeURIComponent("Just joined the Fluera waitlist — a study app for people who take cognitive science seriously. ")}&url=\${encodeURIComponent("https://fluera.dev/beta")}\`}
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-accent-glow/40 text-xs text-paper-200 hover:text-paper-50 transition-colors"
                  >
                    Share Fluera ↗
                  </a>
                  <a
                    href="/blog"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 hover:border-accent-glow/40 text-xs text-paper-200 hover:text-paper-50 transition-colors"
                  >
                    Read the blog →
                  </a>
                </div>
              </div>

              <div id="status-already"`;

// ── JS enhancement: add waitlist count fetch after the Loops sync call.
const JS_ANCHOR = `fetch("https://app.loops.so/api/newsletter-form/cmpb3hw2h06r50jyq0qx9jujs", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: loopsBody.toString(),
          }).catch((loopsErr) => {
            console.warn("Loops sync failed (non-critical):", loopsErr);
          });`;

const JS_INSERT = `${JS_ANCHOR}

          // Fetch waitlist count for "you're #X in line" display.
          // Fire-and-forget: if the RPC fails (e.g. not deployed yet), we silently
          // skip the position display rather than breaking the success state.
          fetch(\`\${supabaseUrl}/rest/v1/rpc/get_waitlist_count\`, {
            method: "POST",
            headers: {
              apikey: supabaseKey,
              Authorization: \`Bearer \${supabaseKey}\`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: "{}",
          })
            .then((r) => (r.ok ? r.json() : null))
            .then((count) => {
              if (typeof count === "number" && count > 0) {
                const numEl = document.getElementById("waitlist-position-num");
                const posEl = document.getElementById("waitlist-position");
                if (numEl && posEl) {
                  numEl.textContent = String(count);
                  posEl.classList.remove("hidden");
                }
              }
            })
            .catch((countErr) => {
              console.warn("Waitlist count fetch failed (non-critical):", countErr);
            });`;

let patched = 0;
let skipped = 0;
const errors = [];

for (const file of FILES) {
  let src = readFileSync(file, "utf8");

  // Idempotent: already patched if has waitlist-position element.
  if (src.includes('id="waitlist-position"')) {
    skipped++;
    continue;
  }

  // Apply HTML enhancement.
  if (!src.includes(HTML_ANCHOR)) {
    errors.push(`HTML anchor missing: ${file}`);
    continue;
  }
  src = src.replace(HTML_ANCHOR, HTML_INSERT);

  // Apply JS enhancement.
  if (!src.includes(JS_ANCHOR)) {
    errors.push(`JS anchor missing: ${file}`);
    continue;
  }
  src = src.replace(JS_ANCHOR, JS_INSERT);

  writeFileSync(file, src, "utf8");
  patched++;
}

console.log(`Patched: ${patched}`);
console.log(`Skipped: ${skipped}`);
if (errors.length) {
  console.log(`Errors: ${errors.length}`);
  errors.forEach((e) => console.log(`  - ${e}`));
}
