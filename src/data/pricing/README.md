# Pricing copy — V1.5 schema rollout status

**Last canonical refresh:** 2026-05-15 (V1.5 user pass — bullet reorder, Background OCR promoted to Pro pillar #4, voice unlimited on Plus, 30-day rolling reset, annual saving badges, student strip above fold).

## Canonical sources

- **`it.ts`** — primary, hand-tuned. Lives the V1 split decisions directly:
  - 3 tier (Free, Plus, Pro) — Team / Edu phase-2, NOT in public V1 listing.
  - Unified AI credits (100 / 500 / 2000 per month, 30-day rolling reset).
  - 4 Pro pillars: ⏱️ Time Travel scrubber, 🎤 audio ↔ stroke sync, 🤝 real-time collab CRDT, 🔍 background OCR proattivo.
  - Transparency-first FAQ (credits, how they work, what happens when they run out).
- **`en.ts`** — Tier 1 #1 audience mirror of `it.ts`. Hand-tuned to match.

## Rollout status per locale

| Locale | Tier | Status | Notes |
|---|---|---|---|
| `it.ts` | T1 | 🟢 canonical | hand-tuned |
| `en.ts` | T1 | 🟢 canonical | hand-tuned |
| `de.ts` | T1 | 🟢 native pass | full V1.5 + Klarna/SOFORT/giropay in payments FAQ |
| `fr.ts` | T1 | 🟢 native pass | full V1.5 |
| `es.ts` | T1 | 🟢 native pass | full V1.5 + Bizum in payments FAQ |
| `pt-br.ts` | T1 | 🟢 native pass | full V1.5 + PIX/Boleto in payments FAQ |
| `ja.ts` | T1 | 🟢 native pass | full V1.5 + Konbini/JCB/銀行振込 in payments FAQ |
| `ko.ts` | T1 | 🟢 native pass | full V1.5 + KakaoPay/Naver Pay/KCP in payments FAQ |
| `hi.ts` | T1 | 🟢 native pass | full V1.5 + UPI/RuPay/Paytm in payments FAQ |
| `ar.ts` | T1 | 🟢 native pass | full V1.5 + mada/STC Pay/fawry — RTL layout review pending |
| `nl.ts` | T2 | 🟢 native pass | full V1.5 + iDEAL primario in payments FAQ |
| `pl.ts` | T2 | 🟢 native pass | full V1.5 + Przelewy24/BLIK in payments FAQ |
| `sv.ts` | T2 | 🟢 native pass | full V1.5 + Klarna/Swish in payments FAQ |
| `da.ts` | T2 | 🟢 native pass | full V1.5 + MobilePay/Klarna in payments FAQ |
| `no.ts` | T2 | 🟢 native pass | full V1.5 + Vipps/Klarna in payments FAQ |
| `fi.ts` | T2 | 🟢 native pass | full V1.5 + MobilePay/Klarna/verkkopankki in payments FAQ |

🟢 = ready for production · 🟡 = builds clean but copy is Italian fallback (none left as of 2026-05-15).

**Status:** all 16 locales completed native pass on 2026-05-15. Remaining work is **native-speaker validation** (review for natural phrasing, idiom checks) and **AR RTL layout review** for the comparison table + chip emoji alignment in the rendered `dir="rtl"` page.

## Rollout workflow

### Step 1 — Schema sync (mechanical, done 2026-05-15)

Script: `tools/sync-pricing-from-it.mjs`. Reads each old locale file, extracts the high-confidence carry-over strings (CTA labels, "Recommended" badge, refund FAQ when wording matches), templatises against the V1.5 schema, and emits a new file with everything else marked `/* TODO i18n */`.

```bash
node tools/sync-pricing-from-it.mjs --all          # all 14 stale locales
node tools/sync-pricing-from-it.mjs de fr es       # specific list
```

### Step 2 — Native pass (per-locale, takes ~30-45 min each)

For each 🟡 scaffold file:

1. Open the file. Every `/* TODO i18n */` marker precedes an Italian source string.
2. Translate the string into the target locale, keeping:
   - The same currency convention (decimal separator, currency placement).
   - The marketing-pillar tone (transparency-first, anti-incumbent comparison).
   - The Pro pillar emojis ⏱️ 🎤 🤝 🔍 — they're visual anchors, not text to translate.
3. Strip the `/* TODO i18n */` comment as you confirm each string.
4. Native-speaker validation before merging to the production branch (memory `feedback_socratic_all_16_langs_goal`).
5. Update this README's status row from 🟡 to 🟢.

Native pass priority order (audience size, descending):
**1. es** (PT-BR ↔ ES overlap big audience) → **2. pt-br** → **3. ja** → **4. ko** → **5. nl** → **6. pl** → **7. sv / da / no / fi** (Nordic clusters share vocabulary, can do in one pass) → **8. hi** → **9. ar** (RTL needs layout testing too, not just translation).

### Step 3 — Optional LLM bootstrap

For locales where a native reviewer isn't available immediately, batch the `/* TODO i18n */` strings through an LLM (Gemini Flash, GPT-4o) for a first cut. Treat the output as a draft only — the marketing-pillar language ("Sai sempre quanto AI ti rimane" → "Du weißt immer …") is brittle in translation and a native pass MUST sign off before shipping.

## Payment methods — localisation backlog

The current FAQ entry (`"Quali metodi di pagamento accettate?"` / `"What
payment methods do you accept?"`) lists only the global rails: Stripe
cards, SEPA, Apple Pay, Google Pay, plus bank transfer / purchase order
for Education customers. That's correct for IT + EN audiences but it's
*incomplete* for the other 14 locales we aim to ship.

When each retranslation lands, add the locally relevant rail next to the
generic list. Stripe supports all of these natively — it's only a copy +
localised icon question:

| Locale | Add the following rails |
|---|---|
| `hi.ts` | UPI (Razorpay/Stripe), RuPay cards, Paytm |
| `pt-br.ts` | PIX, Boleto bancário |
| `nl.ts` | iDEAL (single most popular NL rail) |
| `de.ts` | Klarna, SOFORT, giropay |
| `sv.ts` | Klarna, Swish |
| `no.ts` | Vipps, Klarna |
| `da.ts` | MobilePay, Klarna |
| `fi.ts` | MobilePay, Klarna, online bank payments |
| `pl.ts` | Przelewy24 (P24), BLIK |
| `ar.ts` | mada (Saudi Arabia), STC Pay, fawry (Egypt) |
| `ja.ts` | Konbini, Bank Transfer (Japan), JCB cards |
| `ko.ts` | KakaoPay, Naver Pay, KCP local cards |
| `fr.ts` / `es.ts` | Bancontact (FR-BE corridor), Bizum (ES) where Stripe ships them |

We don't add these to `it.ts` / `en.ts` because the IT audience uses
cards + SEPA primarily, and the EN entry is a global default. Add the
locale-specific rail at the top of the FAQ answer for the rail to read as
"native first, global second" — that signals trust to the local buyer.

This is integration TODO: the rails are all Stripe-supported, but each
needs the right `payment_method_types` on the Checkout Session. Not
blocking V1 launch; tackle it when the matching locale retranslation
ships.

---

## Why the IT + EN privilege now

Memory says no IT + EN privilege day-1. The pricing pages, however, ARE shipping in IT + EN only until the 14 retranslations land — because shipping stale localised pricing (different numbers per locale) would damage trust more than serving the user a fallback locale. Routes for stale locales still render their old data; we'll either swap to IT/EN fallback or land the translation pack before the public soft launch (sett 22 of the plan).
