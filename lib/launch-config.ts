/**
 * Launch Configuration
 * 
 * Arabic locale is currently hidden for English-only launch and can be re-enabled later.
 * To enable Arabic:
 * 1. Set ENGLISH_ONLY_LAUNCH to false
 * 2. Rebuild and redeploy
 * 
 * This configuration controls:
 * - Language switcher visibility in header
 * - Arabic route redirects to English
 * - Sitemap locale inclusion
 * - SEO alternate language tags
 */

// Set to false to enable Arabic locale
export const ENGLISH_ONLY_LAUNCH = true

// Public locales based on launch mode
export const publicLocales = ENGLISH_ONLY_LAUNCH ? ['en'] as const : ['en', 'ar'] as const

// Check if a locale is publicly accessible
export function isPublicLocale(locale: string): boolean {
  return (publicLocales as readonly string[]).includes(locale)
}
