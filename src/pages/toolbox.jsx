import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Design Tools Icons
import iconFigma from '@/images/design/tool-figma.svg'
import iconAfterEffects from '@/images/design/tool-after-effects.svg'
import iconAxure from '@/images/design/tool-axure.svg'
import iconExperience from '@/images/design/tool-experience.svg'
import iconIllustrator from '@/images/design/tool-illustrator.svg'
import iconInDesign from '@/images/design/tool-indesign.svg'
import iconInvision from '@/images/design/tool-invision.svg'
import iconMiro from '@/images/design/tool-miro.svg'
import iconMural from '@/images/design/tool-mural.svg'
import iconPhotoshop from '@/images/design/tool-photoshop.svg'
import iconSketch from '@/images/design/tool-sketch.svg'

// DevOPS Tools Icons
import iconCPlusPlus from '@/images/frontend/tool-cplusplus.svg'
import iconCSS3 from '@/images/frontend/tool-css3.svg'
import iconDjango from '@/images/frontend/tool-django.svg'
import iconGraphQL from '@/images/frontend/tool-graphql.svg'
import iconHTML5 from '@/images/frontend/tool-html5.svg'
import iconJS from '@/images/frontend/tool-js.svg'
import iconMongoDB from '@/images/frontend/tool-mongodb.svg'
import iconNextJS from '@/images/frontend/tool-nextjs.svg'
import iconNodeJS from '@/images/frontend/tool-nodejs.svg'
import iconNPM from '@/images/frontend/tool-npm.svg'
import iconPython from '@/images/frontend/tool-python.svg'
import iconRails from '@/images/frontend/tool-rails.svg'
import iconReact from '@/images/frontend/tool-react.svg'
import iconRuby from '@/images/frontend/tool-ruby.svg'
import iconRust from '@/images/frontend/tool-rust.svg'
import iconSass from '@/images/frontend/tool-sass.svg'
import iconTailwindCSS from '@/images/frontend/tool-tailwindcss.svg'
import iconVercel from '@/images/frontend/tool-vercel.svg'

const DesTools = [
  {
    name: 'Figma',
    description:
      'Figma connects everyone in the design process so teams can deliver better products, faster.',
    link: {
      href: 'https://www.figma.com/',
      label: 'Visit website',
    },
    imageUrl: iconFigma,
  },
  {
    name: 'Sketch',
    description:
      'Sketch gives you all the tools you need for a truly collaborative design process. From early ideas to pixel-perfect artwork, playable prototypes and developer handoff. It all starts here.',
    link: {
      href: 'https://www.sketch.com/',
      label: 'Visit website',
    },
    imageUrl: iconSketch,
  },
  {
    name: 'Axure',
    description:
      'Axure RP is the only UX tool that gives UX professionals the power to build realistic, functional prototypes.',
    link: {
      href: 'https://www.axure.com/',
      label: 'Visit website',
    },
    imageUrl: iconAxure,
  },
  {
    name: 'Miro',
    description:
      'The online collaborative whiteboard platform to bring teams together, anytime, anywhere.',
    link: {
      href: 'https://miro.com/',
      label: 'Visit website',
    },
    imageUrl: iconMiro,
  },
  {
    name: 'Mural',
    description:
      'MURAL connects teams with a digital whiteboard and collaboration features designed to inspire innovation.',
    link: {
      href: 'https://www.mural.co/',
      label: 'Visit website',
    },
    imageUrl: iconMural,
  },
  {
    name: 'Invision',
    description:
      'InVision’s Freehand has everything your team needs to bring together people, tools, and work',
    link: {
      href: 'https://www.invisionapp.com/',
      label: 'Visit website',
    },
    imageUrl: iconInvision,
  },
  {
    name: 'After Effects',
    description:
      'It’s easier than you think to master motion design with After Effects.',
    link: {
      href: 'https://www.adobe.com/ca/products/aftereffects.html',
      label: 'Visit website',
    },
    imageUrl: iconAfterEffects,
  },
  {
    name: 'Experience Design',
    description:
      'Lifelike in every sense. Create stunningly real UI/UX designs and stand out from the rest.',
    link: {
      href: 'https://www.adobe.com/ca/products/xd.html',
      label: 'Visit website',
    },
    imageUrl: iconExperience,
  },
  {
    name: 'Illustrator',
    description:
      'With Illustrator, anyone can create logos, packaging designs, web graphics, and more.',
    link: {
      href: 'https://www.adobe.com/ca/products/illustrator.html',
      label: 'Visit website',
    },
    imageUrl: iconIllustrator,
  },
  {
    name: 'Photoshop',
    description:
      'Combine, retouch, and remix your pics. Add new color to your old black-and-whites. Make unwanted stuff disappear. Or turn a boring background into an exotic paradise. With Photoshop, everyone can.',
    link: {
      href: 'https://www.adobe.com/ca/products/photoshop.html',
      label: 'Visit website',
    },
    imageUrl: iconPhotoshop,
  },
  {
    name: 'InDesign',
    description:
      'Create and publish books, digital magazines, eBooks, posters, and interactive PDFs with InDesign.',
    link: {
      href: 'https://www.adobe.com/ca/products/indesign.html',
      label: 'Visit website',
    },
    imageUrl: iconInDesign,
  },
]

