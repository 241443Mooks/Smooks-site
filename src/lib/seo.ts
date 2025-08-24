type MetaArgs = {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: string;
};

export const buildPieceMeta = ({ title, description, url, type = "article", image }: MetaArgs) => {
  const canonical = url;
  const meta = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    ...(image ? [{ property: "og:image", content: image }] : []),
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(image ? [{ name: "twitter:image", content: image }] : []),
  ];
  return { title, description, canonical, meta };
};

export const siteJsonLd = (opts: { url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharron Mooks",
  url: opts.url,
  jobTitle: "Strategic Systems Architect & Transformation Leader",
  sameAs: [
    "https://www.linkedin.com/in/smooks", // adjust
    "mailto:hello@smooks.co.uk",
  ],
});

export const pieceJsonLd = (p: {
  title: string; description: string; url: string; image?: string;
  datePublished?: string; dateModified?: string; keywords?: string[];
  authorName: string; type: "Article" | "BlogPosting" | "CreativeWork";
}) => ({
  "@context": "https://schema.org",
  "@type": p.type,
  headline: p.title,
  name: p.title,
  description: p.description,
  url: p.url,
  ...(p.image ? { image: [p.image] } : {}),
  ...(p.datePublished ? { datePublished: p.datePublished } : {}),
  ...(p.dateModified ? { dateModified: p.dateModified } : {}),
  ...(p.keywords?.length ? { keywords: p.keywords.join(", ") } : {}),
  author: { "@type": "Person", name: p.authorName },
  publisher: { "@type": "Person", name: p.authorName },
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});
