import React from 'react'
import Link from 'next/link'
import styles from './InsightCard.module.scss'

export interface InsightPostItem {
  id?: string
  slug: string
  title: string
  publishedAt: string
  readTimeMinutes: number
  excerpt: string
  topics?: Array<{ name: string } | string>
}

export const InsightCard: React.FC<{ post: InsightPostItem }> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-ZA', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const topicLabel =
    post.topics && post.topics.length > 0
      ? typeof post.topics[0] === 'string'
        ? post.topics[0]
        : post.topics[0].name
      : 'Note'

  return (
    <article className={styles.card}>
      <Link href={`/insights/${post.slug}`} className={styles.linkOverlay}>
        <div className={styles.meta}>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.readTimeMinutes} min read</span>
        </div>

        <h3>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.topicBadge}>{topicLabel}</span>
          <span className={styles.readMore}>Read Note →</span>
        </div>
      </Link>
    </article>
  )
}
