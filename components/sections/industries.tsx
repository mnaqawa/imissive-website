'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Landmark, Building2, ShoppingCart, UtensilsCrossed, Heart, Briefcase, Truck, Plane, ArrowRight, Globe } from 'lucide-react'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface IndustriesSectionProps {
  locale: string
}

export function IndustriesSection({ locale }: IndustriesSectionProps) {
  const t = useTranslations('industries')
  const isRTL = locale === 'ar'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const industries = [
    {
      icon: Landmark,
      title: t('bankingTitle'),
      description: t('bankingDesc'),
      useCases: t('bankingUseCases'),
      href: `/${locale}/solutions/banking`,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      icon: Building2,
      title: t('governmentTitle'),
      description: t('governmentDesc'),
      useCases: t('governmentUseCases'),
      href: `/${locale}/solutions/government`,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
    {
      icon: ShoppingCart,
      title: t('retailTitle'),
      description: t('retailDesc'),
      useCases: t('retailUseCases'),
      href: `/${locale}/solutions/retail`,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
    {
      icon: UtensilsCrossed,
      title: t('foodTitle'),
      description: t('foodDesc'),
      useCases: t('foodUseCases'),
      href: `/${locale}/solutions/food-delivery`,
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
      borderColor: 'border-accent-orange/20',
    },
    {
      icon: Heart,
      title: t('healthcareTitle'),
      description: t('healthcareDesc'),
      useCases: t('healthcareUseCases'),
      href: `/${locale}/solutions/healthcare`,
      color: 'text-accent-pink',
      bgColor: 'bg-accent-pink/10',
      borderColor: 'border-accent-pink/20',
    },
    {
      icon: Briefcase,
      title: t('enterpriseTitle'),
      description: t('enterpriseDesc'),
      useCases: t('enterpriseUseCases'),
      href: `/${locale}/solutions/enterprise`,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      icon: Truck,
      title: t('logisticsTitle'),
      description: t('logisticsDesc'),
      useCases: t('logisticsUseCases'),
      href: `/${locale}/solutions/logistics`,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
    {
      icon: Plane,
      title: t('travelTitle'),
      description: t('travelDesc'),
      useCases: t('travelUseCases'),
      href: `/${locale}/solutions/travel`,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeUp className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <Globe className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Global Industry Solutions</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeUp>

        <div className="mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link href={industry.href} className="group block h-full">
                <motion.div 
                  className={`relative h-full rounded-2xl border ${industry.borderColor} bg-card overflow-hidden transition-all hover:shadow-xl`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 ${industry.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  <div className="relative p-5">
                    {/* Icon */}
                    <motion.div 
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${industry.bgColor} transition-all duration-300 group-hover:scale-110`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <industry.icon className={`h-5 w-5 ${industry.color}`} />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="flex items-center gap-2 text-sm font-bold text-card-foreground mb-2">
                      {industry.title}
                      <ArrowRight className={`h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </h3>
                    
                    {/* Description - full text, no truncation */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    
                    {/* Use cases as tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {industry.useCases.split(' | ').slice(0, 3).map((useCase, i) => (
                        <motion.span 
                          key={i}
                          className={`text-[10px] px-2 py-0.5 rounded-full ${industry.bgColor} ${industry.color} font-medium`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.06 + i * 0.05 + 0.3 }}
                        >
                          {useCase}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
