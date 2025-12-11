import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'

// Cooper designs
import logo1 from '@/images/projects/cooper/cooper-1.jpg'
import logo2 from '@/images/projects/cooper/cooper-2.jpg'
import logo3 from '@/images/projects/cooper/cooper-3.jpg'
import logo4 from '@/images/projects/cooper/cooper-4.jpg'
import app1 from '@/images/projects/cooper/cooper-6.jpg'
import app2 from '@/images/projects/cooper/cooper-7.jpg'
import app3 from '@/images/projects/cooper/cooper-8.jpg'
import app4 from '@/images/projects/cooper/cooper-9.jpg'
import app5 from '@/images/projects/cooper/cooper-10.jpg'
import app6 from '@/images/projects/cooper/cooper-11.jpg'
import app7 from '@/images/projects/cooper/cooper-12.jpg'
import app8 from '@/images/projects/cooper/cooper-13.jpg'
import app9 from '@/images/projects/cooper/cooper-14.jpg'
import app10 from '@/images/projects/cooper/cooper-15.jpg'
import app11 from '@/images/projects/cooper/cooper-16.jpg'
import app12 from '@/images/projects/cooper/cooper-17.jpg'
import app13 from '@/images/projects/cooper/cooper-18.jpg'
import app14 from '@/images/projects/cooper/cooper-19.jpg'
import app15 from '@/images/projects/cooper/cooper-20.jpg'
import web1 from '@/images/projects/cooper/cooper-21.jpg'
import web2 from '@/images/projects/cooper/cooper-22.jpg'
import web3 from '@/images/projects/cooper/cooper-23.jpg'
import web4 from '@/images/projects/cooper/cooper-24.jpg'
import web5 from '@/images/projects/cooper/cooper-25.jpg'
import web6 from '@/images/projects/cooper/cooper-26.jpg'

import logoCooper from '@/images/projects/cooper/coooper-logo.svg'

