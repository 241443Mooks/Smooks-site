import Fuse from "fuse.js";

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

export const makeIndex = (items: PortfolioItem[]) =>
  new Fuse(items, {
    keys: [
      { name: "title", weight: 0.45 },
      { name: "summary", weight: 0.25 },
      { name: "tags", weight: 0.1 },
      { name: "streams", weight: 0.1 },
      { name: "industries", weight: 0.05 },
      { name: "projectTypes", weight: 0.05 },
    ],
    includeScore: true,
    threshold: 0.33,
  });
