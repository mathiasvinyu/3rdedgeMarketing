import React from 'react'
import styles from './TeamCommitment.module.scss'

export const TeamCommitment: React.FC = () => {
  return (
    <section id="team-commitment" className={styles.wrapper} aria-label="Team Commitment and Capabilities">
      <div className="container">
        <div className={styles.commitmentBox}>
          <div className={styles.label} style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-orange)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Senior delivery, end to end
          </div>
          <p>
            One more thing worth knowing: whoever you talk to at the start is who
            actually builds it — no handoff to a junior team partway through.
          </p>
        </div>

        <div className={styles.keywordsLine}>
          <span>
            Core technical competencies: React, Next.js, Node.js, TypeScript, Accessibility
            (WCAG 2.1 AA), Core Web Vitals, CMS Architecture, Design Systems.
          </span>
        </div>
      </div>
    </section>
  )
}
