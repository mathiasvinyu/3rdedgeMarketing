import { test, expect } from '@playwright/test'

test.describe('User Story 4: Insights Editorial Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/insights')
  })

  test('displays Insights archive title and notes from the work subhead', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toContainText('Insights')

    const main = page.locator('main')
    await expect(main).toContainText('Notes from the work')
  })

  test('renders pragmatic insight articles', async ({ page }) => {
    const articles = page.locator('article')
    const count = await articles.count()
    expect(count).toBeGreaterThan(0)
  })

  test('navigates to individual insight detail page', async ({ page }) => {
    const firstArticleLink = page.locator('article a').first()
    await firstArticleLink.click()

    await expect(page).toHaveURL(/\/insights\/.+/)
    const detailHeading = page.locator('h1')
    await expect(detailHeading).toBeVisible()

    const backLink = page.getByRole('link', { name: /all insights/i })
    await expect(backLink).toBeVisible()
  })
})
