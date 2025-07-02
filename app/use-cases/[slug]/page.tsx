import { notFound } from 'next/navigation'
import UseCaseClient from './UseCaseClient'

const industryEmojis = {
  'law-firms': '⚖️',
  'real-estate': '🏠',
  'financial-advisors': '💰',
  'medical-clinics': '❤️',
  'marketing-agencies': '📈',
}

const testimonials = {
  'law-firms': '"Irsa saved us 12 hours/week — Managing Partner, Vantage Legal"',
  'real-estate': '"Irsa helped us close 35% more leads! — Top Agent, Urban Realty"',
  'financial-advisors': '"My clients love the fast follow-ups. — Senior Advisor, WealthPath"',
  'medical-clinics': '"No more no-shows! — Office Manager, Family Health Clinic"',
  'marketing-agencies': '"We scaled onboarding with zero extra admin. — CEO, CreativeWorks"',
}

const faqs = [
  {
    q: 'Is Irsa secure and compliant?',
    a: 'Yes, Irsa is built with industry-standard security and privacy compliance in mind.'
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most clients are up and running within a day, with full onboarding support.'
  },
  {
    q: 'Can Irsa integrate with my existing tools?',
    a: 'Absolutely! Irsa connects with popular calendars, CRMs, and communication platforms.'
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
  if (!useCase) {
    notFound()
  }
  return <UseCaseClient useCase={useCase} slug={params.slug} />
}

export async function generateStaticParams() {
  return Object.keys(useCases).map((slug) => ({
    slug,
  }))
} 