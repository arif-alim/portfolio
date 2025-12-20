import { PortfolioTemplate } from '@/components/portfolio'

// Screens
import screen1 from '@/images/projects/chicasa/chicasa-1.jpg'
import screen2 from '@/images/projects/chicasa/chicasa-2.jpg'
import screen3 from '@/images/projects/chicasa/chicasa-3.jpg'
import screen4 from '@/images/projects/chicasa/chicasa-4.jpg'
import screen5 from '@/images/projects/chicasa/chicasa-5.jpg'
import screen6 from '@/images/projects/chicasa/chicasa-6.jpg'
import screen7 from '@/images/projects/chicasa/chicasa-7.jpg'
import screen8 from '@/images/projects/chicasa/chicasa-8.jpg'

// Brand
import logoChicasaDesign from '@/images/projects/chicasa/chicasa-design-logo.svg'

const projectData = {
  meta: {
    title: 'Chicasa Design - Project',
    description:
      'Dynamic web and e-commerce design for Chicasa Design / Perfec-Tone.',
  },
  layout: {
    title: 'Chicasa Design',
    intro: 'Dynamic Web Design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Chicasa Web Design',
        logo: {
          src: logoChicasaDesign,
          alt: 'Chicasa Design logo',
        },
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
        sections: [
          {
            images: [
              { src: screen1, alt: 'Chicasa screen 1' },
              { src: screen2, alt: 'Chicasa screen 2' },
              { src: screen3, alt: 'Chicasa screen 3' },
              { src: screen4, alt: 'Chicasa screen 4' },
              { src: screen5, alt: 'Chicasa screen 5' },
              { src: screen6, alt: 'Chicasa screen 6' },
              { src: screen7, alt: 'Chicasa screen 7' },
              { src: screen8, alt: 'Chicasa screen 8' },
            ],
            columnsCount: 3,
          },
        ],
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Chicasa Design',
        paragraphs: [
          "Chicasa Design is a professional renovation contracting company based in Toronto and the GTA that specializes in creating bespoke homes and investment opportunities. With over 20 years of experience in the industry, the company was founded on the belief that homes should be more than just a place to live, they should be a work of living art. The company's goal is to unlock the dreams of their clients and to provide a world-class, bespoke home building experience.",
          "Chicasa Design has built a world-class team of designers, craftsmen, and suppliers to ensure that every project is done to perfection. They take into account their clients' requirements, budget, and timeline to ensure complete satisfaction with the finished product. From the initial design to the final touches, Chicasa Design is efficient, diligent, and always focused on their clients' satisfaction. The company offers a proven process that minimizes mistakes and costs while delivering the highest quality results. Their staff is composed of certified professional designers and renovators who put the same focus and detail into each project they work on. The company offers a warranty on all labor performed on their clients' properties, providing peace of mind that the work is done to last for generations.",
        ],
        link: 'http://www.chicasadesign.com/',
      },
    },
  ],
}

export default function ChicasaDesign() {
  return <PortfolioTemplate {...projectData} />
}
