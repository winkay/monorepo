import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@packages': path.resolve(__dirname, '../../packages')
    }
  },
  build: {
    outDir: '../../dist/app-a',
    emptyOutDir: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/main.js')
      },
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'pinia'],
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    proxy: {
      '/api-a': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-a/, '')
      }
    }
  }
})
