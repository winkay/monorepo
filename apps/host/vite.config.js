import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@packages': path.resolve(__dirname, '../../packages'),
      '@apps': path.resolve(__dirname, '../../apps'),
      '@app-a': path.resolve(__dirname, '../apps/app-a/src'),
      '@app-b': path.resolve(__dirname, '../apps/app-b/src')
    }
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api-a': {
        target: 'https://my-json-server.typicode.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-a/, '')
      },
      '/api-b': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-b/, '')
      }
    }
  }
})
