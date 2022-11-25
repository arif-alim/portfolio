import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/portfolio/titan/titan-1.jpg'
import screen2 from '@/images/portfolio/titan/titan-2.jpg'
import screen3 from '@/images/portfolio/titan/titan-3.jpg'
import screen4 from '@/images/portfolio/titan/titan-4.jpg'
import screen5 from '@/images/portfolio/titan/titan-5.jpg'
import screen6 from '@/images/portfolio/titan/titan-6.jpg'
import screen7 from '@/images/portfolio/titan/titan-7.jpg'
import screen8 from '@/images/portfolio/titan/titan-8.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Titan Group - Project</title>
        <meta
          name="description"
          content="commercial fireproofing and firestopping company in the greater toronto area"
        />
      </Head>
      <SimpleLayout
        title="Titan Group"
        intro="Titan Group is a leading Fireproofing and Spray Foam Insulation contractor in the Greater Toronto Area. we specialize in fireproofing, fire stopping, spray foam insulation, polyurea and specialty coating services to residential, commercial and industrial clients throughout the GTA."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Titan Group Website
                </h2>
                <Link
                  href="https://titan-group.ca/"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  titan-group.ca
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Design custom mobile responsive website of their previous
                  website.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-x-10 sm:mt-10 lg:grid-cols-3">
                <div className="mb-10 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-10 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen8}
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
