const { test, expect } = require('@playwright/test')

const stages = {
  'UI/UX Design': [
    'Frame the Problem',
    'Understand Users & Workflows',
    'Structure the Experience',
    'Prototype & Validate',
    'Design & Deliver',
    'Measure & Iterate',
  ],
  'Service Design': [
    'Define the Service',
    'Research the Experience',
    'Map the Current State',
    'Co-design the Future State',
    'Prototype the Service',
    'Deliver & Improve',
  ],
  Accessibility: [
    'Define Accessibility Needs',
    'Design Inclusively',
    'Specify Accessible Behaviour',
    'Validate Implementation',
    'Test the Experience',
    'Remediate & Improve',
  ],
  'Frontend Development': [
    'Clarify Intent & Constraints',
    'Plan Components',
    'Build the Interface',
    'Connect Data & Behaviour',
    'Test & Optimize',
    'Release & Iterate',
  ],
}

async function expectSelected(page, name) {
  const tab = page.getByRole('tab', { name, exact: true })
  await expect(tab).toBeFocused()
  await expect(tab).toHaveAttribute('aria-selected', 'true')
  await expect(page.getByRole('tabpanel')).toHaveAccessibleName(name)
}

test('process direct route, metadata, and all four six-stage panels', async ({
  page,
}, testInfo) => {
  const appErrors = []
  page.on('pageerror', (error) => appErrors.push(error.message))
  page.on('console', (message) => {
    // Vercel's production-only endpoint is absent from the local Next server.
    if (
      message.type() === 'error' &&
      !message.location().url.includes('/_vercel/insights/script.js')
    ) {
      appErrors.push(message.text())
    }
  })
  const response = await page.goto('/process')
  expect(response.status()).toBe(200)
  await expect(page).toHaveTitle('Process | Arif Alim')
  await expect(page.locator('meta[name=description]')).toHaveAttribute(
    'content',
    'How I approach product design, service design, accessibility, and frontend implementation—from understanding the problem to validating and improving the experience.'
  )
  await expect(page.getByRole('tablist')).toHaveAccessibleName(
    'Design and delivery processes'
  )
  await expect(page.getByRole('tab')).toHaveText(Object.keys(stages))
  await expect(
    page.getByRole('tab', { name: 'UI/UX Design', exact: true })
  ).toHaveAttribute('aria-selected', 'true')
  expect(
    await page.locator('html').evaluate((el) => el.classList.contains('dark'))
  ).toBe(testInfo.project.use.colorScheme === 'dark')

  let navigations = 0
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) navigations += 1
  })
  for (const [name, headings] of Object.entries(stages)) {
    await page.getByRole('tab', { name, exact: true }).click()
    await expectSelected(page, name)
    const panel = page.getByRole('tabpanel')
    await expect(panel.getByRole('heading', { level: 3 })).toHaveText(headings)
    await expect(panel.locator('ol > li')).toHaveCount(6)
    await expect(
      panel.getByText('Key activities:', { exact: true })
    ).toHaveCount(6)
    for (let step = 1; step <= 6; step += 1) {
      await expect(
        panel.getByText(`Step ${step}`, { exact: true })
      ).toBeVisible()
    }
    const tab = page.getByRole('tab', { name, exact: true })
    await expect(panel).toHaveAttribute(
      'id',
      await tab.getAttribute('aria-controls')
    )
    await expect(panel).toHaveAttribute(
      'aria-labelledby',
      await tab.getAttribute('id')
    )
    await expect(page.locator('main')).not.toContainText(
      /Stanford|IDEO|ArcGIS|OPS|guarantees/
    )
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true)
  }
  expect(navigations).toBe(0)
  expect(appErrors).toEqual([])
})

