// MyPrinciple
//
import screen1 from '@/images/projects/hydroone/screen1.jpg'
import screen2 from '@/images/projects/hydroone/screen2.jpg'
import screen3 from '@/images/projects/hydroone/screen3.jpg'
import screen4 from '@/images/projects/hydroone/screen4.jpg'
import screen5 from '@/images/projects/hydroone/screen5.jpg'
import screen6 from '@/images/projects/hydroone/screen6.jpg'
import screen7 from '@/images/projects/hydroone/screen7.jpg'
import screen8 from '@/images/projects/hydroone/screen8.jpg'
import screen9 from '@/images/projects/hydroone/screen9.jpg'
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
        name: 'Summary',
        description:
          'As a Senior Lead Designer at Hydro One, I played a pivotal role in enhancing the company’s digital presence by creating a comprehensive style guide and reusable design components using Figma. I developed high-fidelity UI prototypes and integrated accessible, responsive designs into SharePoint using HTML5, CSS3, and JavaScript. My contributions included conducting user research to address pain points, applying design thinking principles, and ensuring compliance with accessibility standards such as contrast trends, aria labels, and alt tags. Collaborating with cross-functional teams via Wrike, I delivered innovative, user-friendly solutions that improved the overall digital experience.',
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
            href: 'href="https://www.figma.com/file/qlbk5r4jpix7dRdlxwHXO8/Vacation-Conservation-Tips?node-id=2%3A66&t=u0nfmNQO4Tm3IHaw-1"',
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
        name: 'About Hydro One',
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

const Wireframes = ({ sections }) => (
  <div className="text-content flex flex-col gap-y-8">
    {sections?.length > 0 ? (
      sections.map((section, index) => (
        <div key={index} className="mb-8 text-zinc-900  dark:text-zinc-50">
          {/* Section Title and Subheading */}
          <h3 className="mb-4 text-xl font-semibold ">{section.title}</h3>
          <div className="flex max-w-prose flex-col gap-4 lg:mt-0">
            <p>{section.subheading}</p>
          </div>

          {/* Section Link */}
          {section.link ? (
            <Link
              href={section.link.href}
              className="mb-4 mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              {section.link.label}
            </Link>
          ) : null}

          {/* Section Images */}
          {section.images?.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-4 p-4 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-6">
              {section.images.map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg">
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

const Prototypes = ({ title, images, links }) => (
  <div className="flex flex-col dark:bg-inherit">
    <div className="mt-6 max-w-prose lg:col-span-5 lg:mt-0">
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-zinc-50">
        {title}
      </h3>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {images &&
        images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={260}
              height={260}
              layout="responsive"
              className="image-container"
            />
            {links && links[index] && (
              <Link
                href={links[index].href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block  text-blue-800 hover:underline dark:text-blue-400 "
              >
                {links[index].label}
              </Link>
            )}
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
    <div className="flex max-w-prose flex-col gap-4 text-zinc-900  dark:text-zinc-50 lg:mt-0">
      <p>{paragraph}</p>
    </div>
    <Link
      href={link}
      target="_blank"
      className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50"
    >
      View Website
    </Link>
  </div>
)

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <SimpleLayout title={'Hydro One'} intro={'Responsive Mobile Design'}>
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
                  {tab.name === 'Summary' && (
                    <Summary
                      title={tab.features[0].name} // Summary expects a single feature
                      paragraphs={[tab.features[0].description]}
                    />
                  )}

                  {tab.name === 'Wireframes' && (
                    <Wireframes
                      title="Wireframes"
                      sections={tab.features} // Pass all sections at once
                    />
                  )}

                  {tab.name === 'Prototypes' && (
                    <Prototypes
                      title={tab.features[0].title} // Prototypes expects a single feature
                      images={tab.features[0].images || []}
                      links={tab.features[0].links || []}
                    />
                  )}

                  {tab.name === 'Company details' && (
                    <Details
                      title={tab.features[0].name} // Company details expects a single feature
                      paragraph={tab.features[0].para1}
                      link={tab.features[0].link}
                    />
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </SimpleLayout>
  )
}
