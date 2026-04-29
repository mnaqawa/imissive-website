'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { Play, X, MonitorPlay } from 'lucide-react'
import { FadeUp, motion } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'

interface VideoSectionProps {
  locale: string
}

export function VideoSection({ locale }: VideoSectionProps) {
  const t = useTranslations('video')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle keyboard escape to close modal
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, handleEscape])

  return (
    <>
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        {/* Subtle animated background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, rgba(253, 191, 48, 0.2) 0%, transparent 60%)',
              'radial-gradient(ellipse at 80% 50%, rgba(97, 197, 186, 0.2) 0%, transparent 60%)',
              'radial-gradient(ellipse at 20% 50%, rgba(253, 191, 48, 0.2) 0%, transparent 60%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container relative mx-auto px-4">
          <FadeUp className="mx-auto max-w-3xl text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/10">
              <MonitorPlay className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Platform Demo</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {t?.('title') || 'See the Platform in Action'}
            </h2>
            <p className="mt-5 text-pretty text-lg text-primary-foreground/70">
              {t?.('subtitle') || 'Watch how iMissive connects enterprise systems, messaging channels, routing, sender governance, and delivery visibility.'}
            </p>
          </FadeUp>

          {/* Video Preview Card */}
          <FadeUp delay={0.15}>
            <div className="mx-auto max-w-4xl">
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-md rounded-2xl" />
                
                {/* Premium glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                />

                {/* Blurred enterprise dashboard preview - subtle and premium */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {/* Soft blur overlay for "out of focus" effect */}
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                  
                  {/* Subtle dashboard wireframe - increased contrast */}
                  <div className="absolute inset-8 rounded-xl border border-white/10 p-4 opacity-80">
                    {/* Top nav hint */}
                    <div className="h-4 mb-4 flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary/30" />
                      <div className="h-2 w-20 rounded bg-white/10" />
                      <div className="h-2 w-14 rounded bg-white/8 ml-auto" />
                    </div>
                    
                    {/* Content grid hint */}
                    <div className="grid grid-cols-4 gap-3 h-[calc(100%-2rem)]">
                      {/* Sidebar hint */}
                      <motion.div 
                        className="col-span-1 rounded-lg bg-white/[0.04] p-2"
                        animate={{ opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="h-2.5 rounded bg-white/8 mb-2" />
                        ))}
                      </motion.div>
                      
                      {/* Main content hint */}
                      <div className="col-span-3 space-y-3">
                        {/* Stats row hint */}
                        <div className="grid grid-cols-3 gap-2">
                          {[0, 1, 2].map((i) => (
                            <motion.div 
                              key={i}
                              className="h-14 rounded-lg bg-white/[0.04] flex flex-col items-center justify-center"
                              animate={{ opacity: [0.4, 0.6, 0.4] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                            >
                              <div className="h-2 w-8 rounded bg-secondary/20 mb-1" />
                              <div className="h-1.5 w-12 rounded bg-white/8" />
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Chart area hint */}
                        <motion.div 
                          className="flex-1 h-28 rounded-lg bg-white/[0.04] flex items-end justify-around p-4 gap-1.5"
                          animate={{ opacity: [0.4, 0.6, 0.4] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          {[40, 65, 35, 75, 50, 45, 70].map((h, i) => (
                            <motion.div 
                              key={i}
                              className="w-full rounded-t bg-gradient-to-t from-secondary/25 to-secondary/10"
                              style={{ height: `${h}%` }}
                              animate={{ scaleY: [0.95, 1, 0.95] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    className="relative"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {/* Pulse rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-secondary/30"
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-secondary/30"
                      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                    />
                    
                    {/* Play button */}
                    <motion.div 
                      className="relative h-20 w-20 rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/40 group-hover:shadow-secondary/60 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="h-8 w-8 text-secondary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Video duration badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/90 text-sm font-medium flex items-center gap-2">
                  <MonitorPlay className="h-3.5 w-3.5" />
                  {t?.('duration') || '2:30'}
                </div>
              </motion.div>

              {/* Caption with placeholder notice */}
              <div className="text-center mt-4">
                <p className="text-sm text-primary-foreground/50">
                  {t?.('caption') || 'Click to watch the platform overview'}
                </p>
                <p className="text-[10px] text-primary-foreground/30 mt-1 italic">
                  Product video placeholder
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <motion.div
            className="relative w-full max-w-5xl mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video modal"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Video placeholder */}
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary via-primary/95 to-[#2a1a35] border border-white/10 flex flex-col items-center justify-center overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(253,191,48,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 70%, rgba(97,197,186,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 30%, rgba(253,191,48,0.3) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <div className="relative text-center p-8">
                <motion.div 
                  className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="h-10 w-10 text-white/60" />
                </motion.div>
                <h3 id="video-modal-title" className="text-xl font-semibold text-white mb-2">
                  {t?.('comingSoon') || 'Video Coming Soon'}
                </h3>
                <p className="text-white/50 max-w-md mx-auto">
                  {t?.('comingSoonDesc') || 'Our platform demo video is being prepared. Check back soon for an in-depth look at iMissive.'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}


