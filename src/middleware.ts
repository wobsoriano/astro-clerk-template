import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
import { sequence } from "astro:middleware";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

const ALL_VARIATIONS = Symbol.for('ALL_VARIATIONS')
interface NetlifyVaryValues {
  header: string[]
  language: string[]
  cookie: string[]
  /**
   * Query variation can be without argument in which case all query combinations would create a new cache key
   * This is represented by a ALL_VARIATIONS in the array.
   */
  query: (string | typeof ALL_VARIATIONS)[]
  country: string[]
}

const generateNetlifyVaryValues = ({
  header,
  language,
  cookie,
  query,
  country,
}: NetlifyVaryValues): string => {
  const values: string[] = []
  if (query.length !== 0) {
    if (query.includes(ALL_VARIATIONS)) {
      values.push(`query`)
    } else {
      values.push(`query=${query.join(`|`)}`)
    }
  }
  if (header.length !== 0) {
    values.push(`header=${header.join(`|`)}`)
  }
  if (language.length !== 0) {
    values.push(`language=${language.join(`|`)}`)
  }
  if (cookie.length !== 0) {
    values.push(`cookie=${cookie.join(`|`)}`)
  }
  if (country.length !== 0) {
    values.push(`country=${country.join(`|`)}`)
  }
  return values.join(',')
}

const getHeaderValueArray = (header: string): string[] => {
  return header
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
}

const NetlifyVaryKeys = new Set(['header', 'language', 'cookie', 'query', 'country'])
const isNetlifyVaryKey = (key: string): key is keyof NetlifyVaryValues => NetlifyVaryKeys.has(key)

/**
 * Ensure the Netlify CDN varies on things that Next.js varies on,
 * e.g. i18n, preview mode, etc.
 */
export const setVaryHeaders = (headers: Headers, request: Request) => {
  const netlifyVaryValues: NetlifyVaryValues = {
    header: ['x-nextjs-data', 'x-next-debug-logging'],
    language: [],
    cookie: ['__session', '__clerk_db_jwt', '__client_uat'],
    query: ['__clerk_handshake', '__redirect_url'],
    country: [],
  }

  const vary = headers.get('vary')
  if (vary !== null) {
    netlifyVaryValues.header.push(...getHeaderValueArray(vary))
  }

  const userNetlifyVary = headers.get('netlify-vary')
  if (userNetlifyVary) {
    // respect user's header and append them
    const directives = getHeaderValueArray(userNetlifyVary)
    for (const directive of directives) {
      const [key, value] = directive.split('=')

      if (key === 'query' && !value) {
        // query can have no "assignment" and then it should vary on all possible query combinations
        netlifyVaryValues.query.push(ALL_VARIATIONS)
      } else if (value && isNetlifyVaryKey(key)) {
        netlifyVaryValues[key].push(...value.split('|'))
      }
    }
  }

  headers.set(`netlify-vary`, generateNetlifyVaryValues(netlifyVaryValues))
}

export const onRequest = sequence(
  async function auth(ctx, next) {
    const response = await next();
    setVaryHeaders(response.headers, ctx.request)
    return response
  },
  clerkMiddleware((auth, context) => {
    const { userId, redirectToSignIn } = auth();
    if (!userId && isProtectedRoute(context.request)) {
      return redirectToSignIn();
    }
  }),
);
