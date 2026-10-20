const { test, expect } = require('@playwright/test')
const sections = [
  'Overview',
  'Design Process',
  'Design Explorations',
  'Interactive Demo',
]
async function openSection(page, name) {
  await page.getByRole('tab', { name, exact: true }).click()
}
async function openModule(page, name) {
  await page
    .getByRole('navigation', { name: 'Demonstration modules' })
    .getByRole('button', { name })
    .click()
}

test('four meaningful sections, preserved content and responsive visual review', async ({
  page,
}, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/portfolio/manulife')
  await expect(page.getByRole('tab')).toHaveText(sections)
  await expect(
    page.getByRole('tab', { name: 'Overview', exact: true })
  ).toHaveAttribute('aria-selected', 'true')
  for (const name of sections) {
    await openSection(page, name)
    await expect(page.getByRole('tabpanel')).toBeVisible()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      )
    ).toBe(true)
    await page.evaluate(() => scrollTo(0, 0))
    await page.screenshot({
      path: testInfo.outputPath(`${name.replace(/ /g, '-')}.png`),
    })
  }
  await openSection(page, 'Overview')
  for (const phrase of [
    'Disability Portal',
    'Plan Administrator',
    'UserTesting.com',
    'Google Analytics',
    'AODA/WCAG',
  ])
    await expect(page.getByRole('tabpanel')).toContainText(phrase)
  await expect(
    page.getByRole('link', { name: 'Manulife company website' })
  ).toHaveAttribute('href', 'https://www.manulife.ca/personal.html')
  await openSection(page, 'Design Process')
  await expect(page.getByRole('tabpanel')).toContainText(
    'Client → Policy → Member → Plan'
  )
  await expect(page.getByRole('tabpanel')).toContainText('Power BI')
  expect(errors).toEqual([])
})

test('artifact sequences and original-resolution viewer support keyboard access', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await openSection(page, 'Design Explorations')
  const desktop = page.getByRole('button', {
    name: 'Enlarge Plan Administrator Home (MVP) — desktop',
    exact: true,
  })
  await desktop.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(
    dialog.getByRole('link', { name: 'Open full-resolution source' })
  ).toHaveAttribute('href', /home-mvp.*\.png/)
  await page.keyboard.press('ArrowRight')
  await expect(dialog.getByRole('heading')).toHaveText(
    'Plan Administrator Home (MVP) — mobile'
  )
  await page.keyboard.press('ArrowLeft')
  await dialog.getByRole('button', { name: 'View at original scale' }).click()
  const image = dialog.getByRole('img')
  expect(Math.round((await image.boundingBox()).width)).toBe(1915)
  await expect(dialog.getByRole('region')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(desktop).toBeFocused()
  const sequence = page.getByRole('region', {
    name: 'Member termination',
    exact: true,
  })
  await expect(
    sequence.getByRole('button', { name: 'Previous frame', exact: true })
  ).toBeDisabled()
  const viewer = sequence.locator('[tabindex="0"]')
  await viewer.focus()
  await page.keyboard.press('ArrowRight')
  await expect(sequence.getByRole('status')).toHaveText('Frame 2 of 5')
  await sequence.getByRole('button', { name: /^Enlarge/ }).click()
  await expect(dialog.getByRole('heading')).toHaveText(
    'Status Update (Terminate a member) — frame 2'
  )
  await page.keyboard.press('ArrowRight')
  await expect(dialog.getByRole('status')).toHaveText('Frame 3 of 5')
  await page.keyboard.press('Escape')
  await sequence
    .getByRole('button', { name: 'Next frame', exact: true })
    .click()
  await expect(sequence.getByRole('status')).toHaveText('Frame 4 of 5')
  await sequence
    .getByRole('button', { name: 'Next frame', exact: true })
    .click()
  await expect(
    sequence.getByRole('button', { name: 'Next frame', exact: true })
  ).toBeDisabled()
  await sequence.scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('status-sequence.png') })
  const parental = page.getByRole('region', {
    name: 'Parental leave',
    exact: true,
  })
  await parental
    .getByRole('button', { name: 'Next frame', exact: true })
    .click()
  await expect(parental.getByRole('status')).toHaveText('Frame 2 of 14')
  const mobileFrame = parental.getByRole('button', { name: /^Enlarge/ })
  expect((await mobileFrame.boundingBox()).width).toBeGreaterThan(300)
  await mobileFrame.click()
  await expect(dialog.getByRole('heading')).toContainText('pair 1, mobile')
  await page.keyboard.press('Escape')
  await page
    .getByText('Additional source artifacts · context not confirmed', {
      exact: true,
    })
    .click()
  await expect(
    page.getByRole('button', {
      name: 'Enlarge status-update.png — additional source composite',
      exact: true,
    })
  ).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
})

