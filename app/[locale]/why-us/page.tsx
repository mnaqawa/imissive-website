import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { 
  Server, 
  Shield, 
  BarChart3, 
  GitBranch, 
  Settings2, 
  CheckCircle,
  Network,
  FileCheck,
  Activity,
  Route,
  Users,
  Lock,
  Clock,
  Zap,
  Globe,
  FileText,
  AlertTriangle,
  UserCheck,
  ClipboardList,
  Eye,
  ArrowRight,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  XCircle,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.whyUs
  
  return {
    title: isArabic ? 'لماذا تختار آي ميسيف | منصة الرسائل المؤسسية' : meta.title,
    description: isArabic 
      ? 'منصة الرسائل المؤسسية المبنية للاتصالات الحرجة - بنية تحتية موثوقة، حوكمة المرسل، تقارير التسليم، التوجيه الذكي، وضوابط المؤسسات'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/why-us`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/why-us` }
        : { 'en': `${SITE_URL}/en/why-us`, 'ar': `${SITE_URL}/ar/why-us` },
    },
    openGraph: {
      title: isArabic ? 'لماذا تختار آي ميسيف' : meta.title,
      description: isArabic 
        ? 'منصة الرسائل المؤسسية المبنية للاتصالات الحرجة'
        : meta.description,
      url: `${SITE_URL}/${locale}/why-us`,
      type: 'website',
    },
  }
}

