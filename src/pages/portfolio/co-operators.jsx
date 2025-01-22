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

import logoCooperators from '@/images/projects/co-operators/cooperators-logo.svg'

/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        heading1: 'Summary',
        para1:
          'During my tenure at Co-operators, I developed user-centric digital experiences...',
        para2:
          'In my tenure with Co-operators, I harnessed my deep understanding of the insurance sector to develop intuitive and user-friendly digital experiences that aligned with their broad spectrum of insurance products, all while adhering to stringent regulatory standards. I proficiently utilized Figma for the design, prototyping, and testing of user interfaces, thereby fostering a culture of user-centered innovation and contributing to the company’s digital transformation goals.',
        para3:
          "I also employed tools like Miro and Figma's extensive plugins and integrations to organize, analyze, and conduct user research, create affinity diagrams, synthesize insights, and collect feedback directly within the design environment. This work was instrumental in developing Co-operators' new visual identity and implementing a refreshed version of their website.",
        para4:
          'In addition to these responsibilities, I contributed to the creation of a comprehensive style guide and played a key role in establishing a robust design system, which has streamlined the collaborative process for designers, developers, product managers, and other stakeholders to gather insights, provide feedback, and iteratively refine our designs.',
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        images: [
          { src: homepage1, alt: 'Homepage 1' },
          { src: homepage2, alt: 'Homepage 2' },
          { src: homepage3, alt: 'Homepage 3' },
          { src: homepage4, alt: 'Homepage 4' },
        ],
      },
    ],
  },
  {
    name: 'Style guide',
    features: [
      {
        images: [
          { src: sg1, alt: 'Style Guide 1' },
          { src: sg2, alt: 'Style Guide 2' },
          { src: sg3, alt: 'Style Guide 3' },
          { src: sg4, alt: 'Style Guide 4' },
        ],
      },
    ],
  },
  {
    name: 'Illustrations',
    features: [
      {
        images: [
          { src: illustration1, alt: 'Illustration 1' },
          { src: illustration2, alt: 'Illustration 2' },
        ],
      },
    ],
  },
  {
    name: 'Design systems',
    features: [
      {
        images: [
          { src: component1, alt: 'Component 1' },
          { src: component2, alt: 'Component 2' },
          { src: component3, alt: 'Component 3' },
          { src: component4, alt: 'Component 4' },
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
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Summary')

  return (
    <SimpleLayout
      title="Co-operators"
      intro="Helped create Co-operators' new visual identity."
    >
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
          <Tab.Group
            as="div"
            className="mt-10"
            selectedIndex={tabs.findIndex((tab) => tab.name === selectedTab)}
            onChange={(index) => setSelectedTab(tabs[index].name)}
          >
            {/* Tab List */}
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
                              ? 'border-blue-500 font-semibold text-blue-700 outline-none dark:border-blue-400 dark:text-blue-400'
                              : 'text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400',
                            'whitespace-nowrap border-b-2 px-4 py-2 font-medium'
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

            {/* Tab Panels */}
            <Tab.Panels as={Fragment}>
              {tabs.length > 0 ? (
                tabs.map((tab, tabIdx) => (
                  <Tab.Panel
                    key={tab.name || `tab-${tabIdx}`}
                    className="space-y-16 pt-4 lg:pt-8"
                  >
                    {tab.features?.map((feature, featureIdx) => (
                      <div key={featureIdx} className="space-y-8">
                        {/* Summary Section */}
                        {feature.heading1 && (
                          <div>
                            <h2 className="mb-4 text-lg font-semibold">
                              {feature.heading1}
                            </h2>
                            <div className="flex max-w-prose flex-col gap-4">
                              {[
                                feature.para1,
                                feature.para2,
                                feature.para3,
                                feature.para4,
                              ]
                                .filter(Boolean)
                                .map((para, idx) => (
                                  <p key={idx}>{para}</p>
                                ))}
                            </div>
                          </div>
                        )}

                        {/* Images Section with Headers */}
                        {feature.images?.length > 0 && (
                          <>
                            {tab.name === 'Wireframes' && (
                              <>
                                <h2 className="mb-4 text-lg font-semibold">
                                  Homepage
                                </h2>
                                <div className="grid grid-cols-1 gap-4 bg-zinc-100 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-2 lg:p-8">
                                  {feature.images
                                    .slice(0, 2)
                                    .map(
                                      (img, imgIdx) =>
                                        img.src && (
                                          <Image
                                            key={imgIdx}
                                            src={img.src}
                                            alt={img.alt || 'Image'}
                                            width={400}
                                            height={300}
                                            className="rounded-lg object-cover"
                                          />
                                        )
                                    )}
                                </div>

                                <h2 className="mb-4 mt-8 text-lg font-semibold">
                                  Sign-in and upgrade policy
                                </h2>
                                <div className="grid grid-cols-1 gap-4 bg-zinc-100 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-2 lg:p-8">
                                  {feature.images
                                    .slice(2, 4)
                                    .map(
                                      (img, imgIdx) =>
                                        img.src && (
                                          <Image
                                            key={imgIdx}
                                            src={img.src}
                                            alt={img.alt || 'Image'}
                                            width={400}
                                            height={300}
                                            className="rounded-lg object-cover"
                                          />
                                        )
                                    )}
                                </div>

                                <h2 className="mb-4 mt-8 text-lg font-semibold">
                                  Auto policy and details coverage screens
                                </h2>
                                <div className="w-full gap-4 bg-zinc-100 p-4 dark:bg-zinc-800 lg:p-8">
                                  {feature.images.slice(4, 6).map(
                                    (img, imgIdx) =>
                                      img.src && (
                                        <Image
                                          key={imgIdx}
                                          src={img.src}
                                          alt={img.alt || 'Image'}
                                          layout="responsive"
                                          width={100} // Use percentage width for responsive layout
                                          height={50} // Adjust height to maintain aspect ratio
                                          className="w-full rounded-lg object-cover"
                                        />
                                      )
                                  )}
                                </div>
                              </>
                            )}

                            {tab.name === 'Style guide' && (
                              <>
                                <h2 className="mb-4 text-lg font-semibold">
                                  Light and Dark Theme
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                  {feature.images.map(
                                    (img, imgIdx) =>
                                      img.src && (
                                        <Image
                                          key={imgIdx}
                                          src={img.src}
                                          alt={img.alt || 'Image'}
                                          width={400}
                                          height={300}
                                          className="rounded-lg object-cover"
                                        />
                                      )
                                  )}
                                </div>
                              </>
                            )}

                            {tab.name === 'Illustrations' && (
                              <>
                                <h2 className="mb-4 text-lg font-semibold">
                                  Illustrations
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                                  {feature.images.map(
                                    (img, imgIdx) =>
                                      img.src && (
                                        <Image
                                          key={imgIdx}
                                          src={img.src}
                                          alt={img.alt || 'Image'}
                                          width={400}
                                          height={300}
                                          className="rounded-lg object-cover"
                                        />
                                      )
                                  )}
                                </div>
                              </>
                            )}

                            {tab.name === 'Design systems' && (
                              <>
                                <h2 className="mb-4 text-lg font-semibold">
                                  Banners
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                  {feature.images
                                    .slice(0, 3)
                                    .map(
                                      (img, imgIdx) =>
                                        img.src && (
                                          <Image
                                            key={imgIdx}
                                            src={img.src}
                                            alt={img.alt || 'Image'}
                                            width={400}
                                            height={300}
                                            className="rounded-lg object-cover"
                                          />
                                        )
                                    )}
                                </div>

                                <h2 className="mb-4 mt-8 text-lg font-semibold">
                                  Tile and Snackbar Component
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                  {feature.images
                                    .slice(3, 6)
                                    .map(
                                      (img, imgIdx) =>
                                        img.src && (
                                          <Image
                                            key={imgIdx}
                                            src={img.src}
                                            alt={img.alt || 'Image'}
                                            width={400}
                                            height={300}
                                            className="rounded-lg object-cover"
                                          />
                                        )
                                    )}
                                </div>

                                <h2 className="mb-4 mt-8 text-lg font-semibold">
                                  Slider and Switch Component
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                  {feature.images
                                    .slice(6)
                                    .map(
                                      (img, imgIdx) =>
                                        img.src && (
                                          <Image
                                            key={imgIdx}
                                            src={img.src}
                                            alt={img.alt || 'Image'}
                                            width={400}
                                            height={300}
                                            className="rounded-lg object-cover"
                                          />
                                        )
                                    )}
                                </div>
                              </>
                            )}
                          </>
                        )}

                        {/* Company Details Section */}
                        {feature.name && (
                          <div>
                            <h3 className="mt-6 text-xl font-semibold">
                              {feature.name}
                            </h3>
                            <p className="mt-2">{feature.para1}</p>
                            {feature.link && (
                              <Link
                                href={feature.link}
                                target="_blank"
                                className="mt-4 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                View Website
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </Tab.Panel>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No content available.
                </div>
              )}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
