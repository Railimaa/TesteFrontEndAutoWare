/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'src', 'ui'),
      '@app': path.resolve(__dirname, 'src', 'app'),
    },
  },
  server: {
    port: 3000,
  },
});
