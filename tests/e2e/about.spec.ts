import { test, expect } from '@playwright/test'

test.describe('User Story 2: About Page & Unified Craft', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about')
  })

  test('displays About page title and origin narrative', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toContainText('A rare combination, on purpose')

    const storySection = page.locator('section#origin')
    await expect(storySection).toBeVisible()
    await expect(storySection).toContainText(/without a handoff where ideas get lost in translation/i)
  })

  test('displays all three operational moments', async ({ page }) => {
    const momentsSection = page.locator('section#thinking-moments')
    await expect(momentsSection).toBeVisible()

    await expect(momentsSection).toContainText('The brief becomes a build')
    await expect(momentsSection).toContainText('The edge cases show up early')
    await expect(momentsSection).toContainText(/The last 10% doesn['’]t get skipped/)
  })

  test('displays senior-led delivery guarantee and quiet technical stack line', async ({ page }) => {
    const teamSection = page.locator('section#team-commitment')
    await expect(teamSection).toBeVisible()

    await expect(teamSection).toContainText('Senior delivery, end to end')
    await expect(teamSection).toContainText('TypeScript')
    await expect(teamSection).toContainText('Next.js')
  })
})
