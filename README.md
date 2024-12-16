# Clerk Astro Template

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

This template allows you to get started with Clerk and Astro in a matter of minutes, and demonstrates features of Clerk such as:

- Fully functional auth flow with login, signup, and a protected page
- Customized Clerk components with Tailwind CSS
- Composables for accessing user data and authentication state
- Organizations for multi-tenant applications

## Demo

A hosted demo of this example is available at:

<details>
<summary>Vercel</summary>

Demo: https://astro-clerk-template.vercel.app/

1. Set the `PLATFORM` env var to "netlify"
2. Add your key to the Vercel environment variables
</details>

<details>
<summary>Cloudflare Pages</summary>

Demo: https://astro-clerk-template.pages.dev

1. Update the `wrangler.toml` file with your own Publishable key
2. Run `pnpm dlx wrangler pages secret put CLERK_SECRET_KEY` to add your secret key
</details>

<details>
<summary>Netlify</summary>

Demo: https://astro-clerk-template.netlify.app

1. Set the `PLATFORM` env var to "netlify"
2. Add your key to the Netlify environment variables
</details>

## Running the template

```bash
git clone https://github.com/wobsoriano/astro-clerk-template
```

To run the example locally you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up).
2. Go to [Clerk's dashboard](https://dashboard.clerk.com) and create an application.
3. Set the required Clerk environment variables as shown in [the example env file](./.env.example).
4. `npm install` the required dependencies.
5. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and Nuxt, check out the following resources:

- [Clerk Documentation](https://clerk.com/docs)
