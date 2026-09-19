'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { HeroCanvas } from './HeroCanvas'
import { ContactModal } from '../ui/ContactModal'
import { HeroVectorArtifact } from './HeroVectorArtifact'
import styles from './HeroSection.module.scss'

export const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="hero" className={styles.heroWrapper} aria-labelledby="hero-headline">
      {/* <HeroCanvas /> */}

      <div className="container">
        <div className={styles.centerContent}>
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

        <div className={styles.perspectiveStageWrapper}>
          <HeroVectorArtifact />
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
