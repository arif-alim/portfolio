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

// TODO(Arif): Confirm detailed scope and ownership before expanding this overview.
// Evidence and open questions: docs/content-credibility-report.md.
const projectData = {
  meta: {
    title: 'Website Design — Chicasa Design | Arif Alim',
    description:
      'Selected web design work for Chicasa Design, a renovation and custom home building company.',
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
          'Web design for Chicasa Design. The selected website layouts are shown in the Wireframes tab.',
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
          'Chicasa Design is a renovation and custom home building company serving Toronto and the GTA.',
        ],
        link: 'http://www.chicasadesign.com/',
      },
    },
  ],
}

export default function ChicasaDesign() {
  return <PortfolioTemplate {...projectData} />
}
