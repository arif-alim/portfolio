import { PortfolioTemplate } from '@/components/portfolio'
import {
  CbsaOverview,
  CbsaProcess,
} from '@/components/portfolio/cbsa/CbsaCaseStudy'
import { CbsaBlueprint } from '@/components/portfolio/cbsa/CbsaBlueprint'

const projectData = {
  meta: {
    title: 'Service & Interface Design — CBSA | Arif Alim',
    description:
      'Lead UX design work for CBSA, including user research, service blueprints, prototypes, and reusable interface patterns.',
  },
  layout: {
    title: 'CBSA',
    intro:
      'User research, service design, and interface design as a Lead UX Designer at the Canada Border Services Agency.',
  },
  defaultTab: 'Overview',
  tabs: [
    { name: 'Overview', render: () => <CbsaOverview /> },
    { name: 'Design Process', render: () => <CbsaProcess /> },
    { name: 'Interactive Demo', render: () => <CbsaBlueprint /> },
  ],
}
export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
