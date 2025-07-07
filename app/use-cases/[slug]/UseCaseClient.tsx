'use client'
import Link from 'next/link'
import { ArrowLeftIcon, BriefcaseIcon, HomeIcon, BanknotesIcon, HeartIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const industryIcons = {
  'law-firms': BriefcaseIcon,
  'real-estate': HomeIcon,
  'financial-advisors': BanknotesIcon,
  'medical-clinics': HeartIcon,
  'marketing-agencies': ChartBarIcon,
}

const testimonials = {
  'law-firms': '"Opsly saved us 12 hours/week — Managing Partner, Vantage Legal"',
  'real-estate': '"Opsly helped us close 35% more leads! — Top Agent, Urban Realty"',
  'financial-advisors': '"My clients love the fast follow-ups. — Senior Advisor, WealthPath"',
  'medical-clinics': '"No more no-shows! — Office Manager, Family Health Clinic"',
  'marketing-agencies': '"We scaled onboarding with zero extra admin. — CEO, CreativeWorks"',
}

const faqs = [
  {
    q: 'Is Opsly secure and compliant?',
    a: 'Yes, Opsly is built with industry-standard security and privacy compliance in mind.'
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most clients are up and running within a day, with full onboarding support.'
  },
  {
    q: 'Can Opsly integrate with my existing tools?',
    a: 'Absolutely! Opsly connects with popular calendars, CRMs, and communication platforms.'
  }
]

const useCaseLayouts = {
  'law-firms': {
    emoji: '🔍',
    headline: 'Streamline Legal Operations',
    intro: 'Opsly enables law firms to handle intake, scheduling, and follow-ups without lifting a finger.',
    features: [
      {
        title: 'Smart Client Intake',
        bullets: [
          '24/7 lead capture',
          'Form parsing',
          'Calendar sync',
        ],
      },
      {
        title: 'Document Workflow',
        bullets: [
          'Draft/send agreements',
          'Auto reminders',
          'E-signature follow-up',
        ],
      },
      {
        title: 'Communication',
        bullets: [
          'Routine query replies',
          'Appointment reminders',
          'Case updates',
        ],
      },
    ],
    perfectFor: [
      'Solo practitioners',
      'Small/mid law firms',
      'Intake teams',
    ],
    outro: 'Let your legal team focus on clients, not admin work.'
  },
  'real-estate': {
    emoji: '🏠',
    headline: 'Never Miss a Lead Again',
    intro: 'Opsly helps real estate pros capture, qualify, and convert leads 24/7 with intelligent inquiry management.',
    features: [
      {
        title: 'Lead Qualification',
        bullets: [
          'Instant inquiry response',
          'Budget & Timeline scan',
          'Auto lead scoring',
        ],
      },
      {
        title: 'Property Management',
        bullets: [
          'Showings scheduling',
          'Info requests',
          'Virtual tour setup',
        ],
      },
      {
        title: 'Client Communication',
        bullets: [
          'Market updates',
          'Doc requests',
          'Status notifications',
        ],
      },
    ],
    perfectFor: [
      'Agents & teams',
      'Property managers',
      'New construction sales',
    ],
    outro: 'Close more deals with Opsly\'s intelligent lead management.'
  },
  'financial-advisors': {
    emoji: '💰',
    headline: 'Make Every Client Feel VIP',
    intro: 'Opsly helps advisors stay on top of client relationships and routine tasks, freeing them to focus on strategy.',
    features: [
      {
        title: 'Smart Scheduling',
        bullets: [
          'Personalized scheduling',
          'Annual review follow-up',
          'Prospect nurturing',
        ],
      },
      {
        title: 'Client Communication',
        bullets: [
          'Investment summaries',
          'Tax reminders',
          'Secure file prompts',
        ],
      },
      {
        title: 'Intelligence Tools',
        bullets: [
          'Meeting summaries',
          'Client analytics',
          'CRM integration',
        ],
      },
    ],
    perfectFor: [
      'Independent advisors',
      'Wealth managers',
      'Multi-office firms',
    ],
    outro: 'Deliver white-glove service at scale with Opsly.'
  },
  'medical-clinics': {
    emoji: '❤️',
    headline: 'Healthier Clinics, Less Admin',
    intro: 'Opsly automates essential patient workflows, reducing wait times and no-shows.',
    features: [
      {
        title: 'Intake Automation',
        bullets: [
          'Insurance collection',
          'Screening & booking',
          'Pre-visit reminders',
        ],
      },
      {
        title: 'Post-Care Follow-Up',
        bullets: [
          'Treatment reminders',
          'Rx pickup notifications',
          'Satisfaction surveys',
        ],
      },
      {
        title: '24/7 Support',
        bullets: [
          'Answer FAQs',
          'Urgent case redirect',
          'Test result updates',
        ],
      },
    ],
    perfectFor: [
      'Family practices',
      'Specialists',
      'Multi-location clinics',
    ],
    outro: 'Improve care without adding overhead.'
  },
}

export default function UseCaseClient({ useCase, layout, slug }: { useCase: any, layout: any, slug: string }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const Icon = industryIcons[slug as keyof typeof industryIcons]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black/95">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#usecases"
            className="inline-flex items-center text-primary hover:text-purple-400 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Use Cases
          </Link>
        </div>

        {/* Industry Visual */}
        <div className="flex justify-center mb-4">
          {Icon && (
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-r from-primary to-purple-400 shadow-lg">
              <Icon className="w-12 h-12 text-white" />
            </span>
          )}
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            {useCase.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            {useCase.description}
          </p>
        </div>

        {/* Custom Layout for All Use Cases */}
        <section className="space-y-12 bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/10 mb-12 max-w-3xl mx-auto">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{layout.emoji} {layout.headline}</h2>
            <p className="text-gray-300 text-lg">
              {layout.intro}
            </p>
          </div>

          {/* Section 2 - Key Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">🚀 Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {layout.features.map((feature: any, idx: number) => (
                <div key={idx}>
                  <h4 className="text-purple-400 font-semibold text-lg mb-2">{feature.title}</h4>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    {feature.bullets.map((b: string, i: number) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 - Ideal Clients */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-white mb-4">🎯 Perfect For</h3>
            <ul className="text-gray-300 list-disc space-y-1 min-w-fit">
              {layout.perfectFor.map((p: string, i: number) => <li key={i}>{p}</li>)}
            </ul>
          </div>

          {/* Outro */}
          <div className="flex justify-center">
            <p className="text-purple-100 italic mt-6 text-left">
              {layout.outro}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 my-12 max-w-2xl mx-auto" />

        {/* Testimonial */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-purple-900/80 text-purple-100 px-6 py-3 rounded-xl text-base font-medium shadow">
            {testimonials[slug as keyof typeof testimonials]}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-purple-100 mb-6">
              See how Opsly can transform your {useCase.title.toLowerCase()} business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div>
                <Link
                  href="/#cta"
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-50 transition-colors"
                >
                  Book Demo
                </Link>
                <div className="text-xs text-purple-100 mt-2">Schedule a 15-minute walkthrough</div>
              </div>
              <div>
                <Link
                  href="tel:+18555551234"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Call Sales
                </Link>
                <div className="text-xs text-purple-100 mt-2">Speak directly to our onboarding team</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-14 max-w-2xl mx-auto">
          <h4 className="text-xl font-bold text-white mb-4 text-center">FAQs</h4>
          <div className="space-y-3">
            {faqs.map((faq: any, i: number) => (
              <div key={i}>
                <button
                  className="w-full text-left bg-white/5 rounded-lg px-4 py-3 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {faq.q}
                </button>
                {openFAQ === i && (
                  <div className="bg-white/10 text-gray-200 px-4 py-3 rounded-b-lg border-t border-white/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 