const { test, expect } = require('@playwright/test')

test('portfolio tabs separate pointer selection from unclipped keyboard focus', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  const tabs = page.getByRole('tab')
  const process = page.getByRole('tab', { name: 'Design Process', exact: true })
  await process.click()
  await expect(process).toHaveAttribute('aria-selected', 'true')
  await expect(process).toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)')
  await expect(process).toHaveCSS('border-bottom-width', '2px')
  await expect(process).toHaveCSS('border-left-width', '0px')
  await expect(process).toHaveCSS('border-right-width', '0px')
  const heights = await tabs.evaluateAll((elements) =>
    elements.map((e) => e.getBoundingClientRect().height)
  )
  expect(new Set(heights).size).toBe(1)
  expect(heights[0]).toBeGreaterThanOrEqual(44)
  await page.keyboard.press('Home')
  for (let i = 0; i < 4; i++) {
    const tab = tabs.nth(i)
    await expect(tab).toBeFocused()
    await expect(tab).toHaveAttribute('aria-selected', 'true')
    await expect(tab).toHaveCSS('outline-style', 'solid')
    await expect(tab).toHaveCSS('outline-width', '2px')
    await expect(tab).toHaveCSS('outline-offset', '-6px')
    await expect(tab).not.toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)')
    const focusVisibleInsideScroller = await tab.evaluate((e) => {
      const bounds = e.getBoundingClientRect()
      const scroller =
        e.parentElement.parentElement.parentElement.getBoundingClientRect()
      const clip =
        e.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect()
      // A 2px ring offset 6px inward stays within the tab's box and scroll clip.
      return (
        bounds.left + 4 >= Math.max(scroller.left, clip.left) &&
        bounds.right - 4 <= Math.min(scroller.right, clip.right) &&
        bounds.top + 4 >= scroller.top &&
        bounds.bottom - 4 <= scroller.bottom
      )
    })
    expect(focusVisibleInsideScroller).toBe(true)
    if (i < 3) await page.keyboard.press('ArrowRight')
  }
  await page.screenshot({ path: testInfo.outputPath('tabs-keyboard.png') })
  // Clicking the already-focused tab must also return to pointer styling.
  await tabs.last().click()
  await expect(tabs.last()).toHaveCSS('outline-color', 'rgba(0, 0, 0, 0)')
  await page.screenshot({ path: testInfo.outputPath('tabs-pointer.png') })
})

test('compact frame controls keep states and a single row at narrow widths', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await page
    .getByRole('tab', { name: 'Design Explorations', exact: true })
    .click()
  const group = page.getByRole('region', {
    name: 'Member termination',
    exact: true,
  })
  const previous = group.getByRole('button', {
    name: 'Previous frame',
    exact: true,
  })
  const next = group.getByRole('button', { name: 'Next frame', exact: true })
  await expect(previous).toBeDisabled()
  await expect(previous).toHaveCSS('opacity', '0.45')
  await expect(group.getByRole('status')).toHaveText('Frame 1 of 5')
  await expect(next).toHaveCSS('height', '32px')
  await expect(previous).toHaveCSS('height', '32px')
  await next.hover()
  const dark = testInfo.project.use.colorScheme === 'dark'
  await expect(next).toHaveCSS(
    'background-color',
    dark ? 'rgb(39, 39, 42)' : 'rgb(244, 244, 245)'
  )
  await page.mouse.down()
  await expect(next).toHaveCSS(
    'background-color',
    dark ? 'rgb(63, 63, 70)' : 'rgb(228, 228, 231)'
  )
  await page.mouse.up()
  await expect(group.getByRole('status')).toHaveText('Frame 2 of 5')
  await previous.focus()
  await page.keyboard.press('Enter')
  await expect(group.getByRole('status')).toHaveText('Frame 1 of 5')
  await next.focus()
  await page.keyboard.press('Space')
  await expect(next).toHaveCSS('outline-style', 'solid')
  await expect(group.getByRole('status')).toHaveText('Frame 2 of 5')
  const aligned = async () => {
    const boxes = await Promise.all([
      previous.boundingBox(),
      group.getByRole('status').boundingBox(),
      next.boundingBox(),
    ])
    expect(Math.abs(boxes[0].y - boxes[2].y)).toBeLessThan(1)
    expect(boxes[0].x + boxes[0].width).toBeLessThan(boxes[1].x)
    expect(boxes[1].x + boxes[1].width).toBeLessThan(boxes[2].x)
  }
  await aligned()
  await group.scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('compact-gallery.png') })
  await page.setViewportSize({ width: 320, height: 900 })
  await aligned()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  await group.getByRole('button', { name: /^Enlarge/ }).click()
  const dialog = page.getByRole('dialog')
  const controls = dialog.getByRole('button', {
    name: 'Next frame',
    exact: true,
  })
  await expect(controls).toHaveCSS('height', '32px')
  await controls.click()
  await expect(dialog.getByRole('status')).toHaveText('Frame 3 of 5')
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
})
