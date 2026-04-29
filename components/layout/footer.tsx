'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { MessageSquare, Phone, Shield, Bot, Code2, Landmark, Building2, ShoppingCart, UtensilsCrossed, Heart, Briefcase, Mail, ExternalLink, MapPin } from 'lucide-react'
import { externalLinks } from '@/lib/content-config'
import { motion } from '@/components/ui/motion'

interface FooterProps {
  locale: string
}

// Use a static year to avoid hydration mismatch between server and client
const CURRENT_YEAR = 2026

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')

  // Platform links point to Why Us page anchor sections
  const platformLinks = [
    { href: `/${locale}/why-us`, label: 'Platform Overview' },
    { href: `/${locale}/why-us#infrastructure`, label: 'Infrastructure' },
    { href: `/${locale}/why-us#governance`, label: 'Sender Governance' },
    { href: `/${locale}/why-us#reporting`, label: 'Delivery Reporting' },
    { href: `/${locale}/why-us#routing`, label: 'Routing & Failover' },
  ]

  const channelLinks = [
    { href: `/${locale}/channels/sms`, label: nav('sms'), icon: MessageSquare },
    { href: `/${locale}/channels/whatsapp`, label: nav('whatsapp'), icon: Phone },
    { href: `/${locale}/channels/otp`, label: nav('otp'), icon: Shield },
    { href: `/${locale}/channels/chatbot`, label: nav('chatbot'), icon: Bot },
    { href: `/${locale}/api-docs`, label: 'SMPP & API', icon: Code2 },
  ]

  const solutionLinks = [
    { href: `/${locale}/solutions/banking`, label: nav('banking'), icon: Landmark },
    { href: `/${locale}/solutions/government`, label: nav('government'), icon: Building2 },
    { href: `/${locale}/solutions/retail`, label: nav('retail'), icon: ShoppingCart },
    { href: `/${locale}/solutions/food-delivery`, label: nav('foodDelivery'), icon: UtensilsCrossed },
    { href: `/${locale}/solutions/healthcare`, label: nav('healthcare'), icon: Heart },
    { href: `/${locale}/solutions/enterprise`, label: nav('enterprise'), icon: Briefcase },
  ]

  const developerLinks = [
    { href: `/${locale}/api-docs`, label: 'API Reference' },
    { href: `/${locale}/api-docs#quickstart`, label: 'Quick Start' },
    { href: `/${locale}/api-docs#sdks`, label: 'SDKs' },
    { href: `/${locale}/api-docs#webhooks`, label: 'Webhooks' },
    { href: `/${locale}/api-docs#smpp`, label: 'SMPP v3.4' },
  ]

  const companyLinks = [
    { href: `/${locale}/about`, label: nav('about') },
    { href: `/${locale}/why-us`, label: nav('whyUs') },
    { href: `/${locale}/contact`, label: nav('contact') },
    { href: externalLinks.loginPortal, label: nav('login'), external: true },
  ]

  const legalLinks = [
    { href: `/${locale}/privacy`, label: t('privacy') },
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/cookies`, label: t('cookies') },
  ]

  return (
    <footer className="relative border-t border-[#3d2644] bg-[#492E51] text-white overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container relative mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-block group">
              <Image
                src="/images/imissive-logo.png"
                alt="iMissive - Interactive Missive"
                width={160}
                height={42}
                className="h-9 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[13px] text-white/65 leading-relaxed">
              {t('description')}
            </p>
            
            {/* Contact info */}
            <div className="mt-5 space-y-2.5">
              <a
                href={`mailto:${externalLinks.salesEmail}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FDBF30] transition-colors"
              >
                <Mail className="h-4 w-4" />
                {externalLinks.salesEmail}
              </a>
              <a
                href={`mailto:${externalLinks.supportEmail}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#FDBF30] transition-colors"
              >
                <Mail className="h-4 w-4" />
                {externalLinks.supportEmail}
              </a>
            </div>
          </div>

          {/* Platform & Channels Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider text-white/80">
              {t('channels')}
            </h3>
            <ul className="space-y-2.5">
              {channelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">
              {t('solutions')}
            </h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">
              Developers
            </h3>
            <ul className="space-y-2.5">
              {developerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/80">
              {t('company')}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider text-white/80">
              {t('legal')}
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/55 transition-colors hover:text-[#FDBF30] leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-[11px] text-white/45 leading-relaxed">
            &copy; {CURRENT_YEAR} iMissive. {t('copyright')}
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-white/45 hover:text-[#FDBF30] transition-colors leading-relaxed"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={externalLinks.loginPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/45 hover:text-[#FDBF30] transition-colors leading-relaxed"
            >
              {nav('login')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
