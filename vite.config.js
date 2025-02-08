import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['igrovar.ru', 'игровар.рф', 'igrovar.online', '51.250.100.194'],
  },
})
