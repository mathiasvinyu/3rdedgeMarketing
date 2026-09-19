'use client'

import React from 'react'
import styles from './ServiceVectorArtifact.module.scss'

interface ServiceVectorArtifactProps {
  number: string
  title: string
}

export const ServiceVectorArtifact: React.FC<ServiceVectorArtifactProps> = ({ number, title }) => {
  return (
    <div className={styles.canvasContainer} aria-hidden="true">
      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 520 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            {/* Design System Charcoal Canvas Gradient (from Hero Vector Artifact) */}
            <linearGradient id={`canvasBgGrad-${number}`} x1="0" y1="0" x2="0" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22262E" />
              <stop offset="100%" stopColor="#14161A" />
            </linearGradient>

            {/* Inactive / Base Node Background */}
            <linearGradient id={`nodeBgGrad-${number}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E232B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#16191F" stopOpacity="0.98" />
            </linearGradient>

            {/* Active / Highlight Node Background */}
            <linearGradient id={`nodeActiveBgGrad-${number}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#242933" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#1A1D25" stopOpacity="0.99" />
            </linearGradient>

            {/* Signature Orange Glow Gradient */}
            <linearGradient id={`orangeGlow-${number}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EA5807" />
              <stop offset="100%" stopColor="#FF8A00" />
            </linearGradient>

            {/* Verified Green Gradient */}
            <linearGradient id={`verifiedGrad-${number}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Base Canvas */}
          <rect width="520" height="340" rx="20" fill={`url(#canvasBgGrad-${number})`} />

          {/* Blueprint Grid Lines (Charcoal & Slate Foundation) */}
          <g opacity="0.22">
            <line x1="30" y1="50" x2="490" y2="50" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="30" y1="120" x2="490" y2="120" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="30" y1="190" x2="490" y2="190" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="30" y1="260" x2="490" y2="260" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />

            <line x1="80" y1="30" x2="80" y2="310" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="260" y1="30" x2="260" y2="310" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="440" y1="30" x2="440" y2="310" stroke="#6A727F" strokeWidth="0.8" strokeDasharray="3 3" />

            {/* Subtle Crosshairs & Coordinates */}
            <circle cx="80" cy="50" r="2.5" fill="#6A727F" />
            <circle cx="260" cy="190" r="2.5" fill="#EA5807" />
            <circle cx="440" cy="50" r="2.5" fill="#6A727F" />
            <path d="M 40 280 C 120 180, 220 80, 320 50" stroke="#EA5807" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.3" />
          </g>

          {/* Top Window Meta Bar */}
          {renderCanvasHeader(number)}

          {/* Service-Specific Node Schemas */}
          {renderServiceGraphic(number)}
        </svg>
      </div>
    </div>
  )
}

function renderCanvasHeader(number: string) {
  const configs: Record<string, { badge: string; sub: string; idx: string }> = {
    '01': { badge: 'UX DISCOVERY', sub: 'Research > Wireframes > Prototype', idx: '01 / 05' },
    '02': { badge: 'FULL-STACK ENGINE', sub: 'SSR Engine > Edge Hydration > DB Sync', idx: '02 / 05' },
    '03': { badge: 'PERF MONITOR', sub: 'Lighthouse Audit > Edge Delivery > 100/100', idx: '03 / 05' },
    '04': { badge: 'AGENTIC AI', sub: 'AI Workflow Engine · Webhook > Enrichment >', idx: '04 / 05' },
    '05': { badge: 'TOKEN ARCHITECTURE', sub: 'Design Tokens > Primitives > Living Specs', idx: '05 / 05' },
  }

  const current = configs[number] || {
    badge: 'CAPABILITY ENGINE',
    sub: 'Architecture > Pipeline > Verification',
    idx: `${number} / 05`,
  }

  return (
    <g transform="translate(30, 24)">
      {/* Top Left Badge in Brand Orange */}
      <rect width="112" height="22" rx="11" fill="rgba(234, 88, 7, 0.12)" stroke="rgba(234, 88, 7, 0.35)" strokeWidth="0.8" />
      <circle className={styles.beaconPulse} cx="12" cy="11" r="3" fill="#EA5807" />
      <text x="21" y="14.5" fill="#EA5807" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.04em">
        {current.badge}
      </text>

      {/* Subtitle breadcrumb */}
      <text x="124" y="15" fill="#8E96A4" fontSize="8" fontFamily="monospace" opacity="0.85">
        {current.sub}
      </text>

      {/* Top Right Counter Pill */}
      <g transform="translate(398, 0)">
        <rect width="62" height="22" rx="11" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <circle cx="12" cy="11" r="2.5" fill="#EA5807" />
        <text x="22" y="14.5" fill="#A8AEB6" fontSize="8.5" fontWeight="600" fontFamily="monospace">
          {current.idx}
        </text>
      </g>
    </g>
  )
}

function renderServiceGraphic(number: string) {
  switch (number) {
    case '01':
      return renderUXDesignGraphic(number)
    case '02':
      return renderWebDevGraphic(number)
    case '03':
      return renderPerformanceGraphic(number)
    case '04':
      return renderAIWorkflowsGraphic(number)
    case '05':
      return renderDesignSystemsGraphic(number)
    default:
      return renderAIWorkflowsGraphic(number)
  }
}

// -----------------------------------------------------------------------------
// SERVICE 01: UX & Product Design
// -----------------------------------------------------------------------------
function renderUXDesignGraphic(number: string) {
  return (
    <g transform="translate(30, 70)">
      {/* Connector curves in warm orange stream */}
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 35, 210 35"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 105, 210 105"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 35 C 345 35, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 105 C 345 105, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />

      {/* NODE 1: User Discovery (Trigger) */}
      <g transform="translate(10, 42)">
        {/* Orange Highlighter Marker Underline */}
        <path
          className={styles.highlightMarker}
          d="M -3 46 C 25 43, 85 43, 114 47"
          stroke="#EA5807"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <rect width="110" height="48" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="12" y="21" fill="#F3F4F6" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          User Need
        </text>
        <text x="12" y="35" fill="#8E96A4" fontSize="8" fontFamily="monospace">
          Research In
        </text>
        {/* Plus badge */}
        <circle cx="92" cy="24" r="8" fill="rgba(234, 88, 7, 0.15)" stroke="#EA5807" strokeWidth="0.8" />
        <path d="M 89 24 L 95 24 M 92 21 L 92 27" stroke="#EA5807" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* NODE 2 (Top): Wireframe Flow */}
      <g transform="translate(210, 12)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Wireframe
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Flow Schema
        </text>
        <circle cx="92" cy="23" r="3" fill="#A8AEB6" opacity="0.6" />
      </g>

      {/* NODE 3 (Bottom): Hi-Fi Prototype */}
      <g transform="translate(210, 82)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Prototype
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Figma Tokens
        </text>
        <circle cx="92" cy="23" r="3" fill="#FFCC00" opacity="0.8" />
      </g>

      {/* NODE 4: Usability Benchmark (Verified Output) */}
      <g transform="translate(365, 42)">
        {/* Orange Marker Border */}
        <rect
          className={styles.highlightMarker}
          x="-3"
          y="-3"
          width="98"
          height="54"
          rx="11"
          stroke="#EA5807"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        <rect width="92" height="48" rx="8" fill={`url(#nodeActiveBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="10" y="20" fill="#F3F4F6" fontSize="10" fontWeight="700" fontFamily="sans-serif">
          User Validated
        </text>
        <text x="10" y="34" fill="#10B981" fontSize="7.5" fontFamily="monospace">
          Score 98%
        </text>
        {/* Checkmark circle badge in Verified Emerald */}
        <circle cx="76" cy="24" r="8" fill="#10B981" />
        <path d="M 72 24 L 75 27 L 80 21" stroke="#14161A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Bottom Technology Architecture Pills */}
      <g transform="translate(10, 165)">
        <rect width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="55" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          USER FLOWS
        </text>

        <rect x="122" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="177" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          FIGMA TOKENS
        </text>

        <rect x="244" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="299" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          USABILITY TEST
        </text>
      </g>
    </g>
  )
}

// -----------------------------------------------------------------------------
// SERVICE 02: Web Development
// -----------------------------------------------------------------------------
function renderWebDevGraphic(number: string) {
  return (
    <g transform="translate(30, 70)">
      {/* Connector curves */}
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 35, 210 35"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 105, 210 105"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 35 C 345 35, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 105 C 345 105, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />

      {/* NODE 1: Client Request (Edge Router) */}
      <g transform="translate(10, 42)">
        <path
          className={styles.highlightMarker}
          d="M -3 46 C 25 43, 85 43, 114 47"
          stroke="#EA5807"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <rect width="110" height="48" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="12" y="21" fill="#F3F4F6" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          Edge Router
        </text>
        <text x="12" y="35" fill="#8E96A4" fontSize="8" fontFamily="monospace">
          Client Request +
        </text>
        <circle cx="92" cy="24" r="8" fill="rgba(234, 88, 7, 0.15)" stroke="#EA5807" strokeWidth="0.8" />
        <path d="M 89 24 L 95 24 M 92 21 L 92 27" stroke="#EA5807" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* NODE 2 (Top): Server Engine (SSR) */}
      <g transform="translate(210, 12)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          SSR Engine
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          React Server Comp
        </text>
        <circle cx="92" cy="23" r="3" fill="#10B981" />
      </g>

      {/* NODE 3 (Bottom): Type-Safe API */}
      <g transform="translate(210, 82)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Type-Safe API
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          TypeScript Strict
        </text>
        <circle cx="92" cy="23" r="3" fill="#A8AEB6" />
      </g>

      {/* NODE 4: Verified Build Output */}
      <g transform="translate(365, 42)">
        <rect
          className={styles.highlightMarker}
          x="-3"
          y="-3"
          width="98"
          height="54"
          rx="11"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        <rect width="92" height="48" rx="8" fill={`url(#nodeActiveBgGrad-${number})`} stroke="#10B981" strokeWidth="1.2" />
        <text x="10" y="20" fill="#F3F4F6" fontSize="10" fontWeight="700" fontFamily="sans-serif">
          Verified Build
        </text>
        <text x="10" y="34" fill="#10B981" fontSize="7.5" fontFamily="monospace">
          Next.js Prod
        </text>
        <circle cx="76" cy="24" r="8" fill="#10B981" />
        <path d="M 72 24 L 75 27 L 80 21" stroke="#14161A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Bottom Technology Architecture Pills */}
      <g transform="translate(10, 165)">
        <rect width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="55" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          EDGE RUNTIME
        </text>

        <rect x="122" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="177" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          NEXT.JS 16
        </text>

        <rect x="244" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="299" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          TYPESCRIPT STRICT
        </text>
      </g>
    </g>
  )
}

// -----------------------------------------------------------------------------
// SERVICE 03: Performance
// -----------------------------------------------------------------------------
function renderPerformanceGraphic(number: string) {
  return (
    <g transform="translate(30, 70)">
      {/* Connector curves */}
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 35, 210 35"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 105, 210 105"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 35 C 345 35, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 105 C 345 105, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.8"
      />

      {/* NODE 1: Telemetry Stream */}
      <g transform="translate(10, 42)">
        <path
          className={styles.highlightMarker}
          d="M -3 46 C 25 43, 85 43, 114 47"
          stroke="#EA5807"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <rect width="110" height="48" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="12" y="21" fill="#F3F4F6" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          Telemetry
        </text>
        <text x="12" y="35" fill="#8E96A4" fontSize="8" fontFamily="monospace">
          CWV Stream In
        </text>
        <circle cx="92" cy="24" r="8" fill="rgba(234, 88, 7, 0.15)" stroke="#EA5807" strokeWidth="0.8" />
        <path d="M 89 24 L 95 24 M 92 21 L 92 27" stroke="#EA5807" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* NODE 2 (Top): LCP Sub-second Gauge */}
      <g transform="translate(210, 12)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#10B981" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          LCP: 0.72s
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Sub-second paint
        </text>
        <circle cx="92" cy="23" r="3" fill="#10B981" />
      </g>

      {/* NODE 3 (Bottom): CLS Zero Shift */}
      <g transform="translate(210, 82)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#10B981" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          CLS: 0.00
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Zero visual shift
        </text>
        <circle cx="92" cy="23" r="3" fill="#10B981" />
      </g>

      {/* NODE 4: Verified Audit 100/100 */}
      <g transform="translate(365, 42)">
        <rect
          className={styles.highlightMarker}
          x="-3"
          y="-3"
          width="98"
          height="54"
          rx="11"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        <rect width="92" height="48" rx="8" fill={`url(#nodeActiveBgGrad-${number})`} stroke="#10B981" strokeWidth="1.2" />
        <text x="10" y="20" fill="#F3F4F6" fontSize="10" fontWeight="700" fontFamily="sans-serif">
          Audit Rating
        </text>
        <text x="10" y="34" fill="#10B981" fontSize="7.5" fontFamily="monospace">
          100 / 100 Score
        </text>
        <circle cx="76" cy="24" r="8" fill="#10B981" />
        <path d="M 72 24 L 75 27 L 80 21" stroke="#14161A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Bottom Technology Architecture Pills */}
      <g transform="translate(10, 165)">
        <rect width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="55" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          CORE WEB VITALS
        </text>

        <rect x="122" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="177" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          EDGE CACHE 99.4%
        </text>

        <rect x="244" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="299" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          ASSET OPTIMIZER
        </text>
      </g>
    </g>
  )
}

// -----------------------------------------------------------------------------
// SERVICE 04: Complex & Enterprise Builds / AI Workflows
// -----------------------------------------------------------------------------
function renderAIWorkflowsGraphic(number: string) {
  return (
    <g transform="translate(30, 70)">
      {/* Title & Subtitle from screenshot */}
      <g transform="translate(10, -5)">
        <text x="0" y="0" fill="#F3F4F6" fontSize="11" fontWeight="700" fontFamily="sans-serif">
          AI Workflow Engine
        </text>
        <text x="0" y="14" fill="#8E96A4" fontSize="8" fontFamily="monospace" opacity="0.85">
          Webhook &gt; Enrichment &gt; Routing
        </text>
      </g>

      {/* Curved connector lines in Brand Orange */}
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 35, 210 35"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 105, 210 105"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 35 C 345 35, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 105 C 345 105, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />

      {/* NODE 1: Lead In (Webhook +) */}
      <g transform="translate(10, 44)">
        {/* Brand Orange Highlighter Underline */}
        <path
          className={styles.highlightMarker}
          d="M -4 46 C 25 43, 85 43, 114 47"
          stroke="#EA5807"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          Lead In
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="8" fontFamily="monospace">
          Webhook
        </text>
        {/* Plus circle icon in brand orange */}
        <circle cx="92" cy="23" r="8" fill="rgba(234, 88, 7, 0.18)" stroke="#EA5807" strokeWidth="0.8" />
        <path d="M 89 23 L 95 23 M 92 20 L 92 26" stroke="#EA5807" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* NODE 2: Enrich (Data layer) */}
      <g transform="translate(210, 12)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Enrich
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Data layer
        </text>
        <circle cx="92" cy="23" r="3" fill="#A8AEB6" opacity="0.6" />
      </g>

      {/* NODE 3: Qualify (Score rules) */}
      <g transform="translate(210, 82)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Qualify
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Score rules
        </text>
        <circle cx="92" cy="23" r="3" fill="#A8AEB6" opacity="0.6" />
      </g>

      {/* NODE 4: AI Agent (Next action) */}
      <g transform="translate(365, 44)">
        {/* Brand Orange Marker Surround */}
        <rect
          className={styles.highlightMarker}
          x="-3"
          y="-3"
          width="98"
          height="52"
          rx="11"
          stroke="#EA5807"
          strokeWidth="2.2"
          fill="none"
          opacity="0.9"
        />
        <rect width="92" height="46" rx="8" fill={`url(#nodeActiveBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="10" y="20" fill="#F3F4F6" fontSize="10" fontWeight="700" fontFamily="sans-serif">
          AI Agent
        </text>
        <text x="10" y="34" fill="#EA5807" fontSize="7.5" fontFamily="monospace">
          Next action
        </text>
        {/* Checkmark circle badge */}
        <circle cx="76" cy="23" r="8" fill="#EA5807" />
        <path d="M 72 23 L 75 26 L 80 20" stroke="#14161A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Bottom Technology Architecture Pills from screenshot */}
      <g transform="translate(10, 165)">
        <rect width="98" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="49" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          N8N FLOW
        </text>

        <rect x="108" y="0" width="108" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="162" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          LLM ROUTING
        </text>

        <rect x="226" y="0" width="98" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="275" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          CRM SYNC
        </text>
      </g>
    </g>
  )
}

// -----------------------------------------------------------------------------
// SERVICE 05: Design Systems & Brand
// -----------------------------------------------------------------------------
function renderDesignSystemsGraphic(number: string) {
  return (
    <g transform="translate(30, 70)">
      {/* Connector curves */}
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 35, 210 35"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 120 70 C 160 70, 170 105, 210 105"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 35 C 345 35, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />
      <path
        className={styles.connectorFlow}
        d="M 320 105 C 345 105, 355 70, 375 70"
        stroke="#EA5807"
        strokeWidth="1.6"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.85"
      />

      {/* NODE 1: Token Root */}
      <g transform="translate(10, 42)">
        <path
          className={styles.highlightMarker}
          d="M -3 46 C 25 43, 85 43, 114 47"
          stroke="#EA5807"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        <rect width="110" height="48" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="12" y="21" fill="#F3F4F6" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">
          Token Root
        </text>
        <text x="12" y="35" fill="#8E96A4" fontSize="8" fontFamily="monospace">
          60/30/10 Colors
        </text>
        <circle cx="92" cy="24" r="8" fill="rgba(234, 88, 7, 0.15)" stroke="#EA5807" strokeWidth="0.8" />
        <path d="M 89 24 L 95 24 M 92 21 L 92 27" stroke="#EA5807" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* NODE 2 (Top): Primitives */}
      <g transform="translate(210, 12)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Primitives
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          8pt Spatial Grid
        </text>
        <circle cx="92" cy="23" r="3" fill="#FFCC00" />
      </g>

      {/* NODE 3 (Bottom): Components */}
      <g transform="translate(210, 82)">
        <rect width="110" height="46" rx="8" fill={`url(#nodeBgGrad-${number})`} stroke="#383E4B" strokeWidth="1" />
        <text x="12" y="20" fill="#F3F4F6" fontSize="10" fontWeight="600" fontFamily="sans-serif">
          Components
        </text>
        <text x="12" y="34" fill="#8E96A4" fontSize="7.5" fontFamily="monospace">
          Accessible UI
        </text>
        <circle cx="92" cy="23" r="3" fill="#EA5807" />
      </g>

      {/* NODE 4: Living System */}
      <g transform="translate(365, 42)">
        <rect
          className={styles.highlightMarker}
          x="-3"
          y="-3"
          width="98"
          height="54"
          rx="11"
          stroke="#EA5807"
          strokeWidth="2"
          fill="none"
          opacity="0.9"
        />
        <rect width="92" height="48" rx="8" fill={`url(#nodeActiveBgGrad-${number})`} stroke="#EA5807" strokeWidth="1.2" />
        <text x="10" y="20" fill="#F3F4F6" fontSize="10" fontWeight="700" fontFamily="sans-serif">
          Living Specs
        </text>
        <text x="10" y="34" fill="#EA5807" fontSize="7.5" fontFamily="monospace">
          Repo Synced
        </text>
        <circle cx="76" cy="24" r="8" fill="#EA5807" />
        <path d="M 72 24 L 75 27 L 80 21" stroke="#14161A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Bottom Technology Architecture Pills */}
      <g transform="translate(10, 165)">
        <rect width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="55" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          60/30/10 RULE
        </text>

        <rect x="122" y="0" width="110" height="24" rx="12" fill="rgba(106, 114, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="177" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          8PT SPATIAL GRID
        </text>

        <rect x="244" y="0" width="110" height="24" rx="12" fill="rgba(106, 106, 127, 0.12)" stroke="rgba(106, 114, 127, 0.28)" strokeWidth="0.8" />
        <text x="299" y="15" fill="#A8AEB6" fontSize="8" fontWeight="600" fontFamily="monospace" textAnchor="middle">
          STORYBOOK SYNC
        </text>
      </g>
    </g>
  )
}
