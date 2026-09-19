import React from 'react'
import styles from './ServiceCard.module.scss'

export interface ServiceItemData {
  id?: string
  number: string
  title: string
  summary: string
  capabilities?: Array<{ label: string } | string>
}

export const ServiceCard: React.FC<{ service: ServiceItemData }> = ({ service }) => {
  return (
    <article
      className={styles.card}
      aria-labelledby={`service-${service.number}`}
      data-service-number={service.number}
    >
      <div className={styles.number}>{service.number}</div>
      <h3 id={`service-${service.number}`}>{service.title}</h3>
      <p className={styles.summary}>{service.summary}</p>

      {service.capabilities && service.capabilities.length > 0 && (
        <div className={styles.tagsList}>
          {service.capabilities.map((cap, idx) => {
            const label = typeof cap === 'string' ? cap : cap.label
            return (
              <span key={idx} className={styles.tag}>
                {label}
              </span>
            )
          })}
        </div>
      )}
    </article>
  )
}
