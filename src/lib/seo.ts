export function buildPieceMeta({
  title,
  description,
  url,
  type,
  image,
}: {
  title: string;
  description: string;
  url: string;
  type: string;
  image?: string;
}) {
  const meta = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    image ? { property: "og:image", content: image } : null,
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    image ? { name: "twitter:image", content: image } : null,
  ].filter(Boolean) as { name?: string; property?: string; content: string }[];

  return { title, description, canonical: url, meta };
}

export function pieceJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords,
  authorName,
  type,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  authorName: string;
  type: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    keywords,
    author: {
      "@type": "Person",
      name: authorName,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
