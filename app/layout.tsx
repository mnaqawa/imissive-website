import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iMissive | Enterprise SMS, OTP & WhatsApp Business API',
  description: 'iMissive provides enterprise messaging infrastructure including SMS, OTP, WhatsApp Business API, SMPP, sender ID governance, delivery reporting, and compliance-focused communication solutions for high-volume organizations.',
  keywords: 'Enterprise SMS provider, SMS API provider, OTP messaging platform, WhatsApp Business API provider, Bulk SMS platform, Sender ID management, SMPP provider, Enterprise messaging infrastructure, CPaaS platform, Customer communication platform, Messaging API, Delivery reporting, Multi-market messaging',
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
