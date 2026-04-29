import { MetadataRoute } from 'next'
import { publicLocales, ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SITE_URL } from '@/lib/seo-config'

export default function sitemap(): MetadataRoute.Sitemap {
  // English-only launch: only include English pages
  const locales = publicLocales
  const lastModified = new Date()

  // Define all public pages
  const pages = [
    '', // Home
    '/about',
    '/why-us',
    '/contact',
    '/api-docs',
    '/privacy',
    '/terms',
    '/cookies',
    // Channel pages
    '/channels/sms',
    '/channels/whatsapp',
    '/channels/otp',
    '/channels/chatbot',
    // Solution pages
    '/solutions/banking',
    '/solutions/government',
    '/solutions/retail',
    '/solutions/food-delivery',
    '/solutions/healthcare',
    '/solutions/enterprise',
  ]

  // Generate sitemap entries for all pages in public locales only
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${SITE_URL}/${locale}${page}`
      
      // Determine priority based on page type
      let priority = 0.8
      if (page === '') priority = 1.0
      else if (page.startsWith('/channels/') || page.startsWith('/solutions/')) priority = 0.9
      else if (page === '/contact' || page === '/api-docs') priority = 0.85
      else if (page === '/why-us' || page === '/about') priority = 0.8
      else if (['/privacy', '/terms', '/cookies'].includes(page)) priority = 0.3

      // Determine change frequency based on page type
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly'
      if (page === '') changeFrequency = 'weekly'
      else if (page === '/api-docs') changeFrequency = 'weekly'
      else if (['/privacy', '/terms', '/cookies'].includes(page)) changeFrequency = 'yearly'

      // Only include alternates if Arabic is publicly enabled
      const alternates = ENGLISH_ONLY_LAUNCH 
        ? undefined 
        : {
            languages: {
              en: `${SITE_URL}/en${page}`,
              ar: `${SITE_URL}/ar${page}`,
            },
          }

      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency,
        priority,
        ...(alternates && { alternates }),
      })
    }
  }

  return sitemapEntries
}
