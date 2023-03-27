import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Miss Bahamas
import screen1 from '@/images/projects/mbo/mbo-1.jpeg'
import screen2 from '@/images/projects/mbo/mbo-2.jpeg'
import screen3 from '@/images/projects/mbo/mbo-3.jpeg'
import screen4 from '@/images/projects/mbo/mbo-4.jpeg'
import screen5 from '@/images/projects/mbo/mbo-5.jpeg'
import screen6 from '@/images/projects/mbo/mbo-6.jpeg'
import screen7 from '@/images/projects/mbo/mbo-7.jpeg'

// Miss Bahamas logo
import logoMissBahamas from '@/images/projects/mbo/missbahamas-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'MBO mobile and web apps',
        para1:
          'Miss Bahamas Organization is a non-profit organization dedicated to empowering young Bahamian women and promoting their personal and professional growth. Founded in 1963, the organization has been instrumental in providing young women with opportunities to develop their skills and compete in international beauty pageants such as Miss Universe, Miss World, and Miss Earth.',
        para2:
          "The Miss Bahamas Organization's mission is to foster leadership, community involvement, and personal growth among young women in the Bahamas. The organization provides training in areas such as public speaking, interview skills, and self-presentation to help contestants build their confidence and develop their potential.",
        para3:
          "The Miss Bahamas pageant is the organization's flagship event, and it attracts young women from across the Bahamas who compete for the chance to represent the country in international pageants. The pageant is not just about physical beauty but also about intelligence, talent, and personality. Contestants are judged on their ability to articulate their thoughts on important issues, perform talents, and embody the qualities of a Bahamian ambassador.",
        para4:
          'In addition to the pageant, the Miss Bahamas Organization also engages in various community outreach programs, including education initiatives, charity events, and social campaigns that promote social responsibility and awareness on issues such as environmental conservation, health, and wellness.',
        para5:
          "Overall, the Miss Bahamas Organization is an important platform for young Bahamian women to showcase their talents and represent their country on the international stage. The organization's commitment to promoting personal growth and community involvement has helped to inspire generations of young women in the Bahamas.",

        imageSrc: logoMissBahamas,
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
      },
    ],
  },

  {
    name: 'Company details',
    features: [
      {
        name: 'About Chicasa Design',
        para1:
          'Titan Group is a Canadian company that specializes in construction and project management services. Established in 1999, the company has grown to become a leading provider of construction services, serving clients in various industries such as commercial, industrial, institutional, and residential.',
        para2:
          "The company's services range from project planning, design and engineering, to construction management, general contracting, and post-construction services. Titan Group takes pride in its highly skilled workforce and the use of cutting-edge technology to ensure efficiency and timely delivery of projects.",
        para3:
          "The company's commitment to quality, safety, and sustainability is evident in the numerous certifications it has obtained, including the ISO 9001:2015 and ISO 14001:2015. Titan Group's focus on innovation and customer satisfaction has earned it a reputation as a trusted and reliable partner in the construction industry.",
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
        <title>Miss Bahamas - Project</title>
        <meta title="Chicasa Design" intro="" />
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
                  Miss Bahamas Organization (MBO)
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
                              <div className="mb-4 max-w-[200px] dark:invert sm:mt-0 lg:mt-4">
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
                                <p className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para3}
                                </p>
                                <p className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para4}
                                </p>
                                <p className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para5}
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
