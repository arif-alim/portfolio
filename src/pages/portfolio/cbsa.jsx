/* eslint-disable @next/next/no-img-element */

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

const tabs = [
  {
    name: 'Summary',
    sections: [
      {
        title: 'Responsibilities',
        paragraphs: [
          'At the Canada Border Services Agency (CBSA), I served as a Lead UX Designer, focusing on improving service design and user experience for key projects. My work involved conducting in-depth user research through interviews, surveys, and observational studies to identify customer pain points and align solutions with user needs. I developed detailed user journey maps and service blueprints, ensuring a comprehensive understanding of current-state processes and identifying areas for improvement. Using Figma, I created high-fidelity prototypes and conducted iterative testing, gathering feedback to refine designs and enhance service interactions.',
          'In collaboration with cross-functional teams, I facilitated co-creation workshops using Miro, ensuring alignment between user needs and business objectives while adhering to Federal Digital Service Standards. While I am unable to share the designs due to confidentiality, my work at CBSA demonstrates my ability to design secure, user-focused solutions that meet the stringent requirements of government services.',
        ],
      },
    ],
  },
  {
    name: 'Scope of work',
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'Project Epsilon focused on delivering a user-centered solution that seamlessly integrated complex backend data with an intuitive front-end design. The goal was to create a scalable, efficient, and visually cohesive interface that simplified development workflows while enhancing the user experience.',
        ],
      },
      {
        title: 'Role and Approach',
        paragraphs: [
          'As a Lead UX Designer, my role involved deeply understanding the system architecture, particularly the API calls and the JSON data structure retrieved. By analyzing the API responses and the data schema, I identified patterns and opportunities to streamline how data was presented and interacted with on the user interface.',
        ],
      },
    ],
  },
  {
    name: 'Contributions',
    sections: [
      {
        title: 'Key Contributions',
        groups: [
          {
            title: 'Data-Driven Design Decisions:',
            items: [
              'By studying the structure of the JSON objects, including arrays of data points, I devised a design solution that dynamically adjusted to varying data sets.',
              'The design leveraged a single card component, which could be replicated for each object in the array, ensuring scalability and consistency across the interface.',
            ],
          },
          {
            title: 'Simplifying Development Through Design:',
            items: [
              'The card-based layout minimized the complexity of the development process by standardizing how data was displayed. This approach eliminated the need for developers to create multiple components for different data scenarios, reducing both development time and potential errors.',
              'Dynamic data-binding principles were incorporated, allowing the card design to automatically populate with data from the JSON object, ensuring seamless integration between the front-end and back-end.',
            ],
          },
          {
            title: 'User-Centered Enhancements:',
            items: [
              'The card design not only simplified development but also improved usability by presenting information in a clear, organized format that users could easily interact with and understand.',
              'The modular nature of the design ensured that future API changes or additional data fields could be accommodated without disrupting the user experience.',
            ],
          },
        ],
        summaryItems: [
          'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
          'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
          'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
        ],
      },
    ],
  },
  {
    name: 'Result',
    sections: [
      {
        title: 'Outcomes',
        items: [
          'Efficiency Gains: Reduced development time by creating a reusable and dynamic component that adapts to incoming data.',
          'Scalability: Enabled the interface to handle large and variable data sets without requiring significant redesign or additional development effort.',
          'Enhanced Usability: Delivered a streamlined user interface that presented complex data in a visually clear and accessible manner.',
        ],
      },
    ],
  },
  {
    name: 'Case Study',
    sections: [
      {
        title: 'Coming Soon...',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Tab content components
 */

function SummaryTab({ sections }) {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="flex max-w-3xl flex-col lg:gap-x-8">
          <div className="col-span-full mb-4">
            <h2 className="text-lg font-semibold">{section.title}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {section.paragraphs?.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function ScopeTab({ sections }) {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="flex max-w-3xl flex-col lg:gap-x-8">
          <div className="col-span-full mb-8 flex flex-col gap-4">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            {section.paragraphs?.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

function ContributionsTab({ sections }) {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="flex max-w-3xl flex-col lg:gap-x-8">
          <div className="col-span-full flex flex-col gap-6">
            <h2 className="text-lg font-semibold">{section.title}</h2>

            {/* Contribution groups */}
            <ol className="list-inside list-decimal space-y-6">
              {section.groups?.map((group, gIdx) => (
                <li key={gIdx}>
                  <span className="font-semibold">{group.title}</span>
                  <ul className="ml-6 mt-2 list-inside list-disc space-y-2">
                    {group.items?.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            {/* Summary points */}
            {section.summaryItems && (
              <div className="mt-4">
                <h3 className="mb-2 text-md font-semibold">Impact</h3>
                <ul className="ml-6 list-inside list-disc space-y-2">
                  {section.summaryItems.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

function ResultTab({ sections }) {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="flex max-w-3xl flex-col lg:gap-x-8">
          <div className="col-span-full flex flex-col gap-4">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <ul className="ml-6 list-inside list-disc space-y-2">
              {section.items?.map((item, iIdx) => (
                <li key={iIdx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

function CaseStudyTab({ sections }) {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx}>
          <div className="mt-6 max-w-2xl lg:col-span-5 lg:mt-0">
            <h3 className="text-xl font-semibold">{section.title}</h3>
          </div>
        </div>
      ))}
    </>
  )
}

/**
 * Map tab names to components
 */
const tabComponents = {
  Summary: SummaryTab,
  'Scope of work': ScopeTab,
  Contributions: ContributionsTab,
  Result: ResultTab,
  'Case Study': CaseStudyTab,
}

export default function Project() {
  return (
    <SimpleLayout
      title="CBSA"
      intro="Streamlined the user interface for the Plan Administrator and Disability portal to enhance user experience."
    >
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
          <Tab.Group as="div" className="mt-10">
            <div className="overflow-x-hidden whitespace-nowrap">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 dark:border-gray-500 sm:px-0">
                  <Tab.List className="-mb-px flex">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-blue-700 font-semibold text-blue-900 outline-none dark:border-blue-500 dark:text-gray-50'
                              : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
                            'whitespace-nowrap border-b-2 px-6 text-tiny outline-none'
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
              {tabs.map((tab) => {
                const TabComponent = tabComponents[tab.name]

                return (
                  <Tab.Panel key={tab.name} className=" pt-4 lg:pt-8">
                    {TabComponent ? (
                      <TabComponent sections={tab.sections} />
                    ) : null}
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
