import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import screen1 from '@/images/projects/gabbys/gabbys-1.jpg'
import screen2 from '@/images/projects/gabbys/gabbys-2.jpg'
import screen3 from '@/images/projects/gabbys/gabbys-3.jpg'
import screen4 from '@/images/projects/gabbys/gabbys-4.jpg'
import screen5 from '@/images/projects/gabbys/gabbys-5.jpg'
import screen6 from '@/images/projects/gabbys/gabbys-6.jpg'
import logoGabbys from '@/images/projects/gabbys/gabbys.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Summary',
        para1:
          'In this case study, we will explore the user interface (UI) and user experience (UX) design of the website for Gabbys.ca, a Canadian online store that sells unique and handmade clothing, jewelry, and accessories.',
        para2:
          'Gabbys.ca approached our team to revamp their existing website, which was outdated and not optimized for mobile devices. They wanted a modern, user-friendly design that showcased their products and made it easy for customers to shop and make purchases online.',
        para3:
          'Based on our research, we developed a design strategy that focused on simplicity, clarity, and ease of use. We started with wireframes and prototypes to test and iterate on different design concepts and layouts. We also worked closely with the client to ensure that the design reflected their brand and vision.',
        imageSrc: logoGabbys,
        imageAlt: 'Gabbys logo',
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
      },
    ],
  },

  {
    name: 'Company details',
    features: [
      {
        name: "Gabby's",
        para1:
          "Gabby's, founded in 1989, is a family-owned and operated business that offers fresh and delicious food in a welcoming environment. With over 30 years of experience, Gabby's has become a well-known and trusted brand in the food industry, serving its customers with the highest quality ingredients and exceptional customer service. The company takes pride in its commitment to sustainability and supporting local farmers and businesses. Gabby's has several locations in the Greater Toronto Area, offering a variety of menu options for breakfast, lunch, and dinner. With its warm and inviting atmosphere, Gabby's is a favorite destination for families, friends, and colleagues to gather and enjoy good food and good company.",

        link: 'https://gabbys.ca/',
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
        <title>Gabbys - Project</title>
      </Head>
      <SimpleLayout
        title={'Gabbys'}
        intro={'Graphic design, mobile repsonsive website and logo design.'}
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
                            className="flex flex-col lg:gap-x-8"
                          >
                            <div className="flex flex-col lg:gap-x-8 lg:gap-y-4">
                              <h3 className="text-xl font-semibold ">
                                {feature.name}
                              </h3>
                              <div className="flex max-w-prose flex-col gap-4">
                                <p>{feature.para1}</p>
                                <p>{feature.para2}</p>
                                <p>{feature.para3}</p>
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
                            <div className="mt-6 max-w-prose text-zinc-900  dark:text-zinc-50 lg:col-span-5 lg:mt-0 ">
                              <h3 className="text-xl font-semibold">
                                {feature.name}
                              </h3>
                              <div className="mt-4 flex flex-col gap-4 lg:gap-x-8">
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
