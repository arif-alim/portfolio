import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs } from 'flowbite-react'
import { Card } from 'flowbite-react'

import { SimpleLayoutAlt } from '@/components/SimpleLayoutAlt'

import certCSSEssentialTraining from '@/images/certificates/CSSEssentialTraining.jpg'
import certCustomMetaBoxes from '@/images/certificates/CustomMetaBoxesinWordPress.jpg'
import certCSSSelectors from '@/images/certificates/CSSSelectors.jpg'
import certInteractionDesignFlow from '@/images/certificates/InteractionDesignFlow.jpg'
import certUXPrototyping from '@/images/certificates/UXFoundationsPrototyping.jpg'
import certROR6ModelsandAssociations from '@/images/certificates/ROR6EssentialTrainingModelsandAssociations.jpg'
import certROR6ControllersViews from '@/images/certificates/ROR6ControllersAndViews.jpg'
import certROR6EssentialTraining from '@/images/certificates/ROR6EssentialTraining.jpg'
import certGraphicDesign from '@/images/certificates/GraphicDesignCareersFirstSteps.jpg'
import certRubyClassesModules from '@/images/certificates/RubyClassesandModules.jpg'
import certRubyBasics from '@/images/certificates/RubyBasics.jpg'
import certDatabases from '@/images/certificates/Databases.jpg'
import certRegex from '@/images/certificates/RegularExpressions.jpg'
import certGitBrancesMerges from '@/images/certificates/GitBranchesMergesRemotes.jpg'
import certLinuxCommandLine from '@/images/certificates/LinuxCommandLine.jpg'
import certGitBasics from '@/images/certificates/GitBasics.jpg'
import certHTMLEssential from '@/images/certificates/HTMLEssentialTraining.jpg'
import certHTTPEssential from '@/images/certificates/HTTPEssentialTraining.jpg'
import certJavaScript from '@/images/certificates/JavaScript.jpg'
import certRuby from '@/images/certificates/Ruby.jpg'
import certUXDesign1 from '@/images/certificates/uxdesign1.jpg'
import certUXDesign2 from '@/images/certificates/uxdesign2.jpg'
import certUXDesign3 from '@/images/certificates/uxdesign3.jpg'
import certUXDesign4 from '@/images/certificates/uxdesign4.jpg'
import certUXDesign5 from '@/images/certificates/uxdesign5.jpg'
import certUXDesign6 from '@/images/certificates/uxdesign6.jpg'
import certUXDesign7 from '@/images/certificates/uxdesign7.jpg'

import logoUW from '@/images/school/uw.svg'
import logoWLU from '@/images/school/wlu.svg'

import story from '@/images/process/story.svg'
import { borderColor } from 'tailwindcss/defaultTheme'

const Design = [
  {
    heading: 'UX Design 1: Overview',
    image: certUXDesign1,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/5fab0db71cb46dabfd0882c06357fa29b4ee59e9b5afd3474d4982859454f8d3',
  },
  {
    heading: 'UX Design 2: Analyzing User Data',
    image: certUXDesign2,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/80f3d24f527fe8bad60c4c1f907c6a3698e33f9f4b52ae660a364780cda598ea',
  },
  {
    heading: 'UX Design 3: Creating Personas',
    image: certUXDesign3,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/21f61d3276e834d0e5c5e9084a6dfaec74ac027e485b57332626179867e30126',
  },
  {
    heading: 'UX Design 4: Ideation',
    image: certUXDesign4,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/b7c9038a440c23b77329f3c6a82a17f09491d2065d3574bb7037e9ebc10654bb',
  },
  {
    heading: 'UX Design 5: Creating Scenerios and Storyboards',
    image: certUXDesign5,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/443a78815d646eb3669025fdde0c7ae9786740da83abddcaa20a510aab363ca7',
  },
  {
    heading: 'UX Design 6: Paper Prototyping',
    image: certUXDesign6,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/68c5d57bb50b72b74431b84090b8a25c73e7ab012730962594bfddada2ce449f',
  },
  {
    heading: 'UX Design 7: Implementation Planning',
    image: certUXDesign7,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/36e47aec5f4e76002861a52bb987f69eaa84ae96082b1c3161f15b5c61c31fdf',
  },
  {
    heading: 'Interaction Design Flow',
    image: certInteractionDesignFlow,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/a77b05ab15e5ca9f5f5eefdd220da1cc707be4f64ff7cd518c3e528b33ba9c64',
  },
  {
    heading: 'UX Foundations Prototyping',
    image: certUXPrototyping,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/341090ac241ac5329a6e090b89841b6e59941b26f217c16bddabd2af5573a210',
  },
  {
    heading: 'Graphic Design',
    image: certGraphicDesign,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/b4bfb24e779c15c910fcc63a913bff12609b6e1fb02cff7fc6fc973e9fb736f4',
  },
]

