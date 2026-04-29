/**
 * iMissive SEO Configuration
 * 
 * Production domain and SEO settings for the iMissive website.
 * All URLs in metadata, sitemap, canonical links, and structured data
 * must use this production URL.
 * 
 * DEPLOYMENT NOTE:
 * https://imissive.com should redirect permanently (301) to https://www.imissive.com
 */

// Production site URL - used across all SEO metadata
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.imissive.com'

// Organization details for structured data
export const organization = {
  name: 'iMissive',
  legalName: 'iMissive',
  url: SITE_URL,
  logo: `${SITE_URL}/images/imissive-logo.png`,
  email: 'info@imissive.com',
  telephone: '+966580181811',
  address: {
    streetAddress: 'Olaya St.',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  // Opening hours: Sunday–Thursday, 9:00 AM – 6:00 PM (Saudi time)
  openingHours: ['Su-Th 09:00-18:00'],
  // Social profiles - only add if officially verified
  sameAs: [] as string[],
}

// SEO-focused page metadata with keyword targeting
export const pageMetadata = {
  home: {
    title: 'Enterprise Messaging Platform | SMS Gateway Saudi Arabia | iMissive',
    description: 'Enterprise messaging platform for SMS, OTP, and WhatsApp Business API in Saudi Arabia. Reliable bulk SMS gateway with sender ID governance, delivery reporting, and SMPP connectivity.',
    keywords: ['enterprise messaging platform', 'SMS gateway Saudi Arabia', 'bulk SMS Saudi Arabia', 'OTP service provider', 'WhatsApp Business API', 'SMPP connectivity'],
  },
  whyUs: {
    title: 'Why Choose iMissive | Enterprise Messaging Infrastructure',
    description: 'Enterprise-grade messaging infrastructure with sender ID governance, intelligent routing, delivery visibility, and failover capabilities. Built for mission-critical business communication.',
    keywords: ['messaging infrastructure', 'sender governance', 'intelligent routing', 'delivery visibility', 'enterprise communication'],
  },
  apiDocs: {
    title: 'SMS API & OTP API Documentation | Developer Integration | iMissive',
    description: 'Comprehensive SMS API, OTP API, Webhooks, and SMPP documentation for enterprise messaging integration. RESTful APIs with SDKs for seamless developer experience.',
    keywords: ['SMS API', 'OTP API', 'Webhooks', 'SMPP connectivity', 'messaging API', 'developer integration'],
  },
  sms: {
    title: 'Bulk SMS Service Saudi Arabia | SMS Gateway & API | iMissive',
    description: 'Enterprise bulk SMS service in Saudi Arabia with sender ID management, delivery reporting, and reliable message routing. Scalable SMS gateway for business communication.',
    keywords: ['bulk SMS Saudi Arabia', 'SMS gateway', 'SMS API', 'sender ID', 'SMS service provider', 'business SMS'],
  },
  otp: {
    title: 'OTP Service Provider Saudi Arabia | SMS Verification API | iMissive',
    description: 'Secure OTP service provider in Saudi Arabia for SMS verification and two-factor authentication. Low-latency OTP delivery with configurable validity and retry logic.',
    keywords: ['OTP service provider', 'SMS OTP', 'verification API', 'two-factor authentication', 'secure login', 'SMS verification'],
  },
  whatsapp: {
    title: 'WhatsApp Business API Saudi Arabia | Enterprise Messaging | iMissive',
    description: 'WhatsApp Business API integration for enterprise customer engagement in Saudi Arabia. Message templates, rich media, and business verification support.',
    keywords: ['WhatsApp Business API', 'WhatsApp Saudi Arabia', 'customer notifications', 'business messaging', 'WhatsApp templates'],
  },
  chatbot: {
    title: 'ChatBot Platform | Conversational AI for Customer Support | iMissive',
    description: 'Intelligent chatbot platform for automated customer support with NLP, agent escalation, and multi-channel deployment. Reduce support workload with AI-powered conversations.',
    keywords: ['chatbot automation', 'customer support AI', 'conversational AI', 'agent escalation', 'automated customer service'],
  },
  banking: {
    title: 'Banking & Finance Messaging Solutions | Secure OTP & Alerts | iMissive',
    description: 'Enterprise messaging solutions for banking and finance sector. Secure transactional messaging, OTP verification, and account alerts with regulatory alignment.',
    keywords: ['banking messaging', 'financial SMS', 'secure OTP', 'transaction alerts', 'SAMA compliance'],
  },
  government: {
    title: 'Government Messaging Solutions | Citizen Communication | iMissive',
    description: 'Enterprise messaging platform for government and public sector. Large-scale citizen communication, service notifications, and emergency alerts with visibility.',
    keywords: ['government messaging', 'citizen communication', 'public sector SMS', 'service notifications', 'emergency alerts'],
  },
  retail: {
    title: 'Retail Messaging Solutions | Customer Engagement | iMissive',
    description: 'Enterprise messaging solutions for retail and e-commerce. Order confirmations, shipping updates, promotional campaigns, and customer support communication.',
    keywords: ['retail messaging', 'e-commerce SMS', 'order notifications', 'promotional SMS', 'customer engagement'],
  },
  foodDelivery: {
    title: 'Food Delivery Messaging Solutions | Order Notifications | iMissive',
    description: 'Messaging solutions for food delivery platforms. Real-time order updates, driver notifications, delivery confirmations, and customer communication.',
    keywords: ['food delivery SMS', 'order notifications', 'delivery updates', 'driver communication', 'restaurant messaging'],
  },
  healthcare: {
    title: 'Healthcare Messaging Solutions | Patient Communication | iMissive',
    description: 'Privacy-aware messaging solutions for healthcare providers. Appointment reminders, test results, medication alerts, and patient support communication.',
    keywords: ['healthcare messaging', 'patient communication', 'appointment reminders', 'medical alerts', 'healthcare SMS'],
  },
  enterprise: {
    title: 'Enterprise Communication Solutions | Scalable Messaging | iMissive',
    description: 'Scalable enterprise communication infrastructure with API/SMPP connectivity, sender governance, delivery reporting, and SLA-based support options.',
    keywords: ['enterprise communication', 'corporate messaging', 'SMPP connectivity', 'enterprise API', 'business messaging'],
  },
  about: {
    title: 'About iMissive | Enterprise Messaging Platform Saudi Arabia',
    description: 'iMissive provides enterprise communication infrastructure for SMS, OTP, WhatsApp Business, and chatbot solutions. Based in Riyadh, serving organizations across Saudi Arabia.',
    keywords: ['about iMissive', 'enterprise messaging company', 'Saudi Arabia', 'Riyadh', 'communication infrastructure'],
  },
  contact: {
    title: 'Contact iMissive | Enterprise Messaging Inquiries Saudi Arabia',
    description: 'Contact the iMissive team for SMS gateway, OTP services, WhatsApp Business API, and enterprise messaging solutions in Saudi Arabia. Based in Riyadh.',
    keywords: ['contact iMissive', 'SMS provider Saudi Arabia', 'enterprise messaging inquiries', 'Riyadh'],
  },
  privacy: {
    title: 'Privacy Policy | iMissive',
    description: 'iMissive privacy policy describing how we collect, use, and protect your personal data in compliance with applicable regulations.',
    keywords: ['privacy policy', 'data protection', 'PDPL'],
  },
  terms: {
    title: 'Terms of Use | iMissive',
    description: 'iMissive terms of use governing access to and use of our enterprise messaging platform and services.',
    keywords: ['terms of use', 'terms and conditions', 'service agreement'],
  },
  cookies: {
    title: 'Cookie Policy | iMissive',
    description: 'iMissive cookie policy explaining how we use cookies and similar technologies on our website.',
    keywords: ['cookie policy', 'cookies', 'tracking'],
  },
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    logo: organization.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: organization.telephone,
      email: organization.email,
      contactType: 'sales',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.streetAddress,
      addressLocality: organization.address.addressLocality,
      addressCountry: organization.address.addressCountry,
    },
    ...(organization.sameAs.length > 0 && { sameAs: organization.sameAs }),
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organization.name,
    url: organization.url,
    // Note: SearchAction schema removed - no real site search feature exists
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: organization.name,
    url: organization.url,
    logo: organization.logo,
    image: organization.logo,
    telephone: organization.telephone,
    email: organization.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.streetAddress,
      addressLocality: organization.address.addressLocality,
      addressCountry: organization.address.addressCountry,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    // Service areas
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    // Services offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise Messaging Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bulk SMS Service',
            description: 'Enterprise bulk SMS messaging with sender ID governance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'OTP Verification Service',
            description: 'Secure one-time password generation and delivery',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WhatsApp Business API',
            description: 'WhatsApp Business API integration for enterprise communication',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ChatBot Platform',
            description: 'Conversational AI for automated customer support',
          },
        },
      ],
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
