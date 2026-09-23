import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/nfcd/nfcd1.jpg'
import screen2 from '@/images/projects/nfcd/nfcd2.jpg'
import screen3 from '@/images/projects/nfcd/nfcd3.jpg'
import screen4 from '@/images/projects/nfcd/nfcd4.jpg'
import screen5 from '@/images/projects/nfcd/nfcd5.jpg'
import screen6 from '@/images/projects/nfcd/nfcd6.jpg'
import screen7 from '@/images/projects/nfcd/nfcd7.jpg'
import screen8 from '@/images/projects/nfcd/nfcd8.jpg'

const projectData = {
  meta: {
    title:
      'E-commerce Website Design — Niagara Falls Craft Distillers | Arif Alim',
    description:
      'Mobile-responsive e-commerce design for Niagara Falls Craft Distillers, including product pages and navigation.',
  },
  layout: {
    title: 'Niagara Falls Craft Distillers',
    intro: 'Custom e-commerce mobile responsive web design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Niagara Falls Craft Distillers responsive web design',
        paragraphs: [
          'I redesigned the Niagara Falls Craft Distillers website with a custom, mobile-responsive e-commerce design.',
          "The homepage design features a full-screen banner showcasing the company's spirits. I updated the navigation with labels, drop-down menus, and a search bar.",
          'The work included product and event pages, product imagery, and layouts for mobile devices.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'NFCD screen 1' },
          { src: screen2, alt: 'NFCD screen 2' },
          { src: screen3, alt: 'NFCD screen 3' },
          { src: screen4, alt: 'NFCD screen 4' },
          { src: screen5, alt: 'NFCD screen 5' },
          { src: screen6, alt: 'NFCD screen 6' },
          { src: screen7, alt: 'NFCD screen 7' },
          { src: screen8, alt: 'NFCD screen 8' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'Niagara Falls Craft Distillers (NFCD)',
        paragraphs: [
          'Niagara Falls Craft Distillers produces spirits in Niagara Falls, Canada.',
        ],
        link: 'https://niagarafallscraftdistillers.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
