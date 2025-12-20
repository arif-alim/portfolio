import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/gabbys/gabbys-1.jpg'
import screen2 from '@/images/projects/gabbys/gabbys-2.jpg'
import screen3 from '@/images/projects/gabbys/gabbys-3.jpg'
import screen4 from '@/images/projects/gabbys/gabbys-4.jpg'
import screen5 from '@/images/projects/gabbys/gabbys-5.jpg'
import screen6 from '@/images/projects/gabbys/gabbys-6.jpg'
import logoGabbys from '@/images/projects/gabbys/gabbys.svg'

const projectData = {
  meta: {
    title: 'Gabbys - Project',
  },
  layout: {
    title: 'Gabbys',
    intro: 'Graphic design, mobile responsive website, and logo design.',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Gabbys.ca Responsive Website & Brand',
        logo: {
          src: logoGabbys,
          alt: 'Gabbys logo',
        },
        paragraphs: [
          'In this case study, we explore the user interface (UI) and user experience (UX) design of the website for Gabbys.ca, a Canadian online store that sells unique and handmade clothing, jewelry, and accessories.',
          'Gabbys.ca approached our team to revamp their existing website, which was outdated and not optimized for mobile devices. They wanted a modern, user-friendly design that showcased their products and made it easy for customers to shop and make purchases online.',
          'Based on our research, we developed a design strategy that focused on simplicity, clarity, and ease of use. We started with wireframes and prototypes to test and iterate on different design concepts and layouts, working closely with the client to ensure the design reflected their brand and vision.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Responsive Web Layouts',
        description:
          'Exploration of homepage, product listing, and detail views.',
        images: [
          { src: screen1, alt: 'Gabbys wireframe 1' },
          { src: screen2, alt: 'Gabbys wireframe 2' },
          { src: screen3, alt: 'Gabbys wireframe 3' },
          { src: screen4, alt: 'Gabbys wireframe 4' },
          { src: screen5, alt: 'Gabbys wireframe 5' },
          { src: screen6, alt: 'Gabbys wireframe 6' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: "Gabby's",
        paragraphs: [
          "Gabby's, founded in 1989, is a family-owned and operated business that offers fresh and delicious food in a welcoming environment. With over 30 years of experience, Gabby's has become a well-known and trusted brand in the food industry, serving its customers with the highest quality ingredients and exceptional customer service. The company takes pride in its commitment to sustainability and supporting local farmers and businesses.",
          "Gabby's has several locations in the Greater Toronto Area, offering a variety of menu options for breakfast, lunch, and dinner. With its warm and inviting atmosphere, Gabby's is a favorite destination for families, friends, and colleagues to gather and enjoy good food and good company.",
        ],
        link: 'https://gabbys.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
