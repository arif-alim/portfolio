import { ResponsiveIframe } from '@/components/portfolio/ResponsiveIframe'
import Link from 'next/link'
import { PortfolioTemplate, Screenshot } from '@/components/portfolio'

// Service Ontario
import masthead from '@/images/projects/serviceontario/ServiceOntario.png'
import screen1 from '@/images/projects/serviceontario/ddr1.jpg'
import screen2 from '@/images/projects/serviceontario/ddr2.jpg'
import screen3 from '@/images/projects/serviceontario/ddr3.jpg'
import screen5 from '@/images/projects/serviceontario/ddr5.jpg'
import screen6 from '@/images/projects/serviceontario/ddr6.jpg'
import screen7 from '@/images/projects/serviceontario/ddr7.jpg'
import screen9 from '@/images/projects/serviceontario/ddr9.jpg'
import screen10 from '@/images/projects/serviceontario/ddr10.jpg'
import screen11 from '@/images/projects/serviceontario/ddr11.jpg'
import screen13 from '@/images/projects/serviceontario/ddr13.jpg'
import screen14 from '@/images/projects/serviceontario/ddr14.jpg'
import screen15 from '@/images/projects/serviceontario/ddr15.jpg'
import screen17 from '@/images/projects/serviceontario/ddr17.jpg'
import screen18 from '@/images/projects/serviceontario/ddr18.jpg'
import screen19 from '@/images/projects/serviceontario/ddr19.jpg'
import screen21 from '@/images/projects/serviceontario/ddr21.jpg'
import screen22 from '@/images/projects/serviceontario/ddr22.jpg'
import screen23 from '@/images/projects/serviceontario/ddr23.jpg'

// Custom Wireframes Section with 3-column layout
function WireframesSectionCustom() {
  const column1 = [screen1, screen5, screen9, screen13, screen17, screen21]
  const column2 = [screen2, screen6, screen10, screen14, screen18, screen22]
  const column3 = [screen3, screen7, screen11, screen15, screen19, screen23]

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:p-6">
      <div className="flex flex-col gap-6 lg:col-span-4">
        {column1.map((src, idx) => (
          <Screenshot
            key={idx}
            src={src}
            alt={`Service Ontario screen ${idx * 4 + 1}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 lg:col-span-4">
        {column2.map((src, idx) => (
          <Screenshot
            key={idx}
            src={src}
            alt={`Service Ontario screen ${idx * 4 + 2}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 lg:col-span-4">
        {column3.map((src, idx) => (
          <Screenshot
            key={idx}
            src={src}
            alt={`Service Ontario screen ${idx * 4 + 3}`}
          />
        ))}
      </div>
    </div>
  )
}

// Custom Prototypes Section with Figma iframe
function PrototypesSectionCustom() {
  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="my-6 lg:mt-0 lg:max-w-3xl">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Prototypes
        </h3>
        <p className="mt-2 text-gray-600 dark:text-zinc-200">
          If the embedded prototype doesn&apos;t work, click the link to view it
          in browser.
        </p>
        <Link
          href="https://ddr-demo.vercel.app/"
          target="_blank"
          className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View web prototype
        </Link>

        <div className="mt-10">
          <Link
            className="text-blue-800 dark:text-blue-400"
            href="https://www.figma.com/proto/ZstoHuYqSWOp5f5On03TAD/Design---Truth-Clickable?page-id=0%3A1&node-id=47-28658&starting-point-node-id=47%3A28004"
            target="_blank"
          >
            View clickable prototype
          </Link>
        </div>
      </div>
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Embedded Figma iFrame
      </h2>
      <div className="mb-0 lg:mb-8">
        <ResponsiveIframe
          title="ServiceOntario Digital Dealership Registration prototype"
          className="border-1 border-black border-opacity-10"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZstoHuYqSWOp5f5On03TAD%2FDesign---Truth-Clickable%3Fpage-id%3D0%253A1%26node-id%3D47-30142%26viewport%3D1242%252C221%252C0.08%26scaling%3Dscale-down-width%26starting-point-node-id%3D47%253A28004"
        />
      </div>
    </div>
  )
}

// Custom Summary Section with masthead image
function SummarySectionCustom() {
  return (
    <div className="flex flex-col lg:gap-x-8">
      <div className="mb-0 lg:mb-8 lg:max-w-3xl">
        <Screenshot src={masthead} alt="Service Ontario Masthead" />
      </div>
      <div className="mt-6 flex max-w-3xl flex-col gap-4 text-zinc-900 dark:text-zinc-200 lg:mt-0 lg:max-w-3xl">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
          Digital Dealership Registration
        </h3>
        <p>
          As a Senior UI Architect at ServiceOntario, I worked on the Digital
          Dealership Registration (DDR) project, a government initiative focused
          on the automotive dealership registration process.
        </p>
        <p>
          I created wireframes and clickable prototypes to guide the development
          of the DDR platform. I worked with developers, product managers, and
          stakeholders to align the designs with user needs and project
          requirements.
        </p>
        <p>
          I conducted usability testing and incorporated user feedback into
          revisions of the DDR designs.
        </p>
        <p>
          The work involved resolving interface design questions alongside user
          needs and technical requirements.
        </p>
      </div>
    </div>
  )
}

const projectData = {
  meta: {
    title: 'Digital Dealership Registration — ServiceOntario | Arif Alim',
    description:
      'UI design for ServiceOntario Digital Dealership Registration, including wireframes, clickable prototypes, and usability testing.',
  },
  layout: {
    title: 'ServiceOntario',
    intro: 'Digital Dealership Registration (DDR)',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      render: () => <SummarySectionCustom />,
    },
    {
      name: 'Wireframes',
      render: () => <WireframesSectionCustom />,
    },
    {
      name: 'Prototypes',
      render: () => <PrototypesSectionCustom />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About ServiceOntario',
        paragraphs: [
          'ServiceOntario provides government services in Ontario, including driver and vehicle licensing. This project focused on Digital Dealership Registration.',
        ],
        link: 'https://www.ontario.ca/page/digital-dealership-registration-program',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
