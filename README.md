# Opsly - AI-Powered Business Automation

A modern Next.js 14 marketing website for Opsly, showcasing AI-powered business automation solutions with 24/7 reception, bookings, sales calls, and customer support.

## Features

- **Modern Design**: Dark gradient theme with purple accents matching talkforce.ai aesthetic
- **Responsive**: Mobile-first design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Next.js 14**: Latest App Router architecture
- **API Integration**: Contact forms and demo call requests
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Accessibility**: ARIA labels and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Email**: Nodemailer
- **Deployment**: Vercel ready

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd opsly-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# SMTP Configuration for contact form
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Twilio Configuration for demo calls (optional)
TWILIO_SID=your-twilio-sid
TWILIO_AUTH=your-twilio-auth-token
TWILIO_NUMBER=+1234567890

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
opsly-site/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API routes
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── demo-call/route.ts    # Demo request handler
│   ├── use-cases/[slug]/         # Dynamic use case pages
│   ├── privacy/                  # Privacy policy page
│   ├── terms/                    # Terms of service page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── Navbar.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section with demo form
│   ├── Explanation.tsx          # How Opsly works section
│   ├── VideoSection.tsx         # Video demo section
│   ├── UseCases.tsx             # Industry use cases
│   ├── CTABanner.tsx            # Call-to-action banner
│   └── Footer.tsx               # Site footer
├── public/                      # Static assets
└── ...config files
```

## Key Sections

### Hero Section
- Compelling headline with gradient text
- Four key benefits list
- Live demo call-to-action card
- Direct phone call integration

### How Opsly Works
- Four-step process explanation
- Visual illustration placeholder
- Icon-based step indicators

### Video Section
- YouTube embed (placeholder video)
- Performance stats display
- Responsive video player

### Use Cases
- Industry-specific cards
- Dynamic routing to detailed pages
- Hover animations and effects

### CTA Banner
- Purple gradient background
- Dual call-to-action buttons
- Conversion-optimized design

## API Endpoints

### `/api/contact`
Handles contact form submissions with email notifications.

**POST Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "I'm interested in Opsly for my business."
}
```

### `/api/demo-call`
Handles demo call requests and logs submissions.

**POST Request:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890"
}
```

## Environment Setup

### SMTP Configuration
For contact form functionality, configure SMTP settings:

- **Gmail**: Use App Passwords for authentication
- **SendGrid**: Use API key as password
- **Custom SMTP**: Any standard SMTP server

### Twilio Integration (Optional)
For demo call automation:

1. Sign up for Twilio account
2. Get Account SID and Auth Token
3. Purchase a phone number
4. Uncomment Twilio code in `/api/demo-call/route.ts`

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: '#7950F2',      // Main purple accent
  brandDark: '#0C0C0F',    // Dark background
  brandLight: '#2A2B32'    // Light background
}
```

### Content
- Update hero section in `components/Hero.tsx`
- Modify use cases in `components/UseCases.tsx`
- Edit company info in `components/Footer.tsx`

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom gradients and animations

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
The project works with any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting
- **SEO**: Meta tags and structured data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support:
- Email: hello@opsly.ca
- Phone: +1 (855) 555-1234

---

Built with ❤️ using Next.js 14 and Tailwind CSS.
