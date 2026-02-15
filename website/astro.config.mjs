import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.stripeworker.com',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
