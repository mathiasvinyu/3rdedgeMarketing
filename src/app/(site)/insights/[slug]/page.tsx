import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ClosingCTA } from '@/components/home/ClosingCTA'
import { getPayloadClient } from '@/lib/payload'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    const post = result.docs[0]
    if (post) {
      return {
        title: post.title,
        description: post.excerpt,
      }
    }
  } catch {
    // ignore
  }
  return {
    title: 'Note from the work',
  }
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params
  let post: any = null

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      depth: 1,
      limit: 1,
    })
    post = result.docs[0]
  } catch {
    // fallback
  }

  if (!post) {
    if (slug === 'why-most-websites-fail-quietly') {
      post = {
        title: 'Why Most Websites Fail Quietly',
        publishedAt: '2026-09-19',
        readTimeMinutes: 4,
        excerpt:
          'Most websites don’t break loudly with 500 server errors. They fail quietly — a form slightly too fiddly on mobile, a buried menu, a slow paint that drains patience.',
        keyTakeaways: [
          { takeaway: 'Quiet UX friction costs more enterprise revenue than downtime.' },
          { takeaway: 'Designing with edge cases from day one eliminates expensive rework.' },
        ],
      }
    } else if (slug === 'brief-becomes-a-build-no-handoffs') {
      post = {
        title: 'The Brief Becomes a Build: Why We Eliminated Handoffs',
        publishedAt: '2026-09-19',
        readTimeMinutes: 5,
        excerpt:
          'When designers and developers work in silos, intent gets lost in translation. Here is what happens when the same people carry an idea from concept to code.',
        keyTakeaways: [
          { takeaway: 'Direct concept-to-code execution preserves typographic and motion intent.' },
          { takeaway: 'Edge cases discovered early can be fixed for pennies instead of thousands.' },
        ],
      }
    } else {
      notFound()
    }
  }

  const formattedDate = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-ZA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <article style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Link
            href="/insights"
            aria-label="Back to all insights"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--accent-orange)',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Notes</span>
          </Link>

          <header style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', marginBottom: '0.75rem' }}>
              {post.title}
            </h1>
            <div
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              Published {formattedDate} • {post.readTimeMinutes || 4} min read
            </div>
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}
            >
              {post.excerpt}
            </p>
          </header>

          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-surface)',
                borderLeft: '3px solid var(--accent-orange)',
                borderRadius: '0 8px 8px 0',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--accent-orange)',
                  marginBottom: '0.75rem',
                }}
              >
                Key Production Takeaways
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {post.keyTakeaways.map((item: any, i: number) => (
                  <li
                    key={i}
                    style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.6 }}
                  >
                    • {item.takeaway || item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p>
              When clients come to us with a site that is underperforming, the initial diagnosis
              is almost always framed around surface metrics: bounce rates, conversion funnels, or
              outdated visual aesthetics. But when you inspect the real build beneath the mockups,
              the true culprits are quiet failures.
            </p>
            <p>
              A quiet failure is an engineering or design choice that works on paper but breaks under
              human use: an address autofill that wipes out state on mobile Safari, a typography
              scale that gets muddy below standard viewports, or layout shift from unoptimized assets
              that makes someone tap the wrong button.
            </p>
            <p>
              By eliminating the handoff between design and engineering, we catch these friction
              points during concept exploration — while adjusting them takes minutes instead of a
              multi-week ticket cycle.
            </p>
          </div>
        </div>
      </article>

      <ClosingCTA />
    </>
  )
}
