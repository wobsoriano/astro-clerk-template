import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

export const onRequest = clerkMiddleware();
