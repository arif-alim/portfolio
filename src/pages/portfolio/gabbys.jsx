import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/gabbys/gabbys-1.jpg'
import screen2 from '@/images/projects/gabbys/gabbys-2.jpg'
import screen3 from '@/images/projects/gabbys/gabbys-3.jpg'
import screen4 from '@/images/projects/gabbys/gabbys-4.jpg'
import screen5 from '@/images/projects/gabbys/gabbys-5.jpg'
import screen6 from '@/images/projects/gabbys/gabbys-6.jpg'
import logoGabbys from '@/images/projects/gabbys/gabbys.svg'

/* -------------------------------------------------------------------------- */
/*                           Shared Screenshot Wrapper                        */
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
        title: 'Gabbys.ca Responsive Website & Brand',
        paragraphs: [
          'In this case study, we explore the user interface (UI) and user experience (UX) design of the website for Gabbys.ca, a Canadian online store that sells unique and handmade clothing, jewelry, and accessories.',
          'Gabbys.ca approached our team to revamp their existing website, which was outdated and not optimized for mobile devices. They wanted a modern, user-friendly design that showcased their products and made it easy for customers to shop and make purchases online.',
          'Based on our research, we developed a design strategy that focused on simplicity, clarity, and ease of use. We started with wireframes and prototypes to test and iterate on different design concepts and layouts, working closely with the client to ensure the design reflected their brand and vision.',
        ],
        logo: {
          src: logoGabbys,
          alt: 'Gabbys logo',
        },
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        heading: 'Responsive Web Layouts',
        description:
          'Exploration of homepage, product listing, and detail views.',
        images: [
          { src: screen1, alt: 'Gabbys wireframe 1' },
          { src: screen2, alt: 'Gabbys wireframe 2' },
          { src: screen3, alt: 'Gabbys wireframe 3' },
          { src: screen4, alt: 'Gabbys wireframe 4' },
          { src: screen5, alt: 'Gabbys wireframe 5' },
          { src: screen6, alt: 'Gabbys wireframe 6' },
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        title: "Gabby's",
        paragraphs: [
          "Gabby's, founded in 1989, is a family-owned and operated business that offers fresh and delicious food in a welcoming environment. With over 30 years of experience, Gabby's has become a well-known and trusted brand in the food industry, serving its customers with the highest quality ingredients and exceptional customer service. The company takes pride in its commitment to sustainability and supporting local farmers and businesses.",
          "Gabby's has several locations in the Greater Toronto Area, offering a variety of menu options for breakfast, lunch, and dinner. With its warm and inviting atmosphere, Gabby's is a favorite destination for families, friends, and colleagues to gather and enjoy good food and good company.",
        ],
        link: 'https://gabbys.ca/',
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
              className="h-10 w-auto"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
          {feature.title}
        </h3>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-200">
        {feature.paragraphs?.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </div>
  )
}

function WireframesSection({ feature }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {feature.heading}
        </h3>
        {feature.description && (
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {feature.description}
          </p>
        )}
      </div>

      <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {feature.images?.map((img, idx) => (
            <Screenshot
              key={idx}
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
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
    <div className="mt-2 max-w-3xl text-zinc-900 dark:text-zinc-50 lg:col-span-5">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {feature.title}
      </h3>
      <div className="mt-4 flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-200">
        {feature.paragraphs?.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {feature.link && (
        <Link
          href={feature.link}
          target="_blank"
          className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
        >
          View Website
        </Link>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Summary')

  return (
    <>
      <Head>
        <title>Gabbys - Project</title>
      </Head>

      <SimpleLayout
        title="Gabbys"
        intro="Graphic design, mobile responsive website, and logo design."
      >
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <Tab.Group
              selectedIndex={tabs.findIndex((t) => t.name === selectedTab)}
              onChange={(index) => setSelectedTab(tabs[index].name)}
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
