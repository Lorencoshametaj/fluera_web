// Static OG endpoint: /og/{type}/{slug}.png
// Generates 1200×630 PNG per content piece via Satori + resvg.
// EN-only base slugs (no CJK font deps); all locale variants reuse same image.

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { createOgCard } from "@/lib/og-template.mjs";

// Fonts are read from project-root-relative paths. process.cwd() during
// `astro build` is the project root (where package.json lives).
const FONT_DIR = join(process.cwd(), "src/lib/fonts");
const interMedium = readFileSync(join(FONT_DIR, "Inter-Medium.ttf"));
const interSemiBold = readFileSync(join(FONT_DIR, "Inter-SemiBold.ttf"));

const STATIC_PAGES = [
  { slug: "manifesto", title: "The Manifesto", subtitle: "Why we built a learning canvas, not a note app." },
  { slug: "pricing", title: "Pricing", subtitle: "Free forever. Plus and Pro unlock advanced cognitive features." },
  { slug: "science", title: "The Science", subtitle: "50 years of cognitive research, applied to studying." },
  { slug: "education", title: "Fluera for Education", subtitle: "Tools for educators, validated by research." },
  { slug: "security", title: "Security & Privacy", subtitle: "GDPR-compliant, encrypted at rest, local-first." },
];

function stripLocale(id: string): string {
  return id.replace(/\.(en|it|es|pt-br|fr|de|ja|ko|hi|pl|ar|nl|sv|da|no|fi)$/, "");
}

export const getStaticPaths = async () => {
  const paths: Array<{ params: { type: string; slug: string }; props: { title: string; subtitle: string } }> = [];

  // Blog (EN only — base slugs).
  const blog = await getCollection("blog", ({ data }) => data.lang === "en" && !data.draft);
  for (const p of blog) {
    paths.push({
      params: { type: "blog", slug: stripLocale(p.id) },
      props: { title: p.data.title, subtitle: p.data.description },
    });
  }

  const features = await getCollection("features", ({ data }) => data.lang === "en");
  for (const f of features) {
    paths.push({
      params: { type: "features", slug: stripLocale(f.id) },
      props: { title: f.data.title, subtitle: f.data.tagline },
    });
  }

  const principles = await getCollection("principles", ({ data }) => data.lang === "en");
  for (const p of principles) {
    paths.push({
      params: { type: "principles", slug: stripLocale(p.id) },
      props: { title: p.data.title, subtitle: p.data.shortDescription },
    });
  }

  const authors = await getCollection("authors", ({ data }) => data.lang === "en");
  for (const a of authors) {
    paths.push({
      params: { type: "authors", slug: stripLocale(a.id) },
      props: { title: a.data.name, subtitle: a.data.shortBio },
    });
  }

  for (const page of STATIC_PAGES) {
    paths.push({
      params: { type: "page", slug: page.slug },
      props: { title: page.title, subtitle: page.subtitle },
    });
  }

  return paths;
};

export const GET: APIRoute = async ({ params, props }) => {
  const { type } = params as { type: string; slug: string };
  const { title, subtitle } = props as { title: string; subtitle: string };

  const svg = await satori(
    createOgCard({ kind: type, title, subtitle }) as Parameters<typeof satori>[0],
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
