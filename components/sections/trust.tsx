'use client'

import { useTranslations } from 'next-intl'
import { Activity, Shield, Phone, Award, IdCard, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

interface TrustSectionProps {
  locale: string
}

export function TrustSection({ locale }: TrustSectionProps) {
  const t = useTranslations('trust')

  const trustItems = [
    { 
      icon: Activity, 
      title: t('uptime'),
      desc: t('uptimeDesc'),
      accentColor: '#61C5BA', // teal - for uptime/success
    },
    { 
      icon: Shield, 
      title: t('sla'),
      desc: t('slaDesc'),
      accentColor: '#492E51', // purple - brand
    },
    { 
      icon: Phone, 
      title: t('whatsapp'),
      desc: t('whatsappDesc'),
      accentColor: '#61C5BA', // teal
    },
    { 
      icon: Award, 
      title: t('compliance'),
      desc: t('complianceDesc'),
      accentColor: '#FDBF30', // yellow - premium
    },
    { 
      icon: IdCard, 
      title: t('senderId'),
      desc: t('senderIdDesc'),
      accentColor: '#492E51', // purple
    },
    { 
      icon: BarChart3, 
      title: t('visibility'),
      desc: t('visibilityDesc'),
      accentColor: '#61C5BA', // teal - for visibility
    },
  ]

  return (
    <section className="relative -mt-16 lg:-mt-20 z-10 pb-12 lg:pb-16">
      {/* Gradient background transition from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="container relative mx-auto px-4">
        {/* Premium floating cards container */}
        <motion.div 
          className="relative rounded-2xl lg:rounded-3xl bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/10 p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 pointer-events-none" />
          
          {/* Cards grid */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              >
                <motion.div 
                  className="group relative flex flex-col items-center text-center rounded-xl lg:rounded-2xl bg-gradient-to-b from-white to-muted/30 dark:from-card dark:to-muted/10 border border-border/40 p-4 lg:p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg cursor-default"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: item.accentColor, opacity: 0 }}
                  />
                  <style jsx>{`
                    .group:hover > div:first-child {
                      opacity: 0.15 !important;
                    }
                  `}</style>
                  
                  {/* Icon container */}
                  <motion.div 
                    className="relative mb-3 flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: `${item.accentColor}15`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon 
                      className="h-5 w-5 lg:h-5.5 lg:w-5.5 transition-colors duration-300" 
                      style={{ color: item.accentColor }}
                    />
                  </motion.div>
                  
                  {/* Title */}
                  <span className="relative text-xs lg:text-sm font-semibold text-foreground leading-tight">
                    {item.title}
                  </span>
                  
                  {/* Description */}
                  <span className="relative text-[10px] lg:text-xs text-muted-foreground mt-1 leading-relaxed">
                    {item.desc}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
