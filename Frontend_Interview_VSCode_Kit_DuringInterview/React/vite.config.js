// Vite configuration for React. Keep it intentionally small for interview speed.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Enables React Fast Refresh and JSX handling.
});
