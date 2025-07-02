import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Irsa',
  description: 'Irsa\'s privacy policy and data protection practices',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                request a demo, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Name and contact information</li>
                <li>Business information and use case details</li>
                <li>Communication preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide and deliver our AI automation services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to access, update, or delete your personal information. 
                Contact us at privacy@irsa.ca to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">Email: privacy@irsa.ca</p>
                <p className="text-gray-300">Phone: +1 (855) 555-1234</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
} 