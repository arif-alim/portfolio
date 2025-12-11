import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// MyPrinciple
import screenMP from '@/images/projects/bombardier/myPrinciple/MyPrinciple.png'
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
import screenMSR from '@/images/projects/bombardier/mySmartRouter/MySmartRouter.png'
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

import cardComponent from '@/images/projects/bombardier/components/Card.png'
import selectAircraftComponent from '@/images/projects/bombardier/components/SelectAircraft.png'
import flightHIstoryComponent from '@/images/projects/bombardier/components/FlightHistory.png'

/**
 * Normalised wireframe data
 */
const mySmartRouterColumns = [
  [{ src: screenMSR, alt: 'mySmartRouter dashboard 1' }],
  // [
  //   { src: screen19, alt: 'mySmartRouter dashboard 2' },
  //   { src: screen25, alt: 'mySmartRouter networks 2' },
  // ],
  // [
  //   { src: screen20, alt: 'mySmartRouter dashboard 3' },
  //   { src: screen26, alt: 'mySmartRouter networks 3' },
  // ],
  // [
  //   { src: screen21, alt: 'mySmartRouter dashboard 4' },
  //   { src: screen27, alt: 'mySmartRouter networks 4' },
  // ],
  // [
  //   { src: screen22, alt: 'mySmartRouter device 1' },
  //   { src: screen28, alt: 'mySmartRouter networks 5' },
  // ],
  // [
  //   { src: screen23, alt: 'mySmartRouter device 2' },
  //   { src: screen29, alt: 'mySmartRouter support 1' },
  // ],
  // [{ src: screen30, alt: 'mySmartRouter support 2' }],
]

