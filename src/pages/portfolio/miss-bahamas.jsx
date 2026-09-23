import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/mbo/mbo-1.jpeg'
import screen2 from '@/images/projects/mbo/mbo-2.jpeg'
import screen3 from '@/images/projects/mbo/mbo-3.jpeg'
import screen4 from '@/images/projects/mbo/mbo-4.jpeg'
import screen5 from '@/images/projects/mbo/mbo-5.jpeg'
import screen6 from '@/images/projects/mbo/mbo-6.jpeg'
import screen7 from '@/images/projects/mbo/mbo-7.jpeg'

const projectData = {
  meta: {
    title: 'Web & Mobile Design — Miss Bahamas | Arif Alim',
    description:
      'Web and mobile interface design for the Miss Bahamas Organization, with user stories, epics, and developer collaboration.',
  },
  layout: {
    title: 'Miss Bahamas Organization (MBO)',
    intro: 'Responsive Mobile Design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          "I led design work for the Miss Bahamas Organization's webpage and mobile app. I defined user stories and epics and created web and mobile interface designs with a focus on accessibility and responsiveness.",
          'I collaborated with developers to translate the designs into interfaces and worked with the design and development teams through revisions.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Miss Bahamas screen 1' },
          { src: screen2, alt: 'Miss Bahamas screen 2' },
          { src: screen3, alt: 'Miss Bahamas screen 3' },
          { src: screen4, alt: 'Miss Bahamas screen 4' },
          { src: screen5, alt: 'Miss Bahamas screen 5' },
          { src: screen6, alt: 'Miss Bahamas screen 6' },
          { src: screen7, alt: 'Miss Bahamas screen 7' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About MBO',
        paragraphs: [
          'The Miss Bahamas Organization (MBO) runs a national beauty pageant program in the Bahamas.',
        ],
        link: 'https://www.missbahamas.net/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
