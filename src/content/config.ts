import { defineCollection, z } from "astro:content";

const wins = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().max(220),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    organisation: z.string().optional(),
    outcomes: z.array(z.string()).optional(),
    impact_metrics: z.array(z.object({
      metric: z.string(),
      before: z.string().optional(),
      after: z.string().optional(),
      estimate_hours: z.number().optional()
    })).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url()
    })).optional(),
    media: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    standards_alignment: z.object({
      iso: z.array(z.string()).optional(),
      frameworks: z.array(z.string()).optional(),
      cmi_evidence: z.array(z.string()).optional()
    }).optional()
  }),
});


const playbooks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(), // ISO date
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// src/content.config.ts
import { defineCollection, z } from "astro:content";

// …keep your existing collections…
// e.g. const wins = defineCollection({...})
// e.g. const playbooks = defineCollection({...})

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string().optional(),      // ISO date
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
  }),
});




export const collections = {
  // keep existing collections here (e.g., wins, articles) if defined
  playbooks, wins, articles
};