test('icon-free timelines keep aligned cards and comfortable gutters in every tab', async ({
  page,
}, testInfo) => {
  await page.goto('/process')
  const isDark = testInfo.project.use.colorScheme === 'dark'
  const expectedGutter = testInfo.project.use.viewport.width < 640 ? 16 : 24
  const alignments = []

  for (const [index, name] of Object.keys(stages).entries()) {
    await page.getByRole('tab', { name, exact: true }).click()
    const panel = page.getByRole('tabpanel')
    const timeline = panel.locator('ol')
    const cards = timeline.locator(':scope > li > div')

    await expect(cards).toHaveCount(6)
    await expect(panel.locator('img, svg, picture')).toHaveCount(0)
    await expect(timeline.locator(':scope > li > span')).toHaveCount(0)
    await expect(timeline).toHaveCSS('border-left-width', '1px')
    await expect(timeline).toHaveCSS('border-left-style', 'solid')
    await expect(timeline).toHaveCSS(
      'border-left-color',
      isDark ? 'rgb(55, 65, 81)' : 'rgb(229, 231, 235)'
    )

    const geometry = await timeline.evaluate((list) => {
      const line = list.getBoundingClientRect()
      const panel = list.closest('[role=tabpanel]').getBoundingClientRect()
      return {
        left: line.left,
        top: line.top,
        bottom: line.bottom,
        panelLeft: panel.left,
        panelRight: panel.right,
        border: parseFloat(getComputedStyle(list).borderLeftWidth),
        cards: [...list.children].map((step) => {
          const card = step.firstElementChild
          const box = card.getBoundingClientRect()
          return {
            left: box.left,
            right: box.right,
            top: box.top,
            bottom: box.bottom,
            childCount: step.children.length,
            background: getComputedStyle(card).backgroundColor,
          }
        }),
      }
    })

    expect(geometry.left).toBeCloseTo(geometry.panelLeft, 1)
    expect(geometry.top).toBeCloseTo(geometry.cards[0].top, 1)
    expect(geometry.bottom).toBeGreaterThanOrEqual(geometry.cards[5].bottom)
    for (const [step, card] of geometry.cards.entries()) {
      expect(card.childCount).toBe(1)
      expect(card.left - geometry.left - geometry.border).toBe(expectedGutter)
      expect(card.right).toBeCloseTo(geometry.panelRight, 1)
      expect(card.left).toBeGreaterThanOrEqual(32)
      expect(card.right).toBeLessThanOrEqual(
        testInfo.project.use.viewport.width - 16
      )
      expect(card.background).toBe(
        isDark ? 'rgb(39, 39, 42)' : 'rgb(255, 255, 255)'
      )
      if (step > 0) {
        expect(card.top - geometry.cards[step - 1].bottom).toBe(40)
      }
    }
    alignments.push([geometry.left, geometry.cards[0].left])
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true)
    // Capture real viewports: the site's fixed theme background only paints
    // one viewport in a stitched full-page screenshot.
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({
      path: testInfo.outputPath(`process-tab-${index + 1}-top.png`),
    })
    await cards.last().scrollIntoViewIfNeeded()
    await expect(cards.last()).toBeInViewport()
    await page.screenshot({
      path: testInfo.outputPath(`process-tab-${index + 1}-last-step.png`),
    })
  }
  expect(alignments.every((value) => value[0] === alignments[0][0])).toBe(true)
  expect(alignments.every((value) => value[1] === alignments[0][1])).toBe(true)
})

test('process keyboard activation, wrapping, focus, and panel entry', async ({
  page,
}) => {
  await page.goto('/process')
  const first = page.getByRole('tab', { name: 'UI/UX Design', exact: true })
  await first.focus()
  for (const [key, name] of [
    ['ArrowRight', 'Service Design'],
    ['ArrowRight', 'Accessibility'],
    ['ArrowLeft', 'Service Design'],
    ['End', 'Frontend Development'],
    ['ArrowRight', 'UI/UX Design'],
    ['ArrowLeft', 'Frontend Development'],
    ['Home', 'UI/UX Design'],
  ]) {
    await page.keyboard.press(key)
    await expectSelected(page, name)
    const selected = page.getByRole('tab', { name, exact: true })
    await expect(selected).toHaveCSS('outline-style', 'solid')
    await expect(selected).toHaveCSS('outline-width', '2px')
    await expect(selected).toHaveCSS('outline-offset', '-3px')
  }
  await page.keyboard.press('Tab')
  await expect(page.getByRole('tabpanel')).toBeFocused()
  await expect(page.getByRole('tabpanel')).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('Shift+Tab')
  await expect(first).toBeFocused()
})

test('process tabs stay on one row and scroll the selected tab into view', async ({
  page,
}, testInfo) => {
  await page.goto('/process')
  const first = page.getByRole('tab', { name: 'UI/UX Design', exact: true })
  await first.focus()
  await page.keyboard.press('End')
  const last = page.getByRole('tab', {
    name: 'Frontend Development',
    exact: true,
  })
  await expectSelected(page, 'Frontend Development')
  const row = await page.getByRole('tab').evaluateAll((tabs) =>
    tabs.map((tab) => {
      const box = tab.getBoundingClientRect()
      return {
        top: box.top,
        height: box.height,
        whiteSpace: getComputedStyle(tab).whiteSpace,
      }
    })
  )
  expect(new Set(row.map((tab) => tab.top)).size).toBe(1)
  expect(
    row.every((tab) => tab.height >= 44 && tab.whiteSpace === 'nowrap')
  ).toBe(true)
  async function expectFullyVisible(tab) {
    await expect
      .poll(() =>
        tab.evaluate((el) => {
          const rect = el.getBoundingClientRect()
          const clip = el
            .closest('[role=tablist]')
            .parentElement.parentElement.parentElement.getBoundingClientRect()
          return (
            rect.left >= Math.max(0, clip.left) - 1 &&
            rect.right <= Math.min(innerWidth, clip.right) + 1
          )
        })
      )
      .toBe(true)
  }
  await expectFullyVisible(last)
  if (testInfo.project.use.viewport.width === 390) {
    expect(
      await last.evaluate(
        (el) =>
          el.closest('[role=tablist]').parentElement.parentElement.scrollLeft
      )
    ).toBeGreaterThan(0)
  }
  await page.keyboard.press('Home')
  await expectFullyVisible(first)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
})
