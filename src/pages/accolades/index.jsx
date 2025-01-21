import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

// Import certificates
import * as certificates from '@/data/certificates'

// School Icons
import waterlooLight from '@/images/school/uw-light.svg'
import waterlooDark from '@/images/school/uw-dark.svg'
import laurierLight from '@/images/school/wlu-light.svg'
import laurierDark from '@/images/school/wlu-dark.svg'

// Helper function
const classNames = (...classes) => classes.filter(Boolean).join(' ')

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Design')

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Education & Accolades - Arif Alim</title>
        <meta
          name="description"
          content="Double degree program, BA at Wilfrid Laurier University and BCS at the University of Waterloo"
        />
      </Head>
      <SimpleLayout
        title="Almost two decades of UX design experience"
        intro="I began my journey in graphic design at the age of 15, which quickly evolved into a passion for user interaction and experience design. My in-depth knowledge of industry-standard JavaScript frameworks enables me to approach design with a strong understanding of development, ensuring seamless integration between the two."
      >
        {/* Education Section */}
        <div className="education my-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Education
          </h2>
          <div className="flex items-center gap-16">
            {/* School Logos */}
            {[
              {
                light: waterlooLight,
                dark: waterlooDark,
                alt: 'University of Waterloo',
              },
              {
                light: laurierLight,
                dark: laurierDark,
                alt: 'Wilfrid Laurier University',
              },
            ].map((school, index) => (
              <div key={index}>
                <div className="dark:hidden">
                  <Image
                    src={school.light}
                    alt={school.alt}
                    width={200}
                    height={80}
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={school.dark}
                    alt={school.alt}
                    width={200}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl pt-6"
        >
          <h2 className="pb-4 text-2xl font-bold text-gray-900 dark:text-zinc-50 sm:text-2xl">
            Certifications
          </h2>
          <Tab.Group
            as="div"
            selectedIndex={certificates.tabs.findIndex(
              (tab) => tab.name === selectedTab
            )}
            onChange={(index) => setSelectedTab(certificates.tabs[index].name)}
          >
            {/* Tab List */}
            <div className="flex flex-col">
              <Tab.List className="flex">
                {certificates.tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-blue-500 text-blue-800 dark:text-blue-500'
                          : 'text-gray-500 hover:text-gray-800',
                        'px-4 py-2 font-medium'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>

              {/* Tab Panels */}
              <Tab.Panels className="mt-6">
                {certificates.tabs.map((tab) => (
                  <Tab.Panel
                    key={tab.name}
                    className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {tab.features.map(({ heading, imageSrc, link }, idx) => (
                      <div key={idx} className="p-4">
                        <Image
                          src={imageSrc}
                          alt={heading}
                          width={300}
                          height={200}
                          className="rounded-md"
                        />
                        <h3 className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
                          {heading}
                        </h3>
                        {link && (
                          <Link
                            href={link}
                            onClick={(e) => {
                              e.preventDefault()
                              window.open(link, '_blank', 'noopener,noreferrer')
                            }}
                            className="mt-1 block text-sm text-blue-800 hover:underline dark:text-blue-500"
                          >
                            View Certificate
                          </Link>
                        )}
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </section>
      </SimpleLayout>
    </div>
  )
}
