// ============================================================================
// 🔗 PUBLIC GHOST MAP VIEWER — Vercel Serverless Function
//
// Renders a server-side HTML page for `fluera.dev/c/{hash}` URLs.
//
// Why a Vercel function (not an Astro page):
//   • The Astro site builds in static mode (`output: "static"`) and the
//     ~200 marketing pages should stay statically pre-rendered. Switching to
//     `output: "server"` to add ONE dynamic route would force adapter-managed
//     SSR for all of them.
//   • Vercel always serves `api/*.ts` as Serverless functions even when a
//     framework (Astro) owns the rest of the build — clean separation.
//
// Routing: `vercel.json` rewrites `/c/:hash` → `/api/c?hash=:hash`.
//
// Why HTML rendered server-side (not client-side fetch):
//   • Twitter / Discord / Slack OG crawlers do NOT execute JavaScript.
//     `og:image`, `og:title`, etc. must be in the HTML the crawler receives.
// ============================================================================

import type { VercelRequest, VercelResponse } from "@vercel/node";

const BUCKET = "public-ghost-shares";
const TABLE = "public_ghost_shares";

interface ShareRow {
  hash: string;
  json_path: string;
  png_path: string;
  og_path: string;
  view_count: number;
  revoked_at: string | null;
}

interface GhostNode {
  id: string;
  concept: string;
  x: number;
  y: number;
  w: number;
  h: number;
  status: "missing" | "weak" | "correct" | "wrongConnection";
  explanation?: string;
  isHypercorrection?: boolean;
  isBelowZPD?: boolean;
}

interface GhostConnection {
  id: string;
  sourceId: string;
  targetId: string;
  label?: string;
  isCrossDomain?: boolean;
}

interface GhostMapPublicShare {
  schemaVersion: number;
  generatedAt: string;
  language?: string;
  summary?: string;
  stats: { missing: number; weak: number; correct: number; connections: number };
  nodes: GhostNode[];
  connections: GhostConnection[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const hash = String(req.query.hash ?? "").trim();
  if (!/^[A-Za-z0-9]{8,16}$/.test(hash)) {
    return sendHtml(res, 404, renderNotFoundHtml());
  }

  const supabaseUrl = process.env.PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
  const supabaseKey =
    process.env.PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";

  if (!supabaseUrl || !supabaseKey) {
    return sendHtml(res, 500, renderErrorHtml("Server misconfigured."));
  }

  // 1. Resolve the hash to a Storage path via PostgREST. RLS on the table
  //    enforces revoked_at IS NULL for anon — a revoked share returns []
  //    even though the row still exists.
  const row = await fetchShareRow(supabaseUrl, supabaseKey, hash);
  if (!row) {
    return sendHtml(res, 410, renderRevokedHtml());
  }

  // 2. Fetch the JSON payload from public Storage.
  const dto = await fetchJson(supabaseUrl, row.json_path);
  if (!dto) {
    return sendHtml(res, 500, renderErrorHtml("Couldn't load share content."));
  }

  // 3. Bump the view counter — fire and forget; failures don't block render.
  void incrementView(supabaseUrl, supabaseKey, hash);

  // 4. Render the viewer HTML.
  const ogImageUrl = publicStorageUrl(supabaseUrl, row.og_path);
  const html = renderViewerHtml(dto, hash, ogImageUrl);
  return sendHtml(res, 200, html);
}

// ── Supabase helpers ────────────────────────────────────────────────────────

async function fetchShareRow(
  supabaseUrl: string,
  anonKey: string,
  hash: string
): Promise<ShareRow | null> {
  const url =
    `${supabaseUrl}/rest/v1/${TABLE}` +
    `?hash=eq.${encodeURIComponent(hash)}` +
    `&select=hash,json_path,png_path,og_path,view_count,revoked_at` +
    `&limit=1`;
  const resp = await fetch(url, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      Accept: "application/json",
    },
    // Bust any edge cache between us and the row state.
    cache: "no-store",
  });
  if (!resp.ok) return null;
  const rows = (await resp.json()) as ShareRow[];
  if (!rows.length) return null;
  // RLS already filters revoked rows, but belt-and-braces.
  if (rows[0].revoked_at) return null;
  return rows[0];
}

async function fetchJson(
  supabaseUrl: string,
  path: string
): Promise<GhostMapPublicShare | null> {
  const url = publicStorageUrl(supabaseUrl, path);
  const resp = await fetch(url, { cache: "no-store" });
  if (!resp.ok) return null;
  try {
    return (await resp.json()) as GhostMapPublicShare;
  } catch {
    return null;
  }
}

