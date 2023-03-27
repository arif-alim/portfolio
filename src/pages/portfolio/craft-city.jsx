import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// Craft City Logo
import ccLogo1 from '@/images/projects/craftcity/ccLogo.jpg'
import ccLogo2 from '@/images/projects/craftcity/ccLogo1.jpg'
import ccLogo3 from '@/images/projects/craftcity/ccLogo2.jpg'
import ccLogo4 from '@/images/projects/craftcity/ccLogo3.jpg'
// Craft City Sticker
import ccSticker1 from '@/images/projects/craftcity/ccSticker1.png'
import ccSticker2 from '@/images/projects/craftcity/ccSticker2.png'
import ccSticker3 from '@/images/projects/craftcity/ccSticker3.png'
// Craft City Can Design
import ccCan1 from '@/images/projects/craftcity/ccCanDesign.jpg'
import ccCan2 from '@/images/projects/craftcity/ccCanDesign2.jpg'
import ccCan3 from '@/images/projects/craftcity/ccCanDesign3.jpg'
import ccCan4 from '@/images/projects/craftcity/ccCanDesign4.jpg'
import ccCan5 from '@/images/projects/craftcity/ccCanDesign5.jpg'
// Craft City Promo Assets
import ccPromo1 from '@/images/projects/craftcity/ccPromo1.jpg'
import ccPromo2 from '@/images/projects/craftcity/ccPromo2.jpg'
import ccPromo3 from '@/images/projects/craftcity/ccPromo3.jpg'
import ccPromo4 from '@/images/projects/craftcity/ccPromo4.jpg'
import ccPromo5 from '@/images/projects/craftcity/ccPromo4.jpg'

import logoCraftCity from '@/images/projects/craftcity/craftcity-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'

import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        heading: 'Designed the hard seltzer cans using Illustrator',
        description:
          'Craft City Hard Seltzer is a new hard seltzer brand based in Toronto, Canada. They are a small batch, handcrafted hard seltzer brand that is made with real fruit juice and natural flavours. They are currently available in Ontario, Canada.',
        imageSrc: logoCraftCity,
        imageAlt: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Logo',
    features: [
      {
        heading: 'Logo Design',
        description: 'Designed their custom logo and their e-commerce website',
        imageSrc1: ccLogo1,
        imageAlt1: 'Craft City logo',
        imageSrc2: ccLogo2,
        imageAlt2: 'Craft City logo',
        imageSrc3: ccLogo3,
        imageAlt3: 'Craft City logo',
        imageSrc4: ccLogo4,
        imageAlt4: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Sticker',
    features: [
      {
        heading: 'Sticker Design',
        description: 'Designed their custom logo and their e-commerce website',
        imageSrc1: ccSticker1,
        imageAlt1: 'Craft City logo',
        imageSrc2: ccSticker2,
        imageAlt2: 'Craft City logo',
        imageSrc3: ccSticker3,
        imageAlt3: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Can Design',
    features: [
      {
        heading: 'Sticker Design',
        description: 'Designed the hard seltzer cans using Illustrator',
        imageSrc1: ccCan1,
        imageAlt1: 'Craft City logo',
        imageSrc2: ccCan2,
        imageAlt2: 'Craft City logo',
        imageSrc3: ccCan3,
        imageAlt3: 'Craft City logo',
        imageSrc3: ccCan4,
        imageAlt3: 'Craft City logo',
        imageSrc3: ccCan5,
        imageAlt3: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Marketing',
    features: [
      {
        heading: 'Marketing & Promotional Assets',
        description:
          'Designed and printed custom promotional assets such as banners, posters etc.',
        imageSrc1: ccPromo1,
        imageAlt1: 'Craft City logo',
        imageSrc2: ccPromo2,
        imageAlt2: 'Craft City logo',
        imageSrc3: ccPromo3,
        imageAlt3: 'Craft City logo',
        imageSrc3: ccPromo4,
        imageAlt3: 'Craft City logo',
        imageSrc3: ccPromo5,
        imageAlt3: 'Craft City logo',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <>
      <Head>
        <title>Craft City - Project</title>
        <meta name="description" content="Craft City Hard Seltzer" />
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
                  Craft City
                </h1>
                <p className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                  Designed their custom logo and their e-commerce website.
                </p>
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
                      className="space-y-16 pt-4 lg:pt-8"
                    >
                      {tab.name === 'Summary'
                        ? /* Render content for Summary tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.heading}
                              className="flex flex-col lg:gap-x-8"
                            >
                              <div className="mb-0 lg:mb-8 lg:max-w-[150px]">
                                <Image
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  className="dark:invert"
                                />
                              </div>
                              <div className="mt-6 lg:mt-0 lg:max-w-prose">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                                  {feature.heading}
                                </h3>
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))
                        : tab.name === 'Logo'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageAlt4}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Sticker'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageAlt4}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Can Design'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Marketing'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 lg:col-span-3">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
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
