// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://crafted-ui.com',
  integrations: [mdx(), sitemap(), alpinejs()],

  redirects: {
    '/docs/components': '/docs/components/alert'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});