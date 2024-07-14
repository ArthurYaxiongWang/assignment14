import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  if (process.env.BUILD_COMBINED === 'true' && process.env.BUILD_TYPE === 'storybook') {
    return {
      plugins: [react()],
      base: "/storybook"
    }    
  } else {
    return {
      plugins: [react()]
    }
  }
})