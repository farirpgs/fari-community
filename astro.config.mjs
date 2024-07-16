import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  base: "./",
  integrations: [tailwind(), react(), relativeLinks()],
});
