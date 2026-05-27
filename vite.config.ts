import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 90 },
      jpeg: { quality: 90 },
      jpg: { quality: 90 },
      svg: {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } } as never,
        ],
      },
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
})
