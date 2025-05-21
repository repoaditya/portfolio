import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // Base path matching your GitHub repository name
  plugins: [react()],
})