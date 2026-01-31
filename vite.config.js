import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-core';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('framer-motion') || id.includes('d3') || id.includes('recharts')) {
              return 'vendor-charts-motion';
            }
            return 'vendor-others';
          }
        },
      },
    },
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: true, // Fixed: Allow all hosts to prevent 403s on cPanel/custom domains
  }
});