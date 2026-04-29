'use client'

import { useTranslations } from 'next-intl'
import { IdCard, BarChart3, Code2, Server, ShieldCheck, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FeaturesSectionProps {
  locale: string
}

export function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = useTranslations('features')

  const features = [
    {
      icon: IdCard,
      title: t('senderIdTitle'),
      description: t('senderIdDesc'),
    },
    {
      icon: BarChart3,
      title: t('deliveryTitle'),
      description: t('deliveryDesc'),
    },
    {
      icon: Code2,
      title: t('apiTitle'),
      description: t('apiDesc'),
    },
    {
      icon: Server,
      title: t('scaleTitle'),
      description: t('scaleDesc'),
    },
    {
      icon: ShieldCheck,
      title: t('complianceTitle'),
      description: t('complianceDesc'),
    },
    {
      icon: HeadphonesIcon,
      title: t('supportTitle'),
      description: t('supportDesc'),
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
