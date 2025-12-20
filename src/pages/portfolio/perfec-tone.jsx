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
    title: 'Perfec-tone - Project',
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
          "For Perfec-Tone, I developed a cohesive digital design strategy to enhance their online presence and create a seamless user experience. Starting with a style guide, I selected typography that balanced readability and elegance while curating a color palette that reflected the brand's focus on natural beauty and organic ingredients. To ensure consistency and efficiency, I created reusable design components that streamlined the design process and maintained a unified look across all touchpoints.",
          "The project culminated in the design and development of a mobile-responsive e-commerce website tailored to Perfec-Tone's needs. The website was crafted to provide an intuitive shopping experience, featuring user-friendly navigation, clear product descriptions, and a seamless checkout process. By emphasizing responsive design principles, the site was optimized for both desktop and mobile devices, ensuring accessibility and usability for all users. This work helped Perfec-Tone elevate their digital presence and deliver a polished, customer-focused online experience.",
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
        paragraphs: [
          "Perfec-Tone is a skincare company that offers a range of products designed to address a wide range of skin concerns. The company was founded with the goal of providing effective and affordable skincare solutions for all skin types and tones. Perfec-Tone's products are formulated using natural and organic ingredients, and they are free from harsh chemicals and synthetic fragrances. The company's product line includes cleansers, toners, moisturizers, serums, and treatments that are designed to address common skin concerns such as acne, hyperpigmentation, and aging. Perfec-Tone is committed to promoting healthy and radiant skin, and it offers personalized skincare consultations to help customers find the right products for their individual needs. The company's mission is to provide high-quality skincare solutions that are accessible and affordable, while promoting natural beauty and self-confidence. Perfec-Tone continues to innovate and expand its product line to meet the evolving needs of its customers, and it has established itself as a trusted brand in the skincare industry.",
        ],
        link: 'https://perfec-tone.com/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
