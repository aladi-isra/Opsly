'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navigation = [
  { name: 'Use Cases', href: '#usecases' },
  { name: 'Resources', href: '#resources' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Irsa</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-white font-bold text-xl">Irsa</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#cta"
            className="button-gradient text-white px-6 py-2 rounded-full text-sm font-semibold leading-6 shadow-lg"
          >
            Book Discovery Call
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={clsx(
        'lg:hidden',
        mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
      )}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brandDark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Irsa</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="text-white font-bold text-xl">Irsa</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#cta"
                  className="button-gradient -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 