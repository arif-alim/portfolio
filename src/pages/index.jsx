/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  VercelIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

const SocialLink = ({ className, href, children, icon: Icon }) => (
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

const Section = ({ title, children }) => (
  <div className="mt-6 space-y-7 text-tiny text-zinc-600 dark:text-zinc-400">
    <p>{children}</p>
  </div>
)

const ProfileImage = () => (
  <div className="w-full max-w-xs px-2.5 lg:max-w-none">
    <Image
      src={portraitImage}
      alt="Portrait of Arif Alim"
      width={300} // Replace with the actual width of your image
      height={300} // Replace with the actual height of your image
      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
    />
  </div>
)

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <ProfileImage />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Hi, I’m Arif Alim.
              <br /> A Canadian UI/UX Architect!
            </h1>
            <p className="mt-4 text-sm tracking-tight text-zinc-400 dark:text-zinc-100 sm:text-[15px]">
              Attended the double degree program - Honours Bachelor of Computer
              Science (BCS) at University of Waterloo and Honours Business
              Administration (BCA) at Wilfrid Laurier University.
            </p>
            <Section>
              As an experienced UI/UX designer and frontend developer with over
              15 years of expertise, I am well-regarded for my innovative and
              creative design solutions. My portfolio includes designing
              applications for a diverse range of clients, including Hydro One,
              Trip Support, Service Ontario, and Bombardier, both for small
              businesses and enterprise-level organizations.
            </Section>
            <Section>
              My design process is guided by the latest industry trends,
              accessibility guidelines, and user-centric methodologies. I can
              help you achieve your UI/UX goals by creating thoughtful and
              intuitive designs that prioritize the user experience.
            </Section>
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
