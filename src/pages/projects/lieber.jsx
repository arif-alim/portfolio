import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/lieber/lieber-1.jpg'
import screen2 from '@/images/projects/lieber/lieber-2.jpg'
import screen3 from '@/images/projects/lieber/lieber-3.jpg'
import screen4 from '@/images/projects/lieber/lieber-4.jpg'
import screen5 from '@/images/projects/lieber/lieber-5.jpg'
import screen6 from '@/images/projects/lieber/lieber-6.jpg'
import screen7 from '@/images/projects/lieber/lieber-7.jpg'

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
        intro="Custom logo and mobile responsive web design"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  capitalize dark:text-zinc-100">
                  mobile responsive web design
                </h2>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore totam, laboriosam nemo magnam aperiam labore
                  praesentium doloremque ipsum corporis facere.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-2">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 h-16 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
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
