import { describe, it, expect } from 'vitest'
import { validateContactForm } from '../../src/lib/utils/validation'

describe('Contact Form Input Validation', () => {
  it('should accept valid inquiry input', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      projectSummary: 'We need an audit of our core web architecture and a clear technical build plan.',
      organization: 'Acme Health Systems',
      timeframe: 'Next quarter',
    }

    const result = validateContactForm(input)
    expect(result.isValid).toBe(true)
    expect(result.errors).toEqual([])
  })

  it('should reject missing name or name under 2 characters', () => {
    const input = {
      name: 'J',
      email: 'jane@example.com',
      projectSummary: 'A sufficiently long valid inquiry message detailing our project needs.',
    }

    const result = validateContactForm(input)
    expect(result.isValid).toBe(false)
    expect(result.errors.some((e) => e.field === 'name')).toBe(true)
  })

  it('should reject invalid email format', () => {
    const input = {
      name: 'Jane Doe',
      email: 'not-an-email',
      projectSummary: 'A sufficiently long valid inquiry message detailing our project needs.',
    }

    const result = validateContactForm(input)
    expect(result.isValid).toBe(false)
    expect(result.errors.some((e) => e.field === 'email')).toBe(true)
  })

  it('should reject projectSummary that is under 10 characters', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      projectSummary: 'Too short',
    }

    const result = validateContactForm(input)
    expect(result.isValid).toBe(false)
    expect(result.errors.some((e) => e.field === 'projectSummary')).toBe(true)
  })

  it('should reject overly long organization strings', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      projectSummary: 'A sufficiently long valid inquiry message detailing our project needs.',
      organization: 'A'.repeat(151),
    }

    const result = validateContactForm(input)
    expect(result.isValid).toBe(false)
    expect(result.errors.some((e) => e.field === 'organization')).toBe(true)
  })
})
