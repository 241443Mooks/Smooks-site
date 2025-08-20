// Minimal data source for Portfolio pages.
// Add/extend entries here as you publish more case studies under /system-wins/[slug]

export type Win = {
  slug: string;                 // matches the URL at /system-wins/{slug}
  title: string;
  year: number;
  sector: string;               // e.g., Education, Housing, Energy, Media, Community
  streams: string[];            // pick 1–3 from STREAMS names below
  summary: string;              // 1–2 line impact statement
  tags?: string[];
};

export const STREAMS = [
  { name: "Strategy & Vision", slug: "strategy-vision", blurb: "Framing the future, setting roadmaps, aligning big-picture change." },
  { name: "Governance & Risk", slug: "governance-risk", blurb: "Ensuring compliance, accountability, safeguarding and auditability." },
  { name: "Finance & Resource Stewardship", slug: "finance-stewardship", blurb: "Budgets, ROI, procurement, and scalable resourcing." },
  { name: "People & Culture", slug: "people-culture", blurb: "Building communities, recognition systems, and leadership pipelines." },
  { name: "Operations & Systems", slug: "operations-systems", blurb: "Process design, automation, digital platforms and efficiency." },
  { name: "Innovation & Change", slug: "innovation-change", blurb: "Breaking legacy thinking, introducing new ways of working." },
  { name: "External Partnerships", slug: "external-partnerships", blurb: "Working across organisations, clients and networks." },
  { name: "Equity, Diversity & Inclusion", slug: "edi", blurb: "Accessibility, representation and fair outcomes by design." },
  { name: "Sustainability & Resilience", slug: "sustainability-resilience", blurb: "Systems that endure, adapt and scale with minimal friction." },
] as const;

export const WINS: Win[] = [
  // --- Seed examples (replace/extend with your real list) ---
  {
    slug: "regional-staff-recognition",
    title: "Regional Staff Recognition System",
    year: 2025,
    sector: "Education",
    streams: ["People & Culture", "Innovation & Change", "Operations & Systems"],
    summary: "Student-built, zero-budget awards adopted by 7 schools; 1,147 nominations; 90% participation.",
    tags: ["Power Automate", "Power BI", "SharePoint"],
  },
  {
    slug: "ai-cpd-launch",
    title: "AI CPD Launch",
    year: 2023,
    sector: "Education",
    streams: ["Strategy & Vision", "Innovation & Change"],
    summary: "Introduced AI to staff with a structured, practical CPD programme; safe, useful adoption.",
  },
  {
    slug: "one-manchester-tenant-portal",
    title: "One Manchester Tenant Services Portal",
    year: 2015,
    sector: "Housing",
    streams: ["Operations & Systems", "Finance & Resource Stewardship", "EDI"],
    summary: "Modernised payments & repairs across 10k+ properties; reduced arrears, improved repairs handling.",
  },
  {
    slug: "raci-hats-framework",
    title: "RACI Hats Framework & Dashboard",
    year: 2025,
    sector: "Education",
    streams: ["Strategy & Vision", "Sustainability & Resilience", "Operations & Systems"],
    summary: "Role clarity model + dashboards; faster decisions, fewer collisions, scalable governance.",
  },
  {
    slug: "leicester-fire-rescue-accessibility",
    title: "Leicester Fire & Rescue – Accessibility Overhaul",
    year: 2014,
    sector: "Public Safety",
    streams: ["EDI", "Operations & Systems", "Governance & Risk"],
    summary: "Rebuilt online triage to W3C standards; reduced incorrect submissions; improved accessibility.",
  },
  {
    slug: "peak-district-hotels-modernisation",
    title: "Peak District Hotels – 60 Website Modernisations",
    year: 2013,
    sector: "Hospitality",
    streams: ["Operations & Systems", "EDI", "External Partnerships"],
    summary: "Converted legacy Java sites to mobile-first, W3C compliant; stronger bookings & user experience.",
  },
  {
    slug: "internal-job-board-365",
    title: "Internal Job Board (365-Native)",
    year: 2025,
    sector: "Education",
    streams: ["Operations & Systems", "People & Culture", "Finance & Resource Stewardship"],
    summary: "Lists + Power Automate + role-based views; transparent mobility and leadership visibility.",
  },
  {
    slug: "time-off-approvals-automation",
    title: "Time Off Approvals Automation",
    year: 2025,
    sector: "Education",
    streams: ["Operations & Systems", "People & Culture"],
    summary: "Multi-approver workflow with calendar + notifications; reduced bottlenecks and admin.",
  },
];

export function getStreamBySlug(slug: string) {
  return STREAMS.find((s) => s.slug === slug);
}

export function winsForStream(streamName: string) {
  return WINS.filter((w) => w.streams.includes(streamName)).sort((a, b) => b.year - a.year);
}

// Utility to map stream name → slug (for building links if needed)
export function streamSlug(name: string) {
  const s = STREAMS.find((x) => x.name === name);
  return s ? s.slug : name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
