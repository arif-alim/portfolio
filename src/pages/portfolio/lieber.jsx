import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/lieber/lieber-1.jpg'
import screen2 from '@/images/projects/lieber/lieber-2.jpg'
import screen3 from '@/images/projects/lieber/lieber-3.jpg'
import screen4 from '@/images/projects/lieber/lieber-4.jpg'
import screen5 from '@/images/projects/lieber/lieber-5.jpg'
import screen6 from '@/images/projects/lieber/lieber-6.jpg'
import screen7 from '@/images/projects/lieber/lieber-7.jpg'

import logoLieber from '@/images/projects/lieber/lieber-logo.svg'

/* -------------------------------------------------------------------------- */
/*                             Shared Screenshot UI                           */
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
        title: 'Lieber Group responsive web design',
        description: [
          'The Lieber Group website redesign is at the forefront of the latest UI trends and UX laws, resulting in a truly modern and user-friendly design that enhances accessibility and engagement.',
          'The use of responsive design and parallax scrolling improves accessibility and engagement by optimizing the website for mobile devices and creating a dynamic and immersive user experience. Users can access the website seamlessly on any device, and the engaging design keeps them interested and engaged with the content.',
          'Overall, the Lieber Group website redesign is a perfect example of how the latest UI trends and UX laws can be utilized to create a modern and user-friendly design that enhances accessibility and engagement. The improved navigation and search functionality, coupled with the modern design, results in a significant improvement in user experience and customer satisfaction.',
        ],
        // logo: {
        //   src: logoLieber,
        //   alt: 'Lieber Group logo',
        // },
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        heading: 'Lieber Group website screens',
        images: [
          { src: screen1, alt: 'Lieber Group screen 1' },
          { src: screen2, alt: 'Lieber Group screen 2' },
          { src: screen3, alt: 'Lieber Group screen 3' },
          { src: screen4, alt: 'Lieber Group screen 4' },
          { src: screen5, alt: 'Lieber Group screen 5' },
          { src: screen6, alt: 'Lieber Group screen 6' },
          { src: screen7, alt: 'Lieber Group screen 7' },
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'Lieber Group',
        para1:
          "Lieber Group is a Canadian company that provides a wide range of consulting and advisory services to businesses of all sizes. Established in 1986, the company has built a strong reputation for its expertise and commitment to delivering high-quality solutions that meet the unique needs of each client. Lieber Group offers a range of services, including strategy consulting, project management, IT consulting, and business analysis, among others. With a focus on customer satisfaction and a team of highly skilled professionals, Lieber Group is committed to providing exceptional service and tailored solutions to help its clients achieve their business goals. With over 35 years of experience, Lieber Group has a deep understanding of the Canadian business landscape and is well-positioned to help businesses navigate the challenges of today's rapidly changing business environment.",
        link: 'http://www.liebergroup.ca/',
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
        <title>Lieber Group - Project</title>
        <meta
          name="description"
          content="Modern, responsive redesign of the Lieber Group website, focused on accessibility, UI trends, and improved engagement."
        />
      </Head>

      <SimpleLayout
        title="Lieber Group"
        intro="Responsive, parallax-driven marketing site redesign that brings Lieber Group’s consulting practice in line with modern UX and accessibility standards."
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
