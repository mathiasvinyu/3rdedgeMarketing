import React from 'react'
import styles from './TeamCommitment.module.scss'

const competencies = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Accessibility (WCAG 2.1 AA)',
  'Core Web Vitals',
  'CMS Architecture',
  'Design Systems',
]

export const TeamCommitment: React.FC = () => {
  return (
    <section id="team-commitment" className={styles.wrapper} aria-labelledby="team-commitment-title">
      <div className="container">
        <div className={styles.statementSection}>
          <div id="team-commitment-title" className={styles.eyebrow}>
            Senior delivery, end to end
          </div>

          <p className={styles.statement}>
            One more thing worth knowing: whoever you talk to at the start is who
            actually builds it — no handoff to a junior team partway through.
          </p>

          <div className={styles.competenciesBlock}>
            <span className={styles.competenciesLabel}>Core technical competencies:</span>
            <div className={styles.pillsList}>
              {competencies.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
