import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

// MyPrinciple
//
import screen1 from '@/images/projects/bombardier/myPrinciple/aircraft1.jpg'
import screen2 from '@/images/projects/bombardier/myPrinciple/aircraft2.jpg'
import screen3 from '@/images/projects/bombardier/myPrinciple/aircraft3.jpg'
import screen4 from '@/images/projects/bombardier/myPrinciple/aircraftAlt1.jpg'
import screen5 from '@/images/projects/bombardier/myPrinciple/aircraftAlt2.jpg'
import screen6 from '@/images/projects/bombardier/myPrinciple/aircraftAlt3.jpg'
import screen7 from '@/images/projects/bombardier/myPrinciple/booking1.jpg'
import screen8 from '@/images/projects/bombardier/myPrinciple/bookingAlt1.jpg'
import screen9 from '@/images/projects/bombardier/myPrinciple/experience1.jpg'
import screen10 from '@/images/projects/bombardier/myPrinciple/experience2.jpg'
import screen11 from '@/images/projects/bombardier/myPrinciple/experienceAlt1.jpg'
import screen12 from '@/images/projects/bombardier/myPrinciple/experienceAlt2.jpg'
import screen13 from '@/images/projects/bombardier/myPrinciple/wishlist1.jpg'
import screen14 from '@/images/projects/bombardier/myPrinciple/wishlistAlt1.jpg'
// MySmartRouter
//
import screen18 from '@/images/projects/bombardier/mySmartRouter/dashboard1.jpg'
import screen19 from '@/images/projects/bombardier/mySmartRouter/dashboard2.jpg'
import screen20 from '@/images/projects/bombardier/mySmartRouter/dashboard3.jpg'
import screen21 from '@/images/projects/bombardier/mySmartRouter/dashboard4.jpg'
import screen22 from '@/images/projects/bombardier/mySmartRouter/device1.jpg'
import screen23 from '@/images/projects/bombardier/mySmartRouter/device2.jpg'
import screen24 from '@/images/projects/bombardier/mySmartRouter/networks1.jpg'
import screen25 from '@/images/projects/bombardier/mySmartRouter/networks2.jpg'
import screen26 from '@/images/projects/bombardier/mySmartRouter/networks3.jpg'
import screen27 from '@/images/projects/bombardier/mySmartRouter/networks4.jpg'
import screen28 from '@/images/projects/bombardier/mySmartRouter/networks5.jpg'
import screen29 from '@/images/projects/bombardier/mySmartRouter/support1.jpg'
import screen30 from '@/images/projects/bombardier/mySmartRouter/support2.jpg'

import logoBombardier from '@/images/projects/bombardier/bombardier-logo.svg'

// Components
import cardComponent from '@/images/projects/bombardier/components/Card.png'
import selectAircraftComponent from '@/images/projects/bombardier/components/SelectAircraft.png'
import flightHIstoryComponent from '@/images/projects/bombardier/components/FlightHistory.png'

