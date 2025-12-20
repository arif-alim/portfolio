import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/equitybank/equitybank-1.jpg'
import screen2 from '@/images/projects/equitybank/equitybank-2.jpg'
import screen3 from '@/images/projects/equitybank/equitybank-3.jpg'
import screen4 from '@/images/projects/equitybank/equitybank-4.jpg'
import screen5 from '@/images/projects/equitybank/equitybank-5.jpg'
import screen6 from '@/images/projects/equitybank/equitybank-6.jpg'
import screen7 from '@/images/projects/equitybank/equitybank-7.jpg'
import screen8 from '@/images/projects/equitybank/equitybank-8.jpg'

import logoEquityBank from '@/images/projects/equitybank/equitybank-logo.svg'

const projectData = {
  meta: {
    title: 'Equity Bank Bahamas - Project',
    description: 'Equity Bank is a leading financial institution in the Bahamas.',
  },
  layout: {
    title: 'Equity Bank Bahamas',
    intro: 'Responsive Web Design',
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Equity Bank & Affiliates Responsive Website',
        logo: {
          src: logoEquityBank,
          alt: 'Equity Bank Bahamas logo',
        },
        paragraphs: [
          "The Equity Bank Bahamas website underwent a UI/UX redesign to improve its user experience and better meet the needs of its customers.",
          "The homepage was redesigned to provide a more streamlined and user-friendly experience. The new design features clear and concise messaging, simplified navigation, and prominent calls to action that guide users towards their desired actions.",
          "The color scheme and typography were also updated to create a more modern and visually appealing design. The use of white space and high-quality images helps to create a clean and professional look that is easy on the eyes. One of the main objectives of the redesign was to improve the website's accessibility and mobile responsiveness. The new design is optimized for mobile devices, ensuring that users can access the website on any device and have a seamless experience.",
          "The navigation was also updated to improve the user journey and make it easier for users to find what they need. The new navigation features clear labels and drop-down menus that provide quick access to the most important pages on the website.",
          "Overall, the Equity Bank Bahamas website redesign has resulted in a significant improvement in the user experience. The new design is modern, user-friendly, and optimized for mobile devices, making it easier for customers to access the information and services they need. The improved accessibility and streamlined navigation have also helped to increase engagement and improve customer satisfaction.",
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Responsive Website Wireframes',
        description:
          'Key responsive layouts for homepage and primary content templates.',
        images: [
          { src: screen1, alt: 'Equity Bank wireframe 1' },
          { src: screen2, alt: 'Equity Bank wireframe 2' },
          { src: screen3, alt: 'Equity Bank wireframe 3' },
          { src: screen4, alt: 'Equity Bank wireframe 4' },
          { src: screen5, alt: 'Equity Bank wireframe 5' },
          { src: screen6, alt: 'Equity Bank wireframe 6' },
          { src: screen7, alt: 'Equity Bank wireframe 7' },
          { src: screen8, alt: 'Equity Bank wireframe 8' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Equity Bank Bahamas',
        paragraphs: [
          'Equity Bank Bahamas is a commercial bank that provides a wide range of financial services to individuals, businesses, and organizations in the Bahamas. The bank offers various products and services such as personal and business banking, loans and mortgages, credit cards, and investment services.',
          'Equity Bank Bahamas is committed to providing exceptional customer service and innovative financial solutions to help its clients achieve their financial goals. The bank is also actively involved in various community initiatives and supports social responsibility programs aimed at improving the lives of Bahamians.',
        ],
        link: 'https://www.missbahamas.net/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
