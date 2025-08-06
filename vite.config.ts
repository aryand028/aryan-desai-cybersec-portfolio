import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aryan-desai-cybersec-portfolio/', // 👈 important for GitHub Pages
  plugins: [react()],
})
