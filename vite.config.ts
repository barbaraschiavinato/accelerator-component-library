import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
// import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
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
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true }), tsconfigPaths()],
  /* enabling the postcss tailwindcss plugin includes the default tailwindcss css on the exported files */
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
});
