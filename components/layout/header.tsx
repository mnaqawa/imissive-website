'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  MessageSquare, 
  Phone, 
  Shield, 
  Bot, 
  Building2, 
  Landmark, 
  ShoppingCart, 
  UtensilsCrossed, 
  Heart, 
  Briefcase,
  Server,
  Activity,
  Route,
  Settings,
  Code2,
  Webhook,
  Link2,
  BookOpen,
  HelpCircle,
  Headphones,
  Users,
  Star,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'

interface HeaderProps {
  locale: string
}

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('nav')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isRTL = locale === 'ar'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation structure - routes point to existing pages or why-us anchors
  // TODO: Create dedicated platform sub-pages before production if needed
  const platformItems = [
    { href: `/${locale}/why-us#infrastructure`, label: 'Messaging Infrastructure', icon: Server, desc: 'High-availability message delivery' },
    { href: `/${locale}/why-us#governance`, label: 'Sender Governance', icon: Shield, desc: 'Sender ID management & compliance' },
    { href: `/${locale}/why-us#reporting`, label: 'Delivery Reporting', icon: Activity, desc: 'Real-time delivery analytics' },
    { href: `/${locale}/why-us#routing`, label: 'Routing & Failover', icon: Route, desc: 'Intelligent message routing' },
    { href: `/${locale}/why-us#enterprise`, label: 'Enterprise Controls', icon: Settings, desc: 'Permissions & governance' },
  ]

  const channelItems = [
    { href: `/${locale}/channels/sms`, label: 'SMS Messaging', icon: MessageSquare, desc: 'High-throughput SMS delivery' },
    { href: `/${locale}/channels/otp`, label: 'OTP & Authentication', icon: Shield, desc: 'Secure OTP verification' },
    { href: `/${locale}/channels/whatsapp`, label: 'WhatsApp Business API', icon: Phone, desc: 'Business messaging integration' },
    { href: `/${locale}/channels/chatbot`, label: 'ChatBot Automation', icon: Bot, desc: 'AI-powered conversations' },
    { href: `/${locale}/api-docs`, label: 'API & SMPP', icon: Code2, desc: 'Developer integration' },
  ]

  const solutionItems = [
    { href: `/${locale}/solutions/banking`, label: 'Banking & Finance', icon: Landmark, desc: 'Secure financial messaging' },
    { href: `/${locale}/solutions/government`, label: 'Government & Public Sector', icon: Building2, desc: 'Citizen communication' },
    { href: `/${locale}/solutions/retail`, label: 'Retail & E-commerce', icon: ShoppingCart, desc: 'Customer engagement' },
    { href: `/${locale}/solutions/food-delivery`, label: 'Food & Delivery', icon: UtensilsCrossed, desc: 'Order notifications' },
    { href: `/${locale}/solutions/healthcare`, label: 'Healthcare', icon: Heart, desc: 'Patient communication' },
    { href: `/${locale}/solutions/enterprise`, label: 'Enterprise Operations', icon: Briefcase, desc: 'Large-scale messaging' },
  ]

  const developerItems = [
    { href: `/${locale}/api-docs`, label: 'API Docs', icon: BookOpen, desc: 'Complete API reference' },
    { href: `/${locale}/api-docs#sms`, label: 'SMS API', icon: MessageSquare, desc: 'Send SMS programmatically' },
    { href: `/${locale}/api-docs#otp`, label: 'OTP API', icon: Shield, desc: 'OTP verification endpoints' },
    { href: `/${locale}/api-docs#webhooks`, label: 'Webhooks', icon: Webhook, desc: 'Event notifications' },
    { href: `/${locale}/api-docs#smpp`, label: 'SMPP Connectivity', icon: Link2, desc: 'Enterprise SMPP v3.4' },
  ]

  // Resources navigation - Blog and Case Studies removed until content is ready
  const resourceItems = [
    { href: `/${locale}/api-docs#faq`, label: 'FAQs', icon: HelpCircle, desc: 'Common questions' },
    { href: `/${locale}/contact`, label: 'Contact Support', icon: Headphones, desc: 'Get help from our team' },
  ]

  const companyItems = [
    { href: `/${locale}/about`, label: 'About iMissive', icon: Users, desc: 'Our story & mission' },
    { href: `/${locale}/why-us`, label: 'Why iMissive', icon: Star, desc: 'Our differentiators' },
    { href: `/${locale}/contact`, label: 'Contact', icon: Mail, desc: 'Get in touch' },
  ]

  const NavDropdown = ({ 
    trigger, 
    items, 
    columns = 1 
  }: { 
    trigger: string
    items: typeof platformItems
    columns?: number 
  }) => (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "h-10 px-3 text-[13px] font-medium bg-transparent transition-all duration-200",
          scrolled 
            ? "text-foreground/70 hover:text-foreground hover:bg-transparent data-[state=open]:text-foreground" 
            : "text-white/70 hover:text-white hover:bg-transparent data-[state=open]:text-white"
        )}
      >
        {trigger}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className={cn(
          "grid gap-1 p-3",
          columns === 2 ? "w-[480px] grid-cols-2" : "w-[280px] grid-cols-1"
        )}>
          {items.map((item) => (
            <li key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className="group flex items-start gap-3 select-none rounded-lg p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.label}</div>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.desc}</p>
                  </div>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center group shrink-0">
          <Image
            src="/images/imissive-logo.png"
            alt="iMissive"
            width={160}
            height={40}
            className={cn(
              "h-8 lg:h-9 w-auto transition-all duration-300 group-hover:opacity-90",
              scrolled ? "" : "brightness-0 invert"
            )}
            priority
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className={cn("gap-0", isRTL && 'flex-row-reverse')}>
              <NavDropdown trigger="Platform" items={platformItems} />
              <NavDropdown trigger="Channels" items={channelItems} />
              <NavDropdown trigger="Solutions" items={solutionItems} columns={2} />
              <NavDropdown trigger="Developers" items={developerItems} />
              <NavDropdown trigger="Resources" items={resourceItems} />
              <NavDropdown trigger="Company" items={companyItems} />
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-3 shrink-0">
          {/* Language Switcher - Hidden for English-only launch */}
          {!ENGLISH_ONLY_LAUNCH && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn(
                    "gap-1.5 h-9 px-2.5 transition-all duration-200",
                    scrolled 
                      ? "text-foreground/60 hover:text-foreground hover:bg-transparent" 
                      : "text-white/60 hover:text-white hover:bg-transparent"
                  )}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">{locale === 'en' ? 'EN' : 'AR'}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-28">
                <DropdownMenuItem asChild className="cursor-pointer text-sm">
                  <Link href={pathname.replace(`/${locale}`, '/en')}>English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer text-sm">
                  <Link href={pathname.replace(`/${locale}`, '/ar')}>العربية</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "h-9 px-4 text-[13px] font-medium transition-all duration-200",
              scrolled 
                ? "text-foreground/70 hover:text-foreground hover:bg-transparent" 
                : "text-white/70 hover:text-white hover:bg-transparent"
            )}
            asChild
          >
            <a href="https://sms.imissive.com" target="_blank" rel="noopener noreferrer">
              {t('login')}
            </a>
          </Button>

          <Button 
            size="sm" 
            className="h-9 px-5 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-[13px] font-medium shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" 
            asChild
          >
            <Link href={`/${locale}/contact`}>
              {t('getStarted')}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={cn(
            "lg:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors",
            scrolled 
              ? "text-foreground hover:bg-accent/50" 
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Platform */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Platform</div>
              <div className="grid gap-1">
                {platformItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-lg text-sm text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Channels */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Channels</div>
              <div className="grid grid-cols-2 gap-1">
                {channelItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-lg text-sm text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">Solutions</div>
              <div className="grid grid-cols-2 gap-1">
                {solutionItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-lg text-sm text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company & Resources */}
            <div className="space-y-2 pt-2 border-t border-border/50">
              {companyItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 p-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language & Actions */}
            {!ENGLISH_ONLY_LAUNCH && (
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <Link
                  href={pathname.replace(`/${locale}`, locale === 'en' ? '/ar' : '/en')}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Globe className="h-4 w-4" />
                  {locale === 'en' ? 'العربية' : 'English'}
                </Link>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-3 border-t border-border/50">
              <Button variant="outline" asChild className="w-full h-10">
                <a href="https://sms.imissive.com" target="_blank" rel="noopener noreferrer">
                  {t('login')}
                </a>
              </Button>
              <Button className="w-full h-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium" asChild>
                <Link href={`/${locale}/contact`} onClick={() => setMobileMenuOpen(false)}>
                  {t('getStarted')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
