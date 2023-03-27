import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Perfec-tone
import cert1 from '@/images/certificates/CSSEssentialTraining.jpg'
import cert2 from '@/images/certificates/CustomMetaBoxesinWordPress.jpg'
import cert3 from '@/images/certificates/CSSSelectors.jpg'
import cert4 from '@/images/certificates/InteractionDesignFlow.jpg'
import cert5 from '@/images/certificates/UXFoundationsPrototyping.jpg'
import cert6 from '@/images/certificates/ROR6EssentialTrainingModelsandAssociations.jpg'
import cert7 from '@/images/certificates/ROR6ControllersAndViews.jpg'
import cert8 from '@/images/certificates/ROR6EssentialTraining.jpg'
import cert9 from '@/images/certificates/GraphicDesignCareersFirstSteps.jpg'
import cert10 from '@/images/certificates/RubyClassesandModules.jpg'
import cert11 from '@/images/certificates/RubyBasics.jpg'
import cert12 from '@/images/certificates/Databases.jpg'
import cert13 from '@/images/certificates/RegularExpressions.jpg'
import cert14 from '@/images/certificates/GitBranchesMergesRemotes.jpg'
import cert15 from '@/images/certificates/LinuxCommandLine.jpg'
import cert16 from '@/images/certificates/GitBasics.jpg'
import cert17 from '@/images/certificates/HTMLEssentialTraining.jpg'
import cert18 from '@/images/certificates/HTTPEssentialTraining.jpg'
import cert19 from '@/images/certificates/JavaScript.jpg'
import cert20 from '@/images/certificates/Ruby.jpg'
import cert21 from '@/images/certificates/uxdesign1.jpg'
import cert22 from '@/images/certificates/uxdesign2.jpg'
import cert23 from '@/images/certificates/uxdesign3.jpg'
import cert24 from '@/images/certificates/uxdesign4.jpg'
import cert25 from '@/images/certificates/uxdesign5.jpg'
import cert26 from '@/images/certificates/uxdesign6.jpg'
import cert27 from '@/images/certificates/uxdesign7.jpg'