async function incrementView(
  supabaseUrl: string,
  anonKey: string,
  hash: string
): Promise<void> {
  try {
    await fetch(`${supabaseUrl}/rest/v1/rpc/increment_share_view`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_hash: hash }),
    });
  } catch {
    /* best-effort */
  }
}

function publicStorageUrl(supabaseUrl: string, path: string): string {
  return `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${path}`;
}

// ── HTML rendering ──────────────────────────────────────────────────────────

function sendHtml(res: VercelResponse, status: number, html: string) {
  res.status(status);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // Cache for 60s at the edge; bump view-count happens per-request anyway.
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=60");
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

function renderViewerHtml(
  dto: GhostMapPublicShare,
  hash: string,
  ogImageUrl: string
): string {
  const title = "Ghost Map · Fluera";
  const description =
    `${dto.stats.correct} compresi · ${dto.stats.missing} mancanti · ` +
    `${dto.stats.connections} legami`;
  const lang = (dto.language ?? "en").slice(0, 2);
  const url = `https://fluera.dev/c/${hash}`;
  const svg = renderSvg(dto);
  const summaryBlock = dto.summary
    ? `<p class="summary">${escapeHtml(dto.summary)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="${escapeHtml(lang)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${escapeHtml(url)}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${escapeHtml(url)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />

  <!-- Universal Links / App Links hint (handled by AASA / assetlinks). -->
  <meta name="apple-itunes-app" content="app-id=fluera, app-argument=${escapeHtml(url)}" />

  <style>
    :root { color-scheme: light dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #fafafa;
      color: #111;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    @media (prefers-color-scheme: dark) {
      body { background: #0d0d0e; color: #e6e6e6; }
      header { border-color: rgba(255,255,255,0.08) !important; }
      .summary { background: rgba(255,255,255,0.04) !important; }
      .badge { background: rgba(255,255,255,0.08) !important; color: #ccc !important; }
    }
    header {
      padding: 16px 24px;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    header .brand {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.2px;
      color: #4B6CFB;
      text-decoration: none;
    }
    header .stats {
      font-size: 13px;
      color: #666;
    }
    header .cta {
      background: #4B6CFB;
      color: #fff;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
    }
    main {
      flex: 1;
      padding: 24px;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    .canvas-wrap {
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      overflow: auto;
    }
    @media (prefers-color-scheme: dark) {
      .canvas-wrap { background: #18181a; box-shadow: none; }
    }
    .canvas-wrap svg {
      width: 100%;
      height: auto;
      display: block;
    }
    .summary {
      margin-top: 20px;
      padding: 16px 20px;
      background: rgba(75, 108, 251, 0.06);
      border-left: 3px solid #4B6CFB;
      border-radius: 6px;
      line-height: 1.5;
      font-size: 15px;
    }
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      background: #f0f0f0;
      color: #555;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.3px;
      margin-right: 6px;
    }
    footer {
      padding: 16px 24px;
      text-align: center;
      font-size: 13px;
      color: #888;
    }
    footer a { color: #4B6CFB; text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <a class="brand" href="https://fluera.dev">Fluera</a>
    <div class="stats">
      <span class="badge">${dto.stats.correct}</span>compresi
      <span class="badge" style="margin-left:8px">${dto.stats.missing}</span>mancanti
      <span class="badge" style="margin-left:8px">${dto.stats.connections}</span>legami
    </div>
    <a class="cta" href="https://fluera.dev/download">Prova Fluera</a>
  </header>
  <main>
    <div class="canvas-wrap">${svg}</div>
    ${summaryBlock}
  </main>
  <footer>
    Generato con <a href="https://fluera.dev">Fluera</a> — la mappa concetti del tuo apprendimento.
  </footer>
</body>
</html>`;
}

/// Renders the Ghost Map as a self-contained inline SVG. Bounds are
/// computed from the nodes; connections look up source/target positions
/// from the same node set (clusters are not part of the shared data).
function renderSvg(dto: GhostMapPublicShare): string {
  if (!dto.nodes.length) {
    return `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg"></svg>`;
  }

  // Compute bounds with a 60px logical pad.
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (const n of dto.nodes) {
    const left = n.x - n.w / 2;
    const top = n.y - n.h / 2;
    const right = n.x + n.w / 2;
    const bottom = n.y + n.h / 2;
    if (left < minX) minX = left;
    if (top < minY) minY = top;
    if (right > maxX) maxX = right;
    if (bottom > maxY) maxY = bottom;
  }
  minX -= 60;
  minY -= 60;
  maxX += 60;
  maxY += 60;
  const w = Math.max(maxX - minX, 1);
  const h = Math.max(maxY - minY, 1);

  // Position lookup for connection endpoints.
  const pos: Record<string, { x: number; y: number }> = {};
  for (const n of dto.nodes) pos[n.id] = { x: n.x, y: n.y };

  const lines: string[] = [];

  // Connections first (rendered behind nodes).
  for (const c of dto.connections) {
    const a = pos[c.sourceId];
    const b = pos[c.targetId];
    if (!a || !b) continue;
    const stroke = c.isCrossDomain ? "#9C27B0" : "#9aa0a6";
    const sw = c.isCrossDomain ? 2.5 : 1.5;
    lines.push(
      `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" ` +
        `stroke="${stroke}" stroke-width="${sw}" ` +
        `stroke-dasharray="6 4" opacity="0.7" />`
    );
  }

  // Nodes.
  for (const n of dto.nodes) {
    const colors = colorForStatus(n.status, n.isHypercorrection ?? false);
    const rx = n.w / 2;
    const ry = n.h / 2;
    lines.push(
      `<g>` +
        `<rect x="${n.x - rx}" y="${n.y - ry}" width="${n.w}" height="${n.h}" ` +
        `rx="12" ry="12" ` +
        `fill="${colors.fill}" stroke="${colors.stroke}" stroke-width="2" ` +
        (n.status === "missing"
          ? `stroke-dasharray="6 4" `
          : "") +
        ` />` +
        renderNodeLabel(n) +
        `</g>`
    );
  }

  return (
    `<svg viewBox="${minX} ${minY} ${w} ${h}" ` +
    `xmlns="http://www.w3.org/2000/svg" ` +
    `font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" ` +
    `font-size="14">` +
    lines.join("") +
    `</svg>`
  );
}

function renderNodeLabel(n: GhostNode): string {
  const text = escapeHtml(n.concept);
  // Single-line label centred. The font-size is in user units; the viewBox
  // scaling makes it render proportionally. Long concepts get an ellipsis
  // via SVG textLength + lengthAdjust as a soft cap.
  const maxLen = Math.max(n.w * 0.85, 40);
  return (
    `<text x="${n.x}" y="${n.y + 5}" ` +
    `text-anchor="middle" fill="#222" font-weight="600" ` +
    `textLength="${Math.min(text.length * 7, maxLen)}" ` +
    `lengthAdjust="spacingAndGlyphs">${text}</text>`
  );
}

function colorForStatus(
  status: GhostNode["status"],
  isHypercorrection: boolean
): { fill: string; stroke: string } {
  if (isHypercorrection) {
    return { fill: "rgba(255,23,68,0.08)", stroke: "#FF1744" };
  }
  switch (status) {
    case "missing":
      return { fill: "rgba(255,107,53,0.08)", stroke: "#FF6B35" };
    case "weak":
      return { fill: "rgba(255,193,7,0.10)", stroke: "#FFC107" };
    case "correct":
      return { fill: "rgba(76,175,80,0.10)", stroke: "#4CAF50" };
    case "wrongConnection":
      return { fill: "rgba(255,193,7,0.10)", stroke: "#FFC107" };
  }
}

function renderNotFoundHtml(): string {
  return renderStatusHtml(
    "404 — Link non trovato",
    "Questo link non esiste. Forse l'hash è stato copiato male."
  );
}

function renderRevokedHtml(): string {
  return renderStatusHtml(
    "410 — Link revocato",
    "Chi ha condiviso questa Ghost Map ha revocato il link. Il contenuto non è più disponibile."
  );
}

function renderErrorHtml(message: string): string {
  return renderStatusHtml("500 — Errore temporaneo", message);
}

function renderStatusHtml(headline: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(headline)} · Fluera</title>
  <meta name="robots" content="noindex" />
  <style>
    body {
      margin: 0; min-height: 100vh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      background: #fafafa; color: #111;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
      padding: 24px; text-align: center;
    }
    @media (prefers-color-scheme: dark) {
      body { background: #0d0d0e; color: #e6e6e6; }
    }
    h1 { font-size: 22px; margin: 0 0 12px; }
    p { font-size: 15px; max-width: 480px; line-height: 1.5; color: #666; }
    a {
      margin-top: 24px;
      display: inline-block;
      background: #4B6CFB; color: #fff;
      padding: 10px 18px; border-radius: 8px;
      text-decoration: none; font-weight: 600;
    }
  </style>
</head>
<body>
  <h1>${escapeHtml(headline)}</h1>
  <p>${escapeHtml(body)}</p>
  <a href="https://fluera.dev">Vai a Fluera</a>
</body>
</html>`;
}
