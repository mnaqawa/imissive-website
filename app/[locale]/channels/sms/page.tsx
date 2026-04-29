import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ChannelPage, IconName } from '@/components/pages/channel-page'
import { Server, ArrowRight, Radio, CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.sms
  
  return {
    title: isArabic ? 'خدمة الرسائل النصية القصيرة للمؤسسات | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'خدمة رسائل SMS موثوقة للمؤسسات في المملكة العربية السعودية مع إدارة هوية المرسل والتقارير التفصيلية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/channels/sms`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/channels/sms` }
        : { 'en': `${SITE_URL}/en/channels/sms`, 'ar': `${SITE_URL}/ar/channels/sms` },
    },
    openGraph: {
      title: isArabic ? 'خدمة الرسائل النصية القصيرة للمؤسسات' : meta.title,
      description: isArabic 
        ? 'خدمة رسائل SMS موثوقة للمؤسسات في المملكة العربية السعودية'
        : meta.description,
      url: `${SITE_URL}/${locale}/channels/sms`,
      type: 'website',
    },
  }
}

// SMS Delivery Flow Visual Component
function SMSFlowVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { label: 'النظام', status: 'نشط' },
    { label: 'API', status: 'معالجة' },
    { label: 'التوجيه', status: 'في الانتظار' },
    { label: 'المشغل', status: 'إرسال' },
    { label: 'التسليم', status: 'مكتمل' },
  ] : [
    { label: 'System', status: 'Active' },
    { label: 'API', status: 'Processing' },
    { label: 'Routing', status: 'Queued' },
    { label: 'Operator', status: 'Sending' },
    { label: 'Delivery', status: 'Complete' },
  ]

  const statusColors = ['#FDBF30', '#61C5BA', '#F68C20', '#E0357C', '#61C5BA']

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FDBF30]/10 text-[#FDBF30]">
          <Server className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-card-foreground">
          {isArabic ? 'مسار تسليم الرسائل' : 'SMS Delivery Flow'}
        </h3>
      </div>
      
      {/* Flow Diagram */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 lg:flex-col lg:gap-2 lg:flex-1">
            {/* Step Node */}
            <div 
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 transition-colors lg:h-16 lg:w-16"
              style={{ 
                borderColor: statusColors[index],
                backgroundColor: `${statusColors[index]}10`
              }}
            >
              {index === steps.length - 1 ? (
                <CheckCircle className="h-6 w-6" style={{ color: statusColors[index] }} />
              ) : (
                <Radio className="h-5 w-5" style={{ color: statusColors[index] }} />
              )}
            </div>
            
            {/* Step Info */}
            <div className="flex-1 lg:text-center lg:flex-none">
              <p className="font-medium text-card-foreground text-sm">{step.label}</p>
              <p className="text-xs text-muted-foreground">{step.status}</p>
            </div>
            
            {/* Connector Arrow (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-2">
                <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Status Legend */}
      <div className="mt-6 flex flex-wrap gap-4 border-t border-border/50 pt-4">
        {[
          { label: isArabic ? 'في الانتظار' : 'Queued', color: '#F68C20' },
          { label: isArabic ? 'مرسل' : 'Sent', color: '#FDBF30' },
          { label: isArabic ? 'تم التسليم' : 'Delivered', color: '#61C5BA' },
          { label: isArabic ? 'فشل' : 'Failed', color: '#E0357C' },
        ].map((status, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="h-2.5 w-2.5 rounded-full" 
              style={{ backgroundColor: status.color }}
            />
            <span className="text-xs text-muted-foreground">{status.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function SMSPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'خدمة الرسائل النصية القصيرة',
    subtitle: 'بنية تحتية موثوقة للرسائل النصية للمؤسسات ذات الحجم الكبير',
    description: 'حلول رسائل SMS قابلة للتوسع مصممة للمؤسسات. إدارة هوية المرسل، رؤية التسليم، ودعم متعدد اللغات مدمج.',
    features: [
      { iconName: 'Shield' as IconName, title: 'إدارة هوية المرسل', description: 'تسجيل وإدارة هوية المرسل المتوافقة مع هيئة الاتصالات' },
      { iconName: 'BarChart3' as IconName, title: 'رؤية التسليم', description: 'تقارير تسليم تفصيلية وتتبع الحالة في الوقت الفعلي' },
      { iconName: 'Globe' as IconName, title: 'دعم العربية', description: 'دعم كامل للرسائل العربية والتشكيل' },
      { iconName: 'Zap' as IconName, title: 'إرسال عالي السرعة', description: 'بنية تحتية قابلة للتوسع للحملات الكبيرة' },
      { iconName: 'Users' as IconName, title: 'إدارة جهات الاتصال', description: 'أدوات تجزئة وإدارة القوائم المتقدمة' },
      { iconName: 'Clock' as IconName, title: 'الجدولة الذكية', description: 'جدولة الرسائل للوقت الأمثل للتسليم' },
    ],
    benefits: [
      'تغطية شاملة متعددة الأسواق',
      'واجهة برمجة تطبيقات للتكامل السلس',
      'تقارير التسليم في الوقت الفعلي',
      'دعم فني ومساعدة تشغيلية للمؤسسات',
      'التوافق مع متطلبات هيئة الاتصالات',
      'أسعار تنافسية للمؤسسات',
    ],
    useCases: [
      { title: 'الحملات التسويقية', description: 'إرسال عروض ترويجية مستهدفة لقاعدة عملائك' },
      { title: 'الإشعارات المعاملاتية', description: 'تأكيدات الطلبات وتحديثات الشحن' },
      { title: 'التذكيرات', description: 'تذكيرات المواعيد والدفعات المستحقة' },
      { title: 'التنبيهات الأمنية', description: 'إشعارات الأمان وتنبيهات الحساب' },
      { title: 'استطلاعات الرأي', description: 'جمع ملاحظات العملاء عبر الرسائل' },
      { title: 'الاتصالات الداخلية', description: 'إشعارات الموظفين والتحديثات' },
    ],
    ctaTitle: 'هل أنت مستعد للبدء؟',
    ctaSubtitle: 'تواصل مع فريق المبيعات لمناقشة احتياجات مؤسستك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Bulk SMS Service',
    subtitle: 'Reliable enterprise messaging infrastructure for high-volume organizations',
    description: 'Scalable SMS solutions designed for enterprises. Sender ID governance, delivery visibility, and multi-language support built-in.',
    features: [
      { iconName: 'Shield' as IconName, title: 'Sender ID Governance', description: 'CITC-compliant Sender ID registration and management' },
      { iconName: 'BarChart3' as IconName, title: 'Delivery Visibility', description: 'Detailed delivery reports and real-time status tracking' },
      { iconName: 'Globe' as IconName, title: 'Arabic Support', description: 'Full support for Arabic messages and diacritics' },
      { iconName: 'Zap' as IconName, title: 'High-Speed Delivery', description: 'Scalable infrastructure for large campaigns' },
      { iconName: 'Users' as IconName, title: 'Contact Management', description: 'Advanced list management and segmentation tools' },
      { iconName: 'Clock' as IconName, title: 'Smart Scheduling', description: 'Schedule messages for optimal delivery times' },
    ],
    benefits: [
      'Comprehensive multi-market coverage',
      'RESTful API for seamless integration',
      'Real-time delivery reporting',
      'Enterprise support and operational assistance',
      'CITC regulatory compliance',
      'Competitive enterprise pricing',
    ],
    useCases: [
      { title: 'Marketing Campaigns', description: 'Send targeted promotions to your customer base' },
      { title: 'Transactional Notifications', description: 'Order confirmations and shipping updates' },
      { title: 'Reminders', description: 'Appointment and payment due reminders' },
      { title: 'Security Alerts', description: 'Security notifications and account alerts' },
      { title: 'Surveys', description: 'Collect customer feedback via SMS' },
      { title: 'Internal Communications', description: 'Employee notifications and updates' },
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Contact our sales team to discuss your enterprise requirements',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <ChannelPage
      locale={locale}
      iconName="MessageSquare"
      visual={<SMSFlowVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
