import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Island traders screens
import screen1 from '@/images/projects/islandtraders/islandtraders-1.jpeg'
import screen2 from '@/images/projects/islandtraders/islandtraders-2.jpeg'
import screen3 from '@/images/projects/islandtraders/islandtraders-3.jpeg'
import screen4 from '@/images/projects/islandtraders/islandtraders-4.jpeg'
import screen5 from '@/images/projects/islandtraders/islandtraders-5.jpeg'
import screen6 from '@/images/projects/islandtraders/islandtraders-6.jpeg'
import screen7 from '@/images/projects/islandtraders/islandtraders-7.jpeg'
import screen8 from '@/images/projects/islandtraders/islandtraders-8.jpeg'

// Island traders logo
import logoIslandTraders from '@/images/projects/islandtraders/islandtraders-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Island traders responsive web design',
        para1:
          "The 242 Island Traders website was in need of a complete overhaul, as the previous version was not responsive, not accessible, and had an outdated design. The objective of the UI/UX redesign was to create a visually appealing and intuitive website that showcases the company's products and services while improving user experience.",
        para2:
          "The homepage was redesigned to feature a full-screen banner that highlights the company's products and services, providing users with an engaging experience. The navigation was updated to simplify the user journey, with clear labels, drop-down menus, and a search bar for easy access to specific products and services.",
        para3:
          'The color scheme and typography were also updated to create a modern, visually appealing design that uses high-quality images and white space to create a clean and professional look.',
        para4:
          'The main focus of the redesign was on mobile responsiveness, ensuring that the website is optimized for mobile devices, and users can access it seamlessly on any device. The redesign has resulted in a significant improvement in user experience, with a modern, user-friendly website that makes it easier for customers to access the information and products they need. The improved navigation and search functionality have also helped to increase engagement and improve customer satisfaction.',

        imageSrc: logoIslandTraders,
        imageAlt: 'Island Traders logo',
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
          '242 Island Traders is a Bahamian company that offers a range of products and services, including home appliances, electronics, building materials, and industrial equipment. The company has been in business for over 50 years and has established itself as a trusted provider of high-quality products and exceptional customer service. With multiple locations across the Bahamas, 242 Island Traders is committed to serving the needs of its customers, offering competitive prices and flexible payment options. The company is also actively involved in supporting the local community through various charitable initiatives and events.',

        link: 'https://www.242islandtraders.com/',
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
        <title>Island Traders - Project</title>
        <meta
          name="description"
          content="Deisned and developed islandtraders front facing pages and custom logo"
        />
      </Head>
      <SimpleLayout
        title={'Island Traders'}
        intro={'Complete redesign of the Equity Bank Bahamas website'}
      >
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
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
                    className="space-y-16 pt-4 text-gray-900 dark:text-zinc-50 lg:pt-8"
                  >
                    {tab.name === 'Summary'
                      ? /* Render content for Summary tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col gap-4 lg:gap-x-8"
                          >
                            <div className="flex flex-col text-sm lg:gap-x-8 lg:gap-y-4">
                              <h3 className="text-xl font-semibold ">
                                {feature.name}
                              </h3>
                              <div className="flex max-w-prose flex-col gap-4">
                                <p>{feature.para1}</p>
                                <p>{feature.para2}</p>
                                <p>{feature.para3}</p>
                                <p>{feature.para4}</p>
                                <p>{feature.para5}</p>
                                <p>{feature.para6}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Wireframes'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:p-6"
                          >
                            <div className="flex flex-col gap-6 lg:col-span-4">
                              <Image
                                src={feature.imageSrc1}
                                alt={feature.imageAlt1}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc4}
                                alt={feature.imageAlt4}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc7}
                                alt={feature.imageAlt7}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-6 lg:col-span-4">
                              <Image
                                src={feature.imageSrc2}
                                alt={feature.imageAlt2}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc5}
                                alt={feature.imageAlt5}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc8}
                                alt={feature.imageAlt8}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-6 lg:col-span-4">
                              <Image
                                src={feature.imageSrc3}
                                alt={feature.imageAlt3}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc6}
                                alt={feature.imageAlt6}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                        ))
                      : tab.name === 'Company details'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div key={feature.name}>
                            <div className="mt-6 max-w-prose text-sm text-zinc-900  dark:text-zinc-50 lg:col-span-5 lg:mt-0 ">
                              <h3 className="text-xl font-semibold">
                                {feature.name}
                              </h3>
                              <div className="mt-4 flex flex-col gap-4 text-sm lg:gap-x-8">
                                <p>{feature.para1}</p>
                              </div>

                              <Link
                                href={feature.link}
                                target="_blank"
                                className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
                              >
                                View Website
                              </Link>
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
      </SimpleLayout>
    </>
  )
}