// Visual Component: Messaging Infrastructure Flow
function InfrastructureVisual({ isArabic }: { isArabic: boolean }) {
  const steps = [
    { 
      icon: Server, 
      label: isArabic ? 'API / النظام' : 'API / System',
      color: '#FDBF30'
    },
    { 
      icon: GitBranch, 
      label: isArabic ? 'طبقة التوجيه' : 'Routing Layer',
      color: '#61C5BA'
    },
    { 
      icon: Smartphone, 
      label: isArabic ? 'القناة / المشغل' : 'Channel / Operator',
      color: '#F68C20'
    },
    { 
      icon: CheckCircle2, 
      label: isArabic ? 'حالة التسليم' : 'Delivery Status',
      color: '#61C5BA'
    },
  ]

  return (
    <div className="mt-10 rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#61C5BA] animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'تدفق الرسائل المؤسسية' : 'Enterprise Message Flow'}
        </span>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4 lg:gap-0 w-full lg:w-auto">
            {/* Step node */}
            <div className="flex flex-col items-center gap-3">
              <div 
                className="flex h-14 w-14 items-center justify-center rounded-xl border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: step.color,
                  backgroundColor: `${step.color}10`
                }}
              >
                <step.icon className="h-6 w-6" style={{ color: step.color }} />
              </div>
              <span className="text-sm font-medium text-foreground text-center max-w-[100px]">
                {step.label}
              </span>
            </div>
            
            {/* Connector arrow */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center px-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-border to-border/50" />
                <ArrowRight className="h-4 w-4 text-muted-foreground/50 -ml-1" />
              </div>
            )}
            {index < steps.length - 1 && (
              <div className="flex lg:hidden items-center justify-center py-2">
                <ArrowRight className="h-4 w-4 text-muted-foreground/50 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Status indicators */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-border/50 pt-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#61C5BA]" />
          <span className="text-xs text-muted-foreground">{isArabic ? 'نشط' : 'Active'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#FDBF30]" />
          <span className="text-xs text-muted-foreground">{isArabic ? 'قيد المعالجة' : 'Processing'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-border" />
          <span className="text-xs text-muted-foreground">{isArabic ? 'في الانتظار' : 'Queued'}</span>
        </div>
      </div>
    </div>
  )
}

// Visual Component: Delivery Reporting Dashboard Preview
function ReportingVisual({ isArabic }: { isArabic: boolean }) {
  // Generic status breakdown - no specific numbers, just visual proportions
  const statusItems = [
    { label: isArabic ? 'تم التسليم' : 'Delivered', color: '#61C5BA', width: '70%' },
    { label: isArabic ? 'قيد الانتظار' : 'Pending', color: '#FDBF30', width: '15%' },
    { label: isArabic ? 'فشل' : 'Failed', color: '#E0357C', width: '8%' },
    { label: isArabic ? 'منتهي الصلاحية' : 'Expired', color: '#F68C20', width: '7%' },
  ]

  return (
    <div className="mt-10 rounded-2xl border border-border/50 bg-card overflow-hidden">
      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-6 py-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-[#F68C20]" />
          <span className="text-sm font-medium text-foreground">
            {isArabic ? 'نظرة عامة على التسليم' : 'Delivery Overview'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <RefreshCw className="h-3 w-3" />
          {isArabic ? 'تحديث مباشر' : 'Live updates'}
        </div>
      </div>
      
      <div className="p-6">
        {/* Trend visualization - simple bar representation */}
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {isArabic ? 'اتجاه التسليم' : 'Delivery Trend'}
            </span>
            <span className="text-xs text-muted-foreground">
              {isArabic ? 'آخر 7 أيام' : 'Last 7 days'}
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 55, 45, 70, 60, 80, 75].map((height, i) => (
              <div 
                key={i}
                className="flex-1 rounded-t transition-all duration-300 hover:opacity-80"
                style={{ 
                  height: `${height}%`,
                  backgroundColor: i === 6 ? '#61C5BA' : `rgba(97, 197, 186, ${0.3 + (i * 0.1)})`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Status breakdown */}
        <div className="space-y-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {isArabic ? 'توزيع الحالة' : 'Status Breakdown'}
          </span>
          {statusItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-20 text-xs text-muted-foreground">{item.label}</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: item.width, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Export hint */}
        <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-dashed border-border/50 py-3">
          <FileText className="h-4 w-4 text-muted-foreground/60" />
          <span className="text-xs text-muted-foreground">
            {isArabic ? 'تقارير قابلة للتصدير (CSV, PDF)' : 'Exportable reports (CSV, PDF)'}
          </span>
        </div>
      </div>
    </div>
  )
}

// Visual Component: Routing & Failover Diagram
function RoutingVisual({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="mt-10 rounded-2xl border border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#E0357C] animate-pulse" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {isArabic ? 'منطق التوجيه الذكي' : 'Intelligent Routing Logic'}
        </span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
        {/* Message Source */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#492E51]/10 border-2 border-[#492E51]">
            <MessageSquare className="h-7 w-7 text-[#492E51]" />
          </div>
          <span className="text-sm font-medium text-foreground">
            {isArabic ? 'الرسالة الواردة' : 'Incoming Message'}
          </span>
        </div>
        
        {/* Routing decision */}
        <div className="flex flex-col items-center gap-4">
          <div className="hidden lg:block h-[2px] w-8 bg-gradient-to-r from-[#492E51]/30 to-[#E0357C]/50" />
          
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E0357C]/10 border-2 border-[#E0357C]">
              <GitBranch className="h-5 w-5 text-[#E0357C]" />
            </div>
          </div>
          
          <span className="text-xs text-muted-foreground text-center">
            {isArabic ? 'قرار التوجيه' : 'Route Decision'}
          </span>
        </div>
        
        {/* Routes */}
        <div className="flex flex-col gap-4">
          {/* Primary route */}
          <div className="flex items-center gap-3 rounded-xl border-2 border-[#61C5BA] bg-[#61C5BA]/5 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#61C5BA]/15">
              <CheckCircle2 className="h-5 w-5 text-[#61C5BA]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {isArabic ? 'المسار الأساسي' : 'Primary Route'}
                </span>
                <span className="inline-flex items-center rounded-full bg-[#61C5BA]/15 px-2 py-0.5 text-[10px] font-medium text-[#61C5BA]">
                  {isArabic ? 'نشط' : 'Active'}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {isArabic ? 'الاتصال المباشر بالمشغل' : 'Direct operator connection'}
              </span>
            </div>
          </div>
          
          {/* Backup route */}
          <div className="flex items-center gap-3 rounded-xl border border-dashed border-[#FDBF30] bg-[#FDBF30]/5 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDBF30]/15">
              <RefreshCw className="h-5 w-5 text-[#FDBF30]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {isArabic ? 'المسار الاحتياطي' : 'Backup Route'}
                </span>
                <span className="inline-flex items-center rounded-full bg-[#FDBF30]/15 px-2 py-0.5 text-[10px] font-medium text-[#FDBF30]">
                  {isArabic ? 'جاهز' : 'Standby'}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {isArabic ? 'تجاوز تلقائي عند الفشل' : 'Automatic failover on failure'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Continuity indicator */}
      <div className="mt-8 flex items-center justify-center gap-3 rounded-lg bg-muted/50 py-3 px-4">
        <Zap className="h-4 w-4 text-[#61C5BA]" />
        <span className="text-xs text-muted-foreground">
          {isArabic ? 'استمرارية التسليم مع التبديل التلقائي للمسارات' : 'Delivery continuity with automatic route switching'}
        </span>
      </div>
    </div>
  )
}

export default async function WhyUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('whyUs')
  const cta = await getTranslations('cta')
  const isArabic = locale === 'ar'

  // Platform sections content
  const platformSections = [
    {
      id: 'infrastructure',
      icon: Server,
      accentColor: '#FDBF30', // Yellow
      title: isArabic ? 'البنية التحتية للرسائل' : 'Messaging Infrastructure',
      description: isArabic 
        ? 'بنية تحتية عالية التوفر مصممة لتسليم الرسائل المؤسسية على نطاق واسع'
        : 'High-availability infrastructure designed for enterprise-scale message delivery',
      features: isArabic ? [
        { icon: Network, text: 'بنية تحتية موزعة مع تكرار متعدد المناطق' },
        { icon: Zap, text: 'توجيه قابل للتطوير لأحجام الرسائل العالية' },
        { icon: Globe, text: 'دعم SMS، OTP، WhatsApp Business، وChatBot' },
        { icon: Clock, text: 'مراقبة المنصة ومرونة تشغيلية' },
      ] : [
        { icon: Network, text: 'Distributed infrastructure with multi-region redundancy' },
        { icon: Zap, text: 'Scalable routing for high message volumes' },
        { icon: Globe, text: 'SMS, OTP, WhatsApp Business, and ChatBot support' },
        { icon: Clock, text: 'Platform monitoring and operational resilience' },
      ],
      visual: 'infrastructure',
    },
    {
      id: 'governance',
      icon: Shield,
      accentColor: '#61C5BA', // Teal
      title: isArabic ? 'حوكمة المرسل' : 'Sender Governance',
      description: isArabic 
        ? 'إدارة شاملة لمعرف المرسل مع سير عمل الموافقة وضوابط الامتثال'
        : 'Comprehensive Sender ID management with approval workflows and compliance controls',
      features: isArabic ? [
        { icon: FileCheck, text: 'إدارة وتسجيل معرف المرسل' },
        { icon: ClipboardList, text: 'سير عمل الموافقة للمرسلين الجدد' },
        { icon: Lock, text: 'ضوابط الامتثال وإنفاذ السياسات' },
        { icon: UserCheck, text: 'الوصول القائم على الأدوار وجاهزية التدقيق' },
      ] : [
        { icon: FileCheck, text: 'Sender ID registration and management' },
        { icon: ClipboardList, text: 'Approval workflows for new senders' },
        { icon: Lock, text: 'Compliance controls and policy enforcement' },
        { icon: UserCheck, text: 'Role-based access and audit readiness' },
      ],
      visual: null,
    },
    {
      id: 'reporting',
      icon: BarChart3,
      accentColor: '#F68C20', // Orange
      title: isArabic ? 'تقارير التسليم' : 'Delivery Reporting',
      description: isArabic 
        ? 'رؤية في الوقت الفعلي لحالة تسليم الرسائل وأداء الحملات'
        : 'Real-time visibility into message delivery status and campaign performance',
      features: isArabic ? [
        { icon: Activity, text: 'تتبع حالة التسليم في الوقت الفعلي' },
        { icon: FileText, text: 'إيصالات التسليم وتقارير الحملات' },
        { icon: Eye, text: 'تقارير قابلة للتصدير للتحليل والامتثال' },
        { icon: BarChart3, text: 'لوحات معلومات مراقبة الأداء' },
      ] : [
        { icon: Activity, text: 'Real-time delivery status tracking' },
        { icon: FileText, text: 'Delivery receipts and campaign reporting' },
        { icon: Eye, text: 'Exportable reports for analysis and compliance' },
        { icon: BarChart3, text: 'Performance monitoring dashboards' },
      ],
      visual: 'reporting',
    },
    {
      id: 'routing',
      icon: GitBranch,
      accentColor: '#E0357C', // Pink
      title: isArabic ? 'التوجيه والنسخ الاحتياطي' : 'Routing & Failover',
      description: isArabic 
        ? 'توجيه ذكي للرسائل مع مسارات احتياطية لضمان استمرارية التسليم'
        : 'Intelligent message routing with backup paths to ensure delivery continuity',
      features: isArabic ? [
        { icon: Route, text: 'توجيه ذكي بناءً على نوع الرسالة والوجهة' },
        { icon: Eye, text: 'رؤية المسار وشفافية التوجيه' },
        { icon: AlertTriangle, text: 'التوجيه الاحتياطي التلقائي عند الفشل' },
        { icon: Zap, text: 'تقليل انقطاع التسليم واستمرارية الخدمة' },
      ] : [
        { icon: Route, text: 'Intelligent routing based on message type and destination' },
        { icon: Eye, text: 'Route visibility and routing transparency' },
        { icon: AlertTriangle, text: 'Automatic failover routing on failure' },
        { icon: Zap, text: 'Reduced delivery disruption and service continuity' },
      ],
      visual: 'routing',
    },
    {
      id: 'enterprise',
      icon: Settings2,
      accentColor: '#492E51', // Deep Purple
      title: isArabic ? 'ضوابط المؤسسات' : 'Enterprise Controls',
      description: isArabic 
        ? 'إدارة شاملة للحسابات مع الأذونات والموافقات وسجلات التدقيق'
        : 'Comprehensive account management with permissions, approvals, and audit trails',
      features: isArabic ? [
        { icon: Settings2, text: 'إدارة الحساب وضوابط التكوين' },
        { icon: Users, text: 'أذونات المستخدمين الفرعيين والوصول القائم على الأدوار' },
        { icon: ClipboardList, text: 'سير عمل الموافقة للإجراءات الحساسة' },
        { icon: FileCheck, text: 'سجلات التدقيق وحوكمة المؤسسات' },
      ] : [
        { icon: Settings2, text: 'Account management and configuration controls' },
        { icon: Users, text: 'Sub-user permissions and role-based access' },
        { icon: ClipboardList, text: 'Approval workflows for sensitive actions' },
        { icon: FileCheck, text: 'Audit logs and enterprise governance' },
      ],
      visual: null,
    },
  ]

  // Benefits list
  const benefits = isArabic ? [
    'إدارة معرف المرسل مع سير عمل جاهز للامتثال',
    'واجهات برمجة RESTful و SMPP مع توثيق شامل',
    'تقارير التسليم في الوقت الفعلي والتحليلات',
    'فريق دعم مخصص بالعربية والإنجليزية',
    'بنية تحتية قابلة للتطوير للرسائل عالية الحجم',
    'تكامل متعدد القنوات (SMS، WhatsApp، OTP، ChatBot)',
  ] : [
    'Sender ID governance with compliance-ready workflows',
    'RESTful APIs and SMPP with comprehensive documentation',
    'Real-time delivery reporting and analytics',
    'Dedicated support team in Arabic and English',
    'Scalable infrastructure for high-volume messaging',
    'Multi-channel integration (SMS, WhatsApp, OTP, ChatBot)',
  ]

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Server className="h-4 w-4 text-[#FDBF30]" />
              <span className="text-sm font-medium text-white/90">
                {isArabic ? 'نظرة عامة على المنصة' : 'Platform Overview'}
              </span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-pretty text-lg text-white/75 lg:text-xl">
              {t('subtitle')}
            </p>
            
            {/* Quick nav pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {platformSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <section.icon className="h-4 w-4" style={{ color: section.accentColor }} />
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      {platformSections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={`py-20 lg:py-28 scroll-mt-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              {/* Section header */}
              <div className="mb-12 text-center">
                <div 
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${section.accentColor}15` }}
                >
                  <section.icon className="h-8 w-8" style={{ color: section.accentColor }} />
                </div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>
              
              {/* Features grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {section.features.map((feature, featureIndex) => (
                  <Card 
                    key={featureIndex} 
                    className="border-border/50 bg-card hover:shadow-md transition-shadow"
                  >
                    <CardContent className="flex items-start gap-4 p-6">
                      <div 
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${section.accentColor}15` }}
                      >
                        <feature.icon className="h-5 w-5" style={{ color: section.accentColor }} />
                      </div>
                      <p className="text-card-foreground leading-relaxed pt-2">
                        {feature.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Visual components */}
              {section.visual === 'infrastructure' && <InfrastructureVisual isArabic={isArabic} />}
              {section.visual === 'reporting' && <ReportingVisual isArabic={isArabic} />}
              {section.visual === 'routing' && <RoutingVisual isArabic={isArabic} />}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Summary */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
              {isArabic ? 'ما تحصل عليه مع آي ميسيف' : 'What You Get With iMissive'}
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#61C5BA]/15">
                    <CheckCircle className="h-4 w-4 text-[#61C5BA]" />
                  </div>
                  <span className="text-card-foreground leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              {cta('title')}
            </h2>
            <p className="mt-6 text-lg text-white/75">
              {cta('subtitle')}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[#FDBF30] text-[#492E51] hover:bg-[#FDBF30]/90 font-semibold px-8 py-6 text-base" 
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {isArabic ? 'طلب عرض توضيحي' : 'Request a Demo'}
                </Link>
              </Button>
              <a 
                href={`/${locale}/api-docs`}
                className="inline-flex h-auto items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {isArabic ? 'استكشف توثيق API' : 'Explore API Docs'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
