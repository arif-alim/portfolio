const { test, expect } = require('@playwright/test')

const components =
  '/process?discipline=design-systems&topic=components-and-states'
const structure = require('./fixtures/process-structure.json')
const slug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
function activeTopic(page) {
  return page
    .getByRole('navigation', { name: 'Disciplines and topics' })
    .locator('[aria-current="page"]')
}

test('browse the complete requested hierarchy and content without overflow', async ({
  page,
}) => {
  test.setTimeout(240000)
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/process')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('How I work')
  await expect(activeTopic(page)).toHaveText(
    structure[0].disciplines[0].topics[0]
  )
  for (const domain of structure) {
    const tab = page.getByRole('tab', { name: domain.name, exact: true })
    await tab.click()
    await expect(tab).toHaveAttribute('aria-selected', 'true')
    const nav = page.getByRole('navigation', { name: 'Disciplines and topics' })
    for (const discipline of domain.disciplines) {
      const group = nav.getByRole('button', {
        name: discipline.name,
        exact: true,
      })
      if ((await group.getAttribute('aria-expanded')) === 'false')
        await group.click()
      const list = page.locator('#topics-' + slug(discipline.name))
      await expect(list.getByRole('link')).toHaveCount(discipline.topics.length)
      for (const name of discipline.topics) {
        const link = list.getByRole('link', { name, exact: true })
        await link.click()
        await expect(activeTopic(page)).toHaveText(name)
        await expect(page.locator('#process-topic')).toHaveText(name)
        await expect(group).toHaveAttribute('aria-expanded', 'true')
        for (const title of [
          'The decision',
          'The approach',
          'The artefact',
          'Illustrative example',
          'Validation',
          'Business value',
        ]) {
          await expect(
            page
              .getByRole('article')
              .getByRole('heading', { name: title, exact: true, level: 3 })
          ).toBeVisible()
        }
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth
          )
        ).toBe(true)
        expect((await link.boundingBox()).height).toBeGreaterThanOrEqual(44)
      }
    }
  }
  expect(errors).toEqual([])
})

test('deep links, invalid selections, domain memory and browser history', async ({
  page,
}) => {
  await page.goto(components)
  await expect(activeTopic(page)).toHaveText(
    'Component design and architecture'
  )
  await page.reload()
  await expect(activeTopic(page)).toHaveText(
    'Component design and architecture'
  )
  const link = page.getByRole('link', {
    name: 'Design-to-code alignment',
    exact: true,
  })
  await link.focus()
  await expect(link).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/domain=design.*topic=design-to-code-alignment/)
  await page.getByRole('tab', { name: 'Business', exact: true }).click()
  await expect(activeTopic(page)).toHaveText(
    'Business discovery and problem definition'
  )
  await page.getByRole('tab', { name: 'Design', exact: true }).click()
  await expect(activeTopic(page)).toHaveText('Design-to-code alignment')
  await page.goBack()
  await expect(activeTopic(page)).toHaveText(
    'Business discovery and problem definition'
  )
  await page.goForward()
  await expect(activeTopic(page)).toHaveText('Design-to-code alignment')
  await page.goto(
    '/process?domain=engineering&discipline=unknown&topic=unknown'
  )
  await expect(activeTopic(page)).toHaveText(
    'Technical feasibility and co-design'
  )
  await page.goto('/process?domain=unknown&discipline=unknown&topic=unknown')
  await expect(activeTopic(page)).toHaveText(
    'Business discovery and problem definition'
  )
  await page.goto('/process?domain=business&topic=product-vision-and-strategy')
  await expect(activeTopic(page)).toHaveText('Product vision and strategy')
})

