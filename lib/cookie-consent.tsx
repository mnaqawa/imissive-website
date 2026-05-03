'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
  version: string
}

interface CookieConsentContextType {
  consent: CookieConsent | null
  hasConsented: boolean
  showBanner: boolean
  showModal: boolean
  setShowModal: (show: boolean) => void
  acceptAll: () => void
  rejectNonEssential: () => void
  savePreferences: (preferences: Partial<CookieConsent>) => void
  openPreferences: () => void
}

const CONSENT_KEY = 'imissive_cookie_consent'
const CONSENT_VERSION = '1.0'

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: CONSENT_VERSION,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Load consent from localStorage on mount
  useEffect(() => {
    setIsClient(true)
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as CookieConsent
        // Check if consent version matches
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed)
          setShowBanner(false)
        } else {
          // Version mismatch - ask for consent again
          setShowBanner(true)
        }
      } else {
        setShowBanner(true)
      }
    } catch {
      setShowBanner(true)
    }
  }, [])

  const saveConsent = useCallback((newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp))
    setConsent(consentWithTimestamp)
    setShowBanner(false)
    setShowModal(false)
  }, [])

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: '',
      version: CONSENT_VERSION,
    })
  }, [saveConsent])

  const rejectNonEssential = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: '',
      version: CONSENT_VERSION,
    })
  }, [saveConsent])

  const savePreferences = useCallback((preferences: Partial<CookieConsent>) => {
    saveConsent({
      ...defaultConsent,
      ...preferences,
      necessary: true, // Always required
      timestamp: '',
      version: CONSENT_VERSION,
    })
  }, [saveConsent])

  const openPreferences = useCallback(() => {
    setShowModal(true)
  }, [])

  const hasConsented = consent !== null

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        showBanner: isClient && showBanner,
        showModal,
        setShowModal,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openPreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}

/**
 * Helper function to check if analytics consent is given.
 * Use this before loading analytics scripts like GA4.
 * 
 * Example usage:
 * if (hasAnalyticsConsent()) {
 *   // Load Google Analytics
 * }
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as CookieConsent
      return parsed.analytics === true
    }
  } catch {
    // Ignore errors
  }
  return false
}

/**
 * Helper function to check if marketing consent is given.
 */
export function hasMarketingConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as CookieConsent
      return parsed.marketing === true
    }
  } catch {
    // Ignore errors
  }
  return false
}
