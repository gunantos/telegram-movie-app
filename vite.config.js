import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [react(), mkcert()],
  base: '/telegram-movie-app/',
  server: {
    host: true,
    port: 5173,
    https: true
  },
  optimizeDeps: {
    include: ['@mantine/core']
  }
})
