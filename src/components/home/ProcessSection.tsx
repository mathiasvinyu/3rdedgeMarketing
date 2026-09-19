'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ProcessSection.module.scss'

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineFillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      if (lineFillRef.current) lineFillRef.current.style.transform = 'scaleY(1)'
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    gsap.to(lineFillRef.current, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        end: 'bottom 75%',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="process" ref={sectionRef} className={styles.processWrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.stickyHeader}>
            <h2>How We Work</h2>
            <div className={styles.label}>Execution Discipline</div>
            <p>One unified, end-to-end craft, without junior handoffs.</p>
          </div>

          <div className={styles.narrativeFlow}>
            <div className={styles.svgTrack} aria-hidden="true">
              <div ref={lineFillRef} className={styles.svgFill} />
            </div>

            <div className={styles.proseCard}>
              <p>
                We start most projects with more questions than people expect, not just
                what you want built, but who’s actually going to use it and what they’re
                trying to get done.
              </p>
              <p>
                From there, we set out exactly what we’re building before anyone touches
                a line of code, so nothing gets lost between a conversation and a
                finished product.
              </p>
              <p>
                Then we build it properly,fast, accessible, tested against real
                behaviour rather than a static mockup.
              </p>
              <p className={styles.accentSentence}>
                And once it’s live, we keep watching how people actually use it, because
                a website is never really finished.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
