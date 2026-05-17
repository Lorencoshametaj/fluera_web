// OG card template — plain hyperscript (no JSX, no React runtime).
// Satori accepts `{ type, props: { style, children } }` objects directly.

const COLORS = {
  bg: "#05070c",
  bgGradient: "#0a0e16",
  paperFg: "#fafaf7",
  inkFg: "#9ca3af",
  accent: "#fbbf24",
  brand: "#fbbf24",
};

const KIND_LABEL = {
  blog: "Article",
  features: "Feature",
  principles: "Principle",
  authors: "Researcher",
  page: "Fluera",
};

function h(type, props, ...children) {
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children } };
}

export function createOgCard({ kind, title, subtitle }) {
  const label = KIND_LABEL[kind] ?? "Fluera";

  return h(
    "div",
    {
      style: {
        display: "flex",
        width: "1200px",
        height: "630px",
        backgroundColor: COLORS.bg,
        backgroundImage: `radial-gradient(circle at 75% 25%, ${COLORS.bgGradient} 0%, ${COLORS.bg} 60%)`,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        fontFamily: "Inter",
        color: COLORS.paperFg,
      },
    },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: "14px" } },
      h(
        "div",
        {
          style: {
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            backgroundColor: COLORS.brand,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.bg,
            fontSize: "20px",
            fontWeight: 700,
          },
        },
        "F",
      ),
      h(
        "div",
        { style: { fontSize: "22px", color: COLORS.paperFg, fontWeight: 500, letterSpacing: "-0.01em" } },
        "Fluera",
      ),
    ),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "24px" } },
      h(
        "div",
        {
          style: {
            fontSize: "16px",
            color: COLORS.accent,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 500,
          },
        },
        label.toUpperCase(),
      ),
      h(
        "div",
        {
          style: {
            fontSize: title.length > 60 ? "56px" : title.length > 40 ? "68px" : "80px",
            color: COLORS.paperFg,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            display: "flex",
          },
        },
        title,
      ),
      subtitle
        ? h(
            "div",
            { style: { fontSize: "26px", color: COLORS.inkFg, lineHeight: 1.4, display: "flex" } },
            subtitle.length > 140 ? subtitle.slice(0, 137) + "…" : subtitle,
          )
        : null,
    ),
    h(
      "div",
      {
        style: {
          fontSize: "18px",
          color: COLORS.inkFg,
          letterSpacing: "0.04em",
          display: "flex",
        },
      },
      "fluera.dev",
    ),
  );
}
