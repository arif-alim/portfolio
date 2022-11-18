import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'

// Trip Support pages
import screen1 from '@/images/projects/hydroone/sustainability-homepage-mobile.jpg'
import screen2 from '@/images/projects/hydroone/sustainability-people-mobile.jpg'
import screen3 from '@/images/projects/hydroone/sustainability-homepage.jpg'
import screen4 from '@/images/projects/hydroone/sustainability-people.jpg'
import screen5 from '@/images/projects/hydroone/sustainability-planet.jpg'
import screen6 from '@/images/projects/hydroone/sustainability-planet-mobile.jpg'
import screen7 from '@/images/projects/hydroone/vacation-conservation.jpg'
import screen8 from '@/images/projects/hydroone/vacation-conservation-mobile.jpg'
import screen9 from '@/images/projects/hydroone/energy-hub.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-sky-700 dark:text-zinc-200 dark:hover:text-sky-700"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Hydro One - Project</title>
        <meta
          name="description"
          content="Trip Support graphic web and interaction design"
        />
      </Head>
      <SimpleLayout
        title="Hydro One"
        intro="Created custom design system for MySmartRouter and MyPrinciple"
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  Sustainability 2021
                </h2>
                <Link
                  href="https://www.hydroone.com/sustainability"
                  className="text-blue-800 dark:text-blue-300"
                  target="_blank"
                >
                  hydroone.com/sustainability
                </Link>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Created mobile and tablet responsive pages, sustainability
                  page sustainability/community, sustainability/planet,
                  sustainability/people.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-x-4 sm:mt-10 lg:grid-cols-12">
                <div className="col-span-3 mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen3}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 hidden px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen1}
                    alt=""
                  ></Image>
                </div>
                <div className="col-span-3 mb-8  px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen4}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 hidden px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen2}
                    alt=""
                  ></Image>
                </div>
                <div className="col-span-3 mb-8 px-0 sm:px-2 md:p-3">
                  <Image
                    className="rounded bg-cover shadow-md"
                    src={screen5}
                    alt=""
                  ></Image>
                </div>
                <div className="mb-8 hidden px-0 sm:px-2 md:block md:p-3">
                  <Image
                    className="rounded shadow-md"
                    src={screen6}
                    alt=""
                  ></Image>
                </div>
              </div>
              <div className="mt-12 sm:flex sm:flex-row sm:gap-12">
                <div>
                  <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                    <h2 className=" text-xl font-bold  dark:text-zinc-100">
                      Energy Hub, Vacation Energy Conservation pages
                    </h2>
                    <Link
                      href="https://www.hydroone.com/energy-hub"
                      className="text-blue-800 dark:text-blue-300"
                      target="_blank"
                    >
                      hydroone.com/energy-hub
                    </Link>

                    <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                      Designed the responsive pages on Figma and converted the
                      design to code using HTML, CSS3 and JavaScript. Utitlized
                      CSS Grid system for custom masonry layout of tiles on the
                      energy hub page.
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 items-start gap-x-2 sm:mt-10 lg:grid-cols-12">
                    <div className="col-span-4 mb-8 px-0 sm:px-2 md:p-3">
                      <Image
                        className="rounded bg-cover shadow-md"
                        src={screen7}
                        alt=""
                      ></Image>
                    </div>
                    <div className="col-span-2 mb-8 hidden px-0 sm:px-2 md:block md:p-3">
                      <Image
                        className="rounded shadow-md"
                        src={screen8}
                        alt=""
                      ></Image>
                    </div>
                    <div className="col-span-6 mb-8 px-0 sm:px-2 md:p-3">
                      <Image
                        className="rounded bg-cover shadow-md"
                        src={screen9}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="border-t-4 border-zinc-100 pt-12  dark:border-zinc-700">
              <h2 className="mb-4 text-xl font-bold dark:text-zinc-100">
                More screens?
              </h2>
              <SocialLink href="mailto:arif.alim@outlook.com" icon={MailIcon}>
                Request to view additional design assets
              </SocialLink>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
