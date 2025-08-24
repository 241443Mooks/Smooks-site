export type CaseStudy = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  units: string[];
  tags?: string[];
  alignment?: string[]; // CMI unit codes
  body: string; // markdown
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-staff-awards-system",
    title: "Regional Staff Awards System",
    date: "2025-07-24",
    summary:
      "Co-designed, student-led digital recognition system using peer nominations to rebuild trust and drive engagement—scaled regionally after rigorous MVP testing.",
    units: ["705 Leading Strategic Change", "703 Collaboration", "701 Strategic Leadership"],
    alignment: ["705", "703", "701"],
    tags: ["CMI Level 7", "Awards", "Culture", "Systems Design", "Automation", "SharePoint", "Power Automate"],
    body: `
## Units
- 705 Leading Strategic Change
- 703 Collaboration
- 701 Strategic Leadership

## Context
Recognition had become top‑down, inconsistent, and distrusted. Engagement was low and previous initiatives failed to gain traction.

## Action
I co‑designed a digital awards system **with students**, wireframing the end‑to‑end flow and testing an MVP in a separate tenant. We anchored the system in **peer nominations** to rebuild trust, simplified the journey (discover → nominate → shortlist → decide), and validated UX through repeated dry‑runs and edge‑case testing. Once stable, we rolled out regionally with clear comms and analytics.

## Outcomes
- **1,147 nominations** across **7 schools** in year one.
- Highest engagement of any prior recognition initiative.
- Students gained **systems design** + **leadership** experience.

## Strategic Value
Demonstrated that change is stickiest when it is co‑designed with users. Repositioned recognition as a lever for **cultural renewal and trust‑building**.
`.trim(),
  },
  {
    slug: "rome-vs-empire-system-design-framework",
    title: "Rome vs Empire – System Design Framework",
    date: "2025-06-30",
    summary:
      "A metaphor and mapping approach that shifts focus from tool-chasing to coherent architecture, aligning risk and value to ISO‑anchored pillars.",
    units: ["704 Organisational Strategy", "708 Risk Management", "610 Policy Development"],
    alignment: ["704", "708", "610"],
    tags: ["Architecture", "ISO", "Risk", "Strategy", "CMI Level 7"],
    body: `
## Units
- 704 Organisational Strategy
- 708 Risk Management
- 610 Policy Development

## Context
The organisation defaulted to reactive “add an app” solutions—creating duplication, inefficiency, and compliance risk.

## Action
I developed the **Rome vs Empire** metaphor: *Rome = architecture*; *Empire = tools*. I mapped the application estate, surfaced duplications, and framed ISO standards as the **structural pillars** of Rome. This shifted conversations from features to **system coherence** and **risk posture**.

## Outcomes
- Adopted in senior‑level conversations, including CEO comms.
- Reframed risk as **structural**, not incidental.
- Informed the business case for integrated standards.

## Strategic Value
Cemented my role as an **architectural thinker and risk translator**, enabling leaders to invest in structure, not sprawl.
`.trim(),
  },
  {
    slug: "strategic-printer-replacement",
    title: "Strategic Printer Replacement",
    date: "2025-05-21",
    summary:
      "Data-led escalation of a failing, high‑risk printer to a finance‑ and risk‑aligned decision that safeguarded exam provision and reduced IT noise.",
    units: ["706 Finance", "609 Quality Management", "708 Risk Management"],
    alignment: ["706", "609", "708"],
    tags: ["Lean Ops", "Resilience", "Risk", "Finance", "CMI Level 7"],
    body: `
## Units
- 706 Finance
- 609 Quality Management
- 708 Risk Management

## Context
A 6‑year‑old printer with **80% downtime** crippled workflows and threatened assessment readiness.

## Action
I gathered reliability data, quantified downtime, and built a clear **ROI** and **risk** case—framing replacement as **quality and resilience**, not hardware spend. I escalated to decision‑makers with options and payback.

## Outcomes
- Replacement approved after years of stalling.
- Exam provision safeguarded.
- IT noise significantly reduced.

## Strategic Value
Shows how **small wins**, framed correctly, unlock **finance‑aligned** and **risk‑aware** decisions.
`.trim(),
  },
  {
    slug: "ai-policy-responsible-use-across-schools",
    title: "AI Policy – Responsible Use Across Schools",
    date: "2025-07-29",
    summary:
      "Group-wide policy that balances opportunity with GDPR and safeguarding, setting practical guardrails for safe, effective AI use.",
    units: ["610 Policy Development", "614 Ethical Decision Making", "701 Strategic Leadership"],
    alignment: ["610", "614", "701"],
    tags: ["Policy", "AI", "GDPR", "Safeguarding", "Education", "CMI Level 7"],
    body: `
## Units
- 610 Policy Development
- 614 Ethical Decision Making
- 701 Strategic Leadership

## Context
AI adoption was fragmented, with risks around GDPR, safeguarding, and pedagogy.

## Action
I authored a **group‑wide AI Policy** that balances **risk, opportunity, and compliance**. It integrates UK GDPR, safeguarding requirements, and practical guidance for day‑to‑day use.

## Outcomes
- Policy ratified by the central team **July 2025**.
- Provides a balance of **enabling + protecting**.
- Sets a strong benchmark for responsible AI in education.

## Strategic Value
Positions me as a **policy shaper** who translates complex technology into **lawful, human frameworks**.
`.trim(),
  },
  {
    slug: "timetable-overhaul-year-1-3",
    title: "Timetable Overhaul (Year 1–3)",
    date: "2025-06-01",
    summary:
      "Three-year redesign that protected >12k staff hours annually, raised stability, and created slack for innovation.",
    units: ["702 Leading People", "705 Strategic Change", "701 Strategic Leadership"],
    alignment: ["702", "705", "701"],
    tags: ["Timetabling", "Operations", "Culture", "Workload", "CMI Level 7"],
    body: `
## Units
- 702 Leading People
- 705 Strategic Change
- 701 Strategic Leadership

## Context
Legacy timetables created inefficiency, workload strain, and wasted learning opportunities.

## Action
- **Year 1:** redesigned to enable a **4‑day work week** for staff.
- **Year 2:** optimised **stability** (rooms, teachers) for quality.
- **Year 3:** rebalanced for **workload** and **innovation slack**.

## Outcomes
- **12,000+ staff hours** protected annually.
- Higher stability and predictability for teachers.
- Capacity created for innovation.

## Strategic Value
Demonstrates how **operational clarity** drives cultural and learning transformation.
`.trim(),
  },
  {
    slug: "sharepoint-staff-portal",
    title: "SharePoint Staff Portal",
    date: "2024-12-15",
    summary:
      "Central hub surfacing key resources and workflows; designed for minimum clicks and maximum clarity to remove daily friction.",
    units: ["704 Organisational Strategy", "705 Strategic Change", "709 Technology & Data"],
    alignment: ["704", "705", "709"],
    tags: ["SharePoint", "UX", "Ops", "CMI Level 7"],
    body: `
## Units
- 704 Organisational Strategy
- 705 Strategic Change
- 709 Technology & Data (implicit)

## Context
Staff faced daily friction navigating scattered systems and links.

## Action
I built a central **SharePoint hub** with clear labels, search, and quick access to key workflows—anchored in **human‑centred design**.

## Outcomes
- Daily time savings for all staff.
- Increased system adoption and consistency.
- Became a blueprint for future portals.

## Strategic Value
A tangible example of **systems streamlining → productivity uplift**.
`.trim(),
  },
  {
    slug: "slt-portal",
    title: "SLT Portal",
    date: "2025-01-20",
    summary:
      "Single point of truth for senior leaders—precision access to critical tools, data, and reports to reduce bottlenecks.",
    units: ["701 Strategic Leadership", "704 Organisational Strategy", "705 Strategic Change"],
    alignment: ["701", "704", "705"],
    tags: ["Leadership", "Dashboards", "Ops", "CMI Level 7"],
    body: `
## Units
- 701 Strategic Leadership
- 704 Organisational Strategy
- 705 Strategic Change

## Context
Senior leaders lacked a single point of access for critical tools and reports, creating duplication and bottlenecks.

## Action
I created an **SLT Portal** for at‑a‑glance access to data, reports, and workflows—designed for **precision and speed**.

## Outcomes
- Senior time freed for strategic work.
- Reduced reliance on gatekeeping.
- Improved transparency across SLT.

## Strategic Value
Proves ability to **design for decision‑makers**, not just front‑line staff.
`.trim(),
  },
  {
    slug: "maths-curriculum-library",
    title: "Maths Curriculum Library",
    date: "2024-12-10",
    summary:
      "Curated, meta‑tagged White Rose library in SharePoint for frictionless access to aligned curriculum materials.",
    units: ["702 Leading People", "704 Organisational Strategy", "709 Quality (Pedagogy)"],
    alignment: ["702", "704", "709"],
    tags: ["Curriculum", "SharePoint", "Pedagogy", "CMI Level 7"],
    body: `
## Units
- 702 Leading People
- 704 Organisational Strategy
- 709 Quality (pedagogy)

## Context
Teachers lacked a structured, accessible base of aligned resources.

## Action
I curated and meta‑tagged the full **White Rose** curriculum and built a SharePoint library with search and clear year‑group tagging.

## Outcomes
- Frictionless access to aligned materials.
- Improved consistency of delivery.
- Model for wider curriculum builds.

## Strategic Value
Blends **pedagogical leadership** with **system clarity**.
`.trim(),
  },
  {
    slug: "time-off-workflow-automation",
    title: "Time‑Off Workflow Automation",
    date: "2025-02-18",
    summary:
      "Automated multi‑stakeholder approvals with calendar updates and notifications, cutting approval time from days to hours with a clear audit trail.",
    units: ["705 Strategic Change", "706 Finance", "708 Risk Management"],
    alignment: ["705", "706", "708"],
    tags: ["Automation", "Power Automate", "Compliance", "CMI Level 7"],
    body: `
## Units
- 705 Strategic Change
- 706 Finance
- 708 Risk Management

## Context
Manual time‑off approvals caused delays, miscommunication, and weak auditability.

## Action
I built an automated flow in **Power Automate** for multi‑stakeholder approvals, calendar updates, and leader notifications—with sensible fallbacks and logging.

## Outcomes
- Approval time cut from **days → hours**.
- Reduced errors and duplication.
- Clear audit trail for compliance.

## Strategic Value
Example of **automation as cultural enabler**—leaders lead, staff plan, and compliance is watertight.
`.trim(),
  },
];

export default caseStudies;

