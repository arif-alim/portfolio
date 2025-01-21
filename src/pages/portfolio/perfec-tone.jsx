import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import screen1 from '@/images/projects/nfcd/nfcd1.jpg'
import screen2 from '@/images/projects/nfcd/nfcd2.jpg'
import screen3 from '@/images/projects/nfcd/nfcd3.jpg'
import screen4 from '@/images/projects/nfcd/nfcd4.jpg'
import screen5 from '@/images/projects/nfcd/nfcd5.jpg'
import screen6 from '@/images/projects/nfcd/nfcd6.jpg'
import screen7 from '@/images/projects/nfcd/nfcd7.jpg'
import screen8 from '@/images/projects/nfcd/nfcd8.jpg'

import logoNfcd from '@/images/projects/nfcd/nfcd-logo.svg'

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
          'The Niagara Falls Craft Distillers website underwent a complete overhaul, with a custom e-commerce responsive design that incorporates the laws of UX to enhance user experience and drive sales.',
        para2:
          "The homepage was redesigned to feature a full-screen banner showcasing the company's premium spirits, which immediately draws the user's attention. The design incorporates a scroll-down feature that allows the user to learn more about the company's products and brand story. The navigation was updated with clear labels and drop-down menus, and the addition of a search bar makes it easy for users to find specific products or information.",
        para3:
          "Custom pages were created to showcase the company's products and events, with optimized search functionality to help users find what they need quickly. The use of high-quality images and white space creates a clean and professional look, while the modern and premium design enhances the user experience and promotes brand recognition.",
        para4:
          'The website was optimized for mobile devices to ensure that users can access the website on any device and have a seamless experience. The custom e-commerce design allows for easy purchasing, with a streamlined checkout process and secure payment gateway to enhance user trust and drive sales.',
        para5:
          "Overall, the Niagara Falls Craft Distillers website redesign has resulted in a significant improvement in user experience and sales. The custom design incorporates the laws of UX to enhance user engagement and drive conversions, with a focus on showcasing the company's premium spirits and brand story.",

        imageSrc: logoNfcd,
        imageAlt: 'Niagara Falls Craft Distillers logo',
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
        name: 'Niagara Falls Craft Distillers (NFCD)',
        para1:
          'Niagara Falls Craft Distillers is a premium craft distillery based in Niagara Falls, Canada. The company specializes in the production of premium spirits, including vodka, gin, and whiskey, using locally sourced ingredients and traditional distilling techniques. With a focus on quality and innovation, Niagara Falls Craft Distillers has established itself as a leading player in the craft spirits industry, winning numerous awards for its exceptional products. The company is committed to sustainability and ethical practices, with a focus on reducing its environmental impact and supporting the local community. With a dedication to quality, craftsmanship, and innovation, Niagara Falls Craft Distillers is a leading choice for discerning spirits enthusiasts and connoisseurs.',

        link: 'https://niagarafallscraftdistillers.ca/',
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
        <title>Niagara Falls Craft Distiller - Project</title>
        <meta
          name="description"
          content="At Niagara Falls Craft Distillers, our products are made locally at our state-of-the-art distillery, including a 1,000-litre copper kettle with stainless steel fermenters. We use quality ingredients, employ local talent and are known for our community involvement. The pioneering spirit is our mission to blend high-quality spirits with the natural wonder of Niagara Falls."
        />
      </Head>
      <SimpleLayout
        title={'Niagara Falls Craft Distillers'}
        intro={'Custom e-commerce mobile responsive web design'}
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
