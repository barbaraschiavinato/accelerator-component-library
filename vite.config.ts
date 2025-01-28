import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    copyPublicDir: false,
  },
  base: './',
  plugins: [
    react(),
    libInjectCss(),
    dts({ rollupTypes: true, include: ['lib'] }),
    tsconfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
