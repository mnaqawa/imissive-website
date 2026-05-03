import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iMissive | Enterprise SMS, OTP & WhatsApp Business API',
  description: 'iMissive provides enterprise messaging infrastructure including SMS, OTP, WhatsApp Business API, SMPP, sender ID governance, delivery reporting, and compliance-focused communication solutions for high-volume organizations.',
  keywords: 'Enterprise SMS provider, SMS API provider, OTP messaging platform, WhatsApp Business API provider, Bulk SMS platform, Sender ID management, SMPP provider, Enterprise messaging infrastructure, CPaaS platform, Customer communication platform, Messaging API, Delivery reporting, Multi-market messaging',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
