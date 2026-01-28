
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: [
        'defaults',
        'not IE 11',
        'chrome >= 49',
        'safari >= 10',
        'ios_saf >= 10',
        'android >= 5',
        'samsung >= 4'
      ],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true
    }),
    viteSingleFile()
  ],
  build: {
    outDir: 'public',
    emptyOutDir: true,
  },
  base: '/vibeswil-tv/'
})
