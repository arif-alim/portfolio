// Homepage
//

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
          'At the Canada Border Services Agency (CBSA), I served as a Lead UX Designer, focusing on improving service design and user experience for key projects. My work involved conducting in-depth user research through interviews, surveys, and observational studies to identify customer pain points and align solutions with user needs. I developed detailed user journey maps and service blueprints, ensuring a comprehensive understanding of current-state processes and identifying areas for improvement. Using Figma, I created high-fidelity prototypes and conducted iterative testing, gathering feedback to refine designs and enhance service interactions.',
        para2:
          'In collaboration with cross-functional teams, I facilitated co-creation workshops using Miro, ensuring alignment between user needs and business objectives while adhering to Federal Digital Service Standards. While I am unable to share the designs due to confidentiality, my work at CBSA demonstrates my ability to design secure, user-focused solutions that meet the stringent requirements of government services.',
      },
    ],
  },
  {
    name: 'Scope of work',
    features: [
      {
        heading1: 'Overview',
        heading2: 'Role and Approach',
        para1:
          'Project Epsilon focused on delivering a user-centered solution that seamlessly integrated complex backend data with an intuitive front-end design. The goal was to create a scalable, efficient, and visually cohesive interface that simplified development workflows while enhancing the user experience.',
        para2:
          'As a Lead UX Designer, my role involved deeply understanding the system architecture, particularly the API calls and the JSON data structure retrieved. By analyzing the API responses and the data schema, I identified patterns and opportunities to streamline how data was presented and interacted with on the user interface.',
      },
    ],
  },
  {
    name: 'Contributions',
    features: [
      {
        heading1: 'Key Contributions',
        subheading1: 'Data-Driven Design Decisions:',
        subheading2: 'Simplifying Development Through Design:',
        subheading3: 'User-Centered Enhancements:',
        li1: 'By studying the structure of the JSON objects, including arrays of data points, I devised a design solution that dynamically adjusted to varying data sets.',
        li2: 'The design leveraged a single card component, which could be replicated for each object in the array, ensuring scalability and consistency across the interface.',
        li3: 'The card-based layout minimized the complexity of the development process by standardizing how data was displayed. This approach eliminated the need for developers to create multiple components for different data scenarios, reducing both development time and potential errors.',
        li4: 'Dynamic data-binding principles were incorporated, allowing the card design to automatically populate with data from the JSON object, ensuring seamless integration between the front-end and back-end.',
        li5: 'The card design not only simplified development but also improved usability by presenting information in a clear, organized format that users could easily interact with and understand.',
        li6: 'The modular nature of the design ensured that future API changes or additional data fields could be accommodated without disrupting the user experience.',
        li7: 'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
        li8: 'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
        li9: 'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
      },
    ],
  },
  {
    name: 'Result',
    features: [
      {
        heading1: 'Outcomes',
        para1:
          'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
        para2:
          'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
        para3:
          'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
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
      title={'CBSA'}
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
                          className="flex max-w-prose flex-col lg:gap-x-8"
                        >
                          <div className="col-span-full mb-4 ">
                            <h2 className="text-lg font-semibold">
                              {feature.heading1}
                            </h2>
                          </div>
                          <div className="flex flex-col gap-4 ">
                            <p>{feature.para1}</p>
                            <p>{feature.para2}</p>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Scope of work'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex max-w-prose flex-col lg:gap-x-8 "
                        >
                          <div>
                            <div className="col-span-full mb-8 flex flex-col gap-4 ">
                              <h2 className="text-lg font-semibold">
                                {feature.heading1}
                              </h2>
                              <p className="">{feature.para1}</p>
                            </div>
                            <div className="col-span-full mb-8 flex flex-col gap-4">
                              <h2 className="text-lg font-semibold">
                                {feature.heading2}
                              </h2>
                              <p className="">{feature.para2}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Contributions'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex max-w-prose flex-col lg:gap-x-8 "
                        >
                          <div>
                            <div className="col-span-full flex flex-col">
                              <h2 className="text-lg font-semibold">
                                {feature.heading1}
                              </h2>
                              <p className="">{feature.para1}</p>
                            </div>
                            <div className="col-span-full mb-4 flex flex-col ">
                              <h2 className="text-lg font-semibold">
                                {feature.heading2}
                              </h2>
                              <p className="">{feature.para2}</p>
                            </div>

                            <div className="col-span-full  flex flex-col ">
                              <h2 className="text-lg font-semibold">
                                {feature.heading3}
                              </h2>
                              <ol className="list-inside list-decimal space-y-6">
                                <li>
                                  <span className="font-semibold">
                                    {feature.subheading1}
                                  </span>
                                  <ul className="ml-6 mt-2 list-inside list-disc space-y-2 ">
                                    <li>{feature.li1}</li>
                                    <li>{feature.li2}</li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-semibold">
                                    {feature.subheading2}
                                  </span>
                                  <ul className="ml-6 mt-2 list-inside list-disc space-y-2 ">
                                    <li>{feature.li3}</li>
                                    <li>{feature.li4}</li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-semibold">
                                    {feature.subheading3}
                                  </span>
                                  <ul className="ml-6 mt-2 list-inside list-disc space-y-2 ">
                                    <li>{feature.li5}</li>
                                    <li>{feature.li6}</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Result'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex max-w-prose flex-col lg:gap-x-8 "
                        >
                          <div>
                            <div className="col-span-full  flex flex-col gap-4">
                              <h2 className="text-lg font-semibold">
                                {feature.heading1}
                              </h2>
                              <ul className="ml-6 list-inside list-disc space-y-2 ">
                                <li>{feature.para1}</li>
                                <li>{feature.para2}</li>
                                <li>{feature.para3}</li>
                              </ul>
                            </div>
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
