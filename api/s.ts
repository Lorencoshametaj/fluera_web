// ============================================================================
// 🌱🔗 PUBLIC STUDY-TEMPLATE SHARE — Vercel Serverless Function
//
// Renders a server-side HTML page for `fluera.dev/s/{hash}` — the share link for
// a marketplace FlueraSeed study template. The viral hook: when the link is
// pasted into iMessage / WhatsApp / Discord / Twitter, the unfurled preview is
// the actual HANDWRITTEN NOTES (the og:image we baked at publish time), not a
// generic card.
//
// Why a Vercel function (not an Astro page): the site builds static; OG crawlers
// do NOT run JS, so the per-template og:* tags MUST be in the server HTML.
// Routing: vercel.json rewrites `/s/:hash` → `/api/s?hash=:hash`.
//
// Data: the anon RPC `get_study_seed` (migration 049) — it walks the supersede
// chain to the live head AND redacts author_id (we only ever read author_code).
// Image: the public og_path (1200×630) → thumb_path → a site default.
// ============================================================================

import type { VercelRequest, VercelResponse } from "@vercel/node";

const BUCKET = "public-study-seeds";
const SITE = "https://fluera.dev";
const ANDROID_PACKAGE = process.env.ANDROID_PACKAGE ?? "com.fluera.fluera";
const APPLE_APP_ID = process.env.APPLE_APP_ID ?? ""; // unset until published
const OG_FALLBACK = `${SITE}/og/default.png`; // site default OG asset
const HASH_RE = /^[A-Za-z0-9]{8,64}$/;

interface SeedRow {
  hash: string;
  author_code: string | null;
  title: string | null;
  description: string | null;
  topic: string | null;
  discipline: string | null;
  category: string | null;
  concept_count: number | null;
  thumb_path: string | null;
  og_path: string | null;
  is_official: boolean | null;
  install_count: number | null;
  rating_sum: number | null;
  rating_count: number | null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const hash = String(req.query.hash ?? "").trim();
  if (!HASH_RE.test(hash)) {
    return sendHtml(res, 404, renderStatusHtml("Template non trovato", "Il link non è valido o è scaduto."));
  }

  const supabaseUrl = process.env.PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
  const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";
  if (!supabaseUrl || !supabaseKey) {
    return sendHtml(res, 500, renderStatusHtml("Errore", "Server non configurato."));
  }

  const row = await fetchTemplate(supabaseUrl, supabaseKey, hash);
  if (!row) {
    // approved+live only (RPC filter) — a removed/unknown template lands here.
    return sendHtml(res, 410, renderStatusHtml("Non più disponibile", "Questo template è stato rimosso o non è più pubblico."));
  }

  const ogImageUrl = row.og_path
    ? publicStorageUrl(supabaseUrl, row.og_path)
    : row.thumb_path
      ? publicStorageUrl(supabaseUrl, row.thumb_path)
      : OG_FALLBACK;

  const html = renderTemplateHtml(row, hash, ogImageUrl, classifyPlatform(String(req.headers["user-agent"] ?? "")));
  return sendHtml(res, 200, html);
}

// ── Supabase ────────────────────────────────────────────────────────────────

async function fetchTemplate(supabaseUrl: string, anonKey: string, hash: string): Promise<SeedRow | null> {
  try {
    const resp = await fetch(`${supabaseUrl}/rest/v1/rpc/get_study_seed`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ p_hash: hash }),
    });
    if (!resp.ok) return null;
    const rows = (await resp.json()) as SeedRow[];
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  } catch {
    return null;
  }
}

function publicStorageUrl(supabaseUrl: string, path: string): string {
  return `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${path}`;
}

// ── Rendering ───────────────────────────────────────────────────────────────

