const { test, expect } = require('@playwright/test')

test('design systems discovery, token tracing and component contract', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/portfolio')
  await page.getByRole('link', { name: /Design Systems Engineering/ }).click()
  await expect(page).toHaveURL('/portfolio/design-systems')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Design Systems Engineering & AI-Ready Component Architecture'
  )
  await expect(page.locator('html')).toHaveClass(
    testInfo.project.use.colorScheme === 'dark' ? /dark/ : /^((?!dark).)*$/
  )
  const token = page.getByRole('button', {
    name: /color.action.secondary/,
  })
  await token.focus()
  await page.keyboard.press('Enter')
  await expect(token).toHaveAttribute('aria-pressed', 'true')
  await expect(token).toHaveCSS('outline-style', 'solid')
  await expect(page.getByRole('status').first()).toContainText(
    'Resolved background: #334155'
  )
  await page.getByLabel('Variant', { exact: true }).selectOption('secondary')
  await page.getByLabel('Size', { exact: true }).selectOption('large')
  const button = page.getByRole('button', { name: 'Save changes' })
  await expect(button).toHaveCSS('background-color', 'rgb(51, 65, 85)')
  await expect(button).toHaveAttribute('data-size', 'large')
  await button.focus()
  await page.keyboard.press('Space')
  await expect(page.getByRole('status').last()).toContainText(
    'Successful activations: 1'
  )
  await page.getByLabel('Loading', { exact: true }).check()
  await expect(button).toHaveAttribute('aria-busy', 'true')
  await button.click()
  await expect(page.getByRole('status').last()).toContainText(
    'Successful activations: 1'
  )
  await page.getByLabel('Disabled', { exact: true }).check()
  await expect(button).toBeDisabled()
  await page.getByLabel('Loading', { exact: true }).uncheck()
  await page.getByLabel('Disabled', { exact: true }).uncheck()
  for (const size of ['small', 'medium', 'large']) {
    await page.getByLabel('Size', { exact: true }).selectOption(size)
    expect((await button.boundingBox()).height).toBeGreaterThanOrEqual(44)
  }
  await page.getByLabel('Variant', { exact: true }).selectOption('primary')
  await expect(button).toHaveCSS('background-color', 'rgb(37, 99, 235)')
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  for (const href of await page
    .locator('nav[aria-label="Case study sections"] a')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href')))) {
    await expect(page.locator(href)).toHaveCount(1)
  }
  await page.locator('#section-4').scrollIntoViewIfNeeded()
  await page.screenshot({
    path: `test-results/design-systems-${testInfo.project.name}.png`,
    fullPage: false,
  })
  expect(errors).toEqual([])
})
