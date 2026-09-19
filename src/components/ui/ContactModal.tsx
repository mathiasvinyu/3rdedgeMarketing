'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import styles from './ContactModal.module.scss'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [projectSummary, setProjectSummary] = useState('')
  const [timeframe, setTimeframe] = useState('Exploring options')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization,
          projectSummary,
          timeframe,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        setErrorMessage(data.error || 'Failed to submit inquiry.')
      } else {
        setIsSuccess(true)
      }
    } catch {
      setErrorMessage('Network error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close contact dialog"
        >
          <X size={20} />
        </button>

        <div className={styles.header}>
          <h2 id="contact-modal-title">Start a Conversation</h2>
          <p>
            Let’s talk about what you’re building. No pressure, no commitment, and no
            sales pitches. Share a few details and we’ll arrange a conversation.
          </p>
        </div>

        {isSuccess ? (
          <div className={styles.successBox}>
            <h3>Message Received</h3>
            <p>
              Thank you for reaching out. We will review your project details and get
              back to you within one business day.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button variant="secondary" onClick={onClose}>
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {errorMessage && <div className={styles.errorText}>{errorMessage}</div>}

            <div className={styles.formGroup}>
              <label htmlFor="contact-name">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@organization.org"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-org">Organization / Department</label>
              <input
                id="contact-org"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Company, NGO, or Government entity"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-summary">What are you building or looking to fix? *</label>
              <textarea
                id="contact-summary"
                required
                value={projectSummary}
                onChange={(e) => setProjectSummary(e.target.value)}
                placeholder="Tell us about the project, the audience, or the quiet failures you’re noticing..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-timeframe">Target Timeframe</label>
              <select
                id="contact-timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="Exploring options">Exploring options / Early planning</option>
                <option value="Next 1-3 months">Next 1–3 months</option>
                <option value="Next 3-6 months">Next 3–6 months</option>
                <option value="Immediate need">Immediate / Urgent repair</option>
              </select>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
