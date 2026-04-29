'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { CheckCircle, ArrowRight, MessageSquare, Shield, Zap, BarChart3, Globe, Users, Bot, Brain, Workflow, Languages, Lock, Clock, Key, Smartphone, Bell, RefreshCcw, Send, CheckCheck, Headphones, Image, MessageCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const iconMap = {
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Users,
  Bot,
  Brain,
  Workflow,
  Languages,
  Lock,
  Clock,
  Key,
  Smartphone,
  Bell,
  RefreshCcw,
  Send,
  CheckCheck,
  Headphones,
  Image,
  MessageCircle,
  FileText,
}

export type IconName = keyof typeof iconMap

// Brand colors
const brandColors = {
  yellow: '#FDBF30',
  teal: '#61C5BA',
  orange: '#F68C20',
  pink: '#E0357C',
  purple: '#492E51',
}

interface ChannelPageProps {
  locale: string
  iconName: IconName
  title: string
  subtitle: string
  description: string
  features: {
    iconName: IconName
    title: string
    description: string
  }[]
  benefits: string[]
  useCases: {
    title: string
    description: string
  }[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
  ctaSecondary: string
  visual?: ReactNode
}

export function ChannelPage({
  locale,
  iconName,
  title,
  subtitle,
  description,
  features,
  benefits,
  useCases,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
  ctaSecondary,
  visual,
}: ChannelPageProps) {
  const Icon = iconMap[iconName]
  const isRTL = locale === 'ar'

  // Cycle through brand colors for feature cards
  const featureColors = [brandColors.yellow, brandColors.teal, brandColors.orange, brandColors.pink, brandColors.yellow, brandColors.teal]

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-20 lg:py-28">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="channel-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#channel-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#FDBF30]/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#61C5BA]/8 blur-[100px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#FDBF30] text-[#492E51]">
              <Icon className="h-10 w-10" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-pretty text-lg text-white/75 lg:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 font-semibold px-8"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {ctaButton}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'me-2 rotate-180' : 'ms-2'}`} />
                </Link>
              </Button>
              <a 
                href={`/${locale}/api-docs`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Channel Visual (optional) */}
      {visual && (
        <section className="pb-16 lg:pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              {visual}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl mb-12">
              {locale === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const FeatureIcon = iconMap[feature.iconName]
                const accentColor = featureColors[index % featureColors.length]
                return (
                  <Card key={index} className="border-2 border-border/50 bg-card hover:border-border transition-colors">
                    <CardHeader>
                      <div 
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                      >
                        <FeatureIcon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl mb-12">
              {locale === 'ar' ? 'المزايا الرئيسية' : 'Key Benefits'}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl border-2 border-border/50 bg-card p-5 hover:border-[#61C5BA]/50 transition-colors">
                  <CheckCircle className="h-6 w-6 shrink-0 text-[#61C5BA]" />
                  <span className="text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl mb-12">
              {locale === 'ar' ? 'حالات الاستخدام' : 'Use Cases'}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={index} className="rounded-xl border-2 border-border/50 bg-card p-6 hover:border-[#F68C20]/50 transition-colors">
                  <h3 className="text-lg font-semibold text-card-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-20 lg:py-28">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="channel-cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#channel-cta-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#61C5BA]/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#FDBF30]/8 blur-[100px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {ctaTitle}
            </h2>
            <p className="mt-6 text-lg text-white/75">
              {ctaSubtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 font-semibold px-8"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {ctaButton}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'me-2 rotate-180' : 'ms-2'}`} />
                </Link>
              </Button>
              <a 
                href={`/${locale}/api-docs`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
