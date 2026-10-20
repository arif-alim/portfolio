const { test, expect } = require('@playwright/test')

test('overview metadata has one divider before narrative content', async ({
  page,
}, testInfo) => {
  for (const project of ['cbsa', 'manulife', 'service-ontario']) {
    await page.goto(`/portfolio/${project}`)
    const article = page.getByRole('tabpanel').locator('article')
    const metadata = article.locator('header > dl')
    const firstSection = article.locator('section').first()
    await expect(metadata).toHaveCSS('border-bottom-width', '1px')
    await expect(firstSection).toHaveCSS('border-top-width', '0px')
    const gap = await firstSection.evaluate((el) => {
      const metadata = el.closest('article').querySelector('header > dl')
      return (
        el.getBoundingClientRect().top - metadata.getBoundingClientRect().bottom
      )
    })
    expect(gap).toBeGreaterThanOrEqual(24)
    expect(gap).toBeLessThanOrEqual(28)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true)
    await metadata.scrollIntoViewIfNeeded()
    await page.screenshot({
      path: testInfo.outputPath(`${project}-divider.png`),
    })
    if (project === 'cbsa') {
      await expect(firstSection).toHaveCSS('padding-top', '0px')
      const sections = article.locator('[aria-labelledby^="cbsa-"]')
      for (let i = 1; i < 4; i++) {
        await expect(sections.nth(i)).toHaveCSS('border-top-width', '1px')
        await expect(sections.nth(i)).toHaveCSS('padding-top', '20px')
      }
      await page
        .getByRole('tab', { name: 'Design Process', exact: true })
        .click()
      await expect(
        page.locator('[aria-labelledby="cbsa-discovery"]')
      ).toHaveCSS('border-top-width', '1px')
    }
  }
})
