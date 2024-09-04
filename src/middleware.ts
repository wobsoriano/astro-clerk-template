import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
import { sequence } from "astro/middleware";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export const onRequest = sequence(
  async (_ctx, next) => {
    const resp = await next();
    resp.headers.set('Netlify-CDN-Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
    return resp;
  },
  clerkMiddleware((auth, context) => {
    const { userId, redirectToSignIn } = auth();
    if (!userId && isProtectedRoute(context.request)) {
      return redirectToSignIn();
    }
  })
);
