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
    title: 'Niagara Falls Craft Distiller - Project',
    description:
      'At Niagara Falls Craft Distillers, our products are made locally at our state-of-the-art distillery, including a 1,000-litre copper kettle with stainless steel fermenters.',
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
        title: 'Island traders responsive web design',
        paragraphs: [
          'The Niagara Falls Craft Distillers website underwent a complete overhaul, with a custom e-commerce responsive design that incorporates the laws of UX to enhance user experience and drive sales.',
          "The homepage was redesigned to feature a full-screen banner showcasing the company's premium spirits, which immediately draws the user's attention. The design incorporates a scroll-down feature that allows the user to learn more about the company's products and brand story. The navigation was updated with clear labels and drop-down menus, and the addition of a search bar makes it easy for users to find specific products or information.",
          "Custom pages were created to showcase the company's products and events, with optimized search functionality to help users find what they need quickly. The use of high-quality images and white space creates a clean and professional look, while the modern and premium design enhances the user experience and promotes brand recognition.",
          'The website was optimized for mobile devices to ensure that users can access the website on any device and have a seamless experience. The custom e-commerce design allows for easy purchasing, with a streamlined checkout process and secure payment gateway to enhance user trust and drive sales.',
          "Overall, the Niagara Falls Craft Distillers website redesign has resulted in a significant improvement in user experience and sales. The custom design incorporates the laws of UX to enhance user engagement and drive conversions, with a focus on showcasing the company's premium spirits and brand story.",
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
          'Niagara Falls Craft Distillers is a premium craft distillery based in Niagara Falls, Canada. The company specializes in the production of premium spirits, including vodka, gin, and whiskey, using locally sourced ingredients and traditional distilling techniques. With a focus on quality and innovation, Niagara Falls Craft Distillers has established itself as a leading player in the craft spirits industry, winning numerous awards for its exceptional products. The company is committed to sustainability and ethical practices, with a focus on reducing its environmental impact and supporting the local community. With a dedication to quality, craftsmanship, and innovation, Niagara Falls Craft Distillers is a leading choice for discerning spirits enthusiasts and connoisseurs.',
        ],
        link: 'https://niagarafallscraftdistillers.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
