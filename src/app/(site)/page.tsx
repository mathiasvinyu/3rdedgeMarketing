import React from 'react'
import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { DiagnosisSection } from '@/components/home/DiagnosisSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { CaseStudySection, type CaseStudyItem } from '@/components/home/CaseStudySection'
import { ClosingCTA } from '@/components/home/ClosingCTA'
import { getPayloadClient } from '@/lib/payload'
import { seedInitialContent } from '@/lib/seed'

export const metadata: Metadata = {
  title: '3rd Edge Creative — We Build Things That Work',
  description:
    'Good websites aren’t magic, they’re just done properly — clear thinking, honest design, solid engineering. That’s what we do, for clients who’d rather not gamble on their digital presence.',
}

export default async function HomePage() {
  let caseStudies: CaseStudyItem[] = []

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      sort: 'order',
      limit: 10,
    })

    if (result.docs.length === 0) {
      // Auto-seed initial content if database is fresh
      await seedInitialContent()
      const seeded = await payload.find({
        collection: 'case-studies',
        sort: 'order',
        limit: 10,
      })
      caseStudies = seeded.docs as unknown as CaseStudyItem[]
    } else {
      caseStudies = result.docs as unknown as CaseStudyItem[]
    }
  } catch (error) {
    console.error('Failed to load case studies from Payload:', error)
    // Fallback static data
    caseStudies = [
      {
        clientName: 'Public Sector Governance Portal',
        title: 'Streamlining Citizen Case Management',
        quietFailureDiagnosed: 'Legacy forms took an average of 14 minutes to complete, with a 42% abandonment rate on mobile devices due to complex field validation.',
        solutionImplemented: 'Built a lightweight, accessible Next.js portal with optimistic state validation, instant offline autosave, and strict WCAG 2.1 AA keyboard support.',
        verifiedOutcome: 'Form completion time dropped to under 4 minutes; mobile completion increased by 65% across 250,000 monthly citizens.',
      },
      {
        clientName: 'Institutional Health Initiative',
        title: 'Multi-Region Health Data Dashboard',
        quietFailureDiagnosed: 'Regional field workers faced 10-second data sync latencies and UI freezes over 3G cellular connections.',
        solutionImplemented: 'Engineered server-side rendered data visualizations with local caching and progressive SVG rendering optimized for high-latency connections.',
        verifiedOutcome: 'Initial dashboard render reached sub-1.5s on mobile networks, enabling real-time clinical tracking across 120 remote clinics.',
      },
    ]
  }

  return (
    <>
      <HeroSection />
      <DiagnosisSection />
      <ProcessSection />
      <CaseStudySection studies={caseStudies} />
      <ClosingCTA />
    </>
  )
}
