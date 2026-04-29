import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { ShoppingBag, Clock, Truck, CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.foodDelivery
  
  return {
    title: isArabic ? 'حلول توصيل الطعام | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'تتبع الطلبات في الوقت الفعلي وإشعارات التوصيل لتطبيقات ومنصات توصيل الطعام'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/food-delivery`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/food-delivery` }
        : { 'en': `${SITE_URL}/en/solutions/food-delivery`, 'ar': `${SITE_URL}/ar/solutions/food-delivery` },
    },
    openGraph: {
      title: isArabic ? 'حلول توصيل الطعام' : meta.title,
      description: isArabic 
        ? 'تتبع الطلبات في الوقت الفعلي وإشعارات التوصيل'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/food-delivery`,
      type: 'website',
    },
  }
}

// Delivery Lifecycle Visual
function FoodDeliveryVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: ShoppingBag, label: 'تم الطلب', sublabel: 'تأكيد الاستلام' },
    { icon: Clock, label: 'تحديث التحضير', sublabel: 'حالة المطبخ' },
    { icon: Truck, label: 'تحديث السائق', sublabel: 'التنسيق والتوصيل' },
    { icon: CheckCircle, label: 'تأكيد التوصيل', sublabel: 'إتمام الطلب' },
  ] : [
    { icon: ShoppingBag, label: 'Order Placed', sublabel: 'Receipt Confirmation' },
    { icon: Clock, label: 'Preparation Update', sublabel: 'Kitchen Status' },
    { icon: Truck, label: 'Driver Update', sublabel: 'Dispatch & Delivery' },
    { icon: CheckCircle, label: 'Delivery Confirmation', sublabel: 'Order Complete' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E0357C]/10 px-4 py-1.5 text-sm font-medium text-[#E0357C]">
          <Truck className="h-4 w-4" />
          {isArabic ? 'دورة حياة التوصيل' : 'Delivery Lifecycle'}
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
              <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-[#E0357C] to-[#F68C20]" />
            )}
            {index < steps.length - 1 && (
              <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#E0357C] to-[#F68C20]" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'حالة الطلب' : 'Order Status'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تنسيق السائق' : 'Driver Coordination'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'إشعارات العملاء' : 'Customer Notifications'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تحديثات التوصيل' : 'Delivery Updates'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function FoodDeliveryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'توصيل الطعام',
    subtitle: 'حلول اتصال سريعة وموثوقة لمنصات وتطبيقات توصيل الطعام',
    description: 'منصة آي ميسيف توفر بنية تحتية للرسائل مصممة لسرعة قطاع توصيل الطعام. من تأكيد الطلب إلى وصول السائق، نضمن إبقاء العملاء على اطلاع في كل خطوة.',
    challenges: [
      { title: 'السرعة', description: 'رسائل فورية في قطاع يعتمد على السرعة' },
      { title: 'تجربة العميل', description: 'إبقاء العملاء على اطلاع دائم بحالة طلباتهم' },
      { title: 'التنسيق', description: 'التواصل الفعال مع السائقين والمطاعم' },
      { title: 'الذروة', description: 'التعامل مع أحجام الرسائل الكبيرة في أوقات الذروة' },
      { title: 'رضا العملاء', description: 'تقليل الشكاوى من خلال الشفافية' },
      { title: 'التميز', description: 'تجربة عميل متفوقة في سوق تنافسي' },
    ],
    solutions: [
      { iconName: 'Bell' as IconName, title: 'تأكيد الطلب', description: 'إشعار فوري بتأكيد الطلب وتفاصيله' },
      { iconName: 'Clock' as IconName, title: 'تحديثات التحضير', description: 'إشعارات عند بدء تحضير الطلب' },
      { iconName: 'MapPin' as IconName, title: 'تتبع التوصيل', description: 'تحديثات مباشرة عن موقع السائق' },
      { iconName: 'Award' as IconName, title: 'طلب التقييم', description: 'رسائل لجمع تقييمات العملاء' },
      { iconName: 'Target' as IconName, title: 'العروض والكوبونات', description: 'حملات ترويجية مستهدفة' },
      { iconName: 'MessageCircle' as IconName, title: 'خدمة العملاء', description: 'دعم تفاعلي للاستفسارات والشكاوى' },
    ],
    benefits: [
      'تقليل استفسارات حالة الطلب المتكررة',
      'زيادة رضا العملاء مع الشفافية',
      'اتصال طلبات منخفض الكمون',
      'قدرة على التعامل مع ذروة الطلبات',
      'تكامل سهل مع منصات التوصيل',
      'تحليلات مفصلة عن أداء الرسائل',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'تحديثات سريعة وموثوقة', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'تتبع تفاعلي للطلبات', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'تحقق من هوية العميل', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'دعم آلي للاستفسارات', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد لتحسين تجربة التوصيل؟',
    ctaSubtitle: 'تواصل معنا لمناقشة احتياجات منصتك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Food Delivery',
    subtitle: 'Fast and reliable communication solutions for food delivery platforms and apps',
    description: 'iMissive platform provides messaging infrastructure designed for the speed of the food delivery sector. From order confirmation to driver arrival, we ensure customers stay informed at every step.',
    challenges: [
      { title: 'Speed', description: 'Instant messages in a speed-dependent sector' },
      { title: 'Customer Experience', description: 'Keeping customers informed about their order status' },
      { title: 'Coordination', description: 'Effective communication with drivers and restaurants' },
      { title: 'Peak Times', description: 'Handling large message volumes during peak hours' },
      { title: 'Customer Satisfaction', description: 'Reducing complaints through transparency' },
      { title: 'Differentiation', description: 'Superior customer experience in a competitive market' },
    ],
    solutions: [
      { iconName: 'Bell' as IconName, title: 'Order Confirmation', description: 'Instant notification with order confirmation and details' },
      { iconName: 'Clock' as IconName, title: 'Preparation Updates', description: 'Notifications when order preparation starts' },
      { iconName: 'MapPin' as IconName, title: 'Delivery Tracking', description: 'Live updates on driver location' },
      { iconName: 'Award' as IconName, title: 'Rating Requests', description: 'Messages to collect customer ratings' },
      { iconName: 'Target' as IconName, title: 'Offers & Coupons', description: 'Targeted promotional campaigns' },
      { iconName: 'MessageCircle' as IconName, title: 'Customer Service', description: 'Interactive support for inquiries and complaints' },
    ],
    benefits: [
      'Reduce repetitive order-status inquiries',
      'Increase customer satisfaction with transparency',
      'Low-latency order communication',
      'Ability to handle peak order volumes',
      'Easy integration with delivery platforms',
      'Detailed analytics on message performance',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Fast and reliable updates', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive order tracking', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Customer identity verification', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Automated inquiry support', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Improve Delivery Experience?',
    ctaSubtitle: 'Contact us to discuss your platform needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="Utensils"
      visual={<FoodDeliveryVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
