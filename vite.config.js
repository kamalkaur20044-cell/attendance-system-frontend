import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
base:"/attendance-system-frontend/",
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //      target: 'https://attendanceSystem-backend-sk1n.onrender.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
