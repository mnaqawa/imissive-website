import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ContactForm } from '@/components/forms/contact-form'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.contact
  
  return {
    title: isArabic ? 'تواصل معنا | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'تواصل مع فريق آي ميسيف لمناقشة احتياجات رسائل مؤسستك في المملكة العربية السعودية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/contact` }
        : { 'en': `${SITE_URL}/en/contact`, 'ar': `${SITE_URL}/ar/contact` },
    },
    openGraph: {
      title: isArabic ? 'تواصل معنا | آي ميسيف' : meta.title,
      description: isArabic 
        ? 'تواصل مع فريق آي ميسيف لمناقشة احتياجات رسائل مؤسستك'
        : meta.description,
      url: `${SITE_URL}/${locale}/contact`,
      type: 'website',
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'تواصل معنا',
    subtitle: 'فريقنا جاهز لمساعدتك في تحقيق أهداف اتصالات مؤسستك',
    formTitle: 'أرسل لنا رسالة',
    contactInfo: 'معلومات الاتصال',
    contactItems: [
      { icon: Phone, label: 'الهاتف', value: '+966 580 18 18 11', href: 'tel:+966580181811' },
      { icon: Mail, label: 'المبيعات', value: 'sales@imissive.com', href: 'mailto:sales@imissive.com' },
      { icon: Mail, label: 'الدعم الفني', value: 'support@imissive.com', href: 'mailto:support@imissive.com' },
      { icon: Mail, label: 'الاستفسارات العامة', value: 'info@imissive.com', href: 'mailto:info@imissive.com' },
      { icon: MapPin, label: 'العنوان', value: 'المملكة العربية السعودية، الرياض، شارع العليا' },
      { icon: Clock, label: 'ساعات العمل', value: 'الأحد – الخميس، 9:00 ص – 6:00 م' },
    ],
  } : {
    title: 'Contact Us',
    subtitle: 'Our team is ready to help you achieve your enterprise communication goals',
    formTitle: 'Send us a message',
    contactInfo: 'Contact Information',
    contactItems: [
      { icon: Phone, label: 'Phone', value: '+966 580 18 18 11', href: 'tel:+966580181811' },
      { icon: Mail, label: 'Sales Inquiries', value: 'sales@imissive.com', href: 'mailto:sales@imissive.com' },
      { icon: Mail, label: 'Support Inquiries', value: 'support@imissive.com', href: 'mailto:support@imissive.com' },
      { icon: Mail, label: 'General Inquiries', value: 'info@imissive.com', href: 'mailto:info@imissive.com' },
      { icon: MapPin, label: 'Address', value: 'Saudi Arabia, Riyadh, Olaya St.' },
      { icon: Clock, label: 'Business Hours', value: 'Sunday – Thursday, 9:00 AM – 6:00 PM' },
    ],
  }

  return (
    <>
      {/* Premium Hero */}
      <section className="relative overflow-hidden bg-[#492E51] py-24 lg:py-32">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FDBF30]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#61C5BA]/8 blur-[120px]" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <MessageSquare className="h-4 w-4" />
              {isArabic ? 'تواصل معنا' : 'Get in Touch'}
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-pretty text-lg text-white/75 lg:text-xl">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">{content.formTitle}</h2>
                <ContactForm locale={locale} />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">{content.contactInfo}</h2>
                <div className="space-y-4">
                  {content.contactItems.map((item, index) => {
                    const colors = ['bg-[#FDBF30]/10 text-[#FDBF30]', 'bg-[#61C5BA]/10 text-[#61C5BA]', 'bg-[#F68C20]/10 text-[#F68C20]', 'bg-[#E0357C]/10 text-[#E0357C]', 'bg-[#492E51]/10 text-[#492E51]', 'bg-[#61C5BA]/10 text-[#61C5BA]']
                    return (
                      <div key={index} className="flex items-start gap-4 rounded-xl border-2 border-border/50 bg-card p-5 transition-all hover:border-[#61C5BA]/50 hover:shadow-sm">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${colors[index % colors.length]}`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-card-foreground">{item.label}</h3>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              className="mt-0.5 block text-sm text-muted-foreground hover:text-[#492E51] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