import logoUW from '@/images/school/uw.svg'
import logoWLU from '@/images/school/wlu.svg'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Fragment, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Design',
    features: [
      {
        heading: 'UX Design 1: Overview',
        imageSrc: cert21,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/5fab0db71cb46dabfd0882c06357fa29b4ee59e9b5afd3474d4982859454f8d3',
      },
      {
        heading: 'UX Design 2: Analyzing User Data',
        imageSrc: cert22,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/80f3d24f527fe8bad60c4c1f907c6a3698e33f9f4b52ae660a364780cda598ea',
      },
      {
        heading: 'UX Design 3: Creating Personas',
        imageSrc: cert23,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/21f61d3276e834d0e5c5e9084a6dfaec74ac027e485b57332626179867e30126',
      },
      {
        heading: 'UX Design 4: Ideation',
        imageSrc: cert24,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/b7c9038a440c23b77329f3c6a82a17f09491d2065d3574bb7037e9ebc10654bb',
      },
      {
        heading: 'UX Design 5: Creating Scenerios and Storyboards',
        imageSrc: cert25,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/443a78815d646eb3669025fdde0c7ae9786740da83abddcaa20a510aab363ca7',
      },
      {
        heading: 'UX Design 6: Paper Prototyping',
        imageSrc: cert26,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/68c5d57bb50b72b74431b84090b8a25c73e7ab012730962594bfddada2ce449f',
      },
      {
        heading: 'UX Design 7: Implementation Planning',
        imageSrc: cert27,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/36e47aec5f4e76002861a52bb987f69eaa84ae96082b1c3161f15b5c61c31fdf',
      },
      {
        heading: 'Interaction Design Flow',
        imageSrc: cert4,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/a77b05ab15e5ca9f5f5eefdd220da1cc707be4f64ff7cd518c3e528b33ba9c64',
      },
      {
        heading: 'UX Foundations Prototyping',
        imageSrc: cert5,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/341090ac241ac5329a6e090b89841b6e59941b26f217c16bddabd2af5573a210',
      },
      {
        heading: 'Graphic Design',
        imageSrc: cert9,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/b4bfb24e779c15c910fcc63a913bff12609b6e1fb02cff7fc6fc973e9fb736f4',
      },
    ],
  },
  {
    name: 'Frontend',
    features: [
      {
        heading: 'JavaScript',
        imageSrc: cert19,
        linkedinUrl:
          'https://www.codecademy.com/profiles/alim.arif/certificates/705dcb15de0da4dd9d9fc4f3274b430e',
      },

      {
        heading: 'CSS Essential Training',
        imageSrc: cert1,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/b1b557edc2dfbd904a16591bc932efe3d605671d74ba506f73b937606bd01b63',
      },
      {
        heading: 'Wordpress CMBs',
        imageSrc: cert2,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/acf9fb7994cf70536e9b701b4e95fd4fc090dddb8c2aa79146dd9be0da86ee6d',
      },
      {
        heading: 'CSS: Selectors',
        imageSrc: cert3,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/1a387c6ff317d4fd0ee1655f68c08ca2e9eb490aae5788125bcbf57c72ada4db',
      },
      {
        heading: 'ROR 6 Models',
        imageSrc: cert6,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/f8095ced745c50d0a20730c9e3232d506f9c0cdcb48b841d8221f66f3e5dee5b',
      },
      {
        heading: 'ROR 6 Controllers & Views',
        imageSrc: cert7,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/3bf851b7d50403271308322f12748736a28dbd83825c9110595573cb3b0afb20',
      },
      {
        heading: 'ROR 6 Essential Training',
        imageSrc: cert8,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/4af725b6a15ebaf93e7b6c18fcaa874fe5198918e52658b665d0c63b3bd5cba9',
      },
      {
        heading: 'HTML Essential Training',
        imageSrc: cert17,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/025bf8cc4f8fe537ead3ec82072d6086462afc228a4d41431fcdeba5d81e6a44',
      },
      {
        heading: 'HTTP Essential Training',
        imageSrc: cert18,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/b0516d54ad89af712d60673c57dd6e779f9b4302db170c0aa848587e0e84308f',
      },
    ],
  },

  {
    name: 'Backend',
    features: [
      {
        heading: 'Ruby',
        imageSrc: cert20,
        linkedinUrl:
          'https://www.codecademy.com/profiles/alim.arif/certificates/1c05e0382bc5681c824c4cbe85c126fd',
      },
      {
        heading: 'Ruby: Classes and Modules',
        imageSrc: cert10,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/120dca4adbadd11ab3a15a4035fdb6404539d5aec2dbe4efe0384ac5b2b27e26',
      },
      {
        heading: 'Ruby: Basics',
        imageSrc: cert11,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/1b0b282142c120e0f887b4f40ff314b0e7e97d3a1651a70c26799c68769664b4',
      },
      {
        heading: 'Databases',
        imageSrc: cert12,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/f6933d48cbbd5932e758cd0bfe264459cd9797e78afc2b3c9057a1fe30288583',
      },
      {
        heading: 'Regular Expressions',
        imageSrc: cert13,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/2351993644888156867580df0a2eeac77ae75a3ea2a8b3b0911e12832b252ac9',
      },
      {
        heading: 'Git: Brances and Merges',
        imageSrc: cert14,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/5a5ea530753fe48ac01b564987d48900f165c29e60b514364d642f2b821a45cb',
      },
      {
        heading: 'Linux Command Line',
        imageSrc: cert15,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/555b9df4b227f2f69bcfe200946929de65e60054ba826a6b085f8b7e5ad5096d',
      },
      {
        heading: 'Git Basics',
        imageSrc: cert16,
        linkedinUrl:
          'https://www.linkedin.com/learning/certificates/c7da40da5ad3cfbfe1c09ac9ea6f64e7be4b717ef4a3399acc2a048ed92aa090',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HydroOne() {
  const [selectedTab, setSelectedTab] = useState('Wireframes')
  return (
    <>
      <Head>
        <title>Education & Accolades - Arif Alim</title>
        <meta
          name="description"
          content="Double degree program, BA at Wilfrid Laurier University and BCS at the University of Waterloo"
        />
      </Head>
      <SimpleLayout
        title="Double Degree education and over a decade of industry experience in UI/UX Design and Frontend Development"
        intro="Started graphic design at the age of 15 and soon progressed to user interaction and experience design. With extensive knowledge of industry standard javascript frameworks, it has helped me design with development in mind."
      >
        <div className="education my-12">
          <div className="flex flex-col gap-6">
            <div className="max-w-3xl">
              <h2
                id="features-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                Education
              </h2>
            </div>
            <div className="flex flex-row items-center justify-start sm:gap-12 ">
              <Image src={logoUW} alt="University of Waterloo"></Image>

              <Image src={logoWLU} alt="University of Waterloo"></Image>
            </div>
          </div>
        </div>
        <div className="">
          <section
            aria-labelledby="features-heading"
            className="mx-auto max-w-7xl"
          >
            <div className="mx-auto max-w-2xl px-0 lg:max-w-none lg:px-0">
              <div className="max-w-3xl">
                <h2
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                >
                  Certifications
                </h2>
              </div>

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
                                  : 'dark:hover-gray-100 hover:text-gray-700dark:text-gray-400 border-transparent font-medium text-gray-900 hover:border-gray-300 dark:text-gray-300 ',
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
                      className="mt-8 flex flex-col gap-8 lg:grid lg:grid-cols-12"
                    >
                      {tab.name === 'Design'
                        ? /* Render content for Summary tab */
                          tab.features.map((feature) => (
                            <div key={feature.name} className="lg:col-span-4">
                              <Image
                                src={feature.imageSrc}
                                alt={feature.imageAlt}
                                className="rounded-lg object-cover object-center"
                              />

                              <div className="mx-2 space-y-1">
                                <h3 className="font-medium">
                                  {feature.heading}
                                </h3>
                                <Link
                                  href={feature.linkedinUrl}
                                  className="flex items-center gap-3 text-tiny font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
                                  target="_blank"
                                >
                                  <span className="sr-only">LinkedIn</span>
                                  <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  View Certificate
                                </Link>
                              </div>
                            </div>
                          ))
                        : tab.name === 'Frontend'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div key={feature.name} className="lg:col-span-4">
                              <Image
                                src={feature.imageSrc}
                                alt={feature.imageAlt}
                                className="rounded-lg object-cover object-center"
                              />

                              <div className="mx-2 space-y-1">
                                <h3 className="font-medium">
                                  {feature.heading}
                                </h3>
                                <Link
                                  href={feature.linkedinUrl}
                                  className="flex items-center gap-3 text-tiny font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
                                  target="_blank"
                                >
                                  <span className="sr-only">LinkedIn</span>
                                  <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  View Certificate
                                </Link>
                              </div>
                            </div>
                          ))
                        : tab.name === 'Backend'
                        ? /* Render content for Wireframes tab */
                          tab.features.map((feature) => (
                            <div key={feature.name} className="lg:col-span-4">
                              <Image
                                src={feature.imageSrc}
                                alt={feature.imageAlt}
                                className="rounded-lg object-cover object-center"
                              />

                              <div className="mx-2 space-y-1">
                                <h3 className="font-medium">
                                  {feature.heading}
                                </h3>
                                <Link
                                  href={feature.linkedinUrl}
                                  className="flex items-center gap-3 text-tiny font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
                                  target="_blank"
                                >
                                  <span className="sr-only">LinkedIn</span>
                                  <svg
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  View Certificate
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
        </div>
      </SimpleLayout>
    </>
  )
}
