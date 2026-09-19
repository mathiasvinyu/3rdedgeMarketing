import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/about', '/services', '/insights']

test.describe('User Story 5: WCAG 2.1 AA Accessibility Verification', () => {
  for (const route of routes) {
    test(`passes WCAG 2.1 AA audit on route "${route}"`, async ({ page }) => {
      await page.goto(route)

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(accessibilityScanResults.violations).toEqual([])
    })
  }

  test('provides skip-to-content navigation link', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toBeAttached()

    // Focus on skip link
    await page.keyboard.press('Tab')
    await expect(skipLink).toBeFocused()
    await expect(skipLink).toBeVisible()
  })
})
