import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  return Response.json({
    // @ts-expect-error: todo
    isNetlify: import.meta.env.NETLIFY
  })
}
