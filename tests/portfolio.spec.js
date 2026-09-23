const { test, expect } = require('@playwright/test')
const routes = require('./fixtures/routes.json')

async function expectTheme(page, isDark) {
  await expect
    .poll(() =>
      page
        .locator('html')
        .evaluate((element) => element.classList.contains('dark'))
    )
    .toBe(isDark)
}

test.beforeEach(async ({ page }) => {
  page.on('pageerror', (error) => {
    throw error
  })
})

for (const route of routes) {
  test(`route and tabs: ${route.path}`, async ({ page }) => {
    const response = await page.goto(route.path, {
      waitUntil: 'domcontentloaded',
    })
    expect(response.status()).toBe(200)
    await expect(page.locator('main')).toHaveCount(1)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.getByRole('tab')).toHaveText(route.tabs)
    if (route.defaultTab) {
      await expect(page.locator('[role=tab][aria-selected=true]')).toHaveText(
        route.defaultTab
      )
    }
    for (const name of route.tabs) {
      await page.getByRole('tab', { name, exact: true }).click()
      await expect(page.getByRole('tabpanel')).toBeVisible()
      await expect(page.locator('[role=tab][aria-selected=true]')).toHaveText(
        name
      )
      await expect(page.locator('main')).toHaveCount(1)
    }
    const missingLabels = await page
      .locator('[aria-labelledby]')
      .evaluateAll((elements) =>
        elements.flatMap((element) =>
          element
            .getAttribute('aria-labelledby')
            .split(/\s+/)
            .filter((id) => !document.getElementById(id))
        )
      )
    expect(missingLabels).toEqual([])
  })
}

test('theme follows system, persists overrides, and survives navigation', async ({
  page,
}, testInfo) => {
  const initiallyDark = testInfo.project.use.colorScheme === 'dark'
  await page.goto('/')
  await expectTheme(page, initiallyDark)
  await page.getByRole('button', { name: 'Toggle dark mode' }).click()
  await page.reload()
  await expectTheme(page, !initiallyDark)
  if (testInfo.project.use.viewport.width < 768)
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
  await page.getByRole('link', { name: 'Portfolio', exact: true }).click()
  await expect(page).toHaveURL('/portfolio')
  await expectTheme(page, !initiallyDark)
  await page.getByRole('button', { name: 'Toggle dark mode' }).click()
  await page.reload()
  await expectTheme(page, initiallyDark)
  expect(
    await page.evaluate(() => localStorage.getItem('isDarkMode'))
  ).toBeNull()
})

test('theme toggle works with unavailable storage', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() =>
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Storage unavailable', 'SecurityError')
      },
    })
  )
  await page.goto('/')
  await page.getByRole('button', { name: 'Toggle dark mode' }).click()
  await expectTheme(page, testInfo.project.use.colorScheme !== 'dark')
})

test('social names and keyboard focus are accessible', async ({ page }) => {
  await page.goto('/')
  for (const name of ['GitHub', 'LinkedIn', 'Email Arif Alim']) {
    await expect(page.getByRole('link', { name, exact: true })).toBeVisible()
  }
  await page.goto('/toolbox')
  await page.keyboard.press('Tab')
  const tool = page.getByRole('link', { name: /Figma connects/ })
  await tool.focus()
  await expect(tool).toBeFocused()
  await expect(tool).toHaveCSS('outline-style', 'solid')
  await page.goto('/portfolio/manulife')
  const selected = page.getByRole('tab', { name: 'Wireframes', exact: true })
  await selected.focus()
  await page.keyboard.press('ArrowRight')
  await expect(
    page.getByRole('tab', { name: 'Design system', exact: true })
  ).toBeFocused()
  await expect(
    page.getByRole('tab', { name: 'Design system', exact: true })
  ).toHaveAttribute('aria-selected', 'true')
})

test('case-study anchors and responsive prototype heights', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await page.getByRole('tab', { name: 'Case Study', exact: true }).click()
  await expect
    .poll(() => page.locator('main nav a').count())
    .toBeGreaterThan(10)
  const anchors = await page
    .locator('main nav a')
    .evaluateAll((links) => links.map((link) => link.getAttribute('href')))
  expect(anchors.length).toBeGreaterThan(10)
  for (const href of anchors) await expect(page.locator(href)).toHaveCount(1)
  if (testInfo.project.use.viewport.width >= 1024) {
    await page
      .getByRole('link', { name: '02. The Problem', exact: true })
      .click()
    await expect(page).toHaveURL(/#problem$/)
    await expect(page.locator('main nav [aria-current=location]')).toHaveCount(
      1
    )
  }
  await page.goto('/portfolio/service-ontario')
  await page.getByRole('tab', { name: 'Prototypes', exact: true }).click()
  const frame = page.locator('iframe')
  await expect(frame).toHaveAttribute(
    'title',
    'ServiceOntario Digital Dealership Registration prototype'
  )
  for (const width of [390, 767, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 })
    await expect(frame).toHaveCSS('height', width < 768 ? '450px' : '1024px')
  }
})

test('unpublished article remains unpublished', async ({ request }) => {
  const response = await request.get('/articles/user-centred-design')
  expect(response.status()).toBe(404)
})
