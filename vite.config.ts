import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';



export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    strictPort: true,
    allowedHosts: [
      '6d4a-2c0f-2a80-38a-6f10-48a5-896c-3139-646f.ngrok-free.app',
    ],
  },
});
