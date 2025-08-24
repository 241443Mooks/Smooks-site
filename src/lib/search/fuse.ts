export type PortfolioItem = {
  slug: string;
  title: string;
  summary: string;
  type: "Case Study" | "System Win" | "Writing";
  year: number;
  streams: string[];
  industries: string[];
  projectTypes: string[];
  tags: string[];
  thumbnail?: string;
};

// lightweight search index without external deps
export const makeIndex = (items: PortfolioItem[]) => ({
  search(query: string) {
    const q = query.toLowerCase();
    return items
      .map((item) => {
        const text = [
          item.title,
          item.summary,
          ...item.tags,
          ...item.streams,
          ...item.industries,
          ...item.projectTypes,
        ]
          .join(" ")
          .toLowerCase();
        return text.includes(q) ? { item, score: 0 } : null;
      })
      .filter(Boolean) as { item: PortfolioItem; score: number }[];
  },
});
