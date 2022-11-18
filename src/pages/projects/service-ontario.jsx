import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/serviceontario/ddr1.jpg'
import screen2 from '@/images/projects/serviceontario/ddr2.jpg'
import screen3 from '@/images/projects/serviceontario/ddr3.jpg'
import screen4 from '@/images/projects/serviceontario/ddr4.jpg'
import screen5 from '@/images/projects/serviceontario/ddr5.jpg'
import screen6 from '@/images/projects/serviceontario/ddr6.jpg'
import screen7 from '@/images/projects/serviceontario/ddr7.jpg'
import screen8 from '@/images/projects/serviceontario/ddr8.jpg'
import screen9 from '@/images/projects/serviceontario/ddr9.jpg'
import screen10 from '@/images/projects/serviceontario/ddr10.jpg'
import screen11 from '@/images/projects/serviceontario/ddr11.jpg'
import screen12 from '@/images/projects/serviceontario/ddr12.jpg'
import screen13 from '@/images/projects/serviceontario/ddr13.jpg'
import screen14 from '@/images/projects/serviceontario/ddr14.jpg'
import screen15 from '@/images/projects/serviceontario/ddr15.jpg'
import screen16 from '@/images/projects/serviceontario/ddr16.jpg'
import screen16a from '@/images/projects/serviceontario/ddr16a.jpg'
import screen17 from '@/images/projects/serviceontario/ddr17.jpg'
import screen18 from '@/images/projects/serviceontario/ddr18.jpg'
import screen19 from '@/images/projects/serviceontario/ddr19.jpg'
import screen20 from '@/images/projects/serviceontario/ddr20.jpg'
import screen21 from '@/images/projects/serviceontario/ddr21.jpg'
import screen22 from '@/images/projects/serviceontario/ddr22.jpg'
import screen23 from '@/images/projects/serviceontario/ddr23.jpg'
import screen24 from '@/images/projects/serviceontario/ddr24.jpg'
import screen25 from '@/images/projects/serviceontario/ddr25.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Service Ontario - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>
      <SimpleLayout
        title="Service Ontario"
        intro="Created custom design system for MySmartRouter and MyPrinciple"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Digital Dealership Registration
                </h2>
                {/* <a
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                >
                  equitybankbahamas.com
                </a> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  As the UI Architect I was tasked with creating the interface
                  for DDR. Using the base styles and components, I created a new
                  design system for DDR and reduced the number of components
                  that were in the original design system by combining variants
                  and using component properties.
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
                    src={screen16a}
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
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen18}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen19}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen20}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen21}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen22}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen23}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen24}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen25}
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
