import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Auto base: "/" locally, "/<repo>/" on GitHub Actions
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repo}/` : "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
