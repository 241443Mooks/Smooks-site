import { defineCollection, z } from "astro:content";

const sharedFields = {
  title: z.string(),
  summary: z.string().max(280),
  year: z.number().int().min(2000).max(2100),
  // NEW: structured taxonomies
  type: z.enum(["Case Study", "System Win", "Writing"]),
  streams: z.array(z.string()).default([]),       // transformation streams
  industries: z.array(z.string()).default([]),    // e.g., ["Education","Public Sector"]
  projectTypes: z.array(z.string()).default([]),  // e.g., ["SharePoint Build","Policy","Automation"]
  tags: z.array(z.string()).default([]),          // free-form
  cmi: z.array(z.string()).default([]),

  featured: z.boolean().default(false),
  thumbnail: z.string().optional(),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
  keywords: z.array(z.string()).default([]),
};

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("Case Study").default("Case Study"),
    outcome: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

const systemWins = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("System Win").default("System Win"),
    metric: z.string().optional(),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    ...sharedFields,
    type: z.literal("Writing").default("Writing"),
    canonical: z.string().url().optional(),
  }),
});

export const collections = { caseStudies, systemWins, writing };
