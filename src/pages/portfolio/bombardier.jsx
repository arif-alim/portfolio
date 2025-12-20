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
          call "Lego Components".
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
          <Screenshot
            src={component.image}
            alt={component.title}
          />
        </div>
      ))}
    </div>
  )
}

const projectData = {
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
          "As the Lead UX Designer at Xennial Innovations from March 2019 to April 2021, I was responsible for leading the design efforts of multiple high-profile projects for Bombardier. These projects included designing intuitive user interfaces for Flight Link by Airbus and Bombardier's MySmartRouter and MyPrinciple mobile applications. I ensured that the designs met the needs of various stakeholders and users while adhering to AODA and WCAG 2.0 accessibility standards.",
          "I also played a key role in the development of Bombardier's corporate design system by introducing accessible styles and typography. Using Figma, I built the design systems for Bombardier's MySmartRouter and MyPrinciple mobile applications. This involved creating lego components composed of base components and using variants and component properties to simplify the use of components.",
          "To enhance the user experience and make it more interactive, I designed JSON Lottie graphic animations using Adobe After Effects. Additionally, I expanded enterprise-level design systems using Figma's auto layout, component variants, and component properties, allowing for high-fidelity rapid prototyping. I created comprehensive design guidelines to ensure consistency across various platforms and applications.",
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
        paragraphs: [
          "Bombardier is a Canadian multinational company that specializes in the design, manufacturing, and support of innovative transportation solutions. The company operates in several industries, including aerospace, transportation, and recreation. Bombardier's aerospace division is a global leader in the production of business jets, regional aircraft, and commercial aircraft, and it has a strong presence in both the military and civil aviation markets. In the transportation sector, Bombardier is a leading manufacturer of trains and rail solutions, offering a wide range of products and services to customers worldwide. The company's recreational products division produces a diverse range of vehicles, including snowmobiles, watercraft, and all-terrain vehicles. With over 60,000 employees across its operations, Bombardier is committed to creating sustainable, innovative, and value-added products and services that meet the needs of its customers while promoting environmental responsibility and social well-being. Through its cutting-edge technology, engineering expertise, and customer-focused approach, Bombardier has earned a reputation as a trusted partner and leader in the transportation industry.",
        ],
        link: 'https://bombardier.com/en',
      },
    },
  ],
}

export default function Project() {
  return <PortfolioTemplate {...projectData} />
}
