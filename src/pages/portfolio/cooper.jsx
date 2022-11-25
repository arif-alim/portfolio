import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/portfolio/cooper/cooper-1.jpg'
import screen2 from '@/images/portfolio/cooper/cooper-2.jpg'
import screen3 from '@/images/portfolio/cooper/cooper-3.jpg'
import screen4 from '@/images/portfolio/cooper/cooper-4.jpg'
import screen5 from '@/images/portfolio/cooper/cooper-5.jpg'
import screen6 from '@/images/portfolio/cooper/cooper-6.jpg'
import screen7 from '@/images/portfolio/cooper/cooper-7.jpg'
import screen8 from '@/images/portfolio/cooper/cooper-8.jpg'
import screen9 from '@/images/portfolio/cooper/cooper-9.jpg'
import screen10 from '@/images/portfolio/cooper/cooper-10.jpg'
import screen11 from '@/images/portfolio/cooper/cooper-11.jpg'
import screen12 from '@/images/portfolio/cooper/cooper-12.jpg'
import screen13 from '@/images/portfolio/cooper/cooper-13.jpg'
import screen14 from '@/images/portfolio/cooper/cooper-14.jpg'
import screen15 from '@/images/portfolio/cooper/cooper-15.jpg'
import screen16 from '@/images/portfolio/cooper/cooper-16.jpg'
import screen17 from '@/images/portfolio/cooper/cooper-17.jpg'
import screen18 from '@/images/portfolio/cooper/cooper-18.jpg'
import screen19 from '@/images/portfolio/cooper/cooper-19.jpg'
import screen20 from '@/images/portfolio/cooper/cooper-20.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Cooper - Project</title>
        <meta
          name="description"
          content="graphic, logo design, web design, and mobile app design for cooper app"
        />
      </Head>
      <SimpleLayout title="Cooper" intro="Uber-like app for the Bahamas">
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  capitalize dark:text-zinc-100">
                  logo design
                </h2>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Extensive user research followed with affinity map and user
                  journey. I had to account to Google maps unable to pick-up
                  some of the locations in Bahamas and create a custom app
                  design.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-5">
                <div className="mb-12 px-12 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-12 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-12 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-12 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-12 px-12 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
              </div>
              <div className="mt-12 sm:flex sm:flex-row sm:gap-12">
                <div>
                  <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                    <h2 className=" text-xl font-bold  capitalize dark:text-zinc-100">
                      mobile app design
                    </h2>

                    <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                      Designed the responsive pages on Figma and converted the
                      design to code using HTML, CSS3 and JavaScript. Utitlized
                      CSS Grid system for custom masonry layout of tiles on the
                      energy hub page.
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen6}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded bg-cover shadow-md"
                        src={screen7}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen8}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen9}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen10}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen11}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen12}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen13}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen14}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen15}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen16}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen17}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen18}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen19}
                        alt=""
                      ></Image>
                    </div>
                    <div className="mb-12 px-12 sm:px-2 md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen20}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
