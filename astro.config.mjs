// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iasomd.com',
  output: 'static',
  trailingSlash: 'ignore',
  // The site is one page. These paths existed as separate routes in an earlier
  // build, so they redirect to the matching section instead of 404ing.
  redirects: {
    '/services': '/#services',
    '/membership': '/#membership',
    '/contact': '/#contact',
    '/waitlist': '/#waitlist',
  },
  integrations: [
    // Only the real page belongs in the sitemap — never the redirect stubs.
    sitemap({
      filter: (page) => page === 'https://iasomd.com/',
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
