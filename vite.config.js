import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import viteCompression from 'vite-plugin-compression';

export default () => {
  return {
    plugins: [
        ViteWebfontDownload([
            'https://fonts.googleapis.com/css2?family=Bangers&family=Shizuru&display=swap',
          ]),
    ],
  };
};