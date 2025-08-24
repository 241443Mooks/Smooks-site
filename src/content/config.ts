import { defineCollection, z } from "astro:content";

const sharedFields = {
  title: z.string(),
  summary: z.string().max(280, "Use a tight, scannable summary"),
  year: z.number().int().min(2000).max(2100),
  category: z.array(z.string()).default([]),   // e.g. ["Culture","Digital Transformation"]
  tags: z.array(z.string()).default([]),       // e.g. ["Awards","SharePoint","CMI-705"]
  featured: z.boolean().default(false),        // for homepage spotlights
  // Optional extras (used on cards, SERP snippets)
  thumbnail: z.string().optional(),            // /images/...
  publishedAt: z.string().optional(),          // ISO 8601 (fallback to file name date)
  updatedAt: z.string().optional(),
  // CMI alignment (free text or unit codes)
  cmi: z.array(z.string()).default([]),        // ["701","703","705","708","610"]
  // SEO
  keywords: z.array(z.string()).default([]),
};

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("Case Study").default("Case Study"),
    outcome: z
      .array(
        z.object({
          label: z.string(),           // "Nominations"
          value: z.string(),           // "1,147"
        })
      )
      .default([]),
  }),
});

const systemWins = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("System Win").default("System Win"),
    metric: z.string().optional(),     // "12,000+ hours saved"
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("Writing").default("Writing"),
    canonical: z.string().url().optional(), // link to LinkedIn/original
  }),
});

export const collections = { caseStudies, systemWins, writing };
