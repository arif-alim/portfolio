// MyPrinciple
//
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

import logoTripSupport from '@/images/projects/tripsupport/tripsupport-logo.svg'

import newSite from '@/images/projects/tripsupport/tripsupport-new.jpg'
import oldSite from '@/images/projects/tripsupport/tripsupport-old.jpg'

/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

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
        images: [
          { src: screen1, alt: 'Trip Support project screen 1' },
          { src: screen2, alt: 'Trip Support project screen 2' },
          { src: screen3, alt: 'Trip Support project screen 3' },
          { src: screen4, alt: 'Trip Support project screen 4' },
          { src: screen5, alt: 'Trip Support project screen 5' },
          { src: screen6, alt: 'Trip Support project screen 6' },
          { src: screen7, alt: 'Trip Support project screen 7' },
          { src: screen8, alt: 'Trip Support project screen 8' },
          { src: screen9, alt: 'Trip Support project screen 9' },
          { src: screen10, alt: 'Trip Support project screen 10' },
          { src: screen11, alt: 'Trip Support project screen 11' },
          { src: screen12, alt: 'Trip Support project screen 12' },
          { src: screen13, alt: 'Trip Support project screen 13' },
          { src: screen14, alt: 'Trip Support project screen 14' },
          { src: screen15, alt: 'Trip Support project screen 15' },
          { src: screen16, alt: 'Trip Support project screen 16' },
          { src: screen17, alt: 'Trip Support project screen 17' },
        ],
      },
    ],
  },
  {
    name: 'Prototypes',
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
    name: 'Company details',
    features: [
      {
        name: 'About Trip Support',
        para1:
          "Trip Support is a global travel management company that provides a wide range of services to individual and corporate clients. The company specializes in offering personalized travel solutions, including flight bookings, hotel reservations, car rentals, and visa services. Trip Support aims to simplify the travel experience for its clients by providing a one-stop-shop for all their travel needs. With its global network of partners and suppliers, the company is able to offer competitive pricing and access to exclusive travel deals. Trip Support is committed to providing excellent customer service and support, and its team of experienced travel professionals is available 24/7 to assist clients with any questions or issues. The company's mission is to make travel easy, convenient, and affordable for everyone, and it continues to expand its offerings and services to meet the evolving needs of its clients.",
        link: 'https://tripsupport.ca/',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Summary = ({ title, paragraphs }) => (
  <div className="text-content flex flex-col lg:gap-x-8">
    <div className="heading-lg col-span-full mb-4">
      <h2>{title}</h2>
    </div>
    <div className="paragraph flex max-w-prose flex-col gap-4 lg:mt-0">
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  </div>
)

const Wireframes = ({ title, images }) => (
  <div className="text-content flex flex-col gap-y-4">
    <div className="heading-lg col-span-full mb-4">
      <h2>{title}</h2>
    </div>
    <div className="col-span-full gap-4 bg-zinc-100 p-4 dark:bg-zinc-800  lg:grid lg:grid-cols-12 lg:gap-8 lg:p-8">
      {images.map((image, index) => (
        <div key={index} className="lg:col-span-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={260}
            height={260}
            layout="responsive"
            className="image-container"
          />
        </div>
      ))}
    </div>
  </div>
)

const Prototype = ({ title, links }) => (
  <div className="flex flex-col dark:bg-inherit">
    <div className="heading-lg col-span-full mb-4 dark:text-gray-200">
      <h2>{title}</h2>
    </div>
    <div className="flex flex-row flex-wrap gap-16 p-2">
      {links.map((link, index) => (
        <div key={index} className="mb-4 flex flex-col">
          <Link
            href={link.href}
            target="_blank"
            className=" text-tiny text-blue-800"
          >
            {link.label}
          </Link>
          <div className="my-2 max-w-md">
            <Image
              src={link.imageSrc}
              alt={link.imageAlt}
              width={260}
              height={260}
              layout="responsive"
              className="image-container"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Details = ({ title, paragraph, link }) => (
  <div className="mt-6 max-w-prose lg:col-span-5 lg:mt-0">
    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-zinc-50">
      {title}
    </h3>
    <div className="flex max-w-prose flex-col gap-4 text-sm lg:mt-0">
      <p>{paragraph}</p>
    </div>
    <Link
      href={link}
      target="_blank"
      className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
    >
      View Website
    </Link>
  </div>
)

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <SimpleLayout title={'Trip Support'} intro={'Responsive Mobile Design'}>
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
                              : 'dark:hover-gray-100 hover:text-gray-700dark:text-gray-400 border-transparent font-medium text-gray-900 hover:border-gray-300 dark:text-zinc-50 ',
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
                  {tab.features.map((feature, featureIndex) => {
                    switch (tab.name) {
                      case 'Summary':
                        return (
                          <Summary
                            key={feature.name}
                            title="Summary"
                            paragraphs={[
                              feature.para1,
                              feature.para2,
                              feature.para3,
                              feature.para4,
                            ]}
                          />
                        )

                      case 'Wireframes':
                        return (
                          <Wireframes
                            key={feature.name}
                            title="Custom web pages"
                            images={feature.images}
                          />
                        )

                      case 'Prototypes':
                        return (
                          <Prototype
                            key={feature.type}
                            title="Design comparison"
                            links={[
                              {
                                label: 'CA website',
                                href: 'https://tripsupport.ca/book-now-pay-later/',
                                imageSrc: feature.imgSrc21,
                                imageAlt: feature.imgAlt16,
                              },
                              {
                                label: 'US Website',
                                href: 'https://tripsupport.com/book-now-pay-later',
                                imageSrc: feature.imgSrc22,
                                imageAlt: feature.imgAlt16,
                              },
                            ]}
                          />
                        )

                      case 'Company details':
                        return (
                          <Details
                            key={feature.name}
                            title={feature.name}
                            paragraph={feature.para1}
                            link={feature.link}
                          />
                        )

                      default:
                        return null
                    }
                  })}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
