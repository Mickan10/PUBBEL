import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site under /PUBBEL/, Netlify serves it from the domain root.
  // GitHub Actions sets GITHUB_ACTIONS=true during CI, Netlify doesn't — use that to tell them apart.
  base: process.env.GITHUB_ACTIONS ? '/PUBBEL/' : '/',
})
