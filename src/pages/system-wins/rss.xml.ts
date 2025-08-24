import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const site = new URL(context.site ?? 'https://www.smooks.co.uk');

  // If your collection id differs, change 'systemWins'
  const posts = await getCollection('systemWins');

  return rss({
    title: 'SMooks — System Wins',
    description: 'Real, measurable improvements from systems thinking.',
    site: site.toString(),
    items: posts.map((p) => ({
      link: new URL(`/system-wins/${p.slug}/`, site).toString(), // absolute URL
      title: p.data.title,
      pubDate: p.data.pubDate ?? p.data.date ?? new Date(),
      description: p.data.description,
    })),
  });
}
