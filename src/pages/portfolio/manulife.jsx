import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PortfolioTemplate } from '@/components/portfolio'
import { ManulifeSummary } from '@/components/portfolio/manulife/ManulifeSummary'
import { ManulifeExplorations } from '@/components/portfolio/manulife/ManulifeExplorations'
import { ManulifeInteractionDemos } from '@/components/portfolio/manulife/ManulifeInteractionDemos'
import { ManulifeCaseStudy } from '@/components/portfolio/manulife/ManulifeCaseStudy'

const projectData = {
  meta: {
    title: 'Plan Administrator Portal — Manulife | Arif Alim',
    description:
      'UX and interface design for Manulife benefits administration, including member workflows, dashboards, and reusable components.',
  },
  layout: {
    title: 'Manulife',
    intro:
      'Research, interaction design and reusable patterns for the Plan Administrator platform and Disability Portal.',
  },
}

const views = {
  overview: 'Overview',
  process: 'Design Process',
  explorations: 'Design Explorations',
  demos: 'Interaction Demos',
}

export default function Project() {
  const router = useRouter()
  const { view, area } = router.query
  const selectedTab = Object.hasOwn(views, view) ? views[view] : views.overview
  const product = ['wealth', 'bank', 'plan'].includes(area) ? area : undefined

  useEffect(() => {
    if (!product || !['explorations', 'demos'].includes(view)) return
    const frame = requestAnimationFrame(() => {
      const destination = document.getElementById(`${view}-${product}`)
      destination?.focus({ preventScroll: true })
      destination?.scrollIntoView({ block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [view, product])

  const tabs = [
    { name: views.overview, render: () => <ManulifeSummary /> },
    { name: views.process, render: () => <ManulifeCaseStudy /> },
    { name: views.explorations, render: () => <ManulifeExplorations /> },
    {
      name: views.demos,
      render: () => (
        <ManulifeInteractionDemos key={product} initialArea={product} />
      ),
    },
  ]

  function changeTab(name) {
    const next = Object.keys(views).find((key) => views[key] === name)
    router.push(
      {
        pathname: '/portfolio/manulife',
        query: next === 'overview' ? {} : { view: next },
      },
      undefined,
      { shallow: true, scroll: false }
    )
  }

  return (
    <PortfolioTemplate
      {...projectData}
      tabs={tabs}
      selectedTab={selectedTab}
      onTabChange={changeTab}
    />
  )
}
