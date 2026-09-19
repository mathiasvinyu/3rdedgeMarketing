'use client'

import React, { useEffect, useRef } from 'react'
import { animate, createTimeline } from 'animejs'
import styles from './HeroVectorArtifact.module.scss'

export const HeroVectorArtifact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Respect user motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
      },
    })

    timelineRef.current = tl

    // 1. Grid lines draw in
    tl.add(
      containerRef.current.querySelectorAll('.blueprint-grid'),
      {
        opacity: [0, 0.45],
        duration: 800,
      },
      0
    )

    // 2. Wireframe strokes
    tl.add(
      containerRef.current.querySelectorAll('.wireframe-stroke'),
      {
        strokeDashoffset: [500, 0],
        opacity: [0, 1],
        duration: 900,
      },
      200
    )

    // 3. Left card elements (UX & Tokens)
    tl.add(
      containerRef.current.querySelectorAll('.card-left-item'),
      {
        translateY: [12, 0],
        opacity: [0, 1],
        duration: 700,
      },
      500
    )

    // 4. Right card elements (Production Engineering)
    tl.add(
      containerRef.current.querySelectorAll('.card-right-item'),
      {
        translateY: [12, 0],
        opacity: [0, 1],
        duration: 700,
      },
      700
    )

    // Ambient subtle pulse for verified status
    const pulseAnim = animate(containerRef.current.querySelectorAll('.beacon-pulse'), {
      opacity: [0.4, 1],
      duration: 1800,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    return () => {
      tl.revert()
      pulseAnim.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.perspectiveBoard} aria-label="Perspective Architecture Stage">
      <div className={styles.windowBar}>
        <div className={styles.windowControls}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.windowTitle}>Production Blueprint · 3rd Edge System</span>
        </div>
        <div className={styles.windowMeta}>
          <span className={styles.liveBadge}>
            <span className={styles.beacon} />
            <span>Architecture Verified</span>
          </span>
          <span>Core Web Vitals: 100/100</span>
        </div>
      </div>

      <div className={styles.svgViewport}>
        <svg
          viewBox="0 0 920 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cardBgLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E232B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#171A20" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="cardBgRight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#252A34" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#1B1E26" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="orangeGlowLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EA5807" />
              <stop offset="100%" stopColor="#FFCC00" />
            </linearGradient>
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Grid Background lines */}
          <g className="blueprint-grid" opacity="0.35">
            <line x1="20" y1="40" x2="900" y2="40" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="140" x2="900" y2="140" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="260" x2="900" y2="260" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="380" x2="900" y2="380" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="80" y1="20" x2="80" y2="440" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="460" y1="20" x2="460" y2="440" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="840" y1="20" x2="840" y2="440" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            
            <circle cx="80" cy="40" r="2.5" fill="#6A727F" />
            <circle cx="460" cy="140" r="2.5" fill="#EA5807" />
            <circle cx="840" cy="260" r="2.5" fill="#6A727F" />
            <text x="90" y="36" fill="#8E96A4" fontSize="9" fontFamily="monospace">x:80 y:40</text>
            <text x="470" y="136" fill="#EA5807" fontSize="9" fontFamily="monospace">spatial.grid: 8pt</text>
          </g>

          {/* ============================================================= */}
          {/* CARD 1 (LEFT): UX Wireframe & Design System Tokens            */}
          {/* ============================================================= */}
          <g filter="url(#cardShadow)">
            <g transform="translate(40, 60)">
              {/* Card Base */}
              <rect
                width="400"
                height="370"
                rx="12"
                fill="url(#cardBgLeft)"
                stroke="#353B47"
                strokeWidth="1.2"
              />
              {/* Header Tab */}
              <rect x="0" y="0" width="400" height="38" rx="12" fill="#181B21" />
              <line x1="0" y1="38" x2="400" y2="38" stroke="#2E343E" strokeWidth="1" />
              <text x="24" y="24" fill="#A8AEB6" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                01 · UX & DESIGN SYSTEM DISCIPLINE
              </text>

              {/* Wireframe Column Preview */}
              <g className="card-left-item" transform="translate(24, 56)">
                <rect
                  className="wireframe-stroke"
                  width="352"
                  height="120"
                  rx="8"
                  stroke="#4A5260"
                  strokeWidth="1"
                  strokeDasharray="6 3"
                  fill="rgba(20, 22, 26, 0.5)"
                />
                <rect x="18" y="18" width="160" height="14" rx="3" fill="#A8AEB6" opacity="0.3" />
                <rect x="18" y="42" width="220" height="8" rx="2" fill="#6A727F" opacity="0.3" />
                <rect x="18" y="58" width="180" height="8" rx="2" fill="#6A727F" opacity="0.3" />
                <rect x="18" y="80" width="90" height="22" rx="4" stroke="#EA5807" strokeWidth="1" fill="rgba(234, 88, 7, 0.15)" />
                <text x="63" y="95" fill="#EA5807" fontSize="9" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">Action</text>

                <line x1="280" y1="18" x2="334" y2="18" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="280" y1="32" x2="334" y2="32" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="280" y1="46" x2="320" y2="46" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Design Tokens: 60 / 30 / 10 swatches */}
              <g className="card-left-item" transform="translate(24, 196)">
                <text x="0" y="12" fill="#F3F4F6" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">
                  Color Discipline (60 / 30 / 10 Rule)
                </text>

                {/* Orange */}
                <g transform="translate(0, 24)">
                  <rect width="110" height="34" rx="6" fill="#15171C" stroke="#EA5807" strokeWidth="1" />
                  <rect x="8" y="8" width="18" height="18" rx="4" fill="#EA5807" />
                  <text x="32" y="19" fill="#F3F4F6" fontSize="9" fontWeight="600" fontFamily="sans-serif">action.orange</text>
                  <text x="32" y="29" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#EA5807 · 10%</text>
                </g>

                {/* Charcoal */}
                <g transform="translate(121, 24)">
                  <rect width="110" height="34" rx="6" fill="#15171C" stroke="#2E343E" strokeWidth="1" />
                  <rect x="8" y="8" width="18" height="18" rx="4" fill="#14161A" stroke="#4A5158" strokeWidth="1" />
                  <text x="32" y="19" fill="#F3F4F6" fontSize="9" fontWeight="600" fontFamily="sans-serif">charcoal.base</text>
                  <text x="32" y="29" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#14161A · 60%</text>
                </g>

                {/* Slate */}
                <g transform="translate(242, 24)">
                  <rect width="110" height="34" rx="6" fill="#15171C" stroke="#2E343E" strokeWidth="1" />
                  <rect x="8" y="8" width="18" height="18" rx="4" fill="#6A727F" />
                  <text x="32" y="19" fill="#F3F4F6" fontSize="9" fontWeight="600" fontFamily="sans-serif">slate.system</text>
                  <text x="32" y="29" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#6A727F · 30%</text>
                </g>
              </g>

              {/* Typography tokens */}
              <g className="card-left-item" transform="translate(24, 280)">
                <rect width="170" height="28" rx="5" fill="#15171C" stroke="#2A2F38" strokeWidth="1" />
                <text x="12" y="18" fill="#FFCC00" fontSize="9" fontFamily="monospace">H1/H2: Unbounded</text>

                <rect x="182" y="0" width="170" height="28" rx="5" fill="#15171C" stroke="#2A2F38" strokeWidth="1" />
                <text x="194" y="18" fill="#A8AEB6" fontSize="9" fontFamily="monospace">Body: Montserrat 8pt</text>
              </g>

              <g className="card-left-item" transform="translate(24, 324)">
                <text x="0" y="12" fill="#8E96A4" fontSize="9.5" fontFamily="monospace">
                  ✓ Verified: Zero handoff friction between concept and code
                </text>
              </g>
            </g>
          </g>

          {/* ============================================================= */}
          {/* CARD 2 (RIGHT): Production Build & Resilient Architecture      */}
          {/* ============================================================= */}
          <g filter="url(#cardShadow)">
            <g transform="translate(480, 60)">
              {/* Card Base */}
              <rect
                width="400"
                height="370"
                rx="12"
                fill="url(#cardBgRight)"
                stroke="#3D4452"
                strokeWidth="1.2"
              />
              {/* Top Accent Orange Rail */}
              <path d="M0 12 Q0 0 12 0 L388 0 Q400 0 400 12 L400 16 L0 16 Z" fill="url(#orangeGlowLine)" />

              {/* Header Tab */}
              <text x="24" y="44" fill="#F3F4F6" fontSize="14" fontWeight="700" fontFamily="sans-serif">
                Direct Delivery Architecture
              </text>
              <text x="24" y="62" fill="#A8AEB6" fontSize="10" fontFamily="sans-serif">
                Full-stack Next.js & TypeScript · Built for institutional trust
              </text>

              {/* Status Row */}
              <g className="card-right-item" transform="translate(24, 80)">
                <rect width="136" height="24" rx="12" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="0.8" />
                <circle className="beacon-pulse" cx="16" cy="12" r="4" fill="#10B981" />
                <text x="28" y="16" fill="#10B981" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
                  Zero Quiet Failures
                </text>

                <rect x="146" y="0" width="130" height="24" rx="12" fill="rgba(234, 88, 7, 0.12)" stroke="#EA5807" strokeWidth="0.8" />
                <text x="156" y="16" fill="#EA5807" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
                  Senior Engineers Only
                </text>
              </g>

              {/* Performance Metrics Table */}
              <g className="card-right-item" transform="translate(24, 120)">
                <rect width="352" height="68" rx="8" fill="#16181F" stroke="#2E343F" strokeWidth="1" />
                
                <g transform="translate(20, 24)">
                  <text x="0" y="0" fill="#8E96A4" fontSize="9" fontFamily="monospace">CORE WEB VITALS</text>
                  <text x="0" y="24" fill="#F3F4F6" fontSize="16" fontWeight="700" fontFamily="sans-serif">LCP: 0.78s</text>
                </g>

                <line x1="135" y1="12" x2="135" y2="56" stroke="#2E343F" strokeWidth="1" />

                <g transform="translate(155, 24)">
                  <text x="0" y="0" fill="#8E96A4" fontSize="9" fontFamily="monospace">LAYOUT SHIFT</text>
                  <text x="0" y="24" fill="#10B981" fontSize="16" fontWeight="700" fontFamily="sans-serif">CLS: 0.00</text>
                </g>

                <line x1="250" y1="12" x2="250" y2="56" stroke="#2E343F" strokeWidth="1" />

                <g transform="translate(270, 24)">
                  <text x="0" y="0" fill="#8E96A4" fontSize="9" fontFamily="monospace">AUDIT RATING</text>
                  <text x="0" y="24" fill="#EA5807" fontSize="16" fontWeight="700" fontFamily="sans-serif">100 / 100</text>
                </g>
              </g>

              {/* Architecture Nodes */}
              <g className="card-right-item" transform="translate(24, 204)">
                <rect width="352" height="34" rx="6" fill="#181B22" stroke="#2A2F38" strokeWidth="1" />
                <circle cx="16" cy="17" r="4" fill="#10B981" />
                <text x="30" y="21" fill="#F3F4F6" fontSize="9.5" fontFamily="monospace">
                  Next.js App Router + React 19 + SCSS Design System
                </text>
              </g>

              <g className="card-right-item" transform="translate(24, 248)">
                <rect width="352" height="34" rx="6" fill="#181B22" stroke="#2A2F38" strokeWidth="1" />
                <path d="M14 17h6m-3-3v6" stroke="#FFCC00" strokeWidth="1.5" strokeLinecap="round" />
                <text x="30" y="21" fill="#F3F4F6" fontSize="9.5" fontFamily="monospace">
                  Accessibility: Strict WCAG 2.1 AA Keyboard & Screen Reader
                </text>
              </g>

              {/* Verified Production Button preview */}
              <g className="card-right-item" transform="translate(24, 300)">
                <rect
                  width="352"
                  height="44"
                  rx="8"
                  fill="url(#orangeGlowLine)"
                  stroke="#EA5807"
                  strokeWidth="1"
                />
                <text
                  x="176"
                  y="27"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                >
                  ✓ VERIFIED DEPLOYMENT ARCHITECTURE
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
