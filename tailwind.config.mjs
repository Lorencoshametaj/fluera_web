/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070c",
          900: "#080b14",
          850: "#0c111d",
          800: "#111827",
          700: "#1a2236",
          600: "#253149",
          500: "#3a4865",
        },
        paper: {
          50: "#fafaf7",
          100: "#f4f3ee",
          200: "#e8e6dc",
          300: "#d6d3c4",
        },
        accent: {
          ink: "#2d4ade",
          glow: "#38bdf8",
          warm: "#c98a5b",
        },
        signal: {
          ok: "#10b981",
          warn: "#f59e0b",
          bad: "#ef4444",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
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
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "orb-pulse": "orbPulse 8s ease-in-out infinite",
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
