import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/powerkit-map/',
    build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                entryFileNames: 'powerMap.js',
                assetFileNames: 'powerMap.css',
                chunkFileNames: "powerMapChunk.js",
                manualChunks: undefined,
            }
        }
    },
    plugins: [react()],
})
