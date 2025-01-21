import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Logo preset bg
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

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const portfolio = [
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
  },
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
  },
  {
    id: 3,
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
    id: 4,
    name: 'Service Ontario',
    about: 'Government of Ontario',
    link: {
      href: '/portfolio/service-ontario',
      label: 'View project',
    },
    imageLight: logoServiceOntarioLight,
    imageDark: logoServiceOntarioDark,
  },
  {
    id: 5,
    name: 'Hydro One',
    about: 'Electricity distribution utility',
    link: {
      href: '/portfolio/hydro-one',
      label: 'View project',
    },
    imageLight: logoHydroOneLight,
    imageDark: logoHydroOneDark,
  },
  {
    id: 6,
    name: 'Perfec-tone',
    about: 'Aerospace Industry',
    link: {
      href: '/portfolio/perfec-tone',
      label: 'View project',
    },
    imageLight: logoPerfectoneLight,
    imageDark: logoPerfectoneDark,
  },
  {
    id: 7,
    name: 'Chicasa Design',
    about: 'Custom Home Builders',
    link: {
      href: '/portfolio/chicasa-design',
      label: 'View project',
    },
    imageLight: logoChicasaDesignLight,
    imageDark: logoChicasaDesignDark,
  },
  {
    id: 8,
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
    id: 9,
    name: 'Cooper',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/portfolio/cooper',
      label: 'View project',
    },
    imageLight: logoCooperLight,
    imageDark: logoCooperDark,
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
    name: 'District Eatery',
    about: 'Chain of restaurants',
    link: {
      href: '/portfolio/district-eatery',
      label: 'View project',
    },
    imageLight: logoDistrictEateryLight,
    imageDark: logoDistrictEateryDark,
  },
  {
    id: 13,
    name: 'Equity Bank',
    about: 'Private banking Bahamas',
    link: {
      href: '/portfolio/equity-bank',
      label: 'View project',
    },
    imageLight: logoEquityBankLight,
    imageDark: logoEquityBankDark,
  },
  {
    id: 14,
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
    id: 15,
    name: 'Niagara Falls Craft Distillers',
    about: 'Spirit distillers',
    link: {
      href: '/portfolio/nfcd',
      label: 'View project',
    },
    imageLight: logoNFCDLight,
    imageDark: logoNFCDDark,
  },
  {
    id: 16,
    name: 'Urban Dining',
    about: 'Chain of restaurants',
    link: {
      href: '/portfolio/urban-dining',
      label: 'View project',
    },
    imageLight: logoUrbanDiningLight,
    imageDark: logoUrbanDiningDark,
  },
  {
    id: 17,
    name: 'Tritec Solutions',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/portfolio/tritec-solutions',
      label: 'View project',
    },
    imageLight: logoTritecSolutionsLight,
    imageDark: logoTritecSolutionsDark,
  },
  {
    id: 18,
    name: 'Lieber Group',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/portfolio/lieber',
      label: 'View project',
    },
    imageLight: logoLieberGroupLight,
    imageDark: logoLieberGroupDark,
  },
  {
    id: 19,
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

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function Speakers() {
  let id = useId()

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>portfolio - Arif Alim</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="My portfolio"
        intro="I have had the privilege of contributing to a wide range of projects, including high-profile government initiatives, where I applied my design expertise and problem-solving skills to craft intuitive, user-focused interfaces that balance user needs with technical requirements. Collaborating closely with back-end engineers, I ensure seamless integration, while my dedication to accessibility guarantees that every website and application I design is both highly functional and optimized for performance and usability."
      >
        <div className="mt-10 grid grid-cols-1 items-start gap-x-6 gap-y-10 lg:grid-cols-3">
          {portfolio.map((project) => (
            <div key={project.id} unmount={false}>
              <div key={project.id}>
                <Link href={project.link.href}>
                  <div className="rounded-4xl group relative h-[196px] transform overflow-hidden ">
                    <div
                      className={clsx(
                        'rounded-4xl absolute bottom-0 left-0 right-0 top-0 border transition duration-300 group-hover:scale-95 ',
                        [
                          // 'border-emerald-300',
                          // 'border-indigo-300',
                          // 'border-sky-300',
                          // 'border-rose-300',
                        ][project.id % 5]
                      )}
                    />
                    <div
                      className="absolute inset-0 my-auto "
                      // className="absolute inset-0 my-auto bg-zinc-100 dark:bg-zinc-800"
                      // style={{ clipPath: `url(#${id}-${project.id % 3})` }}
                    >
                      <div className="flex h-full w-full flex-row items-center p-12 align-middle sm:p-4">
                        <Image
                          className=" transition duration-300 group-hover:scale-110 dark:hidden"
                          src={project.imageLight}
                          alt=""
                          width={260}
                          height={260}
                          layout="responsive"
                        />
                        <Image
                          className=" hidden transition duration-300 group-hover:scale-110 dark:block"
                          src={project.imageDark}
                          alt=""
                          width={260}
                          height={260}
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="text-zinc-2000 text-sm dark:font-light dark:text-zinc-100">
                    {project.about}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </div>
  )
}
