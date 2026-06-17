// ============================================================================
// 🔗 REFERRAL / INSTALL REDIRECT — Vercel Serverless Function
//
// Handles `fluera.dev/i/{code}` URLs baked (as a QR + text) into every shared
// time-lapse end-card (M3, design: docs/viral_share_growth_design.md).
//
// Job: UA-sniff the scanner's device and 302-redirect to the correct store,
// carrying the referral [code] forward as far as each platform allows.
//
// Attribution reality (be honest — see design doc §4):
//   • ANDROID has a REAL deferred channel: the Play Store `&referrer=` param is
//     retrievable post-install via the Play Install Referrer API. We pass
//     `code=<code>` so the freshly-installed app can call attribute_install().
//   • iOS has NO reliable referrer through the App Store. We can only redirect;
//     the code is carried in the URL for the QR-direct / typed-code paths and
//     (best-effort) a landing bounce. Treat iOS deferred coverage as ~0 without
//     a fingerprint service or a third-party SDK (Branch/AppsFlyer).
//   • DESKTOP / unknown → the landing page with `?i=<code>` so a "open on your
//     phone" CTA can re-encode the code into a QR.
//
// Routing: `vercel.json` rewrites `/i/:code` → `/api/i?code=:code`.
// ============================================================================

import type { VercelRequest, VercelResponse } from "@vercel/node";

const ANDROID_PACKAGE = process.env.ANDROID_PACKAGE ?? "com.fluera.fluera";
// Numeric App Store id (e.g. "1234567890"). Unset until the app is published →
// iOS falls back to the landing page so we never 302 to a wrong/empty store id.
const APPLE_APP_ID = process.env.APPLE_APP_ID ?? "";
const LANDING = "https://fluera.dev";

const CODE_RE = /^[A-Za-z0-9]{4,16}$/;

export default function handler(req: VercelRequest, res: VercelResponse): void {
  const code = String(req.query.code ?? "").trim();
  const ua = String(req.headers["user-agent"] ?? "");

  // Invalid/empty code → just send people to the marketing site (no 404 dead-end).
  if (!CODE_RE.test(code)) {
    return redirect(res, LANDING);
  }

  // Fire-and-forget click log for funnel visibility (never blocks the redirect).
  void logClick(code, classifyPlatform(ua));

  const platform = classifyPlatform(ua);
  switch (platform) {
    case "android": {
      // Play Install Referrer carries `code=<code>` to the installed app.
      const referrer = encodeURIComponent(`code=${code}`);
      return redirect(
        res,
        `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${referrer}`
      );
    }
    case "ios": {
      if (APPLE_APP_ID) {
        // No reliable referrer on iOS; the code rides the QR/typed path. We add
        // it as a fragment so a landing bounce (if any) can still read it.
        return redirect(res, `https://apps.apple.com/app/id${APPLE_APP_ID}#i=${code}`);
      }
      return redirect(res, `${LANDING}/?i=${code}`);
    }
    default:
      return redirect(res, `${LANDING}/?i=${code}`);
  }
}

function classifyPlatform(ua: string): "ios" | "android" | "other" {
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  // iPadOS 13+ reports as desktop Safari; treat Mac-touch as iOS-ish only if
  // clearly mobile. Keep it simple: desktop → landing.
  return "other";
}

function redirect(res: VercelResponse, url: string): void {
  // 302 (not 301): the redirect target is dynamic per UA and must not be cached.
  res.statusCode = 302;
  res.setHeader("Location", url);
  res.setHeader("Cache-Control", "no-store");
  res.end();
}

// Best-effort click telemetry into the existing telemetry_events table
// (migration 005). Never throws into the request path.
async function logClick(code: string, platform: string): Promise<void> {
  try {
    const supabaseUrl =
      process.env.PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
    const supabaseKey =
      process.env.PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";
    if (!supabaseUrl || !supabaseKey) return;
    await fetch(`${supabaseUrl}/rest/v1/telemetry_events`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        event_type: "referral_click",
        properties: { code, platform },
      }),
    });
  } catch {
    // swallow — click logging must never affect the redirect
  }
}