const Frontend = [
  {
    name: 'HTML5',
    description:
      'The term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the HTML Living Standard, along with JavaScript APIs to enhance storage, multimedia, and hardware access.',
    link: {
      href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      label: 'Visit website',
    },
    imageUrl: iconHTML5,
  },
  {
    name: 'CSS3',
    description:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    link: {
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      label: 'Visit website',
    },
    imageUrl: iconCSS3,
  },
  {
    name: 'JavaScript',
    description:
      "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community. Because JavaScript is a great language for coding beginners, we've gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running. With the help of community members contributing content to the site, JavaScript.com aims to also keep more advanced developers up to date on news, frameworks, and libraries.",
    link: {
      href: 'https://www.javascript.com/',
      label: 'Visit website',
    },
    imageUrl: iconJS,
  },
  {
    name: 'Next JS',
    description:
      'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    link: {
      href: 'https://nextjs.org/',
      label: 'Visit website',
    },
    imageUrl: iconNextJS,
  },
  {
    name: 'NPM',
    description:
      "We're npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
    link: {
      href: 'https://www.npmjs.com/',
      label: 'Visit website',
    },
    imageUrl: iconNPM,
  },
  {
    name: 'Ruby on Rails',
    description:
      'Learn just what you need to get started, then keep leveling up as you go. Ruby on Rails scales from HELLO WORLD to IPO.',
    link: {
      href: 'https://rubyonrails.org/',
      label: 'Visit website',
    },
    imageUrl: iconRails,
  },
  {
    name: 'DJango',
    description:
      'Django makes it easier to build better web apps more quickly and with less code.',
    link: {
      href: 'https://www.djangoproject.com/',
      label: 'Visit website',
    },
    imageUrl: iconDjango,
  },
  {
    name: 'React JS',
    description: 'A JavaScript library for building user interfaces',
    link: {
      href: 'https://reactjs.org/',
      label: 'Visit website',
    },
    imageUrl: iconReact,
  },
  {
    name: 'Sass',
    description:
      'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    link: {
      href: 'https://sass-lang.com/',
      label: 'Visit website',
    },
    imageUrl: iconSass,
  },
  {
    name: 'Tailwind CSS',
    description:
      'Rapidly build modern websites without ever leaving your HTML.',
    link: {
      href: 'https://tailwindcss.com/',
      label: 'Visit website',
    },
    imageUrl: iconTailwindCSS,
  },
  {
    name: 'Vercel',
    description:
      'Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
    link: {
      href: 'https://vercel.com/',
      label: 'Visit website',
    },
    imageUrl: iconVercel,
  },
]

const Backend = [
  {
    name: 'Python',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    link: {
      href: 'https://www.python.org/',
      label: 'Visit website',
    },
    imageUrl: iconPython,
  },
  {
    name: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
    link: {
      href: 'https://www.ruby-lang.org/en/',
      label: 'Visit website',
    },
    imageUrl: iconRuby,
  },
  {
    name: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
    link: {
      href: 'https://graphql.org/',
      label: 'Visit website',
    },
    imageUrl: iconGraphQL,
  },
  {
    name: 'Rust',
    description:
      'A language empowering everyone to build reliable and efficient software.',
    link: {
      href: 'https://www.rust-lang.org/',
      label: 'Visit website',
    },
    imageUrl: iconRust,
  },
  // {
  //   name: 'C++',
  //   description: 'Hello World',
  //   link: {
  //     href: 'https://www.figma.com/',
  //     label: 'Visit website',
  //   },
  //   imageUrl: iconCPlusPlus,
  // },
]

export default function Toolbox() {
  return (
    <>
      <Head>
        <title>Toolbox - Arif Alim</title>
        <meta
          name="description"
          content="UI/UX, frontend, and backend languages, software and frameworks I use."
        />
      </Head>
      <SimpleLayout
        title="Softare, languages, and frameworks I prefer to use to create magical things!"
        intro="I get asked a lot about the things I use for graphic, interaction and user experience design. Also, I get asked about my frontend and backend tools. I've provided a list of software, language and frameworks I currently use."
      >
        <div className="space-y-20">
          <div className="space-y-10">
            <h2 className="border-b-4 pb-2 text-md font-semibold tracking-normal dark:border-zinc-700 dark:text-zinc-300">
              UI/UX Design tools
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {DesTools.map((des) => (
                <div
                  key={des.name}
                  className="relative flex items-center space-x-6 rounded-lg border  bg-white px-6 pt-4 pb-3 shadow-sm  hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <div className=" relative w-1/6 flex-shrink bg-cover sm:h-auto sm:w-10 ">
                    <Image src={des.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={des.link.href}
                      target="_blank"
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
                        {des.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-300">
                        {des.description}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="border-b-4 pb-2 text-md font-semibold tracking-normal dark:border-zinc-700 dark:text-zinc-300">
              Front-end Development
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {Frontend.map((front) => (
                <div
                  key={front.name}
                  className="relative flex items-center space-x-6 rounded-lg border  bg-white px-6 pt-4 pb-3 shadow-sm  hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <div className=" relative w-1/6 flex-shrink bg-cover sm:h-auto sm:w-10 ">
                    <Image src={front.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={front.link.href}
                      target="_blank"
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
                        {front.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-300">
                        {front.description}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="border-b-4 pb-2 text-md font-semibold tracking-normal dark:border-zinc-700 dark:text-zinc-300">
              Backend Development
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {Backend.map((back) => (
                <div
                  key={back.name}
                  className="relative flex items-center space-x-6 rounded-lg border  bg-white px-6 pt-4 pb-3 shadow-sm  hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600"
                >
                  <div className=" relative w-1/6 flex-shrink bg-cover sm:h-auto sm:w-10 ">
                    <Image src={back.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={back.link.href}
                      target="_blank"
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium leading-snug text-zinc-900 dark:text-zinc-50">
                        {back.name}
                      </p>
                      <p className="truncate text-xs text-zinc-500 dark:text-zinc-300">
                        {back.description}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
