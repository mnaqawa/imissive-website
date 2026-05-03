'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight, Zap, TrendingUp, HeadphonesIcon, ShieldCheck, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp, ScaleUp, motion } from '@/components/ui/motion'

interface CaseStudySectionProps {
  locale: string
}

/**
 * Case Study Section
 * 
 * NOTE: Metrics shown are non-numeric example labels for content safety.
 * No specific numbers are claimed without verification.
 */
export function CaseStudySection({ locale }: CaseStudySectionProps) {
  const t = useTranslations('caseStudy')
  const isRTL = locale === 'ar'

  // Non-numeric example labels for content safety
  const metrics = [
    { icon: Zap, label: t('metric1'), isPlaceholder: true },
    { icon: TrendingUp, label: t('metric2'), isPlaceholder: true },
    { icon: HeadphonesIcon, label: t('metric3'), isPlaceholder: true },
    { icon: ShieldCheck, label: t('metric4'), isPlaceholder: true },
  ]

  return (
    <section className="py-14 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeUp className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <FileText className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t('badge')}</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeUp>

        <ScaleUp className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Main Content */}
              <div className="lg:col-span-3 p-6 lg:p-10">
                {/* Challenge */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-pink/10 text-accent-pink text-xs font-semibold mb-3">
                    {t('challenge')}
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {t('challengeText')}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {t('solution')}
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {t('solutionText')}
                  </p>
                </motion.div>

                {/* Impact */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                    {t('impact')}
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed">
                    {t('impactText')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button variant="outline" size="default" asChild className="group transition-all hover:-translate-y-0.5">
                    <Link href={`/${locale}/contact`}>
                      {t('viewStory')}
                      <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Metrics Sidebar */}
              <div className="lg:col-span-2 bg-primary p-8 lg:p-10 flex flex-col justify-center">
                {/* Note: Verify metrics before production */}
                <p className="text-xs text-primary-foreground/50 text-center mb-6 uppercase tracking-wider">Example Results</p>
                <div className="grid grid-cols-2 gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-4 rounded-xl bg-white/5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="mb-3 flex justify-center">
                        <motion.div 
                          className="h-11 w-11 rounded-xl bg-secondary/20 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <metric.icon className="h-5 w-5 text-secondary" />
                        </motion.div>
                      </div>
                      <div className="text-sm font-semibold text-secondary leading-tight text-center">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScaleUp>
      </div>
    </section>
  )
}