/* eslint-disable @next/next/no-img-element */

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Bombardier Apps',
        para1:
          "As the Lead UX Designer at Xennial Innovations from March 2019 to April 2021, I was responsible for leading the design efforts of multiple high-profile projects for Bombardier. These projects included designing intuitive user interfaces for Flight Link by Airbus and Bombardier's MySmartRouter and MyPrinciple mobile applications. I ensured that the designs met the needs of various stakeholders and users while adhering to AODA and WCAG 2.0 accessibility standards.",
        para2:
          "I also played a key role in the development of Bombardier's corporate design system by introducing accessible styles and typography. Using Figma, I built the design systems for Bombardier's MySmartRouter and MyPrinciple mobile applications. This involved creating lego components composed of base components and using variants and component properties to simplify the use of components.",
        para3:
          "To enhance the user experience and make it more interactive, I designed JSON Lottie graphic animations using Adobe After Effects. Additionally, I expanded enterprise-level design systems using Figma's auto layout, component variants, and component properties, allowing for high-fidelity rapid prototyping. I created comprehensive design guidelines to ensure consistency across various platforms and applications.",
        imageSrc: logoBombardier,
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

        imageSrc18: screen18,
        imageAlt18: 'Service Ontario project screen 1',
        imageSrc19: screen19,
        imageAlt19: 'Service Ontario project screen 1',
        imageSrc20: screen20,
        imageAlt20: 'Service Ontario project screen 1',
        imageSrc21: screen21,
        imageAlt21: 'Service Ontario project screen 1',
        imageSrc22: screen22,
        imageAlt22: 'Service Ontario project screen 1',
        imageSrc23: screen23,
        imageAlt23: 'Service Ontario project screen 1',
        imageSrc24: screen24,
        imageAlt24: 'Service Ontario project screen 1',
        imageSrc25: screen25,
        imageAlt25: 'Service Ontario project screen 1',
        imageSrc26: screen26,
        imageAlt26: 'Service Ontario project screen 1',
        imageSrc27: screen27,
        imageAlt27: 'Service Ontario project screen 1',
        imageSrc28: screen28,
        imageAlt28: 'Service Ontario project screen 1',
        imageSrc29: screen29,
        imageAlt29: 'Service Ontario project screen 1',
        imageSrc30: screen30,
        imageAlt30: 'Service Ontario project screen 1',
      },
    ],
  },
  {
    name: 'Lego Components',
    features: [
      {
        type: 'Components',
        component:
          'Combining base components to create a higher order component, which I call "Lego Components"',
        imgSrc15: cardComponent,
        imgAlt15: 'Card component',
        imgSrc16: selectAircraftComponent,
        imgAlt16: 'Select aircraft comonent',
        imgSrc17: flightHIstoryComponent,
        imgAlt17: 'Select aircraft comonent',
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About Bombardier',
        para1:
          "Bombardier is a Canadian multinational company that specializes in the design, manufacturing, and support of innovative transportation solutions. The company operates in several industries, including aerospace, transportation, and recreation. Bombardier's aerospace division is a global leader in the production of business jets, regional aircraft, and commercial aircraft, and it has a strong presence in both the military and civil aviation markets. In the transportation sector, Bombardier is a leading manufacturer of trains and rail solutions, offering a wide range of products and services to customers worldwide. The company's recreational products division produces a diverse range of vehicles, including snowmobiles, watercraft, and all-terrain vehicles. With over 60,000 employees across its operations, Bombardier is committed to creating sustainable, innovative, and value-added products and services that meet the needs of its customers while promoting environmental responsibility and social well-being. Through its cutting-edge technology, engineering expertise, and customer-focused approach, Bombardier has earned a reputation as a trusted partner and leader in the transportation industry.",
        link: 'https://bombardier.com/en',
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
      title={'Bombardier'}
      intro={'mySmartRouter, myPrinciple, myOnlineProductOrdering (OPO)'}
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
                              : 'dark:hover-gray-100 hover:text-gray-700dark:text-zinc-50 border-transparent font-medium text-zinc-900 hover:border-zinc-50 dark:text-gray-300 ',
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
                  className="space-y-16 pt-4 text-sm lg:pt-8"
                >
                  {tab.name === 'Summary'
                    ? /* Render content for Summary tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col lg:gap-x-8"
                        >
                          <div className="col-span-full mb-4 text-lg font-semibold dark:text-zinc-50 ">
                            <h2>Summary</h2>
                          </div>
                          <div className="flex max-w-prose flex-col gap-4 text-zinc-900 dark:font-thin dark:text-zinc-50 lg:mt-0">
                            <p>{feature.para1}</p>
                            <p>{feature.para2}</p>
                            <p>{feature.para3}</p>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Wireframes'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col gap-y-2 bg-slate-100 dark:bg-inherit"
                        >
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6">
                            <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200">
                              <h2>mySmartRouter</h2>
                            </div>
                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc18}
                                alt={feature.imageAlt18}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc24}
                                alt={feature.imageAlt24}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc19}
                                alt={feature.imageAlt19}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc25}
                                alt={feature.imageAlt25}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc20}
                                alt={feature.imageAlt20}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc26}
                                alt={feature.imageAlt26}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc21}
                                alt={feature.imageAlt21}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc27}
                                alt={feature.imageAlt27}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc22}
                                alt={feature.imageAlt22}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc28}
                                alt={feature.imageAlt28}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc23}
                                alt={feature.imageAlt23}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc29}
                                alt={feature.imageAlt29}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="col-span-full p-2 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6">
                            <div className="col-span-full mb-4 text-lg font-semibold underline dark:text-gray-200">
                              <h2>myPrinciple</h2>
                            </div>
                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc1}
                                alt={feature.imageAlt1}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc4}
                                alt={feature.imageAlt4}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc2}
                                alt={feature.imageAlt2}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc5}
                                alt={feature.imageAlt5}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc3}
                                alt={feature.imageAlt3}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc6}
                                alt={feature.imageAlt6}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc7}
                                alt={feature.imageAlt7}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc8}
                                alt={feature.imageAlt8}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc10}
                                alt={feature.imageAlt10}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc12}
                                alt={feature.imageAlt12}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                            <div className="flex flex-col gap-4 lg:col-span-2">
                              <Image
                                src={feature.imageSrc9}
                                alt={feature.imageAlt9}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                              <Image
                                src={feature.imageSrc11}
                                alt={feature.imageAlt11}
                                width={200} // Added static width
                                height={200} // Added static height
                                className="rounded-lg object-cover object-center"
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Lego Components'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.type}
                          className="flex flex-col text-tiny dark:text-zinc-50 lg:gap-x-8"
                        >
                          <div className="my-6 lg:mt-0 ">
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                              {feature.type}
                            </h3>
                            <p className="mt-2 ">{feature.component}</p>
                          </div>
                          <div className=" mb-16 lg:max-w-full">
                            <div className="flex flex-col gap-1 pb-4">
                              <div className="font-semibold">
                                Select aircraft component
                              </div>
                              <Link
                                href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=486%3A8043&t=ZNtgizfNIxMUnfdq-1"
                                target="_blank"
                                className=" text-sm text-blue-800 dark:text-blue-500"
                              >
                                <div>View Figma</div>
                              </Link>
                            </div>
                            <Image
                              src={feature.imgSrc16}
                              alt={feature.imgAlt16}
                              width={500}
                              height={500}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>
                          <div className=" mb-16 lg:max-w-xl">
                            <div className="flex flex-col gap-1 pb-4">
                              <div className="font-semibold">
                                Card Component
                              </div>
                              <Link
                                href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=91%3A709&t=ZNtgizfNIxMUnfdq-1"
                                target="_blank"
                                className=" text-sm text-blue-800 dark:text-blue-500"
                              >
                                <div>View Figma</div>
                              </Link>
                            </div>
                            <Image
                              src={feature.imgSrc15}
                              alt={feature.imgAlt15}
                              width={500}
                              height={500}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>
                          <div className=" mb-16 lg:max-w-sm">
                            <div className="flex flex-col gap-1 pb-4">
                              <div className="font-semibold">Trip History</div>
                              <Link
                                href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=145%3A1448&t=ZNtgizfNIxMUnfdq-1"
                                target="_blank"
                                className=" text-sm text-blue-800 dark:text-blue-500"
                              >
                                <div>View Figma</div>
                              </Link>
                            </div>
                            <Image
                              src={feature.imgSrc17}
                              alt={feature.imgAlt17}
                              width={500}
                              height={500}
                              layout="responsive"
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
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                              {feature.name}
                            </h3>
                            <p className="mt-2  font-normal text-zinc-900 dark:text-zinc-50">
                              {feature.para1}
                            </p>
                            <Link
                              href={feature.link}
                              target="_blank"
                              className="zinc-5ring-inset mt-8 inline-block rounded-full bg-white py-2 px-3.5 text-xs font-semibold text-zinc-900 shadow-sm ring-gray-300 hover:bg-gray-50"
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
