/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { SimpleLayout } from '@/components/SimpleLayout'

import { Container } from '@/components/Container'
import {
  VercelIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

/** SocialLink Component */
const SocialLink = ({ className, href, icon: Icon, target }) => (
  <li className={clsx(className, 'flex justify-center')}>
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="group flex items-center text-sm text-zinc-900 transition hover:text-sky-700 dark:text-zinc-200 dark:hover:text-sky-700"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-700" />
    </Link>
  </li>
)

/** Section Component */
const Section = ({ title, children }) => (
  <div className="mt-6 space-y-7 text-tiny text-zinc-600 dark:text-zinc-400">
    {title && (
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
    )}
    <p>{children}</p>
  </div>
)

/** ProfileImage Component */
const ProfileImage = () => (
  <div className="w-full max-w-full px-2.5 lg:max-w-none">
    <Image
      src={portraitImage}
      alt="Portrait of Arif Alim"
      width={300}
      height={300}
      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
      priority
    />
  </div>
)

/** Main About Page */
export default function About() {
  return (
    <>
      <Head>
        <title>About - Arif Alim</title>
        <meta
          name="description"
          content="Learn more about Arif Alim, a Canadian UI/UX Architect."
        />
      </Head>
      <SimpleLayout
        title={
          <>
            Hi, I’m Arif Alim.
            <br />A Seasoned UI & UX Designer!
          </>
        }
        intro="Attended the double degree program - Honours Bachelor of
                Computer Science (BCS) at University of Waterloo and Honours
                Business Administration (BCA) at Wilfrid Laurier University."
      >
        <div className="mt-8 grid grid-cols-1 gap-y-16 text-tiny dark:text-zinc-200 sm:mt-16 lg:grid-cols-12 lg:gap-y-12">
          {/* Profile Image */}
          <div className="col-span-4 mx-auto lg:mx-0 lg:pl-20">
            <ProfileImage />
            {/* Social Links */}
            <div className="mt-8">
              <ul role="list" className="flex justify-center space-x-8">
                <SocialLink
                  href="https://github.com/arif-alim"
                  target="_blank"
                  icon={GithubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/arifalim/"
                  target="_blank"
                  icon={LinkedInIcon}
                />
                <SocialLink
                  href="mailto:arif.alim@outlook.com"
                  icon={MailIcon}
                />
              </ul>
            </div>
          </div>
          {/* Introduction Section */}
          <div className="col-span-8 lg:order-first">
            <div className="flex-row">
              <h3 className="text-xl font-bold">About Me</h3>
              <p className="pt-4 ">
                I’m a passionate UI, UX, Interaction, Service, and Product
                Designer with over 15 years of experience creating user-friendly
                designs and solving complex problems. I have a double degree in
                Computer Science from the University of Waterloo and Business
                Administration from Wilfrid Laurier University, which helps me
                combine technical expertise with strategic thinking.
              </p>
              <p className="pt-4">
                My extensive frontend development experience gives me a unique
                edge in making smarter, more practical design decisions that
                seamlessly integrate into development workflows. I’ve had the
                chance to work on exciting projects for clients like Bombardier,
                Airbus, Hydro One, and Service Ontario. Whether it’s designing
                intuitive user interfaces, mapping customer journeys, or
                building accessible systems that meet AODA and WCAG standards,
                I’m passionate about crafting thoughtful solutions that make
                life easier for people.
              </p>
              <p className="pt-4">
                Over the years, I’ve sharpened my skills in user research,
                service design, and creating high-fidelity prototypes with tools
                like Figma. I enjoy working with teams, leading workshops, and
                using feedback to make better designs. Outside of work, I’m
                always exploring new ideas, sharing what I’ve learned, and
                staying curious about the future of design. Check out my
                portfolio to see some of my favorite projects — I’d love to
                connect!
              </p>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
