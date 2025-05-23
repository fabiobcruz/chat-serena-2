   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: 'https://serenamaster.site/', // URL base para domínio personalizado
     build: {
       outDir: 'dist',
     },
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
