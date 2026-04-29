import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.privacy
  
  return {
    title: isArabic ? 'سياسة الخصوصية | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'سياسة الخصوصية لمنصة آي ميسيف للرسائل المؤسسية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/privacy` }
        : { 'en': `${SITE_URL}/en/privacy`, 'ar': `${SITE_URL}/ar/privacy` },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'

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
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. مقدمة</h2>
                  <p>
                    تلتزم آي ميسيف (&quot;نحن&quot; أو &quot;الشركة&quot;) بحماية خصوصية المستخدمين والعملاء. توضح هذه السياسة كيفية جمع واستخدام ومشاركة وحماية المعلومات الشخصية عند استخدام خدماتنا ومنصتنا.
                  </p>
                  <p>
                    تنطبق هذه السياسة على جميع الخدمات التي تقدمها آي ميسيف بما في ذلك خدمات الرسائل القصيرة SMS وWhatsApp Business API وOTP وخدمات الروبوت الذكي.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. المعلومات التي نجمعها</h2>
                  <p>نقوم بجمع أنواع مختلفة من المعلومات لتوفير خدماتنا وتحسينها:</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">معلومات الحساب والتسجيل</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                    <li>معلومات الشركة (اسم الشركة، السجل التجاري، القطاع)</li>
                    <li>معلومات الفوترة والدفع</li>
                    <li>بيانات اعتماد الحساب</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">بيانات استخدام الخدمة</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>سجلات الرسائل المرسلة (البيانات الوصفية، أرقام المستلمين، حالة التسليم)</li>
                    <li>بيانات استخدام API وسجلات النظام</li>
                    <li>تقارير التسليم والتحليلات</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">المعلومات التقنية</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>عنوان IP ونوع المتصفح</li>
                    <li>معلومات الجهاز ونظام التشغيل</li>
                    <li>ملفات تعريف الارتباط والتقنيات المشابهة</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. كيف نستخدم المعلومات</h2>
                  <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>توفير وتشغيل وصيانة خدماتنا</li>
                    <li>معالجة وتوجيه الرسائل إلى المستلمين المقصودين</li>
                    <li>إدارة حسابك والفوترة</li>
                    <li>التواصل معك بشأن حسابك والتحديثات والدعم الفني</li>
                    <li>تحسين وتطوير خدماتنا</li>
                    <li>الكشف عن الاحتيال والأنشطة المحظورة ومنعها</li>
                    <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. الأساس القانوني للمعالجة</h2>
                  <p>نعالج بياناتك الشخصية استناداً إلى الأسس القانونية التالية:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>تنفيذ العقد:</strong> حيث تكون المعالجة ضرورية لتقديم الخدمات التي طلبتها</li>
                    <li><strong>المصالح المشروعة:</strong> لتشغيل أعمالنا وتحسين خدماتنا ومنع الاحتيال</li>
                    <li><strong>الامتثال القانوني:</strong> حيث يتطلب القانون منا معالجة بياناتك</li>
                    <li><strong>الموافقة:</strong> حيث قدمت موافقتك على أنشطة معالجة محددة</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. مشاركة البيانات</h2>
                  <p>قد نشارك معلوماتك مع الأطراف التالية حيث يكون ذلك ضرورياً لتقديم خدماتنا:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>مشغلو الاتصالات:</strong> لتوجيه وتسليم الرسائل إلى المستلمين</li>
                    <li><strong>مزودو الخدمات التقنية:</strong> للاستضافة والبنية التحتية والأمان</li>
                    <li><strong>مزودو خدمات الدفع:</strong> لمعالجة المدفوعات والفوترة</li>
                    <li><strong>الجهات التنظيمية:</strong> عند الاقتضاء بموجب القانون أو اللوائح</li>
                  </ul>
                  <p>
                    لا نبيع معلوماتك الشخصية لأطراف ثالثة لأغراض التسويق.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. الاحتفاظ بالبيانات</h2>
                  <p>
                    نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا، والامتثال للالتزامات القانونية، وحل النزاعات، وإنفاذ اتفاقياتنا. تختلف فترات الاحتفاظ المحددة بناءً على نوع البيانات والمتطلبات القانونية المعمول بها.
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>بيانات الحساب: طوال مدة علاقة العمل وفترة إضافية للامتثال القانوني</li>
                    <li>سجلات الرسائل: وفقاً للمتطلبات التنظيمية وشروط الخدمة</li>
                    <li>سجلات الفوترة: وفقاً للمتطلبات الضريبية والمحاسبية المعمول بها</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. حماية البيانات</h2>
                  <p>
                    نطبق تدابير أمنية مصممة لحماية معلوماتك من الوصول غير المصرح به والتعديل والإفصاح والإتلاف، بما في ذلك:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>ضوابط الوصول وإدارة الصلاحيات</li>
                    <li>التشفير أثناء النقل وفي حالة السكون حيثما ينطبق</li>
                    <li>مراقبة النظام وتسجيل الأحداث الأمنية</li>
                    <li>إجراءات الاستجابة للحوادث الأمنية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. حقوقك</h2>
                  <p>بموجب الأنظمة المعمول بها، قد تكون لديك الحقوق التالية:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>حق الوصول:</strong> طلب معلومات حول البيانات الشخصية التي نحتفظ بها عنك</li>
                    <li><strong>حق التصحيح:</strong> طلب تصحيح البيانات غير الدقيقة أو غير المكتملة</li>
                    <li><strong>حق الحذف:</strong> طلب حذف بياناتك الشخصية في ظروف معينة</li>
                    <li><strong>حق الاعتراض:</strong> الاعتراض على معالجة بياناتك في ظروف معينة</li>
                    <li><strong>حق النقل:</strong> طلب نسخة من بياناتك بتنسيق قابل للقراءة آلياً</li>
                  </ul>
                  <p>
                    لممارسة هذه الحقوق، يرجى التواصل معنا على البريد الإلكتروني المذكور أدناه.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. التوافق مع نظام حماية البيانات الشخصية</h2>
                  <p>
                    نحن ملتزمون بالتوافق مع نظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL) والأنظمة ذات الصلة. نسعى لمعالجة البيانات الشخصية بطريقة تتوافق مع المتطلبات المعمول بها ونعمل باستمرار على تحديث ممارساتنا لتتماشى مع التطورات التنظيمية.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. نقل البيانات الدولي</h2>
                  <p>
                    حيثما يكون ذلك ضرورياً لتقديم خدماتنا، قد يتم نقل بياناتك إلى دول خارج موقعك. في هذه الحالات، نسعى لضمان توفير ضمانات مناسبة لحماية بياناتك وفقاً للمتطلبات المعمول بها.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">11. ملفات تعريف الارتباط</h2>
                  <p>
                    نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتشغيل موقعنا وتحسين تجربتك. لمزيد من المعلومات، يرجى مراجعة{' '}
                    <Link href={`/${locale}/cookies`}>
                      سياسة ملفات تعريف الارتباط
                    </Link>.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">12. تحديثات السياسة</h2>
                  <p>
                    قد نقوم بتحديث هذه السياسة من وقت لآخر. سننشر أي تغييرات على هذه الصفحة ونحدث تاريخ &quot;آخر تحديث&quot;. نشجعك على مراجعة هذه السياسة بشكل دوري.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">13. تواصل معنا</h2>
                  <p>
                    إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو ممارسات حماية البيانات لدينا، يرجى التواصل معنا على:
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
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                  <p>
                    iMissive (&quot;we,&quot; &quot;us,&quot; or the &quot;Company&quot;) is committed to protecting the privacy of our users and customers. This Privacy Policy explains how we collect, use, share, and protect personal information when you use our services and platform.
                  </p>
                  <p>
                    This policy applies to all services provided by iMissive, including SMS messaging, WhatsApp Business API, OTP verification, and ChatBot services.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                  <p>We collect various types of information to provide and improve our services:</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Account and Registration Information</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Company information (company name, commercial registration, industry)</li>
                    <li>Billing and payment information</li>
                    <li>Account credentials</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Service Usage Data</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Message logs (metadata, recipient numbers, delivery status)</li>
                    <li>API usage data and system logs</li>
                    <li>Delivery reports and analytics</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Technical Information</h3>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar technologies</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Information</h2>
                  <p>We use collected information for the following purposes:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Providing, operating, and maintaining our services</li>
                    <li>Processing and routing messages to intended recipients</li>
                    <li>Managing your account and billing</li>
                    <li>Communicating with you about your account, updates, and technical support</li>
                    <li>Improving and developing our services</li>
                    <li>Detecting and preventing fraud and prohibited activities</li>
                    <li>Complying with legal and regulatory requirements</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. Legal Basis for Processing</h2>
                  <p>We process your personal data based on the following legal grounds:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>Contract Performance:</strong> Where processing is necessary to provide the services you requested</li>
                    <li><strong>Legitimate Interests:</strong> To operate our business, improve our services, and prevent fraud</li>
                    <li><strong>Legal Compliance:</strong> Where the law requires us to process your data</li>
                    <li><strong>Consent:</strong> Where you have provided consent for specific processing activities</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing</h2>
                  <p>We may share your information with the following parties where required to provide our services:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>Telecommunications Operators:</strong> To route and deliver messages to recipients</li>
                    <li><strong>Technical Service Providers:</strong> For hosting, infrastructure, and security services</li>
                    <li><strong>Payment Processors:</strong> To process payments and billing</li>
                    <li><strong>Regulatory Authorities:</strong> When required by law or regulations</li>
                  </ul>
                  <p>
                    We do not sell your personal information to third parties for marketing purposes.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary based on data type and applicable legal requirements.
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Account data: For the duration of the business relationship and an additional period for legal compliance</li>
                    <li>Message logs: In accordance with regulatory requirements and service terms</li>
                    <li>Billing records: In accordance with applicable tax and accounting requirements</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Protection</h2>
                  <p>
                    We implement security measures designed to protect your information from unauthorized access, modification, disclosure, and destruction, including:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Access controls and permission management</li>
                    <li>Encryption in transit and at rest where applicable</li>
                    <li>System monitoring and security event logging</li>
                    <li>Security incident response procedures</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
                  <p>Under applicable regulations, you may have the following rights:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li><strong>Right of Access:</strong> Request information about the personal data we hold about you</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
                    <li><strong>Right to Object:</strong> Object to processing of your data in certain circumstances</li>
                    <li><strong>Right to Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at the email address provided below.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. Saudi Personal Data Protection Law (PDPL) Alignment</h2>
                  <p>
                    We are committed to aligning with the Saudi Personal Data Protection Law (PDPL) and related regulations. We strive to process personal data in a manner that is aligned with applicable requirements and continuously work to update our practices in line with regulatory developments.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. International Data Transfers</h2>
                  <p>
                    Where necessary to provide our services, your data may be transferred to countries outside your location. In such cases, we seek to ensure appropriate safeguards are in place to protect your data in accordance with applicable requirements.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">11. Cookies</h2>
                  <p>
                    We use cookies and similar technologies to operate our website and improve your experience. For more information, please see our{' '}
                    <Link href={`/${locale}/cookies`}>
                      Cookie Policy
                    </Link>.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">12. Policy Updates</h2>
                  <p>
                    We may update this policy from time to time. We will post any changes on this page and update the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy or our data protection practices, please contact us at:
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
