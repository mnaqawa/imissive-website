/**
 * Contact Form API Route
 * 
 * PRODUCTION SETUP REQUIRED:
 * Connect this form to your approved CRM/demo request flow before production.
 * 
 * Configure these environment variables for SMTP:
 * - SMTP_HOST: SMTP server host
 * - SMTP_PORT: SMTP port (default 587)
 * - SMTP_USER: SMTP username
 * - SMTP_PASS: SMTP password
 * - CONTACT_EMAIL: Destination email for contact submissions
 * 
 * If SMTP is not configured, submissions are logged to console.
 */
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company: string
  industry: string
  message: string
  locale: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.industry || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for SMTP configuration
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const contactEmail = process.env.CONTACT_EMAIL || 'info@imissive.com'

    // If SMTP is configured, send email
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      const industryLabels: Record<string, string> = {
        banking: 'Banking & Finance',
        government: 'Government',
        retail: 'Retail & E-commerce',
        healthcare: 'Healthcare',
        'food-delivery': 'Food Delivery',
        telecom: 'Telecom',
        enterprise: 'Other Enterprise',
      }

      const emailContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company}
Industry: ${industryLabels[data.industry] || data.industry}
Language: ${data.locale === 'ar' ? 'Arabic' : 'English'}

Message:
${data.message}
      `.trim()

      await transporter.sendMail({
        from: smtpUser,
        to: contactEmail,
        replyTo: data.email,
        subject: `[iMissive Contact] New inquiry from ${data.company}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #492E51; border-bottom: 2px solid #FDBF30; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;">${data.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">${data.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Industry:</td>
                <td style="padding: 8px 0;">${industryLabels[data.industry] || data.industry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Language:</td>
                <td style="padding: 8px 0;">${data.locale === 'ar' ? 'Arabic' : 'English'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 8px;">
              <h3 style="margin: 0 0 10px 0; color: #492E51;">Message:</h3>
              <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        `,
      })
    } else {
      // Log the submission if SMTP is not configured
      console.log('[Contact Form Submission]', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        industry: data.industry,
        locale: data.locale,
        message: data.message,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
