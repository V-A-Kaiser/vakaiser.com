import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: 'app.html' }),
    paths: {
      base: process.argv.includes('dev') ? '' : '/v-a-kaiser/vakaiser.com'
    }
  },
  preprocess: vitePreprocess()
};
export default config;
