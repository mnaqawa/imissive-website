'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight, MessageSquare, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeUp, motion } from '@/components/ui/motion'

interface CTASectionProps {
  locale: string
}

export function CTASection({ locale }: CTASectionProps) {
  const t = useTranslations('finalCta')
  const isRTL = locale === 'ar'

  return (
    <section className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative rounded-2xl bg-gradient-to-br from-primary via-[#4a2c54] to-primary p-8 text-center lg:p-14 overflow-hidden">
              {/* Subtle dot pattern - very light */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />
              
              {/* Soft accent glows - corners only, no overlay on content */}
              <motion.div 
                className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-secondary/20 blur-[80px]"
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-accent/15 blur-[80px]"
                animate={{ 
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative">
                <motion.div
                  className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Get Started Today</span>
                </motion.div>
                
                <motion.h2 
                  className="text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t('title')}
                </motion.h2>
                <motion.p 
                  className="mx-auto mt-4 max-w-2xl text-pretty text-base text-primary-foreground/85"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t('subtitle')}
                </motion.p>
                
                <motion.div 
                  className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 text-base font-semibold shadow-xl shadow-secondary/25 transition-all hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-1 group"
                    asChild
                  >
                    <Link href={`/${locale}/contact`}>
                      <MessageSquare className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('demo')}
                      <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-base font-medium backdrop-blur-sm transition-all hover:-translate-y-1"
                    asChild
                  >
                    <Link href={`/${locale}/contact`}>
                      <Phone className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('sales')}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
