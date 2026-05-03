import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ChannelPage, IconName } from '@/components/pages/channel-page'
import { User, KeyRound, Send, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.otp
  
  return {
    title: isArabic ? 'خدمة كلمة المرور لمرة واحدة OTP | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'خدمة توليد وتسليم كلمات المرور لمرة واحدة للتحقق الآمن من الهوية في المملكة العربية السعودية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/channels/otp`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/channels/otp` }
        : { 'en': `${SITE_URL}/en/channels/otp`, 'ar': `${SITE_URL}/ar/channels/otp` },
    },
    openGraph: {
      title: isArabic ? 'خدمة كلمة المرور لمرة واحدة OTP' : meta.title,
      description: isArabic 
        ? 'خدمة توليد وتسليم كلمات المرور لمرة واحدة للتحقق الآمن من الهوية'
        : meta.description,
      url: `${SITE_URL}/${locale}/channels/otp`,
      type: 'website',
    },
  }
}

// OTP Verification Flow Visual Component
function OTPFlowVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: User, label: 'تسجيل الدخول', desc: 'طلب المستخدم' },
    { icon: KeyRound, label: 'توليد OTP', desc: 'كود آمن' },
    { icon: Send, label: 'إرسال', desc: 'SMS / WhatsApp' },
    { icon: Smartphone, label: 'التحقق', desc: 'إدخال الكود' },
    { icon: ShieldCheck, label: 'تم التحقق', desc: 'وصول مؤمن' },
  ] : [
    { icon: User, label: 'Login Request', desc: 'User initiated' },
    { icon: KeyRound, label: 'OTP Generated', desc: 'Secure code' },
    { icon: Send, label: 'SMS Sent', desc: 'SMS / WhatsApp' },
    { icon: Smartphone, label: 'Verification', desc: 'Code entry' },
    { icon: ShieldCheck, label: 'Verified', desc: 'Access granted' },
  ]

  const stepColors = ['#492E51', '#FDBF30', '#F68C20', '#E0357C', '#61C5BA']

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#61C5BA]/10 text-[#61C5BA]">
          <KeyRound className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-card-foreground">
          {isArabic ? 'مسار التحقق بـ OTP' : 'OTP Verification Flow'}
        </h3>
      </div>
      
      {/* Flow Diagram */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-2">
        {steps.map((step, index) => {
          const StepIcon = step.icon
          return (
            <div key={index} className="flex items-center gap-4 lg:flex-col lg:gap-3 lg:flex-1">
              {/* Step Node */}
              <div 
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 lg:h-16 lg:w-16"
                style={{ 
                  borderColor: stepColors[index],
                  backgroundColor: `${stepColors[index]}15`
                }}
              >
                <StepIcon className="h-6 w-6" style={{ color: stepColors[index] }} />
              </div>
              
              {/* Step Info */}
              <div className="flex-1 lg:text-center lg:flex-none">
                <p className="font-medium text-card-foreground text-sm">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
              
              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:pt-5">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Security Note */}
      <div className="mt-6 rounded-lg bg-[#61C5BA]/5 border border-[#61C5BA]/20 p-4">
        <p className="text-sm text-muted-foreground">
          {isArabic 
            ? 'تشفير قوي وانتهاء صلاحية قابل للتكوين ومنطق إعادة المحاولة لتجربة تحقق آمنة وسلسة.'
            : 'Strong encryption, configurable expiry, and retry logic for secure and seamless verification experiences.'}
        </p>
      </div>
    </div>
  )
}

export default async function OTPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'خدمة كلمة المرور لمرة واحدة',
    subtitle: 'تحقق آمن من الهوية عبر رسائل SMS وWhatsApp',
    description: 'خدمة OTP موثوقة لتأمين تطبيقاتك ومنصاتك. توليد وتسليم سريع مع تجربة تحقق سلسة. تكامل سهل عبر API مع دعم كامل للعربية.',
    features: [
      { iconName: 'Zap' as IconName, title: 'تسليم منخفض الكمون', description: 'تسليم OTP سريع عبر SMS أو WhatsApp' },
      { iconName: 'Shield' as IconName, title: 'أمان متقدم', description: 'توليد أكواد عشوائية مع انتهاء صلاحية قابل للتكوين' },
      { iconName: 'RefreshCcw' as IconName, title: 'إعادة المحاولة التلقائية', description: 'منطق إعادة المحاولة للتسليم المضمون' },
      { iconName: 'Globe' as IconName, title: 'قنوات متعددة', description: 'SMS وWhatsApp والصوت' },
      { iconName: 'Lock' as IconName, title: 'تشفير قوي', description: 'تشفير الأكواد أثناء النقل والتخزين' },
      { iconName: 'BarChart3' as IconName, title: 'تحليلات الأمان', description: 'مراقبة معدلات التحقق والمحاولات الفاشلة' },
    ],
    benefits: [
      'تسليم منخفض الكمون عبر قنوات متعددة',
      'مصمم لدعم تجارب تحقق سلسة',
      'صلاحية OTP وقواعد إعادة المحاولة قابلة للتكوين',
      'دعم العربية والإنجليزية',
      'تكامل API بسيط',
      'تحليلات أمان متقدمة',
    ],
    useCases: [
      { title: 'تسجيل الدخول', description: 'التحقق بخطوتين لتأمين الحسابات' },
      { title: 'تأكيد المعاملات', description: 'تأكيد العمليات المالية الحساسة' },
      { title: 'استعادة كلمة المرور', description: 'إعادة تعيين كلمة المرور بأمان' },
      { title: 'التحقق من الهوية', description: 'التحقق من هوية المستخدم الجديد' },
      { title: 'تأكيد الطلبات', description: 'تأكيد الطلبات والحجوزات' },
      { title: 'الموافقة على العمليات', description: 'الموافقة على العمليات الحساسة' },
    ],
    ctaTitle: 'هل أنت مستعد لتأمين تطبيقك؟',
    ctaSubtitle: 'تواصل معنا لتفعيل خدمة OTP لمنصتك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'OTP Authentication Service',
    subtitle: 'Secure identity verification via SMS and WhatsApp',
    description: 'Reliable OTP service to secure your applications and platforms. Fast generation and delivery designed to support smoother verification experiences. Easy API integration with full Arabic support.',
    features: [
      { iconName: 'Zap' as IconName, title: 'Low-Latency Delivery', description: 'Low-latency OTP delivery via SMS or WhatsApp' },
      { iconName: 'Shield' as IconName, title: 'Advanced Security', description: 'Random code generation with configurable expiry' },
      { iconName: 'RefreshCcw' as IconName, title: 'Auto-Retry', description: 'Retry logic for improved delivery handling' },
      { iconName: 'Globe' as IconName, title: 'Multiple Channels', description: 'SMS, WhatsApp, and voice' },
      { iconName: 'Lock' as IconName, title: 'Security-Focused Implementation', description: 'Security controls based on implementation requirements' },
      { iconName: 'BarChart3' as IconName, title: 'Security Analytics', description: 'Monitor verification rates and failed attempts' },
    ],
    benefits: [
      'Low-latency delivery across multiple channels',
      'Designed to support smoother verification experiences',
      'Configurable OTP validity and retry rules',
      'Arabic and English support',
      'Simple API integration',
      'Advanced security analytics',
    ],
    useCases: [
      { title: 'Login Verification', description: 'Two-factor authentication for account security' },
      { title: 'Transaction Confirmation', description: 'Confirm sensitive financial operations' },
      { title: 'Password Recovery', description: 'Securely reset passwords' },
      { title: 'Identity Verification', description: 'Verify new user identity' },
      { title: 'Order Confirmation', description: 'Confirm orders and reservations' },
      { title: 'Operation Approval', description: 'Approve sensitive operations' },
    ],
    ctaTitle: 'Ready to Secure Your Application?',
    ctaSubtitle: 'Contact us to activate OTP service for your platform',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <ChannelPage
      locale={locale}
      iconName="Key"
      visual={<OTPFlowVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
