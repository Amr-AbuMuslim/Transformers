import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

function exitAfterBuildPlugin(): Plugin {
  return {
    name: "exit-after-build",
    apply: "build",
    closeBundle() {
      setTimeout(() => process.exit(0), 0)
    },
  }
}

export default defineConfig({
  plugins: [react(), exitAfterBuildPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
