import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
// import svelte from "@astrojs/svelte";
import vercelServerless from "@astrojs/vercel/serverless";
import clerk from "@clerk/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    clerk({
      signInForceRedirectUrl: "/dashboard",
      signUpForceRedirectUrl: "/dashboard",
    }),
    react(),
    vue(),
    // svelte(),
    tailwind(),
  ],
  output: "server",
  adapter: vercelServerless(),
});
