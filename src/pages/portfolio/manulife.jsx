// Homepage
//
import wireframe1 from '@/images/projects/manulife/home-mvp.png'
import wireframe2 from '@/images/projects/manulife/home-future-1.png'
import wireframe3 from '@/images/projects/manulife/home-future-2.png'
import wireframe4 from '@/images/projects/manulife/coverage-summary-1.png'
import wireframe5 from '@/images/projects/manulife/coverage-summary-2.png'
import wireframe6 from '@/images/projects/manulife/status-terminate.png'
import wireframe7 from '@/images/projects/manulife/status-parental.png'
import wireframe8 from '@/images/projects/manulife/status-other.png'
import wireframe9 from '@/images/projects/manulife/reinstate-member.png'

// Coverage summary

// Design system
//
import component1 from '@/images/projects/manulife/datepicker-1.png'
import component2 from '@/images/projects/manulife/datepicker-2.png'

import component3 from '@/images/projects/co-operators/component3.jpg'

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
        heading1: 'Responsibilites',
        para1:
          'Work with Product, Marketing, Business and IS teams to obtain and understand business, functional and technical requirements.',
        li1: `Document detailed user experience specifications.`,
        li2: `Design user interfaces by applying the fundamental principles of user experience design, research experience, industry best practices and balancing those against system constraints and business objectives.`,
        li3: `Create and revise user flows, sitemaps and low and high-fidelity wireframes based on specifications, goals, needs and limitations.`,
        li4: `Develop rapid interactional UX prototypes; verify design assumptions through concept and usability testing.`,
        li5: `Lead design review sessions with project teams, acquiring consensus and approval on designs and documentation.`,
        li6: `Create final visual mockups against wireframes, in keeping with the company brand standards, UX guidelines and accessibility legislation (AODA/WCAG).`,
        li7: `Provide final design assets and documentation to the development team; liaise to ensure final output matches UX specifications and visual design.`,
        li8: `Collaborated with Product, Marketing, Business, and IS teams to gather comprehensive requirements for Manulife’s Plan Administrator Site, translating into strategic UX redesigns that align with business objectives to enhance overall usability.`,
        li9: `Simplified the user journey by streamlining navigation flows, reducing steps to key destinations, and restructuring content hierarchy for improved access and user engagement.`,
        li10: `Coordinated and led UX design reviews, ensuring project alignment with business goals while adhering to Manulife’s brand standards and accessibility requirements (AODA/WCAG).`,
        li11: `Developed clickable prototypes for usability testing on UserTesting.com and leveraged Google Analytics data to gather both qualitative and quantitative feedback, driving data-informed iterative improvements to enhance user experience and interface functionality for Manulife's Plan Administrator Site and Disability Portal.`,
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About',
        para1: `Manulife is a leading international financial services group that helps people make their decisions easier and lives better. We operate primarily as John Hancock in the United States and Manulife elsewhere. We provide financial advice, insurance, as well as wealth and asset management solutions for individuals, groups and institutions.`,
        link: `https://www.manulife.ca/personal.html`,
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        imageSrc1: wireframe1,
        imageSrc1Alt: 'Manulife project screen 1',
        imageSrc2: wireframe2,
        imageSrc2Alt: 'Manulife project screen 2',
        imageSrc3: wireframe3,
        imageSrc3Alt: 'Manulife project screen 3',
        imageSrc4: wireframe4,
        imageSrc4Alt: 'Manulife project screen 4',
        imageSrc5: wireframe5,
        imageSrc5Alt: 'Manulife project screen 5',
        imageSrc6: wireframe6,
        imageSrc6Alt: 'Manulife project screen 6',
        imageSrc7: wireframe7,
        imageSrc7Alt: 'Manulife project screen 7',
        imageSrc8: wireframe8,
        imageSrc8Alt: 'Manulife project screen 8',
        imageSrc9: wireframe9,
        imageSrc9Alt: 'Manulife project screen 9',
      },
    ],
  },

  {
    name: 'Design system',
    features: [
      {
        imageSrc6: component1,
        imageSrc6Alt: 'Co-operators project screen 12',
        imageSrc7: component2,
        imageSrc7Alt: 'Co-operators project screen 13',
        imageSrc8: component3,
        imageSrc8Alt: 'Co-operators project screen 14',
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
    <SimpleLayout
      title={'Manulife'}
      intro={
        'Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience.'
      }
    >
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl">
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
                <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                  {tab.name === 'Summary'
                    ? /* Render content for Summary tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8"
                        >
                          <div className="col-span-full mb-4 text-lg font-semibold ">
                            <h2>Summary</h2>
                          </div>
                          <div className="max-w-prose text-sm   lg:mt-0">
                            <p>{feature.para1}</p>
                            <ul className="list-disc pl-2 lg:pl-8">
                              <li className="mt-4">{feature.li1}</li>
                              <li>{feature.li2}</li>
                              <li>{feature.li3}</li>
                              <li>{feature.li4}</li>
                              <li>{feature.li5}</li>
                              <li>{feature.li6}</li>
                              <li>{feature.li7}</li>
                            </ul>
                          </div>
                          <div className="col-span-full my-4 text-lg font-semibold dark:text-gray-200 lg:mt-8 ">
                            <h2>Contributions</h2>
                          </div>
                          <div className="max-w-prose text-sm text-zinc-900  dark:text-zinc-200 lg:mt-0">
                            <ul className="list-disc pl-2 lg:pl-8">
                              <li className="text-tiny text-slate-900 dark:text-gray-400">
                                {feature.li8}
                              </li>
                              <li>{feature.li9}</li>
                              <li>{feature.li10}</li>
                              <li>{feature.li11}</li>
                            </ul>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Wireframes'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col gap-y-16  dark:bg-inherit"
                        >
                          <div className="col-span-full lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Plan Administrator Home (MVP)</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc1}
                                alt={feature.imageSrc1Alt}
                                width={500}
                                height={300}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Plan Administrator Home (PowerBi)</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <div>
                                <Image
                                  src={feature.imageSrc2}
                                  alt={feature.imageSrc2Alt}
                                  width={400}
                                  height={300}
                                  layout="responsive"
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div>
                                <Image
                                  src={feature.imageSrc3}
                                  alt={feature.imageSrc3Alt}
                                  width={400}
                                  height={300}
                                  layout="responsive"
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Coverage summary</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <div>
                                <Image
                                  src={feature.imageSrc4}
                                  alt={feature.imageSrc4Alt}
                                  width={400}
                                  height={300}
                                  layout="responsive"
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                              <div>
                                <Image
                                  src={feature.imageSrc5}
                                  alt={feature.imageSrc5Alt}
                                  width={400}
                                  height={300}
                                  layout="responsive"
                                  className="rounded-lg object-cover object-center"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Status Update (Terminate a member)</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 sm:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc6}
                                alt={feature.imageSrc6Alt}
                                width={300}
                                height={300}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Status Update (Parental leave)</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc7}
                                alt={feature.imageSrc7Alt}
                                width={300}
                                height={300}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Status Update (Other leave)</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc8}
                                alt={feature.imageSrc8Alt}
                                width={300}
                                height={300}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Reinstate a member</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc9}
                                alt={feature.imageSrc9Alt}
                                width={300}
                                height={300}
                                layout="responsive"
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
                          className="flex flex-col gap-y-16  dark:bg-inherit"
                        >
                          <div className="col-span-full lg:grid lg:grid-cols-12 lg:gap-x-4">
                            <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200 ">
                              <h2>Datepicker</h2>
                            </div>
                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc6}
                                alt={feature.imageSrc6Alt}
                                width={300}
                                height={300}
                                layout="responsive"
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div
                              className="flex gap-8 bg-zinc-100 p-4 dark:bg-zinc-800 lg:col-span-12 lg:p-8"
                              layout="responsive"
                            >
                              <Image
                                src={feature.imageSrc7}
                                alt={feature.imageSrc7Alt}
                                width={300}
                                height={300}
                                layout="responsive"
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
                          <div className="mt-6 max-w-2xl text-sm text-zinc-900  dark:text-zinc-200 lg:col-span-5 lg:mt-0">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                              {feature.name}
                            </h3>
                            <p className="mt-2 ">{feature.para1}</p>
                            <Link
                              href={feature.link}
                              target="_blank"
                              className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <div>View Website</div>
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
  )
}
