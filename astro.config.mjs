import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), tailwind()],
  prefetch: true,
  build: {
    format: "file",
  },
});
