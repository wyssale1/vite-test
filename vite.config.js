import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

export default {
  plugins: [
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Bangers&family=Shizuru&display=swap',
    ]),
  ],
};