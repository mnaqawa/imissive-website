'use client'

import { useTranslations } from 'next-intl'
import { platformMetrics } from '@/lib/content-config'
import { FadeUp, AnimatedCounter, StaggerContainer, StaggerItem } from '@/components/ui/motion'

interface StatsSectionProps {
  locale: string
}

/**
 * Platform Metrics Section
 * 
 * IMPORTANT: Verify and approve these metrics before production.
 * Metrics are loaded from /lib/content-config.ts for easy updates.
 * Update the platformMetrics object in content-config.ts to change values.
 */
export function StatsSection({ locale }: StatsSectionProps) {
  const t = useTranslations('stats')

  // Metrics loaded from content-config.ts
  // Verify these values before production deployment
  const stats = [
    { value: platformMetrics.messagesDelivered, label: t('messages') },
    { value: platformMetrics.enterpriseClients, label: t('clients') },
    { value: platformMetrics.platformUptime, label: t('uptime') },
    { value: platformMetrics.supportResponse, label: t('support') },
  ]

  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8" staggerDelay={0.1}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary lg:text-4xl">
                  <AnimatedCounter value={stat.value} duration={2} />
                </div>
                <div className="mt-1.5 text-xs text-primary-foreground/70 lg:text-sm">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
