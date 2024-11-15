import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['@chakra-ui/react'],
  },
})
