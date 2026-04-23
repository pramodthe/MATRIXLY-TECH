import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        // Custom domain + DO app URLs when serving via `vite preview`
        allowedHosts: ['matrixly.tech', 'www.matrixly.tech', '.ondigitalocean.app'],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
