import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.cookies
  
  return {
    title: isArabic ? 'سياسة ملفات تعريف الارتباط | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'سياسة ملفات تعريف الارتباط لمنصة آي ميسيف للرسائل المؤسسية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/cookies`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/cookies` }
        : { 'en': `${SITE_URL}/en/cookies`, 'ar': `${SITE_URL}/ar/cookies` },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'

  const cookieTable = isArabic ? [
    { category: 'ملفات تعريف الارتباط الضرورية', purpose: 'مطلوبة لتشغيل الموقع والوظائف الأساسية مثل الأمان وإدارة الجلسة', duration: 'جلسة / حتى سنة واحدة', required: 'مطلوبة' },
    { category: 'ملفات تعريف الارتباط الوظيفية', purpose: 'تذكر تفضيلاتك مثل اللغة والمنطقة لتحسين تجربتك', duration: 'حتى سنة واحدة', required: 'اختيارية' },
    { category: 'ملفات تعريف الارتباط التحليلية', purpose: 'مساعدتنا على فهم كيفية استخدام الزوار للموقع لتحسين الأداء والمحتوى', duration: 'حتى سنتين', required: 'اختيارية' },
    { category: 'ملفات تعريف الارتباط الأمنية', purpose: 'حماية الموقع من الأنشطة الضارة ومنع الاحتيال', duration: 'جلسة / حتى سنة واحدة', required: 'مطلوبة' },
  ] : [
    { category: 'Essential Cookies', purpose: 'Required for the website to function and for basic features such as security and session management', duration: 'Session / Up to 1 year', required: 'Required' },
    { category: 'Functional Cookies', purpose: 'Remember your preferences such as language and region to improve your experience', duration: 'Up to 1 year', required: 'Optional' },
    { category: 'Analytics Cookies', purpose: 'Help us understand how visitors use the website to improve performance and content', duration: 'Up to 2 years', required: 'Optional' },
    { category: 'Security Cookies', purpose: 'Protect the website from malicious activities and prevent fraud', duration: 'Session / Up to 1 year', required: 'Required' },
  ]

  return (
    <div className="min-h-screen">
      {/* Dark Purple Hero/Top Band for Header Visibility */}
      <section className="relative bg-[#492E51] py-16 lg:py-20 overflow-hidden">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {isArabic ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
            </h1>
            <p className="text-white/70 text-sm">
              {isArabic ? 'آخر تحديث: 29 أبريل 2026' : 'Last updated: 29 April 2026'}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-muted-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground [&_a]:text-[#61C5BA] [&_a:hover]:underline">
              {isArabic ? (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. ما هي ملفات تعريف الارتباط؟</h2>
                  <p>
                    ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم تخزينها على جهازك (الكمبيوتر أو الهاتف المحمول أو الجهاز اللوحي) عند زيارة موقعنا. تساعدنا هذه الملفات على تشغيل الموقع بشكل صحيح وتحسين تجربتك وتقديم خدمات أفضل.
                  </p>
                  <p>
                    قد نستخدم أيضاً تقنيات مشابهة مثل وحدات البكسل وعلامات الويب لأغراض مماثلة.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">ملفات تعريف الارتباط الضرورية</h3>
                  <p>
                    هذه الملفات ضرورية لتشغيل موقعنا بشكل صحيح. تمكنك من التنقل في الموقع واستخدام الميزات الأساسية مثل الوصول إلى المناطق الآمنة. بدون هذه الملفات، قد لا تعمل بعض الخدمات بشكل صحيح.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">ملفات تعريف الارتباط الوظيفية</h3>
                  <p>
                    تساعدنا هذه الملفات على تذكر تفضيلاتك (مثل اللغة المفضلة والمنطقة) لتحسين تجربتك على الموقع. المعلومات التي تجمعها هذه الملفات قد تكون مجهولة الهوية ولا يمكنها تتبع نشاطك على مواقع أخرى.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">ملفات تعريف الارتباط التحليلية</h3>
                  <p>
                    نستخدم هذه الملفات لفهم كيفية استخدام الزوار لموقعنا، مما يساعدنا على تحسين أدائه ومحتواه. تجمع هذه الملفات معلومات مجمعة ومجهولة الهوية.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">ملفات تعريف الارتباط الأمنية</h3>
                  <p>
                    تساعدنا هذه الملفات في حماية الموقع من الأنشطة الضارة ومنع الاحتيال وضمان أمان معلوماتك.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. جدول ملفات تعريف الارتباط</h2>
                  <p>
                    يوضح الجدول التالي الفئات الرئيسية لملفات تعريف الارتباط التي قد نستخدمها:
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. What are Cookies?</h2>
                  <p>
                    Cookies are small text files stored on your device (computer, mobile phone, or tablet) when you visit our website. These files help us operate the website properly, improve your experience, and provide better services.
                  </p>
                  <p>
                    We may also use similar technologies such as pixels and web beacons for similar purposes.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for our website to function properly. They enable you to navigate the site and use basic features such as accessing secure areas. Without these cookies, some services may not function correctly.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Functional Cookies</h3>
                  <p>
                    These cookies help us remember your preferences (such as preferred language and region) to improve your experience on the website. The information collected by these cookies may be anonymized and cannot track your activity on other websites.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
                  <p>
                    We use these cookies to understand how visitors use our website, which helps us improve its performance and content. These cookies collect aggregated and anonymized information.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Security Cookies</h3>
                  <p>
                    These cookies help us protect the website from malicious activities, prevent fraud, and ensure the security of your information.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookie Table</h2>
                  <p>
                    The following table outlines the main categories of cookies we may use:
                  </p>
                </>
              )}

              {/* Cookie Table - Responsive */}
              <div className="overflow-x-auto my-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="min-w-full border border-border rounded-lg text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-3 py-3 text-start font-semibold text-foreground border-b border-border whitespace-nowrap">
                        {isArabic ? 'الفئة' : 'Category'}
                      </th>
                      <th className="px-3 py-3 text-start font-semibold text-foreground border-b border-border">
                        {isArabic ? 'الغرض' : 'Purpose'}
                      </th>
                      <th className="px-3 py-3 text-start font-semibold text-foreground border-b border-border whitespace-nowrap">
                        {isArabic ? 'المدة' : 'Duration'}
                      </th>
                      <th className="px-3 py-3 text-start font-semibold text-foreground border-b border-border whitespace-nowrap">
                        {isArabic ? 'مطلوبة / اختيارية' : 'Required'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                        <td className="px-3 py-3 text-foreground border-b border-border font-medium whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="px-3 py-3 text-muted-foreground border-b border-border min-w-[200px]">
                          {row.purpose}
                        </td>
                        <td className="px-3 py-3 text-muted-foreground border-b border-border whitespace-nowrap">
                          {row.duration}
                        </td>
                        <td className="px-3 py-3 text-muted-foreground border-b border-border whitespace-nowrap">
                          {row.required}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {isArabic ? (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. ملفات تعريف الارتباط التسويقية</h2>
                  <p>
                    لا نستخدم حالياً ملفات تعريف الارتباط التسويقية على هذا الموقع. في حال قررنا استخدامها مستقبلاً، سنقوم بتحديث هذه السياسة وإخطارك وفقاً لذلك.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. ملفات تعريف الارتباط من الأطراف الثالثة</h2>
                  <p>
                    قد يتم وضع بعض ملفات تعريف الارتباط من قبل مزودي خدمات خارجيين نتعاون معهم. هذه الملفات تخضع لسياسات الخصوصية الخاصة بهؤلاء المزودين.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. إدارة ملفات تعريف الارتباط</h2>
                  <p>
                    يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات متصفحك. توفر معظم المتصفحات خيارات لـ:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>عرض ملفات تعريف الارتباط المخزنة على جهازك</li>
                    <li>حذف ملفات تعريف الارتباط بشكل فردي أو جماعي</li>
                    <li>حظر ملفات تعريف الارتباط من مواقع معينة أو جميع المواقع</li>
                    <li>تلقي إشعارات عند تعيين ملفات تعريف ارتباط جديدة</li>
                  </ul>
                  <p className="mt-4">
                    يرجى ملاحظة أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على وظائف الموقع وتجربة استخدامك.
                  </p>
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="m-0">
                      <strong>ملاحظة:</strong> حيثما كان ذلك مطلوباً، يمكن للمستخدمين إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح أو أي أدوات موافقة على ملفات تعريف الارتباط متاحة على الموقع.
                    </p>
                  </div>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. تحديثات السياسة</h2>
                  <p>
                    قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية. سننشر أي تغييرات على هذه الصفحة ونحدث تاريخ &quot;آخر تحديث&quot;.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. معلومات إضافية</h2>
                  <p>
                    لمزيد من المعلومات حول كيفية تعاملنا مع بياناتك الشخصية، يرجى مراجعة{' '}
                    <Link href={`/${locale}/privacy`}>
                      سياسة الخصوصية
                    </Link>.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. تواصل معنا</h2>
                  <p>
                    إذا كان لديك أي أسئلة حول سياسة ملفات تعريف الارتباط هذه، يرجى التواصل معنا على:
                  </p>
                  <p className="mt-4">
                    <strong>البريد الإلكتروني:</strong>{' '}
                    <a href="mailto:info@imissive.com">
                      info@imissive.com
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. Marketing Cookies</h2>
                  <p>
                    We do not currently use marketing cookies on this website. If we decide to use them in the future, we will update this policy and notify you accordingly.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Cookies</h2>
                  <p>
                    Some cookies may be placed by third-party service providers we work with. These cookies are subject to the privacy policies of those providers.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. Managing Cookies</h2>
                  <p>
                    You can control and manage cookies through your browser settings. Most browsers provide options to:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>View cookies stored on your device</li>
                    <li>Delete cookies individually or collectively</li>
                    <li>Block cookies from specific sites or all sites</li>
                    <li>Receive notifications when new cookies are set</li>
                  </ul>
                  <p className="mt-4">
                    Please note that disabling some cookies may affect website functionality and your user experience.
                  </p>
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="m-0">
                      <strong>Note:</strong> Where required, users may manage cookie preferences through browser settings or any cookie consent tools made available on the website.
                    </p>
                  </div>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. Policy Updates</h2>
                  <p>
                    We may update this policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will post any changes on this page and update the &quot;Last updated&quot; date.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. Additional Information</h2>
                  <p>
                    For more information about how we handle your personal data, please see our{' '}
                    <Link href={`/${locale}/privacy`}>
                      Privacy Policy
                    </Link>.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
                  <p>
                    If you have any questions about this Cookie Policy, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@imissive.com">
                      info@imissive.com
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
