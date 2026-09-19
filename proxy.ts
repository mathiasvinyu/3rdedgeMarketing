import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Next.js Proxy Server Convention (replaces deprecated middleware.ts)
 * Reference: https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // Security and header enforcement
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-3rdEdge-Engine', 'Next.js-Proxy')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all paths except internal static assets and public media files
     */
    '/((?!_next/static|_next/image|favicon.ico|media/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)',
  ],
}
