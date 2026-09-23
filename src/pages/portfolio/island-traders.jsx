import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/islandtraders/islandtraders-1.jpeg'
import screen2 from '@/images/projects/islandtraders/islandtraders-2.jpeg'
import screen3 from '@/images/projects/islandtraders/islandtraders-3.jpeg'
import screen4 from '@/images/projects/islandtraders/islandtraders-4.jpeg'
import screen5 from '@/images/projects/islandtraders/islandtraders-5.jpeg'
import screen6 from '@/images/projects/islandtraders/islandtraders-6.jpeg'
import screen7 from '@/images/projects/islandtraders/islandtraders-7.jpeg'
import screen8 from '@/images/projects/islandtraders/islandtraders-8.jpeg'

import logoIslandTraders from '@/images/projects/islandtraders/islandtraders-logo.svg'

const projectData = {
  meta: {
    title: 'Responsive Website Design — Island Traders | Arif Alim',
    description:
      'Website and logo design for 242 Island Traders, including responsive layouts for its shop-and-ship service.',
  },
  layout: {
    title: 'Island Traders',
    intro:
      'Redesign of the 242 Island Traders website, with a focus on responsive UI.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        logo: {
          src: logoIslandTraders,
          alt: 'Island Traders logo',
        },
        paragraphs: [
          'I redesigned the 242 Island Traders website with a focus on mobile-responsive layouts.',
          'The homepage design includes a banner, navigation, and calls to action for the shop-and-ship service.',
          'I updated the color scheme and typography, using imagery and white space across the website layouts.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Island Traders screens',
        images: [
          { src: screen1, alt: 'Island Traders screen 1' },
          { src: screen2, alt: 'Island Traders screen 2' },
          { src: screen3, alt: 'Island Traders screen 3' },
          { src: screen4, alt: 'Island Traders screen 4' },
          { src: screen5, alt: 'Island Traders screen 5' },
          { src: screen6, alt: 'Island Traders screen 6' },
          { src: screen7, alt: 'Island Traders screen 7' },
          { src: screen8, alt: 'Island Traders screen 8' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About 242 Island Traders',
        paragraphs: [
          '242 Island Traders provides shop-and-ship and courier services in the Bahamas.',
        ],
        link: 'https://www.242islandtraders.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
