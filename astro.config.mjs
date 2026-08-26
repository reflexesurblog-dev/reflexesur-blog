import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://reflexesur-blog.pages.dev';

export default defineConfig({
  site,
  integrations: [sitemap()]
});
