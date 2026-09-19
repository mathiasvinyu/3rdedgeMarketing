import { getPayloadClient } from './payload'

export async function seedInitialContent() {
  const payload = await getPayloadClient()

  // 1. Seed Site Settings
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        navigation: [
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Services', path: '/services' },
          { label: 'Insights', path: '/insights' },
        ],
        contactInfo: {
          email: 'hello@3rdedge.co.za',
          location: 'South Africa',
        },
        footer: {
          positioningText: 'Good websites aren’t magic, they’re just done properly — clear thinking, honest design, solid engineering.',
          copyright: '© 3rd Edge Creative. All rights reserved.',
        },
      },
    })
  } catch (err) {
    console.warn('SiteSettings global seed note:', err)
  }

  // 2. Seed Capabilities Taxonomy
  const capabilityLabels = [
    'User research',
    'Prototyping',
    'Visual design',
    'Accessibility audits',
    'Next.js / React',
    'Node.js & APIs',
    'Custom web applications',
    'Secure, scalable architecture',
    'Core Web Vitals',
    'Server-side rendering & edge delivery',
    'Asset optimization',
    'Database performance',
    'Custom dashboards',
    'CMS architecture',
    'Workflow automation',
    'Systems integration',
    'Style guides',
    'Component libraries',
    'Visual identity',
    'Documentation',
  ]

  const capabilityMap: Record<string, number> = {}
  for (const label of capabilityLabels) {
    const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const existing = await payload.find({
      collection: 'capabilities',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      capabilityMap[label] = Number(existing.docs[0].id)
    } else {
      const created = await payload.create({
        collection: 'capabilities',
        data: { label, slug },
      })
      capabilityMap[label] = Number(created.id)
    }
  }

  // 3. Seed 5 Services
  const servicesData = [
    {
      number: '01',
      title: 'UX & Product Design',
      slug: 'ux-product-design',
      summary: 'We design the actual experience — how something looks, how it flows, and whether people can use it without thinking too hard. Every project starts with real research, not assumptions.',
      capabilities: [
        capabilityMap['User research'],
        capabilityMap['Prototyping'],
        capabilityMap['Visual design'],
        capabilityMap['Accessibility audits'],
      ].filter(Boolean),
      order: 1,
    },
    {
      number: '02',
      title: 'Web Development',
      slug: 'web-development',
      summary: 'We build the site or application properly, front to back — modern frameworks, clean architecture, systems that hold up under real use, not just a demo.',
      capabilities: [
        capabilityMap['Next.js / React'],
        capabilityMap['Node.js & APIs'],
        capabilityMap['Custom web applications'],
        capabilityMap['Secure, scalable architecture'],
      ].filter(Boolean),
      order: 2,
    },
    {
      number: '03',
      title: 'Performance',
      slug: 'performance',
      summary: 'A slow site loses people before they’ve even seen what you built. We optimize load times, Core Web Vitals, and asset delivery so that doesn’t happen.',
      capabilities: [
        capabilityMap['Core Web Vitals'],
        capabilityMap['Server-side rendering & edge delivery'],
        capabilityMap['Asset optimization'],
        capabilityMap['Database performance'],
      ].filter(Boolean),
      order: 3,
    },
    {
      number: '04',
      title: 'Complex & Enterprise Builds',
      slug: 'complex-enterprise-builds',
      summary: 'Some projects are more than a marketing site — internal tools, case management systems, multi-stakeholder platforms. We handle that complexity without losing the plot.',
      capabilities: [
        capabilityMap['Custom dashboards'],
        capabilityMap['CMS architecture'],
        capabilityMap['Workflow automation'],
        capabilityMap['Systems integration'],
      ].filter(Boolean),
      order: 4,
    },
    {
      number: '05',
      title: 'Design Systems & Brand',
      slug: 'design-systems-brand',
      summary: 'A brand and a design system should make future work faster, not slower. We build both so your team — or ours — can keep building consistently after we’re gone.',
      capabilities: [
        capabilityMap['Style guides'],
        capabilityMap['Component libraries'],
        capabilityMap['Visual identity'],
        capabilityMap['Documentation'],
      ].filter(Boolean),
      order: 5,
    },
  ]

  for (const s of servicesData) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: s.slug } },
      limit: 1,
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'services',
        data: s,
      })
    }
  }

  // 4. Seed Topics & Insights Posts
  const topics = ['Engineering', 'Design', 'Strategy']
  const topicMap: Record<string, number> = {}
  for (const name of topics) {
    const slug = name.toLowerCase()
    const existing = await payload.find({
      collection: 'topics',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      topicMap[name] = Number(existing.docs[0].id)
    } else {
      const created = await payload.create({
        collection: 'topics',
        data: { name, slug },
      })
      topicMap[name] = Number(created.id)
    }
  }

  const postsData = [
    {
      title: 'Why Most Websites Fail Quietly',
      slug: 'why-most-websites-fail-quietly',
      publishedAt: new Date().toISOString(),
      readTimeMinutes: 4,
      excerpt: 'Most websites don’t break loudly with 500 server errors. They fail quietly — a form slightly too fiddly on mobile, a buried menu, a slow paint that drains patience.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Most websites do not fail loudly. They fail quietly. A form that is slightly too fiddly on mobile, a navigation hierarchy that buries the one link visitors came for, or an unoptimized bundle that steals two seconds too long. None of it triggers an error alert. All of it drains trust and conversion.',
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      keyTakeaways: [
        { takeaway: 'Quiet UX friction costs more enterprise revenue than downtime.' },
        { takeaway: 'Designing with edge cases from day one eliminates expensive rework.' },
      ],
      topics: [topicMap['Design'], topicMap['Engineering']].filter(Boolean),
    },
    {
      title: 'The Brief Becomes a Build: Why We Eliminated Handoffs',
      slug: 'brief-becomes-a-build-no-handoffs',
      publishedAt: new Date().toISOString(),
      readTimeMinutes: 5,
      excerpt: 'When designers and developers work in silos, intent gets lost in translation. Here is what happens when the same people carry an idea from concept to code.',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Normally, a designer says "make it feel effortless," and that turns into a Jira ticket. In that translation, nuance disappears. When senior practitioners work across both disciplines, effortless does not need a translator. It simply gets built.',
                },
              ],
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      keyTakeaways: [
        { takeaway: 'Direct concept-to-code execution preserves typographic and motion intent.' },
        { takeaway: 'Edge cases discovered early can be fixed for pennies instead of thousands.' },
      ],
      topics: [topicMap['Strategy'], topicMap['Engineering']].filter(Boolean),
    },
  ]

  for (const p of postsData) {
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: p.slug } },
      limit: 1,
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'posts',
        data: p,
      })
    }
  }

  // 5. Seed Case Studies
  const caseStudiesData = [
    {
      clientName: 'Public Sector Governance Portal',
      title: 'Streamlining Citizen Case Management',
      slug: 'citizen-case-management-portal',
      quietFailureDiagnosed: 'Legacy forms took an average of 14 minutes to complete, with a 42% abandonment rate on mobile devices due to complex field validation.',
      solutionImplemented: 'Built a lightweight, accessible Next.js portal with optimistic state validation, instant offline autosave, and strict WCAG 2.1 AA keyboard support.',
      verifiedOutcome: 'Form completion time dropped to under 4 minutes; mobile completion increased by 65% across 250,000 monthly citizens.',
      order: 1,
    },
    {
      clientName: 'Institutional Health Initiative',
      title: 'Multi-Region Health Data Dashboard',
      slug: 'multi-region-health-dashboard',
      quietFailureDiagnosed: 'Regional field workers faced 10-second data sync latencies and UI freezes over 3G cellular connections.',
      solutionImplemented: 'Engineered server-side rendered data visualizations with local caching and progressive SVG rendering optimized for high-latency connections.',
      verifiedOutcome: 'Initial dashboard render reached sub-1.5s on mobile networks, enabling real-time clinical tracking across 120 remote clinics.',
      order: 2,
    },
  ]

  for (const cs of caseStudiesData) {
    const existing = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: cs.slug } },
      limit: 1,
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'case-studies',
        data: cs,
      })
    }
  }

  console.log('3rd Edge Creative initial content successfully seeded!')
}