/* -------------------------------------------------------------------------- */
/*                             Shared Screenshot UI                           */
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
      className={className}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        title: '',
        logo: {
          src: logoCooper,
          alt: 'Cooper logo',
        },
        paragraphs: [
          'As the designer of the Cooper Driver mobile app, my focus was on creating a user-friendly and efficient user experience that would meet the needs of both drivers and clients. The app features a simple and intuitive interface that makes it easy for users to request and track transportation services, with real-time updates and delivery confirmation for added convenience.',
          'The design of the Cooper Driver app incorporates the latest UI/UX mobile app design trends to enhance user experience, including the use of white space, high-quality images, and simplified navigation. The use of clear labeling and bold icons ensures that users can easily navigate the app and access the features they need, while the incorporation of real-time tracking and delivery confirmation improves transparency and user trust.',
          'Overall, the Cooper Driver mobile app redesign has resulted in a significant improvement in user experience and customer satisfaction. The user-friendly design and efficient functionality have helped to increase engagement and improve the overall user experience, making it easier for drivers and clients to access the information and services they need while on the go.',
        ],
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About Cooper',
        para1:
          'The Cooper Driver app is a transportation service based in the Bahamas that provides a reliable and affordable solution for individuals and businesses looking to move goods across the country. The app connects drivers with clients in need of transportation, offering a seamless and efficient solution for all types of cargo. The Cooper Driver app features real-time tracking, delivery confirmation, and payment processing, making it easy for both drivers and clients to stay informed and in control. With a focus on safety and customer satisfaction, Cooper Driver is a trusted and reliable transportation service that meets the needs of businesses and individuals in the Bahamas.',
        link: 'https://www.ontario.ca/page/digital-dealership-registration-program',
      },
    ],
  },
  {
    name: 'Logo',
    features: [
      {
        images: [
          { src: logo1, alt: 'Cooper logo design version 1' },
          { src: logo2, alt: 'Cooper logo design version 2' },
          { src: logo3, alt: 'Cooper logo design version 3' },
          { src: logo4, alt: 'Cooper logo design version 4' },
        ],
      },
    ],
  },
  {
    name: 'Mobile App',
    features: [
      {
        images: [
          { src: app1, alt: 'Cooper app design 1' },
          { src: app2, alt: 'Cooper app design 2' },
          { src: app3, alt: 'Cooper app design 3' },
          { src: app4, alt: 'Cooper app design 4' },
          { src: app5, alt: 'Cooper app design 5' },
          { src: app6, alt: 'Cooper app design 6' },
          { src: app7, alt: 'Cooper app design 7' },
          { src: app8, alt: 'Cooper app design 8' },
          { src: app9, alt: 'Cooper app design 9' },
          { src: app10, alt: 'Cooper app design 10' },
          { src: app11, alt: 'Cooper app design 11' },
          { src: app12, alt: 'Cooper app design 12' },
          { src: app13, alt: 'Cooper app design 13' },
          { src: app14, alt: 'Cooper app design 14' },
          { src: app15, alt: 'Cooper app design 15' },
        ],
      },
    ],
  },
  {
    name: 'Responsive Website',
    features: [
      {
        images: [
          { src: web1, alt: 'Cooper responsive website 1' },
          { src: web2, alt: 'Cooper responsive website 2' },
          { src: web3, alt: 'Cooper responsive website 3' },
          { src: web4, alt: 'Cooper responsive website 4' },
          { src: web5, alt: 'Cooper responsive website 5' },
          { src: web6, alt: 'Cooper responsive website 6' },
        ],
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                 Utilities                                  */
/* -------------------------------------------------------------------------- */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/* -------------------------------------------------------------------------- */
/*                              Section Components                             */
/* -------------------------------------------------------------------------- */

function SummarySection({ feature }) {
  return (
    <div className="flex max-w-3xl flex-col text-zinc-900 dark:text-zinc-50 lg:gap-x-8">
      {/* Logo + title – stacked on mobile, inline on larger screens */}
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

      <div className="flex flex-col gap-4">
        {feature.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}

function CompanyDetailsSection({ feature }) {
  return (
    <div className="mt-6 max-w-2xl text-zinc-900 dark:text-zinc-200 lg:mt-0">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {feature.name}
      </h3>
      <p className="mt-4">{feature.para1}</p>
      {feature.link && (
        <Link
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View Website
        </Link>
      )}
    </div>
  )
}

function LogoGrid({ images }) {
  return (
    <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, idx) => (
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
  )
}

function MobileAppGrid({ images }) {
  return (
    <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-8">
      {/* Multi-column grid instead of hard-coded columns */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {images.map((img, idx) => (
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
  )
}

function ResponsiveWebsiteGrid({ images }) {
  return (
    <div className="bg-slate-100 p-4 dark:bg-zinc-800 lg:p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
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
  )
}

/* -------------------------------------------------------------------------- */
/*                                  Page                                      */
/* -------------------------------------------------------------------------- */

export default function Project() {
  // default to first tab – Summary
  const [selectedTab, setSelectedTab] = useState('Summary')

  return (
    <>
      <Head>
        <title>Cooper - Project</title>
        <meta name="description" content="Cooper Driver app and brand design" />
      </Head>

      <SimpleLayout
        title="Cooper Apps"
        intro="Extensive user research followed with affinity mapping and user journeys. I had to account for Google Maps not picking up some Bahamas locations and designed a custom app experience."
      >
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-3xl px-0 lg:max-w-none lg:px-0">
            <Tab.Group
              selectedIndex={tabs.findIndex((t) => t.name === selectedTab)}
              onChange={(index) => setSelectedTab(tabs[index].name)}
            >
              {/* ------------------------------ Tab List ------------------------------ */}
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

              {/* ----------------------------- Tab Panels ----------------------------- */}
              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel key={tab.name} className="space-y-16 pt-4 lg:pt-8">
                    {tab.name === 'Summary' &&
                      tab.features.map((feature, idx) => (
                        <SummarySection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Company details' &&
                      tab.features.map((feature, idx) => (
                        <CompanyDetailsSection key={idx} feature={feature} />
                      ))}

                    {tab.name === 'Logo' &&
                      tab.features.map((feature, idx) => (
                        <LogoGrid key={idx} images={feature.images || []} />
                      ))}

                    {tab.name === 'Mobile App' &&
                      tab.features.map((feature, idx) => (
                        <MobileAppGrid
                          key={idx}
                          images={feature.images || []}
                        />
                      ))}

                    {tab.name === 'Responsive Website' &&
                      tab.features.map((feature, idx) => (
                        <ResponsiveWebsiteGrid
                          key={idx}
                          images={feature.images || []}
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
