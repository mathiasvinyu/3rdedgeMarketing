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
              <defs>
                <filter id="subtleDraftShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.25" />
                </filter>
                <linearGradient id="planeGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E232B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#13161C" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="planeGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#252C37" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#181C23" stopOpacity="0.98" />
                </linearGradient>
                <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EA5807" />
                  <stop offset="60%" stopColor="#FF7A1A" />
                  <stop offset="100%" stopColor="#FFCC00" />
                </linearGradient>
              </defs>

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
              <text x="48" y="42" fill="#6A727F" fontSize="8" fontFamily="monospace" opacity="0.6">SYS.COORD // 01_DESIGN</text>
              <text x="248" y="42" fill="#6A727F" fontSize="8" fontFamily="monospace" opacity="0.6">SYS.COORD // 02_ENGINEERING</text>
              <circle cx="140" cy="60" r="2" fill="#6A727F" opacity="0.6" />
              <circle cx="240" cy="160" r="2" fill="#EA5807" />
              <circle cx="340" cy="260" r="2" fill="#6A727F" opacity="0.6" />

              {/* Architectural drafting compass arc */}
              <circle cx="60" cy="400" r="280" stroke="#2E3542" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              <circle cx="60" cy="400" r="200" stroke="#242A35" strokeWidth="1" fill="none" />
              <circle cx="60" cy="400" r="120" stroke="#1F242D" strokeWidth="1" fill="none" />

              {/* Geometric Layer 1: Design Isometric Plane */}
              <g filter="url(#subtleDraftShadow)">
                <polygon
                  points="60,110 230,60 230,280 60,330"
                  fill="url(#planeGradA)"
                  stroke="#333A48"
                  strokeWidth="1"
                />
                <line x1="60" y1="110" x2="230" y2="280" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                <line x1="80" y1="140" x2="160" y2="116" stroke="#4A5262" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="80" y1="160" x2="190" y2="128" stroke="#4A5262" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="80" y1="180" x2="140" y2="162" stroke="#4A5262" strokeWidth="1" strokeDasharray="2 2" />
                <text x="76" y="295" fill="#8E96A4" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">INTERFACE DISCIPLINE</text>
              </g>

              {/* Geometric Layer 2: Engineering Isometric Plane */}
              <g filter="url(#subtleDraftShadow)">
                <polygon
                  points="230,60 400,110 400,330 230,280"
                  fill="url(#planeGradB)"
                  stroke="#3E4758"
                  strokeWidth="1"
                />
                <line x1="400" y1="110" x2="230" y2="280" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <rect x="254" y="110" width="120" height="28" rx="4" fill="#14171D" stroke="#2B323F" strokeWidth="0.8" />
                <text x="264" y="127" fill="#F3F4F6" fontSize="8" fontFamily="monospace">Next.js + TypeScript</text>
                <text x="254" y="295" fill="#8E96A4" fontSize="8" fontFamily="monospace" letterSpacing="0.08em">PRODUCTION RIGOR</text>
              </g>

              {/* The "3rd Edge" Convergence Spine */}
              <line x1="230" y1="40" x2="230" y2="360" stroke="url(#edgeGlow)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="230" cy="180" r="4" fill="#EA5807" />
              <circle cx="230" cy="180" r="9" stroke="#EA5807" strokeWidth="1" fill="none" opacity="0.4" />

              {/* Badge for The 3rd Edge */}
              <g transform="translate(160, 360)">
                <rect width="140" height="24" rx="12" fill="#12151B" stroke="#EA5807" strokeWidth="1" />
                <circle cx="16" cy="12" r="3" fill="#EA5807" />
                <text x="28" y="15" fill="#FF9433" fontSize="8.5" fontWeight="700" fontFamily="monospace" letterSpacing="0.08em">THE 3RD EDGE</text>
              </g>
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