test('plan configuration, member changes, approval roles and local state', async ({
  page,
}) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/portfolio/manulife')
  await openSection(page, 'Interactive Demo')
  await page.getByLabel('Plan name (required)', { exact: true }).fill('')
  await page.getByLabel('Include dependent coverage', { exact: true }).check()
  await page.getByLabel('Dependent limit (required)', { exact: true }).fill('0')
  await page.getByRole('button', { name: 'Save sample plan' }).click()
  await expect(
    page.getByRole('group', { name: 'Check the information below' })
  ).toBeFocused()
  await page.getByRole('link', { name: 'Enter a fictional plan name.' }).click()
  await expect(
    page.getByLabel('Plan name (required)', { exact: true })
  ).toBeFocused()
  await page
    .getByLabel('Plan name (required)', { exact: true })
    .fill('Fictional company plan')
  await page.getByLabel('Dependent limit (required)', { exact: true }).fill('3')
  await page.getByRole('button', { name: 'Save sample plan' }).click()
  await expect(page.locator('#manulife-demo-message')).toContainText(
    'saved locally'
  )
  await page
    .getByLabel('Simulated role', { exact: true })
    .selectOption('viewer')
  await expect(
    page.getByLabel('Plan name (required)', { exact: true })
  ).toBeDisabled()
  await expect(
    page.getByRole('button', { name: 'Save sample plan' })
  ).toHaveCount(0)
  await openModule(page, 'Member management')
  await expect(
    page.getByRole('button', { name: /Request status change for/ })
  ).toHaveCount(0)
  await page.getByLabel('Search members', { exact: true }).fill('unmatched')
  await expect(
    page.getByText('No members match.', { exact: false })
  ).toBeVisible()
  await page
    .getByLabel('Simulated role', { exact: true })
    .selectOption('administrator')
  await page.getByLabel('Search members', { exact: true }).fill('Alex')
  await expect(page.getByRole('row')).toHaveCount(2)
  await page
    .getByRole('button', { name: 'Request status change for Alex Example' })
    .click()
  await expect(
    page.getByRole('heading', {
      name: 'Request a status change · Alex Example',
    })
  ).toBeFocused()
  await page.getByRole('button', { name: 'Send for approval' }).click()
  await expect(
    page.getByRole('group', { name: 'Check the information below' })
  ).toBeFocused()
  await expect(
    page.getByLabel('Effective date (required)', { exact: true })
  ).toHaveAttribute('aria-invalid', 'true')
  await page
    .getByLabel('Change type (required)', { exact: true })
    .selectOption('parental')
  await page
    .getByLabel('Effective date (required)', { exact: true })
    .fill('2026-05-01')
  await page
    .getByLabel('Expected return date (required)', { exact: true })
    .fill('2026-04-01')
  await page
    .getByLabel('Reason for review (required)', { exact: true })
    .fill('Fictional leave request')
  await page.getByRole('button', { name: 'Send for approval' }).click()
  await expect(page.locator('#manulife-returnDate-error')).toContainText(
    'on or after'
  )
  await page
    .getByLabel('Expected return date (required)', { exact: true })
    .fill('2026-06-01')
  const submissions = []
  page.on('request', (request) => {
    if (request.method() !== 'GET') submissions.push(request.url())
  })
  await page.getByRole('button', { name: 'Send for approval' }).click()
  await expect(page.locator('#manulife-demo-message')).toContainText(
    'Request 1 is pending'
  )
  await expect(
    page.getByRole('row').filter({ hasText: 'Alex Example' })
  ).toContainText('Active')
  await openModule(page, /Approvals/)
  await expect(
    page.getByRole('button', { name: 'Approve request 1', exact: true })
  ).toHaveCount(0)
  await page
    .getByLabel('Simulated role', { exact: true })
    .selectOption('approver')
  const approve = page.getByRole('button', {
    name: 'Approve request 1',
    exact: true,
  })
  await approve.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('#manulife-demo-message')).toBeFocused()
  await expect(page.locator('#manulife-demo-message')).toContainText('approved')
  await openModule(page, 'Member management')
  await page
    .getByLabel('Filter by member status', { exact: true })
    .selectOption('Parental leave')
  await expect(
    page.getByRole('row').filter({ hasText: 'Alex Example' })
  ).toContainText('Parental leave')
  await page
    .getByLabel('Simulated role', { exact: true })
    .selectOption('administrator')
  await page
    .getByRole('button', { name: 'Request status change for Robin Sample' })
    .click()
  await expect(
    page.getByLabel('Expected return date (required)', { exact: true })
  ).toHaveCount(0)
  await page
    .getByLabel('Effective date (required)', { exact: true })
    .fill('2026-07-01')
  await page
    .getByLabel('Reason for review (required)', { exact: true })
    .fill('Fictional termination request')
  await page.getByRole('button', { name: 'Send for approval' }).click()
  await openModule(page, /Approvals/)
  await page
    .getByLabel('Simulated role', { exact: true })
    .selectOption('approver')
  await page
    .getByRole('button', { name: 'Decline request 2', exact: true })
    .click()
  await expect(page.locator('#manulife-demo-message')).toContainText(
    'record is unchanged'
  )
  await openModule(page, 'Member management')
  await expect(
    page.getByRole('row').filter({ hasText: 'Robin Sample' })
  ).toContainText('Active')
  expect(submissions).toEqual([])
  await page.getByRole('button', { name: 'Reset demo' }).click()
  await expect(
    page.getByLabel('Plan name (required)', { exact: true })
  ).toHaveValue('Example employer plan')
  await expect(
    page.getByLabel('Dependent limit (required)', { exact: true })
  ).toHaveCount(0)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  expect(errors).toEqual([])
})
