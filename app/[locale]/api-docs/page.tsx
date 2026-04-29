import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { SITE_URL, pageMetadata, generateFAQSchema } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { Code2, Key, Plug, Package, FileCode, MessageSquare, ShieldCheck, Webhook, Server, AlertTriangle, Clock, ChevronRight, Terminal, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.apiDocs
  
  return {
    title: isArabic ? 'وثائق API | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'وثائق تكامل SMS API و OTP API و Webhooks و SMPP للرسائل المؤسسية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/api-docs`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/api-docs` }
        : { 'en': `${SITE_URL}/en/api-docs`, 'ar': `${SITE_URL}/ar/api-docs` },
    },
    openGraph: {
      title: isArabic ? 'وثائق API | آي ميسيف' : meta.title,
      description: isArabic 
        ? 'وثائق تكامل SMS API و OTP API و Webhooks و SMPP للرسائل المؤسسية'
        : meta.description,
      url: `${SITE_URL}/${locale}/api-docs`,
      type: 'website',
    },
  }
}

export default async function ApiDocsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('api')
  const cta = await getTranslations('cta')
  const isArabic = locale === 'ar'
  
  const sections = [
    {
      id: 'quickstart',
      icon: Zap,
      title: t('quickStart'),
      description: isArabic 
        ? 'ابدأ بإرسال رسالتك الأولى في دقائق'
        : 'Get started sending your first message in minutes',
      color: 'text-[#FDBF30]',
      bgColor: 'bg-[#FDBF30]/10',
    },
    {
      id: 'authentication',
      icon: Key,
      title: t('authentication'),
      description: isArabic
        ? 'تعلم كيفية مصادقة طلبات API الخاصة بك'
        : 'Learn how to authenticate your API requests',
      color: 'text-[#61C5BA]',
      bgColor: 'bg-[#61C5BA]/10',
    },
    {
      id: 'sms',
      icon: MessageSquare,
      title: isArabic ? 'SMS API' : 'SMS API',
      description: isArabic
        ? 'إرسال واستقبال الرسائل النصية'
        : 'Send and receive SMS messages',
      color: 'text-[#F68C20]',
      bgColor: 'bg-[#F68C20]/10',
    },
    {
      id: 'otp',
      icon: ShieldCheck,
      title: isArabic ? 'OTP API' : 'OTP API',
      description: isArabic
        ? 'إنشاء والتحقق من رموز OTP'
        : 'Generate and verify OTP codes',
      color: 'text-[#E0357C]',
      bgColor: 'bg-[#E0357C]/10',
    },
    {
      id: 'webhooks',
      icon: Webhook,
      title: isArabic ? 'Webhooks' : 'Webhooks',
      description: isArabic
        ? 'استقبال إشعارات التسليم الفورية'
        : 'Receive real-time delivery notifications',
      color: 'text-[#61C5BA]',
      bgColor: 'bg-[#61C5BA]/10',
    },
    {
      id: 'smpp',
      icon: Server,
      title: isArabic ? 'SMPP' : 'SMPP',
      description: isArabic
        ? 'اتصال SMPP للمؤسسات'
        : 'Enterprise SMPP connectivity',
      color: 'text-[#FDBF30]',
      bgColor: 'bg-[#FDBF30]/10',
    },
    {
      id: 'rate-limits',
      icon: Clock,
      title: isArabic ? 'حدود الاستخدام' : 'Rate Limits',
      description: isArabic
        ? 'فهم حدود API والحصص'
        : 'Understand API limits and quotas',
      color: 'text-[#F68C20]',
      bgColor: 'bg-[#F68C20]/10',
    },
    {
      id: 'errors',
      icon: AlertTriangle,
      title: isArabic ? 'رموز الأخطاء' : 'Error Codes',
      description: isArabic
        ? 'التعامل مع الأخطاء والاستجابات'
        : 'Handle errors and responses',
      color: 'text-[#E0357C]',
      bgColor: 'bg-[#E0357C]/10',
    },
  ]

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="api-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#api-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Terminal className="h-4 w-4 text-[#FDBF30]" />
              <span className="text-sm font-medium text-white/90">
                {isArabic ? 'تكامل المطورين' : 'Developer Integration'}
              </span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {isArabic ? 'وثائق API' : 'API Documentation'}
            </h1>
            <p className="mt-6 text-pretty text-lg text-white/75 lg:text-xl">
              {isArabic 
                ? 'دليل شامل لدمج خدمات SMS و OTP و Webhooks و SMPP من آي ميسيف في تطبيقاتك'
                : 'Comprehensive guide to integrating iMissive SMS, OTP, Webhooks, and SMPP services into your applications'}
            </p>
            
            {/* Quick links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a 
                href="#quickstart" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#FDBF30] px-5 py-2.5 text-sm font-semibold text-[#492E51] transition-all hover:bg-[#FDBF30]/90"
              >
                {isArabic ? 'ابدأ الآن' : 'Quick Start'}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#sms" 
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                SMS API
              </a>
              <a 
                href="#otp" 
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                OTP API
              </a>
              <a 
                href="#smpp" 
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                SMPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="group"
              >
                <Card className="h-full border-2 border-border/60 bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader className="pb-3">
                    <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${section.bgColor} ${section.color} transition-transform group-hover:scale-110`}>
                      <section.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed">
                      {section.description}
                    </CardDescription>
                    <div className="mt-3 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {isArabic ? 'عرض التفاصيل' : 'View details'}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-16 lg:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FDBF30]/10 px-3 py-1">
                <Zap className="h-4 w-4 text-[#FDBF30]" />
                <span className="text-sm font-medium text-[#FDBF30]">Quick Start</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'البداية السريعة' : 'Quick Start'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'أرسل رسالتك الأولى في دقائق معدودة'
                  : 'Send your first message in just a few minutes'}
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-border/60 shadow-sm">
                <CardHeader className="border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">1</div>
                    <CardTitle className="text-lg">{isArabic ? 'الحصول على مفتاح API' : 'Get Your API Key'}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    {isArabic 
                      ? 'سجل دخولك إلى لوحة التحكم واحصل على مفتاح API الخاص بك من قسم الإعدادات.'
                      : 'Log in to your dashboard and retrieve your API key from the Settings section.'}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/60 shadow-sm">
                <CardHeader className="border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">2</div>
                    <CardTitle className="text-lg">{isArabic ? 'إرسال رسالة' : 'Send a Message'}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    {isArabic 
                      ? 'استخدم الكود التالي لإرسال رسالتك الأولى:'
                      : 'Use the following code to send your first message:'}
                  </p>
                  
                  {/* Code block with premium styling */}
                  <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                    <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs font-medium text-white/50">
                        {isArabic ? 'مثال - نقطة نهاية تجريبية' : 'Example - Sample endpoint'}
                      </span>
                    </div>
                    <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`curl -X POST https://api.example.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+966501234567",
    "message": "Hello from iMissive!",
    "sender_id": "MyCompany"
  }'`}
                    </pre>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {isArabic 
                      ? '* استبدل YOUR_API_KEY بمفتاح API الفعلي. عنوان URL الإنتاج يُقدم بعد التعاقد الفني.'
                      : '* Replace YOUR_API_KEY with your actual API key. Production URL provided after onboarding.'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section id="authentication" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#61C5BA]/10 px-3 py-1">
                <Key className="h-4 w-4 text-[#61C5BA]" />
                <span className="text-sm font-medium text-[#61C5BA]">Authentication</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'المصادقة' : 'Authentication'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'جميع طلبات API تتطلب مصادقة عبر Bearer Token'
                  : 'All API requests require authentication via Bearer Token'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'إضافة رأس المصادقة' : 'Adding the Authorization Header'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                  <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                    <span className="text-xs font-medium text-white/70">HTTP Header</span>
                  </div>
                  <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`Authorization: Bearer YOUR_API_KEY`}
                  </pre>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {isArabic 
                    ? 'أضف هذا الرأس إلى جميع طلبات API الخاصة بك. مفاتيح API متاحة من لوحة التحكم.'
                    : 'Include this header in all your API requests. API keys are available from your dashboard.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'أفضل ممارسات الأمان' : 'Security Best Practices'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#61C5BA]" />
                    <span>{isArabic ? 'لا تشارك مفتاح API الخاص بك أبداً' : 'Never share your API key publicly'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#61C5BA]" />
                    <span>{isArabic ? 'استخدم متغيرات البيئة لتخزين المفاتيح' : 'Use environment variables to store keys'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#61C5BA]" />
                    <span>{isArabic ? 'قم بتدوير المفاتيح بانتظام' : 'Rotate keys regularly'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#61C5BA]" />
                    <span>{isArabic ? 'استخدم HTTPS دائماً' : 'Always use HTTPS'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SMS API Section */}
      <section id="sms" className="py-16 lg:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F68C20]/10 px-3 py-1">
                <MessageSquare className="h-4 w-4 text-[#F68C20]" />
                <span className="text-sm font-medium text-[#F68C20]">SMS API</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                SMS API
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'إرسال رسائل نصية فردية أو جماعية'
                  : 'Send single or bulk SMS messages'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{isArabic ? 'إرسال رسالة واحدة' : 'Send Single Message'}</CardTitle>
                  <span className="rounded-md bg-[#F68C20]/10 px-2 py-1 text-xs font-mono font-medium text-[#F68C20]">POST /v1/sms/send</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="request" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الطلب' : 'Request'}
                    </TabsTrigger>
                    <TabsTrigger value="response" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الاستجابة' : 'Response'}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "to": "+966501234567",
  "message": "Your message content here",
  "sender_id": "MyCompany",
  "scheduled_at": "2024-01-15T10:00:00Z" // optional
}`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                        <span className="text-xs font-medium text-green-400">200 OK</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "success": true,
  "message_id": "msg_abc123xyz",
  "status": "queued",
  "credits_used": 1
}`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{isArabic ? 'إرسال رسائل جماعية' : 'Send Bulk Messages'}</CardTitle>
                  <span className="rounded-md bg-[#F68C20]/10 px-2 py-1 text-xs font-mono font-medium text-[#F68C20]">POST /v1/sms/bulk</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="request" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الطلب' : 'Request'}
                    </TabsTrigger>
                    <TabsTrigger value="response" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الاستجابة' : 'Response'}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "messages": [
    { "to": "+966501234567", "message": "Hello User 1" },
    { "to": "+966501234568", "message": "Hello User 2" }
  ],
  "sender_id": "MyCompany"
}`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                        <span className="text-xs font-medium text-green-400">200 OK</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "success": true,
  "batch_id": "batch_xyz789",
  "total_messages": 2,
  "credits_used": 2
}`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OTP API Section */}
      <section id="otp" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E0357C]/10 px-3 py-1">
                <ShieldCheck className="h-4 w-4 text-[#E0357C]" />
                <span className="text-sm font-medium text-[#E0357C]">OTP API</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                OTP API
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'إ��شاء والتحقق من رموز التحقق لمرة واحدة'
                  : 'Generate and verify one-time passwords'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{isArabic ? 'إرسال رمز OTP' : 'Send OTP'}</CardTitle>
                  <span className="rounded-md bg-[#E0357C]/10 px-2 py-1 text-xs font-mono font-medium text-[#E0357C]">POST /v1/otp/send</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="request" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الطلب' : 'Request'}
                    </TabsTrigger>
                    <TabsTrigger value="response" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الاستجابة' : 'Response'}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "phone": "+966501234567",
  "length": 6,           // 4-8 digits
  "expiry": 300,         // seconds (configurable)
  "template": "Your verification code is: {code}"
}`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                        <span className="text-xs font-medium text-green-400">200 OK</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "success": true,
  "otp_id": "otp_abc123",
  "expires_at": "2024-01-15T10:05:00Z"
}`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{isArabic ? 'التحقق من رمز OTP' : 'Verify OTP'}</CardTitle>
                  <span className="rounded-md bg-[#E0357C]/10 px-2 py-1 text-xs font-mono font-medium text-[#E0357C]">POST /v1/otp/verify</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="request" className="w-full">
                  <TabsList className="mb-4 grid w-full grid-cols-2 bg-muted/50">
                    <TabsTrigger value="request" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الطلب' : 'Request'}
                    </TabsTrigger>
                    <TabsTrigger value="response" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
                      {isArabic ? 'الاستجابة' : 'Response'}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="request">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "otp_id": "otp_abc123",
  "code": "123456"
}`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="response">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <span className="text-xs font-medium text-white/70">JSON</span>
                        <span className="text-xs font-medium text-green-400">200 OK</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`{
  "success": true,
  "valid": true,
  "phone": "+966501234567"
}`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Webhooks Section */}
      <section id="webhooks" className="py-16 lg:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#61C5BA]/10 px-3 py-1">
                <Webhook className="h-4 w-4 text-[#61C5BA]" />
                <span className="text-sm font-medium text-[#61C5BA]">Webhooks</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Webhooks
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'استقبل إشعارات فورية عن حالة الرسائل'
                  : 'Receive real-time notifications about message status'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'تكوين Webhook' : 'Webhook Configuration'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {isArabic 
                    ? 'قم بتكوين عنوان URL الخاص بك من لوحة التحكم لاستقبال الإشعارات.'
                    : 'Configure your webhook URL from the dashboard to receive notifications.'}
                </p>
                <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                  <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                    <span className="text-xs font-medium text-white/70">Example Webhook Payload</span>
                  </div>
                  <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`POST https://your-server.com/webhook

