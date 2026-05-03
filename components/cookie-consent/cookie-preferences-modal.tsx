'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Check, Shield, BarChart3, Megaphone } from 'lucide-react'
import { useCookieConsent } from '@/lib/cookie-consent'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { motion, AnimatePresence } from 'framer-motion'

export function CookiePreferencesModal() {
  const { showModal, setShowModal, consent, acceptAll, rejectNonEssential, savePreferences } = useCookieConsent()
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // Sync state with stored consent when modal opens
  useEffect(() => {
    if (showModal && consent) {
      setAnalytics(consent.analytics)
      setMarketing(consent.marketing)
    }
  }, [showModal, consent])

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [showModal, setShowModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showModal])

  const handleSavePreferences = useCallback(() => {
    savePreferences({
      analytics,
      marketing,
    })
  }, [analytics, marketing, savePreferences])

  const handleAcceptAll = useCallback(() => {
    setAnalytics(true)
    setMarketing(true)
    acceptAll()
  }, [acceptAll])

  const handleRejectNonEssential = useCallback(() => {
    setAnalytics(false)
    setMarketing(false)
    rejectNonEssential()
  }, [rejectNonEssential])

  if (!showModal) return null

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[50%] z-50 mx-auto max-h-[85vh] max-w-lg translate-y-[-50%] overflow-y-auto rounded-xl border border-white/10 bg-[#492E51] p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 id="cookie-preferences-title" className="text-lg font-semibold text-white">
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close preferences"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-[#FDBF30]/20 p-2">
                      <Shield className="h-4 w-4 text-[#FDBF30]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Necessary Cookies</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        Required for the website to function properly. These cookies cannot be disabled.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#FDBF30]/20 px-2 py-0.5 text-[10px] font-medium text-[#FDBF30]">
                      Always Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-white/10 p-2">
                      <BarChart3 className="h-4 w-4 text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Analytics Cookies</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        Help us understand how visitors use the website so we can improve performance and content.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={analytics}
                    onCheckedChange={setAnalytics}
                    aria-label="Toggle analytics cookies"
                    className="data-[state=checked]:bg-[#FDBF30]"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-white/10 p-2">
                      <Megaphone className="h-4 w-4 text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">Marketing Cookies</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        May be used in the future to measure campaign performance or personalize communication. Currently optional.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={marketing}
                    onCheckedChange={setMarketing}
                    aria-label="Toggle marketing cookies"
                    className="data-[state=checked]:bg-[#FDBF30]"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectNonEssential}
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Reject Non-Essential
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSavePreferences}
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Save Preferences
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90"
              >
                Accept All
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
