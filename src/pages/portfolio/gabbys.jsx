import { PortfolioTemplate } from '@/components/portfolio'

import screen1 from '@/images/projects/gabbys/gabbys-1.jpg'
import screen2 from '@/images/projects/gabbys/gabbys-2.jpg'
import screen3 from '@/images/projects/gabbys/gabbys-3.jpg'
import screen4 from '@/images/projects/gabbys/gabbys-4.jpg'
import screen5 from '@/images/projects/gabbys/gabbys-5.jpg'
import screen6 from '@/images/projects/gabbys/gabbys-6.jpg'
import logoGabbys from '@/images/projects/gabbys/gabbys.svg'

// TODO(Arif): Confirm detailed scope and ownership before expanding this overview.
// Evidence and open questions: docs/content-credibility-report.md.
const projectData = {
  meta: {
    title: "Website & Brand Design — Gabby's | Arif Alim",
    description:
      "Graphic design, logo design, and mobile-responsive website design for Gabby's restaurant.",
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
          "For Gabby's, my work included graphic design, logo design, and a mobile-responsive website.",
        ],
      },
    },
    {
      name: 'Wireframes',
      type: 'wireframes',
      content: {
        heading: 'Responsive Web Layouts',
        description: 'Selected responsive website layouts.',
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
          "Gabby's is a restaurant business with locations in the Greater Toronto Area.",
        ],
        link: 'https://gabbys.ca/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
