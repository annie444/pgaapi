// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  output: "server",

  integrations: [
    expressiveCode({
      themes: ["github-light"],
      removeUnusedThemes: true,
      styleOverrides: { codeBackground: "#ffffff" },
    }),
  ],

  adapter: cloudflare(),
});