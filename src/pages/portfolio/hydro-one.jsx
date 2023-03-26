import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

// Hydro One screens
import screen1 from '@/images/projects/hydroone/sustainability-homepage-mobile.jpg'
import screen2 from '@/images/projects/hydroone/sustainability-people-mobile.jpg'
import screen3 from '@/images/projects/hydroone/sustainability-homepage.jpg'
import screen4 from '@/images/projects/hydroone/sustainability-people.jpg'
import screen5 from '@/images/projects/hydroone/sustainability-planet.jpg'
import screen6 from '@/images/projects/hydroone/sustainability-planet-mobile.jpg'
import screen7 from '@/images/projects/hydroone/vacation-conservation.jpg'
import screen8 from '@/images/projects/hydroone/vacation-conservation-mobile.jpg'
import screen9 from '@/images/projects/hydroone/energy-hub.jpg'

// Prototype thumbnails
import proto1 from '@/images/projects/hydroone/sustainability.png'
import proto2 from '@/images/projects/hydroone/vacation.png'
import proto3 from '@/images/projects/hydroone/richview-manby.png'
import proto4 from '@/images/projects/hydroone/islington-tslp.png'
import proto5 from '@/images/projects/hydroone/sault-ts.png'
import proto6 from '@/images/projects/hydroone/merivale.png'
import proto7 from '@/images/projects/hydroone/insulation-tips.png'
import proto8 from '@/images/projects/hydroone/wttlr.png'
import proto9 from '@/images/projects/hydroone/lighting-your-home.png'
import proto10 from '@/images/projects/hydroone/saint-clair.png'

