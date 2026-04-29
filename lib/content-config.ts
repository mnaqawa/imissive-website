/**
 * iMissive Content Configuration
 * 
 * This file contains all editable content that should be verified
 * before production deployment. Update metrics, testimonials, and
 * client information here.
 * 
 * NOTE: All metrics should be verified by iMissive team before launch.
 * NOTE: Client logos can be added to /public/images/clients/ folder.
 */

// =============================================================================
// PLATFORM METRICS
// IMPORTANT: Verify and approve these metrics before production deployment.
// These values are displayed publicly in the stats section.
// =============================================================================
export const platformMetrics = {
  // Verify these values before production
  messagesDelivered: '500M+',    // Total messages delivered
  enterpriseClients: '200+',     // Number of enterprise clients
  platformUptime: 'High Availability',  // Platform availability (verify specific SLA before using percentage)
  supportResponse: '<2hr',       // Average support response time
}

// =============================================================================
// API CONFIGURATION
// Sample API endpoint for documentation
// =============================================================================
export const apiConfig = {
  baseUrl: 'https://api.imissive.com',
  smsEndpoint: '/v1/sms/send',
  // Note: This is a sample endpoint for documentation purposes
  isSampleEndpoint: true,
}

// =============================================================================
// CLIENT LOGOS CONFIGURATION
// Placeholder configuration for client logos
// Replace with actual client data when available
// 
// To add real client logos:
// 1. Add logo images to /public/images/clients/
// 2. Update the logoSrc field with the image path
// 3. Set isPlaceholder to false
// =============================================================================
export const clientLogos = [
  { id: 'client-1', name: 'Enterprise Client', placeholder: 'EC', logoSrc: null, isPlaceholder: true },
  { id: 'client-2', name: 'Government Entity', placeholder: 'GE', logoSrc: null, isPlaceholder: true },
  { id: 'client-3', name: 'Retail Partner', placeholder: 'RP', logoSrc: null, isPlaceholder: true },
  { id: 'client-4', name: 'Healthcare Provider', placeholder: 'HP', logoSrc: null, isPlaceholder: true },
  { id: 'client-5', name: 'Delivery Service', placeholder: 'DS', logoSrc: null, isPlaceholder: true },
  { id: 'client-6', name: 'Technology Partner', placeholder: 'TP', logoSrc: null, isPlaceholder: true },
  { id: 'client-7', name: 'Financial Institution', placeholder: 'FI', logoSrc: null, isPlaceholder: true },
  { id: 'client-8', name: 'Telecom Provider', placeholder: 'TC', logoSrc: null, isPlaceholder: true },
]

// =============================================================================
// TESTIMONIALS CONFIGURATION
// Generic testimonials with placeholder client types
// These do not use real names or real company names
// =============================================================================
export const testimonialClients = {
  banking: {
    clientType: 'Enterprise Banking Client',
    sector: 'Financial Services',
  },
  government: {
    clientType: 'Government Entity',
    sector: 'Public Sector',
  },
  retail: {
    clientType: 'Leading Retail Group',
    sector: 'Retail & E-commerce',
  },
}

// =============================================================================
// EXTERNAL LINKS
// =============================================================================
export const externalLinks = {
  loginPortal: 'https://sms.imissive.com',
  supportEmail: 'support@imissive.com',
  salesEmail: 'sales@imissive.com',
}

// =============================================================================
// COMPLIANCE & TRUST BADGES
// These are factual statements about platform capabilities
// =============================================================================
export const trustBadges = {
  uptime: 'High Availability',
  hasEnterpriseSLA: true,
  isWhatsAppPartner: true,
  hasCSTCompliance: true,
  hasSenderIdGovernance: true,
  hasDeliveryVisibility: true,
  hasAuditTrail: true,
}
