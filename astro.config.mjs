import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://casper.leons.dev',
  base: process.env.BASE_PATH || '/',
  adapter: cloudflare(),
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google({
        weights: [300, 400, 500, 600, 700],
        display: 'swap',
      }),
    },
  ],
});
