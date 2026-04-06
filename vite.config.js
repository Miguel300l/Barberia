import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: false,
    minify: "esbuild",

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react")) {
            return "react";
          }

          if (id.includes("react-big-calendar")) {
            return "calendar";
          }

          if (id.includes("moment")) {
            return "date";
          }

          if (id.includes("bootstrap")) {
            return "bootstrap";
          }

          if (id.includes("axios")) {
            return "vendor";
          }
        }
      }
    }
  }
});