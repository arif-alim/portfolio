const { test, expect } = require('@playwright/test')
const sections = [
  'Overview',
  'Design Process',
  'Design Explorations',
  'Interaction Demos',
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
  const demos = page.getByRole('group', { name: 'Choose a demo' })
  await expect(demos.getByRole('button')).toHaveText([
    'Manulife Wealth',
    'Manulife Bank',
    'Plan Administration',
  ])
  await expect(
    demos.getByRole('button', { name: 'Manulife Wealth' })
  ).toHaveAttribute('aria-pressed', 'true')
  await expect(
    page.getByRole('heading', { name: 'Manulife Wealth', exact: true })
  ).toBeVisible()
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
    .getByText('More design explorations', {
      exact: true,
    })
    .click()
  await expect(
    page.getByRole('button', {
      name: 'Enlarge Member status updates — additional screens',
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
  await openSection(page, 'Interaction Demos')
  await page
    .getByRole('button', { name: 'Plan Administration', exact: true })
    .click()
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

test('Wealth holdings and Bank transfer can be explored and reset', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await openSection(page, 'Interaction Demos')
  const wealth = page.getByRole('region', {
    name: 'Manulife Wealth',
    exact: true,
  })
  await expect(
    wealth.getByText('Illustrative portfolio prototype')
  ).toBeVisible()
  const account = wealth.getByLabel('Investment account')
  await expect(account).toHaveValue('0')
  await account.selectOption('1')
  await expect(wealth.getByText('+$250.00')).toBeVisible()
  const holding = wealth
    .locator('summary')
    .filter({ hasText: 'Harbour Balanced Fund' })
  await holding.press('Enter')
  await expect(
    wealth.locator('details[open]').getByText('Units held')
  ).toBeVisible()
  await expect(wealth.getByText('150', { exact: true })).toBeVisible()
  await wealth.screenshot({ path: testInfo.outputPath('wealth-demo.png') })
  await wealth.getByRole('button', { name: 'Reset demo' }).click()
  await expect(account).toHaveValue('0')
  await expect(wealth.locator('details[open]')).toHaveCount(0)

  await page.getByRole('button', { name: 'Manulife Bank', exact: true }).click()
  const bank = page.getByRole('region', { name: 'Manulife Bank', exact: true })
  await expect(bank.getByText('Illustrative portfolio prototype')).toBeVisible()
  const amount = bank.getByLabel('Amount (CAD)')
  const review = bank.getByRole('button', { name: 'Review transfer' })
  await amount.fill('0.001')
  await review.click()
  await expect(amount).toHaveAttribute('aria-invalid', 'true')
  await expect(amount).toBeFocused()
  await expect(bank.getByRole('alert')).toContainText('Enter a positive amount')
  await amount.fill('1250.01')
  await review.click()
  await expect(bank.getByRole('alert')).toContainText('Insufficient funds')
  await amount.fill('125.50')
  await review.click()
  await expect(
    bank.getByRole('heading', { name: 'Review transfer' })
  ).toBeFocused()
  await expect(bank.getByText('$125.50', { exact: true })).toBeVisible()
  await expect(bank.getByText('$1,250.00', { exact: true })).toBeVisible()
  await bank.getByRole('button', { name: 'Edit amount' }).click()
  await expect(amount).toHaveValue('125.50')
  await review.click()
  await bank.getByRole('button', { name: 'Confirm transfer' }).click()
  await expect(
    bank.getByRole('heading', { name: 'Simulated transfer complete' })
  ).toBeFocused()
  await expect(bank.getByText('$1,124.50', { exact: true })).toBeVisible()
  await expect(bank.getByText('$3,525.50', { exact: true })).toBeVisible()
  await bank.screenshot({ path: testInfo.outputPath('bank-demo.png') })
  await bank.getByRole('button', { name: 'Reset demo' }).click()
  await expect(amount).toHaveValue('')
  await expect(bank.getByText('$1,250.00', { exact: true })).toBeVisible()

  await openSection(page, 'Overview')
  await openSection(page, 'Interaction Demos')
  await expect(wealth).toBeVisible()
})

test('prototype screenshots open in the existing gallery in the requested order', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await openSection(page, 'Design Explorations')
  const panel = page.getByRole('tabpanel')
  await expect(panel.getByRole('heading', { level: 2 }).nth(1)).toHaveText(
    'Manulife Wealth'
  )
  await expect(panel.getByRole('heading', { level: 2 }).nth(2)).toHaveText(
    'Manulife Bank'
  )
  await expect(panel.getByRole('heading', { level: 2 }).nth(3)).toHaveText(
    'Plan Administration'
  )
  for (const [name, label, screenshot, url] of [
    [
      'Manulife Wealth',
      'Investment account overview',
      'wealth-gallery.png',
      'https://www.manulife.com/ca/en/personal/wealth/manulife-wealth/resources/ipresources',
    ],
    [
      'Manulife Bank',
      'Transfer review',
      'bank-gallery.png',
      'https://www.manulifebank.ca/support/mobile-banking.html',
    ],
  ]) {
    const gallery = panel.getByRole('region', { name, exact: true })
    await expect(
      gallery.getByText('Portfolio prototype screenshot', { exact: false })
    ).toHaveCount(2)
    await expect(gallery.getByRole('link')).toHaveAttribute('href', url)
    for (const img of await gallery.getByRole('img').all()) {
      await img.scrollIntoViewIfNeeded()
      await expect
        .poll(() => img.evaluate((element) => element.naturalWidth))
        .toBeGreaterThan(0)
    }
    await gallery.screenshot({ path: testInfo.outputPath(screenshot) })
    const opener = gallery.getByRole('button', { name: 'Enlarge ' + label })
    await opener.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog.getByRole('heading')).toHaveText(label)
    await expect(
      dialog.getByText('Portfolio prototype screenshot', { exact: true })
    ).toBeVisible()
    await expect(dialog.getByRole('img')).toHaveAttribute(
      'alt',
      /fictional|simulated/i
    )
    await page.keyboard.press('Escape')
    await expect(opener).toBeFocused()
  }
})

test('Design Process links each product area to its imagery and demo by keyboard', async ({
  page,
}, testInfo) => {
  await page.goto('/portfolio/manulife')
  await openSection(page, 'Design Process')
  await expect(page.getByText('My role', { exact: true })).toBeVisible()
  const index = page.getByRole('navigation', { name: 'Product areas' })
  const areas = [
    ['Plan Administration', 'plan'],
    ['Manulife Wealth', 'wealth'],
    ['Manulife Bank', 'bank'],
  ]
  await expect(index.getByRole('link')).toHaveCount(3)
  for (const [name, id] of areas) {
    const jump = index.getByRole('link', { name: new RegExp(name) })
    await jump.press('Enter')
    const story = page.getByRole('region', { name, exact: true })
    await expect(story).toBeFocused()

    await story
      .getByRole('link', { name: 'View design explorations' })
      .press('Enter')
    await expect(page).toHaveURL(new RegExp('view=explorations&area=' + id))
    const gallery = page.locator('#explorations-' + id)
    await expect(gallery).toBeFocused()
    await expect(
      gallery.getByRole('button', { name: /^Enlarge/ }).first()
    ).toBeVisible()

    await page.goBack()
    await expect(story).toBeVisible()
    await story
      .getByRole('link', { name: 'Open interaction demo' })
      .press('Enter')
    await expect(page).toHaveURL(new RegExp('view=demos&area=' + id))
    const demo = page.locator('#demos-' + id)
    await expect(demo).toBeFocused()
    await expect(demo.getByRole('heading', { name, exact: true })).toBeVisible()
    await expect(
      page
        .getByRole('group', { name: 'Choose a demo' })
        .getByRole('button', { name, exact: true })
    ).toHaveAttribute('aria-pressed', 'true')
    await page.reload()
    await expect(demo).toBeVisible()
    await openSection(page, 'Design Process')
  }
  await page
    .getByRole('region', { name: 'Put plan signals alongside daily tasks' })
    .scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('manulife-decision.png') })
  await openSection(page, 'Interaction Demos')
  await expect(
    page
      .getByRole('group', { name: 'Choose a demo' })
      .getByRole('button', { name: 'Manulife Wealth' })
  ).toHaveAttribute('aria-pressed', 'true')
})
