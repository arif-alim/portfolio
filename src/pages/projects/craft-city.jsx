import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Craft City Logo
import ccLogo from '@/images/projects/craftcity/ccLogo.jpg'
import ccLogo1 from '@/images/projects/craftcity/ccLogo1.jpg'
import ccLogo2 from '@/images/projects/craftcity/ccLogo2.jpg'
import ccLogo3 from '@/images/projects/craftcity/ccLogo3.jpg'
// Craft City Sticker
import ccSticker1 from '@/images/projects/craftcity/ccSticker1.jpg'
import ccSticker2 from '@/images/projects/craftcity/ccSticker2.jpg'
import ccSticker3 from '@/images/projects/craftcity/ccSticker3.jpg'
// Craft City Can Design
import ccCan from '@/images/projects/craftcity/ccCanDesign.jpg'
import ccCan2 from '@/images/projects/craftcity/ccCanDesign2.jpg'
import ccCan3 from '@/images/projects/craftcity/ccCanDesign3.jpg'
import ccCan4 from '@/images/projects/craftcity/ccCanDesign4.jpg'
import ccCan5 from '@/images/projects/craftcity/ccCanDesign5.jpg'
// Craft City Promo Assets
import ccPromo1 from '@/images/projects/craftcity/ccPromo1.jpg'
import ccPromo2 from '@/images/projects/craftcity/ccPromo2.jpg'
import ccPromo3 from '@/images/projects/craftcity/ccPromo3.jpg'
import ccPromo4 from '@/images/projects/craftcity/ccPromo4.jpg'
// Craft City Cider
import ccCiderLogo from '@/images/projects/craftcity/ciderLogo.jpg'
import ccCider1 from '@/images/projects/craftcity/cider1.jpg'
import ccCider2 from '@/images/projects/craftcity/cider2.jpg'
import ccCider3 from '@/images/projects/craftcity/cider3.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Craft City - Project</title>
        <meta name="description" content="Craft City Hard Seltzer" />
      </Head>
      <SimpleLayout
        title="Craft City"
        intro="Locally Made & Globally Inspired. Hard seltzer that is all natural, made with real blueberries and electrolyte infused. First stop, Bondi Blueberry."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Logo Design
                </h2>
                {/* <Link
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  craft-city.ca
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Designed their custom logo and their e-commerce website.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccLogo}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 h-16 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={ccLogo1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccLogo2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccLogo3}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Sticker design
                </h2>
                {/* <Link
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  craft-city.ca
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Created promotional stickers
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccSticker1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccSticker2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccSticker3}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Can design
                </h2>
                {/* <Link
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  craft-city.ca
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Designed the hard seltzer cans using Illustrator
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-3">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCan}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCan2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCan3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCan4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCan5}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Promotional assets
                </h2>
                {/* <Link
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  craft-city.ca
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Designed and printed custom promotional assets such as
                  banners, posters etc.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccPromo1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccPromo2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccPromo3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccPromo4}
                    alt=""
                  ></Image>
                </div>
              </div>
            </section>
            <section className="my-8">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Craft City cider
                </h2>
                {/* <Link
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  craft-city.ca
                </Link> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Helped create the logo and can design
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-4">
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCiderLogo}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCider1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCider2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={ccCider3}
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
