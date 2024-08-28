import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals }) => {
  return new Response(
    JSON.stringify({
      hello: 'world',
    }),
  );
};
