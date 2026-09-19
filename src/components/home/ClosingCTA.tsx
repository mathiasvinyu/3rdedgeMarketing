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
          {/* Decorative architectural craft visual column — visible on larger screens */}
          <div className={styles.visualSide} aria-hidden="true">
            <svg
              className={styles.arcGraphic}
              viewBox="0 0 460 420"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Blueprint Foundation Base */}
              <rect width="100%" height="100%" fill="#0D0F13" />

              {/* Technical drafting grid */}
              <g opacity="0.25">
                <line x1="40" y1="0" x2="40" y2="420" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="140" y1="0" x2="140" y2="420" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="240" y1="0" x2="240" y2="420" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="340" y1="0" x2="340" y2="420" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="440" y1="0" x2="440" y2="420" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />

                <line x1="0" y1="60" x2="460" y2="60" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="0" y1="160" x2="460" y2="160" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="0" y1="260" x2="460" y2="260" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="0" y1="360" x2="460" y2="360" stroke="#6A727F" strokeWidth="0.75" strokeDasharray="3 3" />
              </g>

              {/* Precision Coordinate Markers */}
              {/* <text x="48" y="42" fill="#6A727F" fontSize="8" fontFamily="monospace" opacity="0.6">SYS.COORD // 01_DESIGN</text>
              <text x="248" y="42" fill="#6A727F" fontSize="8" fontFamily="monospace" opacity="0.6">SYS.COORD // 02_ENGINEERING</text> */}
              <circle cx="140" cy="60" r="2" fill="#6A727F" opacity="0.6" />
              <circle cx="240" cy="160" r="2" fill="#EA5807" />
              <circle cx="340" cy="260" r="2" fill="#6A727F" opacity="0.6" />

              {/* Architectural drafting compass arc */}
              <circle cx="60" cy="400" r="280" stroke="#2E3542" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              <circle cx="60" cy="400" r="200" stroke="#242A35" strokeWidth="1" fill="none" />
              <circle cx="60" cy="400" r="120" stroke="#1F242D" strokeWidth="1" fill="none" />

              {/* Badge for The 3rd Edge 
              <g transform="translate(160, 360)">
                <rect width="140" height="24" rx="12" fill="#12151B" stroke="#EA5807" strokeWidth="1" />
                <circle cx="16" cy="12" r="3" fill="#EA5807" />
                <text x="28" y="15" fill="#FF9433" fontSize="8.5" fontWeight="700" fontFamily="monospace" letterSpacing="0.08em">THE 3RD EDGE</text>
              </g> */}
            </svg>
            <div className={styles.visualOverlay} />
          </div>

          {/* Content column */}
          <div className={styles.contentSide}>
            <h2 id="closing-cta-title" className={styles.title}>
              Let’s talk about what you’re building
            </h2>
            <p className={styles.desc}>
              If you’ve got a project in mind, or you’re just not sure where to start,
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

            <p className={styles.emailNote}>
              Or email us directly at{' '}
              <a href="mailto:hello@3rdedge.co.za">
                hello@3rdedge.co.za
              </a>
            </p>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
