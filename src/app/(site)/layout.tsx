import type { Metadata, Viewport } from 'next'
import { Unbounded, Montserrat } from 'next/font/google'
import { SiteShell } from '@/components/layout/SiteShell'
import '@/styles/globals.scss'

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | 3rd Edge Creative',
    default: '3rd Edge Creative — We Build Things That Work',
  },
  description:
    'Clear thinking, honest design, solid engineering. We build web applications, design systems, and digital platforms for clients who would rather not gamble on their digital presence.',
  keywords: [
    'Web Development',
    'UX & Product Design',
    'Next.js',
    'React',
    'Design Systems',
    'Accessibility',
    'WCAG',
    'Core Web Vitals',
    'Enterprise Builds',
  ],
  authors: [{ name: '3rd Edge Creative', url: 'https://3rdedge.co.za' }],
  metadataBase: new URL('https://3rdedge.co.za'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://3rdedge.co.za',
    siteName: '3rd Edge Creative',
    title: '3rd Edge Creative — We Build Things That Work',
    description:
      'Clear thinking, honest design, solid engineering. We design and build end to end, without lossy handoffs.',
  },
}

export const viewport: Viewport = {
  themeColor: '#14161A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${montserrat.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
