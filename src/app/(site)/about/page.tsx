import React from 'react'
import type { Metadata } from 'next'
import { OriginStory } from '@/components/about/OriginStory'
import { ThinkingMoments } from '@/components/about/ThinkingMoments'
import { TeamCommitment } from '@/components/about/TeamCommitment'
import { ClosingCTA } from '@/components/home/ClosingCTA'

export const metadata: Metadata = {
  title: 'About',
  description:
    'A rare combination, on purpose. We design and build end to end, without lossy handoffs where ideas get lost in translation.',
}

export default function AboutPage() {
  return (
    <>
      <OriginStory />
      <ThinkingMoments />
      <TeamCommitment />
      <ClosingCTA />
    </>
  )
}
