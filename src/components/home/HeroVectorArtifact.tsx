'use client'

import React, { useEffect, useRef, useState } from 'react'
import { animate, createTimeline } from 'animejs'
import styles from './HeroVectorArtifact.module.scss'

type LayerMode = 'all' | 'ux' | 'tokens' | 'engine' | 'prod'

export const HeroVectorArtifact: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerMode>('all')
  const [toggleState, setToggleState] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Respect user motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Anime.js v4 timeline orchestration
    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
      },
    })

    timelineRef.current = tl

    // 1. Draw structural blueprint grid lines
    tl.add(
      containerRef.current.querySelectorAll('.blueprint-grid'),
      {
        opacity: [0, 0.4],
        duration: 800,
      },
      0
    )

    // 2. Wireframe lines stroke draw-in
    tl.add(
      containerRef.current.querySelectorAll('.wireframe-stroke'),
      {
        strokeDashoffset: [400, 0],
        opacity: [0, 1],
        duration: 1000,
      },
      200
    )

    // 3. Design tokens pop in with staggered spring
    tl.add(
      containerRef.current.querySelectorAll('.token-badge'),
      {
        scale: [0.8, 1],
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 700,
      },
      600
    )

    // 4. Engineering nodes slide in
    tl.add(
      containerRef.current.querySelectorAll('.engine-node'),
      {
        translateX: [-10, 0],
        opacity: [0, 1],
        duration: 800,
      },
      800
    )

    // 5. Production interface card materializes
    tl.add(
      containerRef.current.querySelector('.production-card'),
      {
        translateY: [16, 0],
        opacity: [0, 1],
        duration: 900,
      },
      1000
    )

    // Subtle floating loop for production card
    const floatAnim = animate(containerRef.current.querySelector('.production-card'), {
      translateY: [-3, 3],
      duration: 3500,
      ease: 'inOutQuad',
      alternate: true,
      loop: true,
    })

    return () => {
      tl.revert()
      floatAnim.revert()
    }
  }, [])

  // When layer mode changes, spotlight the selected elements
  const isLayerActive = (mode: LayerMode) => {
    return activeLayer === 'all' || activeLayer === mode
  }

  return (
    <div ref={containerRef} className={styles.artifactStage} aria-label="Interactive UX and UI Architecture Stage">
      <div className={styles.stageHeader}>
        <div className={styles.windowControls}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.title}>System Architecture · Concept to Code</span>
        </div>

        <div className={styles.layerPills} role="tablist" aria-label="Blueprint Layers">
          <button
            type="button"
            role="tab"
            aria-selected={activeLayer === 'all'}
            className={`${styles.layerBtn} ${activeLayer === 'all' ? styles.active : ''}`}
            onClick={() => setActiveLayer('all')}
          >
            All
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeLayer === 'ux'}
            className={`${styles.layerBtn} ${activeLayer === 'ux' ? styles.active : ''}`}
            onClick={() => setActiveLayer('ux')}
          >
            01 UX Frame
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeLayer === 'tokens'}
            className={`${styles.layerBtn} ${activeLayer === 'tokens' ? styles.active : ''}`}
            onClick={() => setActiveLayer('tokens')}
          >
            02 Tokens
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeLayer === 'engine'}
            className={`${styles.layerBtn} ${activeLayer === 'engine' ? styles.active : ''}`}
            onClick={() => setActiveLayer('engine')}
          >
            03 Engine
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeLayer === 'prod'}
            className={`${styles.layerBtn} ${activeLayer === 'prod' ? styles.active : ''}`}
            onClick={() => setActiveLayer('prod')}
          >
            04 Live UI
          </button>
        </div>
      </div>

      <div className={styles.svgViewport}>
        <svg
          viewBox="0 0 540 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orangeGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EA5807" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFCC00" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22262E" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#14161A" stopOpacity="0.98" />
            </linearGradient>
            <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* ============================================================= */}
          {/* LAYER 0: Blueprint Grid & Coordinates                         */}
          {/* ============================================================= */}
          <g className="blueprint-grid" opacity={isLayerActive('ux') ? 0.45 : 0.15} style={{ transition: 'opacity 0.4s ease' }}>
            <line x1="20" y1="60" x2="520" y2="60" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="20" y1="180" x2="520" y2="180" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="20" y1="310" x2="520" y2="310" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="60" y1="20" x2="60" y2="360" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="270" y1="20" x2="270" y2="360" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="480" y1="20" x2="480" y2="360" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />

            {/* Coordinate Crosshairs */}
            <circle cx="60" cy="60" r="2.5" fill="#6A727F" />
            <circle cx="270" cy="180" r="2.5" fill="#EA5807" />
            <circle cx="480" cy="310" r="2.5" fill="#6A727F" />
            <text x="70" y="55" fill="#8E96A4" fontSize="9" fontFamily="monospace">x:60 y:60</text>
            <text x="280" y="175" fill="#EA5807" fontSize="9" fontFamily="monospace">origin: 8pt spatial grid</text>
          </g>

          {/* ============================================================= */}
          {/* LAYER 01: UX Wireframe & Information Hierarchy               */}
          {/* ============================================================= */}
          <g
            className="ux-layer"
            opacity={isLayerActive('ux') ? 1 : 0.08}
            style={{ transition: 'opacity 0.4s ease' }}
          >
            {/* Viewport Frame outline */}
            <rect
              className="wireframe-stroke"
              x="30"
              y="30"
              width="480"
              height="320"
              rx="10"
              stroke="#A8AEB6"
              strokeWidth="1.2"
              strokeDasharray="400"
              fill="none"
            />

            {/* Top wireframe header bar */}
            <line x1="30" y1="70" x2="510" y2="70" stroke="#A8AEB6" strokeWidth="1" strokeDasharray="4 2" />
            <rect x="50" y="44" width="70" height="12" rx="3" fill="#6A727F" opacity="0.5" />
            <circle cx="470" cy="50" r="4" fill="#6A727F" opacity="0.6" />
            <circle cx="485" cy="50" r="4" fill="#6A727F" opacity="0.6" />

            {/* Wireframe Navigation & Hero Section Blueprint */}
            <rect
              className="wireframe-stroke"
              x="50"
              y="90"
              width="180"
              height="115"
              rx="6"
              stroke="#6A727F"
              strokeWidth="1"
              strokeDasharray="8 4"
              fill="rgba(26, 29, 35, 0.4)"
            />
            <rect x="65" y="105" width="130" height="14" rx="3" fill="#A8AEB6" opacity="0.35" />
            <rect x="65" y="128" width="90" height="8" rx="2" fill="#6A727F" opacity="0.35" />
            <rect x="65" y="143" width="110" height="8" rx="2" fill="#6A727F" opacity="0.35" />
            <rect x="65" y="165" width="70" height="20" rx="4" stroke="#EA5807" strokeWidth="1" fill="rgba(234, 88, 7, 0.15)" />

            {/* Wireframe Dimension Callout */}
            <line x1="235" y1="90" x2="245" y2="90" stroke="#A8AEB6" strokeWidth="0.8" />
            <line x1="240" y1="90" x2="240" y2="205" stroke="#A8AEB6" strokeWidth="0.8" />
            <line x1="235" y1="205" x2="245" y2="205" stroke="#A8AEB6" strokeWidth="0.8" />
            <text x="248" y="152" fill="#A8AEB6" fontSize="8" fontFamily="monospace">115px</text>

            {/* Column 2 Wireframe guides */}
            <rect
              x="260"
              y="90"
              width="230"
              height="240"
              rx="6"
              stroke="#4A5158"
              strokeWidth="0.8"
              strokeDasharray="4 4"
              fill="none"
            />
            <text x="270" y="105" fill="#6A727F" fontSize="8" fontFamily="monospace">container: 1200px max</text>
          </g>

          {/* ============================================================= */}
          {/* LAYER 02: Design Tokens & System Discipline                   */}
          {/* ============================================================= */}
          <g
            className="tokens-layer"
            opacity={isLayerActive('tokens') ? 1 : 0.08}
            style={{ transition: 'opacity 0.4s ease' }}
          >
            {/* Swatch 1: Orange Action */}
            <g className="token-badge" transform="translate(50, 220)">
              <rect width="145" height="36" rx="6" fill="#1A1D23" stroke="#EA5807" strokeWidth="1.2" />
              <rect x="10" y="9" width="18" height="18" rx="4" fill="#EA5807" />
              <text x="36" y="20" fill="#F3F4F6" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">action.orange</text>
              <text x="36" y="31" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#EA5807 · 10% weight</text>
            </g>

            {/* Swatch 2: Charcoal Base */}
            <g className="token-badge" transform="translate(50, 266)">
              <rect width="145" height="36" rx="6" fill="#1A1D23" stroke="#2A2F37" strokeWidth="1" />
              <rect x="10" y="9" width="18" height="18" rx="4" fill="#14161A" stroke="#4A5158" strokeWidth="1" />
              <text x="36" y="20" fill="#F3F4F6" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">charcoal.base</text>
              <text x="36" y="31" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#14161A · 60% base</text>
            </g>

            {/* Swatch 3: Slate Structure */}
            <g className="token-badge" transform="translate(50, 312)">
              <rect width="145" height="36" rx="6" fill="#1A1D23" stroke="#2A2F37" strokeWidth="1" />
              <rect x="10" y="9" width="18" height="18" rx="4" fill="#6A727F" />
              <text x="36" y="20" fill="#F3F4F6" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">slate.system</text>
              <text x="36" y="31" fill="#A8AEB6" fontSize="8" fontFamily="monospace">#6A727F · 30% balance</text>
            </g>

            {/* Typography Token Badges */}
            <g className="token-badge" transform="translate(260, 220)">
              <rect width="130" height="28" rx="5" fill="#14161A" stroke="#2A2F37" strokeWidth="1" />
              <text x="12" y="18" fill="#FFCC00" fontSize="8.5" fontFamily="monospace">font.display: Unbounded</text>
            </g>
            <g className="token-badge" transform="translate(260, 255)">
              <rect width="130" height="28" rx="5" fill="#14161A" stroke="#2A2F37" strokeWidth="1" />
              <text x="12" y="18" fill="#A8AEB6" fontSize="8.5" fontFamily="monospace">font.body: Montserrat</text>
            </g>
          </g>

          {/* ============================================================= */}
          {/* LAYER 03: Engineering & Real-World Resilience                */}
          {/* ============================================================= */}
          <g
            className="engine-layer"
            opacity={isLayerActive('engine') ? 1 : 0.08}
            style={{ transition: 'opacity 0.4s ease' }}
          >
            {/* Tech Node: Next.js + React 19 */}
            <g className="engine-node" transform="translate(290, 45)">
              <rect width="195" height="28" rx="5" fill="#14161A" stroke="#2A2F37" strokeWidth="1" />
              <circle cx="14" cy="14" r="4" fill="#10B981" />
              <text x="26" y="18" fill="#F3F4F6" fontSize="9" fontFamily="monospace">stack: Next.js 16 + React 19</text>
            </g>

            {/* Tech Node: A11y Tree */}
            <g className="engine-node" transform="translate(290, 80)">
              <rect width="195" height="28" rx="5" fill="#14161A" stroke="#2A2F37" strokeWidth="1" />
              <path d="M12 14h6m-3-3v6" stroke="#FFCC00" strokeWidth="1.5" strokeLinecap="round" />
              <text x="26" y="18" fill="#F3F4F6" fontSize="9" fontFamily="monospace">audit: WCAG 2.1 AA (100%)</text>
            </g>

            {/* Tech Node: Real-World Resilience */}
            <g className="engine-node" transform="translate(290, 115)">
              <rect width="195" height="28" rx="5" fill="#14161A" stroke="#EA5807" strokeWidth="1" />
              <circle cx="14" cy="14" r="4" fill="#EA5807" />
              <text x="26" y="18" fill="#F3F4F6" fontSize="9" fontFamily="monospace">resilience: Zero Handoffs</text>
            </g>
          </g>

          {/* ============================================================= */}
          {/* LAYER 04: The Assembled Production Component                  */}
          {/* ============================================================= */}
          <g
            className="production-card"
            filter="url(#shadowFilter)"
            opacity={isLayerActive('prod') ? 1 : 0.08}
            style={{ transition: 'opacity 0.4s ease' }}
          >
            <g transform="translate(230, 140)">
              {/* Card Base */}
              <rect
                width="280"
                height="205"
                rx="10"
                fill="url(#cardGrad)"
                stroke="#3A404D"
                strokeWidth="1.2"
              />

              {/* Accent Orange top rail */}
              <path d="M0 10 Q0 0 10 0 L270 0 Q280 0 280 10 L280 14 L0 14 Z" fill="#EA5807" />

              {/* Card Header */}
              <text x="18" y="38" fill="#F3F4F6" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                Direct Delivery Architecture
              </text>
              <text x="18" y="54" fill="#A8AEB6" fontSize="9.5" fontFamily="sans-serif">
                No handoff friction · Concept to live code
              </text>

              {/* Status Pill */}
              <rect x="18" y="68" width="118" height="20" rx="10" fill="rgba(16, 185, 129, 0.12)" stroke="#10B981" strokeWidth="0.8" />
              <circle cx="28" cy="78" r="3.5" fill="#10B981" />
              <text x="36" y="82" fill="#10B981" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">
                Zero Quiet Failures
              </text>

              {/* Performance Indicator Bar */}
              <rect x="18" y="100" width="244" height="26" rx="5" fill="#1A1D23" stroke="#2A2F37" strokeWidth="0.8" />
              <text x="28" y="116" fill="#8E96A4" fontSize="8.5" fontFamily="monospace">CLS: 0.00</text>
              <text x="105" y="116" fill="#8E96A4" fontSize="8.5" fontFamily="monospace">LCP: 0.8s</text>
              <text x="185" y="116" fill="#EA5807" fontSize="8.5" fontFamily="monospace">Score: 100%</text>

              {/* Interactive micro-action button */}
              <g
                style={{ cursor: 'pointer' }}
                onClick={() => setToggleState(!toggleState)}
                role="button"
                tabIndex={0}
                aria-label="Toggle system architecture test"
              >
                <rect
                  x="18"
                  y="142"
                  width="244"
                  height="38"
                  rx="6"
                  fill={toggleState ? 'url(#orangeGlow)' : '#2A2F37'}
                  stroke="#EA5807"
                  strokeWidth="1"
                  style={{ transition: 'fill 0.3s ease' }}
                />
                <text
                  x="140"
                  y="166"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="sans-serif"
                  textAnchor="middle"
                >
                  {toggleState ? '✓ System Verified in Production' : 'Click to Verify Architecture'}
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className={styles.stageFooter}>
        <div className={styles.metricGroup}>
          <span className={styles.metric}>
            <span className={styles.statusIndicator} />
            <span>State: <strong>Synchronized</strong></span>
          </span>
          <span className={styles.metric}>
            <span>Core: <strong>WCAG 2.1 AA</strong></span>
          </span>
        </div>
        <span className={styles.auditBadge}>Vector Cadence 60fps</span>
      </div>
    </div>
  )
}
