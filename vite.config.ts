import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@service': resolve(__dirname, 'src/service'),
      '@common': resolve(__dirname, 'src/common'),
      '@component': resolve(__dirname, 'src/component'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
      '~antd': resolve(__dirname, 'node_modules/antd'),
    },
    extensions: ['.js', 'ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    target: 'es2015',
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
          '@primary-color': '#1890ff',
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.99.73.8',
        changeOrigin: true,
      },
    },
  },
});
