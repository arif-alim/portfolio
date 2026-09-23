import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { SimpleLayout } from '@/components/SimpleLayout'

import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

const featuredWork = [
  {
    company: 'Manulife',
    project: 'Plan Administrator Portal',
    summary: 'Enterprise UX · Complex Workflows',
    href: '/portfolio/manulife',
  },
  {
    company: 'ServiceOntario',
    project: 'Digital Dealership Registration',
    summary: 'Transactional UX · Service Design',
    href: '/portfolio/service-ontario',
  },
  {
    company: 'Bombardier',
    project: 'mySmartRouter & myPrinciple',
    summary: 'Aviation · Interaction Design',
    href: '/portfolio/bombardier',
  },
]

/** SocialLink Component */
const SocialLink = ({ className, href, icon: Icon, target, label }) => (
  <li className={clsx(className, 'flex justify-center')}>
    <Link
      href={href}
      aria-label={label}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="group flex items-center transition hover:text-blue-700  dark:hover:text-sky-700"
    >
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-700" />
    </Link>
  </li>
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
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/arifalim/"
                  target="_blank"
                  icon={LinkedInIcon}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:arif.alim@outlook.com"
                  icon={MailIcon}
                  label="Email Arif Alim"
                />
              </ul>
            </div>
          </div>
          {/* Introduction Section */}
          <div className="col-span-8 lg:order-first">
            <div className="flex-row">
              <h2 className="text-xl font-semibold">About Me</h2>
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
        <section
          aria-labelledby="featured-work-heading"
          className="mt-12 border-t border-zinc-100 pt-8 dark:border-zinc-700"
        >
          <h2 id="featured-work-heading" className="text-xl font-semibold">
            Featured Work
          </h2>
          <ul
            role="list"
            className="mt-5 grid auto-rows-fr gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          >
            {featuredWork.map((work) => (
              <li key={work.href}>
                <Link
                  href={work.href}
                  aria-label={`${work.company}: ${work.project}`}
                  className="block h-full rounded-lg border border-zinc-200 bg-white p-5 transition-colors duration-150 hover:border-zinc-400 focus-visible:border-zinc-400 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500 dark:focus-visible:border-zinc-500"
                >
                  <h3 className="mb-2 flex items-center gap-2 font-semibold">
                    {work.company}
                    <span aria-hidden="true">→</span>
                  </h3>
                  <p>{work.project}</p>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {work.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/portfolio"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all projects<span aria-hidden="true">→</span>
          </Link>
        </section>
      </SimpleLayout>
    </>
  )
}
