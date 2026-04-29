import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { SITE_URL, pageMetadata } from '@/lib/seo-config'
import { ENGLISH_ONLY_LAUNCH } from '@/lib/launch-config'
import { ChannelPage, IconName } from '@/components/pages/channel-page'
import { Bot, MessageSquare, Brain, ArrowRight, User, Headphones } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === 'ar'
  const meta = pageMetadata.chatbot
  
  return {
    title: isArabic ? 'منصة الروبوت الذكي | آي ميسيف' : meta.title,
    description: isArabic 
      ? 'ذكاء اصطناعي محادثاتي للتفاعلات الآلية مع العملاء وأتمتة دعم العملاء'
      : meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/channels/chatbot`,
      languages: ENGLISH_ONLY_LAUNCH 
        ? { 'en': `${SITE_URL}/en/channels/chatbot` }
        : { 'en': `${SITE_URL}/en/channels/chatbot`, 'ar': `${SITE_URL}/ar/channels/chatbot` },
    },
    openGraph: {
      title: isArabic ? 'منصة الروبوت الذكي' : meta.title,
      description: isArabic 
        ? 'ذكاء اصطناعي محادثاتي للتفاعلات الآلية مع العملاء'
        : meta.description,
      url: `${SITE_URL}/${locale}/channels/chatbot`,
      type: 'website',
    },
  }
}

// ChatBot Workflow Visual Component
function ChatBotWorkflowVisual({ isArabic }: { isArabic: boolean }) {
  const steps = isArabic ? [
    { icon: MessageSquare, label: 'استفسار العميل', desc: 'رسالة واردة', color: '#492E51' },
    { icon: Brain, label: 'كشف النية', desc: 'معالجة الذكاء الاصطناعي', color: '#FDBF30' },
    { icon: Bot, label: 'رد الروبوت', desc: 'استجابة آلية', color: '#61C5BA' },
    { icon: Headphones, label: 'تصعيد الوكيل', desc: 'عند الحاجة', color: '#E0357C' },
  ] : [
    { icon: MessageSquare, label: 'Customer Query', desc: 'Incoming message', color: '#492E51' },
    { icon: Brain, label: 'Intent Detection', desc: 'AI processing', color: '#FDBF30' },
    { icon: Bot, label: 'Bot Response', desc: 'Automated reply', color: '#61C5BA' },
    { icon: Headphones, label: 'Agent Escalation', desc: 'When needed', color: '#E0357C' },
  ]

  return (
    <div className="rounded-2xl border-2 border-border/50 bg-card p-6 lg:p-8">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FDBF30]/10 text-[#FDBF30]">
          <Bot className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-card-foreground">
          {isArabic ? 'مسار عمل المحادثة' : 'Conversation Workflow'}
        </h3>
      </div>
      
      {/* Workflow Diagram */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-2">
        {steps.map((step, index) => {
          const StepIcon = step.icon
          return (
            <div key={index} className="flex items-center gap-4 lg:flex-col lg:gap-3 lg:flex-1">
              {/* Step Node */}
              <div 
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 lg:h-16 lg:w-16"
                style={{ 
                  borderColor: step.color,
                  backgroundColor: `${step.color}15`
                }}
              >
                <StepIcon className="h-6 w-6" style={{ color: step.color }} />
              </div>
              
              {/* Step Info */}
              <div className="flex-1 lg:text-center lg:flex-none">
                <p className="font-medium text-card-foreground text-sm">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
              
              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:pt-5">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Sample Conversation */}
      <div className="mt-6 rounded-xl bg-muted/30 p-4">
        <p className="text-xs font-medium text-muted-foreground mb-3">
          {isArabic ? 'مثال على المحادثة' : 'Sample Conversation'}
        </p>
        <div className="space-y-3">
          {/* Customer Message */}
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="rounded-lg rounded-tl-none bg-card p-2.5 shadow-sm">
              <p className="text-sm text-foreground">
                {isArabic ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods are available?'}
              </p>
            </div>
          </div>
          
          {/* Bot Response */}
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#61C5BA]/10">
              <Bot className="h-3.5 w-3.5 text-[#61C5BA]" />
            </div>
            <div className="rounded-lg rounded-tl-none bg-[#61C5BA]/5 border border-[#61C5BA]/20 p-2.5">
              <p className="text-sm text-foreground">
                {isArabic 
                  ? 'نقبل بطاقات الائتمان، Apple Pay، والتحويل البنكي. هل تريد معرفة المزيد عن طريقة معينة؟'
                  : 'We accept credit cards, Apple Pay, and bank transfers. Would you like to know more about a specific method?'}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Capabilities */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { label: isArabic ? 'فهم اللغة الطبيعية' : 'Natural Language', color: '#FDBF30' },
          { label: isArabic ? 'دعم العربية' : 'Arabic Support', color: '#61C5BA' },
          { label: isArabic ? 'تصعيد سلس' : 'Seamless Escalation', color: '#E0357C' },
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

export default async function ChatBotPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const isArabic = locale === 'ar'
  
  const content = isArabic ? {
    title: 'منصة الروبوت الذكي',
    subtitle: 'ذكاء اصطناعي محادثاتي يفهم العربية ويخدم عملاءك على مدار الساعة',
    description: 'منصة روبوت ذكي متقدمة مدعومة بالذكاء الاصطناعي لأتمتة خدمة العملاء والمحادثات. دعم كامل للغة العربية مع فهم طبيعي للسياق والنوايا.',
    features: [
      { iconName: 'Brain' as IconName, title: 'ذكاء اصطناعي متقدم', description: 'فهم اللغة الطبيعية والسياق والنوايا' },
      { iconName: 'Languages' as IconName, title: 'دعم العربية', description: 'فهم ومعالجة اللغة العربية بطلاقة' },
      { iconName: 'MessageSquare' as IconName, title: 'متعدد القنوات', description: 'نشر على SMS وWhatsApp والويب' },
      { iconName: 'Workflow' as IconName, title: 'سير عمل مخصص', description: 'بناء تدفقات محادثة مخصصة لاحتياجاتك' },
      { iconName: 'Bot' as IconName, title: 'تصعيد للوكيل', description: 'تحويل سلس للمحادثات المعقدة لوكيل بشري' },
      { iconName: 'BarChart3' as IconName, title: 'تحليلات المحادثات', description: 'رؤى مفصلة عن أداء الروبوت ورضا العملاء' },
    ],
    benefits: [
      'خدمة عملاء بدون انقطاع',
      'تقليل عبء العمل المتكرر للدعم',
      'معالجة أسرع لاستفسارات العملاء الشائعة',
      'تصعيد المحادثات المعقدة للوكلاء البشريين',
      'دعم كامل للغة العربية',
      'تعلم وتحسن مستمر',
    ],
    useCases: [
      { title: 'دعم العملاء', description: 'الرد على الأسئلة الشائعة وحل المشكلات البسيطة' },
      { title: 'توليد العملاء المحتملين', description: 'تأهيل وجمع معلومات العملاء المحتملين' },
      { title: 'حجز المواعيد', description: 'جدولة وإدارة المواعيد تلقائياً' },
      { title: 'الاستفسارات عن الطلبات', description: 'تتبع الطلبات والرد على استفسارات الشحن' },
      { title: 'الاستطلاعات والتقييم', description: 'جمع ملاحظات العملاء بعد الخدمة' },
      { title: 'الأسئلة الشائعة', description: 'الرد التلقائي على الأسئلة المتكررة' },
    ],
    ctaTitle: 'هل أنت مستعد لأتمتة خدمة العملاء؟',
    ctaSubtitle: 'تواصل معنا للبدء مع منصة الروبوت الذكي',
    ctaButton: 'تواصل مع المبيعات',
    ctaSecondary: 'عرض وثائق API',
  } : {
    title: 'ChatBot Platform',
    subtitle: 'Conversational AI that understands Arabic and serves your customers around the clock',
    description: 'Advanced AI-powered chatbot platform for automating customer service and conversations. Full Arabic language support with natural understanding of context and intent.',
    features: [
      { iconName: 'Brain' as IconName, title: 'Advanced AI', description: 'Natural language understanding, context, and intent recognition' },
      { iconName: 'Languages' as IconName, title: 'Arabic Support', description: 'Fluent understanding and processing of Arabic language' },
      { iconName: 'MessageSquare' as IconName, title: 'Multi-Channel', description: 'Deploy on SMS, WhatsApp, and web' },
      { iconName: 'Workflow' as IconName, title: 'Custom Workflows', description: 'Build custom conversation flows for your needs' },
      { iconName: 'Bot' as IconName, title: 'Agent Escalation', description: 'Seamless handoff to human agents for complex queries' },
      { iconName: 'BarChart3' as IconName, title: 'Conversation Analytics', description: 'Detailed insights on bot performance and customer satisfaction' },
    ],
    benefits: [
      'Customer service without interruption',
      'Reduce repetitive support workload',
      'Support faster handling of common customer inquiries',
      'Escalate complex conversations to human agents',
      'Full Arabic language support',
      'Continuous learning and improvement',
    ],
    useCases: [
      { title: 'Customer Support', description: 'Answer FAQs and resolve simple issues' },
      { title: 'Lead Generation', description: 'Qualify and collect information from potential customers' },
      { title: 'Appointment Booking', description: 'Schedule and manage appointments automatically' },
      { title: 'Order Inquiries', description: 'Track orders and answer shipping questions' },
      { title: 'Surveys & Feedback', description: 'Collect customer feedback after service' },
      { title: 'FAQ Automation', description: 'Automatic responses to frequently asked questions' },
    ],
    ctaTitle: 'Ready to Automate Customer Service?',
    ctaSubtitle: 'Contact us to get started with the ChatBot platform',
    ctaButton: 'Contact Sales',
    ctaSecondary: 'View API Docs',
  }

  return (
    <ChannelPage
      locale={locale}
      iconName="Bot"
      visual={<ChatBotWorkflowVisual isArabic={isArabic} />}
      {...content}
    />
  )
}
