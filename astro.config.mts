import { defineConfig, envField } from "astro/config";
import clerk from "@clerk/astro";
import tailwind from "@astrojs/tailwind";

// UI frameworks
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// Adapters
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Clerk integration
    clerk({
      signInForceRedirectUrl: "/dashboard",
      signUpForceRedirectUrl: "/dashboard",
      afterSignOutUrl: "/",
      appearance: {
        variables: {
          colorPrimary: "#000000",
        },
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
    // UI frameworks
    react(),
    vue(),
    svelte(),
    // Other
    tailwind(),
  ],
  output: "server",
  adapter: getAdapter(),
  env: {
    schema: {
      PLATFORM: envField.enum({
        context: "server",
        access: "public",
        values: ["vercel", "netlify", "cloudflare"],
        optional: true,
      }),
    },
  }
});

function getAdapter() {
  const platform = process.env.PLATFORM;

  switch (platform) {
    case "vercel":
      return vercel({ imageService: true });
    case "netlify":
      return netlify();
    case "cloudflare":
      return cloudflare({
        imageService: "passthrough"
      });
    default:
      return node({ mode: "standalone" });
  }
}
