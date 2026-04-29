import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { SolutionPage, IconName } from '@/components/pages/solution-page'
import { Package, Truck, Megaphone, Headphones } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.retail
  
  return {
    title: isArabic ? 'حلول التجزئة والتجارة الإلكترونية | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'تحديثات الطلبات والعروض الترويجية ومشاركة العملاء للتجزئة والتجارة الإلكترونية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/solutions/retail`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/solutions/retail` }
        : { 'en': `${SITE_URL}/en/solutions/retail`, 'ar': `${SITE_URL}/ar/solutions/retail` },
    },
    openGraph: {
      title: isArabic ? 'حلول التجزئة والتجارة الإلكترونية' : meta.title,
      description: isArabic 
        ? 'تحديثات الطلبات والعروض الترويجية ومشاركة العملاء'
        : meta.description,
      url: `${SITE_URL}/${locale}/solutions/retail`,
      type: 'website',
    },
  }
}

// Customer Journey Messaging Visual
function RetailVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: Package, label: 'تأكيد الطلب', sublabel: 'تفاصيل الشراء' },
    { icon: Truck, label: 'تحديث الشحن', sublabel: 'حالة التوصيل' },
    { icon: Megaphone, label: 'العروض / التذكيرات', sublabel: 'حملات مستهدفة' },
    { icon: Headphones, label: 'دعم العملاء', sublabel: 'مساعدة تفاعلية' },
  ] : [
    { icon: Package, label: 'Order Confirmation', sublabel: 'Purchase Details' },
    { icon: Truck, label: 'Shipping Update', sublabel: 'Delivery Status' },
    { icon: Megaphone, label: 'Promotion / Reminder', sublabel: 'Targeted Campaigns' },
    { icon: Headphones, label: 'Customer Support', sublabel: 'Interactive Assistance' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#F68C20]/10 px-4 py-1.5 text-sm font-medium text-[#F68C20]">
          <Package className="h-4 w-4" />
          {isArabic ? 'رحلة رسائل العميل' : 'Customer Journey Messaging'}
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
              <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-[#F68C20] to-[#E0357C]" />
            )}
            {index < steps.length - 1 && (
              <div className="lg:hidden h-8 w-0.5 bg-gradient-to-b from-[#F68C20] to-[#E0357C]" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'اتصال الطلبات' : 'Order Communication'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'العروض الترويجية' : 'Promotions'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'تذكيرات السلة' : 'Cart Reminders'}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">{isArabic ? 'رسائل الدعم' : 'Support Messaging'}</span>
        </div>
      </div>
    </div>
  )
}