const Frontend = [
  {
    heading: 'JavaScript',
    image: certJavaScript,
    linkedinUrl:
      'https://www.codecademy.com/profiles/alim.arif/certificates/705dcb15de0da4dd9d9fc4f3274b430e',
  },

  {
    heading: 'CSS Essential Training',
    image: certCSSEssentialTraining,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/b1b557edc2dfbd904a16591bc932efe3d605671d74ba506f73b937606bd01b63',
  },
  {
    heading: 'Wordpress CMBs',
    image: certCustomMetaBoxes,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/acf9fb7994cf70536e9b701b4e95fd4fc090dddb8c2aa79146dd9be0da86ee6d',
  },
  {
    heading: 'CSS: Selectors',
    image: certCSSSelectors,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/1a387c6ff317d4fd0ee1655f68c08ca2e9eb490aae5788125bcbf57c72ada4db',
  },
  {
    heading: 'ROR 6 Models',
    image: certROR6ModelsandAssociations,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/f8095ced745c50d0a20730c9e3232d506f9c0cdcb48b841d8221f66f3e5dee5b',
  },
  {
    heading: 'ROR 6 Controllers & Views',
    image: certROR6ControllersViews,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/3bf851b7d50403271308322f12748736a28dbd83825c9110595573cb3b0afb20',
  },
  {
    heading: 'ROR 6 Essential Training',
    image: certROR6EssentialTraining,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/4af725b6a15ebaf93e7b6c18fcaa874fe5198918e52658b665d0c63b3bd5cba9',
  },
  {
    heading: 'HTML Essential Training',
    image: certHTMLEssential,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/025bf8cc4f8fe537ead3ec82072d6086462afc228a4d41431fcdeba5d81e6a44',
  },
  {
    heading: 'HTTP Essential Training',
    image: certHTTPEssential,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/b0516d54ad89af712d60673c57dd6e779f9b4302db170c0aa848587e0e84308f',
  },
]

const Backend = [
  {
    heading: 'Ruby',
    image: certRuby,
    linkedinUrl:
      'https://www.codecademy.com/profiles/alim.arif/certificates/1c05e0382bc5681c824c4cbe85c126fd',
  },
  {
    heading: 'Ruby: Classes and Modules',
    image: certRubyClassesModules,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/120dca4adbadd11ab3a15a4035fdb6404539d5aec2dbe4efe0384ac5b2b27e26',
  },
  {
    heading: 'Ruby: Basics',
    image: certRubyBasics,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/1b0b282142c120e0f887b4f40ff314b0e7e97d3a1651a70c26799c68769664b4',
  },
  {
    heading: 'Databases',
    image: certDatabases,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/f6933d48cbbd5932e758cd0bfe264459cd9797e78afc2b3c9057a1fe30288583',
  },
  {
    heading: 'Regular Expressions',
    image: certRegex,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/2351993644888156867580df0a2eeac77ae75a3ea2a8b3b0911e12832b252ac9',
  },
  {
    heading: 'Git: Brances and Merges',
    image: certGitBrancesMerges,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/5a5ea530753fe48ac01b564987d48900f165c29e60b514364d642f2b821a45cb',
  },
  {
    heading: 'Linux Command Line',
    image: certLinuxCommandLine,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/555b9df4b227f2f69bcfe200946929de65e60054ba826a6b085f8b7e5ad5096d',
  },
  {
    heading: 'Git Basics',
    image: certGitBasics,
    linkedinUrl:
      'https://www.linkedin.com/learning/certificates/c7da40da5ad3cfbfe1c09ac9ea6f64e7be4b717ef4a3399acc2a048ed92aa090',
  },
]

