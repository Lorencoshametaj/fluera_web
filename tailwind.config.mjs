/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          // Canonical Calm Precision neutrals, shared with the app shell.
          950: "#151517",
          900: "#1b1b1e",
          850: "#202024",
          800: "#242427",
          700: "#2c2c30",
          600: "#5e5e6a",
          500: "#9a9a9c",
        },
        paper: {
          50: "#fafaf7",
          100: "#f4f3ee",
          200: "#e8e6dc",
          300: "#d6d3c4",
        },
        accent: {
          // ONE blue across site and app. #2563eb is the app's marketplace
          // accent (marketplace_theme.dart) and was already the light-theme CTA
          // colour in Nav.astro — the site's old #2d4ade was a second, visibly
          // different blue (ΔE 14) that failed 1.4.11 as a UI-component colour
          // on the dark ground (2.39:1). This one clears it at 3.09:1 and still
          // carries white text at 5.17:1.
          ink: "#2563eb",
          glow: "#5b8def",
          warm: "#2563eb",
        },
        signal: {
          ok: "#10b981",
          warn: "#f59e0b",
          bad: "#ef4444",
        },
      },
      fontFamily: {
        serif: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 7vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.875rem, 4vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose: "68ch",
        narrow: "42rem",
        content: "72rem",
      },
      animation: {
        "fade-up": "fadeUp 0.22s ease-out both",
        "fade-in": "fadeIn 0.22s ease-out both",
        "orb-pulse": "none",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        orbPulse: {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
