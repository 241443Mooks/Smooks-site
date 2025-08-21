import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const items = await getCollection('playbooks', (e) => e.data.draft !== true);

  // If your playbooks `date` is a Date (z.coerce.date())
  items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const latest = items.slice(0, 20);

  return rss({
    title: 'SMooks — Playbooks',
    description: 'Reusable frameworks and operating principles',
    site: site!,
    items: (latest as CollectionEntry<'playbooks'>[]).map((p) => {
      const permalink = new URL(`/playbooks/${p.slug}/`, site).toString();
      return {
        title: p.data.title,
        pubDate: p.data.date,                 // if string, use: new Date(p.data.date)
        description: p.data.summary,
        link: `/playbooks/${p.slug}/`,
        customData: `<guid isPermaLink="true">${permalink}</guid>`,
      };
    }),
  });
};
