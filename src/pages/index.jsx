import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { VercelIcon, GithubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

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

export default function About() {
  return (
    <>
      <Head>
        <title>About - Arif Alim</title>
        <meta
          name="description"
          content="I’m Arif Alim. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="w-full max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 23rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Hi, I’m Arif Alim.
              <br /> A Canadian UI/UX Architect!
            </h1>
            <p className="mt-4 text-sm tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-[15px]">
              Honours Bachelor of Computer Science (BCS) from UW.BCS from
              University of Waterloo and BBA from Wilfrid Laurier University.
            </p>
            <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Creative UI/UX designer and a frontend developer with over 15
                years of experience. I have designed for small to enterprise
                level applications for companies such as Trip Support, Hydro
                One, Service Ontario and Bombardier. My design thinking process,
                methodologies, and user-centric approach to UI/UX with the
                latest trends and accessibility in mind, I can help you achieve
                your UI/UX goals.
              </p>
              <p>
                Contributed to Bombardiers design system, simplified and reduced
                the total number of components using Figma&rsquo;s component
                propertie. Designed mySmartRouter and myPrinciple mobile apps
                for Bombardier. Proposed and accepted style revisions to
                Bombardier&rsquo;s core design system to comply with
                accessibility standards. Created HydroOne design system from
                scratch, helping the design components scale and keeping pages
                design consistent throught.
              </p>
              <p>
                On another note, the results of the double slit experiment has
                got me thinking. Who or what is the observer that collapses the
                probability wave function of electrons and photons to behave as
                particles?
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={VercelIcon}>
                Follow on Vercel
              </SocialLink>

              <SocialLink
                href="https://github.com/arif-alim"
                target="_blank"
                icon={GithubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/arifalim/"
                target="_blank"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:arif.alim@outlook.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                arif.alim@outlook.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
