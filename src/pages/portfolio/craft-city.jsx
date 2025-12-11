import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// Craft City Logo
import ccLogo1 from '@/images/projects/craftcity/ccLogo.jpg'
import ccLogo2 from '@/images/projects/craftcity/ccLogo1.jpg'
import ccLogo3 from '@/images/projects/craftcity/ccLogo2.jpg'
import ccLogo4 from '@/images/projects/craftcity/ccLogo3.jpg'
// Craft City Sticker
import ccSticker1 from '@/images/projects/craftcity/ccSticker1.png'
import ccSticker2 from '@/images/projects/craftcity/ccSticker2.png'
import ccSticker3 from '@/images/projects/craftcity/ccSticker3.png'
// Craft City Can Design
import ccCan1 from '@/images/projects/craftcity/ccCanDesign.jpg'
import ccCan2 from '@/images/projects/craftcity/ccCanDesign2.jpg'
import ccCan3 from '@/images/projects/craftcity/ccCanDesign3.jpg'
import ccCan4 from '@/images/projects/craftcity/ccCanDesign4.jpg'
import ccCan5 from '@/images/projects/craftcity/ccCanDesign5.jpg'
// Craft City Promo Assets
import ccPromo1 from '@/images/projects/craftcity/ccPromo1.jpg'
import ccPromo2 from '@/images/projects/craftcity/ccPromo2.jpg'
import ccPromo3 from '@/images/projects/craftcity/ccPromo3.jpg'
import ccPromo4 from '@/images/projects/craftcity/ccPromo4.jpg'
import ccPromo5 from '@/images/projects/craftcity/ccPromo4.jpg'

import logoCraftCity from '@/images/projects/craftcity/craftcity-logo.svg'

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
        title: '',
        description:
          'Craft City Hard Seltzer is a new hard seltzer brand based in Toronto, Canada. They are a small batch, handcrafted hard seltzer brand that is made with real fruit juice and natural flavours. They are currently available in Ontario, Canada.',
        logo: {
          src: logoCraftCity,
          alt: 'Craft City logo',
        },
      },
    ],
  },
  {
    name: 'Logo',
    features: [
      {
        heading: 'Logo Design',
        description: 'Designed their custom logo and their e-commerce website.',
        images: [
          { src: ccLogo1, alt: 'Craft City logo concept 1' },
          { src: ccLogo2, alt: 'Craft City logo concept 2' },
          { src: ccLogo3, alt: 'Craft City logo concept 3' },
          { src: ccLogo4, alt: 'Craft City logo concept 4' },
        ],
      },
    ],
  },
  {
    name: 'Sticker',
    features: [
      {
        heading: 'Sticker Design',
        description: 'Exploration of sticker and label variations.',
        images: [
          { src: ccSticker1, alt: 'Craft City sticker 1' },
          { src: ccSticker2, alt: 'Craft City sticker 2' },
          { src: ccSticker3, alt: 'Craft City sticker 3' },
        ],
      },
    ],
  },
  {
    name: 'Can Design',
    features: [
      {
        heading: 'Can Design',
        description: 'Designed the hard seltzer cans using Illustrator.',
        images: [
          { src: ccCan1, alt: 'Craft City can design 1' },
          { src: ccCan2, alt: 'Craft City can design 2' },
          { src: ccCan3, alt: 'Craft City can design 3' },
          { src: ccCan4, alt: 'Craft City can design 4' },
          { src: ccCan5, alt: 'Craft City can design 5' },
        ],
      },
    ],
  },
  {
    name: 'Marketing',
    features: [
      {
        heading: 'Marketing & Promotional Assets',
        description:
          'Designed and printed custom promotional assets such as banners, posters, and point-of-sale materials.',
        images: [
          { src: ccPromo1, alt: 'Craft City promotional asset 1' },
          { src: ccPromo2, alt: 'Craft City promotional asset 2' },
          { src: ccPromo3, alt: 'Craft City promotional asset 3' },
          { src: ccPromo4, alt: 'Craft City promotional asset 4' },
          { src: ccPromo5, alt: 'Craft City promotional asset 5' },
        ],
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
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        {feature.logo && (
          <div className="shrink-0">
            <Screenshot
              src={feature.logo.src}
              alt={feature.logo.alt}
              width={64}
              height={64}
              className="h-10 w-auto dark:invert"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
          {feature.title}
        </h3>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-200">
        {feature.description}
      </p>
    </div>
  )
}

function ImageGridSection({ feature, columnsLg = 4 }) {
  const lgCols =
    columnsLg === 3
      ? 'lg:grid-cols-3'
      : columnsLg === 5
      ? 'lg:grid-cols-5'
      : 'lg:grid-cols-4'

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {feature.heading}
        </h3>
        {feature.description && (
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {feature.description}
          </p>
        )}
      </div>

      <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6">
        <div
          className={classNames(
            'grid grid-cols-1 gap-4 sm:grid-cols-2',
            lgCols
          )}
        >
          {feature.images.map((img, idx) => (
            <Screenshot
              key={idx}
              src={img.src}
              alt={img.alt}
              width={260}
              height={260}
              className="rounded-lg object-cover object-center"
            />
          ))}
        </div>
      </div>
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
        <title>Craft City - Project</title>
        <meta name="description" content="Craft City Hard Seltzer" />
      </Head>

      <SimpleLayout
        title="Craft City"
        intro="Designed their custom logo and their e-commerce website."
      >
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

              {/* --------------------------- TAB PANELS --------------------------- */}
              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                    {tab.name === 'Summary' &&
                      tab.features.map((feature, idx) => (
                        <SummarySection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Logo' &&
                      tab.features.map((feature, idx) => (
                        <ImageGridSection
                          key={idx}
                          feature={feature}
                          columnsLg={4}
                        />
                      ))}

                    {tab.name === 'Sticker' &&
                      tab.features.map((feature, idx) => (
                        <ImageGridSection
                          key={idx}
                          feature={feature}
                          columnsLg={3}
                        />
                      ))}

                    {tab.name === 'Can Design' &&
                      tab.features.map((feature, idx) => (
                        <ImageGridSection
                          key={idx}
                          feature={feature}
                          columnsLg={5}
                        />
                      ))}

                    {tab.name === 'Marketing' &&
                      tab.features.map((feature, idx) => (
                        <ImageGridSection
                          key={idx}
                          feature={feature}
                          columnsLg={4}
                        />
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
