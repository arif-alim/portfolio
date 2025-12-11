import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useId } from 'react'

import { SimpleLayout } from '@/components/SimpleLayout'
import Badge from '@/components/Badge'

import logoCraftCityLight from '@/images/projects/craftcity-logo-light.png'
import logoCraftCityDark from '@/images/projects/craftcity-logo-dark.png'
import logoCooperatorsLight from '@/images/projects/cooperators-logo-light.png'
import logoCooperatorsDark from '@/images/projects/cooperators-logo-dark.png'
import logoTripSupportLight from '@/images/projects/tripsupport-logo-light.png'
import logoTripSupportDark from '@/images/projects/tripsupport-logo-dark.png'
import logoBombardierLight from '@/images/projects/bombardier-logo-light.png'
import logoBombardierDark from '@/images/projects/bombardier-logo-dark.png'
import logoChicasaDesignLight from '@/images/projects/chicasadesign-logo-light.png'
import logoChicasaDesignDark from '@/images/projects/chicasadesign-logo-dark.png'
import logoDistrictEateryLight from '@/images/projects/district-logo-light.png'
import logoDistrictEateryDark from '@/images/projects/district-logo-dark.png'
import logoEquityBankLight from '@/images/projects/equitybank-logo-light.png'
import logoEquityBankDark from '@/images/projects/equitybank-logo-dark.png'
import logoHydroOneLight from '@/images/projects/hydroone-logo-light.png'
import logoHydroOneDark from '@/images/projects/hydroone-logo-dark.png'
import logoIslandTradersLight from '@/images/projects/islandtraders-logo-light.png'
import logoIslandTradersDark from '@/images/projects/islandtraders-logo-dark.png'
import logoMissBahamasLight from '@/images/projects/missbahamas-logo-light.png'
import logoMissBahamasDark from '@/images/projects/missbahamas-logo-dark.png'
import logoNFCDLight from '@/images/projects/nfcd-logo-light.png'
import logoNFCDDark from '@/images/projects/nfcd-logo-dark.png'
import logoServiceOntarioLight from '@/images/projects/serviceontario-logo-light.png'
import logoServiceOntarioDark from '@/images/projects/serviceontario-logo-dark.png'
import logoTitanGroupLight from '@/images/projects/titangroup-logo-light.png'
import logoTitanGroupDark from '@/images/projects/titangroup-logo-dark.png'
import logoUrbanDiningLight from '@/images/projects/urbandining-logo-light.png'
import logoUrbanDiningDark from '@/images/projects/urbandining-logo-dark.png'
import logoCooperLight from '@/images/projects/cooper-logo-light.png'
import logoCooperDark from '@/images/projects/cooper-logo-dark.png'
import logoTritecSolutionsLight from '@/images/projects/tritecsolutions-logo-light.png'
import logoTritecSolutionsDark from '@/images/projects/tritecsolutions-logo-dark.png'
import logoLieberGroupLight from '@/images/projects/liebergroup-logo-light.png'
import logoLieberGroupDark from '@/images/projects/liebergroup-logo-dark.png'
import logoGabbysLight from '@/images/projects/gabbys-logo-light.png'
import logoGabbysDark from '@/images/projects/gabbys-logo-dark.png'
import logoPerfectoneLight from '@/images/projects/perfectone-logo-light.png'
import logoPerfectoneDark from '@/images/projects/perfectone-logo-dark.png'
import logoManulifeLight from '@/images/projects/manulife-logo-light.png'
import logoManulifeDark from '@/images/projects/manulife-logo-dark.png'
import logoCBSALight from '@/images/projects/cbsa-logo-light.png'
import logoCBSADark from '@/images/projects/cbsa-logo-dark.png'

import clsx from 'clsx'

/* -------------------------------------------------------------------------- */
/*                                     Data                                   */
/* -------------------------------------------------------------------------- */

const CARD_BORDER_COLOR = 'border-blue-300'

