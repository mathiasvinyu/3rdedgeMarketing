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
        capabilities: [
          'User research',
          'Prototyping',
          'Visual design',
          'Accessibility audits',
        ],
      },
      {
        number: '02',
        title: 'Web Development',
        summary:
          'We build the site or application properly, front to back — modern frameworks, clean architecture, systems that hold up under real use, not just a demo.',
        capabilities: [
          'Next.js / React',
          'Node.js & APIs',
          'Custom web applications',
          'Secure, scalable architecture',
        ],
      },
      {
        number: '03',
        title: 'Performance',
        summary:
          'A slow site loses people before they’ve even seen what you built. We optimize load times, Core Web Vitals, and asset delivery so that doesn’t happen.',
        capabilities: [
          'Core Web Vitals',
          'Server-side rendering & edge delivery',
          'Asset optimization',
          'Database performance',
        ],
      },
      {
        number: '04',
        title: 'Complex & Enterprise Builds',
        summary:
          'Some projects are more than a marketing site — internal tools, case management systems, multi-stakeholder platforms. We handle that complexity without losing the plot.',
        capabilities: [
          'Custom dashboards',
          'CMS architecture',
          'Workflow automation',
          'Systems integration',
        ],
      },
      {
        number: '05',
        title: 'Design Systems & Brand',
        summary:
          'A brand and a design system should make future work faster, not slower. We build both so your team — or ours — can keep building consistently after we’re gone.',
        capabilities: [
          'Style guides',
          'Component libraries',
          'Visual identity',
          'Documentation',
        ],
      },
    ]
  }

  return (
    <>
      <section style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-orange)',
                marginBottom: '0.75rem',
              }}
            >
              Core Capabilities
            </div>
            <h1 style={{ marginBottom: '1.25rem' }}>Services</h1>
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
