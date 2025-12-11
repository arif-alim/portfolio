/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import { SimpleLayout } from '@/components/SimpleLayout'

// Screens
import screen1 from '@/images/projects/chicasa/chicasa-1.jpg'
import screen2 from '@/images/projects/chicasa/chicasa-2.jpg'
import screen3 from '@/images/projects/chicasa/chicasa-3.jpg'
import screen4 from '@/images/projects/chicasa/chicasa-4.jpg'
import screen5 from '@/images/projects/chicasa/chicasa-5.jpg'
import screen6 from '@/images/projects/chicasa/chicasa-6.jpg'
import screen7 from '@/images/projects/chicasa/chicasa-7.jpg'
import screen8 from '@/images/projects/chicasa/chicasa-8.jpg'

// Brand
import logoChicasaDesign from '@/images/projects/chicasa/chicasa-design-logo.svg'

/* -------------------------------------------------------------------------- */
/*                              Screenshot Wrapper                             */
/* -------------------------------------------------------------------------- */

const FALLBACK_WIDTH = 1200
const FALLBACK_HEIGHT = 800

function Screenshot({ src, alt, className = '', width, height }) {
  const finalWidth =
    typeof width === 'number'
      ? width
      : src && typeof src === 'object' && typeof src.width === 'number'
      ? src.width
      : FALLBACK_WIDTH

  const finalHeight =
    typeof height === 'number'
      ? height
      : src && typeof src === 'object' && typeof src.height === 'number'
      ? src.height
      : FALLBACK_HEIGHT

  return (
    <Image
      src={src}
      alt={alt || ''}
      width={finalWidth}
      height={finalHeight}
      className={`rounded-lg object-cover object-center ${className}`}
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
        title: 'Chicasa Web Design',
        logo: {
          src: logoChicasaDesign,
          alt: 'Chicasa Design logo',
        },
        paragraphs: [
          'Perfec-Tone is a skincare company that offers a range of products designed to address various skin concerns. To help the company reach a wider audience and provide a seamless shopping experience for its customers, we designed a mobile responsive e-commerce website that emphasized both user interface (UI) and user experience (UX) design principles.',
          "The website's UI was carefully crafted to highlight the brand's natural and organic ingredients, while also providing clear and concise product descriptions and easy-to-use navigation menus. We used high-quality product photography and incorporated soft, pastel colors to create a soothing and inviting aesthetic. The website's UX was designed to be intuitive and easy to use, with a simple checkout process and clear calls-to-action throughout the website. Additionally, we implemented responsive design principles to ensure that the website looked great and functioned well on both desktop and mobile devices, providing a seamless shopping experience for customers no matter where they accessed the website from. The result was an e-commerce website that not only looked great but also provided a seamless shopping experience for Perfec-Tone's customers.",
        ],
      },
    ],
  },
  {
    name: 'Wireframes',
    features: [
      {
        columns: [
          [screen1, screen4, screen7],
          [screen2, screen5, screen8],
          [screen3, screen6],
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About Chicasa Design',
        paragraphs: [
          "Chicasa Design is a professional renovation contracting company based in Toronto and the GTA that specializes in creating bespoke homes and investment opportunities. With over 20 years of experience in the industry, the company was founded on the belief that homes should be more than just a place to live, they should be a work of living art. The company's goal is to unlock the dreams of their clients and to provide a world-class, bespoke home building experience.",
          "Chicasa Design has built a world-class team of designers, craftsmen, and suppliers to ensure that every project is done to perfection. They take into account their clients' requirements, budget, and timeline to ensure complete satisfaction with the finished product. From the initial design to the final touches, Chicasa Design is efficient, diligent, and always focused on their clients' satisfaction. The company offers a proven process that minimizes mistakes and costs while delivering the highest quality results. Their staff is composed of certified professional designers and renovators who put the same focus and detail into each project they work on. The company offers a warranty on all labor performed on their clients' properties, providing peace of mind that the work is done to last for generations.",
        ],
        link: 'http://www.chicasadesign.com/',
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
/*                             Presentational Blocks                           */
/* -------------------------------------------------------------------------- */

const SummarySection = ({ feature }) => (
  <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
    {/* Logo + Title */}
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
      {feature.logo && (
        <div className="shrink-0">
          <Screenshot
            src={feature.logo.src}
            alt={feature.logo.alt}
            width={64}
            height={64}
            className="h-10 w-auto"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold leading-tight">{feature.title}</h3>
    </div>

    {/* Body copy */}
    <div className="flex flex-col gap-4">
      {feature.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  </div>
)

const WireframesSection = ({ feature }) => (
  <div className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-6">
    {feature.columns?.map((col, colIdx) => (
      <div key={colIdx} className="flex flex-col gap-8 lg:col-span-4">
        {col.map((img, i) => (
          <Screenshot key={i} src={img} alt={`Chicasa screen ${colIdx}-${i}`} />
        ))}
      </div>
    ))}
  </div>
)

const CompanyDetailsSection = ({ feature }) => (
  <div className="mt-6 max-w-3xl lg:col-span-5 lg:mt-0">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
      {feature.name}
    </h3>
    {feature.paragraphs?.map((p, i) => (
      <p
        key={i}
        className="mt-3 text-tiny font-normal text-gray-600 dark:text-gray-400"
      >
        {p}
      </p>
    ))}
    {feature.link && (
      <Link
        href={feature.link}
        target="_blank"
        className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        View Website
      </Link>
    )}
  </div>
)

/* -------------------------------------------------------------------------- */
/*                                 Page Component                             */
/* -------------------------------------------------------------------------- */

export default function ChicasaDesign() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')

  const selectedIndex = tabs.findIndex((t) => t.name === selectedTab)
  const safeIndex = selectedIndex === -1 ? 0 : selectedIndex

  return (
    <>
      <Head>
        <title>Chicasa Design - Project</title>
        <meta
          name="description"
          content="Dynamic web and e-commerce design for Chicasa Design / Perfec-Tone."
        />
      </Head>

      <SimpleLayout title="Chicasa Design" intro="Dynamic Web Design">
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
            <Tab.Group
              as="div"
              className="mt-10"
              selectedIndex={safeIndex}
              onChange={(i) => setSelectedTab(tabs[i].name)}
            >
              {/* -------------------------- TAB LIST -------------------------- */}
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
                                : 'border-transparent font-medium text-gray-900 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300',
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

              {/* ------------------------- TAB PANELS ------------------------- */}
              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name} className="space-y-8 pt-4 lg:pt-8">
                    {tab.name === 'Summary' &&
                      tab.features.map((feature, idx) => (
                        <SummarySection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Wireframes' &&
                      tab.features.map((feature, idx) => (
                        <WireframesSection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Company details' &&
                      tab.features.map((feature, idx) => (
                        <CompanyDetailsSection key={idx} feature={feature} />
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
