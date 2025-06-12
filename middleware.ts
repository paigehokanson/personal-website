import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Check if the hostname starts with www.
  if (hostname.startsWith('www.')) {
    // Create the new URL without www.
    const newHostname = hostname.replace(/^www\./, '')
    const newUrl = new URL(url.pathname + url.search, `https://${newHostname}`)
    
    // Return a 301 (permanent) redirect
    return NextResponse.redirect(newUrl, { status: 301 })
  }
  
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Match all paths except for:
    // - API routes
    // - Static files (images, etc)
    // - _next internal routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 