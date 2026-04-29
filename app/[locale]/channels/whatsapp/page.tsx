import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ChannelPage, IconName } from '@/components/pages/channel-page'
import { MessageCircle, CheckCheck, Clock } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.whatsapp
  
  return {
    title: isArabic ? 'واجهة WhatsApp Business API | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'تكامل WhatsApp Business API للتواصل المؤسسي مع العملاء في المملكة العربية السعودية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/channels/whatsapp`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/channels/whatsapp` }
        : { 'en': `${SITE_URL}/en/channels/whatsapp`, 'ar': `${SITE_URL}/ar/channels/whatsapp` },
    },
    openGraph: {
      title: isArabic ? 'واجهة WhatsApp Business API' : meta.title,
      description: isArabic 
        ? 'تكامل WhatsApp Business API للتواصل المؤسسي مع العملاء'
        : meta.description,
      url: `${SITE_URL}/${locale}/channels/whatsapp`,
      type: 'website',
    },
  }
}

// WhatsApp Conversation Preview Visual Component
function WhatsAppPreviewVisual({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
          <MessageCircle className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-card-foreground">
          {isArabic ? 'معاينة محادثة الأعمال' : 'Business Conversation Preview'}
        </h3>
      </div>
      
      {/* WhatsApp-style Chat Preview */}
      <div className="mx-auto max-w-md rounded-xl bg-[#ECE5DD] p-4 dark:bg-[#0B141A]">
        {/* Incoming Message - Approved Template */}
        <div className="mb-3 max-w-[85%]">
          <div className="rounded-lg rounded-tl-none bg-white p-3 shadow-sm dark:bg-[#202C33]">
            <p className="text-xs font-medium text-[#25D366] mb-1">
              {isArabic ? 'قالب معتمد' : 'Approved Template'}
            </p>
            <p className="text-sm text-foreground">
              {isArabic 
                ? 'مرحباً! طلبك #12345 قيد التجهيز وسيتم شحنه قريباً.'
                : 'Hello! Your order #12345 is being prepared and will ship soon.'}
            </p>
            <div className="mt-2 flex items-center justify-end gap-1">
              <span className="text-[10px] text-muted-foreground">
                <Clock className="inline h-3 w-3 mr-0.5" />
                10:30
              </span>
              <CheckCheck className="h-4 w-4 text-[#53BDEB]" />
            </div>
          </div>
        </div>
        
        {/* Outgoing Message - Customer Reply */}
        <div className="mb-3 flex justify-end">
          <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#DCF8C6] p-3 shadow-sm dark:bg-[#005C4B]">
            <p className="text-sm text-foreground">
              {isArabic ? 'شكراً! متى سيصل الطلب؟' : 'Thank you! When will it arrive?'}
            </p>
            <div className="mt-2 flex items-center justify-end gap-1">
              <span className="text-[10px] text-muted-foreground">10:32</span>
              <CheckCheck className="h-4 w-4 text-[#53BDEB]" />
            </div>
          </div>
        </div>
        
        {/* Quick Reply Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full border border-[#25D366] bg-white px-4 py-1.5 text-xs font-medium text-[#25D366] dark:bg-transparent">
            {isArabic ? 'تتبع الطلب' : 'Track Order'}
          </button>
          <button className="rounded-full border border-[#25D366] bg-white px-4 py-1.5 text-xs font-medium text-[#25D366] dark:bg-transparent">
            {isArabic ? 'التحدث مع الدعم' : 'Chat with Support'}
          </button>
        </div>
      </div>
      
      {/* Feature Notes */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: isArabic ? 'قوالب معتمدة' : 'Approved Templates', color: '#25D366' },
          { label: isArabic ? 'وسائط متعددة' : 'Rich Media', color: '#FDBF30' },
          { label: isArabic ? 'ردود سريعة' : 'Quick Replies', color: '#61C5BA' },
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2 rounded-lg bg-muted/50 p-3">
            <div 
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: feature.color }}
            />
            <span className="text-xs font-medium text-muted-foreground">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function WhatsAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'واجهة WhatsApp Business API',
    subtitle: 'تواصل مع عملائك عبر قناة المراسلة الأكثر استخداماً عالمياً',
    description: 'تكامل رسمي مع WhatsApp Business API يمكّن مؤسستك من التواصل مع العملاء عبر المنصة الأكثر شعبية. قوالب رسائل معتمدة، رسائل وسائط متعددة، وتكامل سلس.',
    features: [
      { iconName: 'CheckCheck' as IconName, title: 'حساب موثق', description: 'علامة التوثيق الخضراء لبناء الثقة مع العملاء' },
      { iconName: 'FileText' as IconName, title: 'قوالب الرسائل', description: 'قوالب رسائل معتمدة مسبقاً للإشعارات' },
      { iconName: 'Image' as IconName, title: 'الوسائط المتعددة', description: 'إرسال الصور والمستندات والفيديو' },
      { iconName: 'MessageCircle' as IconName, title: 'المحادثات الثنائية', description: 'دعم المحادثات التفاعلية مع العملاء' },
      { iconName: 'Bot' as IconName, title: 'تكامل الروبوت', description: 'ربط مع ChatBot للردود الآلية' },
      { iconName: 'BarChart3' as IconName, title: 'تحليلات متقدمة', description: 'تتبع التفاعل والأداء بالتفصيل' },
    ],
    benefits: [
      'واجهة برمجة تطبيقات رسمية من Meta',
      'قناة تواصل عالية التفاعل مع العملاء',
      'دعم كامل للغة العربية',
      'تشفير من طرف إلى طرف',
      'قوالب رسائل معتمدة',
      'تكامل مع الأنظمة الحالية',
    ],
    useCases: [
      { title: 'خدمة العملاء', description: 'دعم فوري للعملاء عبر WhatsApp' },
      { title: 'إشعارات الطلبات', description: 'تحديثات الشحن وتأكيدات الطلب' },
      { title: 'حملات تسويقية', description: 'عروض ترويجية بالوسائط المتعددة' },
      { title: 'تذكيرات المواعيد', description: 'تذكيرات تفاعلية مع خيارات' },
      { title: 'استطلاعات الرضا', description: 'جمع ملاحظات العملاء' },
      { title: 'الإشعارات المصرفية', description: 'تنبيهات المعاملات والأرصدة' },
    ],
    ctaTitle: 'هل أنت مستعد للتواصل عبر WhatsApp؟',
    ctaSubtitle: 'تواصل معنا لتفعيل WhatsApp Business API لمؤسستك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'WhatsApp Business API',
    subtitle: 'Connect with your customers on the most-used messaging channel globally',
    description: 'WhatsApp Business API integration enabling your enterprise to engage customers on the most popular messaging platform. Pre-approved message templates, rich media messaging, and seamless integration.',
    features: [
      { iconName: 'CheckCheck' as IconName, title: 'Verified Account', description: 'Green verification badge to build customer trust' },
      { iconName: 'FileText' as IconName, title: 'Message Templates', description: 'Pre-approved message templates for notifications' },
      { iconName: 'Image' as IconName, title: 'Rich Media', description: 'Send images, documents, and video' },
      { iconName: 'MessageCircle' as IconName, title: 'Two-Way Conversations', description: 'Support interactive customer conversations' },
      { iconName: 'Bot' as IconName, title: 'ChatBot Integration', description: 'Connect with ChatBot for automated responses' },
      { iconName: 'BarChart3' as IconName, title: 'Advanced Analytics', description: 'Track engagement and performance in detail' },
    ],
    benefits: [
      'Official Meta API',
      'High-engagement customer communication channel',
      'Full Arabic language support',
      'End-to-end encryption',
      'Pre-approved message templates',
      'Integration with existing systems',
    ],
    useCases: [
      { title: 'Customer Service', description: 'Instant customer support via WhatsApp' },
      { title: 'Order Notifications', description: 'Shipping updates and order confirmations' },
      { title: 'Marketing Campaigns', description: 'Rich media promotional offers' },
      { title: 'Appointment Reminders', description: 'Interactive reminders with options' },
      { title: 'Satisfaction Surveys', description: 'Collect customer feedback' },
      { title: 'Banking Notifications', description: 'Transaction and balance alerts' },
    ],
    ctaTitle: 'Ready to Connect via WhatsApp?',
    ctaSubtitle: 'Contact us to activate WhatsApp Business API for your enterprise',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <ChannelPage
      locale={locale}
      iconName="MessageCircle"
      visual={<WhatsAppPreviewVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
