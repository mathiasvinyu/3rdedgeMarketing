'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ServiceVectorArtifact } from './ServiceVectorArtifact'
import styles from './ServiceCard.module.scss'

export interface ServiceItemData {
  id?: string
  number: string
  title: string
  summary: string
  categoryBadges?: string[]
  features?: string[]
  techStack?: string[]
  capabilities?: Array<{ label: string } | string>
}

// Default capabilities/features fallback mapping if Payload DB only has basic fields
const defaultServiceMetadata: Record<
  string,
  {
    categoryBadges: string[]
    features: string[]
    techStack: string[]
  }
> = {
  '01': {
    categoryBadges: ['UX & PRODUCT DESIGN', 'IN-HOUSE CAPABILITY'],
    features: [
      'User research & discovery interviews',
      'Interactive wireframes & click prototypes',
      'High-fidelity visual design systems',
      'Strict WCAG 2.1 AA accessibility audits',
    ],
    techStack: ['Figma', 'UserTesting', 'Miro', 'Design Tokens', 'WCAG AA'],
  },
  '02': {
    categoryBadges: ['FULL-STACK ENGINEERING', 'PRODUCTION STANDARDS'],
    features: [
      'Next.js & React App Router architecture',
      'Resilient Node.js & REST/GraphQL APIs',
      'Custom web applications front-to-back',
      'Strict TypeScript & end-to-end type safety',
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Payload CMS'],
  },
  '03': {
    categoryBadges: ['CORE WEB VITALS', 'EDGE RESILIENCE'],
    features: [
      'Sub-second LCP (Largest Contentful Paint)',
      'Zero cumulative layout shift (CLS: 0.00)',
      'Global edge caching & CDN distribution',
      'Database query tuning & asset optimization',
    ],
    techStack: ['Core Web Vitals', 'Edge CDN', 'Sharp / WebP', 'Redis', 'Lighthouse'],
  },
  '04': {
    categoryBadges: ['AGENTIC AI & AUTOMATION', 'IN-HOUSE CAPABILITY'],
    features: [
      'WhatsApp / Instagram auto-response bots',
      'Lead enrichment + scoring pipelines',
      'Content generation with editorial review',
      'CRM auto-sync (HubSpot, Pipedrive, custom)',
    ],
    techStack: ['n8n', 'OpenAI API', 'Claude API', 'Node.js', 'Webhooks'],
  },
  '05': {
    categoryBadges: ['BRAND IDENTITY', 'SCALABLE DESIGN SYSTEMS'],
    features: [
      'Tokenized style guides & 8pt spatial grid',
      'Modular, reusable component libraries',
      'Scalable brand typography & color palettes',
      'Living design system documentation',
    ],
    techStack: ['Figma Variables', 'Storybook', 'CSS Tokens', 'WCAG AA', 'Git Sync'],
  },
}

export const ServiceCard: React.FC<{ service: ServiceItemData }> = ({ service }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const vectorColRef = useRef<HTMLDivElement>(null)
  const contentColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // 1. Entrance animation triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(vectorColRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.8,
        ease: 'power2.out',
      })

      if (contentColRef.current) {
        tl.from(
          contentColRef.current.children,
          {
            opacity: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.5'
        )
      }

      // 2. Subtle continuous scroll parallax on desktop
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches
      if (isDesktop && vectorColRef.current) {
        gsap.to(vectorColRef.current, {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const meta = defaultServiceMetadata[service.number] || {
    categoryBadges: ['CAPABILITY', 'IN-HOUSE'],
    features: service.capabilities
      ? service.capabilities.map((c) => (typeof c === 'string' ? c : c.label))
      : [
          'Production-grade implementation',
          'Rigorous engineering review',
          'Long-term maintainability',
          'Zero junior agency handoffs',
        ],
    techStack: ['TypeScript', 'Modern Web', 'API', 'Payload CMS'],
  }

  const categoryBadges = service.categoryBadges || meta.categoryBadges
  const features = service.features || meta.features
  const techStack = service.techStack || meta.techStack

  return (
    <article
      ref={sectionRef}
      className={styles.serviceSection}
      aria-labelledby={`service-${service.number}`}
      data-service-number={service.number}
    >
      <div className={styles.splitGrid}>
        {/* Vector Canvas Column (Borrowed from Hero Graphic standard) */}
        <div ref={vectorColRef} className={styles.vectorColumn}>
          <ServiceVectorArtifact number={service.number} title={service.title} />
        </div>

        {/* Content Column (Editorial, Checklists, Tech Stack) */}
        <div ref={contentColRef} className={styles.contentColumn}>
          {/* Top Category Badges */}
          {categoryBadges && categoryBadges.length > 0 && (
            <div className={styles.badgeRow}>
              {categoryBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`${styles.categoryBadge} ${idx > 0 ? styles.secondary : ''}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Heading */}
          <h2 id={`service-${service.number}`} className={styles.title}>
            {service.title}
          </h2>

          {/* Narrative Summary */}
          <p className={styles.summary}>{service.summary}</p>

          {/* 2-Column Feature Checklist */}
          {features && features.length > 0 && (
            <ul className={styles.featureGrid}>
              {features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                      <circle cx="8" cy="8" r="7" stroke="#EA5807" strokeWidth="1.5" />
                      <path
                        d="M5 8 L7 10 L11 6"
                        stroke="#EA5807"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          {techStack && techStack.length > 0 && (
            <div className={styles.techStackRow}>
              {techStack.map((tech, idx) => (
                <span key={idx} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
