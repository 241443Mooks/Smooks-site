/* eslint-disable no-console */
import { globby } from "glob";
import fs from "fs-extra";
import matter from "gray-matter";
import path from "node:path";

const ROOT = process.cwd();
const map = fs.readJsonSync(path.join(ROOT, "scripts/meta-map.json"));

const FOLDERTYPE = (p) => {
  if (p.includes("/caseStudies/")) return "Case Study";
  if (p.includes("/systemWins/")) return "System Win";
  if (p.includes("/writing/")) return "Writing";
  return undefined;
};

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

const run = async () => {
  const files = await globby(["src/content/**/*.{md,mdx}"]);
  let changed = 0;

  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const fm = matter(raw);
    const d = fm.data || {};
    const type = d.type ?? FOLDERTYPE(file);

    if (!type) {
      console.warn("Skipping (unknown type):", file);
      continue;
    }

    // determine slug key
    const base = path.basename(file, path.extname(file));
    const guessedSlug = slugify(d.slug ?? d.title ?? base);

    // mapping lookup
    const bySlug = map.bySlug?.[guessedSlug] ?? null;
    const byTitle = map.byTitle?.[d.title] ?? null;
    const merged = Object.assign(
      {},
      { streams: [], industries: [], projectTypes: [] },
      map.defaults || {},
      bySlug || byTitle || {}
    );

    // ensure arrays
    const ensureArr = (v) => (Array.isArray(v) ? v : v ? [String(v)] : []);

    const newData = {
      ...d,
      type,
      streams: ensureArr(d.streams ?? merged.streams),
      industries: ensureArr(d.industries ?? merged.industries),
      projectTypes: ensureArr(d.projectTypes ?? merged.projectTypes),
      tags: Array.isArray(d.tags) ? d.tags : d.tags ? [String(d.tags)] : [],
      cmi: Array.isArray(d.cmi) ? d.cmi : d.cmi ? [String(d.cmi)] : [],
      year:
        typeof d.year === "number"
          ? d.year
          : (() => {
              // try to pull a 4-digit year from file name or publishedAt
              const m = String(d.publishedAt || base).match(/(20\d{2}|19\d{2})/);
              return m ? Number(m[1]) : new Date().getFullYear();
            })(),
    };

    // no-op if unchanged
    if (JSON.stringify(newData) === JSON.stringify(d)) continue;

    const out = matter.stringify(fm.content, newData, { lineWidth: 10000 });
    await fs.writeFile(file, out, "utf8");
    changed++;
    console.log("Updated:", file);
  }

  console.log(`Done. Updated ${changed} file(s).`);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
