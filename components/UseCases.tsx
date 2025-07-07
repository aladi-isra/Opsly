'use client'

import Link from 'next/link'
import {
  BriefcaseIcon,
  HomeIcon,
  BanknotesIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const useCases = [
  {
    id: 'law-firms',
    title: 'Law Firms',
    description: 'Grow your practice by automating client intake, scheduling, and document workflows—so you can focus on winning cases, not paperwork.',
    details: 'Let Opsly handle repetitive admin tasks, boost client satisfaction, and free up your legal team for high-value work.',
    icon: BriefcaseIcon,
    href: '/use-cases/law-firms'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Capture, qualify, and convert more leads 24/7 with instant responses and seamless property inquiry management.',
    details: 'Never miss a sales opportunity—Opsly nurtures prospects, schedules showings, and keeps your pipeline full.',
    icon: HomeIcon,
    href: '/use-cases/real-estate'
  },
  {
    id: 'financial-advisors',
    title: 'Financial Advisors',
    description: 'Deliver a VIP client experience with automated appointment booking, proactive follow-ups, and easy report sharing.',
    details: 'Opsly keeps your clients engaged and informed, so you can focus on building wealth and relationships.',
    icon: BanknotesIcon,
    href: '/use-cases/financial-advisors'
  },
  {
    id: 'medical-clinics',
    title: 'Medical Clinics',
    description: 'Reduce no-shows and streamline patient care with automated intake, reminders, and follow-up messaging.',
    details: 'Opsly improves patient satisfaction and clinic efficiency, letting your staff focus on care, not calls.',
    icon: HeartIcon,
    href: '/use-cases/medical-clinics'
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
            Opsly adapts to your business needs, providing specialized automation 
            for different industries and use cases.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="relative group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-base text-gray-200 mb-3 leading-relaxed font-medium">
                  {useCase.description}
                </p>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {useCase.details}
                </p>

                {/* CTA - aligned at bottom */}
                <div className="pt-2">
                  <Link
                    href={useCase.href}
                    className="inline-flex items-center text-primary hover:text-purple-400 font-semibold text-sm transition-colors group-hover:underline"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

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