{
  "event": "message.delivered",
  "message_id": "msg_abc123xyz",
  "timestamp": "2024-01-15T10:01:23Z",
  "data": {
    "to": "+966501234567",
    "status": "delivered",
    "delivered_at": "2024-01-15T10:01:22Z"
  }
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'أنواع الأحداث' : 'Event Types'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-[#61C5BA]/10 px-2.5 py-1 text-sm font-mono font-medium text-[#61C5BA]">message.queued</code>
                    <span className="text-muted-foreground">{isArabic ? 'الرسالة في قائمة الانتظار' : 'Message queued for delivery'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-[#FDBF30]/10 px-2.5 py-1 text-sm font-mono font-medium text-[#FDBF30]">message.sent</code>
                    <span className="text-muted-foreground">{isArabic ? 'تم إرسال الرسالة' : 'Message sent to carrier'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-green-500/10 px-2.5 py-1 text-sm font-mono font-medium text-green-600">message.delivered</code>
                    <span className="text-muted-foreground">{isArabic ? 'تم تسليم الرسالة' : 'Message delivered to recipient'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-red-500/10 px-2.5 py-1 text-sm font-mono font-medium text-red-500">message.failed</code>
                    <span className="text-muted-foreground">{isArabic ? 'فشل تسليم الرسالة' : 'Message delivery failed'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SMPP Section */}
      <section id="smpp" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FDBF30]/10 px-3 py-1">
                <Server className="h-4 w-4 text-[#FDBF30]" />
                <span className="text-sm font-medium text-[#FDBF30]">SMPP</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'اتصال SMPP' : 'SMPP Connectivity'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'اتصال SMPP v3.4 للمؤسسات ذات الحجم الكبير'
                  : 'Enterprise SMPP v3.4 connectivity for high-volume messaging'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'معلومات الاتصال' : 'Connection Details'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'الخادم' : 'Host'}</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'يُقدم أثناء التعاقد الفني' : 'Provided during onboarding'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'المنفذ' : 'Port'}</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'يُقدم أثناء التعاقد الفني' : 'Provided during onboarding'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">system_id</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'يُقدم أثناء التعاقد الفني' : 'Provided during onboarding'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">password</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'يُقدم أثناء التعاقد الفني' : 'Provided during onboarding'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'الإصدار' : 'Version'}</span>
                    <code className="rounded-md bg-[#FDBF30]/10 px-2.5 py-1 text-sm font-mono font-medium text-[#FDBF30]">SMPP v3.4</code>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'نوع الربط' : 'Bind Type'}</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'حسب تكوين الحساب' : 'Based on account configuration'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'الإنتاجية' : 'Throughput'}</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'حسب الاتفاقية التجارية والفنية' : 'Based on approved commercial and technical configuration'}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="font-medium text-foreground">{isArabic ? 'تقارير التسليم' : 'Delivery Receipts'}</span>
                    <span className="text-sm text-muted-foreground italic">{isArabic ? 'مدعومة عند التفعيل للحساب' : 'Supported when enabled for the account'}</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  {isArabic 
                    ? '* بيانات اعتماد SMPP ومعلومات الاتصال متاحة بعد إتمام التعاقد الفني للعملاء المؤهلين'
                    : '* SMPP credentials and connection details available after technical onboarding for qualified enterprise customers'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'الميزات المدعومة' : 'Supported Features'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#FDBF30]" />
                    <span>{isArabic ? 'دعم Unicode للرسائل العربية' : 'Unicode support for Arabic messages'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#FDBF30]" />
                    <span>{isArabic ? 'الرسائل الطويلة (التقسيم التلقائي)' : 'Long messages (automatic concatenation)'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#FDBF30]" />
                    <span>{isArabic ? 'تقارير التسليم (DLR)' : 'Delivery reports (DLR)'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#FDBF30]" />
                    <span>{isArabic ? 'جدولة الرسائل' : 'Message scheduling'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#FDBF30]" />
                    <span>{isArabic ? 'اتصالات متعددة' : 'Multiple binds'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rate Limits Section */}
      <section id="rate-limits" className="py-16 lg:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F68C20]/10 px-3 py-1">
                <Clock className="h-4 w-4 text-[#F68C20]" />
                <span className="text-sm font-medium text-[#F68C20]">Rate Limits</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'حدود الاستخدام' : 'Rate Limits'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'تعتمد حدود الاستخدام والإنتاجية على تكوين الحساب المعتمد والمسار ونوع المرسل والاتفاقية التجارية'
                  : 'Rate limits and throughput depend on the approved account configuration, route, sender type, and commercial agreement'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'أنواع الحدود' : 'Rate Limit Types'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="shrink-0 font-medium text-foreground">{isArabic ? 'طلبات API' : 'API Requests'}</span>
                    <span className="text-muted-foreground">{isArabic ? 'عدد الطلبات في الثانية/الدقيقة' : 'Requests per second/minute'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="shrink-0 font-medium text-foreground">{isArabic ? 'إنتاجية الرسائل' : 'Message Throughput'}</span>
                    <span className="text-muted-foreground">{isArabic ? 'الرسائل في الثانية/الدقيقة' : 'Messages per second/minute'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="shrink-0 font-medium text-foreground">{isArabic ? 'إنتاجية SMPP' : 'SMPP Throughput'}</span>
                    <span className="text-muted-foreground">{isArabic ? 'تحدد حسب الاتفاقية' : 'Defined per agreement'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="shrink-0 font-medium text-foreground">{isArabic ? 'حدود الحملات' : 'Campaign Batching'}</span>
                    <span className="text-muted-foreground">{isArabic ? 'أقصى عدد مستلمين لكل طلب' : 'Maximum recipients per batch request'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <span className="shrink-0 font-medium text-foreground">{isArabic ? 'حدود الحساب' : 'Account-Level Limits'}</span>
                    <span className="text-muted-foreground">{isArabic ? 'الحد الأقصى اليومي/الشهري' : 'Daily/monthly maximum quotas'}</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  {isArabic 
                    ? '* تواصل مع فريق المبيعات للحصول على تفاصيل الحدود الخ��صة بحسابك'
                    : '* Contact sales for your account-specific limit details'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'رؤوس الاستج��بة' : 'Response Headers'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                  <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                    <span className="text-xs font-medium text-white/70">HTTP Headers</span>
                  </div>
                  <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`X-RateLimit-Limit: <account_limit>
X-RateLimit-Remaining: <remaining_quota>
X-RateLimit-Reset: <reset_timestamp>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Error Codes Section */}
      <section id="errors" className="py-16 lg:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E0357C]/10 px-3 py-1">
                <AlertTriangle className="h-4 w-4 text-[#E0357C]" />
                <span className="text-sm font-medium text-[#E0357C]">Error Codes</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'رموز الأخطاء' : 'Error Codes'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'مرجع رموز الأخطاء الشائعة وكيفية التعامل معها'
                  : 'Reference for common error codes and how to handle them'}
              </p>
            </div>

            <Card className="border-2 border-border/60 shadow-sm mb-6">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'أخطاء HTTP' : 'HTTP Errors'}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-red-500/10 px-2.5 py-1 text-sm font-mono font-bold text-red-500">400</code>
                    <div>
                      <p className="font-medium text-foreground">{isArabic ? 'طلب غير صالح' : 'Bad Request'}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{isArabic ? 'تحقق من صحة البيانات المرسلة' : 'Check the request body for validation errors'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-red-500/10 px-2.5 py-1 text-sm font-mono font-bold text-red-500">401</code>
                    <div>
                      <p className="font-medium text-foreground">{isArabic ? 'غير مصرح' : 'Unauthorized'}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{isArabic ? 'مفتاح API غير صالح أو مفقود' : 'Invalid or missing API key'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-red-500/10 px-2.5 py-1 text-sm font-mono font-bold text-red-500">403</code>
                    <div>
                      <p className="font-medium text-foreground">{isArabic ? 'محظور' : 'Forbidden'}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{isArabic ? 'ليس لديك صلاحية لهذا الإجراء' : 'You do not have permission for this action'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-[#F68C20]/10 px-2.5 py-1 text-sm font-mono font-bold text-[#F68C20]">429</code>
                    <div>
                      <p className="font-medium text-foreground">{isArabic ? 'طلبات كثيرة' : 'Too Many Requests'}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{isArabic ? 'تم تجاوز حد الاستخدام' : 'Rate limit exceeded'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-red-500/10 px-2.5 py-1 text-sm font-mono font-bold text-red-500">500</code>
                    <div>
                      <p className="font-medium text-foreground">{isArabic ? 'خطأ في الخادم' : 'Server Error'}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{isArabic ? 'حاول مرة أخرى لاحقاً' : 'Try again later'}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/60 shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/30">
                <CardTitle className="text-lg">{isArabic ? 'رموز أخطاء الرسائل' : 'Message Error Codes'}</CardTitle>
                <CardDescription>{isArabic ? 'أمثلة على رموز الأخطاء الشائعة' : 'Examples of common error codes'}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-sm font-mono font-medium">INVALID_PHONE</code>
                    <span className="text-muted-foreground">{isArabic ? 'رقم الهاتف غير صالح' : 'Invalid phone number format'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-sm font-mono font-medium">INVALID_SENDER</code>
                    <span className="text-muted-foreground">{isArabic ? 'معرف المرسل غير مصرح' : 'Sender ID not authorized'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-sm font-mono font-medium">INSUFFICIENT_CREDITS</code>
                    <span className="text-muted-foreground">{isArabic ? 'رصيد غير كافٍ' : 'Not enough credits'}</span>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <code className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-sm font-mono font-medium">MESSAGE_TOO_LONG</code>
                    <span className="text-muted-foreground">{isArabic ? 'الرسالة تتجاوز الحد المسموح' : 'Message exceeds maximum length'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                {isArabic 
                  ? 'إجابات على الأسئلة الأكثر شيوعاً'
                  : 'Answers to the most common questions'}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="rounded-xl border-2 border-border/60 bg-card px-6 shadow-sm">
                <AccordionTrigger className="text-foreground hover:text-foreground py-5 hover:no-underline">
                  {isArabic ? 'كيف أحصل على مفتاح API؟' : 'How do I get an API key?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {isArabic 
                    ? 'قم بتسجيل الدخول إلى لوحة التحكم وانتقل إلى قسم الإعدادات > مفاتيح API. يمكنك إنشاء مفتاح جديد من هناك.'
                    : 'Log in to your dashboard and navigate to Settings > API Keys. You can generate a new key from there.'}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-xl border-2 border-border/60 bg-card px-6 shadow-sm">
                <AccordionTrigger className="text-foreground hover:text-foreground py-5 hover:no-underline">
                  {isArabic ? 'ما هي الصيغ المدعومة لأرقام الهاتف؟' : 'What phone number formats are supported?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {isArabic 
                    ? 'نقبل الأرقام بصيغة E.164 الدولية (مثل +966501234567). تأكد من تضمين رمز الدولة.'
                    : 'We accept numbers in E.164 international format (e.g., +966501234567). Make sure to include the country code.'}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-xl border-2 border-border/60 bg-card px-6 shadow-sm">
                <AccordionTrigger className="text-foreground hover:text-foreground py-5 hover:no-underline">
                  {isArabic ? 'هل تدعمون الرسائل باللغة العربية؟' : 'Do you support Arabic messages?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {isArabic 
                    ? 'نعم، ندعم Unicode بالكامل بما في ذلك اللغة العربية. الرسائل العربية تستخدم ترميز UCS-2 ويمكن أن تحتوي على 70 حرفاً لكل جزء.'
                    : 'Yes, we fully support Unicode including Arabic. Arabic messages use UCS-2 encoding and can contain 70 characters per segment.'}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-xl border-2 border-border/60 bg-card px-6 shadow-sm">
                <AccordionTrigger className="text-foreground hover:text-foreground py-5 hover:no-underline">
                  {isArabic ? 'كيف أسجل معرف المرسل (Sender ID)؟' : 'How do I register a Sender ID?'}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {isArabic 
                    ? 'تواصل مع فريق المبيعات لتسجيل معرف المرسل الخاص بك. نتولى عملية التسجيل لدى الجهات المنظمة في المملكة العربية السعودية.'
                    : 'Contact our sales team to register your Sender ID. We handle the registration process with regulatory authorities in Saudi Arabia.'}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {t('examples')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {isArabic 
                  ? 'أمثلة سريعة للبدء في الدمج'
                  : 'Quick examples to get you started with integration'}
              </p>
            </div>

            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-4 bg-muted/50">
                <TabsTrigger value="curl" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">cURL</TabsTrigger>
                <TabsTrigger value="nodejs" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Node.js</TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Python</TabsTrigger>
                <TabsTrigger value="php" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">PHP</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curl">
                <Card className="border-2 border-border/60 shadow-sm">
                  <CardHeader className="border-b border-border/50 bg-muted/30">
                    <CardTitle className="flex items-center gap-2 text-lg text-card-foreground">
                      <FileCode className="h-5 w-5 text-[#FDBF30]" />
                      {isArabic ? 'إرسال رسالة نصية' : 'Send SMS Message'}
                    </CardTitle>
                    <CardDescription>{isArabic ? 'مثال - نقطة نهاية تجريبية' : 'Example - Sample endpoint'}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs font-medium text-white/50">bash</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`curl -X POST https://api.example.com/v1/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+966501234567",
    "message": "Hello from iMissive!",
    "sender_id": "MyCompany"
  }'`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="nodejs">
                <Card className="border-2 border-border/60 shadow-sm">
                  <CardHeader className="border-b border-border/50 bg-muted/30">
                    <CardTitle className="flex items-center gap-2 text-lg text-card-foreground">
                      <FileCode className="h-5 w-5 text-[#61C5BA]" />
                      {isArabic ? 'إرسال رسالة نصية' : 'Send SMS Message'}
                    </CardTitle>
                    <CardDescription>{isArabic ? 'مثال - نقطة نهاية تجريبية' : 'Example - Sample endpoint'}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs font-medium text-white/50">javascript</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`const response = await fetch('https://api.example.com/v1/sms/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+966501234567',
    message: 'Hello from iMissive!',
    sender_id: 'MyCompany'
  })
});

const data = await response.json();
console.log(data);`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="python">
                <Card className="border-2 border-border/60 shadow-sm">
                  <CardHeader className="border-b border-border/50 bg-muted/30">
                    <CardTitle className="flex items-center gap-2 text-lg text-card-foreground">
                      <FileCode className="h-5 w-5 text-[#F68C20]" />
                      {isArabic ? 'إرسال رسالة نصية' : 'Send SMS Message'}
                    </CardTitle>
                    <CardDescription>{isArabic ? 'مثال - نقطة نهاية تجريبية' : 'Example - Sample endpoint'}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs font-medium text-white/50">python</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`import requests

response = requests.post(
    'https://api.example.com/v1/sms/send',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'to': '+966501234567',
        'message': 'Hello from iMissive!',
        'sender_id': 'MyCompany'
    }
)

print(response.json())`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="php">
                <Card className="border-2 border-border/60 shadow-sm">
                  <CardHeader className="border-b border-border/50 bg-muted/30">
                    <CardTitle className="flex items-center gap-2 text-lg text-card-foreground">
                      <FileCode className="h-5 w-5 text-[#E0357C]" />
                      {isArabic ? 'إرسال رسالة نصية' : 'Send SMS Message'}
                    </CardTitle>
                    <CardDescription>{isArabic ? 'مثال - نقطة نهاية تجريبية' : 'Example - Sample endpoint'}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-hidden rounded-xl border border-[#492E51]/20">
                      <div className="flex items-center justify-between border-b border-[#492E51]/20 bg-[#492E51] px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <div className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs font-medium text-white/50">php</span>
                      </div>
                      <pre className="overflow-x-auto bg-[#1a1225] p-5 text-sm text-[#e0d4e8] font-mono">
{`<?php
$ch = curl_init('https://api.example.com/v1/sms/send');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer YOUR_API_KEY',
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'to' => '+966501234567',
        'message' => 'Hello from iMissive!',
        'sender_id' => 'MyCompany'
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
echo $response;`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {isArabic ? 'هل أنت مستعد لبدء التكامل؟' : 'Ready to start integrating?'}
            </h2>
            <p className="mt-6 text-lg text-white/75">
              {isArabic 
                ? 'تواصل معنا للحصول على مفاتيح API الخاصة بك والبدء في دمج خدمات الرسائل المؤسسية'
                : 'Contact us to get your API keys and start integrating enterprise messaging services'}
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
              {/* Dashboard login button - URL may be updated post-launch */}
              <a 
                href="https://sms.imissive.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-auto items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {isArabic ? 'تسجيل الدخول للوحة التحكم' : 'Login to Dashboard'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
