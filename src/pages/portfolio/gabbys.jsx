import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/portfolio/gabbys/gabbys-1.jpg'
import screen2 from '@/images/portfolio/gabbys/gabbys-2.jpg'
import screen3 from '@/images/portfolio/gabbys/gabbys-3.jpg'
import screen4 from '@/images/portfolio/gabbys/gabbys-4.jpg'
import screen5 from '@/images/portfolio/gabbys/gabbys-5.jpg'
import screen6 from '@/images/portfolio/gabbys/gabbys-6.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Gabbys - Project</title>
        <meta
          name="description"
          content="Custom resonsive web and logo design"
        />
      </Head>
      <SimpleLayout
        title="Gabbys"
        intro="Gabby’s was founded in 1988 by a local Toronto based family. We opened our first location in March of 1989, the whole family worked long hours to make things work. The concept was simply to create a cosy environment that was well suited to have great conversations, served quality freshly cooked meals and offered great draft beer and spirit selections. "
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Mobile responsive website
                </h2>
                {/* <a
                  href="#"
                  className="text-blue-800 dark:text-blue-300"
                >
                  equitybankbahamas.com
                </a> */}

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Graphic design, mobile repsonsive website and logo design.
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
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
