import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Logo preset bg
import craftCity from '@/images/projects/craftcity.png'
import tripSupport from '@/images/projects/tripsupport.png'
import bombardier from '@/images/projects/bombardier.png'
import chicasaDesign from '@/images/projects/chicasadesign.png'
import districtEatery from '@/images/projects/districteatery.png'
import equityBank from '@/images/projects/equitybank.png'
import hydroOne from '@/images/projects/hydroone.png'
import islandTraders from '@/images/projects/islandtraders.png'
import missBahamas from '@/images/projects/missbahamas.png'
import nbaRestaurant from '@/images/projects/nbarestaurant.png'
import nfcd from '@/images/projects/nfcd.png'
import serviceOntario from '@/images/projects/serviceontario.png'
import titanGroup from '@/images/projects/titangroup.png'
import urbanDining from '@/images/projects/urbandining.png'
import wolff from '@/images/projects/wolff.png'

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
    image: bombardier,
  },
  {
    id: 1,
    name: 'Craft City',
    about: 'Hard seltzer brand',
    link: {
      href: '/projects/craft-city',
      label: 'View project',
    },
    image: craftCity,
  },
  {
    id: 2,
    name: 'Trip Support',
    about: 'Online Travel Agency',
    link: {
      href: '/projects/trip-support',
      label: 'View project',
    },
    image: tripSupport,
  },
  {
    id: 3,
    name: 'Chicasa Design',
    about: 'Custom Home Builders',
    link: {
      href: '/projects/chicasa-design',
      label: 'View project',
    },
    image: chicasaDesign,
  },
  {
    id: 4,
    name: 'District Eatery',
    about: 'Chain of restaurants',
    link: {
      href: '/projects/nba-restaurant',
      label: 'View project',
    },
    image: districtEatery,
  },
  {
    id: 5,
    name: 'Equity Bank',
    about: 'Private banking Bahamas',
    link: {
      href: '/projects/equity-bank',
      label: 'View project',
    },
    image: equityBank,
  },
  {
    id: 6,
    name: 'Hydro One',
    about: 'Electricity distribution utility',
    link: {
      href: '/projects/hydro-one',
      label: 'View project',
    },
    image: hydroOne,
  },
  {
    id: 7,
    name: 'Island Traders',
    about: 'Courier service in Bahamas',
    link: {
      href: '/projects/island-traders',
      label: 'View project',
    },
    image: islandTraders,
  },
  {
    id: 8,
    name: 'Miss Bahamas',
    about: 'Bahamas beauty pageant',
    link: {
      href: '/projects/miss-bahamas',
      label: 'View project',
    },
    image: missBahamas,
  },
  {
    id: 9,
    name: 'NBA Restaurant',
    about: 'NBA courtside restaurant',
    link: {
      href: '/projects/nba-restaurant',
      label: 'View project',
    },
    image: nbaRestaurant,
  },
  {
    id: 10,
    name: 'Niagara Falls Craft Distillers',
    about: 'Spirit distillers',
    link: {
      href: '/projects/nfcd',
      label: 'View project',
    },
    image: nfcd,
  },
  {
    id: 11,
    name: 'Service Ontario',
    about: 'Government of Ontario',
    link: {
      href: '/projects/service-ontario',
      label: 'View project',
    },
    image: serviceOntario,
  },
  {
    id: 12,
    name: 'Titan Group',
    about: 'Custom home builders',
    link: {
      href: '/projects/titan-group',
      label: 'View project',
    },
    image: titanGroup,
  },
  {
    id: 13,
    name: 'Urban Dining',
    about: 'Chain of restaurants',
    link: {
      href: '/projects/urban-dining-group',
      label: 'View project',
    },
    image: urbanDining,
  },
  {
    id: 14,
    name: 'Wolff Mechanical',
    about: 'Commercial construction company',
    link: {
      href: '/projects/wolff',
      label: 'View project',
    },
    image: wolff,
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
        <div className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} unmount={false}>
              <div key={project.id}>
                <div className="rounded-4xl group relative h-[12rem] transform overflow-hidden">
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
                    className="absolute inset-0 bg-blue-50"
                    style={{ clipPath: `url(#${id}-${project.id % 3})` }}
                  >
                    <Image
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      src={project.image}
                      alt=""
                      priority
                      sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <h3 className="font-display mt-8 text-lg font-bold tracking-tight text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-base tracking-tight text-slate-700">
                  {project.about}
                </p>
                <p className="text-sm tracking-tight text-blue-900">
                  <Link href={project.link.href}>{project.link.label}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </section>
  )
}
