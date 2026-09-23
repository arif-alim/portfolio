import { PortfolioTemplate } from '@/components/portfolio'
import { ManulifeSummary } from '@/components/portfolio/manulife/ManulifeSummary'
import {
  ManulifeWireframes,
  ManulifeDesignSystem,
} from '@/components/portfolio/manulife/ManulifeGalleries'
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
      'Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience.',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      render: () => <ManulifeSummary />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About',
        paragraphs: [
          'Manulife provides insurance and financial services, including group health benefits for Canadian employers.',
        ],
        link: 'https://www.manulife.ca/personal.html',
      },
    },
    {
      name: 'Wireframes',
      render: () => <ManulifeWireframes />,
    },
    {
      name: 'Design system',
      render: () => <ManulifeDesignSystem />,
    },
    {
      name: 'Case Study',
      render: () => <ManulifeCaseStudy />,
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
