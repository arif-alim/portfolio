import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import screen1 from '@/images/projects/mbo/mbo-1.jpeg'
import screen2 from '@/images/projects/mbo/mbo-2.jpeg'
import screen3 from '@/images/projects/mbo/mbo-3.jpeg'
import screen4 from '@/images/projects/mbo/mbo-4.jpeg'
import screen5 from '@/images/projects/mbo/mbo-5.jpeg'
import screen6 from '@/images/projects/mbo/mbo-6.jpeg'
import screen7 from '@/images/projects/mbo/mbo-7.jpeg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Miss Bahamas - Project</title>
        <meta
          name="description"
          content="commercial fireproofing and firestopping company in the greater toronto area"
        />
      </Head>
      <SimpleLayout
        title="Miss Bahamas Organization"
        intro="The Miss Bahamas Organization (MBO) is a company that advances and supports today's women through its Passion for Pageantry with a Purpose. Our mission is to bring out the personal bests women seek to achieve by cultivating their passions, self-image, and education in an environment that encourages the pursuit of purpose, promotes discipline, and supports the strengthening of character."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Mobile responsive web design
                </h2>
                <Link
                  href="https://www.missbahamas.net/"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  missbahamas.net
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Conducted and analyzed user research to come up with a simple
                  UI that is apealing and easy to use by their target segment.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 items-start gap-x-10 sm:mt-10 lg:grid-cols-3">
                <div className="mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:block md:p-3">
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
