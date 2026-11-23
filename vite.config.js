import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/lc-beauty-makeovers/',
  plugins: [react()],
})
