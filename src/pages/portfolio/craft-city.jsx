import { PortfolioTemplate } from '@/components/portfolio'

// Craft City Logo
import ccLogo1 from '@/images/projects/craftcity/ccLogo.jpg'
import ccLogo2 from '@/images/projects/craftcity/ccLogo1.jpg'
import ccLogo3 from '@/images/projects/craftcity/ccLogo2.jpg'
import ccLogo4 from '@/images/projects/craftcity/ccLogo3.jpg'
// Craft City Sticker
import ccSticker1 from '@/images/projects/craftcity/ccSticker1.png'
import ccSticker2 from '@/images/projects/craftcity/ccSticker2.png'
import ccSticker3 from '@/images/projects/craftcity/ccSticker3.png'
// Craft City Can Design
import ccCan1 from '@/images/projects/craftcity/ccCanDesign.jpg'
import ccCan2 from '@/images/projects/craftcity/ccCanDesign2.jpg'
import ccCan3 from '@/images/projects/craftcity/ccCanDesign3.jpg'
import ccCan4 from '@/images/projects/craftcity/ccCanDesign4.jpg'
import ccCan5 from '@/images/projects/craftcity/ccCanDesign5.jpg'
// Craft City Promo Assets
import ccPromo1 from '@/images/projects/craftcity/ccPromo1.jpg'
import ccPromo2 from '@/images/projects/craftcity/ccPromo2.jpg'
import ccPromo3 from '@/images/projects/craftcity/ccPromo3.jpg'
import ccPromo4 from '@/images/projects/craftcity/ccPromo4.jpg'
import ccPromo5 from '@/images/projects/craftcity/ccPromo4.jpg'

import logoCraftCity from '@/images/projects/craftcity/craftcity-logo.svg'

const projectData = {
  meta: {
    title: 'Craft City - Project',
    description: 'Craft City Hard Seltzer',
  },
  layout: {
    title: 'Craft City',
    intro: 'Designed their custom logo and their e-commerce website.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        logo: {
          src: logoCraftCity,
          alt: 'Craft City logo',
        },
        paragraphs: [
          'Craft City Hard Seltzer is a new hard seltzer brand based in Toronto, Canada. They are a small batch, handcrafted hard seltzer brand that is made with real fruit juice and natural flavours. They are currently available in Ontario, Canada.',
        ],
      },
    },
    {
      name: 'Logo',
      type: 'imageGrid',
      content: {
        heading: 'Logo Design',
        description: 'Designed their custom logo and their e-commerce website.',
        columnsLg: 4,
        images: [
          { src: ccLogo1, alt: 'Craft City logo concept 1' },
          { src: ccLogo2, alt: 'Craft City logo concept 2' },
          { src: ccLogo3, alt: 'Craft City logo concept 3' },
          { src: ccLogo4, alt: 'Craft City logo concept 4' },
        ],
      },
    },
    {
      name: 'Sticker',
      type: 'imageGrid',
      content: {
        heading: 'Sticker Design',
        description: 'Exploration of sticker and label variations.',
        columnsLg: 3,
        images: [
          { src: ccSticker1, alt: 'Craft City sticker 1' },
          { src: ccSticker2, alt: 'Craft City sticker 2' },
          { src: ccSticker3, alt: 'Craft City sticker 3' },
        ],
      },
    },
    {
      name: 'Can Design',
      type: 'imageGrid',
      content: {
        heading: 'Can Design',
        description: 'Designed the hard seltzer cans using Illustrator.',
        columnsLg: 5,
        images: [
          { src: ccCan1, alt: 'Craft City can design 1' },
          { src: ccCan2, alt: 'Craft City can design 2' },
          { src: ccCan3, alt: 'Craft City can design 3' },
          { src: ccCan4, alt: 'Craft City can design 4' },
          { src: ccCan5, alt: 'Craft City can design 5' },
        ],
      },
    },
    {
      name: 'Marketing',
      type: 'imageGrid',
      content: {
        heading: 'Marketing & Promotional Assets',
        description:
          'Designed and printed custom promotional assets such as banners, posters, and point-of-sale materials.',
        columnsLg: 4,
        images: [
          { src: ccPromo1, alt: 'Craft City promotional asset 1' },
          { src: ccPromo2, alt: 'Craft City promotional asset 2' },
          { src: ccPromo3, alt: 'Craft City promotional asset 3' },
          { src: ccPromo4, alt: 'Craft City promotional asset 4' },
          { src: ccPromo5, alt: 'Craft City promotional asset 5' },
        ],
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
