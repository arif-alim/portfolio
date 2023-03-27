import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Equity Bank Bahamas
import screen1 from '@/images/projects/equitybank/equitybank-1.jpg'
import screen2 from '@/images/projects/equitybank/equitybank-2.jpg'
import screen3 from '@/images/projects/equitybank/equitybank-3.jpg'
import screen4 from '@/images/projects/equitybank/equitybank-4.jpg'
import screen5 from '@/images/projects/equitybank/equitybank-5.jpg'
import screen6 from '@/images/projects/equitybank/equitybank-6.jpg'
import screen7 from '@/images/projects/equitybank/equitybank-7.jpg'
import screen8 from '@/images/projects/equitybank/equitybank-8.jpg'

// Equity Bank Bahamas logo
import logoEquityBank from '@/images/projects/equitybank/equitybank-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Equity Bank & Affiliates Responsive Website',
        para1:
          'The Equity Bank Bahamas website underwent a UI/UX redesign to improve its user experience and better meet the needs of its customers.',
        para2:
          'The homepage was redesigned to provide a more streamlined and user-friendly experience. The new design features clear and concise messaging, simplified navigation, and prominent calls to action that guide users towards their desired actions.,',
        para3:
          "The color scheme and typography were also updated to create a more modern and visually appealing design. The use of white space and high-quality images helps to create a clean and professional look that is easy on the eyes. One of the main objectives of the redesign was to improve the website's accessibility and mobile responsiveness. The new design is optimized for mobile devices, ensuring that users can access the website on any device and have a seamless experience.",
        para4:
          'The navigation was also updated to improve the user journey and make it easier for users to find what they need. The new navigation features clear labels and drop-down menus that provide quick access to the most important pages on the website.',
        para5:
          'Overall, the Equity Bank Bahamas website redesign has resulted in a significant improvement in the user experience. The new design is modern, user-friendly, and optimized for mobile devices, making it easier for customers to access the information and services they need. The improved accessibility and streamlined navigation have also helped to increase engagement and improve customer satisfaction.',

        imageSrc: logoEquityBank,
        imageAlt: 'Titan Group Logo',
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
      },
    ],
  },

  {
    name: 'Company details',
    features: [
      {
        name: 'About Equity Bank Bahamas',
        para1:
          'Equity Bank Bahamas is a commercial bank that provides a wide range of financial services to individuals, businesses, and organizations in the Bahamas. The bank offers various products and services such as personal and business banking, loans and mortgages, credit cards, and investment services.',
        para2:
          'Equity Bank Bahamas is committed to providing exceptional customer service and innovative financial solutions to help its clients achieve their financial goals. The bank is also actively involved in various community initiatives and supports social responsibility programs aimed at improving the lives of Bahamians.',
        link: 'https://www.missbahamas.net/',
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
        <title>Equity Bank Bahamas - Project</title>
        <meta
          name="description"
          content="Equity bank is a leading financial institution in the Bahamas."
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
                  Equity Bank Bahamas
                </h1>
                <h2 className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                  Responsive Mobile Design
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
                              <div className="mb-4 max-w-[125px] sm:mt-0 lg:mt-4">
                                <Image
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  className="dark:invert"
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
                                <p className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para2}
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
