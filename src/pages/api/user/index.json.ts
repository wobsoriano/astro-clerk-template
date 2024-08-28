import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  const user = await locals.currentUser();
  return new Response(
    JSON.stringify({
      user,
    }),
  );
};
