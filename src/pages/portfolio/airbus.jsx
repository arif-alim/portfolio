import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Airbus / FlightLink screens
import screen1 from '@/images/projects/airbus/airbus-1.jpg'
import screen2 from '@/images/projects/airbus/airbus-2.jpg'
import screen3 from '@/images/projects/airbus/airbus-3.jpg'
import screen4 from '@/images/projects/airbus/airbus-4.jpg'
import screen5 from '@/images/projects/airbus/airbus-5.jpg'
import screen6 from '@/images/projects/airbus/airbus-6.jpg'
import screen7 from '@/images/projects/airbus/airbus-7.jpg'
import screen8 from '@/images/projects/airbus/airbus-8.jpg'

const screenshots = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
]

function Screenshot({ src, alt = '' }) {
  return (
    <div className="relative mb-8 h-64 px-0 sm:px-2 md:p-3">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded object-cover shadow-md"
      />
    </div>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Airbus - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>

      <SimpleLayout
        title="Airbus"
        intro="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora suscipit fuga quasi similique dignissimos qui magnam saepe excepturi eaque! Debitis!"
      >
        <div className="space-y-24">
          <div className="container mx-auto">
            <section>
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className="text-xl font-bold dark:text-zinc-100">
                  FlightLink admin dashboard design
                </h2>

                <Link
                  href="https://www.airbus.com/en"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  www.airbus.com
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores quo esse laboriosam officia soluta voluptas
                  dignissimos recusandae similique est sed delectus, fuga
                  voluptatem, ducimus consectetur veniam eaque culpa ut, vitae
                  velit! Impedit officia repellat doloremque?
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                {screenshots.map((src, index) => (
                  <Screenshot key={index} src={src} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
