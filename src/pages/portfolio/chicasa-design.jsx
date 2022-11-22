import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/chicasa/chicasa-1.jpg'
import screen2 from '@/images/projects/chicasa/chicasa-2.jpg'
import screen3 from '@/images/projects/chicasa/chicasa-3.jpg'
import screen4 from '@/images/projects/chicasa/chicasa-4.jpg'
import screen5 from '@/images/projects/chicasa/chicasa-5.jpg'
import screen6 from '@/images/projects/chicasa/chicasa-6.jpg'
import screen7 from '@/images/projects/chicasa/chicasa-7.jpg'
import screen8 from '@/images/projects/chicasa/chicasa-8.jpg'
import screen11 from '@/images/projects/chicasa/chicasaLogo.jpg'

export default function chicasa() {
  return (
    <>
      <Head>
        <title>Chicasa Design - Project</title>
        <meta name="description" content="custom home builders" />
      </Head>
      <SimpleLayout
        title="Chicasa Design"
        intro="Chicasa Design home builders have been working hand in hand with our clients to design, organize and create and ultimately build some of the finest bespoke homes in Toronto and the GTA."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Chicasa Design
                </h2>
                <Link
                  href="http://www.chicasadesign.com/"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  www.chicasadesign.com
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Custom logo and web design
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-10 sm:mt-10 lg:grid-cols-3">
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen11}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:block md:p-3">
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
                <div className="mb-12 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:block md:p-3">
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
