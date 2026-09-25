import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.vite_app",
  // This changes the output dir from dist to build
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: false,
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
  plugins: [
    tsconfigPaths(),
    react(),
    {
      name: 'api-dev-middleware',
      configureServer(server) {
        server.middlewares.use('/api/contact.php', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                message: 'Consultation request received in dev server'
              }));
            });
          } else {
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true }));
          }
        });
      }
    }
  ],
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: true, // Fixed: Allow all hosts to prevent 403s on cPanel/custom domains
  }
});