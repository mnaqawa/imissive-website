import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { 
  Target, Eye, ShieldCheck, Lightbulb, Users, Award, Building,
  MessageSquare, ShieldAlert, Smartphone, Bot, Code, BarChart3,
  ArrowRight, MapPin, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.about
  
  return {
    title: isArabic ? 'من نحن | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'آي ميسيف - بنية تحتية للاتصالات المؤسسية للرسائل القصيرة، OTP، واتساب للأعمال، APIs، حوكمة المرسل، وتقارير التسليم في المملكة العربية السعودية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/about` }
        : { 'en': `${SITE_URL}/en/about`, 'ar': `${SITE_URL}/ar/about` },
    },
    openGraph: {
      title: isArabic ? 'من نحن | آي ميسيف' : meta.title,
      description: isArabic 
        ? 'آي ميسيف - بنية تحتية للاتصالات المؤسسية'
        : meta.description,
      url: `${SITE_URL}/${locale}/about`,
      type: 'website',
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')
  const isArabic = locale === 'ar'

  // What We Do services
  const services = isArabic ? [
    { icon: MessageSquare, title: 'رسائل SMS', description: 'بنية تحتية موثوقة للرسائل النصية الجماعية والتنبيهات' },
    { icon: ShieldAlert, title: 'مصادقة OTP', description: 'رموز تحقق آمنة للمصادقة ثنائية العوامل' },
    { icon: Smartphone, title: 'واتساب للأعمال', description: 'تكامل واتساب بيزنس API للتواصل مع العملاء' },
    { icon: Bot, title: 'أتمتة ChatBot', description: 'روبوتات محادثة ذكية لدعم العملاء الآلي' },
    { icon: Code, title: 'تكامل API & SMPP', description: 'واجهات برمجة مرنة للتكامل السلس مع الأنظمة' },
    { icon: BarChart3, title: 'تقارير التسليم', description: 'رؤية شاملة لحالة التسليم والتحليلات' },
  ] : [
    { icon: MessageSquare, title: 'SMS Messaging', description: 'Reliable infrastructure for bulk messaging and alerts' },
    { icon: ShieldAlert, title: 'OTP Authentication', description: 'Secure verification codes for two-factor authentication' },
    { icon: Smartphone, title: 'WhatsApp Business', description: 'WhatsApp Business API integration for customer communication' },
    { icon: Bot, title: 'ChatBot Automation', description: 'Intelligent chatbots for automated customer support' },
    { icon: Code, title: 'API & SMPP Integration', description: 'Flexible APIs for seamless system integration' },
    { icon: BarChart3, title: 'Delivery Reporting', description: 'Comprehensive delivery status visibility and analytics' },
  ]

  // How We Work workflow
  const workflow = isArabic ? [
    { step: '01', title: 'فهم المتطلبات', description: 'تحليل احتياجات الاتصال' },
    { step: '02', title: 'تهيئة القنوات', description: 'إعداد قنوات الرسائل المناسبة' },
    { step: '03', title: 'حوكمة المرسل', description: 'تفعيل ضوابط المرسل والامتثال' },
    { step: '04', title: 'تكامل APIs', description: 'ربط الأنظمة عبر API/SMPP' },
    { step: '05', title: 'مراقبة التسليم', description: 'تتبع وتحليل أداء الرسائل' },
  ] : [
    { step: '01', title: 'Understand Requirements', description: 'Analyze communication needs' },
    { step: '02', title: 'Configure Channels', description: 'Set up appropriate messaging channels' },
    { step: '03', title: 'Sender Governance', description: 'Activate sender controls and compliance' },
    { step: '04', title: 'Integrate APIs', description: 'Connect systems via API/SMPP' },
    { step: '05', title: 'Monitor Delivery', description: 'Track and analyze message performance' },
  ]

  // Values
  const values = [
    {
      icon: ShieldCheck,
      title: t('reliability'),
      description: t('reliabilityDesc'),
      color: 'bg-[#FDBF30]/10 text-[#FDBF30]',
    },
    {
      icon: Award,
      title: t('compliance'),
      description: t('complianceDesc'),
      color: 'bg-[#61C5BA]/10 text-[#61C5BA]',
    },
    {
      icon: Lightbulb,
      title: t('innovation'),
      description: t('innovationDesc'),
      color: 'bg-[#F68C20]/10 text-[#F68C20]',
    },
    {
      icon: Users,
      title: t('partnership'),
      description: t('partnershipDesc'),
      color: 'bg-[#E0357C]/10 text-[#E0357C]',
    },
  ]

  // Positioning points
  const positioningPoints = isArabic ? [
    'بنية تحتية للرسائل المؤسسية',
    'موثوقية الاتصالات',
    'حوكمة المرسل',
    'رؤية التسليم',
    'تكامل API/SMPP',
    'احتياجات الاتصالات المنظمة وعالية الحجم',
  ] : [
    'Enterprise messaging infrastructure',
    'Communication reliability',
    'Sender governance',
    'Delivery visibility',
    'API/SMPP integration',
    'Regulated and high-volume communication needs',
  ]

  return (
    <>
      {/* Premium Hero */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Building className="h-4 w-4" />
              {isArabic ? 'الشركة' : 'Company'}
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {isArabic ? 'عن آي ميسيف' : 'About iMissive'}
            </h1>
            <p className="mt-6 text-pretty text-lg text-white/75 lg:text-xl">
              {isArabic 
                ? 'مزود بنية تحتية للاتصالات المؤسسية يساعد المؤسسات في إدارة اتصالات العملاء الموثوقة والقابلة للتوسع والمتوافقة عبر الرسائل القصيرة، OTP، واتساب بيزنس، APIs، حوكمة المرسل، وتقارير التسليم.'
                : 'An enterprise communication infrastructure provider helping organizations manage reliable, scalable, and compliant customer communication across SMS, OTP, WhatsApp Business, APIs, sender governance, and delivery reporting.'}
            </p>
          </div>
        </div>
      </section>

      {/* Company Positioning */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#492E51]/20 bg-[#492E51]/5 px-4 py-2 text-sm font-medium text-[#492E51]">
                <Target className="h-4 w-4" />
                {isArabic ? 'تركيزنا' : 'Our Focus'}
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'ما نركز عليه' : 'What We Focus On'}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {isArabic 
                  ? 'آي ميسيف تركز على تقديم حلول اتصالات مؤسسية موثوقة'
                  : 'iMissive focuses on delivering reliable enterprise communication solutions'}
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {positioningPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 rounded-xl border-2 border-border/50 bg-card p-4 transition-all hover:border-[#61C5BA]/50 hover:shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#61C5BA]" />
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FDBF30]/20 bg-[#FDBF30]/10 px-4 py-2 text-sm font-medium text-[#FDBF30]">
              <MessageSquare className="h-4 w-4" />
              {isArabic ? 'خدماتنا' : 'Our Services'}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {isArabic ? 'ما نقدمه' : 'What We Do'}
            </h2>
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const colors = ['bg-[#FDBF30]', 'bg-[#61C5BA]', 'bg-[#F68C20]', 'bg-[#E0357C]', 'bg-[#492E51]', 'bg-[#61C5BA]']
              return (
                <Card key={index} className="border-2 border-border/50 bg-card transition-all hover:border-[#FDBF30]/50 hover:shadow-md">
                  <CardHeader>
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${colors[index % colors.length]} text-white`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-card-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#61C5BA]/20 bg-[#61C5BA]/10 px-4 py-2 text-sm font-medium text-[#61C5BA]">
              <ArrowRight className="h-4 w-4" />
              {isArabic ? 'آلية العمل' : 'Our Process'}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {isArabic ? 'كيف نعمل' : 'How We Work'}
            </h2>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center gap-4">
              {workflow.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex flex-col items-center rounded-xl border-2 border-border/50 bg-card p-5 text-center transition-all hover:border-[#61C5BA]/50 hover:shadow-sm min-w-[160px]">
                    <span className="text-2xl font-bold text-[#492E51]">{item.step}</span>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground/50 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="border-2 border-border/50 bg-card">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#492E51] text-white">
                  <Target className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">{t('missionTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('missionDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 bg-card">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#61C5BA] text-white">
                  <Eye className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">{t('visionTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('visionDesc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F68C20]/20 bg-[#F68C20]/10 px-4 py-2 text-sm font-medium text-[#F68C20]">
              <Award className="h-4 w-4" />
              {isArabic ? 'قيمنا' : 'Our Values'}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {t('valuesTitle')}
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-border/50 bg-card text-center transition-all hover:shadow-md">
                <CardContent className="pt-6">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${value.color}`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E0357C]/20 bg-[#E0357C]/10 px-4 py-2 text-sm font-medium text-[#E0357C]">
              <MapPin className="h-4 w-4" />
              {isArabic ? 'تواجدنا الإقليمي' : 'Regional Presence'}
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              {isArabic ? 'مقرنا في الرياض' : 'Based in Riyadh'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic 
                ? 'مقرها في الرياض، آي ميسيف تدعم المؤسسات ببنية تحتية للاتصالات المؤسسية مصممة لمتطلبات الأعمال والتنظيمات الإقليمية.'
                : 'Based in Riyadh, iMissive supports organizations with enterprise communication infrastructure designed for regional business and regulatory requirements.'}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-border/50 bg-card px-6 py-4">
              <MapPin className="h-5 w-5 text-[#E0357C]" />
              <span className="font-medium text-foreground">
                {isArabic ? 'المملكة العربية السعودية، الرياض، شارع العليا' : 'Saudi Arabia, Riyadh, Olaya St.'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-cta-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {isArabic ? 'هل أنت مستعد لبناء اتصالات عملاء موثوقة؟' : 'Ready to build reliable customer communication?'}
            </h2>
            <p className="mt-6 text-lg text-white/75">
              {isArabic 
                ? 'تواصل مع آي ميسيف لمناقشة متطلبات الرسائل المؤسسية، OTP، واتساب، API، وتقارير التسليم.'
                : 'Contact iMissive to discuss your enterprise messaging, OTP, WhatsApp, API, and reporting requirements.'}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 font-semibold px-8 py-6 text-base" 
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {isArabic ? 'تواصل مع المبيعات' : 'Contact Sales'}
                </Link>
              </Button>
              <a 
                href={`/${locale}/api-docs`}
                className="inline-flex h-auto items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {isArabic ? 'استكشف وثائق API' : 'Explore API Docs'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
