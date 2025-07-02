import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Irsa',
  description: 'Irsa\'s terms of service and usage agreement',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-purple-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using Irsa's services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="text-gray-300 mb-4">
                Irsa provides AI-powered business automation services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>24/7 virtual reception services</li>
                <li>Automated appointment booking</li>
                <li>Customer service automation</li>
                <li>Sales assistance and lead qualification</li>
                <li>Business intelligence and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not interfere with or disrupt the service</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Service Availability</h2>
              <p className="text-gray-300">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted service. 
                Planned maintenance will be communicated in advance when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300">
                Irsa shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
              <p className="text-gray-300">
                Either party may terminate this agreement at any time with appropriate notice. 
                Upon termination, your access to the service will cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Continued use of the 
                service constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-300">
                For questions regarding these terms, contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">Email: legal@irsa.ca</p>
                <p className="text-gray-300">Phone: +1 (855) 555-1234</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
} 