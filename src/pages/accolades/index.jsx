import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

// Import Design Certificates
import designCert1 from '@/images/certificates/designCert1.jpg'
import designCert2 from '@/images/certificates/designCert2.jpg'
import designCert3 from '@/images/certificates/designCert3.jpg'
import designCert4 from '@/images/certificates/designCert4.jpg'
import designCert5 from '@/images/certificates/designCert5.jpg'
import designCert6 from '@/images/certificates/designCert6.jpg'
import designCert7 from '@/images/certificates/designCert7.jpg'
import designCert8 from '@/images/certificates/designCert8.jpg'
import designCert9 from '@/images/certificates/designCert9.jpg'
import designCert10 from '@/images/certificates/designCert10.jpg'

// Import Frontend Certificates
import frontendCert1 from '@/images/certificates/frontendCert1.jpg'
import frontendCert2 from '@/images/certificates/frontendCert2.jpg'
import frontendCert3 from '@/images/certificates/frontendCert3.jpg'
import frontendCert4 from '@/images/certificates/frontendCert4.jpg'
import frontendCert5 from '@/images/certificates/frontendCert5.jpg'
import frontendCert6 from '@/images/certificates/frontendCert6.jpg'
import frontendCert7 from '@/images/certificates/frontendCert7.jpg'
import frontendCert8 from '@/images/certificates/frontendCert8.jpg'
import frontendCert9 from '@/images/certificates/frontendCert9.jpg'

// Import Backend Certificates
import backendCert1 from '@/images/certificates/backendCert1.jpg'
import backendCert2 from '@/images/certificates/backendCert2.jpg'
import backendCert3 from '@/images/certificates/backendCert3.jpg'
import backendCert4 from '@/images/certificates/backendCert4.jpg'
import backendCert5 from '@/images/certificates/backendCert5.jpg'
import backendCert6 from '@/images/certificates/backendCert6.jpg'
import backendCert7 from '@/images/certificates/backendCert7.jpg'
import backendCert8 from '@/images/certificates/backendCert8.jpg'

// Import School Icons
import waterloo from '@/images/school/uw.svg'
import laurier from '@/images/school/wlu.svg'

// Add imports for all other certificates.

