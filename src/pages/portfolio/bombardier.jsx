import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { CaseStudy } from '@/components/CaseStudy'

// MySmartRouter
import msScreen1 from '@/images/projects/bombardier/mySmartRouter/dashboard1.jpg'
import msScreen2 from '@/images/projects/bombardier/mySmartRouter/dashboard2.jpg'
import msScreen3 from '@/images/projects/bombardier/mySmartRouter/dashboard3.jpg'
import msScreen4 from '@/images/projects/bombardier/mySmartRouter/dashboard4.jpg'
import msScreen5 from '@/images/projects/bombardier/mySmartRouter/device1.jpg'
import msScreen6 from '@/images/projects/bombardier/mySmartRouter/device2.jpg'
import msScreen7 from '@/images/projects/bombardier/mySmartRouter/networks1.jpg'
import msScreen8 from '@/images/projects/bombardier/mySmartRouter/networks2.jpg'
import msScreen9 from '@/images/projects/bombardier/mySmartRouter/networks3.jpg'
import msScreen10 from '@/images/projects/bombardier/mySmartRouter/networks4.jpg'
import msScreen11 from '@/images/projects/bombardier/mySmartRouter/networks5.jpg'
import msScreen12 from '@/images/projects/bombardier/mySmartRouter/support1.jpg'
import msScreen13 from '@/images/projects/bombardier/mySmartRouter/support2.jpg'

// MyPrinciple
//
import screen1 from '@/images/projects/bombardier/myPrinciple/aircraft1.jpg'
import screen2 from '@/images/projects/bombardier/myPrinciple/aircraft2.jpg'
import screen3 from '@/images/projects/bombardier/myPrinciple/aircraft3.jpg'
import screenAlt1 from '@/images/projects/bombardier/myPrinciple/aircraftAlt1.jpg'
import screenAlt2 from '@/images/projects/bombardier/myPrinciple/aircraftAlt2.jpg'
import screenAlt3 from '@/images/projects/bombardier/myPrinciple/aircraftAlt3.jpg'
import screen4 from '@/images/projects/bombardier/myPrinciple/booking1.jpg'
import screenAlt4 from '@/images/projects/bombardier/myPrinciple/bookingAlt1.jpg'
import screen5 from '@/images/projects/bombardier/myPrinciple/experience1.jpg'
import screen6 from '@/images/projects/bombardier/myPrinciple/experience2.jpg'
import screenAlt5 from '@/images/projects/bombardier/myPrinciple/experienceAlt1.jpg'
import screenAlt6 from '@/images/projects/bombardier/myPrinciple/experienceAlt2.jpg'
import screen7 from '@/images/projects/bombardier/myPrinciple/wishlist1.jpg'
import screenAlt7 from '@/images/projects/bombardier/myPrinciple/wishlistAlt1.jpg'

const designs = [
  {
    title: 'Screen name',
    description: 'Screen description',
    imageUrl: msScreen1,
  },
  {
    title: 'Screen name',
    description: 'Screen description',
    imageUrl: msScreen3,
  },
  {
    title: 'Screen name',
    description: 'Screen description',
    imageUrl: msScreen2,
  },
  {
    title: 'Screen name',
    description: 'Screen description',
    imageUrl: msScreen4,
  },
  {
    title: 'Screen name',
    description: 'Screen description',
    imageUrl: msScreen5,
  },
]

export function Designs() {
  return (
    <div className="mx-auto flex flex-col gap-12">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <div
        role="list"
        className="grid max-w-7xl grid-cols-1  gap-x-6  sm:grid-cols-2 lg:grid-cols-5"
      >
        {designs.map((frame) => (
          <div key={frame.title}>
            <Image src={frame.imageUrl} alt=""></Image>
            <h3 className="mt-1 text-base font-semibold leading-8 text-gray-900">
              {frame.title}
            </h3>
            <p className="text-sm leading-4 text-gray-600">
              {frame.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Project() {
  const stats = [
    {
      id: 1,
      name: 'New components using variants, component properties, grid, cosntraints and auto layout',
      value: '350+',
    },
    {
      id: 2,
      name: 'Increase in happiness, transparency, efficiency, rapid prototype and consistency',
      value: '100%',
    },
    {
      id: 3,
      name: 'Coined the term "Lego components" which allowed for rapid prototyping by combining base components',
      value: '150+',
    },
  ]
  return (
    <>
      <Head>
        <title>Bombardier - Project</title>
        <meta
          name="description"
          content="Bombardier MyPrinciple and MySmartRouter Mobile Truth"
        />
      </Head>

      <Container className="py-28">
        <CaseStudy
          heading="Bombardier - mySmartRouter"
          subheading="Lead the design of Bombardiers mySmartRouter low-high fidelity prototypes. Worked with cross-functional teams, constantly reached my sprint goals."
          stats={stats}
        />
        <Designs></Designs>

        <div className="space-y-24">
          <div className="mx-auto ">
            <section className="12">
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-5">
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 h-16 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={msScreen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen8}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen9}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen10}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen11}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen12}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={msScreen13}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  MyPrinciple
                </h2>
                {/* <a
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                >
                  equitybankbahamas.com
                </a> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  I was brought onto this project after delivering high quality
                  prototypes for mySmartRouter. The head of design Michel was
                  impressed from my work on mySmartRouter and I was given the
                  task to cleanup and create base and high-level components on
                  Figma and redesign the screens.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-5">
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-10 sm:mb-8 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screenAlt7}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  )
}
