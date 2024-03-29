/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  test: { environment: 'jsdom', setupFiles: './src/tests/setup.ts' },
})
