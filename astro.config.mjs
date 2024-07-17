import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
// import vercelServerless from '@astrojs/vercel/serverless';
import node from "@astrojs/node";
import clerk from "@clerk/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react(), vue(), svelte(), tailwind()],
  output: "server",
  // adapter: vercelServerless(),
  adapter: node({
    mode: "standalone",
  }),
});
