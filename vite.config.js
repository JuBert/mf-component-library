import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/mf-component-library/', // Important for GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './store': './src/store.js',
      },
      shared: ['react', 'react-dom', 'tailwindcss', 'jotai'],
    }),
    {
        name: 'add-nojekyll',
        writeBundle() {
            writeFileSync(resolve(__dirname, 'dist', '.nojekyll'), '');
        },
    }
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
})
