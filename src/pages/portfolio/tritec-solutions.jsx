import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import screen1 from '@/images/projects/tritec/tritec-1.jpg'
import screen2 from '@/images/projects/tritec/tritec-2.jpg'
import screen3 from '@/images/projects/tritec/tritec-3.jpg'
import screen4 from '@/images/projects/tritec/tritec-4.jpg'
import screen5 from '@/images/projects/tritec/tritec-5.jpg'
import screen6 from '@/images/projects/tritec/tritec-6.jpg'
import screen7 from '@/images/projects/tritec/tritec-7.jpg'
import screen8 from '@/images/projects/tritec/tritec-8.jpg'
import screen9 from '@/images/projects/tritec/tritec-9.jpg'

import logoTritec from '@/images/projects/tritec/tritec-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Tritec solutions resopnsive web design',
        para1:
          'The Niagara Falls Craft Distillers website underwent a complete overhaul, with a custom e-commerce responsive design that incorporates the laws of UX to enhance user experience and drive sales.',
        para2:
          "The homepage was redesigned to feature a full-screen banner showcasing the company's premium spirits, which immediately draws the user's attention. The design incorporates a scroll-down feature that allows the user to learn more about the company's products and brand story. The navigation was updated with clear labels and drop-down menus, and the addition of a search bar makes it easy for users to find specific products or information.",
        para3:
          "Custom pages were created to showcase the company's products and events, with optimized search functionality to help users find what they need quickly. The use of high-quality images and white space creates a clean and professional look, while the modern and premium design enhances the user experience and promotes brand recognition.",
        para4:
          'The website was optimized for mobile devices to ensure that users can access the website on any device and have a seamless experience. The custom e-commerce design allows for easy purchasing, with a streamlined checkout process and secure payment gateway to enhance user trust and drive sales.',
        para5:
          "Overall, the Niagara Falls Craft Distillers website redesign has resulted in a significant improvement in user experience and sales. The custom design incorporates the laws of UX to enhance user engagement and drive conversions, with a focus on showcasing the company's premium spirits and brand story.",

        imageSrc: logoTritec,
        imageAlt: 'Tritec Solutions logo',
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        imageSrc1: screen1,
        imageAlt1: '',
        imageSrc2: screen2,
        imageAlt2: '',
        imageSrc3: screen3,
        imageAlt3: '',
        imageSrc4: screen4,
        imageAlt4: '',
        imageSrc5: screen5,
        imageAlt5: '',
        imageSrc6: screen6,
        imageAlt6: '',
        imageSrc7: screen7,
        imageAlt7: '',
        imageSrc8: screen8,
        imageAlt8: '',
        imageSrc9: screen9,
        imageAlt9: '',
      },
    ],
  },

  {
    name: 'Company details',
    features: [
      {
        name: 'Tritec Solutions',
        para1:
          "Tritec Solutions is a Canadian company that provides innovative IT solutions and support to businesses of all sizes. Established in 1997, the company has built a strong reputation for its reliable and cost-effective services, including managed IT services, cybersecurity solutions, cloud solutions, and software development. Tritec Solutions prides itself on its team of highly skilled professionals who are committed to delivering exceptional customer service and IT solutions that meet the unique needs of each client. The company's focus on innovation and continuous improvement has helped it to stay at the forefront of the rapidly evolving technology landscape. With a commitment to excellence and customer satisfaction, Tritec Solutions is a trusted partner for businesses seeking to leverage technology to achieve their goals.",

        link: 'https://tritecsolutions.ca/',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <>
      <Head>
        <title>Tritec Solutions - Project</title>
        <meta
          name="description"
          content="Tritec Solutions is a Canadian IT solutions provider that specializes in delivering innovative and cost-effective technology solutions to businesses of all sizes. The company offers a wide range of IT services, including managed IT services, cybersecurity solutions, cloud solutions, software development, and more. With a focus on customer satisfaction and a team of highly skilled professionals, Tritec Solutions is committed to providing exceptional service and tailored solutions to meet the unique needs of each client"
        />
      </Head>
      <SimpleLayout>
        <div>
          <section
            aria-labelledby="features-heading"
            className="mx-auto max-w-7xl"
          >
            <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
              <div className="max-w-3xl">
                <h1
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                >
                  Tritec Solutions
                </h1>
                <h2 className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                  Created custom logo and mobile responsive website with an
                  intuitive service request widget.
                </h2>
              </div>

              <Tab.Group
                as="div"
                className="mt-10"
                value={selectedTab}
                onSelect={setSelectedTab}
              >
                <div className="overflow-x-hidden whitespace-nowrap">
                  <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-gray-200 px-4 dark:border-gray-500 sm:px-0">
                      <Tab.List className="-mb-px flex ">
                        {tabs.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? 'border-blue-700 font-semibold text-blue-900 outline-none dark:border-blue-500 dark:text-gray-50'
                                  : 'dark:hover-gray-100 hover:text-gray-700dark:text-gray-400 border-transparent font-medium text-gray-900 hover:border-gray-300 dark:text-gray-300 ',
                                'whitespace-nowrap border-b-2 px-6 text-tiny outline-none visited:border-none'
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

                <Tab.Panels as={Fragment}>
                  {tabs.map((tab) => (
                    <Tab.Panel
                      key={tab.name}
                      className="space-y-8 pt-4 lg:pt-8"
                    >
                      {tab.name === 'Summary'
                        ? /* Render content for Summary tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col lg:gap-x-8"
                            >
                              <div className="mb-4 max-w-[250px] dark:invert sm:mt-0 lg:mt-4">
                                <Image
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="mt-6 lg:mt-4 lg:max-w-prose">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                                  {feature.name}
                                </h3>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para1}
                                </p>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para2}
                                </p>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para3}
                                </p>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para4}
                                </p>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para5}
                                </p>
                                <p className="mt-3 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para6}
                                </p>
                              </div>
                            </div>
                          ))
                        : tab.name === 'Wireframes'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 lg:col-span-4">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageAlt4}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc7}
                                  alt={feature.imageAlt7}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-4">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc5}
                                  alt={feature.imageAlt5}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc8}
                                  alt={feature.imageAlt8}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-4">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc6}
                                  alt={feature.imageAlt6}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc9}
                                  alt={feature.imageAlt9}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Company details'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div key={feature.name}>
                              <div className="mt-6 max-w-prose lg:col-span-5 lg:mt-0">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                                  {feature.name}
                                </h3>
                                <p className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para1}
                                </p>

                                <button
                                  type="button"
                                  className="mt-4 rounded-full bg-white py-2 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  <Link href={feature.link} target="_blank">
                                    View Website
                                  </Link>
                                </button>
                              </div>
                            </div>
                          ))
                        : null}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </section>
        </div>
      </SimpleLayout>
    </>
  )
}
