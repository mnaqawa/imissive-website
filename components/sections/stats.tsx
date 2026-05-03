'use client'

import { useTranslations } from 'next-intl'
import { platformMetrics } from '@/lib/content-config'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion'

interface StatsSectionProps {
  locale: string
}

/**
 * Platform Metrics Section
 * Shows descriptive labels only - no numeric claims.
 */
export function StatsSection({ locale }: StatsSectionProps) {
  const t = useTranslations('stats')

  // Labels only - no numeric values
  const stats = [
    { label: platformMetrics.messagesDelivered },
    { label: platformMetrics.enterpriseClients },
    { label: platformMetrics.platformUptime },
    { label: platformMetrics.supportResponse },
  ]

  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8" staggerDelay={0.1}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary lg:text-xl">
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
