import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/portfolio/lieber/lieber-1.jpg'
import screen2 from '@/images/portfolio/lieber/lieber-2.jpg'
import screen3 from '@/images/portfolio/lieber/lieber-3.jpg'
import screen4 from '@/images/portfolio/lieber/lieber-4.jpg'
import screen5 from '@/images/portfolio/lieber/lieber-5.jpg'
import screen6 from '@/images/portfolio/lieber/lieber-6.jpg'
import screen7 from '@/images/portfolio/lieber/lieber-7.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Lieber - Project</title>
        <meta
          name="description"
          content="graphic, logo design, web design, and mobile app design for cooper app"
        />
      </Head>
      <SimpleLayout
        title="Lieber Group"
        intro="At Lieber Group, we know how important timelines are. We have the capacity and the ability to work on complex projects. No matter how small or big the project is, we will always adhere to our clients timeline and budget. We take pride in showcasing our workmanship and delivering projects on time.

"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  capitalize dark:text-zinc-100">
                  mobile responsive web design
                </h2>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Custom logo and mobile responsive web design
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-2">
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
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
                    className="rounded shadow-md"
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
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
