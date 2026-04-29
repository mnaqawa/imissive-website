'use client'

import { useTranslations } from 'next-intl'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FadeUp, motion } from '@/components/ui/motion'

interface FAQSectionProps {
  locale: string
}

export function FAQSection({ locale }: FAQSectionProps) {
  const t = useTranslations('faq')

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
    { q: t('q8'), a: t('a8') },
  ]

  // FAQ structured data for SEO
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      {/* FAQ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeUp className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </FadeUp>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="rounded-xl border border-border/60 bg-card px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all hover:border-primary/20"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline py-4 [&[data-state=open]>svg]:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pt-0">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
