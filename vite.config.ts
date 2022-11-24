import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import viteEslint from 'vite-plugin-eslint';
import visiualizer from 'rollup-plugin-visualizer';
// import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
    visiualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@service': resolve(__dirname, 'src/service'),
      '@common': resolve(__dirname, 'src/common'),
      '@component': resolve(__dirname, 'src/component'),
      '@hook': resolve(__dirname, 'src/hook'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@routes': resolve(__dirname, 'src/routes'),
      '~antd': resolve(__dirname, 'node_modules/antd'),
    },
  },
  build: {
    reportCompressedSize: false,
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          moment: ['moment'],
          'react-vendor': ['react', 'react-dom'],
          antd: ['antd'],
          'ant-icons': ['@ant-design/icons'],
          'ant-pro': ['@ant-design/pro-components'],
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
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
