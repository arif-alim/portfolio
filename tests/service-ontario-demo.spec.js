const { test, expect } = require('@playwright/test')

async function openDemo(page) {
  await page.goto('/portfolio/service-ontario')
  await page.getByRole('tab', { name: 'Interactive Demo', exact: true }).click()
}
const field = (page, label) =>
  page.getByLabel(`${label} (required)`, { exact: true })
const continueButton = (page) =>
  page.getByRole('button', { name: 'Continue', exact: true })

test('conditional registration, validation, review, edits and local submission', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await openDemo(page)
  await expect(
    page.getByText('Illustrative reconstruction', { exact: true })
  ).toBeVisible()
  await continueButton(page).click()
  const summary = page.locator('[aria-labelledby="ddr-errors-heading"]')
  await expect(summary).toBeFocused()
  await expect(field(page, 'Vehicle year')).toHaveAttribute(
    'aria-invalid',
    'true'
  )
  await summary.getByRole('link', { name: /Enter 17/ }).click()
  await expect(field(page, 'Vehicle identification number (VIN)')).toBeFocused()
  await expect(field(page, 'Vehicle identification number (VIN)')).toHaveCSS(
    'outline-style',
    'solid'
  )
  await page.getByLabel('Used vehicle', { exact: true }).check()
  await expect(field(page, 'Previous registration reference')).toBeVisible()
  await expect(field(page, 'Commercial use')).toHaveCount(0)
  await page.getByLabel('Commercial vehicle', { exact: true }).check()
  await expect(field(page, 'Commercial use')).toBeVisible()
  await expect(field(page, 'Previous registration reference')).toHaveCount(0)
  await page.getByLabel('New vehicle', { exact: true }).check()
  await expect(field(page, 'Commercial use')).toHaveCount(0)
  await page.getByRole('button', { name: 'Use fictional sample data' }).click()
  await field(page, 'Vehicle year').fill('1800')
  await continueButton(page).click()
  await expect(page.locator('#ddr-year-error')).toContainText('1900 and 2030')
  await field(page, 'Vehicle year').fill('2025')
  await page.getByLabel('Used vehicle', { exact: true }).check()
  await field(page, 'Previous registration reference').fill('')
  await continueButton(page).click()
  await expect(page.locator('#ddr-previousRegistration-error')).toBeVisible()
  await field(page, 'Previous registration reference').fill('FICTION-101')
  await continueButton(page).click()
  await expect(
    page.getByRole('heading', { name: 'Step 2 — Ownership and eligibility' })
  ).toBeFocused()
  await page.getByLabel('Business', { exact: true }).check()
  await expect(field(page, 'Owner name')).toHaveCount(0)
  await field(page, 'Business name').fill('')
  await field(page, 'Business reference').fill('')
  await page
    .getByLabel('I confirm this record uses fictional information (required)', {
      exact: true,
    })
    .uncheck()
  await continueButton(page).click()
  await expect(summary).toBeFocused()
  await expect(page.locator('#ddr-businessName-error')).toBeVisible()
  await expect(page.locator('#ddr-eligibility-error')).toBeVisible()
  await field(page, 'Business name').fill('Fictional Dealership')
  await field(page, 'Business reference').fill('BIZ-101')
  await page
    .getByLabel('I confirm this record uses fictional information (required)', {
      exact: true,
    })
    .check()
  await continueButton(page).click()
  await expect(
    page.getByRole('heading', { name: 'Step 3 — Review and confirmation' })
  ).toBeFocused()
  await expect(page.locator('dd')).toContainText([
    'Used vehicle',
    'TEST1234567890123',
    '2025',
    'Example Motors',
    'Sample Sedan',
    'FICTION-101',
    'Business',
    'Fictional Dealership',
    'BIZ-101',
  ])
  await page.getByRole('button', { name: 'Edit vehicle details' }).click()
  await expect(field(page, 'Vehicle make')).toHaveValue('Example Motors')
  await field(page, 'Vehicle model').fill('Revised model')
  await continueButton(page).click()
  await page.getByRole('button', { name: 'Back', exact: true }).click()
  await expect(field(page, 'Vehicle model')).toHaveValue('Revised model')
  await continueButton(page).click()
  await continueButton(page).click()
  await page.getByRole('button', { name: 'Edit ownership details' }).click()
  await page.getByLabel('Individual', { exact: true }).check()
  await expect(field(page, 'Business reference')).toHaveCount(0)
  await field(page, 'Owner name').fill('')
  await continueButton(page).click()
  await expect(page.locator('#ddr-ownerName-error')).toBeVisible()
  await field(page, 'Owner name').fill('Jordan Sample')
  await continueButton(page).click()
  await expect(page.locator('dd')).toContainText([
    'Individual',
    'Jordan Sample',
  ])
  await expect(
    page.locator('dd').filter({ hasText: 'Fictional Dealership' })
  ).toHaveCount(0)
  await page.getByRole('button', { name: 'Simulate submission' }).click()
  await expect(page.locator('#ddr-confirmation-error')).toBeVisible()
  await page.screenshot({
    path: `test-results/service-ontario-review-${testInfo.project.name}.png`,
  })
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  const checkbox = page.getByLabel(
    'I have reviewed this demonstration record (required)',
    { exact: true }
  )
  await checkbox.focus()
  await page.keyboard.press('Space')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('button', { name: 'Back', exact: true })
  ).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('button', { name: 'Simulate submission' })
  ).toBeFocused()
  const submissions = []
  page.on('request', (request) => {
    if (request.method() !== 'GET') submissions.push(request.url())
  })
  await page.keyboard.press('Enter')
  await expect(
    page.getByRole('heading', { name: 'Demonstration complete', exact: true })
  ).toBeFocused()
  await expect(page.getByRole('status')).toContainText(
    'Nothing was sent or saved'
  )
  expect(submissions).toEqual([])
  await page.getByRole('button', { name: 'Start a new demonstration' }).click()
  await expect(field(page, 'Vehicle make')).toHaveValue('')
  expect(errors).toEqual([])
})

test('commercial route, keyboard category selection and form layout', async ({
  page,
}, testInfo) => {
  await openDemo(page)
  const category = page.getByLabel('New vehicle', { exact: true })
  await category.focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.getByLabel('Used vehicle', { exact: true })).toBeChecked()
  await page.keyboard.press('ArrowRight')
  await expect(
    page.getByLabel('Commercial vehicle', { exact: true })
  ).toBeChecked()
  await page.getByRole('button', { name: 'Use fictional sample data' }).click()
  await field(page, 'Commercial use').fill('')
  await continueButton(page).click()
  await expect(page.locator('#ddr-commercialUse-error')).toBeVisible()
  await field(page, 'Commercial use').fill('Fictional delivery service')
  await continueButton(page).click()
  await continueButton(page).click()
  await expect(page.locator('dd')).toContainText([
    'Commercial vehicle',
    'Fictional delivery service',
  ])
  await page.getByRole('button', { name: 'Edit vehicle details' }).click()
  await expect(
    page.getByLabel('Commercial vehicle', { exact: true })
  ).toBeChecked()
  const missing = await page
    .locator('[aria-describedby]')
    .evaluateAll((elements) =>
      elements.flatMap((e) =>
        e
          .getAttribute('aria-describedby')
          .split(/\s+/)
          .filter((id) => !document.getElementById(id))
      )
    )
  expect(missing).toEqual([])
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  await page.screenshot({
    path: `test-results/service-ontario-form-${testInfo.project.name}.png`,
  })
})
