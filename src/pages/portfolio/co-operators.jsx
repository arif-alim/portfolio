// Homepage
//
import homepage1 from '@/images/projects/co-operators/homepage1.png'
import homepage2 from '@/images/projects/co-operators/homepage2.png'
import homepage3 from '@/images/projects/co-operators/homepage3.png'
import homepage4 from '@/images/projects/co-operators/homepage4.png'
import homepage5 from '@/images/projects/co-operators/homepage5.png'

// Style guide
//
import sg1 from '@/images/projects/co-operators/sg1.png'
import sg2 from '@/images/projects/co-operators/sg2.png'
import sg3 from '@/images/projects/co-operators/sg3.png'
import sg4 from '@/images/projects/co-operators/sg4.png'

// Illustrations
//
import illustration1 from '@/images/projects/co-operators/illustration1.png'
import illustration2 from '@/images/projects/co-operators/illustration2.png'

// Design system
//
import component1 from '@/images/projects/co-operators/component1.png'
import component2 from '@/images/projects/co-operators/component2.png'
import component3 from '@/images/projects/co-operators/component3.png'
import component4 from '@/images/projects/co-operators/component4.png'

import logoCooperators from '@/images/projects/co-operators/cooperators-logo.svg'

/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: '',
        para1:
          'In my tenure with Co-operators, I harnessed my deep understanding of the insurance sector to develop intuitive and user-friendly digital experiences that aligned with their broad spectrum of insurance products, all while adhering to stringent regulatory standards. I proficiently utilized Figma for the design, prototyping, and testing of user interfaces, thereby fostering a culture of user-centered innovation and contributing to the company’s digital transformation goals.',
        para2:
          "I also employed tools like Miro and Figma's extensive plugins and integrations to organize, analyze, and conduct user research, create affinity diagrams, synthesize insights, and collect feedback directly within the design environment. This work was instrumental in developing Co-operators' new visual identity and implementing a refreshed version of their website.",
        para3:
          'In addition to these responsibilities, I contributed to the creation of a comprehensive style guide and played a key role in establishing a robust design system, which has streamlined the collaborative process for designers, developers, product managers, and other stakeholders to gather insights, provide feedback, and iteratively refine our designs.',
        imageSrc: logoCooperators,
        imageAlt: 'Bombardier designs',
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: '',
        para1:
          "Co-operators Group Limited is a reputable Canadian insurance co-operative, established in 1945. It's owned by 46 members, including various co-ops, credit union centrals, and representative farm organizations. Recognized as a premier Canadian-owned multi-line insurer, Co-operators offers a comprehensive range of insurance products such as auto, home, life, farm, travel, and commercial insurance, in addition to investment opportunities​​. The organization is a leading entity in Canadian insurance and financial services, managing over $59 billion in assets. ",
        link: 'https://www.cooperators.ca/en/',
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        imageSrc1: homepage1,
        imageSrc1Alt: 'Co-operators project screen 1',
        imageSrc2: homepage2,
        imageSrc2Alt: 'Co-operators project screen 2',
        imageSrc3: homepage3,
        imageSrc3Alt: 'Co-operators project screen 3',
        imageSrc4: homepage4,
        imageSrc4Alt: 'Co-operators project screen 4',
        imageSrc5: homepage5,
        imageSrc5Alt: 'Co-operators project screen 5',
      },
    ],
  },
  {
    name: 'Style guide',
    features: [
      {
        imageSrc6: sg1,
        imageSrc6Alt: 'Co-operators project screen 6',
        imageSrc7: sg2,
        imageSrc7Alt: 'Co-operators project screen 7',
        imageSrc8: sg3,
        imageSrc8Alt: 'Co-operators project screen 8',
        imageSrc9: sg4,
        imageSrc9Alt: 'Co-operators project screen 9',
      },
    ],
  },
  {
    name: 'Illustrations',
    features: [
      {
        imageSrc10: illustration1,
        imageSrc10Alt: 'Co-operators project screen 10',
        imageSrc11: illustration2,
        imageSrc11Alt: 'Co-operators project screen 11',
      },
    ],
  },

  {
    name: 'Design system',
    features: [
      {
        imageSrc12: component1,
        imageSrc12Alt: 'Co-operators project screen 12',
        imageSrc13: component2,
        imageSrc13Alt: 'Co-operators project screen 13',
        imageSrc14: component3,
        imageSrc14Alt: 'Co-operators project screen 14',
        imageSrc15: component4,
        imageSrc15Alt: 'Co-operators project screen 15',
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
    <SimpleLayout>
      <div className="">
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <div className="max-w-3xl">
              <Image src={logoCooperators} className="dark:invert" />
              <h2 className="mt-1 text-md font-medium tracking-tight text-gray-600 dark:text-gray-300">
                Helped create Co-operators new visual identity.
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
                              'whitespace-nowrap border-b-2 px-6 text-md outline-none visited:border-none'
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
                  <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                    {tab.name === 'Summary'
                      ? /* Render content for Summary tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col lg:gap-x-8"
                          >
                            {/* <div className="lg: mb-0 mt-6 max-w-[250px] lg:my-4">
                              <Image
                                src={feature.imageSrc}
                                alt={feature.imageAlt}
                                className="dark:invert"
                              />
                            </div> */}
                            <div className="max-w-prose lg:mt-0">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                                {feature.name}
                              </h3>
                              <p className="text-md text-gray-700 dark:text-gray-400">
                                {feature.para1}
                              </p>
                              <p className="mt-4 text-md text-gray-700 dark:text-gray-400">
                                {feature.para2}
                              </p>
                              <p className="mt-4 text-md text-gray-700 dark:text-gray-400">
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
                            className="flex flex-col gap-y-16 bg-slate-100 dark:bg-inherit lg:p-8"
                          >
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Homepage</h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc1}
                                  alt={feature.imageSrc1Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageSrc2Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Sign-in and upgrade policy</h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageSrc3Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageSrc4Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>
                                  Auto policy and details coverage screens
                                </h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc5}
                                  alt={feature.imageSrc5Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Style guide'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col gap-y-16 bg-slate-100 dark:bg-inherit lg:p-8"
                          >
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Homepage</h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc6}
                                  alt={feature.imageSrc6Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc7}
                                  alt={feature.imageSrc7Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Sign-in and upgrade policy</h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc8}
                                  alt={feature.imageSrc8Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc9}
                                  alt={feature.imageSrc9Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Illustrations'
                      ? /* Render content for Illustrations tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col gap-y-16 bg-slate-100 dark:bg-inherit lg:p-8"
                          >
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Illustrations</h2>
                              </div>
                              <div className="flex flex-col gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc10}
                                  alt={feature.imageSrc10Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc11}
                                  alt={feature.imageSrc11Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Design system'
                      ? /* Render content for Illustrations tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col gap-y-16 bg-slate-100 dark:bg-inherit lg:p-8"
                          >
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Illustrations</h2>
                              </div>
                              <div className="flex gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc12}
                                  alt={feature.imageSrc12Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                                <Image
                                  src={feature.imageSrc13}
                                  alt={feature.imageSrc13Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                            <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                              <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200 ">
                                <h2>Illustrations</h2>
                              </div>
                              <div className="flex flex-col gap-8 lg:col-span-12">
                                <Image
                                  src={feature.imageSrc14}
                                  alt={feature.imageSrc14Alt}
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
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
                              <p className="text-md text-gray-600 dark:text-gray-400">
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
  )
}
