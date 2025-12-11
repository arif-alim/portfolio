import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// MyPrinciple screens
import screen1 from '@/images/projects/hydroone/screen1.jpg'
import screen2 from '@/images/projects/hydroone/screen2.jpg'
import screen3 from '@/images/projects/hydroone/screen3.jpg'
import screen4 from '@/images/projects/hydroone/screen4.jpg'
import screen5 from '@/images/projects/hydroone/screen5.jpg'
import screen6 from '@/images/projects/hydroone/screen6.jpg'
import screen7 from '@/images/projects/hydroone/screen7.jpg'
import screen8 from '@/images/projects/hydroone/screen8.jpg'
import screen9 from '@/images/projects/hydroone/screen9.jpg'

// Prototypes
import proto1 from '@/images/projects/hydroone/proto1.png'
import proto2 from '@/images/projects/hydroone/proto2.png'
import proto3 from '@/images/projects/hydroone/proto3.png'
import proto4 from '@/images/projects/hydroone/proto4.png'
import proto5 from '@/images/projects/hydroone/proto5.png'
import proto6 from '@/images/projects/hydroone/proto6.png'
import proto7 from '@/images/projects/hydroone/proto7.png'
import proto8 from '@/images/projects/hydroone/proto8.png'
import proto9 from '@/images/projects/hydroone/proto9.png'
import proto10 from '@/images/projects/hydroone/proto10.png'

/* -------------------------------------------------------------------------- */
/*                           Shared Screenshot Wrapper                        */
/* -------------------------------------------------------------------------- */

const FALLBACK_WIDTH = 1200
const FALLBACK_HEIGHT = 800

