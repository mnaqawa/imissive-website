import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './i18n/config'
import { ENGLISH_ONLY_LAUNCH } from './lib/launch-config'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // English-only launch: redirect Arabic routes to English equivalents
  // Arabic locale is currently hidden for English-only launch and can be re-enabled later.
  if (ENGLISH_ONLY_LAUNCH && pathname.startsWith('/ar')) {
    const newPathname = pathname.replace(/^\/ar/, '/en')
    const url = request.nextUrl.clone()
    url.pathname = newPathname
    // Preserve hash/anchor in redirect (handled client-side, but we preserve search params)
    return NextResponse.redirect(url, { status: 302 })
  }
  
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}
