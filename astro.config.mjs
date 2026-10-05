import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://akorn.netlify.app",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
