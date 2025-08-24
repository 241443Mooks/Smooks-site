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

