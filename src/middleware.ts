import { defineMiddleware } from 'astro:middleware';
import type { APIContext, MiddlewareNext } from 'astro';

export const onRequest = defineMiddleware(async (context: APIContext, next: MiddlewareNext) => {
  // Capture the original pathname before any rewriting happens
  const originalPathname = context.url.pathname;
  console.log('Original pathname:', originalPathname);
  
  // Get the response from the next middleware or page
  const response = await next();
  
  console.log('Response status:', response.status);
  console.log('Final pathname:', context.url.pathname);

  // Only handle 404 responses
  if (response.status === 404) {
    // Check if this is an Arabic URL that doesn't exist
    if (originalPathname.startsWith('/ar/') && originalPathname !== '/ar/404') {
      console.log('Redirecting to Arabic 404 page');
      return context.rewrite('/ar/404');
    }
    
    // For non-Arabic URLs, let the default 404 handle it
    if (!originalPathname.startsWith('/ar/') && originalPathname !== '/404') {
      console.log('Redirecting to English 404 page');
      return context.rewrite('/404');
    }
  }
  
  return response;
});