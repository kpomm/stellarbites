/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    eslint(),
    vitePluginFaviconsInject('./img/stellarbitesLogo.svg'),

  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
