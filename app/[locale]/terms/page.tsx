import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ExternalLink } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.terms
  
  return {
    title: isArabic ? 'شروط الاستخدام | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'شروط وأحكام استخدام منصة آي ميسيف للرسائل المؤسسية'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/terms`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/terms` }
        : { 'en': `${SITE_URL}/en/terms`, 'ar': `${SITE_URL}/ar/terms` },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
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
              {isArabic ? 'شروط الاستخدام' : 'Terms of Use'}
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
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. قبول الشروط</h2>
                  <p>
                    باستخدامك لخدمات آي ميسيف (&quot;الخدمات&quot;)، فإنك توافق على الالتزام بهذه الشروط والأحكام (&quot;الشروط&quot;). إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا. تشكل هذه الشروط اتفاقية ملزمة قانوناً بينك وبين آي ميسيف.
                  </p>
                  <p>
                    إذا كنت تستخدم الخدمات نيابة عن شركة أو كيان آخر، فإنك تقر بأنك مخول بإلزام ذلك الكيان بهذه الشروط.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. وصف الخدمات</h2>
                  <p>
                    توفر آي ميسيف خدمات رسائل مؤسسية تشمل:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>خدمات الرسائل القصيرة (SMS) للأعمال</li>
                    <li>واجهة برمجة تطبيقات WhatsApp للأعمال</li>
                    <li>خدمات التحقق بكلمة المرور لمرة واحدة (OTP)</li>
                    <li>خدمات الروبوت الذكي (ChatBot)</li>
                    <li>واجهات برمجة التطبيقات (API) واتصال SMPP</li>
                  </ul>
                  <p>
                    تخضع جميع الخدمات للشروط المحددة في اتفاقية الخدمة أو طلب الخدمة الخاص بك.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. تسجيل الحساب والاستخدام المصرح به</h2>
                  <p>لاستخدام خدماتنا، يجب عليك:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>تقديم معلومات دقيقة وكاملة ومحدثة أثناء التسجيل</li>
                    <li>الحفاظ على أمان بيانات اعتماد حسابك</li>
                    <li>إخطارنا فوراً بأي استخدام غير مصرح به لحسابك</li>
                    <li>التأكد من أن جميع المستخدمين المصرح لهم يلتزمون بهذه الشروط</li>
                  </ul>
                  <p>
                    أنت مسؤول عن جميع الأنشطة التي تحدث تحت حسابك.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. مسؤوليات العميل</h2>
                  <p>بصفتك عميلاً، أنت مسؤول عن:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>التأكد من أن محتوى رسائلك يتوافق مع جميع القوانين واللوائح المعمول بها</li>
                    <li>الحصول على الموافقات اللازمة من مستلمي الرسائل قبل الإرسال</li>
                    <li>الحفاظ على سجلات موافقات المستلمين</li>
                    <li>عدم استخدام الخدمات لأغراض غير قانونية أو محظورة</li>
                    <li>دفع جميع الرسوم المستحقة في الوقت المحدد</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. الاستخدام المقبول</h2>
                  <p>توافق على استخدام خدماتنا بطريقة مسؤولة تتضمن:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>استخدام الخدمات للأغراض التجارية المشروعة فقط</li>
                    <li>الامتثال لجميع القوانين واللوائح المعمول بها</li>
                    <li>احترام حقوق الآخرين وخصوصيتهم</li>
                    <li>عدم إساءة استخدام البنية التحتية أو الموارد التقنية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. الأنشطة المحظورة</h2>
                  <p>يحظر صراحة استخدام خدماتنا لـ:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>إرسال رسائل غير مرغوب فيها (Spam) أو رسائل جماعية غير مصرح بها</li>
                    <li>التصيد الاحتيالي أو الاحتيال أو أي نشاط احتيالي</li>
                    <li>انتحال هوية أي شخص أو كيان</li>
                    <li>نشر محتوى غير قانوني أو ضار أو مسيء</li>
                    <li>انتهاك حقوق الملكية الفكرية للآخرين</li>
                    <li>محاولة الوصول غير المصرح به إلى أنظمتنا أو أنظمة الآخرين</li>
                    <li>أي نشاط يضر ��سمعة آي ميسيف أو يعرضها للمسؤولية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. هوية المرسل والامتثال للرسائل</h2>
                  <p>
                    العملاء مسؤولون عن ضمان امتثال أنشطة الرسائل الخاصة بهم للوائح هيئة الاتصالات والفضاء والتقنية (CST) المعمول بها، بما في ذلك اللوائح المتعلقة بالرسائل الاقتحامية وهويات المرسل والموافقة والمحتوى المحظور.
                  </p>
                  <p className="mt-4">
                    للاطلاع على اللوائح التنظيمية الرسمية، يرجى مراجعة:
                  </p>
                  <a 
                    href="https://www.cst.gov.sa/ar/regulations-and-licenses/regulations/Document-522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 font-medium"
                  >
                    تنظيمات هيئة الاتصالات والفضاء والتقنية للحد من الرسائل والمكالمات الاقتحامية
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="mt-4">
                    يجب أن تكون هويات المرسل (Sender IDs) مسجلة ومعتمدة وفقاً للمتطلبات التنظيمية. آي ميسيف غير مسؤولة عن الرسائل المرفوضة بسبب عدم امتثال هوية المرسل.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. التعليق أو تقييد الخدمة</h2>
                  <p>
                    نحتفظ بالحق في تعليق أو تقييد الوصول إلى الخدمات فوراً ودون إشعار مسبق في حالة:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>انتهاك هذه الشروط أو سياسات الاستخدام المقبول</li>
                    <li>إرسال رسائل غير مرغوب فيها أو محتوى غير قانوني</li>
                    <li>الاحتيال أو الاشتباه في نشاط احتيالي</li>
                    <li>انتهاك اللوائح التنظيمية أو أوامر الجهات المختصة</li>
                    <li>وجود مخاطر أمنية تهدد خدماتنا أو مستخدمين آخرين</li>
                    <li>عدم سداد المستحقات المالية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. شروط الدفع والفوترة</h2>
                  <p>
                    تخضع الأسعار وشروط الدفع لاتفاقية الخدمة أو طلب الخدمة الخاص بك. ما لم يُنص على خلاف ذلك:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>الرسوم مستحقة وفقاً لجدول الدفع المتفق عليه</li>
                    <li>المبالغ المستحقة غير مستردة ما لم يُنص على خلاف ذلك في اتفاقية الخدمة</li>
                    <li>قد يؤدي التأخر في السداد إلى تعليق الخدمة أو فرض رسوم إضافية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. توفر الخدمة ومستوى الخدمة</h2>
                  <p>
                    مستويات الخدمة والتزامات وقت التشغيل والإنتاجية وأوقات الاستجابة للدعم تخضع لاتفاقية الخدمة التجارية أو طلب الخدمة المعمول به. لا تنطبق أي ضمانات لمستوى الخدمة ما لم يُتفق عليها صراحة كتابياً.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">11. حدود المسؤولية</h2>
                  <p>
                    تُقدم خدمات آي ميسيف &quot;كما هي&quot; و&quot;كما هي متاحة&quot;. إلى أقصى حد يسمح به القانون:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>نخلي مسؤوليتنا عن جميع الضمانات الصريحة أو الضمنية</li>
                    <li>لن نكون مسؤولين عن أي أضرار غير مباشرة أو تبعية أو خاصة أو عرضية</li>
                    <li>مسؤوليتنا الإجمالية محدودة بالرسوم المدفوعة خلال فترة الخدمة المعنية</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">12. التعويض</h2>
                  <p>
                    توافق على تعويض آي ميسيف وحمايتها وإعفائها من أي مطالبات أو أضرار أو خسائر أو نفقات (بما في ذلك أتعاب المحاماة المعقولة) الناشئة عن:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>استخدامك للخدمات</li>
                    <li>انتهاكك لهذه الشروط</li>
                    <li>انتهاكك لأي قوانين أو لوائح معمول بها</li>
                    <li>محتوى رسائلك</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">13. الملكية الفكرية</h2>
                  <p>
                    جميع حقوق الملكية الفكرية في الخدمات والمنصة والتوثيق والمواد ذات الصلة مملوكة لآي ميسيف أو مرخصيها. لا يمنحك استخدامك للخدمات أي حقوق ملكية في الملكية الفكرية لآي ميسيف.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">14. السرية</h2>
                  <p>
                    يوافق كلا الطرفين على الحفاظ على سرية المعلومات السرية للطرف الآخر وعدم استخدامها إلا للأغراض المتعلقة بهذه الاتفاقية. لا ينطبق هذا الالتزام على المعلومات التي: (أ) معروفة للعموم، (ب) تم الحصول عليها بشكل قانوني من مصادر أخرى، أو (ج) مطلوب الإفصاح عنها بموجب القانون.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">15. القوة القاهرة</h2>
                  <p>
                    لن يكون أي من الطرفين مسؤولاً عن أي تأخير أو فشل في الأداء ناتج عن ظروف خارجة عن سيطرته المعقولة، بما في ذلك الكوارث الطبيعية، أعمال الحرب أو الإرهاب، انقطاع الاتصالات، الإجراءات الحكومية، أو أي أحداث قوة قاهرة أخرى.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">16. تعديل الشروط</h2>
                  <p>
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على منصتنا قبل 30 يوماً على الأقل من دخول التغييرات حيز التنفيذ. استمرار استخدامك للخدمات بعد التغييرات يعني موافقتك على الشروط المعدلة.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">17. القانون الواجب التطبيق والاختصاص القضائي</h2>
                  <p>
                    تخضع هذه الشروط لأنظمة المملكة العربية السعودية وتُفسر وفقاً لها. تختص المحاكم المختصة في مدينة الرياض، المملكة ال��ربية السعودية، حصرياً بالنظر في أي نزاعات تنشأ عن هذه الشروط أو تتعلق بها.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">18. تواصل معنا</h2>
                  <p>
                    إذا كان لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا على:
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
                  <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By using iMissive services (&quot;Services&quot;), you agree to be bound by these terms and conditions (&quot;Terms&quot;). If you do not agree to any part of these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and iMissive.
                  </p>
                  <p>
                    If you are using the Services on behalf of a company or other entity, you represent that you are authorized to bind that entity to these Terms.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
                  <p>
                    iMissive provides enterprise messaging services including:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Business SMS messaging services</li>
                    <li>WhatsApp Business API</li>
                    <li>One-Time Password (OTP) verification services</li>
                    <li>ChatBot services</li>
                    <li>API and SMPP connectivity</li>
                  </ul>
                  <p>
                    All Services are subject to the terms specified in your service agreement or service order.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration and Authorized Use</h2>
                  <p>To use our Services, you must:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Provide accurate, complete, and current information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Ensure that all authorized users comply with these Terms</li>
                  </ul>
                  <p>
                    You are responsible for all activities that occur under your account.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">4. Customer Responsibilities</h2>
                  <p>As a customer, you are responsible for:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Ensuring your message content complies with all applicable laws and regulations</li>
                    <li>Obtaining necessary consents from message recipients before sending</li>
                    <li>Maintaining records of recipient consents</li>
                    <li>Not using the Services for unlawful or prohibited purposes</li>
                    <li>Paying all fees due on time</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">5. Acceptable Use</h2>
                  <p>You agree to use our Services responsibly, which includes:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Using Services for legitimate business purposes only</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Respecting the rights and privacy of others</li>
                    <li>Not abusing infrastructure or technical resources</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">6. Prohibited Activities</h2>
                  <p>Using our Services for the following is expressly prohibited:</p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Sending unsolicited messages (Spam) or unauthorized bulk messaging</li>
                    <li>Phishing, fraud, or any fraudulent activity</li>
                    <li>Impersonating any person or entity</li>
                    <li>Distributing illegal, harmful, or offensive content</li>
                    <li>Violating the intellectual property rights of others</li>
                    <li>Attempting unauthorized access to our systems or those of others</li>
                    <li>Any activity that damages iMissive&apos;s reputation or exposes it to liability</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">7. Sender ID and Message Compliance</h2>
                  <p>
                    Customers are responsible for ensuring that their messaging activities comply with applicable CST (Communications, Space & Technology Commission) regulations, including regulations related to spam, unsolicited messages, sender IDs, consent, and prohibited content.
                  </p>
                  <p className="mt-4">
                    For official regulatory information, please refer to:
                  </p>
                  <a 
                    href="https://www.cst.gov.sa/ar/regulations-and-licenses/regulations/Document-522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 font-medium"
                  >
                    CST Regulations for Reducing Spam Messages and Calls
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="mt-4">
                    Sender IDs must be registered and approved in accordance with regulatory requirements. iMissive is not responsible for messages rejected due to non-compliant sender IDs.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">8. Suspension or Restriction of Service</h2>
                  <p>
                    We reserve the right to suspend or restrict access to the Services immediately and without prior notice in the event of:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Violation of these Terms or acceptable use policies</li>
                    <li>Sending spam or illegal content</li>
                    <li>Fraud or suspected fraudulent activity</li>
                    <li>Regulatory violations or orders from competent authorities</li>
                    <li>Security risks threatening our services or other users</li>
                    <li>Non-payment of outstanding amounts</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">9. Payment and Billing Terms</h2>
                  <p>
                    Pricing and payment terms are subject to your service agreement or service order. Unless otherwise specified:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Fees are due according to the agreed payment schedule</li>
                    <li>Amounts due are non-refundable unless otherwise stated in the service agreement</li>
                    <li>Late payment may result in service suspension or additional charges</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">10. Service Availability and SLA</h2>
                  <p>
                    Service levels, uptime commitments, throughput, and support response times are subject to the applicable commercial agreement or service order. No service level guarantees apply unless expressly agreed in writing.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
                  <p>
                    iMissive Services are provided &quot;as is&quot; and &quot;as available.&quot; To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>We disclaim all warranties, express or implied</li>
                    <li>We will not be liable for any indirect, consequential, special, or incidental damages</li>
                    <li>Our total liability is limited to the fees paid during the relevant service period</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">12. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless iMissive from any claims, damages, losses, or expenses (including reasonable attorney&apos;s fees) arising from:
                  </p>
                  <ul className="list-disc ps-6 space-y-2">
                    <li>Your use of the Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any applicable laws or regulations</li>
                    <li>The content of your messages</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">13. Intellectual Property</h2>
                  <p>
                    All intellectual property rights in the Services, platform, documentation, and related materials are owned by iMissive or its licensors. Your use of the Services does not grant you any ownership rights in iMissive&apos;s intellectual property.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">14. Confidentiality</h2>
                  <p>
                    Both parties agree to maintain the confidentiality of the other party&apos;s confidential information and use it only for purposes related to this agreement. This obligation does not apply to information that: (a) is publicly known, (b) was lawfully obtained from other sources, or (c) is required to be disclosed by law.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">15. Force Majeure</h2>
                  <p>
                    Neither party shall be liable for any delay or failure in performance resulting from circumstances beyond its reasonable control, including natural disasters, acts of war or terrorism, telecommunications outages, government actions, or other force majeure events.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">16. Modification of Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. You will be notified of any material changes via email or through a notice on our platform at least 30 days before the changes take effect. Your continued use of the Services after the changes constitutes acceptance of the modified Terms.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">17. Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. The competent courts in Riyadh, Kingdom of Saudi Arabia, shall have exclusive jurisdiction over any disputes arising from or relating to these Terms.
                  </p>

                  <h2 className="text-2xl font-semibold mt-8 mb-4">18. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
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
