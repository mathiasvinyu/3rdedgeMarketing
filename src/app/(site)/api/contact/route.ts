import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { validateContactForm } from '@/lib/utils/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { isValid, errors } = validateContactForm(body)

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: errors,
        },
        { status: 400 },
      )
    }

    const payload = await getPayloadClient()
    const inquiry = await payload.create({
      collection: 'contact-inquiries',
      data: {
        name: body.name.trim(),
        email: body.email.trim(),
        organization: body.organization ? body.organization.trim() : '',
        projectSummary: body.projectSummary.trim(),
        timeframe: body.timeframe ? body.timeframe.trim() : 'Unspecified',
        status: 'new',
        submittedAt: new Date().toISOString(),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We have received your inquiry and will be in touch shortly.',
        inquiryId: inquiry.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Contact inquiry error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to submit inquiry at this time. Please email us directly at hello@3rdedge.co.za.',
      },
      { status: 500 },
    )
  }
}
