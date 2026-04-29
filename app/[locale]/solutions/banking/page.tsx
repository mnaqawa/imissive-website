import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { Shield, Bell, CheckCircle, FileText } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.banking
  
  return {
    title: isArabic ? 'حلول البنوك والمالية | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'رسائل المعاملات الآمنة والتحقق من الهوية وإشعارات الحسابات للقطاع المصرفي والمالي'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/banking`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/banking` }
        : { 'en': `${SITE_URL}/en/solutions/banking`, 'ar': `${SITE_URL}/ar/solutions/banking` },
    },
    openGraph: {
      title: isArabic ? 'حلول البنوك والمالية' : meta.title,
      description: isArabic 
        ? 'رسائل المعاملات الآمنة والتحقق من الهوية'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/banking`,
      type: 'website',
    },
  }
}

// Secure Financial Communication Flow Visual
function BankingVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: Shield, label: 'إجراء العميل', sublabel: 'تسجيل الدخول / معاملة' },
    { icon: Bell, label: 'OTP / تنبيه', sublabel: 'إشعار المعاملة' },
    { icon: FileText, label: 'إدارة المرسل', sublabel: 'الامتثال والحوكمة' },
    { icon: CheckCircle, label: 'تقرير التوصيل', sublabel: 'سجل التدقيق' },
  ] : [
    { icon: Shield, label: 'Customer Action', sublabel: 'Login / Transaction' },
    { icon: Bell, label: 'OTP / Alert', sublabel: 'Transaction Notification' },
    { icon: FileText, label: 'Sender Governance', sublabel: 'Compliance & Control' },
    { icon: CheckCircle, label: 'Delivery Report', sublabel: 'Audit Trail' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FDBF30]/10 px-4 py-1.5 text-sm font-medium text-[#FDBF30]">
          <Shield className="h-4 w-4" />
          {isArabic ? 'تدفق الاتصال المالي الآمن' : 'Secure Financial Communication Flow'}
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
          <span className="text-xs text-muted-foreground">{isArabic ? 'المصادقة' : 'Authentication'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تنبيهات المعاملات' : 'Transaction Alerts'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'رؤية التوصيل' : 'Delivery Visibility'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'جاهز للتدقيق' : 'Audit-Ready'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function BankingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'البنوك والمالية',
    subtitle: 'حلول رسائل آمنة ومتوافقة للقطاع المصرفي والمالي',
    description: 'توفر منصة آي ميسيف بنية تحتية للرسائل مصممة خصيصاً لتلبية متطلبات القطاع المصرفي والمالي. من التحقق من الهوية إلى إشعارات المعاملات، نضمن وصول رسائلك بأمان وموثوقية.',
    challenges: [
      { title: 'أمان المعاملات', description: 'حماية العمليات المالية من الاحتيال والوصول غير المصرح به' },
      { title: 'الامتثال التنظيمي', description: 'التوافق مع متطلبات الجهات التنظيمية المالية' },
      { title: 'تجربة العميل', description: 'توفير اتصال فوري وموثوق للعملاء' },
      { title: 'التكامل المؤسسي', description: 'الربط مع الأنظمة البنكية الأساسية والتطبيقات' },
      { title: 'التوفر العالي', description: 'بنية تحتية عالية التوفر للرسائل' },
      { title: 'قابلية التوسع', description: 'التعامل مع أحجام الرسائل المتزايدة' },
    ],
    solutions: [
      { iconName: 'Shield' as IconName, title: 'التحقق الثنائي', description: 'رموز OTP آمنة للمعاملات وتسجيل الدخول' },
      { iconName: 'Bell' as IconName, title: 'تنبيهات المعاملات', description: 'إشعارات فورية للإيداعات والسحوبات والتحويلات' },
      { iconName: 'CreditCard' as IconName, title: 'إشعارات البطاقات', description: 'تنبيهات استخدام البطاقات والمدفوعات' },
      { iconName: 'Lock' as IconName, title: 'تنبيهات الأمان', description: 'إشعارات محاولات الدخول المشبوهة' },
      { iconName: 'FileText' as IconName, title: 'كشوف الحساب', description: 'إرسال ملخصات وكشوف الحساب الدورية' },
      { iconName: 'MessageCircle' as IconName, title: 'خدمة العملاء', description: 'دعم تفاعلي عبر واتساب والروبوت الذكي' },
    ],
    benefits: [
      'تقليل الاحتيال من خلال التحقق الفوري',
      'تحسين تجربة العميل مع إشعارات في الوقت الفعلي',
      'بنية تحتية آمنة ومشفرة',
      'تكامل سلس مع الأنظمة البنكية الأساسية',
      'بنية تحتية عالية التوفر للرسائل',
      'مصممة لدعم سير العمل المالي المنظم',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'تنبيهات وإشعارات فورية', href: `/${locale}/channels/sms` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'تحقق آمن من المعاملات', href: `/${locale}/channels/otp` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'خدمة عملاء تفاعلية', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'دعم آلي للعملاء', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد لتحسين اتصالات البنك؟',
    ctaSubtitle: 'تواصل معنا لمناقشة احتياجاتك المصرفية',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Banking & Finance',
    subtitle: 'Secure and compliant messaging solutions for the banking and financial sector',
    description: 'iMissive platform provides messaging infrastructure designed specifically to meet the requirements of the banking and financial sector. From identity verification to transaction notifications, we ensure your messages reach customers securely and reliably.',
    challenges: [
      { title: 'Transaction Security', description: 'Protecting financial operations from fraud and unauthorized access' },
      { title: 'Regulatory Compliance', description: 'Alignment with financial regulatory requirements' },
      { title: 'Customer Experience', description: 'Providing instant and reliable communication to customers' },
      { title: 'Enterprise Integration', description: 'Connecting with core banking systems and applications' },
      { title: 'High Availability', description: 'High-availability messaging infrastructure' },
      { title: 'Scalability', description: 'Handling growing message volumes' },
    ],
    solutions: [
      { iconName: 'Shield' as IconName, title: 'Two-Factor Authentication', description: 'Secure OTP codes for transactions and login' },
      { iconName: 'Bell' as IconName, title: 'Transaction Alerts', description: 'Instant notifications for deposits, withdrawals, and transfers' },
      { iconName: 'CreditCard' as IconName, title: 'Card Notifications', description: 'Card usage and payment alerts' },
      { iconName: 'Lock' as IconName, title: 'Security Alerts', description: 'Notifications for suspicious login attempts' },
      { iconName: 'FileText' as IconName, title: 'Account Statements', description: 'Periodic account summaries and statements' },
      { iconName: 'MessageCircle' as IconName, title: 'Customer Service', description: 'Interactive support via WhatsApp and chatbot' },
    ],
    benefits: [
      'Reduce fraud through instant verification',
      'Improve customer experience with real-time notifications',
      'Secure and encrypted infrastructure',
      'Seamless integration with core banking systems',
      'High-availability messaging infrastructure',
      'Designed to support regulated financial communication workflows',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Instant alerts and notifications', href: `/${locale}/channels/sms` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Secure transaction verification', href: `/${locale}/channels/otp` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive customer service', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Automated customer support', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Enhance Your Bank Communications?',
    ctaSubtitle: 'Contact us to discuss your banking needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="Landmark"
      visual={<BankingVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
