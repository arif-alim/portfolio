import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// Island Traders screens
import screen1 from '@/images/projects/islandtraders/islandtraders-1.jpeg'
import screen2 from '@/images/projects/islandtraders/islandtraders-2.jpeg'
import screen3 from '@/images/projects/islandtraders/islandtraders-3.jpeg'
import screen4 from '@/images/projects/islandtraders/islandtraders-4.jpeg'
import screen5 from '@/images/projects/islandtraders/islandtraders-5.jpeg'
import screen6 from '@/images/projects/islandtraders/islandtraders-6.jpeg'
import screen7 from '@/images/projects/islandtraders/islandtraders-7.jpeg'
import screen8 from '@/images/projects/islandtraders/islandtraders-8.jpeg'

// Island Traders logo
import logoIslandTraders from '@/images/projects/islandtraders/islandtraders-logo.svg'

/* -------------------------------------------------------------------------- */
/*                             Shared Screenshot UI                            */
/* -------------------------------------------------------------------------- */

const FALLBACK_WIDTH = 1200
const FALLBACK_HEIGHT = 800

function Screenshot({ src, alt = '', className = '', width, height }) {
  const finalWidth =
    typeof width === 'number'
      ? width
      : typeof src?.width === 'number'
      ? src.width
      : FALLBACK_WIDTH

  const finalHeight =
    typeof height === 'number'
      ? height
      : typeof src?.height === 'number'
      ? src.height
      : FALLBACK_HEIGHT

  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={className}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                     Data                                   */
/* -------------------------------------------------------------------------- */

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        title: '',
        description: [
          "The 242 Island Traders website was in need of a complete overhaul, as the previous version was not responsive, not accessible, and had an outdated design. The objective of the UI/UX redesign was to create a visually appealing and intuitive website that showcases the company's products and services while improving user experience.",
          "The homepage was redesigned to feature a full-screen banner that highlights the company's products and services, providing users with an engaging experience. The navigation was updated to simplify the user journey, with clear labels, drop-down menus, and a search bar for easy access to specific products and services.",
          'The color scheme and typography were also updated to create a modern, visually appealing design that uses high-quality images and white space to create a clean and professional look.',
          'The main focus of the redesign was on mobile responsiveness, ensuring that the website is optimized for mobile devices, and users can access it seamlessly on any device. The redesign has resulted in a significant improvement in user experience, with a modern, user-friendly website that makes it easier for customers to access the information and products they need. The improved navigation and search functionality have also helped to increase engagement and improve customer satisfaction.',
        ],
        logo: {
          src: logoIslandTraders,
          alt: 'Island Traders logo',
        },
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        heading: 'Island Traders screens',
        images: [
          { src: screen1, alt: 'Island Traders screen 1' },
          { src: screen2, alt: 'Island Traders screen 2' },
          { src: screen3, alt: 'Island Traders screen 3' },
          { src: screen4, alt: 'Island Traders screen 4' },
          { src: screen5, alt: 'Island Traders screen 5' },
          { src: screen6, alt: 'Island Traders screen 6' },
          { src: screen7, alt: 'Island Traders screen 7' },
          { src: screen8, alt: 'Island Traders screen 8' },
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About 242 Island Traders',
        para1:
          '242 Island Traders is a Bahamian company that offers a range of products and services, including home appliances, electronics, building materials, and industrial equipment. The company has been in business for over 50 years and has established itself as a trusted provider of high-quality products and exceptional customer service. With multiple locations across the Bahamas, 242 Island Traders is committed to serving the needs of its customers, offering competitive prices and flexible payment options. The company is also actively involved in supporting the local community through various charitable initiatives and events.',
        link: 'https://www.242islandtraders.com/',
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                  Utilities                                 */
/* -------------------------------------------------------------------------- */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* -------------------------------------------------------------------------- */
/*                             Section Components                             */
/* -------------------------------------------------------------------------- */

function SummarySection({ feature }) {
  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        {feature.logo && (
          <div className="shrink-0">
            <Screenshot
              src={feature.logo.src}
              alt={feature.logo.alt}
              width={64}
              height={64}
              className="h-10 w-auto dark:invert"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
          {feature.title}
        </h3>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-200">
        {feature.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  )
}

function WireframesSection({ feature }) {
  return (
    <div className="space-y-4 text-zinc-900 dark:text-zinc-50">
      {feature.heading && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {feature.heading}
        </h3>
      )}

      <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {feature.images.map((img, idx) => (
            <Screenshot
              key={idx}
              src={img.src}
              alt={img.alt}
              width={260}
              height={260}
              className="rounded-lg object-cover object-center"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function CompanyDetailsSection({ feature }) {
  return (
    <div className="mt-6 max-w-3xl text-zinc-900 dark:text-zinc-50 lg:col-span-5 lg:mt-0">
      <h3 className="text-xl font-semibold">{feature.name}</h3>
      <div className="mt-4 flex flex-col gap-4">
        <p>{feature.para1}</p>
      </div>

      <Link
        href={feature.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
      >
        View Website
      </Link>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function Project() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <Head>
        <title>Island Traders - Project</title>
        <meta
          name="description"
          content="Designed and developed Island Traders front-facing pages and custom logo."
        />
      </Head>

      <SimpleLayout
        title="Island Traders"
        intro="Complete redesign of the 242 Island Traders website, with a focus on responsive, accessible UI and a modern visual system."
      >
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              {/* ---------------------------- TAB LIST ---------------------------- */}
              <div className="overflow-x-hidden whitespace-nowrap">
                <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                  <div className="flex-auto border-b border-gray-200 px-4 dark:border-gray-500 sm:px-0">
                    <Tab.List className="-mb-px flex">
                      {tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-blue-700 font-semibold text-blue-900 outline-none dark:border-blue-500 dark:text-gray-50'
                                : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
                              'whitespace-nowrap border-b-2 px-6 text-tiny outline-none'
                            )
                          }
                        >
                          {tab.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </div>
              </div>

              {/* --------------------------- TAB PANELS --------------------------- */}
              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel
                    key={tab.name}
                    className="space-y-16 pt-4 text-gray-900 dark:text-zinc-50 lg:pt-8"
                  >
                    {tab.name === 'Summary' &&
                      tab.features.map((feature, idx) => (
                        <SummarySection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Wireframes' &&
                      tab.features.map((feature, idx) => (
                        <WireframesSection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Company details' &&
                      tab.features.map((feature, idx) => (
                        <CompanyDetailsSection key={idx} feature={feature} />
                      ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </SimpleLayout>
    </>
  )
}
