'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/Button'
import { HeroCanvas } from './HeroCanvas'
import { ContactModal } from '../ui/ContactModal'
import { HeroVectorArtifact } from './HeroVectorArtifact'
import styles from './HeroSection.module.scss'

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const centerContentRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // 1. Text & action group parallax upward with subtle fade
      gsap.to(centerContentRef.current, {
        y: -60,
        opacity: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 40%',
          scrub: 0.6,
        },
      })

      // 2. Perspective stage wrapper parallaxes smoothly into the viewport
      gsap.to(stageRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 20%',
          scrub: 0.8,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={heroRef} className={styles.heroWrapper} aria-labelledby="hero-headline">
      {/* <HeroCanvas /> */}

      <div className="container">
        <div ref={centerContentRef} className={styles.centerContent}>
          <h1 id="hero-headline" className={styles.headline}>
            We Build Things That Work
          </h1>

          {/*<div className={styles.eyebrow}>
            <span>Digital Product Studio</span>
          </div> */}

          <p className={styles.subhead}>
            Good websites aren’t magic, they’re just done properly, with clear thinking,
            honest design, and solid engineering. That’s what we do for clients who’d
            rather not gamble on their digital presence.
          </p>

          <div className={styles.actionGroup}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setModalOpen(true)}
              aria-label="Start a conversation with 3rd Edge"
            >
              <span>Let’s Talk</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#diagnosis"
              aria-label="Learn how we diagnose quiet failures"
            >
              How We Work
            </Button>
          </div>
        </div>

        <div ref={stageRef} className={styles.perspectiveStageWrapper}>
          <HeroVectorArtifact />
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
