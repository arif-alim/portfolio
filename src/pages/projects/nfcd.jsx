import Head from 'next/head'
import Image from 'next/image'

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
        <title>Speaking - Spencer Sharp</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          {/* <section className="overflow-hidden text-gray-700">
            <div className="container mx-auto py-2 lg:pt-24">
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-1/2 p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd1}
                    ></Image>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd2}
                    ></Image>
                  </div>
                  <div className="w-full p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd3}
                    ></Image>
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd4}
                    ></Image>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd5}
                    ></Image>
                  </div>
                  <div className="w-1/2 p-1 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd6}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="overflow-hidden text-gray-700">
            <div className="container mx-auto">
              <div className="flex flex-wrap ">
                <div className="flex w-1/2 flex-wrap py-0">
                  <div className="border-1 w-full border-slate-100 p-1 py-4 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd1}
                    ></Image>
                  </div>
                  <div className="border-1 w-full border-slate-100 p-1 py-4 md:p-4">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd2}
                    ></Image>
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="border-1 w-full border-slate-100 p-1 py-4 md:px-8">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd4}
                    ></Image>
                  </div>
                  <div className="border-1 w-full border-slate-100 p-1 py-4 md:px-8">
                    <Image
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={nfcd5}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SimpleLayout>
    </>
  )
}
