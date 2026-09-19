import React from 'react'
import styles from './ThinkingMoments.module.scss'

const moments = [
  {
    number: '01',
    title: 'The brief becomes a build',
    narrative:
      'Normally, a designer says something like "make it feel effortless," and that gets handed to a developer as a ticket — and something gets lost in that handoff, every time. When the same people carry the idea from concept to code, "effortless" doesn’t need translating. It just gets built that way.',
  },
  {
    number: '02',
    title: 'The edge cases show up early, not late',
    narrative:
      'A design file shows the happy path. The awkward cases — a form with no data yet, a name that’s too long for its box, a slow connection — usually only surface once a developer starts building, by which point they’re expensive to fix. We hit those the same week we’re still deciding how something should look, while it’s still cheap to change.',
  },
  {
    number: '03',
    title: 'The last 10% doesn’t get skipped',
    narrative:
      'Polish is usually the first thing dropped when a project runs over budget or handoff friction eats the schedule — it’s the part that depends on someone downstream still caring after the "real work" is done. When design and build live with the same people, that 10% isn’t a nice-to-have someone has to fight for. It’s just how the work finishes.',
  },
]

export const ThinkingMoments: React.FC = () => {
  return (
    <section id="thinking-moments" className={styles.wrapper} aria-labelledby="how-we-think-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="how-we-think-title">How We Think</h2>
          <div className={styles.label}>Operational Mindset</div>
        </div>

        <div className={styles.momentsList}>
          {moments.map((m) => (
            <article key={m.number} className={styles.momentCard}>
              <div className={styles.number}>{m.number}</div>
              <h3>{m.title}</h3>
              <p>{m.narrative}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
