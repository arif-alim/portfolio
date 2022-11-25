import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/portfolio/islandtraders/islandtraders-1.jpeg'
import screen2 from '@/images/portfolio/islandtraders/islandtraders-2.jpeg'
import screen3 from '@/images/portfolio/islandtraders/islandtraders-3.jpeg'
import screen4 from '@/images/portfolio/islandtraders/islandtraders-4.jpeg'
import screen5 from '@/images/portfolio/islandtraders/islandtraders-5.jpeg'
import screen6 from '@/images/portfolio/islandtraders/islandtraders-6.jpeg'
import screen7 from '@/images/portfolio/islandtraders/islandtraders-7.jpeg'
import screen8 from '@/images/portfolio/islandtraders/islandtraders-8.jpeg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Island Traders - Project</title>
        <meta
          name="description"
          content="Deisned and developed islandtraders front facing pages and custom logo"
        />
      </Head>
      <SimpleLayout
        title="Island Traders"
        intro="iSLAND tRADERS Shop & Ship is a family owned and operated Freight Forwarder. We specialize in shipments for small businesses and go far beyond just helping people move products."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
              <h2 className=" text-xl font-bold  dark:text-zinc-100">
                Island Traders
              </h2>
              {/* <Link
                href="https://equitybankbahamas.com/"
                className="text-blue-800 dark:text-blue-300"
                target="_blank"
              >
                islandtraders.com
              </Link> */}

              <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                Design custom mobile responsive website of their previous
                website.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 items-start gap-x-10 sm:mt-10 lg:grid-cols-3">
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded bg-cover shadow-md"
                  src={screen1}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded shadow-md"
                  src={screen2}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded bg-cover shadow-md"
                  src={screen3}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded shadow-md"
                  src={screen4}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded bg-cover shadow-md"
                  src={screen5}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded shadow-md"
                  src={screen6}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded shadow-md"
                  src={screen7}
                  alt=""
                ></Image>
              </div>
              <div className="mb-12 px-0 sm:px-2 md:p-3">
                <Image
                  className="rounded shadow-md"
                  src={screen8}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
