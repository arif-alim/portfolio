import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

// Perfec-tone
import screen1 from '@/images/projects/perfectone/perfectone-1.jpg'
import screen2 from '@/images/projects/perfectone/perfectone-2.jpg'
import screen3 from '@/images/projects/perfectone/perfectone-3.jpg'
import screen4 from '@/images/projects/perfectone/perfectone-4.jpg'
import screen5 from '@/images/projects/perfectone/perfectone-5.jpg'
import screen6 from '@/images/projects/perfectone/perfectone-6.jpg'
import screen7 from '@/images/projects/perfectone/perfectone-7.jpg'
import screen8 from '@/images/projects/perfectone/perfectone-8.jpg'

// Hydro One logo
import logoPerfectone from '@/images/projects/perfectone/perfectone-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Perfec-tone Responsive Web Design and Development',
        para1:
          'Perfec-Tone is a skincare company that offers a range of products designed to address various skin concerns. To help the company reach a wider audience and provide a seamless shopping experience for its customers, we designed a mobile responsive e-commerce website that emphasized both user interface (UI) and user experience (UX) design principles.',
        para2:
          "The website's UI was carefully crafted to highlight the brand's natural and organic ingredients, while also providing clear and concise product descriptions and easy-to-use navigation menus. We used high-quality product photography and incorporated soft, pastel colors to create a soothing and inviting aesthetic. The website's UX was designed to be intuitive and easy to use, with a simple checkout process and clear calls-to-action throughout the website. Additionally, we implemented responsive design principles to ensure that the website looked great and functioned well on both desktop and mobile devices, providing a seamless shopping experience for customers no matter where they accessed the website from. The result was an e-commerce website that not only looked great but also provided a seamless shopping experience for Perfec-Tone's customers.",

        imageSrc: logoPerfectone,
        imageAlt: 'Perfec-tone logo',
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
        name: 'About Perfec-tone',
        para1:
          "Perfec-Tone is a skincare company that offers a range of products designed to address a wide range of skin concerns. The company was founded with the goal of providing effective and affordable skincare solutions for all skin types and tones. Perfec-Tone's products are formulated using natural and organic ingredients, and they are free from harsh chemicals and synthetic fragrances. The company's product line includes cleansers, toners, moisturizers, serums, and treatments that are designed to address common skin concerns such as acne, hyperpigmentation, and aging. Perfec-Tone is committed to promoting healthy and radiant skin, and it offers personalized skincare consultations to help customers find the right products for their individual needs. The company's mission is to provide high-quality skincare solutions that are accessible and affordable, while promoting natural beauty and self-confidence. Perfec-Tone continues to innovate and expand its product line to meet the evolving needs of its customers, and it has established itself as a trusted brand in the skincare industry.",
        link: 'https://perfec-tone.com/',
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
        <title>Perfec-tone - Project</title>
        <meta title="Perfec-tone" intro="" />
      </Head>
      <SimpleLayout>
        <div className="">
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
                  Perfec-tone
                </h1>
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
                              <div className="mb-4 sm:mt-0 lg:mt-4">
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
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para1}
                                </p>
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para2}
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
