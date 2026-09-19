'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import styles from './MobileNav.module.scss'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  onOpenContact: () => void
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Insights', path: '/insights' },
]

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenContact }) => {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.drawer}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className={styles.header}>
          <Link href="/" onClick={onClose} aria-label="3rd Edge Creative Home">
            <Logo height={32} />
          </Link>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close navigation menu">
            <X size={24} />
          </button>
        </div>

        <nav className={styles.navList}>
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.ctaWrapper}>
          <Button
            variant="primary"
            size="lg"
            className={styles.fullWidth}
            onClick={() => {
              onClose()
              onOpenContact()
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
