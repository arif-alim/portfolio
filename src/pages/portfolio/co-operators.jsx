/* eslint-disable @next/next/no-img-element */

import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { SimpleLayout } from '@/components/SimpleLayout'

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

// Brand (currently unused, but fine to keep)
import logoCooperators from '@/images/projects/co-operators/cooperators-logo.svg'

/* -------------------------------------------------------------------------- */
/*                              Screenshot Wrapper                             */
/* -------------------------------------------------------------------------- */

const FALLBACK_WIDTH = 1200
const FALLBACK_HEIGHT = 800

function Screenshot({ src, alt }) {
  // src can be:
  // - an imported image object: { src, width, height, ... }
  // - a string path: "/_next/static/images/..."
  const width =
    src && typeof src === 'object' && typeof src.width === 'number'
      ? src.width
      : FALLBACK_WIDTH

  const height =
    src && typeof src === 'object' && typeof src.height === 'number'
      ? src.height
      : FALLBACK_HEIGHT

  return (
    <Image
      // Next can handle either an imported image object or a string path
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className="rounded-lg object-cover"
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
        heading1: 'Summary',
        paragraphs: [
          'During my tenure at Co-operators, I developed user-centric digital experiences...',
          'In my tenure with Co-operators, I harnessed my deep understanding of the insurance sector to develop intuitive and user-friendly digital experiences...',
          "I also employed tools like Miro and Figma's extensive plugins and integrations...",
          'In addition to these responsibilities, I contributed to the creation of a comprehensive style guide...',
        ],
      },
    ],
  },

  {
    name: 'Wireframes',
    features: [
      {
        titleRows: [
          { title: 'Homepage', images: [homepage1, homepage2] },
          {
            title: 'Sign-in and Upgrade Policy',
            images: [homepage3, homepage4],
          },
        ],
      },
    ],
  },

  {
    name: 'Style guide',
    features: [
      {
        title: 'Light and Dark Theme',
        images: [sg1, sg2, sg3, sg4],
      },
    ],
  },

  {
    name: 'Illustrations',
    features: [
      {
        title: 'Illustrations',
        images: [illustration1, illustration2],
      },
    ],
  },

  {
    name: 'Design systems',
    features: [
      {
        sections: [
          { title: 'Banners', images: [component1, component2, component3] },
          {
            title: 'Tile and Snackbar Component',
            images: [component4],
          },
        ],
      },
    ],
  },

  {
    name: 'Company details',
    features: [
      {
        name: 'About Co-operators',
        para1:
          'Co-operators Group Limited is a reputable Canadian insurance co-operative...',
        link: 'https://www.cooperators.ca/en/',
      },
    ],
  },

  { name: 'Case Study', features: [{ name: 'Coming Soon...' }] },
]

/* -------------------------------------------------------------------------- */
/*                                  Utilities                                 */
/* -------------------------------------------------------------------------- */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Summary')

  const selectedIndex = tabs.findIndex((t) => t.name === selectedTab)
  const safeIndex = selectedIndex === -1 ? 0 : selectedIndex

  return (
    <SimpleLayout
      title="Co-operators"
      intro="Helped create Co-operators' new visual identity."
    >
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <Tab.Group
            selectedIndex={safeIndex}
            onChange={(i) => setSelectedTab(tabs[i].name)}
          >
            {/* --------------------------- TAB LIST --------------------------- */}
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
                              ? 'border-blue-500 font-semibold text-blue-700 dark:border-blue-400 dark:text-blue-400'
                              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400',
                            'whitespace-nowrap border-b-2 px-4 py-2'
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

            {/* -------------------------- TAB PANELS -------------------------- */}
            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                  {tab.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="space-y-10">
                      {/* ------------------------ SUMMARY ------------------------ */}
                      {feature.heading1 && (
                        <>
                          <h2 className="mb-4 text-lg font-semibold">
                            {feature.heading1}
                          </h2>

                          <div className="flex max-w-3xl flex-col gap-4">
                            {feature.paragraphs?.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        </>
                      )}

                      {/* ---------------------- WIREFRAME SECTIONS ---------------------- */}
                      {feature.titleRows?.map((row, i) => (
                        <div key={i}>
                          <h2 className="mb-4 text-lg font-semibold">
                            {row.title}
                          </h2>
                          <div className="grid grid-cols-1 gap-4 bg-zinc-100 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:p-8">
                            {row.images.map((img, idx) => (
                              <Screenshot key={idx} src={img} alt={row.title} />
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* ----------------------- STYLE GUIDE / ILLUS ----------------------- */}
                      {feature.title && feature.images && (
                        <>
                          <h2 className="mb-4 text-lg font-semibold">
                            {feature.title}
                          </h2>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {feature.images.map((img, idx) => (
                              <Screenshot
                                key={idx}
                                src={img}
                                alt={feature.title}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* ----------------------- DESIGN SYSTEMS ----------------------- */}
                      {feature.sections?.map((sec, idx) => (
                        <div key={idx}>
                          <h2 className="mb-4 text-lg font-semibold">
                            {sec.title}
                          </h2>

                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {sec.images.map((img, i) => (
                              <Screenshot key={i} src={img} alt={sec.title} />
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* ---------------------- COMPANY DETAILS ---------------------- */}
                      {feature.name && tab.name === 'Company details' && (
                        <div>
                          <h3 className="text-xl font-semibold">
                            {feature.name}
                          </h3>

                          <p className="mt-2">{feature.para1}</p>

                          {feature.link && (
                            <Link
                              href={feature.link}
                              target="_blank"
                              className="mt-4 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
                            >
                              View Website
                            </Link>
                          )}
                        </div>
                      )}

                      {/* ---------------------- CASE STUDY ---------------------- */}
                      {tab.name === 'Case Study' && feature.name && (
                        <h3 className="text-xl font-semibold">
                          {feature.name}
                        </h3>
                      )}
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
