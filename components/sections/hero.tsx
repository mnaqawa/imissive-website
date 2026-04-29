'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Code2, 
  Shield, 
  Activity, 
  Zap,
  Send,
  Server,
  FileCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, FloatingElement } from '@/components/ui/motion'

interface HeroSectionProps {
  locale: string
}

// Animated typing effect for code
function TypeWriter({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)
    return () => clearInterval(timer)
  }, [text, delay])
  
  return <>{displayText}<span className="animate-pulse">|</span></>
}

// Animated connection line
function ConnectionLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 20" fill="none">
      <motion.path
        d="M0 10 H100"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="10"
        r="3"
        fill="#61C5BA"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="100" y2="0">
          <stop offset="0%" stopColor="#FDBF30" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#61C5BA" />
          <stop offset="100%" stopColor="#FDBF30" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Animated progress bar
function AnimatedProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />
    </div>
  )
}

// Animated counter
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <>{count.toLocaleString()}{suffix}</>
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero')
  const isRTL = locale === 'ar'

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] xl:min-h-[85vh] 2xl:min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#2a1a30] via-primary to-[#3d2545] flex flex-col justify-center">
      {/* Premium Background Elements */}
      
      {/* Animated gradient mesh - more subtle */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(253, 191, 48, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(97, 197, 186, 0.10) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-20 xl:py-16 2xl:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Content */}
          <motion.div 
            className={`${isRTL ? 'lg:order-2' : ''} relative z-10`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div 
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-secondary"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-secondary">{t('badge')}</span>
            </motion.div>
            
            {/* Headline - Premium corporate gradient */}
            <motion.h1 
              className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block">{t('titleLine1')}</span>
              <span className="block bg-gradient-to-r from-[#FDBF30] to-[#61C5BA] bg-clip-text text-transparent">
                {t('titleLine2')}
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="mt-6 max-w-xl text-pretty text-base text-white/65 lg:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('subtitle')}
            </motion.p>
            
            {/* CTA Buttons - Refined hover effects */}
            <motion.div 
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 text-base font-semibold shadow-lg shadow-secondary/25 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 group"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {t('cta')}
                  <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 h-12 px-8 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {t('secondaryCta')}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white/70 hover:text-white hover:bg-white/5 h-12 px-6 text-base font-medium transition-all duration-300 group"
                asChild
              >
                <Link href={`/${locale}/api-docs`}>
                  <Code2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('exploreDocs')}
                  <ArrowRight className={`h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators - Compact single row on desktop */}
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {[
                { icon: Shield, text: 'High Availability' },
                { icon: FileCheck, text: 'Enterprise SLA' },
                { icon: Activity, text: 'Real-time Reporting' },
                { icon: Phone, text: 'WhatsApp Business API' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/50">
                  <item.icon className="h-3.5 w-3.5 text-accent/70" />
                  <span className="text-xs font-medium whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Premium Dashboard Visual */}
          <motion.div 
            className={`${isRTL ? 'lg:order-1' : ''} relative lg:scale-100 xl:scale-105 2xl:scale-110 origin-center`}
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow effect behind cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-accent/10 to-accent-pink/10 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Main Dashboard Card - Higher contrast */}
              <FloatingElement duration={10} y={5}>
                <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-white/12 to-white/6 backdrop-blur-xl p-5 shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                    </div>
                    <span className="text-[10px] text-white/50 font-mono">iMissive Dashboard</span>
                  </div>

                  {/* Live Delivery Status - Sharper */}
                  <motion.div 
                    className="rounded-xl bg-white/8 border border-white/15 p-4 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-white/90">Live Delivery Status</span>
                      <motion.span 
                        className="flex items-center gap-1.5 text-[10px] text-accent font-medium"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Real-time
                      </motion.span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">
                          <AnimatedCounter value={98} suffix="%" />
                        </div>
                        <div className="text-[10px] text-white/60 mt-0.5">Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">1.4s</div>
                        <div className="text-[10px] text-white/60 mt-0.5">Avg. Latency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          <AnimatedCounter value={2100000} suffix="" />
                        </div>
                        <div className="text-[10px] text-white/60 mt-0.5">Today</div>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3">
                      <AnimatedProgress value={98.7} color="bg-accent" />
                    </div>
                  </motion.div>

                  {/* Message Flow Visualization */}
                  <motion.div 
                    className="flex items-center justify-between px-2 py-3 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="h-9 w-9 rounded-lg bg-secondary/25 border border-secondary/30 flex items-center justify-center mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Server className="h-4 w-4 text-secondary" />
                      </motion.div>
                      <span className="text-[8px] text-white/60 font-medium">API</span>
                    </div>
                    <ConnectionLine className="w-10 h-4" />
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="h-9 w-9 rounded-lg bg-accent/25 border border-accent/30 flex items-center justify-center mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Zap className="h-4 w-4 text-accent" />
                      </motion.div>
                      <span className="text-[8px] text-white/60 font-medium">Route</span>
                    </div>
                    <ConnectionLine className="w-10 h-4" />
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="h-9 w-9 rounded-lg bg-accent-pink/25 border border-accent-pink/30 flex items-center justify-center mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Send className="h-4 w-4 text-accent-pink" />
                      </motion.div>
                      <span className="text-[8px] text-white/60 font-medium">Deliver</span>
                    </div>
                    <ConnectionLine className="w-10 h-4" />
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="h-9 w-9 rounded-lg bg-accent/25 border border-accent/30 flex items-center justify-center mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </motion.div>
                      <span className="text-[8px] text-white/60 font-medium">Confirm</span>
                    </div>
                  </motion.div>

                  {/* Bottom Cards Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* OTP Card */}
                    <motion.div 
                      className="rounded-lg bg-white/8 border border-white/15 p-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-3.5 w-3.5 text-accent" />
                        <span className="text-[10px] font-semibold text-white/90">OTP Verification</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-accent" />
                        <span className="text-[10px] text-accent font-medium">Verified • 1.2s</span>
                      </div>
                    </motion.div>

                    {/* Sender ID Card */}
                    <motion.div 
                      className="rounded-lg bg-white/8 border border-white/15 p-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-3.5 w-3.5 text-secondary" />
                        <span className="text-[10px] font-semibold text-white/90">Sender ID</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-[10px] text-accent font-medium">APPROVED</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FloatingElement>

              {/* Floating Cards */}
              
              {/* API Response Card - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 lg:right-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <FloatingElement duration={6} y={6}>
                  <div className="rounded-xl bg-[#1a1a2e]/95 border border-white/15 p-3 shadow-xl backdrop-blur-sm w-40">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="h-3 w-3 text-secondary" />
                      <span className="text-[9px] font-mono text-white/70">api response</span>
                    </div>
                    <div className="font-mono text-[10px] text-accent font-medium">
                      {"{"} status: 200 {"}"}
                    </div>
                    <div className="font-mono text-[9px] text-white/50 mt-1">
                      <TypeWriter text='msg_id: "mx_9f3k..."' delay={80} />
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>

              {/* WhatsApp Template Card - Bottom Left */}
              <motion.div
                className="absolute -bottom-4 -left-4 lg:left-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <FloatingElement duration={7} y={8}>
                  <div className="rounded-xl bg-white/12 border border-white/15 p-3 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-3 w-3 text-accent" />
                      <span className="text-[10px] font-semibold text-white/90">WhatsApp Template</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileCheck className="h-3 w-3 text-accent" />
                      <span className="text-[10px] text-accent font-medium">Approved</span>
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>

              {/* Delivery Rate Card - Top Left */}
              <motion.div
                className="absolute top-8 -left-8 lg:-left-4 hidden md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <FloatingElement duration={8} y={5}>
                  <div className="rounded-xl bg-white/12 border border-white/15 p-3 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
                        <Activity className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">98.7%</div>
                        <div className="text-[9px] text-white/60">Delivery Rate</div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade - Very subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background/30 to-transparent" />
    </section>
  )
}
