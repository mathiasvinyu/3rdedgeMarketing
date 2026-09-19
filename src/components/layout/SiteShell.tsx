'use client'

import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ContactModal } from '../ui/ContactModal'
import { SkipLink } from './SkipLink'

export const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <SkipLink />
      <Header onOpenContact={() => setContactModalOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  )
}
