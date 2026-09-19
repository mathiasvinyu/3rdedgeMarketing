import React from 'react'
import type { Metadata } from 'next'
import { ServiceList } from '@/components/services/ServiceList'
import { ClosingCTA } from '@/components/home/ClosingCTA'
import { getPayloadClient } from '@/lib/payload'
import { seedInitialContent } from '@/lib/seed'
import type { ServiceItemData } from '@/components/services/ServiceCard'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Five core capabilities, front to back: UX & Product Design, Web Development, Performance, Complex & Enterprise Builds, and Design Systems & Brand.',
}

export default async function ServicesPage() {
  let services: ServiceItemData[] = []

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      sort: 'order',
      depth: 1, // expand capabilities taxonomy
    })

    if (result.docs.length === 0) {
      await seedInitialContent()
      const seeded = await payload.find({
        collection: 'services',
        sort: 'order',
        depth: 1,
      })
      services = seeded.docs as unknown as ServiceItemData[]
    } else {
      services = result.docs as unknown as ServiceItemData[]
    }
  } catch (error) {
    console.error('Failed to load services from Payload:', error)
    // Fallback static data
    services = [
      {
        number: '01',
        title: 'UX & Product Design',
        summary:
          'We design the actual experience — how something looks, how it flows, and whether people can use it without thinking too hard. Every project starts with real research, not assumptions.',
        categoryBadges: ['UX & PRODUCT DESIGN', 'IN-HOUSE CAPABILITY'],
        features: [
          'User research & discovery interviews',
          'Interactive wireframes & click prototypes',
          'High-fidelity visual design systems',
          'Strict WCAG 2.1 AA accessibility audits',
        ],
        techStack: ['Figma', 'UserTesting', 'Miro', 'Design Tokens', 'WCAG AA'],
      },
      {
        number: '02',
        title: 'Web Development',
        summary:
          'We build the site or application properly, front to back — modern frameworks, clean architecture, systems that hold up under real use, not just a demo.',
        categoryBadges: ['FULL-STACK ENGINEERING', 'PRODUCTION STANDARDS'],
        features: [
          'Next.js & React App Router architecture',
          'Resilient Node.js & REST/GraphQL APIs',
          'Custom web applications front-to-back',
          'Strict TypeScript & end-to-end type safety',
        ],
        techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Payload CMS'],
      },
      {
        number: '03',
        title: 'Performance',
        summary:
          'A slow site loses people before they’ve even seen what you built. We optimize load times, Core Web Vitals, and asset delivery so that doesn’t happen.',
        categoryBadges: ['CORE WEB VITALS', 'EDGE RESILIENCE'],
        features: [
          'Sub-second LCP (Largest Contentful Paint)',
          'Zero cumulative layout shift (CLS: 0.00)',
          'Global edge caching & CDN distribution',
          'Database query tuning & asset optimization',
        ],
        techStack: ['Core Web Vitals', 'Edge CDN', 'Sharp / WebP', 'Redis', 'Lighthouse'],
      },
      {
        number: '04',
        title: 'AI-Powered Marketing Workflows',
        summary:
          'Custom agentic AI workflows that automate lead qualification, content drafting, multi-channel posting, and CRM enrichment. Built on n8n, OpenAI, and Claude with human-in-the-loop review.',
        categoryBadges: ['AGENTIC AI & AUTOMATION', 'IN-HOUSE CAPABILITY'],
        features: [
          'WhatsApp / Instagram auto-response bots',
          'Lead enrichment + scoring pipelines',
          'Content generation with editorial review',
          'CRM auto-sync (HubSpot, Pipedrive, custom)',
        ],
        techStack: ['n8n', 'OpenAI API', 'Claude API', 'Node.js', 'Webhooks'],
      },
      {
        number: '05',
        title: 'Design Systems & Brand',
        summary:
          'A brand and a design system should make future work faster, not slower. We build both so your team — or ours — can keep building consistently after we’re gone.',
        categoryBadges: ['BRAND IDENTITY', 'SCALABLE DESIGN SYSTEMS'],
        features: [
          'Tokenized style guides & 8pt spatial grid',
          'Modular, reusable component libraries',
          'Scalable brand typography & color palettes',
          'Living design system documentation',
        ],
        techStack: ['Figma Variables', 'Storybook', 'CSS Tokens', 'WCAG AA', 'Git Sync'],
      },
    ]
  }

  return (
    <>
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <h1 style={{ marginBottom: '0.75rem' }}>Services</h1>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-orange)',
                marginBottom: '1.25rem',
              }}
            >
              Core Capabilities
            </div>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              We design and build digital products for clients who can’t afford to get
              it wrong. Five core capabilities, front to back — without junior handoffs.
            </p>
          </div>

          <ServiceList services={services} />
        </div>
      </section>

      <ClosingCTA id="services-cta" />
    </>
  )
}
