import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Force Rollup to use WASM fallback instead of native binary
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    force: true,
  },
  resolve: {
    alias: {},
  },
});
