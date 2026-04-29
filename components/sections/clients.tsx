'use client'

import { useTranslations } from 'next-intl'
import { Building2, Users, Briefcase, Shield, MessageSquare, BarChart3 } from 'lucide-react'
import { clientLogos } from '@/lib/content-config'
import { FadeUp, StaggerContainer, StaggerItem, motion } from '@/components/ui/motion'

interface ClientsSectionProps {
  locale: string
}

/**
 * Representative Use Cases Section
 * 
 * IMPORTANT - PRODUCTION SAFETY:
 * Replace representative use cases with approved customer references only after written approval.
 * 
 * - Client logos are placeholders - replace with approved client logos in /public/images/clients/
 * - Use case cards show representative scenarios, not verified customer endorsements
 * - Do not use real company names or personal names without explicit written approval
 * - Update content-config.ts with real client data before production
 */
export function ClientsSection({ locale }: ClientsSectionProps) {
  const t = useTranslations('clients')

  // Client logos loaded from content-config.ts
  const clients = clientLogos

  // Representative use cases - neutral descriptions, not testimonials
  const useCases = [
    {
      type: t('useCase1Type'),
      sector: t('useCase1Sector'),
      challenge: t('useCase1Challenge'),
      capability: t('useCase1Capability'),
      icon: Shield,
    },
    {
      type: t('useCase2Type'),
      sector: t('useCase2Sector'),
      challenge: t('useCase2Challenge'),
      capability: t('useCase2Capability'),
      icon: Briefcase,
    },
    {
      type: t('useCase3Type'),
      sector: t('useCase3Sector'),
      challenge: t('useCase3Challenge'),
      capability: t('useCase3Capability'),
      icon: MessageSquare,
    },
  ]

  return (
    <section className="py-14 lg:py-20 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeUp className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Representative Use Cases</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeUp>

        {/* Client Logos Grid - Placeholder cards for real logos */}
        <FadeUp delay={0.1} className="max-w-5xl mx-auto mb-14">
          {/* Internal note for content management */}
          <p className="text-center text-[10px] text-muted-foreground/60 mb-4 italic">
            {t('logoNote')}
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="flex items-center justify-center h-14 sm:h-16 rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group cursor-default"
                title={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.03 }}
              >
                {client.logoSrc && !client.isPlaceholder ? (
                  <img 
                    src={client.logoSrc} 
                    alt={client.name} 
                    className="h-6 sm:h-8 w-auto object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    {client.placeholder}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Representative Use Cases - Neutral cards, not testimonials */}
        <StaggerContainer className="max-w-6xl mx-auto" staggerDelay={0.1}>
          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="relative rounded-2xl bg-background border border-border/50 p-5 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all h-full"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <useCase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{useCase.type}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{useCase.sector}</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-3">
                    <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      Communication Challenge
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {useCase.challenge}
                    </p>
                  </div>

                  {/* Capability */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      iMissive Capability
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {useCase.capability}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
          
          {/* Disclaimer */}
          <p className="text-center text-[10px] text-muted-foreground/50 mt-6 italic max-w-2xl mx-auto">
            Representative scenarios showing how organizations may use iMissive capabilities. Not verified customer endorsements.
          </p>
        </StaggerContainer>
      </div>
    </section>
  )
}
