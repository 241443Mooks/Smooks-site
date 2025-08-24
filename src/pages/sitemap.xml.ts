import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { slugify } from "@/utils/slugify";

const base = import.meta.env.SITE || "https://www.smooks.co.uk";

export const GET: APIRoute = async () => {
  const cs = await getCollection("caseStudies");
  const sw = await getCollection("systemWins");
  const wr = await getCollection("writing");

  const urls = [
    "/", "/portfolio", "/about", "/contact", // add /tools later
    ...cs.map((e) => `/portfolio/${slugify(e.slug ?? e.id ?? e.data.title)}`),
    ...sw.map((e) => `/system-wins/${slugify(e.slug ?? e.id ?? e.data.title)}`),
    ...wr.map((e) => `/writing/${slugify(e.slug ?? e.id ?? e.data.title)}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `<url>
      <loc>${base.replace(/\/$/,"")}${u}</loc>
      <changefreq>${u === "/" ? "weekly" : "monthly"}</changefreq>
      <priority>${u === "/" ? "1.0" : "0.7"}</priority>
    </url>`
      )
      .join("\n")}
  </urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
