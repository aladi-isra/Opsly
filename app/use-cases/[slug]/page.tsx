import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

// Use case data
const useCases = {
  'barber-shop': {
    title: 'Barber Shops & Hair Salons',
    description: 'Transform your salon with AI-powered appointment booking and customer service',
    content: `
      ## Never Miss Another Appointment

      Irsa's AI receptionist for barber shops and hair salons provides 24/7 appointment booking, customer service, and business management support.

      ### Key Features

      **Smart Appointment Booking**
      - Automatic scheduling based on stylist availability
      - Real-time calendar integration
      - Customer preference tracking

      **Customer Service Excellence**
      - Instant responses to pricing questions
      - Service recommendations based on customer history
      - Appointment reminders and confirmations

      **Business Intelligence**
      - Track peak booking times
      - Monitor customer satisfaction
      - Analyze service popularity

      ### Perfect For

      - Independent barber shops
      - Hair salons
      - Beauty spas
      - Mobile stylists
      - Salon chains

      Ready to never miss another cut? Get started with Irsa today.
    `
  },
  'dental-office': {
    title: 'Dental Offices',
    description: 'Streamline patient care with intelligent appointment management and insurance verification',
    content: `
      ## Simplify Dental Practice Management

      Irsa helps dental offices provide exceptional patient care while reducing administrative overhead through intelligent automation.

      ### Key Features

      **Patient Scheduling**
      - Automated appointment booking and rescheduling
      - Emergency appointment prioritization
      - Treatment follow-up scheduling

      **Insurance Assistance**
      - Pre-verification of insurance benefits
      - Claims status updates
      - Payment plan explanations

      **Patient Communication**
      - Appointment reminders via phone and text
      - Post-treatment care instructions
      - Prescription pickup notifications

      ### Benefits

      - Reduce no-shows by 40%
      - Increase patient satisfaction
      - Free up staff for patient care
      - Improve insurance collection rates

      ### Perfect For

      - General dentistry practices
      - Orthodontic offices
      - Oral surgery practices
      - Pediatric dentistry
      - Multi-location dental groups

      Transform your dental practice with Irsa's intelligent automation.
    `
  },
  'hvac': {
    title: 'HVAC Services',
    description: 'Respond to customer needs instantly with emergency dispatch and service coordination',
    content: `
      ## 24/7 HVAC Emergency Response

      Irsa ensures your HVAC business never misses an emergency call or service opportunity, even outside business hours.

      ### Key Features

      **Emergency Dispatch**
      - Instant emergency call routing
      - Technician availability checking
      - Priority scheduling for urgent repairs

      **Service Coordination**
      - Maintenance appointment scheduling
      - Follow-up service reminders
      - Warranty and service plan management

      **Customer Support**
      - Troubleshooting guidance
      - Estimate requests and scheduling
      - Parts availability checking

      ### Benefits

      - Capture 100% of emergency calls
      - Reduce response time
      - Increase customer retention
      - Improve technician utilization

      ### Perfect For

      - Residential HVAC contractors
      - Commercial HVAC services
      - Emergency repair services
      - HVAC maintenance companies
      - Multi-trade contractors

      Keep your customers comfortable with Irsa's always-on service.
    `
  },
  'real-estate': {
    title: 'Real Estate',
    description: 'Convert more leads with intelligent customer engagement and property inquiry management',
    content: `
      ## Never Miss a Lead Again

      Irsa helps real estate professionals capture, qualify, and convert leads 24/7 with intelligent property inquiry management.

      ### Key Features

      **Lead Qualification**
      - Instant response to property inquiries
      - Budget and timeline qualification
      - Automated lead scoring and routing

      **Property Management**
      - Showing appointment scheduling
      - Property information requests
      - Virtual tour coordination

      **Client Communication**
      - Market update notifications
      - Document request handling
      - Transaction status updates

      ### Benefits

      - Respond to leads within minutes
      - Increase conversion rates by 35%
      - Qualify leads automatically
      - Work around the clock

      ### Perfect For

      - Individual real estate agents
      - Real estate teams
      - Property management companies
      - New construction sales
      - Commercial real estate

      Close more deals with Irsa's intelligent lead management.
    `
  }
}

interface Params {
  slug: string
}

export default function UseCasePage({ params }: { params: Params }) {
  const useCase = useCases[params.slug as keyof typeof useCases]

  if (!useCase) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
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

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            {useCase.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {useCase.description}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            {useCase.content.split('\n').map((line, index) => {
              if (line.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                    {line.replace('### ', '')}
                  </h3>
                )
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h4 key={index} className="text-lg font-semibold text-primary mt-4 mb-2">
                    {line.replace(/\*\*/g, '')}
                  </h4>
                )
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-300 ml-4">
                    {line.replace('- ', '')}
                  </li>
                )
              }
              if (line.trim()) {
                return (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {line}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-purple-100 mb-6">
              See how Irsa can transform your {useCase.title.toLowerCase()} business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cta"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Book Demo Call
              </Link>
              <Link
                href="tel:+18555551234"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Call Sales Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for known use cases
export async function generateStaticParams() {
  return Object.keys(useCases).map((slug) => ({
    slug,
  }))
} 