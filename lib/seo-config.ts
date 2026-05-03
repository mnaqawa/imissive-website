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
    description: 'iMissive provides enterprise messaging infrastructure in Saudi Arabia for SMS, OTP, WhatsApp Business, APIs, SMPP, sender governance, routing, and delivery reporting.',
    keywords: ['enterprise messaging platform', 'SMS gateway Saudi Arabia', 'bulk SMS Saudi Arabia', 'OTP API Saudi Arabia', 'WhatsApp Business API', 'SMPP gateway', 'sender ID Saudi Arabia', 'business messaging Saudi Arabia'],
  },
  whyUs: {
    title: 'Why Choose iMissive | Enterprise Messaging Infrastructure',
    description: 'Discover iMissive messaging infrastructure capabilities including sender governance, delivery visibility, routing and failover, enterprise controls, and API-ready communication.',
    keywords: ['messaging infrastructure', 'sender governance', 'intelligent routing', 'delivery visibility', 'enterprise communication', 'API messaging'],
  },
  apiDocs: {
    title: 'SMS API Documentation | OTP API | SMPP Gateway | iMissive',
    description: 'Explore iMissive API documentation for SMS, OTP, webhooks, SMPP connectivity, rate limits, error codes, and enterprise messaging integration.',
    keywords: ['SMS API', 'OTP API', 'SMPP gateway', 'webhooks', 'messaging API', 'developer integration', 'API documentation'],
  },
  sms: {
    title: 'Bulk SMS Service Saudi Arabia | SMS Gateway | iMissive',
    description: 'Send business SMS campaigns, alerts, and transactional notifications with iMissive SMS infrastructure, sender ID support, delivery reporting, and API connectivity.',
    keywords: ['bulk SMS Saudi Arabia', 'SMS gateway Saudi Arabia', 'SMS API', 'sender ID Saudi Arabia', 'SMS service provider', 'business SMS'],
  },
  otp: {
    title: 'OTP API Saudi Arabia | SMS OTP Verification | iMissive',
    description: 'iMissive supports OTP authentication workflows through SMS and API integration for login verification, transaction confirmation, password reset, and secure access flows.',
    keywords: ['OTP API Saudi Arabia', 'SMS OTP verification', 'OTP service provider', 'two-factor authentication', 'SMS verification', 'secure login'],
  },
  whatsapp: {
    title: 'WhatsApp Business API Saudi Arabia | iMissive',
    description: 'Connect with customers through WhatsApp Business API integration for notifications, templates, rich messaging, two-way conversations, and customer engagement workflows.',
    keywords: ['WhatsApp Business API Saudi Arabia', 'WhatsApp Business', 'customer notifications', 'business messaging', 'WhatsApp templates', 'enterprise messaging'],
  },
  chatbot: {
    title: 'ChatBot Automation for Customer Communication | iMissive',
    description: 'iMissive chatbot automation helps organizations support customer conversations, FAQ flows, lead capture, service inquiries, and automated communication workflows.',
    keywords: ['chatbot automation', 'customer support AI', 'conversational AI', 'FAQ automation', 'lead capture', 'automated customer service'],
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
    title: 'About iMissive | Saudi Enterprise Communication Provider',
    description: 'iMissive is a Saudi-based enterprise communication infrastructure provider focused on SMS, OTP, WhatsApp Business, APIs, sender governance, and delivery reporting.',
    keywords: ['about iMissive', 'enterprise messaging company', 'Saudi Arabia', 'Riyadh', 'communication infrastructure', 'SMS provider'],
  },
  contact: {
    title: 'Contact iMissive | SMS, OTP, WhatsApp & API Messaging',
    description: 'Contact iMissive in Riyadh, Saudi Arabia for enterprise messaging solutions including SMS, OTP, WhatsApp Business, APIs, SMPP, and delivery reporting.',
    keywords: ['contact iMissive', 'SMS provider Saudi Arabia', 'enterprise messaging inquiries', 'Riyadh', 'API messaging'],
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
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: organization.telephone,
        email: 'sales@imissive.com',
        contactType: 'sales',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        email: 'support@imissive.com',
        contactType: 'customer support',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@imissive.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
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
