import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

import story from '@/images/process/story.svg'
import empathize from '@/images/process/empathize.svg'
import define from '@/images/process/define.svg'
import ideate from '@/images/process/ideate.svg'
import prototype from '@/images/process/prototype.svg'
import testing from '@/images/process/testing.svg'

// Ensure any Link components in this file have exactly one child element

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

export default function Process() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Design Process - Arif Alim</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="The process"
        intro="Design is at the core of every successful product. A product that fails to meet its users’ needs cannot thrive in today’s market. More organizations are embracing human-centered design, focusing on end users and evaluating every decision through their needs and goals. My design process is guided by the Stanford d.school framework and IDEO’s user-centric approach, which emphasizes empathy, iteration, and collaboration."
      >
        <div className="space-y-24">
          <section>
            <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
              <h2 className="text-xl font-bold dark:text-zinc-100">
                My Dynamic UI/UX Design Process
              </h2>
              <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                Inspired by the Stanford d.school design thinking framework and
                IDEO’s user-centric approach, my process blends creativity,
                empathy, and iteration to deliver impactful designs.
              </p>
            </div>
          </section>
          <section className="mt-6 p-4">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {/* Phase 1 */}
              <li className="mb-10 ml-10">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <Image
                    className="rounded shadow-lg"
                    src={story}
                    alt="Design thinking - story icon"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Step 1
                  </time>
                  <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                    <h2 className="text-lg font-bold text-zinc-700">
                      Discovery & Research
                    </h2>
                    The first step in any successful design journey is
                    understanding the problem at its core. I begin by conducting
                    stakeholder interviews and workshops (using Miro) to gather
                    business requirements and understand the broader context.
                    User research—through surveys, contextual inquiries, and
                    usability testing—helps uncover key pain points and user
                    behaviors. Existing service blueprints and user journeys are
                    analyzed to map the current state, while data analytics,
                    such as GIS-based insights from ArcGIS, reveal service gaps.
                    Findings are aligned with OPS digital standards and
                    accessibility requirements (AODA, WCAG 2.0) to ensure
                    inclusivity from the start.
                  </div>
                </div>
              </li>
              {/* Phase 2 */}
              <li className="mb-10 ml-10">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <Image
                    className="rounded shadow-lg"
                    src={empathize}
                    alt="Design thinking - story icon"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Step 2
                  </time>
                  <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                    <h2 className="text-lg font-bold text-zinc-700">
                      Define & Ideate
                    </h2>
                    With a clear understanding of the problem, I identify key
                    user personas and map their customer journeys to ensure the
                    solution addresses real-world needs. Problem statements and
                    opportunity areas are crafted to guide the ideation process,
                    during which early wireframes and conceptual models are
                    brainstormed and sketched. Service improvements are
                    prioritized based on feasibility, impact, and alignment with
                    OPS policies, ensuring that the solution is both practical
                    and impactful.
                    {/* <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                      <ul className="list-disc px-4">
                        <li>User interviews</li>
                        <li>Contextual inquiry</li>
                        <li>Empathy map</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </li>
              {/* Phase 3 */}
              <li className="mb-10 ml-12">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <Image
                    className="rounded shadow-lg"
                    src={define}
                    alt="Design thinking - story icon"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Step 3
                  </time>
                  <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                    <h2 className="text-lg font-bold text-zinc-700">
                      Prototyping & Testing
                    </h2>
                    Prototyping transforms ideas into tangible solutions.
                    High-fidelity prototypes are created in Figma for
                    interactive testing, and iterative design cycles incorporate
                    feedback from real users and stakeholders. A/B testing and
                    usability studies validate design choices, while GIS
                    integrations (via ArcGIS Portal and ArcGIS Online) ensure
                    the solution is spatially informed. Throughout this phase,
                    close collaboration with developers and IT teams guarantees
                    technical feasibility and alignment with project goals.
                    {/* <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                      <ul className="list-disc px-4">
                        <li>User journey analysis</li>
                        <li>How might we technique</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </li>
              {/* Phase 4 */}
              <li className="mb-10 ml-10">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <Image
                    className="rounded shadow-lg"
                    src={ideate}
                    alt="Design thinking - story icon"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Step 4
                  </time>
                  <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                    <h2 className="text-lg font-bold text-zinc-700">
                      Implementation & Development Support
                    </h2>
                    <p>
                      During implementation, I work closely with developers,
                      business analysts, and QA teams to ensure the design
                      intent is preserved. Detailed service blueprints and
                      comprehensive design system documentation support seamless
                      development. Accessibility compliance is prioritized, with
                      AODA audits conducted before launch, and content strategy
                      reviews are performed to align with OPS standards,
                      enhancing clarity and usability.
                    </p>
                  </div>
                </div>
              </li>
              {/* Phase 5 */}
              <li className="mb-10 ml-10">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                  <Image
                    className="rounded shadow-lg"
                    src={prototype}
                    alt="Design thinking - story icon"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                    Step 5
                  </time>
                  <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                    <h2 className="text-lg font-bold text-zinc-700">
                      Post-Launch Evaluation & Continuous Improvement
                    </h2>
                    <p>
                      The design process doesn’t end at launch. Post-launch, I
                      track user engagement metrics to evaluate performance and
                      identify areas for iteration. User feedback is collected
                      via surveys and analytics to inform future improvements,
                      and retrospectives with stakeholders capture valuable
                      lessons learned. This commitment to continuous improvement
                      ensures that the solution evolves alongside user needs,
                      maintaining its relevance and impact over time.
                    </p>
                    {/* <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                      <ul className="list-disc px-4">
                        <li>Mock-ups</li>
                        <li>low-fidelity prototypes</li>
                        <li>mid-fidelity prototypes</li>
                        <li>high-fidelity prototypes</li>
                      </ul>
                      <p className="mt-2">
                        <span className="mx-1 text-rose-500">*</span>While not
                        limiting ourselves to one prototype and think about
                        technical feasibility and business viability.
                      </p>
                    </div> */}
                  </div>
                </div>
              </li>
              {/* Phase 6 */}
            </ol>
          </section>
          <section className="max-w-3xl space-y-10">
            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-700 dark:border-gray-500 dark:text-gray-300 sm:text-2xl">
                A Dynamic, Iterative Process
              </h2>
              <p className="text-base font-normal text-gray-500 dark:border-gray-500 dark:text-gray-300">
                The design thinking process is inherently dynamic—a cyclical
                journey of exploration, ideation, prototyping, and refinement.
                It’s not a linear path but a collaborative dialogue between
                designers, users, and stakeholders. Feedback is welcomed as a
                tool for improvement, ensuring the final product is empathetic,
                functional, and adaptable. By putting users at the center of
                every decision, I craft solutions that truly resonate and
                deliver lasting value.
              </p>
            </div>
          </section>
        </div>
      </SimpleLayout>
    </div>
  )
}
