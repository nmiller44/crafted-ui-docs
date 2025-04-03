// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://crafted-ui.com',
  integrations: [mdx(), sitemap()],

  redirects: {
    '/docs/components': '/docs/components/badge'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});