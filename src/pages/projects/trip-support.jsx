import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/tripsupport/tripsupport1.jpg'
import screen2 from '@/images/projects/tripsupport/tripsupport2.jpg'
import screen3 from '@/images/projects/tripsupport/tripsupport3.jpg'
import screen4 from '@/images/projects/tripsupport/tripsupport4.jpg'
import screen5 from '@/images/projects/tripsupport/tripsupport5.jpg'
import screen6 from '@/images/projects/tripsupport/tripsupport6.jpg'
import screen7 from '@/images/projects/tripsupport/tripsupport7.jpg'
import screen8 from '@/images/projects/tripsupport/tripsupport8.jpg'
import screen9 from '@/images/projects/tripsupport/tripsupport9.jpg'
import screen10 from '@/images/projects/tripsupport/tripsupport10.jpg'
import screen11 from '@/images/projects/tripsupport/tripsupport11.jpg'
import screen12 from '@/images/projects/tripsupport/tripsupport12.jpg'
import screen13 from '@/images/projects/tripsupport/tripsupport13.jpg'
import screen14 from '@/images/projects/tripsupport/tripsupport14.jpg'
import screen15 from '@/images/projects/tripsupport/tripsupport15.jpg'
import screen16 from '@/images/projects/tripsupport/tripsupport16.jpg'
import screen17 from '@/images/projects/tripsupport/tripsupport17.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Trip Support - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>
      <SimpleLayout
        title="Trip Support"
        intro="Created custom design system for MySmartRouter and MyPrinciple"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Trip Support
                </h2>
                <div className="sm:flex sm:flex-row sm:gap-6">
                  <p className="mt-2 max-w-3xl text-tiny font-medium dark:text-zinc-100">
                    New Design{': '}
                    <Link
                      href="https://tripsupport.ca/"
                      className="text-tiny text-blue-800 dark:text-blue-300"
                      target="_blank"
                    >
                      tripsupport.ca
                    </Link>
                  </p>
                  <p className="mt-2 max-w-3xl text-tiny font-medium dark:text-zinc-100">
                    Old Design{': '}
                    <Link
                      href="https://tripsupport.com/"
                      className="text-tiny text-blue-800 dark:text-blue-300"
                      target="_blank"
                    >
                      tripsupport.com
                    </Link>
                  </p>
                </div>

                <p className="mt-4 max-w-3xl text-tiny dark:text-zinc-100">
                  Created high-fidelity prototypes with Sketch, Figma and Axure.
                  Converted digital assets to vector files and redesigned footer
                  logos with Illustrator. Used Photoshop to edit photos / images
                  and adjusted resolution and applied lossless compress to
                  further reduce file size to optimize performance. Designed
                  Trip Supports new mobile responsive website with Svelte and
                  Tailwind CSS.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-3">
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
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen8}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen9}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen10}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen11}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen12}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen13}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen14}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen15}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen16}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen17}
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
