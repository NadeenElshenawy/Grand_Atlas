import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    // ADDED: The proxy configuration to bypass CORS
    proxy: {
      '/api': {
        target: 'https://white-seahorse-266682.hostingersite.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    assetsInlineLimit: 0, // This forces all assets to be copied as separate files
  },
})