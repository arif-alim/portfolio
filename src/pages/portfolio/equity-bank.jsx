import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/equitybank/equitybank-1.jpg'
import screen2 from '@/images/projects/equitybank/equitybank-2.jpg'
import screen3 from '@/images/projects/equitybank/equitybank-3.jpg'
import screen4 from '@/images/projects/equitybank/equitybank-4.jpg'
import screen5 from '@/images/projects/equitybank/equitybank-5.jpg'
import screen6 from '@/images/projects/equitybank/equitybank-6.jpg'
import screen7 from '@/images/projects/equitybank/equitybank-7.jpg'
import screen8 from '@/images/projects/equitybank/equitybank-8.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Equity Bank Bahamas - Project</title>
        <meta
          name="description"
          content="commercial fireproofing and firestopping company in the greater toronto area"
        />
      </Head>
      <SimpleLayout
        title="Equity Bank Bahamas"
        intro="Equity Bank And Trust Bahamas Limited is located in Nassau, Bahamas, the leading private management centre in the Caribbean region and is part of The Equity Group of Companies with bank and trust company affiliates in Switzerland. As an independent, boutique bank, trust and other financial services provider, The Equity Group designs custom made products and services to meet specific needs of high net worth individuals, families and institutional clients.
"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
              <h2 className=" text-xl font-bold  dark:text-zinc-100">
                Equity Bank Bahamas
              </h2>
              <Link
                href="https://equitybankbahamas.com/"
                className="text-blue-800 dark:text-blue-300"
                target="_blank"
              >
                equitybankbahamas.com
              </Link>

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
