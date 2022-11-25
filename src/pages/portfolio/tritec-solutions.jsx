import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/portfolio/tritec/tritec-1.jpg'
import screen2 from '@/images/portfolio/tritec/tritec-2.jpg'
import screen3 from '@/images/portfolio/tritec/tritec-3.jpg'
import screen4 from '@/images/portfolio/tritec/tritec-4.jpg'
import screen5 from '@/images/portfolio/tritec/tritec-5.jpg'
import screen6 from '@/images/portfolio/tritec/tritec-6.jpg'
import screen7 from '@/images/portfolio/tritec/tritec-7.jpg'
import screen8 from '@/images/portfolio/tritec/tritec-8.jpg'
import screen9 from '@/images/portfolio/tritec/tritec-9.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Tritec Solutions - Project</title>
        <meta
          name="description"
          content="Arif Alim custom created a mobile responsive website"
        />
      </Head>
      <SimpleLayout
        title="Tritec Solutions"
        intro="Tritec Solutions is a Toronto-based HVAC company offering complete Heating, Air Conditioning and Refrigeration installation and service to the GTA area. We also specialize in Heating, Cooling, Plumbing and Sheet Metal work."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Graphic design, UI design and responsive web design
                </h2>
                <Link href="#" className="text-blue-800 dark:text-blue-300">
                  www.tritecsolutions.ca
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Created custom logo and mobile responsive website with an
                  intuitive service request widget.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-3">
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
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen8}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen9}
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
