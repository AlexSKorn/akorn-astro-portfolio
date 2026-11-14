import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Variable fonts: one latin-subset file per family covers every weight.
const fontFile = (family) =>
  `./node_modules/@fontsource-variable/${family}/files/${family}-latin-wght-normal.woff2`;

// https://astro.build/config
export default defineConfig({
  site: "https://akorn.netlify.app",
  integrations: [sitemap()],
  // Single page with small CSS: inline it to avoid a render-blocking request
  build: { inlineStylesheets: "always" },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--astro-font-inter",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [{ weight: "100 900", style: "normal", src: [fontFile("inter")] }],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Outfit",
      cssVariable: "--astro-font-outfit",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [{ weight: "100 900", style: "normal", src: [fontFile("outfit")] }],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
