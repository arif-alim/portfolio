import Link from 'next/link'
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

const projectData = {
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
          'During my tenure at Co-operators, I developed user-centric digital experiences...',
          "In my tenure with Co-operators, I harnessed my deep understanding of the insurance sector to develop intuitive and user-friendly digital experiences...",
          "I also employed tools like Miro and Figma's extensive plugins and integrations...",
          'In addition to these responsibilities, I contributed to the creation of a comprehensive style guide...',
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
          'Co-operators Group Limited is a reputable Canadian insurance co-operative that provides a wide range of insurance and financial services to individuals and businesses across Canada.',
        ],
        link: 'https://www.cooperators.ca/en/',
      },
    },
    {
      name: 'Case Study',
      render: () => (
        <div className="mt-6 max-w-2xl lg:col-span-5 lg:mt-0">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Coming Soon...
          </h3>
        </div>
      ),
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
