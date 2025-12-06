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
      className="group flex items-center transition hover:text-blue-700  dark:hover:text-sky-700"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-700" />
    </Link>
  </li>
)

/** Section Component */
const Section = ({ title, children }) => (
  <div className="mt-6 space-y-7 ">
    {title && <h2 className="text-lg font-semibold">{title}</h2>}
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
            <br />
            <span className="text-xl font-semibold">
              A Seasoned Designer specializing in UI, UX, Service, and Product
              Design!
            </span>
          </>
        }
        intro="Attended the double degree program - Honours Bachelor of
                Computer Science (BCS) at University of Waterloo and Honours
                Business Administration (BCA) at Wilfrid Laurier University."
      >
        <div className="mt-8 grid grid-cols-1 gap-y-16    sm:mt-16 lg:grid-cols-12 lg:gap-y-12">
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
                challenges into intuitive, user-centered solutions. My dual
                academic background in Computer Science and Business
                Administration shapes the way I design—balancing technical
                feasibility, business strategy, and thoughtful user experience
                to create solutions that are both impactful and scalable.
              </p>
              <p className="pt-4">
                With a strong foundation in front-end development, I design with
                implementation in mind. My work is visually compelling,
                technically practical, and seamlessly aligned with engineering
                workflows. I’ve collaborated on high-profile projects for
                organizations such as Bombardier, Airbus, Hydro One, and
                ServiceOntario—crafting intuitive interfaces, mapping end-to-end
                user journeys, and developing accessible systems that meet AODA
                and WCAG standards.
              </p>
              <p className="pt-4">
                My approach is rooted in empathy, systems thinking, and
                collaboration. I’ve honed my skills in user research, service
                design, and high-fidelity prototyping in Figma, and I thrive in
                cross-functional settings—facilitating workshops, aligning
                stakeholders, and iterating quickly based on insights and
                feedback.
              </p>
              <p className="pt-4">
                Design isn’t just what I do—it’s what I love. I stay curious,
                explore new ideas, and continuously evolve my craft. I blend
                technical depth, strategic thinking, and human-centered design
                to create meaningful, practical, and scalable experiences.
              </p>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
