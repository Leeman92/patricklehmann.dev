import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-chakra': ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
          'vendor-swiper': ['swiper'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000kb
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@chakra-ui/react', 'swiper'],
  },
}) 