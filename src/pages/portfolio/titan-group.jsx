import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/titan/titan-1.jpg'
import screen2 from '@/images/projects/titan/titan-2.jpg'
import screen3 from '@/images/projects/titan/titan-3.jpg'
import screen4 from '@/images/projects/titan/titan-4.jpg'
import screen5 from '@/images/projects/titan/titan-5.jpg'
import screen6 from '@/images/projects/titan/titan-6.jpg'
import screen7 from '@/images/projects/titan/titan-7.jpg'
import screen8 from '@/images/projects/titan/titan-8.jpg'

// TODO(Arif): Confirm detailed scope and ownership before expanding this overview.
// Evidence and open questions: docs/content-credibility-report.md.
const projectData = {
  meta: {
    title: 'Selected Work — Titan Group | Arif Alim',
    // TODO(Arif): Confirm project scope and contribution before adding a description.
  },
  layout: {
    title: 'Titan Group',
    intro: 'Selected website layouts for Titan Group.',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          'Selected website layouts for Titan Group, including company, services, and project pages.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Titan Group screen 1' },
          { src: screen2, alt: 'Titan Group screen 2' },
          { src: screen3, alt: 'Titan Group screen 3' },
          { src: screen4, alt: 'Titan Group screen 4' },
          { src: screen5, alt: 'Titan Group screen 5' },
          { src: screen6, alt: 'Titan Group screen 6' },
          { src: screen7, alt: 'Titan Group screen 7' },
          { src: screen8, alt: 'Titan Group screen 8' },
        ],
        columnsLg: 2,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Titan Group',
        paragraphs: [
          'Titan Group provides construction services in the Greater Toronto Area.',
        ],
        // TODO(Arif): Confirm the project/company website URL. See docs/content-credibility-report.md.
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
