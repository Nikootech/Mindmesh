import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.vite_app",
  server: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: true,
    https: fs.existsSync('localhost.pfx') ? {
      pfx: fs.readFileSync('localhost.pfx'),
      passphrase: 'mindmesh'
    } : false
  },
  // This changes the output dir from dist to build
  esbuild: {
    legalComments: 'none',
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2020',
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    reportCompressedSize: false,
    cssCodeSplit: true,
    minify: 'esbuild',
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
  ]
});