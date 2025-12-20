import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/mbo/mbo-1.jpeg'
import screen2 from '@/images/projects/mbo/mbo-2.jpeg'
import screen3 from '@/images/projects/mbo/mbo-3.jpeg'
import screen4 from '@/images/projects/mbo/mbo-4.jpeg'
import screen5 from '@/images/projects/mbo/mbo-5.jpeg'
import screen6 from '@/images/projects/mbo/mbo-6.jpeg'
import screen7 from '@/images/projects/mbo/mbo-7.jpeg'

const projectData = {
  meta: {
    title: 'Miss Bahamas - Project',
  },
  layout: {
    title: 'Miss Bahamas Organization (MBO)',
    intro: 'Responsive Mobile Design',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          "I led the design efforts for the Miss Bahamas Organization's webpage and mobile app, creating a cohesive and engaging digital presence. I began by defining user stories and epics to ensure the design aligned with the needs of both users and stakeholders. Using these foundations, I crafted intuitive and visually appealing web and mobile app designs that emphasized accessibility and responsiveness.",
          "I collaborated closely with developers to translate the designs into functional interfaces, ensuring a seamless user experience across all devices. Throughout the process, I facilitated clear communication and alignment between design and development teams, enabling efficient iterations and timely delivery of the project.",
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        images: [
          { src: screen1, alt: 'Miss Bahamas screen 1' },
          { src: screen2, alt: 'Miss Bahamas screen 2' },
          { src: screen3, alt: 'Miss Bahamas screen 3' },
          { src: screen4, alt: 'Miss Bahamas screen 4' },
          { src: screen5, alt: 'Miss Bahamas screen 5' },
          { src: screen6, alt: 'Miss Bahamas screen 6' },
          { src: screen7, alt: 'Miss Bahamas screen 7' },
        ],
        columnsLg: 3,
      },
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About MBO',
        paragraphs: [
          'The Miss Bahamas Organization (MBO) is dedicated to empowering women by fostering their passions, self-image, and education. Their mission is to help women achieve their personal bests in an environment that encourages purpose, discipline, and strong character.',
          'MBO accomplishes this through an annual national beauty pageant system that includes intensive grooming, coaching, and preparation, culminating in the coronation of Miss World Bahamas. The organization prepares participants to become women who understand the power of fulfilling their purpose and use that power to positively impact humanity.',
          'MBO also engages in charitable endeavors, such as establishing a $25,000 scholarship endowment at the University of The Bahamas, demonstrating their commitment to "Beauty with a Purpose."',
        ],
        link: 'https://www.missbahamas.net/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
