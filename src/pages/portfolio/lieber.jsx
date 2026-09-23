import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/lieber/lieber-1.jpg'
import screen2 from '@/images/projects/lieber/lieber-2.jpg'
import screen3 from '@/images/projects/lieber/lieber-3.jpg'
import screen4 from '@/images/projects/lieber/lieber-4.jpg'
import screen5 from '@/images/projects/lieber/lieber-5.jpg'
import screen6 from '@/images/projects/lieber/lieber-6.jpg'
import screen7 from '@/images/projects/lieber/lieber-7.jpg'

const projectData = {
  meta: {
    title: 'Responsive Website Design — Lieber Group | Arif Alim',
    description:
      'Responsive website redesign for Lieber Group, including parallax scrolling and layouts for its construction services.',
  },
  layout: {
    title: 'Lieber Group',
    intro:
      'Responsive website redesign with parallax scrolling for Lieber Group.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Lieber Group responsive web design',
        paragraphs: [
          'I redesigned the Lieber Group website using responsive layouts and parallax scrolling. The selected screens include navigation and pages for the company and its services.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Lieber Group website screens',
        images: [
          { src: screen1, alt: 'Lieber Group screen 1' },
          { src: screen2, alt: 'Lieber Group screen 2' },
          { src: screen3, alt: 'Lieber Group screen 3' },
          { src: screen4, alt: 'Lieber Group screen 4' },
          { src: screen5, alt: 'Lieber Group screen 5' },
          { src: screen6, alt: 'Lieber Group screen 6' },
          { src: screen7, alt: 'Lieber Group screen 7' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'Lieber Group',
        paragraphs: [
          'Lieber Group provides construction services, with mechanical, electrical, and fireproofing divisions shown in the website designs.',
        ],
        link: 'http://www.liebergroup.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
