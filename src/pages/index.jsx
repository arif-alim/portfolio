import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { SimpleLayout } from '@/components/SimpleLayout'

import { GithubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

const pageTitle = 'Arif Alim | Business, Design, Technology & AI'
const pageDescription =
  'Arif Alim is a multidisciplinary professional with 15+ years of experience across business analysis, business systems analysis, product ownership, product design, accessibility, engineering and digital transformation.'

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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <SimpleLayout
        title={
          <>
            Hi, I’m Arif Alim.
            <br />
            <span className="text-xl font-semibold">
              Bridging Business, Design, Technology and Artificial Intelligence.
            </span>
          </>
        }
        intro={
          <>
            A multidisciplinary professional with 15+ years of experience across
            Business Analysis, Business Systems Analysis, Product Ownership,
            Product Design, Service Design and Frontend Engineering.
            <span className="mt-4 block">
              Attended the Double Degree Program in Honours Bachelor of Computer
              Science (BCS) at the University of Waterloo and Honours Bachelor
              of Business Administration (BBA) at Wilfrid Laurier University.
            </span>
          </>
        }
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
              <p className="pt-4">
                I&apos;m a problem solver at heart. Over the past 15+ years,
                I&apos;ve worked at the intersection of business, design and
                technology, helping organisations transform complex challenges
                into practical, scalable and meaningful solutions. My experience
                spans business analysis, business systems analysis, product
                ownership, digital transformation, experience design and
                software development.
              </p>
              <p className="pt-4">
                I approach challenges from both a business and technical
                perspective. I work closely with business leaders, Product
                Owners, Business Analysts, Business Systems Analysts, subject
                matter experts and engineering teams to understand business
                objectives, define requirements, evaluate opportunities and
                translate ideas into actionable solutions. My work encompasses
                process optimization, business rules, system requirements,
                product strategy, roadmaps, feature prioritization and delivery.
              </p>
              <p className="pt-4">
                Throughout my career, I&apos;ve contributed to complex
                enterprise initiatives across banking, insurance, government,
                energy and aviation. At ServiceOntario, I helped shape the
                modernization of dealership vehicle registration services. At
                TD, I proposed opportunities to simplify insurance claims and
                billing experiences. At Manulife, I worked on enterprise
                solutions supporting benefits administration. Across these
                initiatives, I&apos;ve connected business needs, customer
                experiences and technical capabilities throughout the product
                development lifecycle.
              </p>
              <p className="pt-4">
                My hands-on experience in software development, systems
                integration, accessibility and design systems allows me to
                bridge the gap between business requirements and technical
                implementation. I&apos;m also passionate about artificial
                intelligence, intelligent automation and emerging technologies,
                particularly their potential to transform how organisations
                operate, innovate and deliver value.
              </p>
              <p className="pt-4">
                My background in computer science and business administration
                shapes how I approach problems holistically, balancing business
                objectives, customer needs, technical feasibility and long-term
                scalability. What drives me most is bringing these perspectives
                together to solve meaningful problems and deliver measurable
                outcomes.
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
