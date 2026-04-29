'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface ContactFormProps {
  locale: string
}

export function ContactForm({ locale }: ContactFormProps) {
  const isArabic = locale === 'ar'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const labels = isArabic ? {
    name: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    company: 'اسم الشركة',
    industry: 'القطاع',
    message: 'رسالتك',
    submit: 'إرسال الرسالة',
    submitting: 'جاري الإرسال...',
    successTitle: 'تم الإرسال بنجاح',
    successMessage: 'شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.',
    errorTitle: 'حدث خطأ',
    industries: [
      { value: 'banking', label: 'البنوك والمالية' },
      { value: 'government', label: 'الحكومة' },
      { value: 'retail', label: 'التجزئة والتجارة الإلكترونية' },
      { value: 'healthcare', label: 'الرعاية الصحية' },
      { value: 'food-delivery', label: 'توصيل الطعام' },
      { value: 'telecom', label: 'الاتصالات' },
      { value: 'enterprise', label: 'مؤسسات أخرى' },
    ],
  } : {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    company: 'Company Name',
    industry: 'Industry',
    message: 'Your Message',
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Message Sent Successfully',
    successMessage: 'Thank you for contacting us. Our team will get back to you as soon as possible.',
    errorTitle: 'An Error Occurred',
    industries: [
      { value: 'banking', label: 'Banking & Finance' },
      { value: 'government', label: 'Government' },
      { value: 'retail', label: 'Retail & E-commerce' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'food-delivery', label: 'Food Delivery' },
      { value: 'telecom', label: 'Telecom' },
      { value: 'enterprise', label: 'Other Enterprise' },
    ],
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      industry: formData.get('industry') as string,
      message: formData.get('message') as string,
      locale,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">{labels.successTitle}</h3>
        <p className="mt-2 text-muted-foreground">{labels.successMessage}</p>
        <Button 
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setSubmitStatus('idle')}
        >
          {isArabic ? 'إرسال رسالة أخرى' : 'Send Another Message'}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-destructive">{labels.errorTitle}</p>
            <p className="text-sm text-destructive/80">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{labels.name} *</Label>
          <Input 
            id="name" 
            name="name" 
            required 
            className="bg-background"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{labels.email} *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="bg-background"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{labels.phone}</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            className="bg-background"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{labels.company} *</Label>
          <Input 
            id="company" 
            name="company" 
            required 
            className="bg-background"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">{labels.industry} *</Label>
        <Select name="industry" required disabled={isSubmitting}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder={isArabic ? 'اختر القطاع' : 'Select industry'} />
          </SelectTrigger>
          <SelectContent>
            {labels.industries.map((industry) => (
              <SelectItem key={industry.value} value={industry.value}>
                {industry.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{labels.message} *</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          rows={5} 
          className="bg-background resize-none"
          disabled={isSubmitting}
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="me-2 h-5 w-5 animate-spin" />
            {labels.submitting}
          </>
        ) : (
          labels.submit
        )}
      </Button>
    </form>
  )
}
