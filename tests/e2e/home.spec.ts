import { test, expect } from '@playwright/test'

test.describe('User Story 1: Home Page & Credibility Narrative', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('displays primary hero headline and action button', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toContainText('We Build Things That Work')

    const cta = page.getByRole('button', { name: /start a conversation/i }).first()
    await expect(cta).toBeVisible()
  })

  test('opens contact modal when hero CTA is clicked', async ({ page }) => {
    const cta = page.getByRole('button', { name: /start a conversation/i }).first()
    await cta.click()

    const dialog = page.getByRole('dialog', { name: /start a conversation/i })
    await expect(dialog).toBeVisible()

    const nameInput = page.getByLabel(/your name/i)
    await expect(nameInput).toBeVisible()
  })

  test('displays the quiet failures diagnosis narrative', async ({ page }) => {
    const diagnosisSection = page.locator('section#diagnosis')
    await expect(diagnosisSection).toBeVisible()
    await expect(diagnosisSection).toContainText(/The Quiet Failures|fail quietly/i)
  })

  test('displays how we work process narrative', async ({ page }) => {
    const processSection = page.locator('section#process')
    await expect(processSection).toBeVisible()
    await expect(processSection).toContainText('How We Work')
  })

  test('displays verified case study results', async ({ page }) => {
    const caseStudies = page.locator('section#case-studies')
    await expect(caseStudies).toBeVisible()
  })

  test('renders closing CTA with direct email and contact trigger', async ({ page }) => {
    const closingCta = page.locator('section#closing-cta')
    await expect(closingCta).toBeVisible()
    await expect(closingCta).toContainText('hello@3rdedge.co.za')
  })
})
