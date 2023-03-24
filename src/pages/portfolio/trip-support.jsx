import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/tripsupport/tripsupport1.jpg'
import screen2 from '@/images/projects/tripsupport/tripsupport2.jpg'
import screen3 from '@/images/projects/tripsupport/tripsupport3.jpg'
import screen4 from '@/images/projects/tripsupport/tripsupport4.jpg'
import screen5 from '@/images/projects/tripsupport/tripsupport5.jpg'
import screen6 from '@/images/projects/tripsupport/tripsupport6.jpg'
import screen7 from '@/images/projects/tripsupport/tripsupport7.jpg'
import screen8 from '@/images/projects/tripsupport/tripsupport8.jpg'
import screen9 from '@/images/projects/tripsupport/tripsupport9.jpg'
import screen10 from '@/images/projects/tripsupport/tripsupport10.jpg'
import screen11 from '@/images/projects/tripsupport/tripsupport11.jpg'
import screen12 from '@/images/projects/tripsupport/tripsupport12.jpg'
import screen13 from '@/images/projects/tripsupport/tripsupport13.jpg'
import screen14 from '@/images/projects/tripsupport/tripsupport14.jpg'
import screen15 from '@/images/projects/tripsupport/tripsupport15.jpg'
import screen16 from '@/images/projects/tripsupport/tripsupport16.jpg'
import screen17 from '@/images/projects/tripsupport/tripsupport17.jpg'

import logoTripSupport from '@/images/projects/tripsupport/TripSupport.svg'

import newSite from '@/images/projects/tripsupport/tripsupport-new.jpg'
import oldSite from '@/images/projects/tripsupport/tripsupport-old.jpg'

