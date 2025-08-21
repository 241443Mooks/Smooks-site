import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (ctx) => {
  const posts = await getCollection('articles'); // or your collection name
  return rss({
    title: 'SMooks — Writing',
    description: 'Essays & reflections by Sharron Mooks',
    site: ctx.site!,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/writing/${p.slug}/`
    }))
  });
};
