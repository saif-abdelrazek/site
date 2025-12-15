import { defineMiddleware } from 'astro:middleware';
import type { APIContext, MiddlewareNext } from 'astro';

export const onRequest = defineMiddleware(async (context: APIContext, next: MiddlewareNext) => {
  // For static output, 404 handling is done by Vercel's routing in vercel.json
  // This middleware only runs during build time for static sites
  return next();
});