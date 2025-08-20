# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
Smooks-site Codebase Overview
General Structure
Framework & Config

Built with Astro 5, using TypeScript modules.

astro.config.mjs enables MDX, Tailwind, and sitemap integrations and sets an @ alias for src/

Tailwind is configured in tailwind.config.mjs and imported globally via src/styles/tailwind.css, which also defines a focus ring helper for accessibility

package.json lists Astro, Tailwind, and MDX as dependencies, with pnpm scripts for dev/build/preview workflows

Source Directory (src/)

assets/ holds static images (e.g., Astro logo, background graphics).

components/ contains reusable Astro components:

Callout.astro for variant-styled callout boxes

Header.astro for site navigation with an active-link state

SEO.astro for meta tags and social cards

Welcome.astro is the starter template’s hero section and includes a sizable CSS block.

layouts/ hosts Layout.astro, the base layout importing Tailwind, injecting metadata, and wrapping content with header and footer

pages/ defines routes:

Simple stub pages (about.astro, contact.astro, playbooks.astro, writing.astro) use the base layout and placeholders.

system-wins.astro lists case studies from the “wins” collection, displaying title, date, summary, and tags

system-wins/[slug].astro is a dynamic route that renders individual case studies via getStaticPaths and MDX content rendering

content/ holds structured content:

config.ts defines a collection named wins with a rich schema (title, date, summary, tags, roles, metrics, media, standards, etc.) using astro:content and Zod validation

wins/*.mdx files supply case-study entries with frontmatter adhering to that schema, then rich markdown/MDX content (e.g., ai-cpd-launch.mdx for an AI CPD training initiative)

Key Concepts for a New Contributor
Astro Components and Layouts
Learn how .astro files mix frontmatter scripts with template HTML, how components are imported, and how the default layout is applied across pages.

Content Collections & MDX
The site leverages Astro’s content module to type-check MDX frontmatter. Understanding the schema in content/config.ts is crucial when adding new “win” case studies.

Dynamic Routing
system-wins/[slug].astro showcases Astro’s static path generation and per-entry rendering. This pattern is essential for any future dynamic content (blog posts, playbooks, etc.).

Tailwind Styling
Tailwind is the primary styling tool. Layout.astro imports tailwind.css globally, and components use utility classes. Familiarity with Tailwind’s utility-first approach will speed up UI changes.

Project Scripts & Tooling
Use pnpm scripts (pnpm dev, pnpm build, pnpm preview) to run the site locally or build for production. Astro’s CLI (pnpm astro …) helps with additional tasks (adding integrations, checking types, etc.).

Suggested Next Steps
Explore Astro’s Documentation
Dive into Astro’s guides on components, content collections, and routing to understand the patterns used here.

Learn MDX & Frontmatter Schemas
Review how MDX and Zod schemas interact in content/config.ts to confidently add or modify case-study entries.

Tailwind Customization
Explore tailwind.config.mjs to learn how to extend the design system or add plugins for typography, forms, etc.

Enhance Pages & Components
Populate placeholder pages (about, contact, playbooks, writing) with real content, or refine system-wins.astro (e.g., ensure card <a> wrappers are consistent) to improve UX.

Performance & SEO
Use the existing SEO.astro component as a baseline to study meta tags, social sharing images, and canonical URLs. Consider adding structured data or analytics as the site matures.

This foundation should help a newcomer navigate the repository, understand how pages are built from content and components, and identify areas to explore or extend.