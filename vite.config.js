import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cors from 'cors'
import setupProxy from './setupProxy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [cors()]
  },
  configureServer: {
    middlewares: [setupProxy],
  },

})
