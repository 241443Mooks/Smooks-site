import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const items = await getCollection('wins', (e) => e.data.draft !== true);
  items.sort((a,b)=>b.data.date.getTime()-a.data.date.getTime());
  const latest = items.slice(0,20);

  return rss({
    title: 'SMooks — Systems Wins',
    description: 'Real, measurable improvements',
    site: site!,
    items: (latest as CollectionEntry<'wins'>[]).map((p) => {
      const permalink = new URL(`/system-wins/${p.slug}/`, site).toString();
      return {
        title: p.data.title,
        pubDate: p.data.date,
        description: p.data.summary,
        link: `/system-wins/${p.slug}/`,
        customData: `<guid isPermaLink="true">${permalink}</guid>`
      };
    }),
  });
};
