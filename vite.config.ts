import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@api': resolve(__dirname, 'src/api'),
      '@common': resolve(__dirname, 'src/common'),
      '@component': resolve(__dirname, 'src/component'),
      '@assets': resolve(__dirname, 'src/assets'),
      '~antd': resolve(__dirname, 'node_modules/antd'),
    },
  },
  build: {
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false,
    },
    minify: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1890ff'
        }
      }
    }
  }
})
