import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/nba/nba-1.jpg'
import screen2 from '@/images/projects/nba/nba-2.jpg'
import screen3 from '@/images/projects/nba/nba-3.jpg'
import screen4 from '@/images/projects/nba/nba-4.jpg'
import screen5 from '@/images/projects/nba/nba-5.jpg'
import screen6 from '@/images/projects/nba/nba-6.jpg'
import screen7 from '@/images/projects/nba/nba-7.jpg'
import screen8 from '@/images/projects/nba/nba-8.jpg'
import screen9 from '@/images/projects/nba/nba-9.jpg'
import screen10 from '@/images/projects/nba/nba-10.jpg'
import screen11 from '@/images/projects/nba/nba-11.jpg'
import screen12 from '@/images/projects/nba/nba-12.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>NBA Restaurant - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>
      <SimpleLayout
        title="NBA"
        intro="Helped create custom logo in colloboration with the NBA and created the demo website"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  NBA Courtside Restaurant
                </h2>
                {/* <Link
                  href="https://www.hydroone.com/sustainability"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  #
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Helped design the NBA Courtside Restaurant logo and website.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-x-10 sm:mt-10 lg:grid-cols-3">
                <div className="mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen8}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen9}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen10}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen11}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen12}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