test('tabs and accordions support keyboard use and route-driven expansion', async ({
  page,
}) => {
  await page.goto('/process')
  const business = page.getByRole('tab', { name: 'Business', exact: true })
  const design = page.getByRole('tab', { name: 'Design', exact: true })
  await business.focus()
  await expect(business).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('ArrowRight')
  await expect(design).toBeFocused()
  await expect(business).toHaveAttribute('aria-selected', 'true')
  await page.keyboard.press('Enter')
  await expect(design).toHaveAttribute('aria-selected', 'true')
  await page.keyboard.press('End')
  await expect(
    page.getByRole('tab', { name: 'Engineering', exact: true })
  ).toBeFocused()
  await page.keyboard.press('Home')
  await expect(business).toBeFocused()
  await page.keyboard.press('Space')
  const accordion = page.getByRole('button', {
    name: 'Business Analysis',
    exact: true,
  })
  await accordion.focus()
  await expect(accordion).toHaveCSS('outline-style', 'solid')
  await page.keyboard.press('Space')
  await expect(accordion).toHaveAttribute('aria-expanded', 'false')
  await page.keyboard.press('Enter')
  await expect(accordion).toHaveAttribute('aria-expanded', 'true')
  const next = page.getByRole('button', {
    name: 'Product Ownership',
    exact: true,
  })
  await next.press('Enter')
  await page
    .getByRole('link', { name: 'Product vision and strategy', exact: true })
    .press('Enter')
  await page.reload()
  await expect(next).toHaveAttribute('aria-expanded', 'true')
  await expect(activeTopic(page)).toHaveText('Product vision and strategy')
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

  await page
    .getByRole('link', { name: 'Design-to-code alignment', exact: true })
    .click()
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
  await expect(activeTopic(page)).toHaveText('Design-to-code alignment')
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

test('representative artefacts pass automated checks and reflow with enlarged text', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const paths = [
    '/process',
    '/process?domain=business&discipline=business-analysis&topic=business-rules-and-decision-logic',
    '/process?domain=business&discipline=business-analysis&topic=as-is-and-to-be-process-analysis',
    '/process?domain=business&discipline=business-systems-analysis&topic=rest-apis-and-system-interfaces',
    '/process?discipline=design-systems&topic=components-and-states',
    '/process?domain=accessibility&discipline=standards-and-compliance&topic=accessible-forms-and-error-handling',
    '/process?domain=engineering&discipline=artificial-intelligence&topic=intelligent-workflow-automation',
  ]
  for (const path of paths) {
    await page.goto(path)
    await expect(page.locator('#process-topic')).not.toBeEmpty()
    await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') })
    const violations = await page.evaluate(async () => {
      const result = await window.axe.run(
        {
          include: [
            '[role="tablist"][aria-label="Domains"]',
            '[role="tabpanel"]:not([hidden])',
          ],
        },
        {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
          },
        }
      )
      return result.violations.map(({ id, nodes }) => ({
        id,
        targets: nodes.map(({ target }) => target),
      }))
    })
    expect(violations, path).toEqual([])
    if (path === '/process') {
      await page.screenshot({
        path: testInfo.outputPath('process-overview.png'),
        fullPage: true,
      })
    }
  }
  await page.setViewportSize({ width: 320, height: 900 })
  // Enlarge text independently of rem-based spacing and icon dimensions.
  await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('main *'))
    const sizes = elements.map((element) => {
      const style = getComputedStyle(element)
      return {
        font: parseFloat(style.fontSize),
        line: parseFloat(style.lineHeight),
      }
    })
    elements.forEach((element, index) => {
      element.style.fontSize = `${sizes[index].font * 2}px`
      if (Number.isFinite(sizes[index].line))
        element.style.lineHeight = `${sizes[index].line * 2}px`
    })
  })
  await expect(page.locator('#process-topic')).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  const tabs = page.getByRole('tablist', { name: 'Domains' })
  await tabs.getByRole('tab', { name: 'Business', exact: true }).press('Enter')
  const link = activeTopic(page)
  expect(
    await link.evaluate((element) => element.scrollWidth <= element.clientWidth)
  ).toBe(true)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
  await page.screenshot({
    path: testInfo.outputPath('process-enlarged-text.png'),
    fullPage: true,
  })
})

test('all original URLs retain their substantive content and interactive artefacts', async ({
  page,
}) => {
  const { processDisciplines } = require('../src/data/processTopics.js')
  for (const discipline of processDisciplines) {
    for (const topic of discipline.topics) {
      await page.goto(`/process?discipline=${discipline.id}&topic=${topic.id}`)
      const article = page.getByRole('article')
      await expect(article).toContainText(topic.decision)
      await expect(article).toContainText(topic.artifact)
      await expect(article).toContainText(topic.check)
      await expect(
        article.getByRole('heading', {
          name: topic.name,
          exact: true,
          level: 3,
        })
      ).toBeVisible()
      if (topic.reference)
        await expect(
          article.getByRole('link', { name: topic.reference[1], exact: true })
        ).toHaveAttribute('href', topic.reference[0])
      const broken = await page
        .locator('[aria-controls], [aria-labelledby]')
        .evaluateAll((elements) =>
          elements.flatMap((element) =>
            ['aria-controls', 'aria-labelledby'].flatMap((attribute) =>
              (element.getAttribute(attribute) || '')
                .split(/\s+/)
                .filter((id) => id && !document.getElementById(id))
            )
          )
        )
      expect(broken).toEqual([])
    }
  }
})