const portfolio = [
  {
    id: 1,
    name: 'Manulife',
    about: 'Multinational financial services company',
    link: {
      href: '/portfolio/manulife',
      label: 'View project',
    },
    imageLight: logoManulifeLight,
    imageDark: logoManulifeDark,
    badge: { label: 'With Case Study', color: 'emerald' },
  },
  {
    id: 3,
    name: 'CBSA',
    about: 'Canadian Border Services Agency',
    link: {
      href: '/portfolio/cbsa',
      label: 'View project',
    },
    imageLight: logoCBSALight,
    imageDark: logoCBSADark,
    badge: { label: 'Case Study Coming Soon', color: 'blue' },
  },
  {
    id: 5,
    name: 'Service Ontario',
    about: 'Government of Ontario',
    link: {
      href: '/portfolio/service-ontario',
      label: 'View project',
    },
    imageLight: logoServiceOntarioLight,
    imageDark: logoServiceOntarioDark,
    badge: { label: 'Case Study Coming Soon', color: 'blue' },
  },
  {
    id: 6,
    name: 'Hydro One',
    about: 'Electricity distribution utility',
    link: {
      href: '/portfolio/hydro-one',
      label: 'View project',
    },
    imageLight: logoHydroOneLight,
    imageDark: logoHydroOneDark,
    badge: { label: 'Case Study Coming Soon', color: 'blue' },
  },
  {
    id: 2,
    name: 'Bombardier',
    about: 'Manufacturer of business jets',
    link: {
      href: '/portfolio/bombardier',
      label: 'View project',
    },
    imageLight: logoBombardierLight,
    imageDark: logoBombardierDark,
    badge: { label: 'Case Study Coming Soon', color: 'blue' },
  },
  {
    id: 0,
    name: 'Co-operators',
    about: 'Insurance company',
    link: {
      href: '/portfolio/co-operators',
      label: 'View project',
    },
    imageLight: logoCooperatorsLight,
    imageDark: logoCooperatorsDark,
    badge: { label: 'Case Study Coming Soon', color: 'blue' },
  },
  {
    id: 4,
    name: 'Trip Support',
    about: 'Online Travel Agency',
    link: {
      href: '/portfolio/trip-support',
      label: 'View project',
    },
    imageLight: logoTripSupportLight,
    imageDark: logoTripSupportDark,
  },
  {
    id: 7,
    name: 'Perfec-tone',
    about: 'Skin care brand',
    link: {
      href: '/portfolio/perfec-tone',
      label: 'View project',
    },
    imageLight: logoPerfectoneLight,
    imageDark: logoPerfectoneDark,
  },
  {
    id: 8,
    name: 'Chicasa Design',
    about: 'Custom home builders',
    link: {
      href: '/portfolio/chicasa-design',
      label: 'View project',
    },
    imageLight: logoChicasaDesignLight,
    imageDark: logoChicasaDesignDark,
  },
  {
    id: 9,
    name: 'Craft City',
    about: 'Hard seltzer brand',
    link: {
      href: '/portfolio/craft-city',
      label: 'View project',
    },
    imageLight: logoCraftCityLight,
    imageDark: logoCraftCityDark,
  },
  {
    id: 10,
    name: 'Cooper',
    about: 'Driver / delivery app for Bahamas',
    link: {
      href: '/portfolio/cooper',
      label: 'View project',
    },
    imageLight: logoCooperLight,
    imageDark: logoCooperDark,
  },
  {
    id: 11,
    name: 'Titan Group',
    about: 'Custom home builders',
    link: {
      href: '/portfolio/titan-group',
      label: 'View project',
    },
    imageLight: logoTitanGroupLight,
    imageDark: logoTitanGroupDark,
  },
  {
    id: 12,
    name: 'Miss Bahamas',
    about: 'Bahamas beauty pageant',
    link: {
      href: '/portfolio/miss-bahamas',
      label: 'View project',
    },
    imageLight: logoMissBahamasLight,
    imageDark: logoMissBahamasDark,
  },
  {
    id: 13,
    name: 'District Eatery',
    about: 'Restaurant & bar',
    link: {
      href: '/portfolio/district-eatery',
      label: 'View project',
    },
    imageLight: logoDistrictEateryLight,
    imageDark: logoDistrictEateryDark,
  },
  {
    id: 14,
    name: 'Equity Bank',
    about: 'Private banking in Bahamas',
    link: {
      href: '/portfolio/equity-bank',
      label: 'View project',
    },
    imageLight: logoEquityBankLight,
    imageDark: logoEquityBankDark,
  },
  {
    id: 15,
    name: 'Island Traders',
    about: 'Courier service in Bahamas',
    link: {
      href: '/portfolio/island-traders',
      label: 'View project',
    },
    imageLight: logoIslandTradersLight,
    imageDark: logoIslandTradersDark,
  },
  {
    id: 16,
    name: 'Niagara Falls Craft Distillers',
    about: 'Craft spirits distillery',
    link: {
      href: '/portfolio/nfcd',
      label: 'View project',
    },
    imageLight: logoNFCDLight,
    imageDark: logoNFCDDark,
  },
  {
    id: 17,
    name: 'Urban Dining',
    about: 'Restaurant group',
    link: {
      href: '/portfolio/urban-dining',
      label: 'View project',
    },
    imageLight: logoUrbanDiningLight,
    imageDark: logoUrbanDiningDark,
  },
  {
    id: 18,
    name: 'Tritec Solutions',
    about: 'IT & digital solutions',
    link: {
      href: '/portfolio/tritec-solutions',
      label: 'View project',
    },
    imageLight: logoTritecSolutionsLight,
    imageDark: logoTritecSolutionsDark,
  },
  {
    id: 19,
    name: 'Lieber Group',
    about: 'Real estate & investment',
    link: {
      href: '/portfolio/lieber',
      label: 'View project',
    },
    imageLight: logoLieberGroupLight,
    imageDark: logoLieberGroupDark,
  },
  {
    id: 20,
    name: "Gabby's",
    about: 'Restaurant',
    link: {
      href: '/portfolio/gabbys',
      label: 'View project',
    },
    imageLight: logoGabbysLight,
    imageDark: logoGabbysDark,
  },
]

