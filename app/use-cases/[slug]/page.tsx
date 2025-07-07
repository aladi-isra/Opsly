import { notFound } from 'next/navigation'
import UseCaseClient from './UseCaseClient'

const industryEmojis = {
  'law-firms': '⚖️',
  'real-estate': '🏠',
  'financial-advisors': '💰',
  'medical-clinics': '❤️',
  'marketing-agencies': '📈',
}

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
  'marketing-agencies': {
    emoji: '📈',
    headline: 'Scale Your Agency with AI',
    intro: 'Opsly automates client onboarding, content calendars, and reporting so your team can focus on creative work.',
    features: [
      {
        title: 'Onboarding Automation',
        bullets: [
          'Client intake forms',
          'Kickoff scheduling',
          'Welcome sequences',
        ],
      },
      {
        title: 'Content Calendar',
        bullets: [
          'Automated reminders',
          'Approval workflows',
          'Deadline tracking',
        ],
      },
      {
        title: 'Reporting',
        bullets: [
          'Monthly summaries',
          'KPI dashboards',
          'Client portal access',
        ],
      },
    ],
    perfectFor: [
      'Boutique agencies',
      'Content teams',
      'Freelance marketers',
    ],
    outro: 'Grow your agency without growing your admin workload.'
  },
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

// Updated Use Case Data
const useCases = {
  'law-firms': {
    title: 'Law Firms',
    description: 'Automate client intake, case scheduling, and document workflows with AI-powered assistants',
  },
  'real-estate': {
    title: 'Real Estate',
    description: 'Convert more leads with intelligent customer engagement and property inquiry management',
  },
  'financial-advisors': {
    title: 'Financial Advisors',
    description: 'Enhance client experience with automated appointment booking, follow-ups, and report summaries',
  },
  'medical-clinics': {
    title: 'Medical Clinics',
    description: 'Automate patient intake, follow-ups, and care instructions with HIPAA-ready AI agents',
  },
  'marketing-agencies': {
    title: 'Marketing Agencies',
    description: 'Automate client onboarding, content calendars, and reporting with AI-powered workflows',
  }
}

interface Params {
  slug: string
}

export default function UseCasePage({ params }: { params: Params }) {
  const useCase = useCases[params.slug as keyof typeof useCases]
  const layout = useCaseLayouts[params.slug as keyof typeof useCaseLayouts]
  if (!useCase || !layout) {
    notFound()
  }
  return <UseCaseClient useCase={useCase} layout={layout} slug={params.slug} />
}

export async function generateStaticParams() {
  return Object.keys(useCases).map((slug) => ({
    slug,
  }))
} 