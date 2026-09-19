import { NextResponse } from 'next/server'
import { seedInitialContent } from '@/lib/seed'

export async function POST() {
  try {
    const result = await seedInitialContent()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const result = await seedInitialContent()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Seeding error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
