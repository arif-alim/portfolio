import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/titan/titan-1.jpg'
import screen2 from '@/images/projects/titan/titan-2.jpg'
import screen3 from '@/images/projects/titan/titan-3.jpg'
import screen4 from '@/images/projects/titan/titan-4.jpg'
import screen5 from '@/images/projects/titan/titan-5.jpg'
import screen6 from '@/images/projects/titan/titan-6.jpg'
import screen7 from '@/images/projects/titan/titan-7.jpg'
import screen8 from '@/images/projects/titan/titan-8.jpg'

const projectData = {
  meta: {
    title: 'Titan Group - Project',
  },
  layout: {
    title: 'Titan Group',
    intro:
      'Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience.',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          'Perfec-Tone is a skincare company that offers a range of products designed to address various skin concerns. To help the company reach a wider audience and provide a seamless shopping experience for its customers, we designed a mobile responsive e-commerce website that emphasized both user interface (UI) and user experience (UX) design principles.',
          "The website's UI was carefully crafted to highlight the brand's natural and organic ingredients, while also providing clear and concise product descriptions and easy-to-use navigation menus. We used high-quality product photography and incorporated soft, pastel colors to create a soothing and inviting aesthetic. The website's UX was designed to be intuitive and easy to use, with a simple checkout process and clear calls-to-action throughout the website. Additionally, we implemented responsive design principles to ensure that the website looked great and functioned well on both desktop and mobile devices, providing a seamless shopping experience for customers no matter where they accessed the website from. The result was an e-commerce website that not only looked great but also provided a seamless shopping experience for Perfec-Tone's customers.",
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Titan Group screen 1' },
          { src: screen2, alt: 'Titan Group screen 2' },
          { src: screen3, alt: 'Titan Group screen 3' },
          { src: screen4, alt: 'Titan Group screen 4' },
          { src: screen5, alt: 'Titan Group screen 5' },
          { src: screen6, alt: 'Titan Group screen 6' },
          { src: screen7, alt: 'Titan Group screen 7' },
          { src: screen8, alt: 'Titan Group screen 8' },
        ],
        columnsLg: 2,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Titan Group',
        paragraphs: [
          'Titan Group is a Canadian company that specializes in construction and project management services. Established in 1999, the company has grown to become a leading provider of construction services, serving clients in various industries such as commercial, industrial, institutional, and residential.',
          "The company's services range from project planning, design and engineering, to construction management, general contracting, and post-construction services. Titan Group takes pride in its highly skilled workforce and the use of cutting-edge technology to ensure efficiency and timely delivery of projects.",
          "The company's commitment to quality, safety, and sustainability is evident in the numerous certifications it has obtained, including the ISO 9001:2015 and ISO 14001:2015. Titan Group's focus on innovation and customer satisfaction has earned it a reputation as a trusted and reliable partner in the construction industry.",
        ],
        link: 'http://www.chicasadesign.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
