import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

// Import Design Certificates
import designCert1 from '@/images/certificates/designCert1.jpg'
import designCert2 from '@/images/certificates/designCert2.jpg'
import designCert3 from '@/images/certificates/designCert3.jpg'
import designCert4 from '@/images/certificates/designCert4.jpg'
import designCert5 from '@/images/certificates/designCert5.jpg'
import designCert6 from '@/images/certificates/designCert6.jpg'
import designCert7 from '@/images/certificates/designCert7.jpg'
import designCert8 from '@/images/certificates/designCert8.jpg'
import designCert9 from '@/images/certificates/designCert9.jpg'
import designCert10 from '@/images/certificates/designCert10.jpg'

// Import Frontend Certificates
import frontendCert1 from '@/images/certificates/frontendCert1.jpg'
import frontendCert2 from '@/images/certificates/frontendCert2.jpg'
import frontendCert3 from '@/images/certificates/frontendCert3.jpg'
import frontendCert4 from '@/images/certificates/frontendCert4.jpg'
import frontendCert5 from '@/images/certificates/frontendCert5.jpg'
import frontendCert6 from '@/images/certificates/frontendCert6.jpg'
import frontendCert7 from '@/images/certificates/frontendCert7.jpg'
import frontendCert8 from '@/images/certificates/frontendCert8.jpg'
import frontendCert9 from '@/images/certificates/frontendCert9.jpg'

// Import Backend Certificates
import backendCert1 from '@/images/certificates/backendCert1.jpg'
import backendCert2 from '@/images/certificates/backendCert2.jpg'
import backendCert3 from '@/images/certificates/backendCert3.jpg'
import backendCert4 from '@/images/certificates/backendCert4.jpg'
import backendCert5 from '@/images/certificates/backendCert5.jpg'
import backendCert6 from '@/images/certificates/backendCert6.jpg'
import backendCert7 from '@/images/certificates/backendCert7.jpg'
import backendCert8 from '@/images/certificates/backendCert8.jpg'

// Add imports for all other certificates.

const tabs = [
  {
    name: 'Design',
    features: [
      {
        heading: 'UX Design 1: Overview',
        imageSrc: designCert1,
      },
      {
        heading: 'UX Design 2: Analyzing User Data',
        imageSrc: designCert2,
      },
      {
        heading: 'UX Design 3: Creating Personas',
        imageSrc: designCert3,
      },
      {
        heading: 'UX Design 4: Ideation',
        imageSrc: designCert4,
      },
      {
        heading: 'UX Design 5: Creating Scenerios and Storyboards',
        imageSrc: designCert5,
      },
      {
        heading: 'UX Design 6: Paper Prototyping',
        imageSrc: designCert6,
      },
      {
        heading: 'UX Design 7: Implementation Planning',
        imageSrc: designCert7,
      },
      {
        heading: 'Interaction Design Flow',
        imageSrc: designCert8,
      },
      {
        heading: 'UX Foundations Prototyping',
        imageSrc: designCert9,
      },
      {
        heading: 'Graphic Design',
        imageSrc: designCert10,
      },
      // Add more features as needed.
    ],
  },
  {
    name: 'Frontend',
    features: [
      {
        heading: 'JavaScript',
        imageSrc: frontendCert1,
      },
      {
        heading: 'CSS Essentaial Training',
        imageSrc: frontendCert2,
      },
      {
        heading: 'Wordress CMBs',
        imageSrc: frontendCert3,
      },
      {
        heading: 'CSS: Selectors',
        imageSrc: frontendCert4,
      },
      {
        heading: 'ROR 6: Models',
        imageSrc: frontendCert5,
      },
      {
        heading: 'ROR 6: Controllers',
        imageSrc: frontendCert6,
      },
      {
        heading: 'ROR 6: Essential Training',
        imageSrc: frontendCert7,
      },
      {
        heading: 'HTML 5 Essential Training',
        imageSrc: frontendCert8,
      },
      {
        heading: 'HTTP Essential Training',
        imageSrc: frontendCert9,
      },
      // Add more features as needed.
    ],
  },
  {
    name: 'Backend',
    features: [
      {
        heading: 'Ruby',
        imageSrc: backendCert1,
      },
      // Add more features as needed.
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Design')

  return (
    <>
      <Head>
        <title>Education & Accolades - Arif Alim</title>
        <meta
          name="description"
          content="Double degree program, BA at Wilfrid Laurier University and BCS at the University of Waterloo"
        />
      </Head>
      <SimpleLayout
        title="Double Degree education and over a decade of industry experience in UI/UX Design and Frontend Development"
        intro="Started graphic design at the age of 15 and soon progressed to user interaction and experience design. With extensive knowledge of industry-standard JavaScript frameworks, it has helped me design with development in mind."
      >
        <div className="education my-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Education
            </h2>
            <div className="flex flex-row items-center justify-start gap-12">
              <Image
                src="/path-to-uw-logo.png"
                alt="University of Waterloo"
                width={150}
                height={80}
              />
              <Image
                src="/path-to-wlu-logo.png"
                alt="Wilfrid Laurier University"
                width={150}
                height={80}
              />
            </div>
          </div>
        </div>

        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <Tab.Group
            as="div"
            selectedIndex={tabs.findIndex((tab) => tab.name === selectedTab)}
          >
            <div className="flex flex-wrap border-b">
              <Tab.List className="flex flex-row">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-blue-500 text-blue-600'
                          : 'text-gray-500 hover:text-gray-800',
                        'px-4 py-2 font-medium'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name}>
                  <div className="grid gap-6 md:grid-cols-3">
                    {tab.features.map((feature) => (
                      <div
                        key={feature.heading}
                        className="rounded-lg shadow-md"
                      >
                        <Image
                          src={feature.imageSrc}
                          alt={feature.heading}
                          width={300}
                          height={200}
                          className="rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-medium">
                            {feature.heading}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </section>
      </SimpleLayout>
    </>
  )
}