export default async function RetailPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'التجزئة والتجارة الإلكترونية',
    subtitle: 'حلول اتصال متكاملة لتعزيز تجربة التسوق ومشاركة العملاء',
    description: 'منصة آي ميسيف تساعد متاجر التجزئة والتجارة الإلكترونية على التواصل الفعال مع العملاء. من تأكيدات الطلبات إلى الحملات التسويقية، نوفر جميع قنوات الاتصال التي تحتاجها.',
    challenges: [
      { title: 'تجربة العميل', description: 'توفير تحديثات فورية وتفاعلية للعملاء' },
      { title: 'السلات المتروكة', description: 'استعادة العملاء الذين لم يكملوا الشراء' },
      { title: 'ولاء العملاء', description: 'بناء علاقات طويلة الأمد مع العملاء' },
      { title: 'المنافسة', description: 'التميز في سوق التجزئة المزدحم' },
      { title: 'التخصيص', description: 'رسائل مخصصة لكل عميل' },
      { title: 'التكامل', description: 'الربط مع منصات التجارة الإلكترونية' },
    ],
    solutions: [
      { iconName: 'Package' as IconName, title: 'تأكيد الطلبات', description: 'إشعارات فورية بتأكيد الطلب وتفاصيله' },
      { iconName: 'Truck' as IconName, title: 'تتبع الشحن', description: 'تحديثات مباشرة عن حالة الشحن والتوصيل' },
      { iconName: 'Target' as IconName, title: 'العروض والتخفيضات', description: 'حملات ترويجية مستهدفة وفعالة' },
      { iconName: 'Award' as IconName, title: 'برامج الولاء', description: 'إشعارات النقاط والمكافآت والعروض الحصرية' },
      { iconName: 'Users' as IconName, title: 'استعادة العملاء', description: 'تذكيرات السلات المتروكة والعروض الخاصة' },
      { iconName: 'MessageCircle' as IconName, title: 'خدمة العملاء', description: 'دعم تفاعلي عبر واتساب والروبوت الذكي' },
    ],
    benefits: [
      'دعم اتصال العملاء الموجه للتحويل',
      'تحسين رضا العملاء مع تحديثات فورية',
      'استعادة السلات المتروكة بفعالية',
      'تكامل سهل مع Shopify وWooCommerce وغيرها',
      'حملات تسويقية مخصصة وفعالة',
      'خيارات اتصال دعم العملاء',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'تأكيدات وعروض فورية', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'تجربة تسوق تفاعلية', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'تحقق آمن للمدفوعات', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'مساعد تسوق ذكي', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'هل أنت مستعد لتحسين مبيعاتك؟',
    ctaSubtitle: 'تواصل معنا لمناقشة احتياجات متجرك',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'Retail & E-commerce',
    subtitle: 'Integrated communication solutions to enhance shopping experience and customer engagement',
    description: 'iMissive platform helps retail and e-commerce stores communicate effectively with customers. From order confirmations to marketing campaigns, we provide all the communication channels you need.',
    challenges: [
      { title: 'Customer Experience', description: 'Providing instant and interactive updates to customers' },
      { title: 'Abandoned Carts', description: 'Recovering customers who did not complete purchase' },
      { title: 'Customer Loyalty', description: 'Building long-term relationships with customers' },
      { title: 'Competition', description: 'Standing out in the crowded retail market' },
      { title: 'Personalization', description: 'Customized messages for each customer' },
      { title: 'Integration', description: 'Connecting with e-commerce platforms' },
    ],
    solutions: [
      { iconName: 'Package' as IconName, title: 'Order Confirmations', description: 'Instant notifications with order confirmation and details' },
      { iconName: 'Truck' as IconName, title: 'Shipping Tracking', description: 'Live updates on shipping status and delivery' },
      { iconName: 'Target' as IconName, title: 'Promotions & Discounts', description: 'Targeted and effective promotional campaigns' },
      { iconName: 'Award' as IconName, title: 'Loyalty Programs', description: 'Points, rewards, and exclusive offer notifications' },
      { iconName: 'Users' as IconName, title: 'Customer Recovery', description: 'Abandoned cart reminders and special offers' },
      { iconName: 'MessageCircle' as IconName, title: 'Customer Service', description: 'Interactive support via WhatsApp and chatbot' },
    ],
    benefits: [
      'Support conversion-focused customer communication',
      'Improve customer satisfaction with instant updates',
      'Effectively recover abandoned carts',
      'Easy integration with Shopify, WooCommerce, and more',
      'Personalized and effective marketing campaigns',
      'Customer support communication options',
    ],
    channels: [
      { iconName: 'MessageSquare' as IconName, title: 'SMS', description: 'Instant confirmations and offers', href: `/${locale}/channels/sms` },
      { iconName: 'MessageCircle' as IconName, title: 'WhatsApp', description: 'Interactive shopping experience', href: `/${locale}/channels/whatsapp` },
      { iconName: 'Shield' as IconName, title: 'OTP', description: 'Secure payment verification', href: `/${locale}/channels/otp` },
      { iconName: 'Bot' as IconName, title: 'ChatBot', description: 'Smart shopping assistant', href: `/${locale}/channels/chatbot` },
    ],
    ctaTitle: 'Ready to Improve Your Sales?',
    ctaSubtitle: 'Contact us to discuss your store needs',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <SolutionPage
      locale={locale}
      iconName="ShoppingBag"
      visual={<RetailVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
