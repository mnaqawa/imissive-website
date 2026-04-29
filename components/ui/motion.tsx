'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion'

// Respect reduced motion preference
const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])
  
  return reducedMotion
}

// Fade up animation for scroll reveal
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Staggered children animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Fade in animation
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Scale up animation for cards
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Motion wrapper for scroll reveal
interface MotionDivProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
}

export function FadeUp({ children, className, delay = 0, once = true }: MotionDivProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0, once = true }: MotionDivProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut', delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleUp({ children, className, delay = 0, once = true }: MotionDivProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for children animations
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, once = true }: StaggerContainerProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item to be used inside StaggerContainer
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated counter for statistics
interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

export function AnimatedCounter({ value, className, duration = 2 }: AnimatedCounterProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  // Extract numeric value and suffix
  const numericMatch = value.match(/^([<>]?)(\d+\.?\d*)(.*?)$/)
  const prefix = numericMatch?.[1] || ''
  const numericValue = parseFloat(numericMatch?.[2] || '0')
  const suffix = numericMatch?.[3] || ''
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 100,
    duration: duration * 1000
  })
  const displayValue = useTransform(springValue, (v) => {
    if (suffix.includes('%') || suffix.includes('.')) {
      return `${prefix}${v.toFixed(1)}${suffix}`
    }
    return `${prefix}${Math.round(v)}${suffix}`
  })
  
  const [displayText, setDisplayText] = useState(reducedMotion ? value : `${prefix}0${suffix}`)
  
  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(value)
      return
    }
    
    if (isInView) {
      motionValue.set(numericValue)
    }
  }, [isInView, numericValue, motionValue, reducedMotion, value])
  
  useEffect(() => {
    if (reducedMotion) return
    
    const unsubscribe = displayValue.on('change', (v) => {
      setDisplayText(v)
    })
    return unsubscribe
  }, [displayValue, reducedMotion])
  
  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  )
}

// Floating animation for dashboard elements
export function FloatingElement({ 
  children, 
  className,
  duration = 3,
  y = 10
}: { 
  children: React.ReactNode
  className?: string
  duration?: number
  y?: number
}) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      animate={{ 
        y: [-y/2, y/2, -y/2],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Pulse animation for status indicators
export function PulseElement({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string
}) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated progress bar
interface AnimatedProgressProps {
  value: number
  className?: string
  barClassName?: string
  duration?: number
}

export function AnimatedProgress({ value, className, barClassName, duration = 1.5 }: AnimatedProgressProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isInView && !reducedMotion ? `${value}%` : `${value}%` }}
        transition={{ duration: reducedMotion ? 0 : duration, ease: [0.22, 1, 0.36, 1] }}
        className={barClassName}
      />
    </div>
  )
}

// Animated gradient background
export function AnimatedGradient({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className} />
  }

  return (
    <motion.div
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        backgroundSize: '200% 200%'
      }}
      className={className}
    />
  )
}

// Export motion components for direct use
export { motion, useInView, useMotionValue, useSpring, useTransform }
