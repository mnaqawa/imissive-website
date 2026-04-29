'use client'

import Link from 'next/link'
import { CheckCircle, ArrowRight, MessageSquare, Shield, Zap, BarChart3, Globe, Users, Bot, Brain, Workflow, Languages, Lock, Clock, Key, Smartphone, Bell, RefreshCcw, Send, CheckCheck, Headphones, Image, MessageCircle, FileText, Building2, Landmark, ShoppingBag, Utensils, Heart, Briefcase, CreditCard, Truck, Calendar, UserCheck, AlertTriangle, TrendingUp, DollarSign, Package, MapPin, Pill, Activity, Stethoscope, ClipboardList, Award, Scale, FileCheck, Target, Megaphone, Receipt } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

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
  Building2,
  Landmark,
  ShoppingBag,
  Utensils,
  Heart,
  Briefcase,
  CreditCard,
  Truck,
  Calendar,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Package,
  MapPin,
  Pill,
  Activity,
  Stethoscope,
  ClipboardList,
  Award,
  Scale,
  FileCheck,
  Target,
  Megaphone,
  Receipt,
}

export type IconName = keyof typeof iconMap

// Brand colors for cycling through feature cards
const brandColors = [
  { bg: 'bg-[#FDBF30]/10', text: 'text-[#FDBF30]', border: 'border-[#FDBF30]/20' },   // Yellow
  { bg: 'bg-[#61C5BA]/10', text: 'text-[#61C5BA]', border: 'border-[#61C5BA]/20' },   // Teal
  { bg: 'bg-[#F68C20]/10', text: 'text-[#F68C20]', border: 'border-[#F68C20]/20' },   // Orange
  { bg: 'bg-[#E0357C]/10', text: 'text-[#E0357C]', border: 'border-[#E0357C]/20' },   // Pink
  { bg: 'bg-[#492E51]/10', text: 'text-[#492E51]', border: 'border-[#492E51]/20' },   // Purple
  { bg: 'bg-[#FDBF30]/10', text: 'text-[#FDBF30]', border: 'border-[#FDBF30]/20' },   // Yellow
]

interface SolutionPageProps {
  locale: string
  iconName: IconName
  title: string
  subtitle: string
  description: string
  challenges: {
    title: string
    description: string
  }[]
  solutions: {
    iconName: IconName
    title: string
    description: string
  }[]
  benefits: string[]
  channels: {
    iconName: IconName
    title: string
    description: string
    href: string
  }[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
  ctaSecondary: string
  visual?: ReactNode
}

export function SolutionPage({
  locale,
  iconName,
  title,
  subtitle,
  description,
  challenges,
  solutions,
  benefits,
  channels,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
  ctaSecondary,
  visual,
}: SolutionPageProps) {
  const Icon = iconMap[iconName]

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-20 lg:py-28">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="solution-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solution-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />

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
                  <ArrowRight className="ms-2 h-5 w-5" />
                </Link>
              </Button>
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

      {/* Sector-Specific Visual */}
      {visual && (
        <section className="py-8 lg:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              {visual}
            </div>
          </div>
        </section>
      )}

      {/* Challenges */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F68C20]/10 px-4 py-1.5 text-sm font-medium text-[#F68C20]">
                <AlertTriangle className="h-4 w-4" />
                {locale === 'ar' ? 'التحديات التي نحلها' : 'Challenges We Solve'}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, index) => (
                <div 
                  key={index} 
                  className="rounded-xl border-2 border-border/50 bg-card p-6 transition-all hover:border-[#F68C20]/30 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-card-foreground">{challenge.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#61C5BA]/10 px-4 py-1.5 text-sm font-medium text-[#61C5BA]">
                <Zap className="h-4 w-4" />
                {locale === 'ar' ? 'حلولنا' : 'Our Solutions'}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => {
                const SolutionIcon = iconMap[solution.iconName]
                const color = brandColors[index % brandColors.length]
                return (
                  <Card key={index} className="border-2 border-border/50 bg-card transition-all hover:border-primary/20 hover:shadow-lg">
                    <CardHeader>
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${color.bg} ${color.text}`}>
                        <SolutionIcon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-card-foreground">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {solution.description}
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
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FDBF30]/10 px-4 py-1.5 text-sm font-medium text-[#FDBF30]">
                <Award className="h-4 w-4" />
                {locale === 'ar' ? 'المزايا الرئيسية' : 'Key Benefits'}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl border-2 border-border/50 bg-card p-5 transition-all hover:border-[#61C5BA]/30">
                  <CheckCircle className="h-6 w-6 shrink-0 text-[#61C5BA]" />
                  <span className="text-card-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E0357C]/10 px-4 py-1.5 text-sm font-medium text-[#E0357C]">
                <MessageSquare className="h-4 w-4" />
                {locale === 'ar' ? 'القنوات المدعومة' : 'Supported Channels'}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel, index) => {
                const ChannelIcon = iconMap[channel.iconName]
                return (
                  <Link key={index} href={channel.href} className="group">
                    <Card className="h-full border-2 border-border/50 bg-card text-center transition-all hover:border-[#E0357C]/30 hover:shadow-lg">
                      <CardHeader>
                        <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-[#492E51] text-white transition-transform group-hover:scale-110">
                          <ChannelIcon className="h-7 w-7" />
                        </div>
                        <CardTitle className="text-lg text-card-foreground">{channel.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {channel.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="solution-cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solution-cta-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {ctaTitle}
            </h2>
            <p className="mt-6 text-lg text-white/75">
              {ctaSubtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 font-semibold px-8 py-6 text-base"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {ctaButton}
                  <ArrowRight className="ms-2 h-5 w-5" />
                </Link>
              </Button>
              <a
                href={`/${locale}/api-docs`}
                className="inline-flex h-auto items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
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
