/**
 * Lighthouse CI configuration.
 * Runs locally with `npx @lhci/cli autorun` after `npm run build`.
 * Runs in CI via .github/workflows/lighthouse.yml on every push to main + PR to main.
 *
 * Thresholds are deliberately aggressive (≥ 0.95 across all four categories)
 * because the site is static, private-beta, and we want Phase 1 quality ceilings.
 * Loosen these only with a written reason in the commit message.
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      numberOfRuns: 1,
      // Trailing slashes: the built pages live at /path/index.html, so the
      // slashless form is a 301 — auditing it fails the `redirects` assertion
      // for a defect the page doesn't have. (/engine IS a redirect to /, so
      // auditing it as a page only measures the redirect stub — dropped.)
      url: [
        "/",
        "/pricing/",
        "/beta/",
        "/security/",
        "/security/architecture/",
        "/science/",
        "/features/",
        "/features/ghost-map/",
        "/education/",
        "/about/",
        "/docs/",
        "/docs/welcome/",
        "/blog/",
        "/blog/case-against-highlighters/",
        "/changelog/",
        "/manifesto/",
        "/research/",
      ],
      settings: {
        // Emulated throttling that matches Lighthouse defaults (mobile 4G).
        // Swap to "simulate" if you want the legacy engine.
        throttlingMethod: "simulate",
        // Disable PWA checks — this is not a PWA.
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
    },

    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        // ─── Category-level score floors ────────────────────────────────
        "categories:performance":     ["error", { minScore: 0.95 }],
        "categories:accessibility":   ["error", { minScore: 0.95 }],
        "categories:best-practices":  ["error", { minScore: 0.95 }],
        "categories:seo":             ["error", { minScore: 0.95 }],

        // ─── Relax audits that are environment-dependent ────────────────
        // Static build + Vercel headers means real CSP/HSTS lives there, not here.
        "csp-xss":                    "off",
        "uses-http2":                 "off",
        "uses-long-cache-ttl":        "off",

        // Google Fonts is hosted externally; we preload it already.
        "font-display":               "warn",
        "render-blocking-resources":  "warn",

        // These audits produce no numeric value on pages without lazy/LCP
        // images or animations — asserting minScore on them fails spuriously
        // ("audit did not produce a value") on a perfectly clean page.
        "lcp-lazy-loaded":            "off",
        "prioritize-lcp-image":       "off",
        "non-composited-animations":  "off",

        // We deliberately use SVG placeholders for OG images pre-launch.
        "image-aspect-ratio":         "warn",
        "image-size-responsive":      "warn",

        // Heading-order can be off-by-one on landing pages where we style
        // a <p class="eyebrow"> above the h1. Accessibility is still fine.
        "heading-order":              "warn",

        // Unused CSS is hard to avoid with a design system; keep as warn.
        "unused-css-rules":           "warn",
        "unused-javascript":          "warn",
      },
    },

    upload: {
      target: "temporary-public-storage",
    },
  },
};