import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Trip Support, New and Revamped Design',
        para1:
          'As a Lead UI/UX Designer & Frontend Developer, I have extensive experience designing and developing high-quality digital assets for various projects. I utilized Sketch, Figma, and Axure to create high-fidelity prototypes, ensuring that the user interface was intuitive and aligned with project requirements.',
        para2:
          'I also have expertise in converting digital assets to vector files and redesigning footer logos with Illustrator, adhering to branding guidelines and improving the overall visual design of the assets. I used Photoshop to edit photos/images, adjusting resolution and applying lossless compression to optimize file size and improve performance.',
        para3:
          "Additionally, I designed Trip Support's new mobile-responsive website using Svelte (JS framework) and Tailwind CSS, optimizing the user interface for mobile devices and delivering an intuitive user experience. I collaborated closely with back-end engineers, assisting in writing scripts that improved business logic.",
        para4:
          'Ensuring that every page on the website complied with AODA and WCAG standards, I prioritized information and communication standards to ensure that the website was accessible to all users. My skills and expertise have been crucial in developing high-quality digital assets and delivering exceptional user experiences across various projects.',
        imageSrc: logoTripSupport,
        imageAlt: 'Bombardier designs',
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
        imageSrc10: screen10,
        imageAlt10: 'Service Ontario project screen 1',
        imageSrc11: screen11,
        imageAlt11: 'Service Ontario project screen 1',
        imageSrc12: screen12,
        imageAlt12: 'Service Ontario project screen 1',
        imageSrc13: screen13,
        imageAlt13: 'Service Ontario project screen 1',
        imageSrc14: screen14,
        imageAlt14: 'Service Ontario project screen 1',
        imageSrc18: screen15,
        imageAlt18: 'Service Ontario project screen 1',
        imageSrc19: screen16,
        imageAlt19: 'Service Ontario project screen 1',
        imageSrc20: screen17,
        imageAlt20: 'Service Ontario project screen 1',
      },
    ],
  },
  {
    name: 'Website',
    features: [
      {
        heading: 'Trip Support Responsive Site',
        subheading: 'Mobile responsive web design',

        imgSrc21: newSite,
        imgSrc22: oldSite,
      },
    ],
  },
  {
    name: 'Notes',
    features: [
      {
        name: 'Additional notes',
        para1: 'Coming soon...',
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
      <div className="bg-white">
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <div className="max-w-3xl">
              <h1
                id="features-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Trip Support
              </h1>
              <h2 className="mt-1 text-md font-medium tracking-tight text-gray-500 ">
                Responsive Mobile Design
              </h2>
            </div>

            <Tab.Group
              as="div"
              className="scroll-x- mt-12"
              value={selectedTab}
              onSelect={setSelectedTab}
            >
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <Tab.List className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-violet-700 text-base font-semibold text-violet-900 outline-none'
                              : 'border-transparent text-base font-normal text-gray-900 hover:border-gray-300 hover:text-gray-700 ',
                            'whitespace-nowrap border-b-2 px-2 outline-none visited:border-none '
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
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
                            className="flex flex-col  lg:gap-x-8"
                          >
                            <div className="lg: mb-0 max-w-md lg:mb-8">
                              <Image
                                src={feature.imageSrc}
                                alt={feature.imageAlt}
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                            <div className="mt-6 max-w-prose lg:mt-0">
                              <h3 className="text-xl font-semibold text-gray-900">
                                {feature.name}
                              </h3>
                              <p className="mt-2 text-tiny text-gray-700">
                                {feature.para1}
                              </p>
                              <p className="mt-4 text-tiny text-gray-700">
                                {feature.para2}
                              </p>
                              <p className="mt-4 text-tiny text-gray-700">
                                {feature.para3}
                              </p>
                              <p className="mt-4 text-tiny text-gray-700">
                                {feature.para4}
                              </p>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Wireframes'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.name}
                            className="flex flex-col bg-slate-100"
                          >
                            <div className="col-span-full pt-4 lg:grid lg:grid-cols-12 lg:gap-x-2 lg:px-6 ">
                              <div className="p-2 lg:col-span-4">
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc1}
                                    alt={feature.imageAlt1}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc4}
                                    alt={feature.imageAlt4}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc2}
                                    alt={feature.imageAlt2}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc5}
                                    alt={feature.imageAlt5}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                              </div>

                              <div className="p-2 lg:col-span-4">
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc3}
                                    alt={feature.imageAlt3}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc6}
                                    alt={feature.imageAlt6}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc7}
                                    alt={feature.imageAlt7}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc8}
                                    alt={feature.imageAlt8}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                              </div>

                              <div className="p-2 lg:col-span-4">
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc10}
                                    alt={feature.imageAlt10}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc12}
                                    alt={feature.imageAlt12}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc9}
                                    alt={feature.imageAlt9}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                                <div className="mb-4">
                                  <Image
                                    src={feature.imageSrc11}
                                    alt={feature.imageAlt11}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Website'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div
                            key={feature.heading}
                            className="flex flex-col lg:gap-x-8"
                          >
                            <div className="my-6 lg:mt-0 lg:max-w-prose">
                              <h3 className="text-lg font-medium text-gray-900">
                                {feature.heading}
                              </h3>
                              <p className="my-2 text-sm text-gray-500">
                                {feature.subheading}
                              </p>
                            </div>
                            <div className="lg:flex lg:flex-row lg:gap-12">
                              <div className=" mb-4 lg:mb-0 lg:max-w-full">
                                New website link
                                <Link
                                  href="https://tripsupport.ca/"
                                  target="_blank"
                                  className="px-1 text-tiny text-blue-800"
                                >
                                  CA website
                                </Link>
                                <div className="my-2 max-w-lg">
                                  <Image
                                    src={feature.imgSrc21}
                                    alt={feature.imgAlt16}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                              </div>

                              <div className="text-tiny">
                                Old website link
                                <Link
                                  href="https://tripsupport.com/"
                                  target="_blank"
                                  className="px-1 text-tiny text-blue-800"
                                >
                                  US Website
                                </Link>
                                <div className="my-2 max-w-lg">
                                  <Image
                                    src={feature.imgSrc22}
                                    alt={feature.imgAlt16}
                                    className="rounded-lg object-cover object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : tab.name === 'Notes'
                      ? /* Render content for Wireframes tab */
                        tab.features.map((feature) => (
                          <div key={feature.name}>
                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                              <h3 className="text-lg font-medium text-gray-900">
                                {feature.name}
                              </h3>
                              <p className="mt-2 text-sm text-gray-500">
                                {feature.para1}
                              </p>
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
