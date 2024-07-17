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
      appearance: {
        variables: { colorPrimary: "#000000" },
        elements: {
          formButtonPrimary:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          socialButtonsBlockButton:
            "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
          socialButtonsBlockButtonText: "font-semibold",
          formButtonReset:
            "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
          membersPageInviteButton:
            "bg-black border border-black border-solid hover:bg-white hover:text-black",
          card: "bg-[#fafafa]",
        },
      },
    }),
    react(),
    vue(),
    // svelte(),
    tailwind(),
  ],
  output: "server",
  adapter: vercelServerless(),
});
