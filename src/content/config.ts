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
    }).optional(),
    draft: z.boolean().default(false).optional(),
  }),
});


const playbooks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
//    slug: z.string(),
    date: z.coerce.date(), // ISO date
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false).optional(),
  }),
});


const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
//    slug: z.string(),
    date: z.coerce.date(),      // ISO date
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    year: z.string().describe("e.g., 2025 or 2013–2015"),
    organisation: z.string().optional(),
    stream: z.enum([
      "tech-digital",
      "people-culture",
      "systems-automation",
      "ops-modernisation",
      "education-learning",
      "leadership-governance",
      "innovation-growth",
    ]),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    impact: z.array(
      z.object({
        label: z.string(),
        value: z.string(), // '12,000+ hours saved', '90% engagement', '~30% reduction'
      })
    ).default([]),
    scale: z.string().optional(), // '#users/sites/staff'
    longevity: z.string().optional(), // 'still in use', 'scaled to 7 schools'
    cmi_units: z.array(z.string()).default([]), // e.g., ['701','705','709']
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    status: z.enum(["draft", "published"]).default("published"),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});




export const collections = {
  // keep existing collections here (e.g., wins, articles) if defined
  playbooks,
  wins,
  articles,
  "case-studies": caseStudies,
};
