'use client'

import { useTranslations } from 'next-intl'
import { Clock, Route, Eye, IdCard, ShieldAlert, AlertTriangle, Search, BarChart3, CheckCircle2 } from 'lucide-react'
import { FadeUp, motion, useInView } from '@/components/ui/motion'
import { useRef } from 'react'

interface ProblemSectionProps {
  locale: string
}

export function ProblemSection({ locale }: ProblemSectionProps) {
  const t = useTranslations('problem')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isRTL = locale === 'ar'

  const problems = [
    {
      icon: Clock,
      title: t('otp'),
      desc: t('otpDesc'),
      risk: 'Critical',
    },
    {
      icon: Route,
      title: t('routing'),
      desc: t('routingDesc'),
      risk: 'High',
    },
    {
      icon: Eye,
      title: t('visibility'),
      desc: t('visibilityDesc'),
      risk: 'High',
    },
    {
      icon: IdCard,
      title: t('senderId'),
      desc: t('senderIdDesc'),
      risk: 'Critical',
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical': return 'bg-[#E0357C]/15 text-[#E0357C] border-[#E0357C]/30'
      case 'High': return 'bg-[#FDBF30]/15 text-[#FDBF30] border-[#FDBF30]/30'
      default: return 'bg-white/10 text-white/60 border-white/20'
    }
  }

  // Risk-to-control flow steps
  const flowSteps = [
    { icon: AlertTriangle, label: 'Failure', color: '#E0357C' },
    { icon: Search, label: 'Detection', color: '#FDBF30' },
    { icon: Route, label: 'Routing Control', color: '#FDBF30' },
    { icon: BarChart3, label: 'Delivery Visibility', color: '#61C5BA' },
    { icon: CheckCircle2, label: 'Governance', color: '#61C5BA' },
  ]

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" ref={ref}>
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1020] via-[#2a1a30] to-[#1f1528]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Warning accent glows - subtle */}
      <motion.div 
        className="absolute top-32 left-20 h-72 w-72 rounded-full bg-[#E0357C]/8 blur-[100px]"
        animate={{ 
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 right-20 h-80 w-80 rounded-full bg-[#FDBF30]/6 blur-[120px]"
        animate={{ 
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <FadeUp className="mx-auto max-w-4xl text-center mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#E0357C]/10 border border-[#E0357C]/20"
            animate={isInView ? { 
              boxShadow: ['0 0 30px rgba(224,53,124,0)', '0 0 30px rgba(224,53,124,0.15)', '0 0 30px rgba(224,53,124,0)']
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ShieldAlert className="h-4 w-4 text-[#E0357C]" />
            <span className="text-sm font-medium text-[#E0357C]">Infrastructure Risk Assessment</span>
          </motion.div>
          
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] leading-tight">
            {t('title')}
            <span className="block mt-1 bg-gradient-to-r from-[#E0357C] via-[#FDBF30] to-[#E0357C] bg-clip-text text-transparent">
              They are infrastructure risks.
            </span>
          </h2>
          
          <p className="mt-6 text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </FadeUp>

        {/* Risk Cards - 4 cards in 2x2 grid */}
        <div className="mx-auto max-w-5xl mb-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.div 
                  className="group relative h-full rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/25"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Risk badge */}
                  <div className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${getRiskColor(problem.risk)}`}>
                    {problem.risk}
                  </div>
                  
                  {/* Icon with subtle pulse */}
                  <div className="relative mb-5">
                    <motion.div 
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0357C]/10 text-[#E0357C]"
                      animate={isInView ? {
                        boxShadow: ['0 0 0 rgba(224,53,124,0)', '0 0 20px rgba(224,53,124,0.2)', '0 0 0 rgba(224,53,124,0)']
                      } : {}}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <problem.icon className="h-6 w-6" />
                    </motion.div>
                  </div>
                  
                  <h3 className={`text-base font-semibold text-white/95 mb-2.5 ${isRTL ? 'pl-16' : 'pr-16'}`}>
                    {problem.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {problem.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Risk-to-Control Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Risk Mitigation Flow</p>
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {/* Connection line - desktop only */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#E0357C]/60 via-[#FDBF30]/60 to-[#61C5BA]/60 -translate-y-1/2" />
            
            {/* Animated dots on the line */}
            <motion.div
              className="hidden lg:block absolute top-1/2 h-2 w-2 rounded-full bg-[#61C5BA]"
              style={{ left: '10%' }}
              animate={{
                left: ['10%', '90%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-[#1a1020]"
                  style={{ borderColor: step.color }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon className="h-6 w-6" style={{ color: step.color }} />
                </motion.div>
                <span className="mt-3 text-xs font-medium text-white/70 whitespace-nowrap">{step.label}</span>
                
                {/* Arrow for mobile - between items */}
                {index < flowSteps.length - 1 && (
                  <div className="lg:hidden my-2 text-white/20">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 9L10 5H2L6 9Z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
