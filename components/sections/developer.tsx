'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight, MessageSquare, Shield, Activity, Wallet, Webhook, Server, Code2, CheckCircle2, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { apiConfig } from '@/lib/content-config'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface DeveloperSectionProps {
  locale: string
}

export function DeveloperSection({ locale }: DeveloperSectionProps) {
  const t = useTranslations('developer')
  const isRTL = locale === 'ar'
  const codeRef = useRef(null)
  const isInView = useInView(codeRef, { once: true, margin: '-100px' })
  const [showResponse, setShowResponse] = useState(false)
  const [responseTime, setResponseTime] = useState(0)
  const [activeTab, setActiveTab] = useState('sms')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowResponse(true)
        let time = 0
        const interval = setInterval(() => {
          time += 3
          if (time >= 45) {
            setResponseTime(45)
            clearInterval(interval)
          } else {
            setResponseTime(time)
          }
        }, 30)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tabs = [
    { id: 'sms', label: 'SMS API' },
    { id: 'otp', label: 'OTP API' },
    { id: 'webhooks', label: 'Webhooks' },
    { id: 'smpp', label: 'SMPP' },
  ]

  const endpoints = [
    { icon: MessageSquare, name: t('sendSms') },
    { icon: Shield, name: t('otp') },
    { icon: Activity, name: t('status') },
    { icon: Wallet, name: t('balance') },
    { icon: Webhook, name: t('webhooks') },
    { icon: Server, name: t('smpp') },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left - Content */}
            <FadeUp className={isRTL ? 'lg:order-2' : ''}>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20">
                <Code2 className="h-4 w-4 text-accent-orange" />
                <span className="text-sm font-medium text-accent-orange">Developer First</span>
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t('title')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t('subtitle')}
              </p>

              {/* API Endpoints */}
              <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {endpoints.map((endpoint, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2.5 transition-all hover:border-primary/30 hover:shadow-md cursor-default group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <endpoint.icon className="h-4 w-4 text-primary shrink-0 group-hover:text-secondary transition-colors" />
                    <span className="text-sm font-medium text-card-foreground truncate">{endpoint.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="group transition-all hover:-translate-y-0.5">
                  <Link href={`/${locale}/api-docs`}>
                    {t('viewDocs')}
                    <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group transition-all hover:-translate-y-0.5">
                  <Link href={`/${locale}/api-docs#quickstart`}>
                    Quick Start Guide
                  </Link>
                </Button>
              </div>
            </FadeUp>

            {/* Right - Code Card */}
            <motion.div 
              ref={codeRef}
              className={isRTL ? 'lg:order-1' : ''}
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-border bg-[#0f0f1a] shadow-2xl overflow-hidden">
                {/* Tab bar */}
                <div className="flex items-center gap-1 px-4 py-3 border-b border-white/10 bg-[#1a1a2e]">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        activeTab === tab.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Terminal Header */}
                <div className="flex items-center justify-between gap-2 px-5 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="h-2.5 w-2.5 rounded-full bg-accent-pink/80"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="h-2.5 w-2.5 rounded-full bg-secondary/80"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="h-2.5 w-2.5 rounded-full bg-accent/80"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <span className="ml-3 text-xs text-white/40 font-mono">api-request.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {apiConfig.isSampleEndpoint && (
                      <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded">
                        {t('sampleRequest')}
                      </span>
                    )}
                    <button 
                      onClick={handleCopy}
                      className="text-white/30 hover:text-white/60 transition-colors"
                    >
                      {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Code */}
                <div className="p-5 overflow-x-auto">
                  <pre className="text-sm font-mono">
                    <code className="text-white/90">
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1 }}>
                        <span className="text-white/40">{`// ${t('codeComment')}`}</span>{'\n'}
                      </motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
                        <span className="text-accent-pink">const</span> response <span className="text-white/50">=</span> <span className="text-accent-pink">await</span> <span className="text-secondary">fetch</span><span className="text-white/50">(</span>{'\n'}
                      </motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
                        <span className="text-accent">  {`"${apiConfig.baseUrl}${apiConfig.smsEndpoint}"`}</span><span className="text-white/50">,</span>{'\n'}
                      </motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
                        <span className="text-white/50">  {'{'}</span>{'\n'}
                        <span className="text-white/70">    method</span><span className="text-white/50">:</span> <span className="text-accent">{'"POST"'}</span><span className="text-white/50">,</span>{'\n'}
                      </motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
                        <span className="text-white/70">    headers</span><span className="text-white/50">:</span> <span className="text-white/50">{'{'}</span>{'\n'}
                        <span className="text-white/70">      {'"Authorization"'}</span><span className="text-white/50">:</span> <span className="text-accent">{'"Bearer $API_KEY"'}</span><span className="text-white/50">,</span>{'\n'}
                        <span className="text-white/70">      {'"Content-Type"'}</span><span className="text-white/50">:</span> <span className="text-accent">{'"application/json"'}</span>{'\n'}
                        <span className="text-white/50">    {'}'}</span><span className="text-white/50">,</span>{'\n'}
                      </motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
                        <span className="text-white/70">    body</span><span className="text-white/50">:</span> <span className="text-secondary">JSON</span><span className="text-white/50">.</span><span className="text-secondary">stringify</span><span className="text-white/50">(</span><span className="text-white/50">{'{'}</span>{'\n'}
                        <span className="text-white/70">      to</span><span className="text-white/50">:</span> <span className="text-accent">{'"966512345678"'}</span><span className="text-white/50">,</span>{'\n'}
                        <span className="text-white/70">      message</span><span className="text-white/50">:</span> <span className="text-accent">{'"Your code is 123456"'}</span><span className="text-white/50">,</span>{'\n'}
                        <span className="text-white/70">      sender_id</span><span className="text-white/50">:</span> <span className="text-accent">{'"COMPANY"'}</span>{'\n'}
                        <span className="text-white/50">    {'}'}</span><span className="text-white/50">)</span>{'\n'}
                        <span className="text-white/50">  {'}'}</span>{'\n'}
                        <span className="text-white/50">)</span><span className="text-white/50">;</span>
                      </motion.span>
                    </code>
                  </pre>
                </div>

                {/* Response preview */}
                <motion.div 
                  className="px-5 py-4 border-t border-white/10 bg-[#0d0d14]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={showResponse ? { opacity: 1, height: 'auto' } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        <span className="text-accent font-medium">200 OK</span>
                      </span>
                      <span className="text-white/30">|</span>
                      <span className="text-white/50">{responseTime}ms</span>
                    </div>
                    <motion.div
                      className="flex items-center gap-1"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="h-3 w-3 text-accent" />
                      <span className="text-[10px] text-accent">Live</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
