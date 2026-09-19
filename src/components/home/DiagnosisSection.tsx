'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './DiagnosisSection.module.scss'

export const DiagnosisSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const phrases = textRef.current?.querySelectorAll(`.${styles.phrase}`)
    if (!phrases || phrases.length === 0) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: 0.8,
      },
    })

    phrases.forEach((phrase) => {
      tl.to(
        phrase,
        {
          color: phrase.classList.contains(styles.highlight) ? '#EA5807' : '#F3F4F6',
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
        },
        '>-0.4',
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="diagnosis" ref={sectionRef} className={styles.diagnosisWrapper}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heading}>Why Most Sites Cost More Than They Should</h2>
          <div className={styles.label}>The Quiet Failures</div>

          <p ref={textRef} className={styles.narrativeText}>
            <span className={styles.phrase}>Most sites don’t fail loudly. </span>
            <span className={styles.phrase}>They fail quietly — </span>
            <span className={styles.phrase}>a form that’s slightly too fiddly on mobile, </span>
            <span className={styles.phrase}>a menu that buries the one thing people actually came for, </span>
            <span className={styles.phrase}>a page that takes just long enough to lose someone’s patience. </span>
            <span className={styles.phrase}>None of it looks broken. </span>
            <span className={styles.phrase}>All of it costs you. </span>
            <span className={`${styles.phrase} ${styles.highlight}`}>
              We notice the quiet failures, and we fix them properly.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
