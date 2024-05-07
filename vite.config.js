import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import env from 'react-dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: env.PORT || 3001,
    open: true,
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
});
