import React from 'react'
import styles from './CaseStudySection.module.scss'

export interface CaseStudyItem {
  id?: string
  clientName: string
  title: string
  quietFailureDiagnosed: string
  solutionImplemented: string
  verifiedOutcome: string
}

interface CaseStudySectionProps {
  studies: CaseStudyItem[]
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ studies }) => {
  return (
    <section id="case-studies" className={styles.caseStudyWrapper} aria-labelledby="cases-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="cases-title">Built From Real, Named Work</h2>
          <div className={styles.label}>Proof of Capability</div>
          <p>
            No unsourced stats or broken vanity scorecards. We measure our success by
            quiet failures diagnosed and verified outcomes delivered.
          </p>
        </div>

        <div className={styles.caseStudyGrid}>
          {studies.map((item, index) => (
            <article key={item.id || index} className={styles.caseCard}>
              <div className={styles.meta}>{item.clientName}</div>
              <h3>{item.title}</h3>

              <div className={styles.details}>
                <div className={styles.detailBlock}>
                  <div className={styles.blockTitle}>The Quiet Failure Diagnosed</div>
                  <p className={styles.blockText}>{item.quietFailureDiagnosed}</p>
                </div>

                <div className={styles.detailBlock}>
                  <div className={styles.blockTitle}>Unified Build Solution</div>
                  <p className={styles.blockText}>{item.solutionImplemented}</p>
                </div>

                <div className={`${styles.detailBlock} ${styles.outcome}`}>
                  <div className={styles.blockTitle}>Verified Production Outcome</div>
                  <p className={styles.blockText}>✓ {item.verifiedOutcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