const tabs = [
  {
    name: 'Design',
    features: [
      {
        heading: 'UX Design 1: Overview',
        imageSrc: designCert1,
        link: 'https://www.linkedin.com/learning/certificates/5fab0db71cb46dabfd0882c06357fa29b4ee59e9b5afd3474d4982859454f8d3?trk=share_certificate',
      },
      {
        heading: 'UX Design 2: Analyzing User Data',
        imageSrc: designCert2,
        link: 'https://www.linkedin.com/learning/certificates/80f3d24f527fe8bad60c4c1f907c6a3698e33f9f4b52ae660a364780cda598ea?trk=share_certificate',
      },
      {
        heading: 'UX Design 3: Creating Personas',
        imageSrc: designCert3,
        link: 'https://www.linkedin.com/learning/certificates/21f61d3276e834d0e5c5e9084a6dfaec74ac027e485b57332626179867e30126?trk=share_certificate',
      },
      {
        heading: 'UX Design 4: Ideation',
        imageSrc: designCert4,
        link: 'https://www.linkedin.com/learning/certificates/b7c9038a440c23b77329f3c6a82a17f09491d2065d3574bb7037e9ebc10654bb?trk=share_certificate',
      },
      {
        heading: 'UX Design 5: Creating Scenerios and Storyboards',
        imageSrc: designCert5,
        link: 'https://www.linkedin.com/learning/certificates/443a78815d646eb3669025fdde0c7ae9786740da83abddcaa20a510aab363ca7?trk=share_certificate',
      },
      {
        heading: 'UX Design 6: Paper Prototyping',
        imageSrc: designCert6,
        link: 'https://www.linkedin.com/learning/certificates/68c5d57bb50b72b74431b84090b8a25c73e7ab012730962594bfddada2ce449f?trk=share_certificate',
      },
      {
        heading: 'UX Design 7: Implementation Planning',
        imageSrc: designCert7,
        link: 'https://www.linkedin.com/learning/certificates/36e47aec5f4e76002861a52bb987f69eaa84ae96082b1c3161f15b5c61c31fdf?trk=share_certificate',
      },
      {
        heading: 'Interaction Design Flow',
        imageSrc: designCert8,
        link: 'https://www.linkedin.com/learning/certificates/a77b05ab15e5ca9f5f5eefdd220da1cc707be4f64ff7cd518c3e528b33ba9c64?trk=share_certificate',
      },
      {
        heading: 'UX Foundations Prototyping',
        imageSrc: designCert9,
      },
      {
        heading: 'Graphic Design',
        imageSrc: designCert10,
        link: 'https://www.linkedin.com/learning/certificates/b4bfb24e779c15c910fcc63a913bff12609b6e1fb02cff7fc6fc973e9fb736f4?trk=share_certificate',
      },
      // Add more features as needed.
    ],
  },
  {
    name: 'Frontend',
    features: [
      {
        heading: 'JavaScript',
        imageSrc: frontendCert1,
      },
      {
        heading: 'CSS Essentaial Training',
        imageSrc: frontendCert2,
        link: 'https://www.linkedin.com/learning/certificates/b1b557edc2dfbd904a16591bc932efe3d605671d74ba506f73b937606bd01b63?trk=share_certificate',
      },
      {
        heading: 'Wordress CMBs',
        imageSrc: frontendCert3,
        link: 'https://www.linkedin.com/learning/certificates/acf9fb7994cf70536e9b701b4e95fd4fc090dddb8c2aa79146dd9be0da86ee6d?trk=share_certificate',
      },
      {
        heading: 'CSS: Selectors',
        imageSrc: frontendCert4,
        link: 'https://www.linkedin.com/learning/certificates/1a387c6ff317d4fd0ee1655f68c08ca2e9eb490aae5788125bcbf57c72ada4db?trk=share_certificate',
      },
      {
        heading: 'ROR 6: Models',
        imageSrc: frontendCert5,
        link: 'https://www.linkedin.com/learning/certificates/f8095ced745c50d0a20730c9e3232d506f9c0cdcb48b841d8221f66f3e5dee5b?trk=share_certificate',
      },
      {
        heading: 'ROR 6: Controllers',
        imageSrc: frontendCert6,
        link: 'https://www.linkedin.com/learning/certificates/3bf851b7d50403271308322f12748736a28dbd83825c9110595573cb3b0afb20?trk=share_certificate',
      },
      {
        heading: 'ROR 6: Essential Training',
        imageSrc: frontendCert7,
        link: 'https://www.linkedin.com/learning/certificates/4af725b6a15ebaf93e7b6c18fcaa874fe5198918e52658b665d0c63b3bd5cba9?trk=share_certificate',
      },
      {
        heading: 'HTML 5 Essential Training',
        imageSrc: frontendCert8,
        link: 'https://www.linkedin.com/learning/certificates/025bf8cc4f8fe537ead3ec82072d6086462afc228a4d41431fcdeba5d81e6a44?trk=share_certificate',
      },
      {
        heading: 'HTTP Essential Training',
        imageSrc: frontendCert9,
        link: 'https://www.linkedin.com/learning/certificates/b0516d54ad89af712d60673c57dd6e779f9b4302db170c0aa848587e0e84308f?trk=share_certificate',
      },
      // Add more features as needed.
    ],
  },
  {
    name: 'Backend',
    features: [
      {
        heading: 'Ruby',
        imageSrc: backendCert1,
        link: '',
      },
      {
        heading: 'Ruby: Classes & Modules',
        imageSrc: backendCert2,
        link: 'https://www.linkedin.com/learning/certificates/120dca4adbadd11ab3a15a4035fdb6404539d5aec2dbe4efe0384ac5b2b27e26?trk=share_certificate',
      },
      {
        heading: 'Ruby: Basics',
        imageSrc: backendCert3,
        link: 'https://www.linkedin.com/learning/certificates/1b0b282142c120e0f887b4f40ff314b0e7e97d3a1651a70c26799c68769664b4?trk=share_certificate',
      },
      {
        heading: 'Databases',
        imageSrc: backendCert4,
        link: 'https://www.linkedin.com/learning/certificates/f6933d48cbbd5932e758cd0bfe264459cd9797e78afc2b3c9057a1fe30288583?trk=share_certificate',
      },
      {
        heading: 'Regex',
        imageSrc: backendCert5,
        link: 'https://www.linkedin.com/learning/certificates/2351993644888156867580df0a2eeac77ae75a3ea2a8b3b0911e12832b252ac9?trk=share_certificate',
      },
      {
        heading: 'Git: Branches & Merging',
        imageSrc: backendCert6,
        link: 'https://www.linkedin.com/learning/certificates/5a5ea530753fe48ac01b564987d48900f165c29e60b514364d642f2b821a45cb?trk=share_certificate',
      },
      {
        heading: 'Linux Command Line',
        imageSrc: backendCert7,
        link: 'https://www.linkedin.com/learning/certificates/23d52df3e2c7d343ca13d415a53f30c38c48399a2cf326e15316d3c406b22f87?trk=share_certificate',
      },
      {
        heading: 'Git Basics',
        imageSrc: backendCert8,
        link: 'https://www.linkedin.com/learning/certificates/c7da40da5ad3cfbfe1c09ac9ea6f64e7be4b717ef4a3399acc2a048ed92aa090?trk=share_certificate',
      },
      // Add more features as needed.
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Design')

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Education & Accolades - Arif Alim</title>
        <meta
          name="description"
          content="Double degree program, BA at Wilfrid Laurier University and BCS at the University of Waterloo"
        />
      </Head>
      <SimpleLayout
        title="Double Degree education and over a decade of industry experience in UI/UX Design and Frontend Development"
        intro="Started graphic design at the age of 15 and soon progressed to user interaction and experience design. With extensive knowledge of industry-standard JavaScript frameworks, it has helped me design with development in mind."
      >
        <div className="education my-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Education
            </h2>
            <div className="flex flex-row items-center justify-start gap-16">
              <Image
                src={waterloo}
                alt="University of Waterloo"
                width={200}
                height={80}
              />
              <Image
                src={laurier}
                alt="Wilfrid Laurier University"
                width={150}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>
        <section
          aria-labelledby="features-heading"
          className="mx-auto max-w-7xl pt-6"
        >
          <h2 className="pb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Certifications
          </h2>
          <Tab.Group
            as="div"
            selectedIndex={tabs.findIndex((tab) => tab.name === selectedTab)}
            onChange={(index) => setSelectedTab(tabs[index].name)}
          >
            <div className="flex flex-wrap border-b">
              <Tab.List className="flex flex-row">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-blue-500 text-blue-800'
                          : 'text-gray-500 hover:text-gray-800',
                        'px-4 py-2 font-medium'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="mt-6">
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name}>
                  <div className="grid gap-10 md:grid-cols-3">
                    {tab.features.map((feature) => (
                      <div key={feature.heading}>
                        <Image
                          src={feature.imageSrc}
                          alt={feature.heading}
                          width={300}
                          height={200}
                        />
                        <div className="p-2">
                          <h3 className="font-display font-medium text-zinc-900 dark:text-zinc-100">
                            {feature.heading}
                          </h3>

                          {feature.link && (
                            <Link
                              href={feature.link}
                              onClick={(e) => {
                                e.preventDefault() // Prevent default navigation
                                window.open(
                                  feature.link,
                                  '_blank',
                                  'noopener,noreferrer'
                                ) // Open in new tab
                              }}
                              className="cursor-pointer text-sm text-blue-800 hover:underline dark:text-blue-500"
                            >
                              View Certificate
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </section>
      </SimpleLayout>
    </div>
  )
}
