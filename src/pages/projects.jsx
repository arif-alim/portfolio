import Image from 'next/future/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoBombardier from '@/images/logos/bombardier-icon.svg'
import logoTripSupport from '@/images/logos/tripsupport-icon.svg'
import logoHydroone from '@/images/logos/hydroone-icon.svg'
import logoUrbanDiningGroup from '@/images/logos/urbanDiningGroup-logo.svg'
import logoOntario from '@/images/logos/serviceOntario-icon.svg'
import logoAirbus from '@/images/logos/airbus-icon.svg'
import logoPerfectone from '@/images/logos/perfectone-logo.svg'
import logoMissBahamas from '@/images/logos/missBahamas-logo.svg'
import logoEquityBankBahamas from '@/images/logos/equityBankBahamas-logo.svg'
import logoChicasaDesign from '@/images/logos/chicasaDesign-logo.svg'

const projects = [
  {
    name: 'Trip Support',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/trip-support',
      label: 'View project',
    },
    logo: logoTripSupport,
  },
  {
    name: 'Bombardier',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/bombardier',
      label: 'View project',
    },
    logo: logoBombardier,
  },
  {
    name: 'Hydro One',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    logo: logoHydroone,
  },
  {
    name: 'Service Ontario',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's",
    link: {
      href: '/projects/ddr',
      label: 'View project',
    },
    logo: logoOntario,
  },
  {
    name: 'Airbus',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/airbus',
      label: 'View project',
    },
    logo: logoAirbus,
  },
  {
    name: 'Urban Dining Group',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    logo: logoUrbanDiningGroup,
  },
  {
    name: 'Perfec-tone',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/perfec-tone',
      label: 'View project',
    },
    logo: logoPerfectone,
  },
  {
    name: 'Miss Bahamas Organization',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/miss-bahamas',
      label: 'View project',
    },
    logo: logoMissBahamas,
  },
  {
    name: 'Equity Bank Bahamas',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/equity-bank-bahamas',
      label: 'View project',
    },
    logo: logoEquityBankBahamas,
  },
  {
    name: 'Chicasa Design',
    description:
      "Analyzed user stories to create user affinity map and user-flow with figjam. Designed mySmartRouter from scratch and expanded Bombardier’s components and revamped existing ones. Bombarider's myServiceVisit team lead Ricardo loved the work I did for mySmartRouter and requested I work with him on myServiceVisit. Refactored designed by removing deep nesting and creating base components to build higher level components and simplified it by using component properties to reduce the number of component variants.",
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    logo: logoChicasaDesign,
  },
]

// function RightArrowIcon(props) {
//   return (
//     <div className="pl-4">
//       <svg
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//         {...props}
//         width="7"
//         height="auto"
//       >
//         <path
//           d="M1.90283 0L0 1.88L6.18084 8L0 14.12L1.90283 16L10 8L1.90283 0Z"
//           fill="currentColor"
//         />
//       </svg>
//     </div>
//   )
// }

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
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/* <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"> */}
              <div className="justify-left relative z-10 flex w-auto rounded-full  ring-zinc-200  dark:bg-zinc-300 dark:ring-0  ">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-16 w-auto"
                  unoptimized
                />
              </div>
              <h2 className=" mt-6 text-lg font-bold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <div className="line-clamp-4">
                <Card.Description>{project.description}</Card.Description>
              </div>
              <p className=" relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-slate-700 dark:text-zinc-200">
                <span className="ml-2 leading-none">{project.link.label}</span>
                <LinkIcon className="ml-3 mt-[2px] h-4 flex-none" />
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
