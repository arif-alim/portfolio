import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'

// Import assets
import screen1 from '@/images/projects/hydroone/screen1.jpg'
import screen2 from '@/images/projects/hydroone/screen2.jpg'
import screen3 from '@/images/projects/hydroone/screen3.jpg'
import screen4 from '@/images/projects/hydroone/screen4.jpg'
import screen5 from '@/images/projects/hydroone/screen5.jpg'
import screen6 from '@/images/projects/hydroone/screen6.jpg'
import screen7 from '@/images/projects/hydroone/screen7.jpg'
import screen8 from '@/images/projects/hydroone/screen8.jpg'
import screen9 from '@/images/projects/hydroone/screen9.jpg'
import proto1 from '@/images/projects/hydroone/proto1.jpg'
import proto2 from '@/images/projects/hydroone/proto2.jpg'
import proto3 from '@/images/projects/hydroone/proto3.jpg'
import proto4 from '@/images/projects/hydroone/proto4.jpg'
import proto5 from '@/images/projects/hydroone/proto5.jpg'
import proto6 from '@/images/projects/hydroone/proto6.jpg'
import proto7 from '@/images/projects/hydroone/proto7.jpg'
import proto8 from '@/images/projects/hydroone/proto8.jpg'
import proto9 from '@/images/projects/hydroone/proto9.jpg'
import proto10 from '@/images/projects/hydroone/proto10.jpg'
import logoHydroOne from '@/images/projects/hydroone/logoHydroOne.jpg'

// Tabs and content data
const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Hydro One Responsive Web Design and Development',
        description:
          'As a Sr. UI/UX Designer working on a contract basis, I was responsible for creating a style guide and reusable components on Figma with multiple variants. I developed my UI Design using HTML5, CSS3, and JS and integrated the code into SharePoint. Using various technologies such as Figma, Sketch, and Axure, I also created high-fidelity UI prototypes. To address user pain points, I applied different variations of the design thinking process and conducted user research. Additionally, I ensured accessibility by incorporating recent contrast trends and using aria labels and alt tags for images to make the pages accessible to everyone. I completed daily tasks assigned on Wrike from cross-functional teams in a timely manner.',
        imageSrc: logoHydroOne,
        imageAlt: 'Hydro One logo',
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      { images: [screen1, screen2, screen3, screen4, screen5, screen6] },
      { images: [screen7, screen8, screen9] },
    ],
  },
  {
    name: 'Figma prototypes',
    features: [
      {
        name: 'HydroOne Figma Prototypes',
        description:
          'Some of the mobile responsive web pages designed and developed by me.',
        prototypes: [
          {
            title: 'Sustainability',
            source: proto1,
            link: 'https://www.figma.com/file/C63rTgdhnGR38HCokMK1fP/Sustainability-2021',
          },
          // Add other prototypes
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About HydroOne',
        description:
          'Hydro One is a Canadian electric utility company that provides electricity transmission and distribution services to customers in the province of Ontario. The company is publicly owned and has been serving customers for more than 100 years. Hydro One is responsible for the operation of the largest transmission system in the province, which includes over 30,000 kilometers of high-voltage transmission lines and more than 1,000 transmission stations. In addition to its transmission operations, Hydro One also manages a distribution network that delivers electricity to homes and businesses across the province. The company is committed to ensuring a safe, reliable, and sustainable supply of electricity to its customers, and it has been recognized for its efforts in environmental stewardship and community engagement.',
        link: 'https://www.hydroone.com/',
      },
    ],
  },
]

/** SocialLink Component */
const SocialLink = ({ href, children, className }) => (
  <li className={clsx(className, 'flex')}>
    <Link
      href={href}
      target="_blank"
      className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-sky-700 dark:text-zinc-200 dark:hover:text-sky-700"
    >
      {children}
    </Link>
  </li>
)

/** Tab Content Renderer */
const TabContent = ({ tab }) => {
  if (tab.name === 'Summary') {
    return tab.features.map((feature) => (
      <div key={feature.name} className="flex flex-col gap-6 lg:flex-row">
        <div className="w-1/3">
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {feature.name}
          </h3>
          <p className="mt-4 text-tiny text-gray-700 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      </div>
    ))
  }

  if (tab.name === 'Wireframes') {
    return tab.features.map((feature, index) => (
      <div key={index} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {feature.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Wireframe ${i + 1}`}
            className="rounded shadow-md"
          />
        ))}
      </div>
    ))
  }

  if (tab.name === 'Figma prototypes') {
    return tab.features.map((feature) => (
      <div key={feature.name}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {feature.name}
        </h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {feature.description}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {feature.prototypes.map((proto) => (
            <div key={proto.title}>
              <Image src={proto.source} alt={proto.title} className="rounded" />
              <Link
                href={proto.link}
                target="_blank"
                className="text-sm text-blue-600 hover:underline"
              >
                {proto.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    ))
  }

  if (tab.name === 'Company details') {
    return tab.features.map((feature) => (
      <div key={feature.name}>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {feature.name}
        </h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {feature.description}
        </p>
        <Link
          href={feature.link}
          target="_blank"
          className="mt-4 inline-block rounded-full bg-white py-2 px-4 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-100"
        >
          Visit Website
        </Link>
      </div>
    ))
  }

  return null
}

/** Main Component */
export default function HydroOne() {
  return (
    <>
      <Head>
        <title>Hydro One Project</title>
        <meta name="description" content="Hydro One Project Details" />
      </Head>
      <SimpleLayout>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Hydro One
        </h1>
        <Tab.Group>
          <Tab.List className="mt-6 flex gap-4">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  clsx(
                    'py-2 px-4 text-sm font-semibold',
                    selected
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-300'
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6 space-y-8">
            {tabs.map((tab) => (
              <Tab.Panel key={tab.name}>
                <TabContent tab={tab} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </SimpleLayout>
    </>
  )
}
