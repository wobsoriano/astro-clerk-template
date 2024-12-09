import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
import { sequence } from "astro:middleware";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export const onRequest = sequence(
  async function auth(a, next) {
    const response = await next();
    response.headers.set("Netlify-Vary", "cookie=__session");
    return response
  },
  clerkMiddleware((auth, context) => {
    const { userId, redirectToSignIn } = auth();
    if (!userId && isProtectedRoute(context.request)) {
      return redirectToSignIn();
    }
  }),
);
