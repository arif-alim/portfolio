import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/lieber/lieber-1.jpg'
import screen2 from '@/images/projects/lieber/lieber-2.jpg'
import screen3 from '@/images/projects/lieber/lieber-3.jpg'
import screen4 from '@/images/projects/lieber/lieber-4.jpg'
import screen5 from '@/images/projects/lieber/lieber-5.jpg'
import screen6 from '@/images/projects/lieber/lieber-6.jpg'
import screen7 from '@/images/projects/lieber/lieber-7.jpg'

const projectData = {
  meta: {
    title: 'Lieber Group - Project',
    description:
      'Modern, responsive redesign of the Lieber Group website, focused on accessibility, UI trends, and improved engagement.',
  },
  layout: {
    title: 'Lieber Group',
    intro:
      "Responsive, parallax-driven marketing site redesign that brings Lieber Group's consulting practice in line with modern UX and accessibility standards.",
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        title: 'Lieber Group responsive web design',
        paragraphs: [
          'The Lieber Group website redesign is at the forefront of the latest UI trends and UX laws, resulting in a truly modern and user-friendly design that enhances accessibility and engagement.',
          'The use of responsive design and parallax scrolling improves accessibility and engagement by optimizing the website for mobile devices and creating a dynamic and immersive user experience. Users can access the website seamlessly on any device, and the engaging design keeps them interested and engaged with the content.',
          'Overall, the Lieber Group website redesign is a perfect example of how the latest UI trends and UX laws can be utilized to create a modern and user-friendly design that enhances accessibility and engagement. The improved navigation and search functionality, coupled with the modern design, results in a significant improvement in user experience and customer satisfaction.',
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Lieber Group website screens',
        images: [
          { src: screen1, alt: 'Lieber Group screen 1' },
          { src: screen2, alt: 'Lieber Group screen 2' },
          { src: screen3, alt: 'Lieber Group screen 3' },
          { src: screen4, alt: 'Lieber Group screen 4' },
          { src: screen5, alt: 'Lieber Group screen 5' },
          { src: screen6, alt: 'Lieber Group screen 6' },
          { src: screen7, alt: 'Lieber Group screen 7' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'Lieber Group',
        paragraphs: [
          "Lieber Group is a Canadian company that provides a wide range of consulting and advisory services to businesses of all sizes. Established in 1986, the company has built a strong reputation for its expertise and commitment to delivering high-quality solutions that meet the unique needs of each client. Lieber Group offers a range of services, including strategy consulting, project management, IT consulting, and business analysis, among others. With a focus on customer satisfaction and a team of highly skilled professionals, Lieber Group is committed to providing exceptional service and tailored solutions to help its clients achieve their business goals. With over 35 years of experience, Lieber Group has a deep understanding of the Canadian business landscape and is well-positioned to help businesses navigate the challenges of today's rapidly changing business environment.",
        ],
        link: 'http://www.liebergroup.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
