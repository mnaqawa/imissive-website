'use client'

import { useTranslations } from 'next-intl'
import { Building2, Code2, Route, MessageSquare, FileCheck, ArrowRight, Workflow } from 'lucide-react'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface MessagingFlowSectionProps {
  locale: string
}

export function MessagingFlowSection({ locale }: MessagingFlowSectionProps) {
  const t = useTranslations('flow')
  const isRTL = locale === 'ar'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const flowSteps = [
    {
      icon: Building2,
      title: t?.('enterprise') || 'Enterprise System',
      subtitle: t?.('enterpriseDesc') || 'Your application',
      color: '#492E51',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
    },
    {
      icon: Code2,
      title: t?.('api') || 'iMissive API',
      subtitle: t?.('apiDesc') || 'RESTful integration',
      color: '#FDBF30',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
    },
    {
      icon: Route,
      title: t?.('routing') || 'Routing Engine',
      subtitle: t?.('routingDesc') || 'Intelligent delivery',
      color: '#61C5BA',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
    {
      icon: MessageSquare,
      title: t?.('delivery') || 'SMS / WhatsApp',
      subtitle: t?.('deliveryDesc') || 'Multi-channel delivery',
      color: '#F68C20',
      bgColor: 'bg-accent-orange/10',
      borderColor: 'border-accent-orange/30',
    },
    {
      icon: FileCheck,
      title: t?.('reports') || 'Delivery Reports',
      subtitle: t?.('reportsDesc') || 'Real-time tracking',
      color: '#61C5BA',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(73,46,81,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(73,46,81,0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative mx-auto px-4">
        <FadeUp className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Workflow className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Infrastructure Flow</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t?.('title') || 'How Enterprise Messaging Works'}
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t?.('subtitle') || 'From your system to your customers, with full visibility at every step'}
          </p>
        </FadeUp>

        {/* Flow visualization */}
        <div className="mx-auto max-w-6xl">
          {/* Desktop flow - horizontal */}
          <div className="hidden lg:block relative">
            {/* Animated flow line */}
            <svg className="absolute top-[4.5rem] left-[8%] right-[8%] h-2 w-[84%]" viewBox="0 0 1000 8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#492E51" />
                  <stop offset="25%" stopColor="#FDBF30" />
                  <stop offset="50%" stopColor="#61C5BA" />
                  <stop offset="75%" stopColor="#F68C20" />
                  <stop offset="100%" stopColor="#61C5BA" />
                </linearGradient>
              </defs>
              <motion.line
                x1="0" y1="4" x2="1000" y2="4"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              />
            </svg>

            {/* Animated packet */}
            <motion.div
              className="absolute top-[4rem] h-4 w-4 rounded-full bg-secondary shadow-lg shadow-secondary/50 z-10"
              style={{ left: '8%' }}
              animate={isInView ? {
                left: ['8%', '92%'],
                scale: [1, 1.2, 1, 1.2, 1],
              } : {}}
              transition={{ 
                left: { duration: 3, repeat: Infinity, ease: 'linear', delay: 1 },
                scale: { duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }
              }}
            />

            <div className="flex items-start justify-between">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-[18%]">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {/* Icon container */}
                    <motion.div 
                      className={`relative h-20 w-20 rounded-2xl ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center transition-all hover:scale-105 bg-card`}
                      whileHover={{ y: -4 }}
                    >
                      <step.icon className="h-9 w-9" style={{ color: step.color }} />
                      
                      {/* Pulse animation */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl ${step.bgColor}`}
                        animate={isInView ? { 
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0, 0.5]
                        } : {}}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          delay: index * 0.3 
                        }}
                      />
                    </motion.div>
                    
                    {/* Step number */}
                    <motion.div
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  
                  {/* Labels */}
                  <motion.div 
                    className="mt-5 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{step.subtitle}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet flow - vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              
              <div className="space-y-6">
                {flowSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-5 relative"
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Icon */}
                    <div className={`relative h-16 w-16 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center shrink-0 bg-card`}>
                      <step.icon className="h-7 w-7" style={{ color: step.color }} />
                      <div className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: step.color }}>
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-card rounded-xl border border-border/50 p-4">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Status legend */}
          <motion.div 
            className="mt-10 p-4 rounded-xl border border-border/50 bg-muted/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-accent"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-muted-foreground">{t?.('delivered') || 'Delivered'}</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full bg-secondary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-muted-foreground">{t?.('inTransit') || 'In Transit'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-pink" />
                <span className="text-muted-foreground">{t?.('failed') || 'Failed'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{t?.('queued') || 'Queued'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
