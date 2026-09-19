'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { MobileNav } from './MobileNav'
import styles from './Header.module.scss'

interface HeaderProps {
  onOpenContact: () => void
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
]

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header} role="banner">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logoLink} aria-label="3rd Edge Creative Home">
            <Logo height={38} className={styles.logoSvg} />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenContact}
              aria-label="Open contact conversation"
            >
              Get in Touch
            </Button>
          </nav>

          <button
            className={styles.mobileMenuTrigger}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenContact={onOpenContact}
      />
    </>
  )
}
