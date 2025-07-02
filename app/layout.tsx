import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Irsa - AI-Powered Business Automation | 24/7 Virtual Reception & Sales',
  description: 'Boost your business with Irsa\'s friendly AI agents. Get 24/7 reception, automated bookings, sales calls, and customer support. Never miss another customer.',
  keywords: 'AI automation, virtual receptionist, business automation, 24/7 support, AI sales, automated bookings',
  authors: [{ name: 'Irsa Inc.' }],
  openGraph: {
    title: 'Irsa - AI-Powered Business Automation',
    description: 'Boost your business with Irsa\'s friendly AI agents. Get 24/7 reception, automated bookings, sales calls, and customer support.',
    url: 'https://irsa.ca',
    siteName: 'Irsa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Irsa AI Business Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irsa - AI-Powered Business Automation',
    description: 'Boost your business with Irsa\'s friendly AI agents. Get 24/7 reception, automated bookings, sales calls, and customer support.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter antialiased bg-brandDark text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 