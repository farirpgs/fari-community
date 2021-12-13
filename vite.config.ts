import react from "@vitejs/plugin-react";
import { defineConfig, Plugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    open: true,
    port: 1236,
  },
});

