import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

console.log("config file: " + import.meta.env.SECRET_PASSWORD);
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  build: {
    format: "file",
  },
});
