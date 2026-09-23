import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/tritec/tritec-1.jpg'
import screen2 from '@/images/projects/tritec/tritec-2.jpg'
import screen3 from '@/images/projects/tritec/tritec-3.jpg'
import screen4 from '@/images/projects/tritec/tritec-4.jpg'
import screen5 from '@/images/projects/tritec/tritec-5.jpg'
import screen6 from '@/images/projects/tritec/tritec-6.jpg'
import screen7 from '@/images/projects/tritec/tritec-7.jpg'
import screen8 from '@/images/projects/tritec/tritec-8.jpg'
import screen9 from '@/images/projects/tritec/tritec-9.jpg'

// TODO(Arif): Confirm detailed scope and ownership before expanding this overview.
// Evidence and open questions: docs/content-credibility-report.md.
const projectData = {
  meta: {
    title: 'Website & Logo Design — Tritec Solutions | Arif Alim',
    description:
      'Custom logo and responsive website design for Tritec Solutions, including a service request widget.',
  },
  layout: {
    title: 'Tritec Solutions',
    intro:
      'Created custom logo and mobile responsive website with an intuitive service request widget.',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Tritec Solutions responsive web design',
        paragraphs: [
          'I created a custom logo and mobile-responsive website for Tritec Solutions, including a service request widget.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Tritec Solutions screen 1' },
          { src: screen2, alt: 'Tritec Solutions screen 2' },
          { src: screen3, alt: 'Tritec Solutions screen 3' },
          { src: screen4, alt: 'Tritec Solutions screen 4' },
          { src: screen5, alt: 'Tritec Solutions screen 5' },
          { src: screen6, alt: 'Tritec Solutions screen 6' },
          { src: screen7, alt: 'Tritec Solutions screen 7' },
          { src: screen8, alt: 'Tritec Solutions screen 8' },
          { src: screen9, alt: 'Tritec Solutions screen 9' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'Tritec Solutions',
        paragraphs: [
          'Tritec Solutions provides IT solutions and support for businesses.',
        ],
        link: 'https://tritecsolutions.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
