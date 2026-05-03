'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useCookieConsent } from '@/lib/cookie-consent'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface CookieBannerProps {
  locale: string
}

export function CookieBanner({ locale }: CookieBannerProps) {
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent()

  // Prevent body scroll when banner is visible on mobile
  useEffect(() => {
    // No scroll lock needed for bottom banner
  }, [showBanner])

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-white/10 bg-[#492E51] p-4 shadow-2xl md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
              {/* Content */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-white/80">
                  We use cookies to improve site functionality, understand website usage, and enhance your browsing experience. You can accept all cookies, reject non-essential cookies, or manage your preferences.{' '}
                  <Link
                    href={`/${locale}/cookies`}
                    className="underline underline-offset-2 transition-colors hover:text-[#FDBF30]"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:flex-shrink-0">
                <button
                  onClick={openPreferences}
                  className="order-3 text-xs text-white/60 underline underline-offset-2 transition-colors hover:text-[#FDBF30] sm:order-1 sm:mr-2"
                >
                  Manage Preferences
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectNonEssential}
                  className="order-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Reject Non-Essential
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="order-1 bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 sm:order-3"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
