import Image from 'next/image'
import Link from 'next/link'

// Service ONtario
//
import masthead from '@/images/projects/serviceontario/ServiceOntario.png'
import screen1 from '@/images/projects/serviceontario/ddr1.jpg'
import screen2 from '@/images/projects/serviceontario/ddr2.jpg'
import screen3 from '@/images/projects/serviceontario/ddr3.jpg'
import screen4 from '@/images/projects/serviceontario/ddr4.jpg'
import screen5 from '@/images/projects/serviceontario/ddr5.jpg'
import screen6 from '@/images/projects/serviceontario/ddr6.jpg'
import screen7 from '@/images/projects/serviceontario/ddr7.jpg'
import screen8 from '@/images/projects/serviceontario/ddr8.jpg'
import screen9 from '@/images/projects/serviceontario/ddr9.jpg'
import screen10 from '@/images/projects/serviceontario/ddr10.jpg'
import screen11 from '@/images/projects/serviceontario/ddr11.jpg'
import screen12 from '@/images/projects/serviceontario/ddr12.jpg'
import screen13 from '@/images/projects/serviceontario/ddr13.jpg'
import screen14 from '@/images/projects/serviceontario/ddr14.jpg'
import screen15 from '@/images/projects/serviceontario/ddr15.jpg'
import screen16 from '@/images/projects/serviceontario/ddr16.jpg'
import screen17 from '@/images/projects/serviceontario/ddr17.jpg'
import screen18 from '@/images/projects/serviceontario/ddr18.jpg'
import screen19 from '@/images/projects/serviceontario/ddr19.jpg'
import screen20 from '@/images/projects/serviceontario/ddr20.jpg'
import screen21 from '@/images/projects/serviceontario/ddr21.jpg'
import screen22 from '@/images/projects/serviceontario/ddr22.jpg'
import screen23 from '@/images/projects/serviceontario/ddr23.jpg'
import screen24 from '@/images/projects/serviceontario/ddr24.jpg'

import { SimpleLayout } from '@/components/SimpleLayout'

