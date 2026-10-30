import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed at the root of the custom domain configured in public/CNAME.
// If the repository is ever served from a sub-path instead, set `base`
// (e.g. '/adryan') and keep `site` in sync.
export default defineConfig({
  site: 'https://avenia.my.id',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
