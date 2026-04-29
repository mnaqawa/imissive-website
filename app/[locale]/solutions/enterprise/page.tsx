import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { Server, Workflow, Shield, BarChart3 } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.enterprise
  
  return {
    title: isArabic ? 'حلول المؤسسات | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'اتصالات داخلية وخارجية واسعة النطاق للمؤسسات والشركات الكبرى'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/enterprise`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/enterprise` }
        : { 'en': `${SITE_URL}/en/solutions/enterprise`, 'ar': `${SITE_URL}/ar/solutions/enterprise` },
    },
    openGraph: {
      title: isArabic ? 'حلول المؤسسات' : meta.title,
      description: isArabic 
        ? 'اتصالات داخلية وخارجية واسعة النطاق للمؤسسات'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/enterprise`,
      type: 'website',
    },
  }
}

// Enterprise Communication Control Visual
function EnterpriseVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: Server, label: 'النظام الداخلي', sublabel: 'مصدر الرسائل' },
    { icon: Workflow, label: 'API / SMPP', sublabel: 'بوابة التكامل' },
    { icon: Shield, label: 'الموافقة / التوجيه', sublabel: 'التحكم والحوكمة' },
    { icon: BarChart3, label: 'تقارير التوصيل', sublabel: 'التحليلات والرؤى' },
  ] : [
    { icon: Server, label: 'Internal System', sublabel: 'Message Source' },
    { icon: Workflow, label: 'API / SMPP', sublabel: 'Integration Gateway' },
    { icon: Shield, label: 'Approval / Routing', sublabel: 'Control & Governance' },
    { icon: BarChart3, label: 'Delivery Reporting', sublabel: 'Analytics & Insights' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FDBF30]/10 px-4 py-1.5 text-sm font-medium text-[#FDBF30]">
          <Server className="h-4 w-4" />
          {isArabic ? 'التحكم في اتصالات المؤسسة' : 'Enterprise Communication Control'}
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
              <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-[#FDBF30] to-[#61C5BA]" />
            )}
            {index < steps.length - 1 && (
              <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#FDBF30] to-[#61C5BA]" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'العمليات الداخلية' : 'Internal Operations'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'ضوابط الحساب' : 'Account Controls'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تكاملات المؤسسة' : 'Enterprise Integrations'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تقارير التوصيل' : 'Delivery Reporting'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function EnterprisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'المؤسسات',
    subtitle: 'بنية تحتية للرسائل على مستوى المؤسسات للشركات الكبرى',
    description: 'منصة آي ميسيف توفر حلول اتصال شاملة للمؤسسات الكبرى. من الاتصالات الداخلية إلى مشاركة العملاء على نطاق واسع، نوفر البنية التحتية التي تحتاجها لتشغيل عملياتك.',
    challenges: [
      { title: 'الحجم الكبير', description: 'التعامل مع أحجام رسائل كبيرة يومياً' },
      { title: 'التكامل المؤسسي', description: 'الربط مع الأنظمة والتطبيقات الحالية' },
      { title: 'الأمان', description: 'حماية البيانات المؤسسية الحساسة' },
      { title: 'الموثوقية', description: 'ضمان استمرارية الخدمة' },
      { title: 'التخصيص', description: 'حلول مخصصة لاحتياجات الأعمال المحددة' },
      { title: 'التقارير', description: 'رؤية شاملة للأداء والتحليلات' },
    ],
    solutions: [
      { iconName: 'Users' as IconName, title: 'اتصالات الموظفين', description: 'تنبيهات وإشعارات داخلية للموظفين' },
      { iconName: 'Bell' as IconName, title: 'إشعارات العملاء', description: 'تواصل مع قاعدة عملاء كبيرة بكفاءة' },
      { iconName: 'Lock' as IconName, title: 'المصادقة الثنائية', description: 'أمان محسن للأنظمة المؤسسية' },
      { iconName: 'Workflow' as IconName, title: 'تكامل API', description: 'واجهات برمجة قوية للربط مع أنظمتكم' },
      { iconName: 'BarChart3' as IconName, title: 'تحليلات متقدمة', description: 'تقارير مفصلة ولوحات تحكم مخصصة' },
      { iconName: 'MessageCircle' as IconName, title: 'دعم مخصص', description: 'مدير حساب مخصص ودعم حسب الاتفاقية' },
    ],
    benefits: [
      'بنية تحتية قابلة للتطوير للاتصالات عالية الحجم',
      'بنية تحتية عالية التوفر وخيارات SLA حسب الاتفاقية',
      'تكامل سلس مع SAP وOracle وMicrosoft',
      'خيارات دعم المؤسسات حسب اتفاقية الخدمة',
      'تقارير مخصصة وتحليلات متقدمة',
      'أمان على مستوى المؤسسات',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'رسائل جماعية موثوقة', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'تواصل مؤسسي تفاعلي', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'أمان محسن للأنظمة', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'أتمتة ذكية للاتصالات', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد للارتقاء با��صالات مؤسستك؟',
    ctaSubtitle: 'تواصل معنا لمناقشة حل مخصص لاحتياجاتك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Enterprise',
    subtitle: 'Enterprise-grade messaging infrastructure for large corporations',
    description: 'iMissive platform provides comprehensive communication solutions for large enterprises. From internal communications to large-scale customer engagement, we provide the infrastructure you need to run your operations.',
    challenges: [
      { title: 'High Volume', description: 'Handling large message volumes daily' },
      { title: 'Enterprise Integration', description: 'Connecting with existing systems and applications' },
      { title: 'Security', description: 'Protecting sensitive corporate data' },
      { title: 'Reliability', description: 'Ensuring service continuity' },
      { title: 'Customization', description: 'Solutions tailored to specific business needs' },
      { title: 'Reporting', description: 'Comprehensive visibility into performance and analytics' },
    ],
    solutions: [
      { iconName: 'Users' as IconName, title: 'Employee Communications', description: 'Internal alerts and notifications for employees' },
      { iconName: 'Bell' as IconName, title: 'Customer Notifications', description: 'Efficiently communicate with large customer base' },
      { iconName: 'Lock' as IconName, title: 'Two-Factor Authentication', description: 'Enhanced security for enterprise systems' },
      { iconName: 'Workflow' as IconName, title: 'API Integration', description: 'Robust APIs to connect with your systems' },
      { iconName: 'BarChart3' as IconName, title: 'Advanced Analytics', description: 'Detailed reports and custom dashboards' },
      { iconName: 'MessageCircle' as IconName, title: 'Dedicated Support', description: 'Dedicated account manager and support based on agreement' },
    ],
    benefits: [
      'Scalable infrastructure for high-volume communication',
      'High-availability infrastructure and SLA options based on agreement',
      'Seamless integration with SAP, Oracle, Microsoft',
      'Enterprise support options based on service agreement',
      'Custom reports and advanced analytics',
      'Enterprise-grade security',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Reliable bulk messaging', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive enterprise communication', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Enhanced system security', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Smart communication automation', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Elevate Your Enterprise Communications?',
    ctaSubtitle: 'Contact us to discuss a custom solution for your needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="Briefcase"
      visual={<EnterpriseVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
