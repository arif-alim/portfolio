import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/perfectone/perfectone-1.jpg'
import screen2 from '@/images/projects/perfectone/perfectone-2.jpg'
import screen3 from '@/images/projects/perfectone/perfectone-3.jpg'
import screen4 from '@/images/projects/perfectone/perfectone-4.jpg'
import screen5 from '@/images/projects/perfectone/perfectone-5.jpg'
import screen6 from '@/images/projects/perfectone/perfectone-6.jpg'
import screen7 from '@/images/projects/perfectone/perfectone-7.jpg'
import screen8 from '@/images/projects/perfectone/perfectone-8.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Perfec-tone - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>
      <SimpleLayout
        title="Perfec-tone"
        intro="Anyone who has suffered from acne, dark spots, hyperpigmentation and melasma is desperately seeking solutions."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="12">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Web and product design
                </h2>
                <Link
                  href="https://perfec-tone.com/"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  www.perfec-tone.com
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo eos excepturi, numquam nam animi dolorem fugiat
                  optio aspernatur beatae voluptates similique, incidunt
                  accusantium? Dolore deleniti aperiam nisi commodi fugiat
                  recusandae minima repudiandae maxime culpa vel?
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
              </div>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
