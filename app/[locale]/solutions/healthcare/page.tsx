import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { Calendar, FileText, Pill, Headphones } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.healthcare
  
  return {
    title: isArabic ? 'حلول الرعاية الصحية | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'تذكيرات المواعيد واتصالات المرضى للمستشفيات والعيادات ومقدمي الرعاية الصحية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/healthcare`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/healthcare` }
        : { 'en': `${SITE_URL}/en/solutions/healthcare`, 'ar': `${SITE_URL}/ar/solutions/healthcare` },
    },
    openGraph: {
      title: isArabic ? 'حلول الرعاية الصحية' : meta.title,
      description: isArabic 
        ? 'تذكيرات المواعيد واتصالات المرضى'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/healthcare`,
      type: 'website',
    },
  }
}

// Patient Communication Workflow Visual
function HealthcareVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: Calendar, label: 'تذكير الموعد', sublabel: 'جدولة المواعيد' },
    { icon: FileText, label: 'إشعار النتائج', sublabel: 'نتائج الفحوصات' },
    { icon: Pill, label: 'تذكير الأدوية', sublabel: 'متابعة العلاج' },
    { icon: Headphones, label: 'دعم المريض', sublabel: 'المساعدة والرعاية' },
  ] : [
    { icon: Calendar, label: 'Appointment Reminder', sublabel: 'Scheduling' },
    { icon: FileText, label: 'Test Result Notification', sublabel: 'Lab Results' },
    { icon: Pill, label: 'Medication Reminder', sublabel: 'Treatment Follow-up' },
    { icon: Headphones, label: 'Patient Support', sublabel: 'Care Assistance' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#61C5BA]/10 px-4 py-1.5 text-sm font-medium text-[#61C5BA]">
          <Calendar className="h-4 w-4" />
          {isArabic ? 'سير عمل اتصال المرضى' : 'Patient Communication Workflow'}
        </span>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2 lg:gap-4 w-full lg:w-auto">
            <div className="flex flex-col items-center text-center flex-1 lg:flex-none">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#492E51] text-white mb-3">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-foreground">{step.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{step.sublabel}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-[#61C5BA] to-[#FDBF30]" />
            )}
            {index < steps.length - 1 && (
              <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#61C5BA] to-[#FDBF30]" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'اتصال المواعيد' : 'Appointment Communication'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'التذكيرات' : 'Reminders'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'إشعارات خدمة المرضى' : 'Patient Service Notifications'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'رسائل واعية للخصوصية' : 'Privacy-Aware Messaging'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function HealthcarePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'الرعاية الصحية',
    subtitle: 'حلول اتصال آمنة للمستشفيات والعيادات ومقدمي الرعاية الصحية',
    description: 'منصة آي ميسيف توفر قنوات اتصال موثوقة بين مقدمي الرعاية الصحية والمرضى. من تذكيرات المواعيد إلى نتائج الفحوصات، نساعد في تحسين تجربة المريض والكفاءة التشغيلية.',
    challenges: [
      { title: 'التزام المرضى', description: 'تقليل حالات عدم الحضور للمواعيد' },
      { title: 'خصوصية البيانات', description: 'حماية المعلومات الصحية للمرضى' },
      { title: 'التواصل الفعال', description: 'وصول الرسائل المهمة في الوقت المناسب' },
      { title: 'التكامل', description: 'الربط مع أنظمة إدارة المستشفيات' },
      { title: 'التعددية اللغوية', description: 'خدمة المرضى بلغتهم المفضلة' },
      { title: 'الكفاءة', description: 'تقليل العبء الإداري على الموظفين' },
    ],
    solutions: [
      { iconName: 'Calendar' as IconName, title: 'تذكيرات المواعيد', description: 'رسائل تلقائية لتذكير المرضى بمواعيدهم' },
      { iconName: 'FileText' as IconName, title: 'نتائج الفحوصات', description: 'إشعارات بجاهزية نتائج التحاليل والأشعة' },
      { iconName: 'Pill' as IconName, title: 'تذكيرات الأدوية', description: 'تنبيهات لمواعيد تناول الأدوية' },
      { iconName: 'Bell' as IconName, title: 'إشعارات صحية', description: 'تنبيهات وتوعية صحية موسمية' },
      { iconName: 'Users' as IconName, title: 'تأكيد الحجوزات', description: 'تأكيد وإدارة مواعيد المرضى' },
      { iconName: 'MessageCircle' as IconName, title: 'خدمة المرضى', description: 'دعم تفاعلي للاستفسارات الصحية' },
    ],
    benefits: [
      'المساعدة في تقليل المواعيد الفائتة من خلال التذكيرات في الوقت المناسب',
      'تحسين رضا المرضى مع التواصل الفعال',
      'اتصال المرضى الواعي للخصوصية',
      'تكامل مع أنظمة HIS الرئيسية',
      'دعم كامل للعربية والإنجليزية',
      'تقليل العبء الإداري على الموظفين',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'تذكيرات وإشعارات موثوقة', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'تواصل تفاعلي مع المرضى', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'تحقق آمن للوصول للسجلات', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'مساعد صحي ذكي', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد لتحسين رعاية المرضى؟',
    ctaSubtitle: 'تواصل معنا لمناقشة احتياجات منشأتك الصحية',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Healthcare',
    subtitle: 'Secure communication solutions for hospitals, clinics, and healthcare providers',
    description: 'iMissive platform provides reliable communication channels between healthcare providers and patients. From appointment reminders to test results, we help improve patient experience and operational efficiency.',
    challenges: [
      { title: 'Patient Compliance', description: 'Reducing appointment no-shows' },
      { title: 'Data Privacy', description: 'Protecting patient health information' },
      { title: 'Effective Communication', description: 'Getting important messages delivered on time' },
      { title: 'Integration', description: 'Connecting with hospital management systems' },
      { title: 'Multilingual Support', description: 'Serving patients in their preferred language' },
      { title: 'Efficiency', description: 'Reducing administrative burden on staff' },
    ],
    solutions: [
      { iconName: 'Calendar' as IconName, title: 'Appointment Reminders', description: 'Automated messages to remind patients of appointments' },
      { iconName: 'FileText' as IconName, title: 'Test Results', description: 'Notifications when lab and imaging results are ready' },
      { iconName: 'Pill' as IconName, title: 'Medication Reminders', description: 'Alerts for medication schedules' },
      { iconName: 'Bell' as IconName, title: 'Health Notifications', description: 'Seasonal health alerts and awareness' },
      { iconName: 'Users' as IconName, title: 'Booking Confirmations', description: 'Confirmation and management of patient appointments' },
      { iconName: 'MessageCircle' as IconName, title: 'Patient Service', description: 'Interactive support for health inquiries' },
    ],
    benefits: [
      'Help reduce missed appointments through timely reminders',
      'Improve patient satisfaction with effective communication',
      'Privacy-aware patient communication',
      'Integration with major HIS systems',
      'Full Arabic and English support',
      'Reduce administrative burden on staff',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Reliable reminders and notifications', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive patient communication', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Secure record access verification', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Smart health assistant', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Improve Patient Care?',
    ctaSubtitle: 'Contact us to discuss your healthcare facility needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="Heart"
      visual={<HealthcareVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
