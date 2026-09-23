import { PortfolioTemplate, Screenshot } from '@/components/portfolio'

// Homepage
import homepage1 from '@/images/projects/co-operators/homepage1.jpg'
import homepage2 from '@/images/projects/co-operators/homepage2.jpg'
import homepage3 from '@/images/projects/co-operators/homepage3.jpg'
import homepage4 from '@/images/projects/co-operators/homepage4.jpg'

// Style guide
import sg1 from '@/images/projects/co-operators/sg1.jpg'
import sg2 from '@/images/projects/co-operators/sg2.jpg'
import sg3 from '@/images/projects/co-operators/sg3.jpg'
import sg4 from '@/images/projects/co-operators/sg4.jpg'

// Illustrations
import illustration1 from '@/images/projects/co-operators/illustration1.jpg'
import illustration2 from '@/images/projects/co-operators/illustration2.jpg'

// Design system
import component1 from '@/images/projects/co-operators/component1.jpg'
import component2 from '@/images/projects/co-operators/component2.jpg'
import component3 from '@/images/projects/co-operators/component3.jpg'
import component4 from '@/images/projects/co-operators/component4.jpg'

// Custom Wireframes Section
function WireframesSectionCustom() {
  const rows = [
    { title: 'Homepage', images: [homepage1, homepage2] },
    { title: 'Sign-in and Upgrade Policy', images: [homepage3, homepage4] },
  ]

  return (
    <div className="space-y-10">
      {rows.map((row, i) => (
        <div key={i}>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {row.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:p-8">
            {row.images.map((img, idx) => (
              <Screenshot key={idx} src={img} alt={row.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Custom Style Guide Section
function StyleGuideSectionCustom() {
  return (
    <div className="space-y-4">
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Light and Dark Theme
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[sg1, sg2, sg3, sg4].map((img, idx) => (
          <Screenshot key={idx} src={img} alt="Style guide" />
        ))}
      </div>
    </div>
  )
}

// Custom Illustrations Section
function IllustrationsSectionCustom() {
  return (
    <div className="space-y-4">
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Illustrations
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[illustration1, illustration2].map((img, idx) => (
          <Screenshot key={idx} src={img} alt="Illustration" />
        ))}
      </div>
    </div>
  )
}

// Custom Design Systems Section
function DesignSystemsSectionCustom() {
  const sections = [
    { title: 'Banners', images: [component1, component2, component3] },
    { title: 'Tile and Snackbar Component', images: [component4] },
  ]

  return (
    <div className="space-y-10">
      {sections.map((sec, idx) => (
        <div key={idx}>
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {sec.title}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sec.images.map((img, i) => (
              <Screenshot key={i} src={img} alt={sec.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// TODO(Arif): Confirm detailed scope and ownership before expanding this overview.
// Evidence and open questions: docs/content-credibility-report.md.
const projectData = {
  meta: {
    title: 'Digital Interface Design — Co-operators | Arif Alim',
    description:
      'UI design contributions for Co-operators, including homepage and sign-in screens, a style guide, illustrations, and components.',
  },
  layout: {
    title: 'Co-operators',
    intro: "Helped create Co-operators' new visual identity.",
  },
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          "I helped create Co-operators' new visual identity, with designs for the homepage, sign-in, and policy upgrade screens.",
          'I contributed to a style guide covering light and dark themes, alongside illustrations, banners, and tile and snackbar components.',
        ],
      },
    },
    {
      name: 'Wireframes',
      render: () => <WireframesSectionCustom />,
    },
    {
      name: 'Style guide',
      render: () => <StyleGuideSectionCustom />,
    },
    {
      name: 'Illustrations',
      render: () => <IllustrationsSectionCustom />,
    },
    {
      name: 'Design systems',
      render: () => <DesignSystemsSectionCustom />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Co-operators',
        paragraphs: [
          'Co-operators is a Canadian insurance co-operative providing insurance and financial services.',
        ],
        link: 'https://www.cooperators.ca/en/',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
