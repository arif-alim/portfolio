import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

// Logo
import logoBombardier from '@/images/projects/BombardierLogo.svg'
import logoChicasaDesign from '@/images/projects/ChicasaDesign.svg'
import logoCraftCity from '@/images/projects/CraftCity.svg'
import logoDistrictEatery from '@/images/projects/DistrictEatery.svg'
import logoEquityBank from '@/images/projects/EquityBank.svg'
import logoHydroOne from '@/images/projects/HydroOneLogo.svg'
import logoIslandTraders from '@/images/projects/IslandTraders.svg'
import logoMissBahamas from '@/images/projects/MissBahamas.svg'
import logoNBARestaurant from '@/images/projects/NBARestaurant.svg'
import logoNFCD from '@/images/projects/NFCD.svg'
import logoPerfectone from '@/images/projects/Perfectone.svg'
import logoServiceOntario from '@/images/projects/ServiceOntario.svg'
import logoTitanGroup from '@/images/projects/TitanGroup.svg'
import logoTripSupport from '@/images/projects/TripSupportLogo.svg'
import logoUrbanDining from '@/images/projects/UrbanDiningGroup.svg'
import lightWolff from '@/images/projects/Wolff.svg'
// Logo Light
import lightBombardier from '@/images/projects/BombardierLogo-Light.svg'
import lightChicasaDesign from '@/images/projects/ChicasaDesign-Light.svg'
import lightCraftCity from '@/images/projects/CraftCity-Light.svg'
import lightDistrictEatery from '@/images/projects/DistrictEatery-Light.svg'
import lightEquityBank from '@/images/projects/EquityBank-Light.svg'
import lightHydroOne from '@/images/projects/HydroOneLogo-Light.svg'
import lightIslandTraders from '@/images/projects/IslandTraders-Light.svg'
import lightMissBahamas from '@/images/projects/MissBahamas-Light.svg'
import lightNBARestaurant from '@/images/projects/NBARestaurant-Light.svg'
import lightNFCD from '@/images/projects/NFCD-Light.svg'
import lightPerfectone from '@/images/projects/Perfectone-Light.svg'
import lightServiceOntario from '@/images/projects/ServiceOntario-Light.svg'
import lightTitanGroup from '@/images/projects/TitanGroup-Light.svg'
import lightTripSupport from '@/images/projects/TripSupportLogo-Light.svg'
import lightUrbanDining from '@/images/projects/UrbanDiningGroup-Light.svg'
// Logo Dark
// import darkBombardier from '@/images/projects/BombardierLogo-Dark.svg'
// import darkChicasaDesign from '@/images/projects/ChicasaDesign-Dark.svg'
// import darkCraftCity from '@/images/projects/CraftCity-Dark.svg'
// import darkDistrictEatery from '@/images/projects/DistrictEatery-Dark.svg'
// import darkEquityBank from '@/images/projects/EquityBank-Dark.svg'
// import darkHydroOne from '@/images/projects/HydroOneLogo-Dark.svg'
// import darkIslandTraders from '@/images/projects/IslandTraders-Dark.svg'
// import darkMissBahamas from '@/images/projects/MissBahamas-Dark.svg'
// import darkNBARestaurant from '@/images/projects/NBARestaurant-Dark.svg'
// import darkNFCD from '@/images/projects/NFCD-Dark.svg'
// import darkPerfectone from '@/images/projects/Perfectone-Dark.svg'
// import darkServiceOntario from '@/images/projects/ServiceOntario-Dark.svg'
// import darkTitanGroup from '@/images/projects/TitanGroup-Dark.svg'
// import darkTripSupport from '@/images/projects/TripSupportLogo-Dark.svg'
// import darkUrbanDining from '@/images/projects/UrbanDiningGroup-Dark.svg'
import darkWolff from '@/images/projects/Wolff-Dark.svg'

