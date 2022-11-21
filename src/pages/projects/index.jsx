import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Logo preset bg
import logoCraftCity from '@/images/projects/craftcity.png'
import logoTripSupport from '@/images/projects/tripsupport.png'
import logoBombardier from '@/images/projects/bombardier.png'
import logoChicasaDesign from '@/images/projects/chicasadesign.png'
import logoDistrictEatery from '@/images/projects/districteatery.png'
import logoEquityBank from '@/images/projects/equitybank.png'
import logoHydroOne from '@/images/projects/hydroone.png'
import logoIslandTraders from '@/images/projects/islandtraders.png'
import logoMissBahamas from '@/images/projects/missbahamas.png'
import logoNBARestaurant from '@/images/projects/nbarestaurant.png'
import logoNFCD from '@/images/projects/nfcd.png'
import logoServiceOntario from '@/images/projects/serviceontario.png'
import logoTitanGroup from '@/images/projects/titangroup.png'
import logoUrbanDining from '@/images/projects/urbandining.png'
import logoWolff from '@/images/projects/wolff.png'
import logoCooper from '@/images/projects/cooper.png'
import logoTritecSolutions from '@/images/projects/tritecsolutions.png'
import logoLieberGroup from '@/images/projects/liebergroup.png'
import logoGabbys from '@/images/projects/gabbys.png'
import logoHeyLucys from '@/images/projects/heylucys.png'
import logoPerfectone from '@/images/projects/perfectone.png'
import logoAirbus from '@/images/projects/airbus.png'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const projects = [
  {
    id: 0,
    name: 'Bombardier',
    about: 'Manufacturer of business jets',
    link: {
      href: '/projects/bombardier',
      label: 'View project',
    },
    image: logoBombardier,
  },
  {
    id: 1,
    name: 'Trip Support',
    about: 'Online Travel Agency',
    link: {
      href: '/projects/trip-support',
      label: 'View project',
    },
    image: logoTripSupport,
  },
  {
    id: 2,
    name: 'Service Ontario',
    about: 'Government of Ontario',
    link: {
      href: '/projects/service-ontario',
      label: 'View project',
    },
    image: logoServiceOntario,
  },
  {
    id: 3,
    name: 'Hydro One',
    about: 'Electricity distribution utility',
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    image: logoHydroOne,
  },
  // {
  //   id: 20,
  //   name: 'Airbus',
  //   about: 'Aerospace Industry',
  //   link: {
  //     href: '/projects/airbus',
  //     label: 'View project',
  //   },
  //   image: logoAirbus,
  // },
  {
    id: 21,
    name: 'Perfec-tone',
    about: 'Aerospace Industry',
    link: {
      href: '/projects/perfec-tone',
      label: 'View project',
    },
    image: logoPerfectone,
  },
  // {
  //   id: 4,
  //   name: 'NBA Restaurant',
  //   about: 'NBA courtside restaurant',
  //   link: {
  //     href: '/projects/nba-restaurant',
  //     label: 'View project',
  //   },
  //   image: logoNBARestaurant,
  // },
  {
    id: 5,
    name: 'Chicasa Design',
    about: 'Custom Home Builders',
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    image: logoChicasaDesign,
  },
  {
    id: 7,
    name: 'Craft City',
    about: 'Hard seltzer brand',
    link: {
      href: '/projects/craft-city',
      label: 'View project',
    },
    image: logoCraftCity,
  },
  {
    id: 15,
    name: 'Cooper',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/projects/cooper',
      label: 'View project',
    },
    image: logoCooper,
  },
  {
    id: 6,
    name: 'Titan Group',
    about: 'Custom home builders',
    link: {
      href: '/projects/titan-group',
      label: 'View project',
    },
    image: logoTitanGroup,
  },
  {
    id: 8,
    name: 'Miss Bahamas',
    about: 'Bahamas beauty pageant',
    link: {
      href: '/projects/miss-bahamas',
      label: 'View project',
    },
    image: logoMissBahamas,
  },

  // {
  //   id: 9,
  //   name: 'District Eatery',
  //   about: 'Chain of restaurants',
  //   link: {
  //     href: '/projects/district-eatery',
  //     label: 'View project',
  //   },
  //   image: logoDistrictEatery,
  // },
  {
    id: 10,
    name: 'Equity Bank',
    about: 'Private banking Bahamas',
    link: {
      href: '/projects/equity-bank',
      label: 'View project',
    },
    image: logoEquityBank,
  },
  {
    id: 11,
    name: 'Island Traders',
    about: 'Courier service in Bahamas',
    link: {
      href: '/projects/island-traders',
      label: 'View project',
    },
    image: logoIslandTraders,
  },
  {
    id: 12,
    name: 'Niagara Falls Craft Distillers',
    about: 'Spirit distillers',
    link: {
      href: '/projects/nfcd',
      label: 'View project',
    },
    image: logoNFCD,
  },

  // {
  //   id: 13,
  //   name: 'Urban Dining',
  //   about: 'Chain of restaurants',
  //   link: {
  //     href: '/projects/urban-dining',
  //     label: 'View project',
  //   },
  //   image: logoUrbanDining,
  // },
  // {
  //   id: 14,
  //   name: 'Wolff Mechanical',
  //   about: 'Construction company',
  //   link: {
  //     href: '/projects/wolff',
  //     label: 'View project',
  //   },
  //   image: logoWolff,
  // },
  {
    id: 16,
    name: 'Tritec Solutions',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/projects/tritec-solutions',
      label: 'View project',
    },
    image: logoTritecSolutions,
  },
  {
    id: 17,
    name: 'Lieber Group',
    about: 'Uber like app for Bahamas',
    link: {
      href: '/projects/lieber',
      label: 'View project',
    },
    image: logoLieberGroup,
  },
  {
    id: 18,
    name: "Gabby's",
    about: 'Restaurant',
    link: {
      href: '/projects/gabbys',
      label: 'View project',
    },
    image: logoGabbys,
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
    <section id="speakers" aria-labelledby="speakers-title">
      <ImageClipPaths id={id} />

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
        <div className="mt-10 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16  lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} unmount={false}>
              <div key={project.id}>
                <Link href={project.link.href}>
                  <div className="rounded-4xl group relative h-36 transform overflow-hidden ">
                    <div
                      className={clsx(
                        'rounded-4xl absolute top-0 left-0 right-4 bottom-6 border transition duration-300 group-hover:scale-95 xl:right-6',
                        [
                          'border-blue-300',
                          'border-indigo-300',
                          'border-sky-300',
                        ][project.id % 3]
                      )}
                    />
                    <div
                      className="absolute inset-0 my-auto bg-blue-50"
                      style={{ clipPath: `url(#${id}-${project.id % 3})` }}
                    >
                      <div className="flex h-full w-full flex-row items-center p-12 align-middle sm:p-4">
                        <Image
                          className=" transition duration-300 group-hover:scale-110"
                          src={project.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display mt-8 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="text-sm tracking-tight text-zinc-500 dark:font-light dark:text-zinc-100">
                    {project.about}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </section>
  )
}
