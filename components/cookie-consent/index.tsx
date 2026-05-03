'use client'

import { CookieBanner } from './cookie-banner'
import { CookiePreferencesModal } from './cookie-preferences-modal'

interface CookieConsentProps {
  locale: string
}

export function CookieConsent({ locale }: CookieConsentProps) {
  return (
    <>
      <CookieBanner locale={locale} />
      <CookiePreferencesModal />
    </>
  )
}

export { CookieBanner } from './cookie-banner'
export { CookiePreferencesModal } from './cookie-preferences-modal'
