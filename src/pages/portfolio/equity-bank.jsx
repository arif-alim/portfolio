import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/equitybank/equitybank-1.jpg'
import screen2 from '@/images/projects/equitybank/equitybank-2.jpg'
import screen3 from '@/images/projects/equitybank/equitybank-3.jpg'
import screen4 from '@/images/projects/equitybank/equitybank-4.jpg'
import screen5 from '@/images/projects/equitybank/equitybank-5.jpg'
import screen6 from '@/images/projects/equitybank/equitybank-6.jpg'
import screen7 from '@/images/projects/equitybank/equitybank-7.jpg'
import screen8 from '@/images/projects/equitybank/equitybank-8.jpg'

import logoEquityBank from '@/images/projects/equitybank/equitybank-logo.svg'

const projectData = {
  meta: {
    title: 'Responsive Website Design — Equity Bank Bahamas | Arif Alim',
    description:
      'UI/UX redesign of the Equity Bank Bahamas website, including responsive layouts, navigation, and typography.',
  },
  layout: {
    title: 'Equity Bank Bahamas',
    intro: 'Responsive Web Design',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Equity Bank & Affiliates Responsive Website',
        logo: {
          src: logoEquityBank,
          alt: 'Equity Bank Bahamas logo',
        },
        paragraphs: [
          'I redesigned the Equity Bank Bahamas website with a focus on responsive UI and navigation.',
          'The homepage design includes messaging, calls to action, and updated color and typography choices.',
          'The work included mobile layouts and navigation with labels and drop-down menus.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Responsive Website Wireframes',
        description:
          'Key responsive layouts for homepage and primary content templates.',
        images: [
          { src: screen1, alt: 'Equity Bank wireframe 1' },
          { src: screen2, alt: 'Equity Bank wireframe 2' },
          { src: screen3, alt: 'Equity Bank wireframe 3' },
          { src: screen4, alt: 'Equity Bank wireframe 4' },
          { src: screen5, alt: 'Equity Bank wireframe 5' },
          { src: screen6, alt: 'Equity Bank wireframe 6' },
          { src: screen7, alt: 'Equity Bank wireframe 7' },
          { src: screen8, alt: 'Equity Bank wireframe 8' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Equity Bank Bahamas',
        paragraphs: [
          'Equity Bank Bahamas provides banking and financial services in the Bahamas.',
        ],
        // TODO(Arif): Confirm the project/company website URL. See docs/content-credibility-report.md.
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
