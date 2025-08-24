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

/**
 * Create a naive search index that matches if the query string
 * is contained within any text fields or tag arrays.
 */
export function makeIndex(all: PortfolioItem[]) {
  const prepared = all.map((item) => ({
    item,
    haystack: [
      item.title,
      item.summary,
      item.tags.join(" "),
      item.streams.join(" "),
      item.industries.join(" "),
      item.projectTypes.join(" "),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  return {
    search(query: string) {
      const q = query.toLowerCase();
      return prepared
        .filter((p) => p.haystack.includes(q))
        .map((p) => ({ item: p.item }));
    },
  };
}