export default function Accolades() {
  return (
    <>
      <Head>
        <title>Education & Accolades - Arif Alim</title>
        <meta
          name="description"
          content="Double degree program, BA at Wilfrid Laurier University and BCS at the University of Waterloo"
        />
      </Head>
      <SimpleLayoutAlt
        title="Double Degree education and over a decade of industry experience in UI/UX Design and Frontend Development"
        intro="Started graphic design at the age of 15 and soon progressed to user interaction and experience design. With extensive knowledge of industry standard javascript frameworks, it has helped me design with development in mind."
      >
        <div className="education my-12">
          <div className="">
            <h2 className="text-xl font-semibold tracking-normal dark:border-zinc-700 dark:text-zinc-300">
              Education
            </h2>
            <p className="pt-0 text-tiny text-blue-700 dark:text-blue-300">
              <Link href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree">
                View the Double Degree Program
              </Link>
            </p>
          </div>
          <div className="flex flex-row items-center justify-start sm:gap-12 ">
            <Link
              className="rounded-md px-4 pt-6 pb-2 dark:bg-white"
              href="https://uwaterloo.ca/"
              target="_blank"
            >
              <Image src={logoUW} alt="University of Waterloo"></Image>
            </Link>
            <Link
              className="rounded-md px-4 pt-4 pb-2 dark:bg-white"
              href="https://www.wlu.ca/"
              target="_blank"
            >
              <Image src={logoWLU} alt="University of Waterloo"></Image>
            </Link>
          </div>
        </div>

        <h2 className="mt-20 mb-8 border-b-4 pb-2 text-xl font-semibold tracking-normal dark:border-zinc-700 dark:text-zinc-300">
          Certifications
        </h2>
        <Tabs.Group
          className="mt-0"
          aria-label="Default tabs"
          style="underline"
        >
          <Tabs.Item active={true} title="UI/UX Design">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {Design.map((cert) => (
                <li key={cert.image}>
                  <div className="space-y-2">
                    <div className="auto aspect-w-3">
                      <Image
                        className="rounded-sm object-cover shadow-lg"
                        src={cert.image}
                        alt=""
                      />
                    </div>

                    <div className="space-y-2">
                      <div className=" flex flex-col justify-between space-y-1 px-1.5 text-sm font-medium dark:text-zinc-200">
                        <h3>{cert.heading}</h3>
                        <Link
                          href={cert.linkedinUrl}
                          className="flex items-center gap-3 font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
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
                  </div>
                </li>
              ))}
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Frontend">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {Frontend.map((cert) => (
                <li key={cert.image}>
                  <div className="space-y-2">
                    <div className="auto aspect-w-3">
                      <Image
                        className="rounded-sm object-cover shadow-lg"
                        src={cert.image}
                        alt=""
                      />
                    </div>

                    <div className="space-y-2">
                      <div className=" flex flex-col justify-between space-y-1 px-1.5 text-sm font-medium dark:text-zinc-200">
                        <h3>{cert.heading}</h3>
                        <Link
                          href={cert.linkedinUrl}
                          className="flex items-center gap-3 font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
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
                  </div>
                </li>
              ))}
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Backend">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {Backend.map((cert) => (
                <li key={cert.image}>
                  <div className="space-y-2">
                    <div className="auto aspect-w-3">
                      <Image
                        className="rounded-sm object-cover shadow-lg"
                        src={cert.image}
                        alt=""
                      />
                    </div>

                    <div className="space-y-2">
                      <div className=" flex flex-col justify-between space-y-1 px-1.5 text-sm font-medium dark:text-zinc-200">
                        <h3>{cert.heading}</h3>
                        <Link
                          href={cert.linkedinUrl}
                          className="flex items-center gap-3 font-normal text-zinc-500 hover:text-blue-900 dark:text-zinc-400 dark:hover:text-blue-300"
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
                  </div>
                </li>
              ))}
            </ul>
          </Tabs.Item>
        </Tabs.Group>
      </SimpleLayoutAlt>
    </>
  )
}