import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Summary',
    features: [
      {
        name: 'Digital Dealership Registration',
        para1:
          'As a Senior UI Architect at ServiceOntario, I had the privilege of working on the Digital Dealership Registration (DDR) project, a high-profile government initiative aimed at streamlining the automotive dealership registration process. My role in the project was instrumental in ensuring the success of the platform.',
        para2:
          "Using my expertise in user interface design, I created wireframes and clickable prototypes to guide the development of the DDR platform. My designs were focused on creating an intuitive and user-friendly interface that aligned with user needs. To achieve this goal, I worked closely with cross-functional teams, including developers, product managers, and stakeholders, to ensure that the design met the project's requirements and goals.",
        para3:
          'One of the key components of my role was to conduct usability testing and incorporate feedback from users to iterate and refine the design of the DDR platform. This process was critical in improving the overall user experience and increasing user satisfaction. I was able to demonstrate my strong problem-solving skills, working through complex design challenges and finding creative solutions that met both user needs and technical requirements.',
        para4:
          'Overall, my work on the DDR project at ServiceOntario was a great success. By creating an intuitive and user-friendly interface, we were able to streamline the automotive dealership registration process, making it easier and more efficient for users. Through my work on this project, I was able to showcase my expertise in user interface design and my ability to work collaboratively with cross-functional teams to achieve shared goals.',

        imageSrc: masthead,
        imageAlt: 'Service Ontario Masthead',
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
        imageSrc15: screen15,
        imageAlt15: 'Service Ontario project screen 1',
        imageSrc16: screen16,
        imageAlt16: 'Service Ontario project screen 1',
        imageSrc17: screen17,
        imageAlt17: 'Service Ontario project screen 1',
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
      },
    ],
  },
  {
    name: 'Prototypes',
    features: [
      {
        name: 'Prototypes',
        protoLink:
          "If the embedded prototype does'nt work, click the link to view it in browser.",
      },
    ],
  },
  {
    name: 'Company details',
    features: [
      {
        name: 'About ServiceOntario',
        para1:
          "ServiceOntario is a government agency in the province of Ontario, Canada that provides a wide range of services to citizens and businesses. The agency is responsible for delivering essential services, such as driver and vehicle licensing, health card registration, birth and death certificates, and business registration, among others. ServiceOntario aims to provide these services in an efficient, accessible, and customer-focused manner, and it has implemented several initiatives to improve service delivery, including online service options and extended hours of operation. The agency has over 300 service locations across the province, including kiosks in grocery stores and shopping centers, making it easy for customers to access the services they need. ServiceOntario is committed to continuous improvement and innovation, and it works closely with its partners and stakeholders to identify new opportunities to enhance its services and make them more accessible to all Ontarians. The agency's mission is to be a trusted provider of high-quality services that meet the needs of its customers, while promoting public safety and security, and contributing to the economic growth and prosperity of the province.",
        link: 'https://www.ontario.ca/page/digital-dealership-registration-program',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Iframe
function MyComponent() {
  const [iframeHeight, setIframeHeight] = useState(800)

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerWidth < 768 ? 450 : 1024
      setIframeHeight(newHeight)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mb-0 lg:mb-8 ">
      <iframe
        className="border-1 border-black border-opacity-10"
        width="100%"
        height={iframeHeight}
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZstoHuYqSWOp5f5On03TAD%2FDesign---Truth-Clickable%3Fpage-id%3D0%253A1%26node-id%3D47-30142%26viewport%3D1242%252C221%252C0.08%26scaling%3Dscale-down-width%26starting-point-node-id%3D47%253A28004"
      ></iframe>
    </div>
  )
}

export default function Project() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <SimpleLayout
      title={'ServiceOntario'}
      intro={'Digital Dealership Registration (DDR)'}
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
                              : 'dark:hover-gray-100 hover:text-gray-700dark:text-gray-400 border-transparent font-medium text-zinc-900 hover:border-gray-300 dark:text-zinc-200 ',
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
                  {tab.name === 'Summary'
                    ? /* Render content for Summary tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col lg:gap-x-8"
                        >
                          <div className="mb-0 lg:mb-8 lg:max-w-prose">
                            <Image
                              src={feature.imageSrc}
                              alt={feature.imageAlt}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>
                          <div className="mt-6 flex max-w-prose flex-col gap-4 text-sm text-zinc-900  dark:text-zinc-200 lg:mt-0 lg:max-w-prose">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
                              {feature.name}
                            </h3>
                            <p className="">{feature.para1}</p>
                            <p className="">{feature.para2}</p>
                            <p className="">{feature.para3}</p>
                            <p className="">{feature.para4}</p>
                          </div>
                        </div>
                      ))
                    : tab.name === 'Wireframes'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="flex flex-col gap-2 bg-slate-100 p-4 dark:bg-zinc-800 lg:grid lg:grid-cols-12 lg:gap-x-4 lg:p-6"
                        >
                          <div className="flex flex-col gap-4 lg:col-span-4">
                            <Image
                              src={feature.imageSrc1}
                              alt={feature.imageAlt1}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc5}
                              alt={feature.imageAlt5}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc9}
                              alt={feature.imageAlt9}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc13}
                              alt={feature.imageAlt13}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc17}
                              alt={feature.imageAlt17}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc21}
                              alt={feature.imageAlt21}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>

                          <div className="flex flex-col gap-4 lg:col-span-4">
                            <Image
                              src={feature.imageSrc2}
                              alt={feature.imageAlt2}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc6}
                              alt={feature.imageAlt6}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc10}
                              alt={feature.imageAlt10}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc14}
                              alt={feature.imageAlt14}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc18}
                              alt={feature.imageAlt18}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc22}
                              alt={feature.imageAlt22}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>

                          <div className="flex flex-col gap-4 lg:col-span-4">
                            <Image
                              src={feature.imageSrc3}
                              alt={feature.imageAlt3}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc7}
                              alt={feature.imageAlt7}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc11}
                              alt={feature.imageAlt11}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc15}
                              alt={feature.imageAlt15}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc19}
                              alt={feature.imageAlt19}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                            <Image
                              src={feature.imageSrc23}
                              alt={feature.imageAlt23}
                              width={260}
                              height={260}
                              layout="responsive"
                              className="rounded-lg object-cover object-center"
                            />
                          </div>
                        </div>
                      ))
                    : tab.name === 'Prototypes'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div
                          key={feature.type}
                          className="flex flex-col  lg:gap-x-8"
                        >
                          <div className="my-6 lg:mt-0 lg:max-w-prose">
                            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
                              {feature.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-200">
                              {feature.protoLink}
                            </p>
                            <Link
                              href="https://ddr-demo.vercel.app/"
                              target="_blank"
                              className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <div>View web prototype</div>
                            </Link>

                            <div className="mt-10 ">
                              <Link
                                className="text-blue-800"
                                href="https://www.figma.com/proto/ZstoHuYqSWOp5f5On03TAD/Design---Truth-Clickable?page-id=0%3A1&node-id=47-28658&starting-point-node-id=47%3A28004"
                                target="_blank"
                              >
                                View clickable prototype
                              </Link>
                            </div>
                          </div>
                          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50 ">
                            Embedded Figma iFrame
                          </h2>
                          <MyComponent></MyComponent>
                        </div>
                      ))
                    : tab.name === 'Company details'
                    ? /* Render content for Wireframes tab */
                      tab.features.map((feature) => (
                        <div key={feature.name}>
                          <div className="mt-6 max-w-prose lg:col-span-5 lg:mt-0">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
                              {feature.name}
                            </h3>
                            <p className="flex max-w-prose flex-col gap-4 text-sm text-zinc-900  dark:text-zinc-200 lg:mt-0">
                              {feature.para1}
                            </p>
                            <Link
                              href={feature.link}
                              target="_blank"
                              className="mt-8 inline-block rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
