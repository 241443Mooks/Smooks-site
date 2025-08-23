// Generates static OG images at build time like:
//  /og/writing/my-article.png
//  /og/system-wins/regional-staff-recognition.png
//  /og/playbooks/rome-vs-empire.png

import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const articles = await getCollection('articles', (e) => e.data.draft !== true);
const wins = await getCollection('wins', (e) => e.data.draft !== true);
const playbooks = await getCollection('playbooks', (e) => e.data.draft !== true);

function toPages<T extends { slug: string; data: any }>(
  entries: T[],
  prefix: 'writing' | 'system-wins' | 'playbooks'
) {
  return Object.fromEntries(
    entries.map(({ slug, data }) => [
      `${prefix}/${slug}`,
      {
        title: data.title,
        description: data.summary ?? '',
      },
    ])
  );
}

const pages = {
  ...toPages(articles, 'writing'),
  ...toPages(wins, 'system-wins'),
  ...toPages(playbooks, 'playbooks'),
};

export const { getStaticPaths, GET } = OGImageRoute({
  // file is [...route].ts → the param is "route"
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    padding: 80,
    fonts: [],
    // tasteful dark → indigo gradient
    bgGradient: [
      [24, 24, 27],
      [99, 102, 241],
    ],
    // you can add a logo later:
    // logo: { path: './public/images/logo.png', size: [140] },
  }),
});
