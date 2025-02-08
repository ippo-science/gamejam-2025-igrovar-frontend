import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
  server: {
    allowedHosts: ['igrovar.ru', 'игровар.рф', 'igrovar.online']
  },
})
