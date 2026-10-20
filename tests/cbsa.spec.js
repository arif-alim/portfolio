const { test, expect } = require('@playwright/test')
const sections = ['Overview', 'Design Process', 'Interactive Demo']

test('CBSA narrative and keyboard sections respect disclosure boundaries', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/portfolio/cbsa')
  await expect(page.getByRole('tab')).toHaveText(sections)
  await expect(
    page.getByRole('tab', { name: 'Design Explorations', exact: true })
  ).toHaveCount(0)
  await expect(page.getByRole('tabpanel')).toContainText('Lead UX Designer')
  await expect(page.getByRole('tabpanel')).toContainText('Figma and Miro')
  await expect(page.getByRole('tabpanel')).toContainText(
    'Original designs, research details and system information remain confidential'
  )
  await expect(page.getByRole('tabpanel')).not.toContainText('Project Epsilon')
  await page.getByRole('tab', { name: 'Overview', exact: true }).focus()
  await page.keyboard.press('Home')
  for (let i = 0; i < sections.length; i++) {
    if (i) await page.keyboard.press('ArrowRight')
    const tab = page.getByRole('tab', { name: sections[i], exact: true })
    await expect(tab).toBeFocused()
    await expect(tab).toHaveAttribute('aria-selected', 'true')
    await expect(tab).toHaveCSS('outline-style', 'solid')
    expect(
      await tab.evaluate((el) => getComputedStyle(el).outlineColor)
    ).not.toBe('rgba(0, 0, 0, 0)')
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true)
    await page.evaluate(() => scrollTo(0, 0))
    await page.screenshot({
      path: testInfo.outputPath(`${sections[i].replace(/ /g, '-')}.png`),
    })
  }
  await expect(page.getByRole('tabpanel')).toContainText(
    'not a CBSA process, policy or system'
  )
  expect(errors).toEqual([])
})

test('fictional service blueprint exposes decision branches, dependencies and reset', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/cbsa')
  await page.getByRole('tab', { name: 'Interactive Demo', exact: true }).click()
  const stages = page.getByRole('navigation', { name: 'Blueprint stages' })
  const next = page.getByRole('button', { name: 'Next stage', exact: true })
  const previous = page.getByRole('button', {
    name: 'Previous stage',
    exact: true,
  })
  const details = page.getByRole('checkbox', {
    name: 'Sample request has complete details',
  })
  const status = page.getByRole('status')
  await expect(previous).toBeDisabled()
  await expect(
    stages.getByRole('button', { name: '1. Prepare' })
  ).toHaveAttribute('aria-pressed', 'true')
  await next.click()
  await expect(status).toHaveText('Request · Ready to continue')
  await details.focus()
  await page.keyboard.press('Space')
  await expect(details).not.toBeChecked()
  await next.focus()
  await page.keyboard.press('Enter')
  await expect(status).toHaveText('Review · More information needed')
  await expect(next).toBeDisabled()
  await expect(page.locator('#cbsa-stage-detail')).toContainText(
    'review queue paused'
  )
  const returnButton = page.getByRole('button', {
    name: 'Return to Request',
    exact: true,
  })
  await returnButton.focus()
  await page.keyboard.press('Enter')
  await expect(stages.getByRole('button', { name: '2. Request' })).toBeFocused()
  await expect(status).toHaveText('Request · Ready to continue')
  await details.check()
  await next.click()
  await expect(status).toHaveText('Review · Ready to continue')
  await expect(page.locator('#cbsa-stage-detail')).toContainText(
    'Mock review queue'
  )
  await expect(next).toBeEnabled()
  await page.screenshot({ path: testInfo.outputPath('Review-decision.png') })
  const outbound = []
  page.on('request', (request) => outbound.push(request.url()))
  await next.click()
  await expect(status).toHaveText('Response · Example complete')
  await expect(next).toBeDisabled()
  await previous.click()
  await expect(status).toHaveText('Review · Ready to continue')
  const reset = page.getByRole('button', { name: 'Reset example' })
  await reset.focus()
  await page.keyboard.press('Space')
  await expect(status).toHaveText('Prepare · Ready to continue')
  await expect(details).toBeChecked()
  await expect(previous).toBeDisabled()
  await page
    .getByText('How a repeated card supports the blueprint', { exact: true })
    .click()
  await expect(
    page.getByText('Each selected stage renders', { exact: false })
  ).toBeVisible()
  expect(outbound).toEqual([])
  await details.uncheck()
  await page.getByRole('tab', { name: 'Overview', exact: true }).click()
  await page.getByRole('tab', { name: 'Interactive Demo', exact: true }).click()
  await expect(details).toBeChecked()
  await expect(status).toHaveText('Prepare · Ready to continue')
  const controls = stages.getByRole('button')
  for (let i = 0; i < 4; i++) {
    await controls.nth(i).focus()
    await page.keyboard.press('Enter')
    await expect(controls.nth(i)).toHaveAttribute('aria-pressed', 'true')
    await expect(controls.nth(i)).toBeFocused()
    expect(
      await controls.nth(i).evaluate((el) => el.getBoundingClientRect().height)
    ).toBeGreaterThanOrEqual(44)
  }
  await page.setViewportSize({ width: 320, height: 900 })
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  await page.screenshot({ path: testInfo.outputPath('Narrow-blueprint.png') })
})
