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
    title: 'Island Traders - Project',
    description:
      'Designed and developed Island Traders front-facing pages and custom logo.',
  },
  layout: {
    title: 'Island Traders',
    intro:
      'Complete redesign of the 242 Island Traders website, with a focus on responsive, accessible UI and a modern visual system.',
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
          "The 242 Island Traders website was in need of a complete overhaul, as the previous version was not responsive, not accessible, and had an outdated design. The objective of the UI/UX redesign was to create a visually appealing and intuitive website that showcases the company's products and services while improving user experience.",
          "The homepage was redesigned to feature a full-screen banner that highlights the company's products and services, providing users with an engaging experience. The navigation was updated to simplify the user journey, with clear labels, drop-down menus, and a search bar for easy access to specific products and services.",
          'The color scheme and typography were also updated to create a modern, visually appealing design that uses high-quality images and white space to create a clean and professional look.',
          'The main focus of the redesign was on mobile responsiveness, ensuring that the website is optimized for mobile devices, and users can access it seamlessly on any device. The redesign has resulted in a significant improvement in user experience, with a modern, user-friendly website that makes it easier for customers to access the information and products they need. The improved navigation and search functionality have also helped to increase engagement and improve customer satisfaction.',
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
          '242 Island Traders is a Bahamian company that offers a range of products and services, including home appliances, electronics, building materials, and industrial equipment. The company has been in business for over 50 years and has established itself as a trusted provider of high-quality products and exceptional customer service. With multiple locations across the Bahamas, 242 Island Traders is committed to serving the needs of its customers, offering competitive prices and flexible payment options. The company is also actively involved in supporting the local community through various charitable initiatives and events.',
        ],
        link: 'https://www.242islandtraders.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
