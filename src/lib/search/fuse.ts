export type PortfolioItem = {
  slug: string;
  title: string;
  summary: string;
  type: "Case Study" | "System Win" | "Writing";
  year: number;
  category: string[];
  tags: string[];
  cmi: string[];
  thumbnail?: string;
};

export const makeIndex = async (items: PortfolioItem[]) => {
  const { default: Fuse } = await import(
    "https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.min.js"
  );
  return new Fuse(items, {
    keys: [
      { name: "title", weight: 0.5 },
      { name: "summary", weight: 0.3 },
      { name: "tags", weight: 0.15 },
      { name: "category", weight: 0.05 },
    ],
    includeScore: true,
    threshold: 0.34,
  });
};
