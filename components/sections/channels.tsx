'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { MessageSquare, Shield, Phone, Bot, Code2, BarChart3, ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface ChannelsSectionProps {
  locale: string
}

export function ChannelsSection({ locale }: ChannelsSectionProps) {
  const t = useTranslations('channels')
  const isRTL = locale === 'ar'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const channels = [
    {
      icon: MessageSquare,
      title: t('smsTitle'),
      description: t('smsDesc'),
      benefits: t('smsBenefits'),
      href: `/${locale}/channels/sms`,
      gradient: 'from-primary/20 via-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20',
      glowColor: 'shadow-primary/20',
      badge: 'Core Channel',
    },
    {
      icon: Shield,
      title: t('otpTitle'),
      description: t('otpDesc'),
      benefits: t('otpBenefits'),
      href: `/${locale}/channels/otp`,
      gradient: 'from-secondary/20 via-secondary/10 to-transparent',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      borderColor: 'border-secondary/20',
      glowColor: 'shadow-secondary/20',
      badge: 'Security',
    },
    {
      icon: Phone,
      title: t('whatsappTitle'),
      description: t('whatsappDesc'),
      benefits: t('whatsappBenefits'),
      href: `/${locale}/channels/whatsapp`,
      gradient: 'from-accent/20 via-accent/10 to-transparent',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      borderColor: 'border-accent/20',
      glowColor: 'shadow-accent/20',
      badge: 'Business API',
    },
    {
      icon: Bot,
      title: t('chatbotTitle'),
      description: t('chatbotDesc'),
      benefits: t('chatbotBenefits'),
      href: `/${locale}/channels/chatbot`,
      gradient: 'from-accent-pink/20 via-accent-pink/10 to-transparent',
      iconBg: 'bg-accent-pink/10',
      iconColor: 'text-accent-pink',
      borderColor: 'border-accent-pink/20',
      glowColor: 'shadow-accent-pink/20',
      badge: 'AI-Powered',
    },
    {
      icon: Code2,
      title: t('apiTitle'),
      description: t('apiDesc'),
      benefits: t('apiBenefits'),
      href: `/${locale}/api-docs`,
      gradient: 'from-accent-orange/20 via-accent-orange/10 to-transparent',
      iconBg: 'bg-accent-orange/10',
      iconColor: 'text-accent-orange',
      borderColor: 'border-accent-orange/20',
      glowColor: 'shadow-accent-orange/20',
      badge: 'Developer',
    },
    {
      icon: BarChart3,
      title: t('analyticsTitle'),
      description: t('analyticsDesc'),
      benefits: t('analyticsBenefits'),
      href: `/${locale}/why-us`,
      gradient: 'from-primary/20 via-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      borderColor: 'border-primary/20',
      glowColor: 'shadow-primary/20',
      badge: 'Insights',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative mx-auto px-4">
        <FadeUp className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Channels</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeUp>

        <div className="mx-auto max-w-7xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={channel.href} className="group block h-full">
                <motion.div 
                  className={`relative h-full rounded-2xl border ${channel.borderColor} bg-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-opacity-60`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glow effect */}
                  <motion.div 
                    className={`absolute -inset-px rounded-2xl ${channel.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                    style={{ zIndex: -1 }}
                  />
                  
                  <div className="relative p-6">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${channel.iconBg} ${channel.iconColor} border ${channel.borderColor}`}>
                        {channel.badge}
                      </span>
                    </div>
                    
                    {/* Icon with glow */}
                    <motion.div 
                      className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${channel.iconBg} transition-all duration-300 group-hover:scale-110`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <channel.icon className={`h-7 w-7 ${channel.iconColor}`} />
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl ${channel.iconBg}`}
                        animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="flex items-center gap-2 text-lg font-bold text-card-foreground mb-3">
                      {channel.title}
                      <ArrowRight className={`h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {channel.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      {channel.benefits.split(' | ').map((benefit, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-2 text-sm text-foreground/80"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.08 + i * 0.1 + 0.3 }}
                        >
                          <CheckCircle2 className={`h-4 w-4 ${channel.iconColor} flex-shrink-0`} />
                          <span>{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Learn more link */}
                    <div className="mt-4 pt-3 border-t border-border/30">
                      <span className={`inline-flex items-center gap-1 text-sm font-medium ${channel.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        Learn more
                        <ArrowRight className={`h-3 w-3 ${isRTL ? 'rotate-180' : ''}`} />
                      </span>
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
