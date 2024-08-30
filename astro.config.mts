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
  experimental: {
    env: {
      schema: {
        PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({ context: 'client', access: 'public' }),
        PUBLIC_CLERK_SIGN_IN_URL: envField.string({ context: 'client', access: 'public' }),
        PUBLIC_CLERK_SIGN_UP_URL: envField.string({ context: 'client', access: 'public' }),
        CLERK_SECRET_KEY: envField.string({ context: 'server', access: 'secret' }),
        PLATFORM: envField.enum({ context: 'server', access: 'public', values: ['vercel', 'netlify', 'cloudflare'], optional: true })
      },
      validateSecrets: true,
    }
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
        imageService: "passthrough",
        platformProxy: {
          enabled: true,
        },
      });
    default:
      return node({ mode: "standalone" });
  }
}
