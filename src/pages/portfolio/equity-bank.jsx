import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// Equity Bank Bahamas screens
import screen1 from '@/images/projects/equitybank/equitybank-1.jpg'
import screen2 from '@/images/projects/equitybank/equitybank-2.jpg'
import screen3 from '@/images/projects/equitybank/equitybank-3.jpg'
import screen4 from '@/images/projects/equitybank/equitybank-4.jpg'
import screen5 from '@/images/projects/equitybank/equitybank-5.jpg'
import screen6 from '@/images/projects/equitybank/equitybank-6.jpg'
import screen7 from '@/images/projects/equitybank/equitybank-7.jpg'
import screen8 from '@/images/projects/equitybank/equitybank-8.jpg'

// Logo
import logoEquityBank from '@/images/projects/equitybank/equitybank-logo.svg'

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
        title: 'Equity Bank & Affiliates Responsive Website',
        paragraphs: [
          'The Equity Bank Bahamas website underwent a UI/UX redesign to improve its user experience and better meet the needs of its customers.',
          'The homepage was redesigned to provide a more streamlined and user-friendly experience. The new design features clear and concise messaging, simplified navigation, and prominent calls to action that guide users towards their desired actions.',
          'The color scheme and typography were also updated to create a more modern and visually appealing design. The use of white space and high-quality images helps to create a clean and professional look that is easy on the eyes. One of the main objectives of the redesign was to improve the website’s accessibility and mobile responsiveness. The new design is optimized for mobile devices, ensuring that users can access the website on any device and have a seamless experience.',
          'The navigation was also updated to improve the user journey and make it easier for users to find what they need. The new navigation features clear labels and drop-down menus that provide quick access to the most important pages on the website.',
          'Overall, the Equity Bank Bahamas website redesign has resulted in a significant improvement in the user experience. The new design is modern, user-friendly, and optimized for mobile devices, making it easier for customers to access the information and services they need. The improved accessibility and streamlined navigation have also helped to increase engagement and improve customer satisfaction.',
        ],
        logo: {
          src: logoEquityBank,
          alt: 'Equity Bank Bahamas logo',
        },
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        heading: 'Responsive Website Wireframes',
        description:
          'Key responsive layouts for homepage and primary content templates.',
        images: [
          { src: screen1, alt: 'Equity Bank wireframe 1' },
          { src: screen2, alt: 'Equity Bank wireframe 2' },
          { src: screen3, alt: 'Equity Bank wireframe 3' },
          { src: screen4, alt: 'Equity Bank wireframe 4' },
          { src: screen5, alt: 'Equity Bank wireframe 5' },
          { src: screen6, alt: 'Equity Bank wireframe 6' },
          { src: screen7, alt: 'Equity Bank wireframe 7' },
          { src: screen8, alt: 'Equity Bank wireframe 8' },
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        title: 'About Equity Bank Bahamas',
        paragraphs: [
          'Equity Bank Bahamas is a commercial bank that provides a wide range of financial services to individuals, businesses, and organizations in the Bahamas. The bank offers various products and services such as personal and business banking, loans and mortgages, credit cards, and investment services.',
          'Equity Bank Bahamas is committed to providing exceptional customer service and innovative financial solutions to help its clients achieve their financial goals. The bank is also actively involved in various community initiatives and supports social responsibility programs aimed at improving the lives of Bahamians.',
        ],
        link: 'https://www.missbahamas.net/',
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

function ImageGridSection({ feature }) {
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
        <title>Equity Bank Bahamas - Project</title>
        <meta
          name="description"
          content="Equity Bank is a leading financial institution in the Bahamas."
        />
      </Head>

      <SimpleLayout title="Equity Bank Bahamas" intro="Responsive Web Design">
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
                        <ImageGridSection key={idx} feature={feature} />
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
