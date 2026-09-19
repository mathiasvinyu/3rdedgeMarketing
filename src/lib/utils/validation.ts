export interface ContactFormData {
  name: string
  email: string
  organization?: string
  projectSummary: string
  timeframe?: string
}

export interface ValidationError {
  field: string
  issue: string
}

export function validateContactForm(data: Partial<ContactFormData>): {
  isValid: boolean
  errors: ValidationError[]
} {
  const errors: ValidationError[] = []

  // Validate Name
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push({ field: 'name', issue: 'Please provide your name (at least 2 characters).' })
  } else if (data.name.trim().length > 100) {
    errors.push({ field: 'name', issue: 'Name cannot exceed 100 characters.' })
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email.trim())) {
    errors.push({ field: 'email', issue: 'Please provide a valid email address.' })
  }

  // Validate Project Summary
  if (!data.projectSummary || typeof data.projectSummary !== 'string' || data.projectSummary.trim().length < 10) {
    errors.push({ field: 'projectSummary', issue: 'Please describe what you are building (at least 10 characters).' })
  } else if (data.projectSummary.trim().length > 2000) {
    errors.push({ field: 'projectSummary', issue: 'Project summary cannot exceed 2000 characters.' })
  }

  // Validate Organization (Optional)
  if (data.organization && typeof data.organization === 'string' && data.organization.trim().length > 150) {
    errors.push({ field: 'organization', issue: 'Organization cannot exceed 150 characters.' })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
