import Link from 'next/link'
import { PortfolioTemplate, Screenshot } from '@/components/portfolio'

// MyPrinciple
import screenMP from '@/images/projects/bombardier/myPrinciple/MyPrinciple.png'

// MySmartRouter
import screenMSR from '@/images/projects/bombardier/mySmartRouter/MySmartRouter.png'

// Components
import cardComponent from '@/images/projects/bombardier/components/Card.png'
import selectAircraftComponent from '@/images/projects/bombardier/components/SelectAircraft.png'
import flightHistoryComponent from '@/images/projects/bombardier/components/FlightHistory.png'

// Custom Wireframes Section
function WireframesSectionCustom() {
  return (
    <div className="flex flex-col gap-y-8">
      {/* mySmartRouter */}
      <div className="col-span-full rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800 lg:p-6">
        <h2 className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200">
          mySmartRouter
        </h2>
        <Screenshot
          src={screenMSR}
          alt="mySmartRouter dashboard"
          className="mb-6 h-full w-full"
        />
      </div>

      {/* myPrinciple */}
      <div className="col-span-full rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800 lg:p-6">
        <h2 className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200">
          myPrinciple
        </h2>
        <Screenshot
          src={screenMP}
          alt="myPrinciple aircraft"
          className="mb-6 h-full w-full"
        />
      </div>
    </div>
  )
}

// Custom Lego Components Section
function LegoComponentsSectionCustom() {
  const components = [
    {
      title: 'Select aircraft component',
      figmaLink:
        'https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=486%3A8043&t=ZNtgizfNIxMUnfdq-1',
      image: selectAircraftComponent,
      maxWidth: 'lg:max-w-full',
    },
    {
      title: 'Card Component',
      figmaLink:
        'https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=91%3A709&t=ZNtgizfNIxMUnfdq-1',
      image: cardComponent,
      maxWidth: 'lg:max-w-xl',
    },
    {
      title: 'Trip History',
      figmaLink:
        'https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=145%3A1448&t=ZNtgizfNIxMUnfdq-1',
      image: flightHistoryComponent,
      maxWidth: 'lg:max-w-sm',
    },
  ]

  return (
    <div className="flex flex-col dark:text-zinc-200 lg:gap-x-8">
      <div className="my-6 lg:mt-0">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
          Components
        </h3>
        <p className="mt-2">
          Combining base components to create a higher order component, which I
          call &quot;Lego Components&quot;.
        </p>
      </div>

      {components.map((component, idx) => (
        <div key={idx} className={`mb-16 ${component.maxWidth}`}>
          <div className="flex flex-col gap-1 pb-4">
            <div className="font-semibold">{component.title}</div>
            <Link
              href={component.figmaLink}
              target="_blank"
              className="text-blue-800 dark:text-blue-500"
            >
              View Figma
            </Link>
          </div>
          <Screenshot src={component.image} alt={component.title} />
        </div>
      ))}
    </div>
  )
}

const projectData = {
  meta: {
    title: 'mySmartRouter & myPrinciple — Bombardier | Arif Alim',
    description:
      'UX and interface design for Bombardier applications, including reusable Figma components and design guidelines.',
  },
  layout: {
    title: 'Bombardier',
    intro: 'mySmartRouter, myPrinciple, myOnlineProductOrdering (OPO)',
  },
  defaultTab: 'Wireframes',
  tabs: [
    {
      name: 'Summary',
      type: 'summary',
      content: {
        heading: 'Summary',
        paragraphs: [
          "As the Lead UX Designer at Xennial Innovations from March 2019 to April 2021, I worked on user interfaces for Bombardier's MySmartRouter and MyPrinciple applications. I considered stakeholder and user needs alongside AODA and WCAG 2.0 accessibility requirements.",
          "I contributed styles and typography to Bombardier's design system. Using Figma, I created reusable components for MySmartRouter and MyPrinciple, combining base components with variants and component properties.",
          'I designed JSON Lottie animations using Adobe After Effects and created design guidelines. I also used Figma auto layout, component variants, and component properties for high-fidelity prototyping.',
        ],
      },
    },
    {
      name: 'Wireframes',
      render: () => <WireframesSectionCustom />,
    },
    {
      name: 'Lego Components',
      render: () => <LegoComponentsSectionCustom />,
    },
    {
      name: 'Company details',
      type: 'companyDetails',
      content: {
        name: 'About Bombardier',
        paragraphs: ['Bombardier is a Canadian manufacturer of business jets.'],
        link: 'https://bombardier.com/en',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
