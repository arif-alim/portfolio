const { test, expect } = require('@playwright/test')
const sections = [
  'Overview',
  'Design Process',
  'Design Explorations',
  'Interactive Demo',
]

test('ServiceOntario sections preserve evidence, links and responsive hierarchy', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/portfolio/service-ontario')
  await expect(page.getByRole('tab')).toHaveText(sections)
  const first = page.getByRole('tab', { name: 'Overview', exact: true })
  await expect(first).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel')).toContainText('Senior UI Architect')
  await expect(
    page.getByRole('link', { name: 'Digital Dealership Registration program' })
  ).toHaveAttribute(
    'href',
    'https://www.ontario.ca/page/digital-dealership-registration-program'
  )
  await first.focus()
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
  await page
    .getByRole('tab', { name: 'Design Explorations', exact: true })
    .click()
  await expect(
    page.getByRole('button', { name: /^Enlarge Service Ontario screen / })
  ).toHaveCount(18)
  for (const [name, href] of [
    ['View web prototype', 'https://ddr-demo.vercel.app/'],
    [
      'View clickable prototype',
      'https://www.figma.com/proto/ZstoHuYqSWOp5f5On03TAD/Design---Truth-Clickable?page-id=0%3A1&node-id=47-28658&starting-point-node-id=47%3A28004',
    ],
  ])
    await expect(page.getByRole('link', { name, exact: true })).toHaveAttribute(
      'href',
      href
    )
  await expect(page.locator('iframe')).toHaveAttribute(
    'title',
    'ServiceOntario Digital Dealership Registration prototype'
  )
  expect(errors).toEqual([])
})

test('original screen groups support accessible viewer navigation and source access', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/service-ontario')
  await page
    .getByRole('tab', { name: 'Design Explorations', exact: true })
    .click()
  const opener = page.getByRole('button', {
    name: 'Enlarge Service Ontario screen 1',
    exact: true,
  })
  await opener.focus()
  await page.keyboard.press('Enter')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveAccessibleName('Service Ontario screen 1')
  await expect(
    dialog.getByRole('button', { name: 'Previous frame' })
  ).toBeDisabled()
  await dialog.getByRole('button', { name: 'Next frame' }).click()
  await expect(dialog).toHaveAccessibleName('Service Ontario screen 5')
  await page.keyboard.press('ArrowRight')
  await expect(dialog).toHaveAccessibleName('Service Ontario screen 9')
  await expect(dialog.getByRole('status')).toHaveText('Frame 3 of 6')
  await expect(dialog.getByRole('button', { name: 'Next frame' })).toHaveCSS(
    'height',
    '32px'
  )
  await dialog.getByRole('button', { name: 'View at original scale' }).click()
  await expect(
    dialog.getByRole('button', { name: 'Fit to viewport' })
  ).toHaveAttribute('aria-pressed', 'true')
  await expect(
    dialog.getByRole('link', { name: 'Open full-resolution source' })
  ).toHaveAttribute('href', /ddr9/)
  await page.screenshot({ path: testInfo.outputPath('original-viewer.png') })
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(opener).toBeFocused()
})