function Screenshot({ src, alt = '', className = '', width, height }) {
  const finalWidth =
    typeof width === 'number'
      ? width
      : typeof src?.width === 'number'
      ? src.width
      : FALLBACK_WIDTH

  const finalHeight =
    typeof height === 'number'
      ? height
      : typeof src?.height === 'number'
      ? src.height
      : FALLBACK_HEIGHT

  return (
    <Image
      src={src}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      className={className}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                     Data                                   */
/* -------------------------------------------------------------------------- */

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        title: 'Hydro One – Responsive Site & Components',
        paragraphs: [
          'As a Senior Lead Designer at Hydro One, I played a pivotal role in enhancing the company’s digital presence by creating a comprehensive style guide and reusable design components using Figma.',
          'I developed high-fidelity UI prototypes and integrated accessible, responsive designs into SharePoint using HTML5, CSS3, and JavaScript. My contributions included conducting user research to address pain points, applying design thinking principles, and ensuring compliance with accessibility standards such as contrast trends, aria labels, and alt tags.',
          'Collaborating with cross-functional teams via Wrike, I delivered innovative, user-friendly solutions that improved the overall digital experience.',
        ],
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        section: 'Sustainability',
        title: 'Sustainability Initiatives',
        subheading: 'Our commitment to a greener future',
        link: {
          href: 'https://www.hydroone.com/Sustainability',
          label: 'Learn more about our sustainability initiatives',
        },
        images: [
          { src: screen1, alt: 'Sustainability screen 1' },
          { src: screen3, alt: 'Sustainability screen 2' },
          { src: screen5, alt: 'Sustainability screen 3' },
        ],
      },
      {
        section: 'Energy Hub',
        title: 'Energy Hub',
        subheading: 'Innovative energy solutions',
        link: {
          href: 'https://www.hydroone.com/energy-hub',
          label: 'Explore our energy hub',
        },
        images: [
          { src: screen7, alt: 'Energy Hub screen 1' },
          { src: screen9, alt: 'Energy Hub screen 2' },
        ],
      },
    ],
  },
  {
    name: 'Prototypes',
    features: [
      {
        title: 'Mobile First Responsive Designs',
        links: [
          {
            href: 'https://www.figma.com/design/C63rTgdhnGR38HCokMK1fP/Sustainability-2021?node-id=0-1&t=HbCS9TMWfWol79Al-1',
            label: 'Sustainability',
          },
          {
            href: 'https://www.figma.com/file/qlbk5r4jpix7dRdlxwHXO8/Vacation-Conservation-Tips?node-id=2%3A66&t=u0nfmNQO4Tm3IHaw-1',
            label: 'Vacation Conservation Tips',
          },
          {
            href: 'https://www.figma.com/file/OWiuIOxVw4K1GnHxXzsdNN/Richview-to-Manby?node-id=0%3A1&t=44Yp4t5z6vJpwtBm-1',
            label: 'Richview to Manby',
          },
          {
            href: 'https://www.figma.com/file/YkdlTQIZduAtdhuV4CYrLL/Islington-TS-LP?node-id=0%3A1&t=qXdRMOZ82HqcHx6p-1',
            label: 'Islington TSLP',
          },
          {
            href: 'https://www.figma.com/file/mfkVcrjSymJWH26i5LlgyI/Sault-3-TS?node-id=0%3A1&t=ojhVZqJlEiLL2Re2-1',
            label: 'Sault 3 TS',
          },
          {
            href: 'https://www.figma.com/file/YUqmU8h7otbD7yKSPptRrM/Merivale?node-id=0%3A1&t=tE8P17VMrwyDev1w-1',
            label: 'Merivale',
          },
          {
            href: 'https://www.figma.com/file/aO52JoNiH7zpQyXXdLbcCV/Insulation-Tips?node-id=0%3A1&t=ircfMjDokfKHgn9X-1',
            label: 'Insulation Tips',
          },
          {
            href: 'https://www.figma.com/file/yhxLLF5WmzzBj1FwEtK2Sl/WTTLR?node-id=0%3A1&t=NfVxLuY6MN9NZqbg-1',
            label: 'WTTLR',
          },
          {
            href: 'https://www.figma.com/file/PkrAaCCp3lXDZ9iHuzkqIz/Lighting-Your-Home?node-id=0%3A1&t=fAXHXZtD7RAIdFt4-1',
            label: 'Lighting Your Home',
          },
          {
            href: 'https://www.figma.com/file/YbApoBKV60o7MAaZ3SJOHx/Saint-Clair?node-id=0%3A1&t=Fn3pBujvdF3u2lZw-1',
            label: 'Saint Clair',
          },
        ],
        images: [
          { src: proto1, alt: 'Hydro One prototype screen 1' },
          { src: proto2, alt: 'Hydro One prototype screen 2' },
          { src: proto3, alt: 'Hydro One prototype screen 3' },
          { src: proto4, alt: 'Hydro One prototype screen 4' },
          { src: proto5, alt: 'Hydro One prototype screen 5' },
          { src: proto6, alt: 'Hydro One prototype screen 6' },
          { src: proto7, alt: 'Hydro One prototype screen 7' },
          { src: proto8, alt: 'Hydro One prototype screen 8' },
          { src: proto9, alt: 'Hydro One prototype screen 9' },
          { src: proto10, alt: 'Hydro One prototype screen 10' },
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        title: 'About Hydro One',
        paragraph:
          "Trip Support is a global travel management company that provides a wide range of services to individual and corporate clients. The company specializes in offering personalized travel solutions, including flight bookings, hotel reservations, car rentals, and visa services. Trip Support aims to simplify the travel experience for its clients by providing a one-stop-shop for all their travel needs. With its global network of partners and suppliers, the company is able to offer competitive pricing and access to exclusive travel deals. Trip Support is committed to providing excellent customer service and support, and its team of experienced travel professionals is available 24/7 to assist clients with any questions or issues. The company's mission is to make travel easy, convenient, and affordable for everyone, and it continues to expand its offerings and services to meet the evolving needs of its clients.",
        link: 'https://tripsupport.ca/',
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                  Utilities                                 */
/* -------------------------------------------------------------------------- */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* -------------------------------------------------------------------------- */
/*                             Section Components                             */
/* -------------------------------------------------------------------------- */

function SummarySection({ feature }) {
  return (
    <div className="text-content flex flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <div className="heading-lg col-span-full mb-4">
        <h2 className="text-xl font-semibold leading-tight">{feature.title}</h2>
      </div>
      <div className="paragraph flex max-w-3xl flex-col gap-4 lg:mt-0">
        {feature.paragraphs?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  )
}

function WireframesSection({ sections }) {
  return (
    <div className="text-content flex flex-col gap-y-8">
      {sections?.length ? (
        sections.map((section, index) => (
          <div key={index} className="mb-8 text-zinc-900 dark:text-zinc-50">
            <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
            <div className="flex max-w-3xl flex-col gap-4 lg:mt-0">
              <p>{section.subheading}</p>
            </div>

            {section.link && (
              <Link
                href={section.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
              >
                {section.link.label}
              </Link>
            )}

            {section.images?.length ? (
              <div className="mt-4 grid grid-cols-1 gap-4 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-6">
                {section.images.map((image, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <Screenshot
                      src={image.src}
                      alt={image.alt}
                      width={260}
                      height={260}
                      className="image-container"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No images available for this section.
              </p>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No wireframe sections available.
        </p>
      )}
    </div>
  )
}

function PrototypesSection({ feature }) {
  return (
    <div className="flex flex-col dark:bg-inherit">
      <div className="mt-6 max-w-3xl lg:col-span-5 lg:mt-0">
        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-zinc-50">
          {feature.title}
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {feature.images?.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Screenshot
              src={image.src}
              alt={image.alt}
              width={260}
              height={260}
              className="image-container"
            />
            {feature.links && feature.links[index] && (
              <Link
                href={feature.links[index].href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-blue-800 hover:underline dark:text-blue-400"
              >
                {feature.links[index].label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailsSection({ feature }) {
  return (
    <div className="mt-6 max-w-3xl lg:col-span-5 lg:mt-0">
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-zinc-50">
        {feature.title}
      </h3>
      <div className="flex max-w-3xl flex-col gap-4 text-zinc-900 dark:text-zinc-50 lg:mt-0">
        <p>{feature.paragraph}</p>
      </div>
      {feature.link && (
        <Link
          href={feature.link}
          target="_blank"
          className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
        >
          View Website
        </Link>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Summary')

  return (
    <>
      <Head>
        <title>Hydro One – Responsive Mobile Design</title>
      </Head>

      <SimpleLayout title="Hydro One" intro="Responsive mobile and web design.">
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <Tab.Group
              selectedIndex={tabs.findIndex((t) => t.name === selectedTab)}
              onChange={(index) => setSelectedTab(tabs[index].name)}
            >
              {/* ---------------------------- TAB LIST ---------------------------- */}
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
                                : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-zinc-50',
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

              {/* --------------------------- TAB PANELS --------------------------- */}
              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                    {tab.name === 'Summary' &&
                      tab.features.map((feature, idx) => (
                        <SummarySection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Wireframes' && (
                      <WireframesSection sections={tab.features} />
                    )}

                    {tab.name === 'Prototypes' &&
                      tab.features.map((feature, idx) => (
                        <PrototypesSection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Company details' &&
                      tab.features.map((feature, idx) => (
                        <DetailsSection key={idx} feature={feature} />
                      ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </SimpleLayout>
    </>
  )
}
