import { setRequestLocale } from 'next-intl/server'
import { HeroSection } from '@/components/sections/hero'
import { TrustSection } from '@/components/sections/trust'
import { ProblemSection } from '@/components/sections/problem'
import { ChannelsSection } from '@/components/sections/channels'
import { PlatformSection } from '@/components/sections/platform'
import { MessagingFlowSection } from '@/components/sections/messaging-flow'
import { DeveloperSection } from '@/components/sections/developer'
import { VideoSection } from '@/components/sections/video'
import { IndustriesSection } from '@/components/sections/industries'
import { ClientsSection } from '@/components/sections/clients'
import { CaseStudySection } from '@/components/sections/case-study'
import { StatsSection } from '@/components/sections/stats'
import { FAQSection } from '@/components/sections/faq'
import { CTASection } from '@/components/sections/cta'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  return (
    <>
      <HeroSection locale={locale} />
      <TrustSection locale={locale} />
      <ProblemSection locale={locale} />
      <ChannelsSection locale={locale} />
      <PlatformSection locale={locale} />
      <MessagingFlowSection locale={locale} />
      <DeveloperSection locale={locale} />
      <VideoSection locale={locale} />
      <IndustriesSection locale={locale} />
      <ClientsSection locale={locale} />
      <CaseStudySection locale={locale} />
      <StatsSection locale={locale} />
      <FAQSection locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}
