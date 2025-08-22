import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/background.js', dest: '.' },
        { src: 'manifest.json', dest: '.' },
         { src: 'index.html', dest: '.' } ,
          { 
          src: 'src/popup/popup.html', 
          dest: '.' 
        }
      ]
    })
  ],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
