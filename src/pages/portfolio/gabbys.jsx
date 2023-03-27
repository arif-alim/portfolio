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
        name: "Gabby's",
        para1:
          'The Lieber Group website redesign is at the forefront of the latest UI trends and UX laws, resulting in a truly modern and user-friendly design that enhances accessibility and engagement.',
        para2:
          'The use of responsive design and parallax scrolling improves accessibility and engagement by optimizing the website for mobile devices and creating a dynamic and immersive user experience. Users can access the website seamlessly on any device, and the engaging design keeps them interested and engaged with the content.',
        para3:
          'Overall, the Lieber Group website redesign is a perfect example of how the latest UI trends and UX laws can be utilized to create a modern and user-friendly design that enhances accessibility and engagement. The improved navigation and search functionality, coupled with the modern design, results in a significant improvement in user experience and customer satisfaction.',

        imageSrc: logoGabbys,
        imageAlt: 'Lieber group logo',
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
          "Lieber Group is a Canadian company that provides a wide range of consulting and advisory services to businesses of all sizes. Established in 1986, the company has built a strong reputation for its expertise and commitment to delivering high-quality solutions that meet the unique needs of each client. Lieber Group offers a range of services, including strategy consulting, project management, IT consulting, and business analysis, among others. With a focus on customer satisfaction and a team of highly skilled professionals, Lieber Group is committed to providing exceptional service and tailored solutions to help its clients achieve their business goals. With over 35 years of experience, Lieber Group has a deep understanding of the Canadian business landscape and is well-positioned to help businesses navigate the challenges of today's rapidly changing business environment.",

        link: 'http://www.liebergroup.ca/',
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
        <meta
          name="description"
          content="At Lieber Group, we know how important timelines are. We have the capacity and the ability to work on complex projects. No matter how small or big the project is, we will always adhere to our clients timeline and budget. We take pride in showcasing our workmanship and delivering projects on time"
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
                  Gabbys
                </h1>
                <h2 className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                  Graphic design, mobile repsonsive website and logo design.
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
                              <div className="mb-4 max-w-[200px] sm:mt-0 lg:mt-4">
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
