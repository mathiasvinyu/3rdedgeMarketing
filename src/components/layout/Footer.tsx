import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="3rd Edge Creative">
              <span className={styles.dot} aria-hidden="true" />
              <span>3rd<span className={styles.accent}>Edge</span></span>
            </Link>
            <p className={styles.tagline}>
              Good websites aren’t magic, they’re just done properly — clear thinking,
              honest design, solid engineering. Built for clients who’d rather not
              gamble on their digital presence.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/insights">Insights</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Direct Conversation</h4>
            <ul>
              <li><a href="mailto:hello@3rdedge.co.za">hello@3rdedge.co.za</a></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Cape Town, South Africa</span></li>
              <li><Link href="/admin">Payload CMS Login</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} 3rd Edge Creative. All rights reserved.</p>
          <p>WCAG 2.1 AA Compliant · Zero Buzzword Guarantee</p>
        </div>
      </div>
    </footer>
  )
}
