import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://danielsevinc.github.io/vibeswil-tv/', // <— REPO-NAME hier eintragen!
})
