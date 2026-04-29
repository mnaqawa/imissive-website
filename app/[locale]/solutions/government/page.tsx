import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { Building2, Bell, Users, CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.government
  
  return {
    title: isArabic ? 'حلول الحكومة | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'اتصالات المواطنين وإشعارات الخدمات العامة للجهات الحكومية في المملكة العربية السعودية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/government`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/government` }
        : { 'en': `${SITE_URL}/en/solutions/government`, 'ar': `${SITE_URL}/ar/solutions/government` },
    },
    openGraph: {
      title: isArabic ? 'حلول الحكومة' : meta.title,
      description: isArabic 
        ? 'اتصالات المواطنين وإشعارات الخدمات العامة'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/government`,
      type: 'website',
    },
  }
}

// Citizen Communication Workflow Visual
function GovernmentVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: Building2, label: 'الخدمة الحكومية', sublabel: 'النظام المصدر' },
    { icon: Bell, label: 'الإشعار', sublabel: 'إنشاء الرسالة' },
    { icon: Users, label: 'قناة المواطن', sublabel: 'SMS / واتساب' },
    { icon: CheckCircle, label: 'رؤية الحالة', sublabel: 'تقرير التوصيل' },
  ] : [
    { icon: Building2, label: 'Government Service', sublabel: 'Source System' },
    { icon: Bell, label: 'Notification', sublabel: 'Message Creation' },
    { icon: Users, label: 'Citizen Channel', sublabel: 'SMS / WhatsApp' },
    { icon: CheckCircle, label: 'Status Visibility', sublabel: 'Delivery Report' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#61C5BA]/10 px-4 py-1.5 text-sm font-medium text-[#61C5BA]">
          <Building2 className="h-4 w-4" />
          {isArabic ? 'سير عمل اتصال المواطنين' : 'Citizen Communication Workflow'}
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
          <span className="text-xs text-muted-foreground">{isArabic ? 'إشعارات عامة' : 'Public Notifications'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'اتصال متعدد اللغات' : 'Multilingual Communication'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تحديثات الخدمات' : 'Service Updates'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تقارير التوصيل' : 'Delivery Reporting'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function GovernmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'الحكومة',
    subtitle: 'حلول اتصال فعالة للجهات الحكومية والخدمات العامة',
    description: 'منصة آي ميسيف توفر قنوات اتصال موثوقة بين الجهات الحكومية والمواطنين. من إشعارات الخدمات إلى التنبيهات العامة، نساعد في تحسين تجربة المواطن الرقمية.',
    challenges: [
      { title: 'الوصول للمواطنين', description: 'التواصل الفعال مع جميع شرائح المجتمع' },
      { title: 'الرسائل الجماعية', description: 'إرسال إشعارات للمستفيدين على نطاق واسع' },
      { title: 'التعددية اللغوية', description: 'دعم اللغتين العربية والإنجليزية' },
      { title: 'التحول الرقمي', description: 'دعم مبادرات رؤية 2030 الرقمية' },
      { title: 'أمن المعلومات', description: 'حماية بيانات المواطنين' },
      { title: 'الموثوقية', description: 'ضمان وصول الرسائل المهمة' },
    ],
    solutions: [
      { iconName: 'Bell' as IconName, title: 'إشعارات الخدمات', description: 'تحديثات حالة الطلبات والمعاملات الحكومية' },
      { iconName: 'Users' as IconName, title: 'التواصل الجماهيري', description: 'حملات توعية وإعلانات عامة' },
      { iconName: 'FileText' as IconName, title: 'المستندات الرقمية', description: 'إرسال شهادات ووثائق رقمية' },
      { iconName: 'Shield' as IconName, title: 'التحقق من الهوية', description: 'OTP للخدمات الحكومية الإلكترونية' },
      { iconName: 'Globe' as IconName, title: 'دعم متعدد اللغات', description: 'رسائل بالعربية والإنجليزية' },
      { iconName: 'MessageCircle' as IconName, title: 'خدمة المستفيدين', description: 'دعم تفاعلي عبر واتساب والروبوت الذكي' },
    ],
    benefits: [
      'اتصال المواطنين على نطاق واسع',
      'دعم كامل للغة العربية',
      'قدرة على إرسال رسائل بأحجام كبيرة',
      'تقارير مفصلة عن التوصيل',
      'تكامل مع الأنظمة الحكومية',
      'بنية تحتية آمنة ومحلية',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'إشعارات وتنبيهات عامة', href: `/${locale}/channels/sms` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'تحقق للخدمات الإلكترونية', href: `/${locale}/channels/otp` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'تواصل تفاعلي مع المواطنين', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'خدمة ذاتية آلية', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد لتحسين خدمات المواطنين؟',
    ctaSubtitle: 'تواصل معنا لمناقشة احتياجات جهت��م الحكومية',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Government',
    subtitle: 'Effective communication solutions for government entities and public services',
    description: 'iMissive platform provides reliable communication channels between government entities and citizens. From service notifications to public alerts, we help improve the digital citizen experience.',
    challenges: [
      { title: 'Citizen Reach', description: 'Effective communication with all segments of society' },
      { title: 'Mass Messaging', description: 'Sending notifications to beneficiaries at scale' },
      { title: 'Multilingual Support', description: 'Supporting both Arabic and English' },
      { title: 'Digital Transformation', description: 'Supporting Vision 2030 digital initiatives' },
      { title: 'Information Security', description: 'Protecting citizen data' },
      { title: 'Reliability', description: 'Ensuring delivery of important messages' },
    ],
    solutions: [
      { iconName: 'Bell' as IconName, title: 'Service Notifications', description: 'Status updates for applications and government transactions' },
      { iconName: 'Users' as IconName, title: 'Mass Communication', description: 'Awareness campaigns and public announcements' },
      { iconName: 'FileText' as IconName, title: 'Digital Documents', description: 'Sending digital certificates and documents' },
      { iconName: 'Shield' as IconName, title: 'Identity Verification', description: 'OTP for e-government services' },
      { iconName: 'Globe' as IconName, title: 'Multilingual Support', description: 'Messages in Arabic and English' },
      { iconName: 'MessageCircle' as IconName, title: 'Beneficiary Service', description: 'Interactive support via WhatsApp and chatbot' },
    ],
    benefits: [
      'Large-scale citizen communication',
      'Full Arabic language support',
      'Ability to send high-volume messages',
      'Detailed delivery reports',
      'Integration with government systems',
      'Secure and local infrastructure',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Public notifications and alerts', href: `/${locale}/channels/sms` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Verification for e-services', href: `/${locale}/channels/otp` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive citizen communication', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Automated self-service', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Improve Citizen Services?',
    ctaSubtitle: 'Contact us to discuss your government entity needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="Building2"
      visual={<GovernmentVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
