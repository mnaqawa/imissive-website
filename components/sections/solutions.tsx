'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Landmark, Building2, ShoppingCart, UtensilsCrossed, Heart, Briefcase, ArrowRight } from 'lucide-react'

interface SolutionsSectionProps {
  locale: string
}

export function SolutionsSection({ locale }: SolutionsSectionProps) {
  const t = useTranslations('solutions')

  const solutions = [
    {
      icon: Landmark,
      title: t('bankingTitle'),
      description: t('bankingDesc'),
      href: `/${locale}/solutions/banking`,
    },
    {
      icon: Building2,
      title: t('governmentTitle'),
      description: t('governmentDesc'),
      href: `/${locale}/solutions/government`,
    },
    {
      icon: ShoppingCart,
      title: t('retailTitle'),
      description: t('retailDesc'),
      href: `/${locale}/solutions/retail`,
    },
    {
      icon: UtensilsCrossed,
      title: t('foodTitle'),
      description: t('foodDesc'),
      href: `/${locale}/solutions/food-delivery`,
    },
    {
      icon: Heart,
      title: t('healthcareTitle'),
      description: t('healthcareDesc'),
      href: `/${locale}/solutions/healthcare`,
    },
    {
      icon: Briefcase,
      title: t('enterpriseTitle'),
      description: t('enterpriseDesc'),
      href: `/${locale}/solutions/enterprise`,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent/5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <solution.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-card-foreground">
                  {solution.title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
