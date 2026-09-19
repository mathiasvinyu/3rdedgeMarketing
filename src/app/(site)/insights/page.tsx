import React from 'react'
import type { Metadata } from 'next'
import { InsightCard, type InsightPostItem } from '@/components/insights/InsightCard'
import { ClosingCTA } from '@/components/home/ClosingCTA'
import { getPayloadClient } from '@/lib/payload'
import { seedInitialContent } from '@/lib/seed'

export const metadata: Metadata = {
  title: 'Insights — Notes from the work',
  description:
    'Things we’ve learned building for clients who can’t afford to get it wrong — some technical, some strategic, most of it stuff we wish someone had told us earlier.',
}

export default async function InsightsPage() {
  let posts: InsightPostItem[] = []

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      depth: 1,
    })

    if (result.docs.length === 0) {
      await seedInitialContent()
      const seeded = await payload.find({
        collection: 'posts',
        sort: '-publishedAt',
        depth: 1,
      })
      posts = seeded.docs as unknown as InsightPostItem[]
    } else {
      posts = result.docs as unknown as InsightPostItem[]
    }
  } catch (error) {
    console.error('Failed to load posts from Payload:', error)
    // Fallback static posts
    posts = [
      {
        slug: 'why-most-websites-fail-quietly',
        title: 'Why Most Websites Fail Quietly',
        publishedAt: '2026-09-19',
        readTimeMinutes: 4,
        excerpt:
          'Most websites don’t break loudly with 500 server errors. They fail quietly — a form slightly too fiddly on mobile, a buried menu, a slow paint that drains patience.',
        topics: ['Design'],
      },
      {
        slug: 'brief-becomes-a-build-no-handoffs',
        title: 'The Brief Becomes a Build: Why We Eliminated Handoffs',
        publishedAt: '2026-09-19',
        readTimeMinutes: 5,
        excerpt:
          'When designers and developers work in silos, intent gets lost in translation. Here is what happens when the same people carry an idea from concept to code.',
        topics: ['Engineering'],
      },
    ]
  }

  return (
    <>
      <section style={{ paddingTop: '5rem', paddingBottom: '3.5rem' }}>
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
              Editorial Notes
            </div>
            <h1 style={{ marginBottom: '1.25rem' }}>Insights — Notes from the work</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              Things we’ve learned building for clients who can’t afford to get it wrong —
              some technical, some strategic, most of it stuff we wish someone had told us earlier.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
              maxWidth: '960px',
            }}
          >
            {posts.map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
