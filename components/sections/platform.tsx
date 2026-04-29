'use client'

import { useTranslations } from 'next-intl'
import { 
  LayoutDashboard, 
  Code2, 
  IdCard, 
  BarChart3, 
  Route, 
  Users, 
  CheckSquare, 
  FileText,
  Layers,
  CheckCircle2,
  Activity
} from 'lucide-react'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface PlatformSectionProps {
  locale: string
}

export function PlatformSection({ locale }: PlatformSectionProps) {
  const t = useTranslations('platform')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const capabilities = [
    { icon: LayoutDashboard, title: t('campaign'), desc: t('campaignDesc'), color: 'text-primary', bg: 'bg-primary/10', status: 'Active' },
    { icon: Code2, title: t('api'), desc: t('apiDesc'), color: 'text-secondary', bg: 'bg-secondary/10', status: 'Active' },
    { icon: IdCard, title: t('senderId'), desc: t('senderIdDesc'), color: 'text-accent', bg: 'bg-accent/10', status: 'Managed' },
    { icon: BarChart3, title: t('delivery'), desc: t('deliveryDesc'), color: 'text-accent-orange', bg: 'bg-accent-orange/10', status: 'Live' },
    { icon: Route, title: t('routing'), desc: t('routingDesc'), color: 'text-primary', bg: 'bg-primary/10', status: 'Optimized' },
    { icon: Users, title: t('governance'), desc: t('governanceDesc'), color: 'text-accent-pink', bg: 'bg-accent-pink/10', status: 'Enforced' },
    { icon: CheckSquare, title: t('approval'), desc: t('approvalDesc'), color: 'text-secondary', bg: 'bg-secondary/10', status: 'Enabled' },
    { icon: FileText, title: t('audit'), desc: t('auditDesc'), color: 'text-accent', bg: 'bg-accent/10', status: 'Tracked' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/10 to-muted/20 relative overflow-hidden" ref={ref}>
      {/* Connection grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(rgba(73,46,81,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(73,46,81,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative mx-auto px-4">
        <FadeUp className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Layers className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Platform Control</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One Platform for Enterprise
            <span className="block mt-1 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Communication Control
            </span>
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeUp>

        {/* Platform Visual - Control Layer Design */}
        <div className="mx-auto max-w-6xl">
          {/* Main grid with visual connections */}
          <div className="relative">
            {/* Connection lines - desktop only */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="gridGradientPlatform" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#492E51" stopOpacity="0" />
                    <stop offset="50%" stopColor="#61C5BA" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#492E51" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M125 100 L875 100 M125 300 L875 300 M250 100 L250 300 M500 100 L500 300 M750 100 L750 300"
                  stroke="url(#gridGradientPlatform)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </svg>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <motion.div 
                    className="group relative rounded-2xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-xl overflow-hidden h-full"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                    
                    {/* Status indicator */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.06 + 0.3, type: 'spring' }}
                    >
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                        <motion.div 
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-[9px] font-medium text-accent uppercase tracking-wider">{item.status}</span>
                      </div>
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`relative mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-all duration-300 group-hover:scale-110`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="relative font-semibold text-card-foreground mb-1.5 pr-16 text-sm">
                      {item.title}
                    </h3>
                    <p className="relative text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform stats bar */}
          <motion.div 
            className="mt-10 p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
              {[
                { label: 'API Availability', value: 'High', color: 'text-accent' },
                { label: 'Avg Response', value: '45ms', color: 'text-secondary' },
                { label: 'Daily Messages', value: '2M+', color: 'text-primary' },
                { label: 'Active Routes', value: '150+', color: 'text-accent-orange' },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Activity className={`h-4 w-4 ${stat.color}`} />
                  <div className="text-center">
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
