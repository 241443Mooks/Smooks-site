import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  // Use the exact collection key you defined in src/content/config.ts
  const posts = await getCollection('articles');

  return rss({
    title: 'SMooks — Writing',
    description: 'Essays & reflections by Sharron Mooks',
    site: site!, // ensure astro.config.mjs has `site: 'https://smooks.co.uk'`
    items: posts.map((p: CollectionEntry<'articles'>) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/writing/${p.slug}/`,
    })),
  });
};