/* -------------------------------------------------------------------------- */
/*                               Helper Components                            */
/* -------------------------------------------------------------------------- */

function PortfolioCard({ project }) {
  return (
    <div>
      <Link href={project.link.href}>
        <div className="rounded-4xl group relative h-[196px] transform overflow-hidden">
          {project.badge && (
            <div className="absolute right-4 top-4 z-10">
              <Badge color={project.badge.color}>{project.badge.label}</Badge>
            </div>
          )}

          {/* Blue border */}
          <div
            className={clsx(
              'rounded-4xl absolute inset-0 border transition duration-300 group-hover:scale-95',
              CARD_BORDER_COLOR
            )}
          />

          <div className="absolute inset-0 my-auto">
            <div className="flex h-full w-full items-center p-8 sm:p-6">
              {/* Light mode logo */}
              <Image
                className="transition duration-300 group-hover:scale-110 dark:hidden"
                src={project.imageLight}
                alt={`${project.name} logo`}
                width={260}
                height={260}
                layout="responsive"
              />

              {/* Dark mode logo */}
              <Image
                className="hidden transition duration-300 group-hover:scale-110 dark:block"
                src={project.imageDark}
                alt={`${project.name} logo`}
                width={260}
                height={260}
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <h3 className="font-display mt-2 text-base font-semibold">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-300">
          {project.about}
        </p>
      </Link>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function PortfolioPage() {
  const id = useId() // currently not used, but kept if you later re-enable clipPaths

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Portfolio - Arif Alim</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>

      <SimpleLayout
        title="My portfolio"
        intro="I’ve worked across government, enterprise, aviation, and product teams, creating intuitive, user-centered interfaces that balance usability with technical feasibility. By partnering closely with engineers, I ensure smooth implementation, while my focus on accessibility and performance delivers inclusive, reliable experiences."
      >
        <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-10 lg:grid-cols-3">
          {portfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} clipBaseId={id} />
          ))}
        </div>
      </SimpleLayout>
    </div>
  )
}
