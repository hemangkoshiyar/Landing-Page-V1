import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/Landing-Page-V1/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
