import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('articles', (e) => e.data.draft !== true);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const latest = posts.slice(0, 20);

  return rss({
    title: 'SMooks — Writing',
    description: 'Essays & reflections by Sharron Mooks',
    site: site!,
    items: (latest as CollectionEntry<'articles'>[]).map((p) => {
      const permalink = new URL(`/writing/${p.slug}/`, site).toString();
      return {
        title: p.data.title,
        pubDate: p.data.date,
        description: p.data.summary,
        link: `/writing/${p.slug}/`,
        customData: `<guid isPermaLink="true">${permalink}</guid>`,
      };
    }),
  });
};
