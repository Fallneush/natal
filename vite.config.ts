import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NATAL/', // Tambahkan baris ini! Sesuaikan dengan nama repo GitHub kamu
})