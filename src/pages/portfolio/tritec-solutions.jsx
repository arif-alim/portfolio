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

const projectData = {
  meta: {
    title: 'Tritec Solutions - Project',
    description:
      'Tritec Solutions is a Canadian IT solutions provider that specializes in delivering innovative and cost-effective technology solutions to businesses of all sizes.',
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
          "Tritec Solutions is a Canadian company that provides innovative IT solutions and support to businesses of all sizes. Established in 1997, the company has built a strong reputation for its reliable and cost-effective services, including managed IT services, cybersecurity solutions, cloud solutions, and software development. Tritec Solutions prides itself on its team of highly skilled professionals who are committed to delivering exceptional customer service and IT solutions that meet the unique needs of each client. The company's focus on innovation and continuous improvement has helped it to stay at the forefront of the rapidly evolving technology landscape. With a commitment to excellence and customer satisfaction, Tritec Solutions is a trusted partner for businesses seeking to leverage technology to achieve their goals.",
        ],
        link: 'https://tritecsolutions.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
