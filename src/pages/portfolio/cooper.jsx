import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// Coooper designs
import logo1 from '@/images/projects/cooper/cooper-1.jpg'
import logo2 from '@/images/projects/cooper/cooper-2.jpg'
import logo3 from '@/images/projects/cooper/cooper-3.jpg'
import logo4 from '@/images/projects/cooper/cooper-4.jpg'
import logo5 from '@/images/projects/cooper/cooper-5.jpg'
import app1 from '@/images/projects/cooper/cooper-6.jpg'
import app2 from '@/images/projects/cooper/cooper-7.jpg'
import app3 from '@/images/projects/cooper/cooper-8.jpg'
import app4 from '@/images/projects/cooper/cooper-9.jpg'
import app5 from '@/images/projects/cooper/cooper-10.jpg'
import app6 from '@/images/projects/cooper/cooper-11.jpg'
import app7 from '@/images/projects/cooper/cooper-12.jpg'
import app8 from '@/images/projects/cooper/cooper-13.jpg'
import app9 from '@/images/projects/cooper/cooper-14.jpg'
import app10 from '@/images/projects/cooper/cooper-15.jpg'
import app11 from '@/images/projects/cooper/cooper-16.jpg'
import app12 from '@/images/projects/cooper/cooper-17.jpg'
import app13 from '@/images/projects/cooper/cooper-18.jpg'
import app14 from '@/images/projects/cooper/cooper-19.jpg'
import app15 from '@/images/projects/cooper/cooper-20.jpg'
import web1 from '@/images/projects/cooper/cooper-21.jpg'
import web2 from '@/images/projects/cooper/cooper-22.jpg'
import web3 from '@/images/projects/cooper/cooper-23.jpg'
import web4 from '@/images/projects/cooper/cooper-24.jpg'
import web5 from '@/images/projects/cooper/cooper-25.jpg'
import web6 from '@/images/projects/cooper/cooper-26.jpg'

import logoCooper from '@/images/projects/cooper/coooper-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'