const projects = [
  {
    company: 'Trip Support',
    title: 'Lead UI/UX Designer, Front-end Developer',
    sow: 'Created high-fidelity prototypes with Sketch, Figma and Axure. Converted digital assets to vector files and redesigned footer logos with Illustrator. Used Photoshop to edit photos / images and adjusted resolution and applied lossless compress to further reduce file size to optimize performance.',
    link: {
      href: '/projects/trip-support',
      label: 'View project',
    },
    logoLight: lightTripSupport,
  },
  {
    company: 'Bombardier',
    title: 'Sr. UI Designer',
    sow: 'Worked on MySmartRouter and MyPrinciple mobile application screens ',
    link: {
      href: '/projects/bombardier',
      label: 'View project',
    },
    logoLight: lightBombardier,
  },
  {
    company: 'Service Ontario',
    title: 'UI/UX Design',
    sow: 'Assigend to the Digital Dealership Registration as the Sr. UI Architect. Responsible for the user interaction and user experience design.',
    link: {
      href: '/projects/service-ontario',
      label: 'View project',
    },
    logoLight: lightServiceOntario,
  },
  {
    company: 'Hydro One',
    title: 'UI/UX Design',
    sow: 'Applied different variations of my design thinking process to conduct user research to address user pain points.',
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    logoLight: lightHydroOne,
  },
  // {
  //   company: 'Airbus',
  //   title: 'UI/UX Design',
  //   sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
  //   link: {
  //     href: '/projects/airbus',
  //     label: 'View project',
  //   },
  //   logoLight: lightAirbus,
  // },
  {
    company: 'NBA Courtside Restaurant',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightNBARestaurant,
  },
  {
    company: 'Miss Bahamas',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/miss-bahamas',
      label: 'View project',
    },
    logoLight: lightMissBahamas,
  },
  {
    company: 'Urban Dining Group',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    logoLight: lightUrbanDining,
  },
  {
    company: 'Titan Group',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightTitanGroup,
  },
  {
    company: 'Chicasa Design',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightChicasaDesign,
  },

  {
    company: 'Craft City Seltzer',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightCraftCity,
  },
  {
    company: 'District Eatery',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightDistrictEatery,
  },
  {
    company: 'Niagara Falls Craft Distillers',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightNFCD,
  },
  {
    company: 'Island Traders',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logoLight: lightIslandTraders,
  },
  {
    company: 'Perfec-tone',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/perfec-tone',
      label: 'View project',
    },
    logoLight: lightPerfectone,
  },
  {
    company: 'Equity Bank',
    title: 'UI/UX Design',
    sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/equity-bank-bahamas',
      label: 'View project',
    },
    logoLight: lightEquityBank,
  },
  // {
  //   company: 'Bluestone BID',
  //   title: 'UI/UX Design',
  //   sow: "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
  //   link: {
  //     href: '/projects/chicasa-design',
  //     label: 'View project',
  //   },
  //   logoLight: lightTitanGroup,
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M1.90283 0L0 1.88L6.18084 8L0 14.12L1.90283 16L10 8L1.90283 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Arif Alim</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.link}
              className="relative flex items-center gap-2 space-x-3 rounded-lg
              border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500
              focus-within:ring-offset-2 hover:border-gray-400 dark:border-zinc-900 dark:bg-zinc-800 dark:hover:border-zinc-700"
            >
              <div className="h-full flex-shrink-0 rounded-lg bg-white px-2 py-2">
                <Image
                  className="h-full w-16 sm:w-20"
                  src={project.logo}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <h2 className=" text-md font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                    {project.company}
                  </h2>
                  <p className="text-sm font-normal text-zinc-500 dark:text-zinc-300">
                    {project.title}
                  </p>
                  <p className="text-sm text-zinc-700 line-clamp-2 dark:text-zinc-50">
                    {project.sow}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.company}>
              {/* <div className="w-fullitems-center relative z-10 flex h-auto w-full justify-start"> */}
              <div className="w-fullitems-center relative z-10 flex h-auto w-60 items-center justify-start rounded-lg dark:bg-zinc-100">
                <Image
                  src={project.logoLight}
                  alt=""
                  className="h-20 w-auto p-2"
                  unoptimized
                />
              </div>
              <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>
                  {project.company}
                </Card.Link>
              </h2>

              <p className="relative z-10 mt-2 text-sm text-zinc-600 line-clamp-2 dark:text-zinc-400">
                {project.sow}
              </p>
              <p className="relative z-10 mt-2 flex flex-row items-center gap-4 text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <span>{project.link.label}</span>
                <LinkIcon className="mt-1.5 h-4 w-4 flex-none" />
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
