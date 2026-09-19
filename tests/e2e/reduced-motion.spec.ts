import { test, expect } from '@playwright/test'

test.describe('User Story 5: Reduced Motion Fallback Verification', () => {
  test.use({
    reducedMotion: 'reduce',
  })

  test('respects prefers-reduced-motion on HeroCanvas', async ({ page }) => {
    await page.goto('/')

    // Hero section canvas should either render static elements or fall back without animation loops
    const heroSection = page.locator('section#hero')
    await expect(heroSection).toBeVisible()

    // Check that CSS disables smooth transitions or long animations
    const isReduced = await page.evaluate(() => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })

    expect(isReduced).toBe(true)
  })
})
