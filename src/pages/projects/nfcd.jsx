import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

import nfcd1 from '@/images/projects/nfcd/nfcd1.jpg'
import nfcd2 from '@/images/projects/nfcd/nfcd2.jpg'
import nfcd3 from '@/images/projects/nfcd/nfcd3.jpg'
import nfcd4 from '@/images/projects/nfcd/nfcd4.jpg'
import nfcd5 from '@/images/projects/nfcd/nfcd5.jpg'
import nfcd6 from '@/images/projects/nfcd/nfcd6.jpg'
import nfcd7 from '@/images/projects/nfcd/nfcd7.jpg'
import nfcd8 from '@/images/projects/nfcd/nfcd8.jpg'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Niagara Falls Craft Distiller - Project</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="Niagara Falls Craft Distillers"
        intro="At Niagara Falls Craft Distillers, our products are made locally at our state-of-the-art distillery, including a 1,000-litre copper kettle with stainless steel fermenters. We use quality ingredients, employ local talent and are known for our community involvement. The pioneering spirit is our mission to blend high-quality spirits with the natural wonder of Niagara Falls."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
              <h2 className=" text-xl font-bold  dark:text-zinc-100">
                Custom e-commerce mobile responsive web design
              </h2>
              <Link
                href="https://niagarafallscraftdistillers.ca/"
                className="text-blue-800 dark:text-blue-300"
                target="_blank"
              >
                www.niagarafallscraftdistillers.ca
              </Link>

              <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                Conducted user research, created affinity map to pin point
                customer pain points. Rapidly created low to high fidelity
                prototypes using Figma.
              </p>
            </div>

            <section className="my-8">
              <div className="-mx-4 flex flex-wrap">
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd1}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd2}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd6}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd7}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd8}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 px-0 sm:px-2 md:w-1/3 md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={nfcd1}
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