function renderTemplateHtml(row: SeedRow, hash: string, ogImageUrl: string, platform: "ios" | "android" | "other"): string {
  const url = `${SITE}/s/${hash}`;
  const title = (row.title ?? "Template di studio").trim() || "Template di studio";
  const author = row.is_official ? "Fluera" : row.author_code ? `@${row.author_code.slice(0, 8)}` : "Anonimo";
  const concepts = Math.max(0, row.concept_count ?? 0);
  const installs = Math.max(0, row.install_count ?? 0);
  const rating = (row.rating_count ?? 0) > 0 ? (row.rating_sum ?? 0) / (row.rating_count ?? 1) : 0;
  const description =
    (row.description ?? "").trim() ||
    `Un template di studio${row.discipline ? ` di ${row.discipline}` : ""} con ${concepts} concett${concepts === 1 ? "o" : "i"}. Installalo in Fluera e parte un ripasso programmato — il trapianto cognitivo nel tuo modello di studio.`;

  const playUrl = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(`s=${hash}`)}`;
  const iosUrl = APPLE_APP_ID ? `https://apps.apple.com/app/id${APPLE_APP_ID}#s=${hash}` : SITE;
  // Primary CTA points at THIS same https URL (fluera.dev/s/{hash}): when the
  // app is installed, the OS intercepts it as a Universal Link / verified App
  // Link (AASA "/s/*" + assetlinks handle_all_urls + manifest autoVerify) and
  // opens Fluera, which installs the seed in-app. When NOT installed, the OS
  // re-loads this page in the browser — and the store buttons below are the
  // fallback. On desktop ("other") there is nothing to intercept, so the
  // primary CTA stays a store/discover link.
  const primaryHref = platform === "other" ? SITE : url;
  const primaryLabel = platform === "other" ? "Scopri Fluera" : "Apri in Fluera";

  const chips = [
    row.discipline ? chip(row.discipline) : "",
    concepts > 0 ? chip(`${concepts} concetti`) : "",
    installs > 0 ? chip(`${formatCount(installs)} installazioni`) : "",
    rating > 0 ? chip(`★ ${rating.toFixed(1)}`) : "",
  ].join("");

  return `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} · Fluera</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(url)}" />

  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Fluera" />
  <meta property="og:url" content="${escapeHtml(url)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escapeHtml(title)}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />

  <meta name="apple-itunes-app" content="app-id=${escapeHtml(APPLE_APP_ID || "fluera")}, app-argument=${escapeHtml(url)}" />
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body { margin:0; background:#161b24; color:#f4f3ee; font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }
    .wrap { max-width:680px; margin:0 auto; padding:24px 20px 64px; }
    .brand { display:flex; align-items:center; gap:9px; font-weight:500; color:#d6d3c4; margin-bottom:20px; }
    .brand .mark { font-family:"Source Serif 4","Source Serif Pro",Georgia,serif; font-size:21px; font-weight:600; line-height:1; }
    .hero { width:100%; aspect-ratio:1200/630; border-radius:16px; overflow:hidden; background:#1c222d; border:1px solid #ffffff14; }
    .hero img { width:100%; height:100%; object-fit:cover; display:block; }
    h1 { font-family:"Source Serif 4","Source Serif Pro",Georgia,serif; font-size:28px; line-height:1.2; letter-spacing:-0.015em; margin:22px 0 6px; }
    .by { color:#7c8cac; font-size:14px; margin:0 0 14px; }
    .chips { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 18px; }
    .chip { font-size:13px; color:#d6d3c4; background:#ffffff0f; border:1px solid #ffffff14; border-radius:999px; padding:5px 11px; }
    p.desc { color:#d6d3c4; }
    .cta { display:flex; flex-direction:column; gap:10px; margin-top:26px; }
    .btn { display:flex; align-items:center; justify-content:center; gap:8px; text-decoration:none; font-weight:600; padding:15px 18px; border-radius:14px; }
    .btn.primary { background:#2563eb; color:#fff; }
    .btn.ghost { background:#ffffff0f; color:#f4f4f5; border:1px solid #ffffff1f; }
    .note { color:#7c8cac; font-size:13px; text-align:center; margin-top:18px; }
    a { color:inherit; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="brand"><span class="mark">§</span>Fluera · Catalogo</div>
    <div class="hero"><img src="${escapeHtml(ogImageUrl)}" alt="${escapeHtml(title)}" loading="eager" /></div>
    <h1>${escapeHtml(title)}</h1>
    <p class="by">di ${escapeHtml(author)}</p>
    ${chips ? `<div class="chips">${chips}</div>` : ""}
    <p class="desc">${escapeHtml(description)}</p>
    <div class="cta">
      <a class="btn primary" href="${escapeHtml(primaryHref)}">${escapeHtml(primaryLabel)}</a>
      <a class="btn ghost" href="${escapeHtml(playUrl)}">Google Play</a>
      ${APPLE_APP_ID ? `<a class="btn ghost" href="${escapeHtml(iosUrl)}">App Store</a>` : ""}
    </div>
    <p class="note">Installando in Fluera, i concetti di questo template vengono trapiantati nel tuo modello di studio — con un ripasso programmato per domani.</p>
  </div>
</body>
</html>`;
}

function chip(label: string): string {
  return `<span class="chip">${escapeHtml(label)}</span>`;
}

function renderStatusHtml(headline: string, body: string): string {
  return `<!doctype html>
<html lang="it"><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>${escapeHtml(headline)} · Fluera</title>
<style>body{margin:0;background:#0a0a0b;color:#f4f4f5;font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center}div{max-width:420px;padding:24px}h1{font-size:22px;margin:0 0 8px}p{color:#a1a1aa;margin:0 0 20px}a{color:#818cf8}</style>
</head><body><div>
<h1>${escapeHtml(headline)}</h1>
<p>${escapeHtml(body)}</p>
<a href="${SITE}">Vai a Fluera →</a>
</div></body></html>`;
}

// ── Platform + utils ──────────────────────────────────────────────────────────

function classifyPlatform(ua: string): "ios" | "android" | "other" {
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "other";
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function sendHtml(res: VercelResponse, status: number, html: string) {
  res.status(status);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=120");
  res.send(html);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
