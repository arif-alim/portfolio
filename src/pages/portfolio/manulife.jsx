import { PortfolioTemplate } from '@/components/portfolio'
import { ManulifeSummary } from '@/components/portfolio/manulife/ManulifeSummary'
import { ManulifeExplorations } from '@/components/portfolio/manulife/ManulifeExplorations'
import { ManulifeDemo } from '@/components/portfolio/manulife/ManulifeDemo'
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
  defaultTab: 'Overview',
  tabs: [
    { name: 'Overview', render: () => <ManulifeSummary /> },
    { name: 'Design Process', render: () => <ManulifeCaseStudy /> },
    { name: 'Design Explorations', render: () => <ManulifeExplorations /> },
    { name: 'Interactive Demo', render: () => <ManulifeDemo /> },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
