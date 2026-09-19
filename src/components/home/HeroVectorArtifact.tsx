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
        strokeDashoffset: [400, 0],
        opacity: [0, 1],
        duration: 900,
      },
      200
    )

    // 3. Left card elements (UX & Tokens & Handoff friction)
    tl.add(
      containerRef.current.querySelectorAll('.card-left-item'),
      {
        opacity: [0, 1],
        duration: 700,
      },
      500
    )

    // 4. Right card elements (Production Engineering & Verified button)
    tl.add(
      containerRef.current.querySelectorAll('.card-right-item'),
      {
        opacity: [0, 1],
        duration: 700,
      },
      700
    )

    // Ambient subtle pulse for verified beacon
    const pulseAnim = animate(containerRef.current.querySelectorAll('.beacon-pulse'), {
      opacity: [0.4, 1],
      duration: 1800,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    // Floating animations for the top cards (01 card and right side card)
    const floatTopLeft = animate(containerRef.current.querySelectorAll('.card-top-left-float'), {
      translateY: [-3, 3],
      duration: 3600,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    const floatTopRight = animate(containerRef.current.querySelectorAll('.card-top-right-float'), {
      translateY: [3, -3],
      duration: 4000,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    // Gentle vertical float / pulse animation for elevated elements
    const floatLeft = animate(containerRef.current.querySelectorAll('.elevated-pulse-left'), {
      translateY: [-2.5, 2.5],
      duration: 2600,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    const floatRight = animate(containerRef.current.querySelectorAll('.elevated-pulse-right'), {
      translateY: [2.5, -2.5],
      duration: 3000,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    return () => {
      tl.revert()
      pulseAnim.revert()
      floatTopLeft.revert()
      floatTopRight.revert()
      floatLeft.revert()
      floatRight.revert()
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
          viewBox="0 0 920 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cardBgLeft" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E232B" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#16191F" stopOpacity="0.99" />
            </linearGradient>
            <linearGradient id="cardBgRight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#242933" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#1A1D25" stopOpacity="0.99" />
            </linearGradient>
            <linearGradient id="orangeGlowLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EA5807" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF8A00" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="verifiedCardGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#222732" />
              <stop offset="100%" stopColor="#181B22" />
            </linearGradient>
            <linearGradient id="verifiedCardBorder" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#41495A" />
              <stop offset="100%" stopColor="#2A303C" />
            </linearGradient>
            <linearGradient id="handoffGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#20252E" />
              <stop offset="100%" stopColor="#171A21" />
            </linearGradient>
            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.3" />
            </filter>
            <filter id="elevatedButtonShadow" x="-15%" y="-15%" width="130%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
            </filter>
            <filter id="elevatedHandoffShadow" x="-15%" y="-15%" width="130%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Grid Background lines */}
          <g className="blueprint-grid" opacity="0.3">
            <line x1="20" y1="35" x2="900" y2="35" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="120" x2="900" y2="120" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="210" x2="900" y2="210" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="20" y1="290" x2="900" y2="290" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="80" y1="15" x2="80" y2="295" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="460" y1="15" x2="460" y2="295" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="840" y1="15" x2="840" y2="295" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="4 4" />

            <circle cx="80" cy="35" r="2.5" fill="#6A727F" />
            <circle cx="460" cy="120" r="2.5" fill="#EA5807" />
            <circle cx="840" cy="210" r="2.5" fill="#6A727F" />
            <text x="90" y="32" fill="#8E96A4" fontSize="8.5" fontFamily="monospace">x:80 y:35</text>
            <text x="470" y="116" fill="#EA5807" fontSize="8.5" fontFamily="monospace">spatial.grid: 8pt</text>
          </g>

          {/* ============================================================= */}
          {/* CARD 1 (LEFT): UX Wireframe & Design Tokens & Handoff Info    */}
          {/* ============================================================= */}
          <g filter="url(#cardShadow)">
            <g transform="translate(40, 42)">
              <g className="card-top-left-float">
                {/* Card Base: exactly 250px tall, ending at y=292 in SVG space */}
                <rect
                  id="card-left-rect"
                  width="400"
                  height="150"
                  rx="12"
                  fill="url(#cardBgLeft)"
                  stroke="#383E4B"
                  strokeWidth="1.2"
                />
                {/* Header Tab */}
                <rect x="0" y="0" width="400" height="32" rx="12" fill="#181B21" />
                <line x1="0" y1="32" x2="400" y2="32" stroke="#2A2F38" strokeWidth="1" />
                <text x="20" y="21" fill="#A8AEB6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
                  01 · UX & DESIGN SYSTEM DISCIPLINE
                </text>

                {/* Wireframe Column Preview */}
                <g className="card-left-item" transform="translate(20, 42)">
                  <rect
                    className="wireframe-stroke"
                    width="360"
                    height="66"
                    rx="6"
                    stroke="#4A5260"
                    strokeWidth="1"
                    strokeDasharray="6 3"
                    fill="rgba(20, 22, 26, 0.5)"
                  />
                  <rect x="14" y="12" width="130" height="10" rx="3" fill="#A8AEB6" opacity="0.3" />
                  <rect x="14" y="27" width="190" height="6" rx="2" fill="#6A727F" opacity="0.3" />
                  <rect x="14" y="37" width="150" height="6" rx="2" fill="#6A727F" opacity="0.3" />
                  <rect x="14" y="47" width="56" height="12" rx="3" stroke="#EA5807" strokeWidth="1" fill="rgba(234, 88, 7, 0.15)" />

                  <line x1="250" y1="12" x2="340" y2="12" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="250" y1="22" x2="340" y2="22" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="250" y1="32" x2="310" y2="32" stroke="#6A727F" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Design Tokens: 60 / 30 / 10 swatches */}
                <g className="card-left-item" transform="translate(20, 116)">
                  {/* Orange */}
                  <g transform="translate(0, 0)">
                    <rect width="114" height="30" rx="5" fill="#15171C" stroke="#EA5807" strokeWidth="1" />
                    <rect x="8" y="6" width="18" height="18" rx="4" fill="#EA5807" />
                    <text x="32" y="17" fill="#F3F4F6" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">action.orange</text>
                    <text x="32" y="25" fill="#A8AEB6" fontSize="7" fontFamily="monospace">#EA5807 · 10%</text>
                  </g>

                  {/* Charcoal */}
                  <g transform="translate(123, 0)">
                    <rect width="114" height="30" rx="5" fill="#15171C" stroke="#2E343E" strokeWidth="1" />
                    <rect x="8" y="6" width="18" height="18" rx="4" fill="#14161A" stroke="#4A5158" strokeWidth="1" />
                    <text x="32" y="17" fill="#F3F4F6" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">charcoal.base</text>
                    <text x="32" y="25" fill="#A8AEB6" fontSize="7" fontFamily="monospace">#14161A · 60%</text>
                  </g>

                  {/* Slate */}
                  <g transform="translate(246, 0)">
                    <rect width="114" height="30" rx="5" fill="#15171C" stroke="#2E343E" strokeWidth="1" />
                    <rect x="8" y="6" width="18" height="18" rx="4" fill="#6A727F" />
                    <text x="32" y="17" fill="#F3F4F6" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">slate.system</text>
                    <text x="32" y="25" fill="#A8AEB6" fontSize="7" fontFamily="monospace">#6A727F · 30%</text>
                  </g>
                </g>

                {/* Typography badges */}
                <g className="card-left-item" transform="translate(20, 154)">
                  <rect width="174" height="22" rx="4" fill="#15171C" stroke="#2A2F38" strokeWidth="1" />
                  <text x="12" y="15" fill="#FFCC00" fontSize="8" fontFamily="monospace">H1/H2: Unbounded</text>

                  <rect x="186" y="0" width="174" height="22" rx="4" fill="#15171C" stroke="#2A2F38" strokeWidth="1" />
                  <text x="198" y="15" fill="#A8AEB6" fontSize="8" fontFamily="monospace">Body: Montserrat 8pt</text>
                </g>

                {/* ELEVATED HANDOFF FRICTION ELEMENT (prominently elevated & tactile) */}
                <g className="card-left-item" transform="translate(20, 186)">
                  <g className="elevated-pulse-left" filter="url(#elevatedHandoffShadow)">
                    <rect
                      width="360"
                      height="44"
                      rx="8"
                      fill="url(#handoffGrad)"
                      stroke="#383F4E"
                      strokeWidth="1.1"
                    />
                    <line x1="8" y1="1" x2="352" y2="1" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                    {/* Status Pill on left */}
                    <rect x="12" y="11" width="94" height="22" rx="11" fill="rgba(234, 88, 7, 0.08)" stroke="rgba(234, 88, 7, 0.35)" strokeWidth="0.8" />
                    <circle className="beacon-pulse" cx="24" cy="22" r="3.5" fill="#EA5807" />
                    <text x="33" y="25" fill="#FF9433" fontSize="8" fontWeight="700" fontFamily="sans-serif">ZERO FRICTION</text>

                    {/* Narrative content */}
                    <text x="116" y="22" fill="#F3F4F6" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
                      Direct Concept-to-Code Delivery
                    </text>
                    <text x="116" y="33" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
                      No agency translation loss · 100% fidelity
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>

          {/* ============================================================= */}
          {/* CARD 2 (RIGHT): Production Build & Elevated Verified Button   */}
          {/* ============================================================= */}
          <g filter="url(#cardShadow)">
            <g transform="translate(480, 42)">
              <g className="card-top-right-float">
                {/* Card Base: exactly 250px tall, ending at y=292 in SVG space */}
                <rect
                  id="card-right-rect"
                  width="400"
                  height="150"
                  rx="12"
                  fill="url(#cardBgRight)"
                  stroke="#3E4554"
                  strokeWidth="1.2"
                />
                {/* Top Accent Orange Rail */}
                <path d="M0 12 Q0 0 12 0 L388 0 Q400 0 400 12 L400 14 L0 14 Z" fill="url(#orangeGlowLine)" />

                {/* Header Tab */}
                <text x="20" y="32" fill="#F3F4F6" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                  Direct Delivery Architecture
                </text>
                <text x="20" y="46" fill="#A8AEB6" fontSize="9" fontFamily="sans-serif">
                  Full-stack Next.js & TypeScript · Built for institutional trust
                </text>

                {/* Status Row */}
                <g className="card-right-item" transform="translate(20, 56)">
                  <rect width="130" height="20" rx="10" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="0.8" />
                  <circle className="beacon-pulse" cx="13" cy="10" r="3" fill="#10B981" />
                  <text x="22" y="14" fill="#10B981" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">
                    Zero Quiet Failures
                  </text>

                  <rect x="138" y="0" width="130" height="20" rx="10" fill="rgba(234, 88, 7, 0.12)" stroke="#EA5807" strokeWidth="0.8" />
                  <text x="148" y="14" fill="#EA5807" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">
                    Senior Engineers Only
                  </text>
                </g>

                {/* Performance Metrics Table */}
                <g className="card-right-item" transform="translate(20, 84)">
                  <rect width="360" height="44" rx="6" fill="#16181F" stroke="#2E343F" strokeWidth="1" />

                  <g transform="translate(20, 16)">
                    <text x="0" y="0" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">CORE WEB VITALS</text>
                    <text x="0" y="16" fill="#F3F4F6" fontSize="12" fontWeight="700" fontFamily="sans-serif">LCP: 0.78s</text>
                  </g>

                  <line x1="135" y1="6" x2="135" y2="38" stroke="#2E343F" strokeWidth="1" />

                  <g transform="translate(155, 16)">
                    <text x="0" y="0" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">LAYOUT SHIFT</text>
                    <text x="0" y="16" fill="#10B981" fontSize="12" fontWeight="700" fontFamily="sans-serif">CLS: 0.00</text>
                  </g>

                  <line x1="250" y1="6" x2="250" y2="38" stroke="#2E343F" strokeWidth="1" />

                  <g transform="translate(270, 16)">
                    <text x="0" y="0" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">AUDIT RATING</text>
                    <text x="0" y="16" fill="#EA5807" fontSize="12" fontWeight="700" fontFamily="sans-serif">100 / 100</text>
                  </g>
                </g>

                {/* Architecture Node */}
                <g className="card-right-item" transform="translate(20, 136)">
                  <rect width="360" height="24" rx="5" fill="#181B22" stroke="#2A2F38" strokeWidth="1" />
                  <circle cx="14" cy="12" r="3" fill="#10B981" />
                  <text x="26" y="16" fill="#F3F4F6" fontSize="8" fontFamily="monospace">
                    Next.js 16 + React 19 + Strict WCAG 2.1 AA Keyboard & Screen Reader
                  </text>
                </g>

                {/* ELEVATED VERIFIED TELEMETRY (toned-down technical telemetry card — not competing with real buttons) */}
                <g className="card-right-item" transform="translate(20, 172)">
                  <g className="elevated-pulse-right" filter="url(#elevatedButtonShadow)">
                    <rect
                      width="360"
                      height="46"
                      rx="8"
                      fill="url(#verifiedCardGrad)"
                      stroke="url(#verifiedCardBorder)"
                      strokeWidth="1.2"
                    />
                    {/* Top Highlight Bevel */}
                    <path d="M 8 2 L 352 2" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeLinecap="round" />

                    {/* Checkmark circle badge */}
                    <circle cx="28" cy="23" r="10" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="0.8" />
                    <path d="M24 23 l3 3 l6 -6" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                    <text
                      x="48"
                      y="27"
                      fill="#E2E8F0"
                      fontSize="10.5"
                      fontWeight="600"
                      fontFamily="sans-serif"
                      letterSpacing="0.04em"
                    >
                      VERIFIED DEPLOYMENT ARCHITECTURE
                    </text>

                    {/* Version badge */}
                    <rect x="306" y="12" width="42" height="22" rx="4" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.8" />
                    <text x="327" y="26" fill="#10B981" fontSize="8" fontWeight="700" fontFamily="monospace" textAnchor="middle">
                      PROD
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
