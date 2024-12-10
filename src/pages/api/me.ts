import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  return Response.json({
    isNetlify: import.meta.env.NETLIFY
  })
}