const myPrincipleColumns = [
  [{ src: screenMP, alt: 'myPrinciple aircraft 1' }],
  // [
  //   { src: screen2, alt: 'myPrinciple aircraft 2' },
  //   { src: screen5, alt: 'myPrinciple aircraft alt 2' },
  // ],
  // [
  //   { src: screen3, alt: 'myPrinciple aircraft 3' },
  //   { src: screen6, alt: 'myPrinciple aircraft alt 3' },
  // ],
  // [
  //   { src: screen7, alt: 'myPrinciple booking 1' },
  //   { src: screen8, alt: 'myPrinciple booking alt 1' },
  // ],
  // [
  //   { src: screen9, alt: 'myPrinciple experience 1' },
  //   { src: screen11, alt: 'myPrinciple experience alt 1' },
  // ],
  // [
  //   { src: screen10, alt: 'myPrinciple experience 2' },
  //   { src: screen12, alt: 'myPrinciple experience alt 2' },
  // ],
  // [
  //   { src: screen13, alt: 'myPrinciple wishlist 1' },
  //   { src: screen14, alt: 'myPrinciple wishlist alt 1' },
  // ],
]

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
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [{}],
  },
  {
    name: 'Lego Components',
    features: [
      {
        type: 'Components',
        component:
          'Combining base components to create a higher order component, which I call "Lego Components".',
        imgCard: cardComponent,
        imgSelectAircraft: selectAircraftComponent,
        imgFlightHistory: flightHIstoryComponent,
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

/**
 * Reusable Image wrapper that ALWAYS provides width & height
 */
function Screenshot({ src, alt, className = '' }) {
  const width = (src && src.width) || 1200
  const height = (src && src.height) || 800

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default function Project() {
  return (
    <SimpleLayout
      title="Bombardier"
      intro="mySmartRouter, myPrinciple, myOnlineProductOrdering (OPO)"
    >
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
          <Tab.Group as="div" className="mt-10" defaultIndex={1}>
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
                              : 'border-transparent font-medium text-zinc-900 hover:border-zinc-50 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100',
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
                  {/* SUMMARY */}
                  {tab.name === 'Summary' &&
                    tab.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="flex flex-col lg:gap-x-8"
                      >
                        <div className="col-span-full mb-4 text-lg font-semibold">
                          <h2>Summary</h2>
                        </div>
                        <div className="flex max-w-3xl flex-col gap-4 lg:mt-0">
                          <p>{feature.para1}</p>
                          <p>{feature.para2}</p>
                          <p>{feature.para3}</p>
                        </div>
                      </div>
                    ))}

                  {/* WIREFRAMES */}
                  {tab.name === 'Wireframes' &&
                    tab.features.map((_, idx) => (
                      <div key={idx} className="flex flex-col gap-y-8">
                        {/* mySmartRouter */}
                        <div className="col-span-full bg-zinc-100 p-2 dark:bg-zinc-800 lg:p-6">
                          <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200">
                            <h2>mySmartRouter</h2>
                          </div>

                          {mySmartRouterColumns.flat().map((shot, idx) => (
                            <Screenshot
                              key={idx}
                              src={shot.src}
                              alt={shot.alt}
                              className="mb-6 h-full w-full rounded-lg object-cover object-center"
                            />
                          ))}
                        </div>

                        {/* myPrinciple */}
                        <div className="col-span-full bg-zinc-100 p-2 dark:bg-zinc-800 lg:p-6">
                          <div className="col-span-full mb-4 text-lg font-semibold dark:text-gray-200">
                            <h2>myPrinciple</h2>
                          </div>

                          {myPrincipleColumns.flat().map((shot, idx) => (
                            <Screenshot
                              key={idx}
                              src={shot.src}
                              alt={shot.alt}
                              className="mb-6 h-full w-full rounded-lg object-cover object-center"
                            />
                          ))}
                        </div>
                      </div>
                    ))}

                  {/* LEGO COMPONENTS */}
                  {tab.name === 'Lego Components' &&
                    tab.features.map((feature) => (
                      <div
                        key={feature.type}
                        className="flex flex-col dark:text-zinc-200 lg:gap-x-8"
                      >
                        <div className="my-6 lg:mt-0">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
                            {feature.type}
                          </h3>
                          <p className="mt-2">{feature.component}</p>
                        </div>

                        {/* Select aircraft */}
                        <div className="mb-16 lg:max-w-full">
                          <div className="flex flex-col gap-1 pb-4">
                            <div className="font-semibold">
                              Select aircraft component
                            </div>
                            <Link
                              href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=486%3A8043&t=ZNtgizfNIxMUnfdq-1"
                              target="_blank"
                              className="text-blue-800 dark:text-blue-500"
                            >
                              <div>View Figma</div>
                            </Link>
                          </div>
                          <Screenshot
                            src={feature.imgSelectAircraft}
                            alt="Select aircraft component"
                            className="rounded-lg object-cover object-center"
                          />
                        </div>

                        {/* Card */}
                        <div className="mb-16 lg:max-w-xl">
                          <div className="flex flex-col gap-1 pb-4">
                            <div className="font-semibold">Card Component</div>
                            <Link
                              href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=91%3A709&t=ZNtgizfNIxMUnfdq-1"
                              target="_blank"
                              className="text-blue-800 dark:text-blue-500"
                            >
                              <div>View Figma</div>
                            </Link>
                          </div>
                          <Screenshot
                            src={feature.imgCard}
                            alt="Card component"
                            className="rounded-lg object-cover object-center"
                          />
                        </div>

                        {/* Trip history */}
                        <div className="mb-16 lg:max-w-sm">
                          <div className="flex flex-col gap-1 pb-4">
                            <div className="font-semibold">Trip History</div>
                            <Link
                              href="https://www.figma.com/file/sd0WWtKuZiTgQmjZ6MSn5n/MyPrinciple-Design-System?node-id=145%3A1448&t=ZNtgizfNIxMUnfdq-1"
                              target="_blank"
                              className="text-blue-800 dark:text-blue-500"
                            >
                              <div>View Figma</div>
                            </Link>
                          </div>
                          <Screenshot
                            src={feature.imgFlightHistory}
                            alt="Trip history component"
                            className="rounded-lg object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}

                  {/* COMPANY DETAILS */}
                  {tab.name === 'Company details' &&
                    tab.features.map((feature) => (
                      <div key={feature.name}>
                        <div className="mt-6 max-w-3xl lg:col-span-5 lg:mt-0">
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                            {feature.name}
                          </h3>
                          <div className="mt-4 flex flex-col gap-4 lg:gap-x-8">
                            <p>{feature.para1}</p>
                          </div>
                          <Link
                            href={feature.link}
                            target="_blank"
                            className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <div>View Website</div>
                          </Link>
                        </div>
                      </div>
                    ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
