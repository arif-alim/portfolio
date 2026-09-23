const { test, expect } = require('@playwright/test')

const projects = [
  ['Manulife', '/portfolio/manulife'],
  ['ServiceOntario', '/portfolio/service-ontario'],
  ['Bombardier', '/portfolio/bombardier'],
]

test('original homepage with compact featured work', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('About - Arif Alim')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Hi, I’m Arif Alim.'
  )
  await expect(
    page.getByRole('heading', { name: 'About Me', exact: true })
  ).toBeVisible()
  await expect(page.locator('main img')).toHaveCount(1)
  await expect(
    page.getByRole('img', { name: 'Portrait of Arif Alim' })
  ).toBeVisible()
  const featured = page.getByRole('region', { name: 'Featured Work' })
  await expect(featured.getByRole('heading', { level: 3 })).toHaveText(
    projects.map(([company]) => company + '→')
  )
  await expect(featured.getByRole('listitem')).toHaveCount(3)
  await expect(featured.getByRole('img')).toHaveCount(0)
  await expect(featured).toContainText('Plan Administrator Portal')
  await expect(featured).toContainText('Digital Dealership Registration')
  await expect(featured).toContainText('mySmartRouter & myPrinciple')
  await expect(page.locator('main')).not.toContainText(
    /TD Insurance|Billing & Claims|Design through implementation|About Arif|Working on a complex product/
  )
  await expect(
    page.getByRole('link', { name: 'Email Arif Alim', exact: true })
  ).toHaveAttribute('href', 'mailto:arif.alim@outlook.com')
  await expect(
    page.getByRole('link', { name: 'LinkedIn', exact: true })
  ).toHaveAttribute('href', 'https://www.linkedin.com/in/arifalim/')
  await expect(
    page.getByRole('link', { name: 'GitHub', exact: true })
  ).toHaveAttribute('href', 'https://github.com/arif-alim')
})

test('featured projects and portfolio link support keyboard navigation', async ({
  page,
}, testInfo) => {
  for (const [name, href] of [
    ...projects,
    ['View all projects', '/portfolio'],
  ]) {
    await page.goto('/')
    const link = page
      .getByRole('region', { name: 'Featured Work' })
      .getByRole('link', { name: new RegExp(`^${name}(?::|$)`) })
    await expect(link).toHaveAttribute('href', href)
    await link.focus()
    await page.keyboard.press('Tab')
    await page.keyboard.press('Shift+Tab')
    await expect(link).toBeFocused()
    await expect(link).toHaveCSS('outline-style', 'solid')
    await expect(link).toHaveCSS('outline-width', '2px')
    if (href !== '/portfolio') {
      await expect(link).toHaveCSS(
        'border-color',
        testInfo.project.use.colorScheme === 'dark'
          ? 'rgb(113, 113, 122)'
          : 'rgb(161, 161, 170)'
      )
    }
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(href)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  }
})

test('homepage retains portrait layout, responsive featured list, and themes', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    // Vercel's production-only endpoint is absent from the local Next server.
    if (
      message.type() === 'error' &&
      !message.location().url.includes('/_vercel/insights/script.js')
    )
      errors.push(message.text())
  })
  await page.goto('/')
  await expect
    .poll(() =>
      page.locator('html').evaluate((el) => el.classList.contains('dark'))
    )
    .toBe(testInfo.project.use.colorScheme === 'dark')
  const portrait = page.getByRole('img', { name: 'Portrait of Arif Alim' })
  await expect
    .poll(() =>
      portrait.evaluate((img) => img.complete && img.naturalWidth > 0)
    )
    .toBe(true)
  const portraitBox = await portrait.boundingBox()
  const aboutBox = await page
    .getByRole('heading', { name: 'About Me', exact: true })
    .boundingBox()
  if (testInfo.project.use.viewport.width >= 1024) {
    expect(portraitBox.x).toBeGreaterThan(aboutBox.x + aboutBox.width)
  } else {
    expect(portraitBox.y + portraitBox.height).toBeLessThan(aboutBox.y)
  }
  const featured = page.getByRole('region', { name: 'Featured Work' })
  const featuredBox = await featured.boundingBox()
  expect(featuredBox.y).toBeGreaterThan(aboutBox.y + aboutBox.height)
  const boxes = await featured.getByRole('listitem').evaluateAll((items) =>
    items.map((item) => {
      const { x, y, width, height } = item.getBoundingClientRect()
      return { x, y, width, height }
    })
  )
  expect(
    Math.max(...boxes.map((box) => box.width)) -
      Math.min(...boxes.map((box) => box.width))
  ).toBeLessThan(1)
  if (testInfo.project.use.viewport.width >= 1024) {
    expect(new Set(boxes.map((box) => box.y)).size).toBe(1)
    expect(boxes[1].x).toBeGreaterThan(boxes[0].x)
    expect(boxes[2].x).toBeGreaterThan(boxes[1].x)
    expect(featuredBox.height).toBeLessThan(320)
  } else if (testInfo.project.use.viewport.width >= 640) {
    expect(boxes[0].y).toBe(boxes[1].y)
    expect(boxes[1].x).toBeGreaterThan(boxes[0].x)
    expect(boxes[2].x).toBe(boxes[0].x)
    expect(boxes[2].y).toBeGreaterThan(boxes[0].y + boxes[0].height)
  } else {
    expect(new Set(boxes.map((box) => box.x)).size).toBe(1)
    expect(boxes[1].y).toBeGreaterThan(boxes[0].y + boxes[0].height)
    expect(boxes[2].y).toBeGreaterThan(boxes[1].y + boxes[1].height)
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  expect(errors).toEqual([])
})

test('featured cards have accessible names, hover feedback, and clickable padding', async ({
  page,
}, testInfo) => {
  const projectNames = [
    'Plan Administrator Portal',
    'Digital Dealership Registration',
    'mySmartRouter & myPrinciple',
  ]
  for (const [index, [company, href]] of projects.entries()) {
    await page.goto('/')
    const card = page
      .getByRole('region', { name: 'Featured Work' })
      .getByRole('link', {
        name: `${company}: ${projectNames[index]}`,
        exact: true,
      })
    await expect(
      card.getByRole('heading', { name: company, exact: true })
    ).toBeVisible()
    await card.hover()
    await expect(card).toHaveCSS(
      'border-color',
      testInfo.project.use.colorScheme === 'dark'
        ? 'rgb(113, 113, 122)'
        : 'rgb(161, 161, 170)'
    )
    await expect(card).toHaveCSS('border-width', '1px')
    await expect(card).toHaveCSS('transform', 'none')
    const box = await card.boundingBox()
    // Click empty padding at the lower-right edge, outside the text.
    await card.click({ position: { x: box.width - 8, y: box.height - 8 } })
    await expect(page).toHaveURL(href)
  }
})
