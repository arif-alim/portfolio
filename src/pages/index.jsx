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
      className="group flex items-center text-sm text-zinc-900 transition hover:text-blue-700 dark:text-zinc-200 dark:hover:text-sky-700"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-700" />
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
        <div className="mt-8 grid grid-cols-1 gap-y-16 text-sm  dark:text-zinc-200 sm:mt-16 lg:grid-cols-12 lg:gap-y-12">
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
              <h3 className="text-xl font-semibold">About Me</h3>
              <p className="pt-4 ">
                I am a seasoned UI, UX, Interaction, Service, and Product
                Designer with over 15 years of experience transforming complex
                challenges into user-centered, impactful solutions. My academic
                background in Computer Science from the University of Waterloo
                and Business Administration from Wilfrid Laurier University has
                been instrumental in shaping my design decision-making process.
                This unique academic foundation allows me to approach design
                from both a technology-driven and business-driven perspective,
                ensuring that my solutions are not only innovative and
                functional but also strategically aligned with business
                objectives.
              </p>
              <p className="pt-4">
                With a strong foundation in frontend development, I bring a
                unique perspective to design, ensuring that my solutions are not
                only visually compelling but also technically practical and
                seamlessly integrated into development workflows. I’ve had the
                privilege of collaborating on high-profile projects for clients
                like Bombardier, Airbus, Hydro One, and Service Ontario, where
                I’ve created intuitive interfaces, mapped user journeys, and
                developed accessible systems that meet AODA and WCAG standards.
              </p>
              <p className="pt-4">
                My approach is rooted in empathy and collaboration. Over the
                years, I’ve honed my skills in user research, service design,
                and high-fidelity prototyping using tools like Figma. I thrive
                in team settings—leading workshops, facilitating
                cross-functional collaboration, and using feedback to iterate
                and improve designs.
              </p>
              <p className="pt-4">
                Design isn’t just my profession—it’s my passion. I’m constantly
                exploring new ideas, staying ahead of trends, and sharing
                insights to inspire others. If you’re looking for a designer who
                combines technical depth, strategic thinking, and a
                user-centered approach, take a look at my portfolio to see some
                of my favorite projects. Let’s connect—I’d love to help bring
                your vision to life.
              </p>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
