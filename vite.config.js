import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://madina0511.github.io/madinaPortfolio/
export default defineConfig({
  plugins: [react()],
  base: '/madinaPortfolio/',
})
