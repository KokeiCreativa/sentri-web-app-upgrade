import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sentri-web-app-upgrade/', // ⬅️ GANTI jika nama repo kamu beda
  plugins: [react()],
})
