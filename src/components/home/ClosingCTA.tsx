'use client'

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { ContactModal } from '../ui/ContactModal'
import styles from './ClosingCTA.module.scss'

interface ClosingCTAProps {
  id?: string
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ id = 'closing-cta' }) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id={id} className={styles.ctaWrapper} aria-labelledby="closing-cta-title">
      <div className="container">
        <div className={styles.box}>
          <h2 id="closing-cta-title">Let’s talk about what you’re building</h2>
          <p>
            If you’ve got a project in mind — or you’re just not sure where to start —
            we’re happy to have a conversation, no pressure and no commitment.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setModalOpen(true)}
            aria-label="Get in touch with 3rd Edge Creative"
          >
            <span>Get in Touch</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Button>

          <p style={{ marginTop: '1.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Or email us directly at{' '}
            <a href="mailto:hello@3rdedge.co.za" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>
              hello@3rdedge.co.za
            </a>
          </p>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
