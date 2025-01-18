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

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

export default function Process() {
  return (
    <>
      <Head>
        <title>Design Process - Arif Alim</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="The process"
        intro="Design plays a crucial role in a product's success. A product that fails to meet its customers' needs cannot be successful on the market. More and more companies are focusing on human-centred design to increase their chances of success. Put the end-user at the heart of product design and evaluate every design decision according to the user's needs and wants."
      >
        <div className="space-y-24">
          <div className="container mx-auto ">
            <section className="">
              <div className="border-b-4 border-zinc-100 pb-4 dark:border-zinc-700">
                <h2 className=" text-xl font-bold  dark:text-zinc-100">
                  My Dynamic UI/UX Design Process
                </h2>

                <p className="mt-4 max-w-3xl text-tiny text-zinc-700 dark:font-light dark:text-zinc-100">
                  Stanford D. School design thinking process with IDEO&rsquo;s
                  user-centric approach to design
                </p>
              </div>
            </section>
            <section className="mt-6 p-4">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-10">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={story}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 1
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">Story</h2>
                      Design thinking is a universal methodology that works
                      equally well for physical and digital design. No matter
                      what you design, whether it&apos;s a digital app or a
                      physical chair, design thinking allows you to set your
                      assumptions aside and build products tailored specifically
                      for your users&apos; needs. Understanding our clients and
                      their users and delivering high-quality work, we look at
                      our process dynamically as we iterate over different
                      phases of the process to successfully deliver and launch.
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-10">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={empathize}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 2
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">
                        Empathize
                      </h2>
                      As you continue developing empathy for your users, focus
                      on the emotional part of interactions (how do products
                      make users feel?). Emotions play a tremendous role in how
                      we think about products. When users develop positive
                      associations with products, they are more likely to
                      continue using them. That&apos;s why it&apos;s essential
                      to collect emotional responses (both positive and
                      negative) that test participants&apos; experience when
                      performing a particular task in a product. We use the
                      following techniques to help define the problem and guide
                      your process:
                      <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                        <ul className="list-disc px-4 ">
                          <li>User interviews</li>
                          <li>Contextual inquiry</li>
                          <li>Empathy map</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-12">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={define}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 3
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">
                        Define
                      </h2>
                      At this stage, we analyze the qualitative and quantitative
                      data we obtained during the empathize stage to draw
                      insights from it. The information will define a problem
                      statement and guide the ideation process. Clear problem
                      statements will navigate the product team throughout the
                      design process. In addition, those statements will help
                      you understand what features and functions your users need
                      to solve their problems.
                      <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                        <ul className="list-disc px-4 ">
                          <li>User journey analysis</li>
                          <li>How might we technique</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-10">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={ideate}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 4
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">
                        Ideate
                      </h2>
                      <p>
                        Ideation, or generating ideas, is a phase in which you
                        go from understanding problems to exploring solutions.
                        The identified ideas will be prototyped and tested with
                        people who represent your target audience.
                      </p>
                      <p className="mt-3">
                        During this stage, we do not judge the ideas. When
                        it&apos;s time to generate ideas, we give ourselves and
                        our team creative freedom. The more ideas you generate,
                        the better. Don&apos;t judge your ideas&apos; technical
                        feasibility or quality in this step.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-10">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={prototype}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 5
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">
                        Prototype
                      </h2>
                      Prototyping allows you to turn ideas generated in the
                      previous phase into tangible artifacts that can be tested
                      later with real users. Most of the time, you start with
                      low-fidelity prototypes (prototypes that convey the basic
                      idea of the intended solution) and move towards
                      high-fidelity as you get more user feedback. There are
                      different types of prototypes for the different stages of
                      design:
                      <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                        <ul className="list-disc px-4 ">
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
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-10">
                  <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="rounded shadow-lg"
                      src={testing}
                      alt="Design thinking - story icon"
                    />
                  </span>
                  <div className="items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                      Phase 6
                    </time>
                    <div className="max-w-3xl text-sm font-normal text-gray-500 dark:text-gray-300">
                      <h2 className="text-lg font-bold text-zinc-700">
                        Testing
                      </h2>
                      This phase aims to understand what parts of your design
                      are effective and which are not. A product team gives a
                      prototype to test participants during the testing phase.
                      It encourages them to complete some everyday tasks with
                      it. Testing will provide a product team with a clearer
                      understanding of how real users interact with a product,
                      what problems they face, and how they feel.
                      <div className="my-3 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm font-normal text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                        <p>
                          Critically evaluate the design and ensure minimal
                          cognitive load on UX.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </section>
            <section className="max-w-3xl space-y-10">
              <div>
                <h2 className="mb-2 text-xl font-bold text-gray-700 dark:border-gray-500 dark:text-gray-300 sm:text-2xl">
                  Understand your users
                </h2>
                <p className="text-base font-normal text-gray-500 dark:border-gray-500 dark:text-gray-300">
                  The discovery phase and understanding the user are pivotal in
                  the design process, forming the bedrock upon which all
                  successful products are built. This stage is crucial because
                  it&apos;s where designers step into the users&apos; shoes,
                  gaining insights into their behaviors, needs, and motivations.
                  It&apos;s about asking the right questions, observing the
                  unsaid, and listening with empathy to uncover the underlying
                  problems and desires. This deep user comprehension ensures
                  that design decisions are made not on assumptions but on
                  validated user data, which can significantly reduce the risk
                  of misalignment with user expectations. By prioritizing user
                  understanding, designers are empowered to craft solutions that
                  resonate on a personal level, foster user satisfaction, and
                  encourage loyalty. It&apos;s a commitment to not just meeting
                  but exceeding user expectations, which can transform a good
                  product into a great one that users embrace and advocate for.
                </p>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-bold text-gray-700 dark:border-gray-500 dark:text-gray-300 sm:text-2xl">
                  Design thinking is a dynamic process
                </h2>
                <p className="text-base font-normal text-gray-500 dark:border-gray-500 dark:text-gray-300">
                  The design thinking process is inherently dynamic, a living
                  methodology that adapts fluidly to the ever-changing landscape
                  of user needs and project demands. It&apos;s not a linear path
                  but rather a cyclical journey of exploration, ideation, and
                  iteration. At its core, it involves understanding the user
                  deeply, defining the problem in human-centric ways, and
                  fostering a creative environment where brainstorming is the
                  norm. Design thinkers prototype rapidly, welcoming feedback as
                  a beacon for refinement, and not as a sign of failure. This
                  agility ensures that the end result isn&apos;t just a static
                  product, but a reflection of a continuous dialogue between the
                  designer, the user, and the problem space. The iterative
                  nature of the design thinking process allows for solutions to
                  be responsive, flexible, and deeply empathetic to the
                  user&apos;s needs, ensuring that the final designs are not
                  only functional but truly resonate with users on a personal
                  level.
                </p>
              </div>
              <p>
                It&apos;s important to understand the client&apos;s needs and
                goals before starting any project.
              </p>
              <p>
                We&apos;ll work together to create a plan that meets your needs
                and fits your budget.
              </p>
              <p>
                I&apos;ve worked with clients from various industries, including
                healthcare, finance, and education.
              </p>
              <p>Let&apos;s create something amazing together!</p>
              <p>
                I&apos;m passionate about creating beautiful and functional
                designs that make a difference.
              </p>
              <p>
                I&apos;ve been designing and developing websites for over 15
                years.
              </p>
              <p>
                Let&apos;s work together to create a website that you&apos;ll
                love.
              </p>
            </section>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
