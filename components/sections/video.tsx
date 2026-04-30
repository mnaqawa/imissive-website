'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
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
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
      // Pause the background video when modal opens
      if (videoRef.current) {
        videoRef.current.pause()
      }
    } else {
      // Resume the background video when modal closes (if in viewport)
      if (videoRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        if (isInViewport) {
          videoRef.current.play().catch(() => {})
        }
      }
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, handleEscape])

  // Autoplay video when section enters viewport using IntersectionObserver
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isModalOpen) {
            video.play().catch(() => {
              // Autoplay may be blocked, which is fine
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.3, // Start playing when 30% of video is visible
        rootMargin: '0px'
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [isModalOpen])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

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
              <span className="text-sm font-medium text-secondary">Brand Film</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {t?.('title') || 'Powering Critical Communication'}
            </h2>
            <p className="mt-5 text-pretty text-lg text-primary-foreground/70">
              {t?.('subtitle') || 'A cinematic look at the reliability, security, and scale behind modern enterprise communication.'}
            </p>
          </FadeUp>

          {/* Video Preview Card */}
          <FadeUp delay={0.15}>
            <div className="mx-auto max-w-4xl" ref={containerRef}>
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                onClick={handleOpenModal}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                role="button"
                tabIndex={0}
                aria-label="Play iMissive platform video"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleOpenModal()
                  }
                }}
              >
                {/* Subtle border only - no overlay blocking video */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl z-10 pointer-events-none" />
                
                {/* Premium glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0"
                />

                {/* Actual Video - Autoplays muted on scroll */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  src="/videos/imissive-platform-demo.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="iMissive platform video"
                />

                {/* Play button - only visible on hover/focus */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                  <motion.div 
                    className="relative h-16 w-16 rounded-full bg-secondary/90 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="h-6 w-6 text-secondary-foreground ml-0.5" fill="currentColor" />
                  </motion.div>
                </div>

              </motion.div>
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

            {/* Video in modal with controls */}
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <video
                ref={modalVideoRef}
                className="w-full h-full object-contain"
                src="/videos/imissive-platform-demo.mp4"
                controls
                muted
                autoPlay
                playsInline
                preload="metadata"
                aria-label="iMissive platform video"
              >
                <track kind="captions" label="English" />
              </video>
            </div>

            {/* Modal title for accessibility */}
            <h3 id="video-modal-title" className="sr-only">
              iMissive Platform Demo Video
            </h3>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
