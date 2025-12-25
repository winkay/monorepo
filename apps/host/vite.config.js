import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@apps': path.resolve(__dirname, '../../apps'),
      '@repo': path.resolve(__dirname, '../../packages')
    }
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})
