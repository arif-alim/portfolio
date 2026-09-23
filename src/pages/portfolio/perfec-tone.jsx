import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/perfectone/perfectone-1.jpg'
import screen2 from '@/images/projects/perfectone/perfectone-2.jpg'
import screen3 from '@/images/projects/perfectone/perfectone-3.jpg'
import screen4 from '@/images/projects/perfectone/perfectone-4.jpg'
import screen5 from '@/images/projects/perfectone/perfectone-5.jpg'
import screen6 from '@/images/projects/perfectone/perfectone-6.jpg'
import screen7 from '@/images/projects/perfectone/perfectone-7.jpg'
import screen8 from '@/images/projects/perfectone/perfectone-8.jpg'

const projectData = {
  meta: {
    title: 'E-commerce Website Design — Perfec-Tone | Arif Alim',
    description:
      'Responsive e-commerce design for Perfec-Tone, including a style guide, reusable components, and shopping interfaces.',
  },
  layout: {
    title: 'Perfec-tone',
    intro: 'E-commerce mobile responsive web design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          'For Perfec-Tone, I created a style guide covering typography and color, alongside reusable design components for the e-commerce website.',
          'The project included design and development of a mobile-responsive e-commerce website, with product descriptions, navigation, and checkout layouts for desktop and mobile devices.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Perfec-tone screen 1' },
          { src: screen2, alt: 'Perfec-tone screen 2' },
          { src: screen3, alt: 'Perfec-tone screen 3' },
          { src: screen4, alt: 'Perfec-tone screen 4' },
          { src: screen5, alt: 'Perfec-tone screen 5' },
          { src: screen6, alt: 'Perfec-tone screen 6' },
          { src: screen7, alt: 'Perfec-tone screen 7' },
          { src: screen8, alt: 'Perfec-tone screen 8' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Perfec-tone',
        paragraphs: ['Perfec-Tone is a skincare brand.'],
        link: 'https://perfec-tone.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
