import Link from 'next/link'
import { 
  BuildingStorefrontIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

const useCases = [
  {
    id: 'barber-shop',
    title: 'Barber Shops',
    description: 'Automated appointment booking and customer reminders.',
    details: 'Never miss a cut with 24/7 scheduling and customer service.',
    icon: BuildingStorefrontIcon,
    href: '/use-cases/barber-shop'
  },
  {
    id: 'dental-office',
    title: 'Dental Offices',
    description: 'Patient scheduling and insurance verification assistance.',
    details: 'Streamline patient care with intelligent appointment management.',
    icon: HeartIcon,
    href: '/use-cases/dental-office'
  },
  {
    id: 'hvac',
    title: 'HVAC Services',
    description: 'Emergency dispatch and service appointment coordination.',
    details: 'Respond to customer needs instantly, day or night.',
    icon: WrenchScrewdriverIcon,
    href: '/use-cases/hvac'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Lead qualification and property inquiry management.',
    details: 'Convert more leads with intelligent customer engagement.',
    icon: HomeIcon,
    href: '/use-cases/real-estate'
  }
]

export default function UseCases() {
  return (
    <div id="usecases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Perfect for Every Industry
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Irsa adapts to your business needs, providing specialized automation 
            for different industries and use cases.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="relative group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  {useCase.details}
                </p>

                {/* CTA */}
                <Link
                  href={useCase.href}
                  className="inline-flex items-center text-primary hover:text-purple-400 font-semibold text-sm transition-colors group-hover:underline"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 