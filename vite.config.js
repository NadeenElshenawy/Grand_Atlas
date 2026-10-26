import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
    
],
server:{
      port:3000
    },
    build: {
    assetsInlineLimit: 0, // This forces all assets to be copied as separate files
  },

})