// Hydro One logo
import logoHydroOne from '@/images/projects/hydroone/hydroone-logo.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-sky-700 dark:text-zinc-200 dark:hover:text-sky-700"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Hydro One Responsive Web Design and Development',
        para1:
          'As a Sr. UI/UX Designer working on a contract basis, I was responsible for creating a style guide and reusable components on Figma with multiple variants. I developed my UI Design using HTML5, CSS3, and JS and integrated the code into SharePoint. Using various technologies such as Figma, Sketch, and Axure, I also created high-fidelity UI prototypes. To address user pain points, I applied different variations of the design thinking process and conducted user research. Additionally, I ensured accessibility by incorporating recent contrast trends and using aria labels and alt tags for images to make the pages accessible to everyone. I completed daily tasks assigned on Wrike from cross-functional teams in a timely manner.',

        imageSrc: logoHydroOne,
        imageAlt: 'Hydro one logo',
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        imageSrc1: screen1,
        imageAlt1: 'Service Ontario project screen 1',
        imageSrc2: screen2,
        imageAlt2: 'Service Ontario project screen 2',
        imageSrc3: screen3,
        imageAlt3: 'Service Ontario project screen 3',
        imageSrc4: screen4,
        imageAlt4: 'Service Ontario project screen 4',
        imageSrc5: screen5,
        imageAlt5: 'Service Ontario project screen 1',
        imageSrc6: screen6,
        imageAlt6: 'Service Ontario project screen 1',
        imageSrc7: screen7,
        imageAlt7: 'Service Ontario project screen 1',
        imageSrc8: screen8,
        imageAlt8: 'Service Ontario project screen 1',
        imageSrc9: screen9,
        imageAlt9: 'Service Ontario project screen 1',
      },
    ],
  },

  {
    name: 'Figma prototypes',
    features: [
      {
        name: 'HydroOne Figma Prototypes',
        para1:
          'Some of the mobile responsive web pages designed and developed by me',
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About HydroOne',
        para1:
          'Hydro One is a Canadian electric utility company that provides electricity transmission and distribution services to customers in the province of Ontario. The company is publicly owned and has been serving customers for more than 100 years. Hydro One is responsible for the operation of the largest transmission system in the province, which includes over 30,000 kilometers of high-voltage transmission lines and more than 1,000 transmission stations. In addition to its transmission operations, Hydro One also manages a distribution network that delivers electricity to homes and businesses across the province. The company is committed to ensuring a safe, reliable, and sustainable supply of electricity to its customers, and it has been recognized for its efforts in environmental stewardship and community engagement.',
        link: 'https://www.hydroone.com/',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Figma prototypes
const files = [
  {
    title: 'Sustainability',
    source: proto1,
    link: 'https://www.figma.com/file/C63rTgdhnGR38HCokMK1fP/Sustainability-2021?node-id=2%3A426&t=xxeNYrO67FyySwpH-1',
  },
  {
    title: 'Vacation Conservation Tips',
    source: proto2,
    link: 'https://www.figma.com/file/qlbk5r4jpix7dRdlxwHXO8/Vacation-Conservation-Tips?node-id=2%3A66&t=u0nfmNQO4Tm3IHaw-1',
  },
  {
    title: 'Richview to Manby',
    source: proto3,
    link: 'https://www.figma.com/file/OWiuIOxVw4K1GnHxXzsdNN/Richview-to-Manby?node-id=0%3A1&t=44Yp4t5z6vJpwtBm-1',
  },
  {
    title: 'Islington TSLP',
    source: proto4,
    link: 'https://www.figma.com/file/YkdlTQIZduAtdhuV4CYrLL/Islington-TS-LP?node-id=0%3A1&t=qXdRMOZ82HqcHx6p-1',
  },
  {
    title: 'Sault 3 TS',
    source: proto5,
    link: 'https://www.figma.com/file/mfkVcrjSymJWH26i5LlgyI/Sault-3-TS?node-id=0%3A1&t=ojhVZqJlEiLL2Re2-1',
  },
  {
    title: 'Merivale',
    source: proto6,
    link: 'https://www.figma.com/file/YUqmU8h7otbD7yKSPptRrM/Merivale?node-id=0%3A1&t=tE8P17VMrwyDev1w-1',
  },
  {
    title: 'Insulation Tips',
    source: proto7,
    link: 'https://www.figma.com/file/aO52JoNiH7zpQyXXdLbcCV/Insulation-Tips?node-id=0%3A1&t=ircfMjDokfKHgn9X-1',
  },
  {
    title: 'WTTLR',
    source: proto8,
    link: 'https://www.figma.com/file/yhxLLF5WmzzBj1FwEtK2Sl/WTTLR?node-id=0%3A1&t=NfVxLuY6MN9NZqbg-1',
  },
  {
    title: 'Lighting Your Home',
    source: proto9,
    link: 'https://www.figma.com/file/PkrAaCCp3lXDZ9iHuzkqIz/Lighting-Your-Home?node-id=0%3A1&t=fAXHXZtD7RAIdFt4-1',
  },
  {
    title: 'Saint Clair',
    source: proto10,
    link: 'https://www.figma.com/file/YbApoBKV60o7MAaZ3SJOHx/Saint-Clair?node-id=0%3A1&t=Fn3pBujvdF3u2lZw-1',
  },
  // More files...
]

export function HydroFigma() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8"
    >
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full overflow-hidden rounded-lg border-2">
            <Image src={file.source} alt="" className="rounded-lg bg-cover" />
          </div>
          <p className="pointer-events-none mt-2 block truncate text-base font-medium text-gray-900 dark:text-gray-300">
            {file.title}
          </p>
          <Link
            href={file.link}
            target="_blank"
            className="text-tiny text-blue-800 dark:text-blue-400"
          >
            View prototype in figma
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <>
      <Head>
        <title>Hydro One - Project</title>
        <meta
          title="Hydro One"
          intro="Hydro One is Ontario’s largest electricity transmission and distribution service provider. We distribute electricity across Ontario to nearly 1.4 million predominantly rural customers, or approximately 26% of the total number of customers in Ontario."
        />
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
                  Hydro One
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
                                  ? 'border-blue-700 text-base font-semibold text-blue-900 outline-none dark:border-blue-500 dark:text-gray-200'
                                  : 'dark:hover-gray-100 border-transparent font-normal text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 ',
                                'whitespace-nowrap border-b-2 px-6 outline-none visited:border-none'
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
                              <div className="mb-4 max-w-[200px] sm:mt-0 lg:mt-4">
                                <Image
                                  src={feature.imageSrc}
                                  alt={feature.imageAlt}
                                  className="rounded-lg object-cover object-center dark:invert"
                                />
                              </div>

                              <div className="mt-6 lg:mt-4 lg:max-w-prose">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                                  {feature.name}
                                </h3>
                                <p className="mt-2 text-tiny text-gray-700 dark:text-gray-300">
                                  {feature.para1}
                                </p>
                              </div>
                            </div>
                          ))
                        : tab.name === 'Wireframes'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <>
                              <div>
                                <h2 className=" text-xl font-semibold dark:text-zinc-100">
                                  Sustainability 2021
                                </h2>
                                <Link
                                  href="https://www.hydroone.com/sustainability"
                                  className="text-blue-800 dark:text-blue-300"
                                  target="_blank"
                                >
                                  hydroone.com/sustainability
                                </Link>

                                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                                  Created mobile and tablet responsive pages,
                                  sustainability page sustainability/community,
                                  sustainability/planet, sustainability/people.
                                </p>
                              </div>
                              <div
                                key={feature.name}
                                className="grid grid-cols-1 gap-x-4 lg:grid-cols-12"
                              >
                                <div className="col-span-3  px-0 sm:px-2 md:p-3">
                                  <Image
                                    className="rounded bg-cover shadow-md"
                                    src={screen3}
                                    alt=""
                                  ></Image>
                                </div>
                                <div className="hidden px-0 sm:px-2 md:block md:p-3">
                                  <Image
                                    className="rounded shadow-md"
                                    src={screen1}
                                    alt=""
                                  ></Image>
                                </div>
                                <div className="col-span-3  px-0 sm:px-2 md:p-3">
                                  <Image
                                    className="rounded bg-cover shadow-md"
                                    src={screen4}
                                    alt=""
                                  ></Image>
                                </div>
                                <div className=" hidden px-0 sm:px-2 md:block md:p-3">
                                  <Image
                                    className="rounded shadow-md"
                                    src={screen2}
                                    alt=""
                                  ></Image>
                                </div>
                                <div className="col-span-3  px-0 sm:px-2 md:p-3">
                                  <Image
                                    className="rounded bg-cover shadow-md"
                                    src={screen5}
                                    alt=""
                                  ></Image>
                                </div>
                                <div className=" hidden px-0 sm:px-2 md:block md:p-3">
                                  <Image
                                    className="rounded shadow-md"
                                    src={screen6}
                                    alt=""
                                  ></Image>
                                </div>
                              </div>
                              <div className="mt-12 sm:flex sm:flex-row sm:gap-12">
                                <div>
                                  <div className="border-t-4 border-zinc-100 pt-6 dark:border-zinc-700">
                                    <h2 className=" text-xl font-bold  dark:text-zinc-100">
                                      Energy Hub, Vacation Energy Conservation
                                      pages
                                    </h2>
                                    <Link
                                      href="https://www.hydroone.com/energy-hub"
                                      className="text-blue-800 dark:text-blue-300"
                                      target="_blank"
                                    >
                                      hydroone.com/energy-hub
                                    </Link>

                                    <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                                      Designed the responsive pages on Figma and
                                      converted the design to code using HTML,
                                      CSS3 and JavaScript. Utitlized CSS Grid
                                      system for custom masonry layout of tiles
                                      on the energy hub page.
                                    </p>
                                  </div>

                                  <div className="mt-6 grid grid-cols-1 items-start gap-x-2 sm:mt-10 lg:grid-cols-12">
                                    <div className="col-span-4 px-0 sm:px-2 md:p-3">
                                      <Image
                                        className="rounded bg-cover shadow-md"
                                        src={screen7}
                                        alt=""
                                      ></Image>
                                    </div>
                                    <div className="col-span-2 hidden px-0 sm:px-2 md:block md:p-3">
                                      <Image
                                        className="rounded shadow-md"
                                        src={screen8}
                                        alt=""
                                      ></Image>
                                    </div>
                                    <div className="col-span-6 px-0 sm:px-2 md:p-3">
                                      <Image
                                        className="rounded bg-cover shadow-md"
                                        src={screen9}
                                        alt=""
                                      ></Image>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <section className="border-t-4 border-zinc-100 pt-12  dark:border-zinc-700">
                                <h2 className="mb-4 text-xl font-bold dark:text-zinc-100">
                                  More screens?
                                </h2>
                                <SocialLink
                                  href="mailto:arif.alim@outlook.com"
                                  icon={MailIcon}
                                >
                                  Request to view additional design assets
                                </SocialLink>
                              </section>
                            </>
                          ))
                        : tab.name === 'Figma prototypes'
                        ? tab.features.map((feature) => (
                            <div key={feature.name}>
                              <div className="mt-6 lg:col-span-5 lg:mt-0">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                                  {feature.name}
                                </h3>
                                <p className="mt-0 mb-0 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para1}
                                </p>
                              </div>
                              <HydroFigma></HydroFigma>
                            </div>
                          ))
                        : tab.name === 'Company details'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div key={feature.name}>
                              <div className="mt-6 lg:col-span-5 lg:mt-0">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                                  {feature.name}
                                </h3>
                                <p className="mt-0 mb-0 text-tiny font-normal text-gray-600 dark:text-gray-400">
                                  {feature.para1}
                                </p>
                                <Link
                                  href={feature.link}
                                  target="_blank"
                                  className="text-blue-800 dark:text-blue-400"
                                >
                                  Visit website
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
        </div>
      </SimpleLayout>
    </>
  )
}
