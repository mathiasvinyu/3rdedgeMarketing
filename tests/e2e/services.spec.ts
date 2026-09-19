import { test, expect } from '@playwright/test'

test.describe('User Story 3: Services Page & Capability Pillars', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services')
  })

  test('displays headline and exactly 5 service pillars', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toContainText(/Services|What We Build/i)

    const serviceCards = page.locator('article[data-service-number]')
    await expect(serviceCards).toHaveCount(5)
  })

  test('does not contain a standalone mobile app development card or offering', async ({ page }) => {
    const content = await page.textContent('main')
    expect(content?.toLowerCase()).not.toContain('mobile app development')
    expect(content?.toLowerCase()).not.toContain('ios & android app')
  })

  test('does not contain isolated per-service contact buttons', async ({ page }) => {
    // Individual service cards must not have their own CTA buttons
    const serviceCardButtons = page.locator('article[data-service-number] button')
    await expect(serviceCardButtons).toHaveCount(0)
  })

  test('renders exactly one unified bottom conversation CTA', async ({ page }) => {
    const bottomCta = page.locator('section#services-cta')
    await expect(bottomCta).toBeVisible()

    const startConversationBtn = bottomCta.getByRole('button', { name: /start a conversation|get in touch/i })
    await expect(startConversationBtn).toBeVisible()
  })
})
