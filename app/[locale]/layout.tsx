import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { locales, type Locale, localeDirections } from '@/i18n/config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { 
  SITE_URL, 
  pageMetadata, 
  generateOrganizationSchema, 
  generateWebSiteSchema, 
  generateLocalBusinessSchema 
} from '@/lib/seo-config'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CookieConsentProvider } from '@/lib/cookie-consent'
import { CookieConsent } from '@/components/cookie-consent'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  
  const meta = pageMetadata.home
  
  return {
    title: {
      default: isArabic ? 'آي ميسيف | منصة الرسائل المؤسسية' : meta.title,
      template: isArabic ? '%s | آي ميسيف' : '%s | iMissive'
    },
    description: isArabic 
      ? 'بنية تحتية موثوقة للرسائل المؤسسية للرسائل النصية وواتساب للأعمال والتحقق من الهوية وحلول الروبوتات الذكية.'
      : meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en` }
        : { 'en': `${SITE_URL}/en`, 'ar': `${SITE_URL}/ar` },
    },
    openGraph: {
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      url: `${SITE_URL}/${locale}`,
      siteName: 'iMissive',
      title: isArabic ? 'آي ميسيف | منصة الرسائل المؤسسية' : meta.title,
      description: isArabic 
        ? 'بنية تحتية موثوقة للرسائل المؤسسية للرسائل النصية وواتساب للأعمال والتحقق من الهوية وحلول الروبوتات الذكية.'
        : meta.description,
      ...(ENGLISH_ONLY_LAUNCH ? {} : { alternateLocale: isArabic ? 'en_US' : 'ar_SA' }),
    },
    twitter: {
      card: 'summary_large_image',
      title: isArabic ? 'آي ميسيف | منصة الرسائل المؤسسية' : meta.title,
      description: isArabic 
        ? 'بنية تحتية موثوقة للرسائل المؤسسية للرسائل النصية وواتساب للأعمال والتحقق من الهوية وحلول الروبوتات الذكية.'
        : meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico?v=4' },
        { url: '/favicon-32x32.png?v=4', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png?v=4', sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png?v=4', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico?v=4',
    },
    verification: {
      // Add verification codes when available
      // google: 'verification-code',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const direction = localeDirections[locale as Locale]

  // Generate structured data for the site
  const organizationSchema = generateOrganizationSchema()
  const webSiteSchema = generateWebSiteSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang={locale} dir={direction} className="bg-background">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <CookieConsentProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main className="flex-1">
              {children}
            </main>
            <Footer locale={locale} />
            <CookieConsent locale={locale} />
          </NextIntlClientProvider>
        </CookieConsentProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