import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        heading: 'Designed the hard seltzer cans using Illustrator',
        para1:
          'As the designer of the Cooper Driver mobile app, my focus was on creating a user-friendly and efficient user experience that would meet the needs of both drivers and clients. The app features a simple and intuitive interface that makes it easy for users to request and track transportation services, with real-time updates and delivery confirmation for added convenience.',
        para2:
          'The design of the Cooper Driver app incorporates the latest UI/UX mobile app design trends to enhance user experience, including the use of white space, high-quality images, and simplified navigation. The use of clear labeling and bold icons ensures that users can easily navigate the app and access the features they need, while the incorporation of real-time tracking and delivery confirmation improves transparency and user trust.',
        para3:
          'Overall, the Cooper Driver mobile app redesign has resulted in a significant improvement in user experience and customer satisfaction. The user-friendly design and efficient functionality have helped to increase engagement and improve the overall user experience, making it easier for drivers and clients to access the information and services they need while on the go.',
        imageSrc: logoCooper,
        imageAlt: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Logo',
    features: [
      {
        imageSrc1: logo1,
        imageAlt1: 'Cooper logo design version 1',
        imageSrc2: logo2,
        imageAlt2: 'Cooper logo design version 2',
        imageSrc3: logo3,
        imageAlt3: 'Cooper logo design version 3',
        imageSrc4: logo4,
        imageAlt4: 'Cooper logo design version 4',
      },
    ],
  },
  {
    name: 'Mobile App',
    features: [
      {
        imageSrc1: app1,
        imageAlt1: 'Cooper app design 1',
        imageSrc2: app2,
        imageAlt2: 'Cooper app design 2',
        imageSrc3: app3,
        imageAlt3: 'Cooper app design 3',
        imageSrc4: app4,
        imageAlt4: 'Cooper app design 4',
        imageSrc5: app5,
        imageAlt5: 'Cooper app design 5',
        imageSrc6: app6,
        imageAlt6: 'Cooper app design 6',
        imageSrc7: app7,
        imageAlt7: 'Cooper app design 7',
        imageSrc8: app8,
        imageAlt8: 'Cooper app design 8',
        imageSrc9: app9,
        imageAlt9: 'Cooper app design 9',
        imageSrc10: app10,
        imageAlt10: 'Cooper app design 10',
        imageSrc11: app11,
        imageAlt11: 'Cooper app design 11',
        imageSrc12: app12,
        imageAlt12: 'Cooper app design 12',
        imageSrc13: app13,
        imageAlt13: 'Cooper app design 13',
        imageSrc14: app14,
        imageAlt14: 'Cooper app design 14',
        imageSrc15: app15,
        imageAlt15: 'Cooper app design 15',
      },
    ],
  },
  {
    name: 'Responsive Website',
    features: [
      {
        imageSrc1: web1,
        imageAlt1: 'Craft City logo',
        imageSrc2: web2,
        imageAlt2: 'Craft City logo',
        imageSrc3: web3,
        imageAlt3: 'Craft City logo',
        imageSrc4: web4,
        imageAlt4: 'Craft City logo',
        imageSrc5: web5,
        imageAlt5: 'Craft City logo',
        imageSrc6: web6,
        imageAlt6: 'Craft City logo',
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About Cooper',
        para1:
          'The Cooper Driver app is a transportation service based in the Bahamas that provides a reliable and affordable solution for individuals and businesses looking to move goods across the country. The app connects drivers with clients in need of transportation, offering a seamless and efficient solution for all types of cargo. The Cooper Driver app features real-time tracking, delivery confirmation, and payment processing, making it easy for both drivers and clients to stay informed and in control. With a focus on safety and customer satisfaction, Cooper Driver is a trusted and reliable transportation service that meets the needs of businesses and individuals in the Bahamas.',
        link: 'https://www.ontario.ca/page/digital-dealership-registration-program',
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
        <title>Cooper - Project</title>
        <meta name="description" content="Craft City Hard Seltzer" />
      </Head>
      <SimpleLayout>
        <div>
          <section
            aria-labelledby="features-heading"
            className="mx-auto max-w-7xl"
          >
            <div className="mx-auto max-w-prose px-0 lg:max-w-none lg:px-0">
              <div className="max-w-3xl">
                <h1
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                >
                  Cooper Apps
                </h1>
                <p className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                  Extensive user research followed with affinity map and user
                  journey. I had to account to Google maps unable to pick-up
                  some of the locations in Bahamas and create a custom app
                  design.
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
                              <div className="my-8 lg:max-w-[220px]">
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
                                  {feature.para1}
                                </p>
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para2}
                                </p>
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para3}
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
                              <div className="lg:col-span-3">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="lg:col-span-3">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="lg:col-span-3">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>

                              <div className="lg:col-span-3">
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageAlt4}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Mobile App'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:flex-row  lg:gap-x-4 lg:p-6"
                            >
                              <div className="flex flex-col gap-4 ">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageAlt1}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc6}
                                  alt={feature.imageAlt6}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc11}
                                  alt={feature.imageAlt11}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc16}
                                  alt={feature.imageAlt116}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc21}
                                  alt={feature.imageAlt21}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 ">
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageAlt2}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc7}
                                  alt={feature.imageAlt7}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc12}
                                  alt={feature.imageAlt12}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc17}
                                  alt={feature.imageAlt17}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc22}
                                  alt={feature.imageAlt22}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 ">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageAlt3}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc8}
                                  alt={feature.imageAlt8}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc13}
                                  alt={feature.imageAlt13}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc18}
                                  alt={feature.imageAlt18}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc23}
                                  alt={feature.imageAlt23}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 ">
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageAlt4}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc9}
                                  alt={feature.imageAlt9}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc14}
                                  alt={feature.imageAlt14}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc19}
                                  alt={feature.imageAlt19}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc24}
                                  alt={feature.imageAlt24}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div className="flex flex-col gap-4 ">
                                <Image
                                  src={feature.imageSrc5}
                                  alt={feature.imageAlt5}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc10}
                                  alt={feature.imageAlt10}
                                  className="rounded-lg object-cover object-center"
                                />

                                <Image
                                  src={feature.imageSrc15}
                                  alt={feature.imageAlt15}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc20}
                                  alt={feature.imageAlt20}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc25}
                                  alt={feature.imageAlt25}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          ))
                        : tab.name === 'Responsive Website'
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
