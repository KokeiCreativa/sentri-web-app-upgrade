// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sentri-web-app-upgrade/', // sesuai dengan nama repo kamu
  build: {
    outDir: '../docs',
  },
  plugins: [react()],
})
