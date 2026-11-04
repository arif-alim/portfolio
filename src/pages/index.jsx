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
                I’m a designer at heart. Over the past 15+ years, I’ve worked
                across product, service, UX, UI and interaction design, helping
                people complete complex tasks with greater clarity. I’m drawn to
                the details that shape the experience, from how someone moves
                through a service to what a screen tells them when something
                goes wrong.
              </p>
              <p className="pt-4">
                Building interfaces myself has changed how I make design
                decisions. I use research and testing to understand where people
                struggle, then work with front-end and back-end developers to
                understand what the interface, data and business rules can
                support. That might mean rethinking a workflow when information
                arrives late, or prototyping an error state early so we can
                agree on how someone will recover. The earlier we have those
                conversations, the more room we have to improve the design
                before it’s built.
              </p>
              <p className="pt-4">
                At ServiceOntario, I designed vehicle registration workflows for
                dealerships. At Manulife, I worked on tools for benefits
                administrators. At Bombardier, I designed interfaces for
                aviation applications. Across those projects, I’ve mapped
                services, prototyped interactions in Figma and worked with
                engineering to carry accessibility and interaction decisions
                through to the build.
              </p>
              <p className="pt-4">
                My background in computer science and business administration
                helps me connect what people need with what the organisation is
                trying to achieve and what the team can build. The part I enjoy
                most is working through those trade-offs together and seeing
                whether the result makes someone’s task easier.
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
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            I designed tools for benefits administrators at Manulife, vehicle
            registration workflows for dealerships at ServiceOntario, and
            aviation applications at Bombardier. Explore the projects below to
            see how I approached the workflows and interactions in each.
          </p>
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
