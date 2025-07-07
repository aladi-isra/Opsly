'use client'

import { useState } from 'react'
import { CheckIcon, PhoneIcon } from '@heroicons/react/24/outline'

const benefits = [
  'Human-AI partnership',
  '24/7 seamless support',
  'Voice, chat & web automations',
  'Team amplification'
]

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/demo-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset form
        setFormData({ name: '', email: '', phone: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:+18555551234'
  }

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 py-24 sm:py-32">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-textLight sm:text-6xl lg:text-7xl">
                Boost Your Business{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent leading-tight pb-2">
                  Human-Friendly AI Agents
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-textMuted max-w-2xl lg:max-w-none">
                Transform your business with AI agents that work alongside your team. 
                Get 24/7 customer support, automated bookings, and intelligent sales assistance 
                that feels genuinely human.
              </p>
              
              {/* Benefits list */}
              <div className="mt-10 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start">
                    <CheckIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-lg text-textMuted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Demo call card */}
          <div className="mt-16 lg:mt-0 lg:col-span-5">
            <div className="bg-surface/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-textLight/20">
              <h3 className="text-2xl font-bold text-textLight mb-6 text-center">
                Try a Live Phone Demo
              </h3>
              
              {submitted ? (
                <div className="text-center">
                  <CheckIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-textLight mb-4">Thank you! We&apos;ll be in touch soon.</p>
                  <button
                    onClick={handlePhoneCall}
                    className="w-full button-gradient text-textLight px-6 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>Call Now: +1-855-555-1234</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-textLight/20 text-textLight placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-textLight/20 text-textLight placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-textLight/20 text-textLight placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full button-gradient text-textLight px-6 py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Live Demo'}
                  </button>
                  <button
                    type="button"
                    onClick={handlePhoneCall}
                    className="w-full bg-surface/50 hover:bg-surface/70 text-textLight px-6 py-3 rounded-xl font-semibold border border-textLight/20 flex items-center justify-center space-x-2 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>Or Call: +1-855-555-1234</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-accent opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
} 