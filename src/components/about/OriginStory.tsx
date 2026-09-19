import React from 'react'
import styles from './OriginStory.module.scss'

export const OriginStory: React.FC = () => {
  return (
    <section id="origin" className={styles.storyWrapper} aria-labelledby="about-origin-title">
      <div className="container">
        <div className={styles.content}>
          <h1 id="about-origin-title">A rare combination, on purpose</h1>
          <div className={styles.eyebrow}>Our Story</div>

          <p className={styles.lead}>
            3rd Edge Creative started with a simple observation: most people are good
            at design, or good at engineering — rarely both, and rarely well enough to
            move fluently between the two. We built the agency around closing that
            gap. We design and build, end to end, without a handoff where ideas get
            lost in translation.
          </p>

          <p>
            Even now, with AI reshaping how software gets made, that combination is
            still surprisingly rare. Understanding both sides — how something should
            feel and how it actually gets built — is still what lets us deliver
            applications that work in practice, not just in a mockup.
          </p>
        </div>
      </div>
    </section>
  )
}
