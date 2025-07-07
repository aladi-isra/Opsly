import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
              primary: '#2563EB',   // Trustworthy Blue - Primary
      secondary: '#1E40AF', // Darker Blue - Secondary
      accent: '#3B82F6',    // Bright Blue - Accent
      background: '#0F172A', // Deep Blue-Black - Background
      surface: '#1E293B',   // Dark Blue-Grey - Surface
      brandDark: '#020617', // Pure Black - Headers
      brandLight: '#475569', // Medium Grey
      textLight: '#F8FAFC', // Off-White - Text
      textMuted: '#94A3B8'  // Muted Grey - Secondary Text
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config 