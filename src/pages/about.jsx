import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { VercelIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
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
      <Container
        className="my-auto mt-16
      "
      >
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
            <p className="mt-2 text-sm tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-[15px]">
              Honours Bachelor of Computer Science (BCS) from UW.BCS from
              University of Waterloo and BBA from Wilfrid Laurier University.
            </p>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Currently developing apps on React, Redux, Laravel, Amazon Web
                Services and contributing to open source in my free time. New to
                Next.js, Tailwindcss and Figma.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia necessitatibus accusantium iste eos tenetur
                perspiciatis error iusto? Iure, fugiat aliquid! Adipisci
                molestias, magnam esse repellendus blanditiis quisquam
                perspiciatis distinctio, sed soluta voluptate nemo repudiandae
                excepturi nostrum reiciendis tempore impedit ipsum!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci voluptates rerum, aut laborum iusto, quod doloremque
                aspernatur in dignissimos ullam nesciunt enim placeat? Adipisci
                sapiente deleniti obcaecati minus ab. Distinctio!
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
                icon={GitHubIcon}
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
