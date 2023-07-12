import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [
      compression({ level: 5 }), // Add this line
    ],
  },
})
