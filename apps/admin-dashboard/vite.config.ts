import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig as defineTestConfig } from 'vitest/config'

export default defineTestConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})