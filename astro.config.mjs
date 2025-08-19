import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://smooks.co.uk',
  integrations: [mdx(), tailwind(), sitemap()],
  aliases: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
});
