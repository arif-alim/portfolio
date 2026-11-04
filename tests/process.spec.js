const { test, expect } = require('@playwright/test')

const components =
  '/process?discipline=design-systems&topic=components-and-states'
const disciplines = [
  ['Product Design', 'product-design', 'Frame the problem', 5],
  ['Service Design', 'service-design', 'Map the journey', 5],
  ['Design Systems', 'design-systems', 'Tokens and themes', 6],
  ['Accessibility', 'accessibility', 'Keyboard and focus', 5],
  ['Frontend & QA', 'frontend-qa', 'Feasibility and co-design', 6],
]

function activeTopic(page) {
  return page
    .getByRole('navigation', { name: 'Topics' })
    .locator('[aria-current="page"]')
}

test('browse all disciplines and topics without horizontal overflow', async ({
  page,
}, testInfo) => {
  await page.goto('/process')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How I work')
  await expect(activeTopic(page)).toHaveText('Frame the problem')
  const mobile = testInfo.project.use.viewport.width < 768

  for (const [name, id, defaultTopic, count] of disciplines) {
    if (mobile) {
      await page.getByLabel('Discipline', { exact: true }).selectOption(id)
    } else {
      const link = page
        .getByRole('navigation', { name: 'Disciplines' })
        .getByRole('link', { name, exact: true })
      await link.click()
      await expect(link).toHaveAttribute('aria-current', 'true')
    }
    await expect(activeTopic(page)).toHaveText(defaultTopic)
    const links = page
      .getByRole('navigation', { name: 'Topics' })
      .getByRole('link')
    await expect(links).toHaveCount(count)
    for (const link of await links.all()) {
      await link.click()
      const topicName = await link.innerText()
      await expect(
        page.getByRole('heading', { level: 2, name: topicName })
      ).toBeVisible()
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth
        )
      ).toBe(true)
      expect((await link.boundingBox()).height).toBeGreaterThanOrEqual(44)
    }
  }
})

test('topic links restore on reload and follow browser history', async ({
  page,
}) => {
  await page.goto(components)
  await expect(activeTopic(page)).toHaveText('Components and states')
  await page.reload()
  await expect(activeTopic(page)).toHaveText('Components and states')

  const link = page.getByRole('link', { name: 'Figma to React', exact: true })
  await link.focus()
  await expect(link).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/topic=figma-to-react/)
  await expect(activeTopic(page)).toHaveText('Figma to React')
  await page.goBack()
  await expect(activeTopic(page)).toHaveText('Components and states')
  await page.goForward()
  await expect(activeTopic(page)).toHaveText('Figma to React')
  await page.goto('/process?discipline=unknown&topic=unknown')
  await expect(activeTopic(page)).toHaveText('Frame the problem')
})

test('save state, accessible behaviour and walkthrough stay in sync', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(components)
  const stateGroup = page.getByRole('group', { name: 'Save item state' })
  const save = page.getByRole('button', { name: 'Save item', exact: true })
  const states = [
    'Default',
    'Pressed',
    'Focused',
    'Disabled',
    'Loading',
    'Saved',
    'Error',
  ]
  for (const state of states) {
    const option = stateGroup.getByRole('button', { name: state, exact: true })
    await option.focus()
    await expect(option).toHaveCSS('outline-style', 'solid')
    await page.keyboard.press('Space')
    await expect(option).toHaveAttribute('aria-pressed', 'true')
    await expect(
      page.getByRole('heading', { name: state + ' specification' })
    ).toBeVisible()
    if (state === 'Disabled') await expect(save).toBeDisabled()
    if (state === 'Focused')
      await expect(save).toHaveCSS('outline-style', 'solid')
    if (state === 'Loading') {
      await expect(save).toHaveAttribute('aria-busy', 'true')
      await expect(save).toBeDisabled()
      expect((await save.boundingBox()).height).toBeGreaterThanOrEqual(44)
    }
  }
  await expect(page.getByRole('button', { name: 'Retry save' })).toBeVisible()
  await page.getByRole('button', { name: 'Retry save' }).press('Enter')
  await expect(
    page.getByRole('button', { name: 'Saved', exact: true }).last()
  ).toBeFocused()
  await expect(
    page.getByRole('status').filter({ hasText: 'Added to your reading list' })
  ).toBeVisible()
  await stateGroup.getByRole('button', { name: 'Focused' }).press('Enter')
  const treatment = page.getByRole('group', { name: 'Treatment' })
  const standard = treatment.getByRole('button', { name: 'Standard' })
  const glass = treatment.getByRole('button', { name: 'Glass' })
  await expect(glass).toHaveAttribute('aria-pressed', 'true')
  await standard.press('Enter')
  await expect(standard).toHaveAttribute('aria-pressed', 'true')
  await expect(save).toHaveAttribute('data-state', 'Focused')
  await expect(save).toHaveCSS('outline-style', 'solid')
  await glass.press('Space')
  await expect(glass).toHaveAttribute('aria-pressed', 'true')
  await expect(save).toHaveAttribute('data-state', 'Focused')
  await expect(save).toHaveCSS('outline-style', 'solid')
  await expect(
    page.getByText('Liquid Glass–inspired web prototype')
  ).toBeVisible()
  await stateGroup.scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('process-states.png') })

  await page.getByRole('link', { name: 'Figma to React', exact: true }).click()
  for (const node of [
    'Figma',
    'Design Tokens',
    'React Components',
    'AI-Readable Contracts',
  ]) {
    const control = page.getByRole('button', { name: node, exact: true })
    await control.click()
    await expect(control).toHaveAttribute('aria-pressed', 'true')
    await expect(
      page.getByRole('heading', { name: node + ' example' })
    ).toBeVisible()
  }
  await page
    .getByRole('link', { name: 'Explore the full architecture' })
    .click()
  await expect(page).toHaveURL('/portfolio/design-systems')
  await page
    .getByRole('link', { name: 'Back to Design Systems on Process' })
    .click()
  await expect(activeTopic(page)).toHaveText('Figma to React')
})

test('service handoff updates the visible message and backstage owner', async ({
  page,
}) => {
  await page.goto('/process?discipline=service-design&topic=improve-handoffs')
  await expect(page.getByText('Add more detail to continue.')).toBeVisible()
  await page.getByLabel('Request details are complete').check()
  await expect(
    page.getByText('Your request is ready for review.')
  ).toBeVisible()
  await expect(
    page.getByText('Route to the fictional review queue.')
  ).toBeVisible()
  await expect(page.getByText('Reviewer', { exact: true })).toBeVisible()
})
