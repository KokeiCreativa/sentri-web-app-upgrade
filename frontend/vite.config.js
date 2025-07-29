import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sentri-web-app-upgrade/', // jika nama repo kamu ini
  plugins: [react()],
})
