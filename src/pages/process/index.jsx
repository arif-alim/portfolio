import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProcessArtifact } from '@/components/process/ProcessArtifact'
import { processDisciplines } from '@/data/processTopics'

function processHref(discipline, topic = discipline.topics[0]) {
  return {
    pathname: '/process',
    query: { discipline: discipline.id, topic: topic.id },
  }
}

const linkStyle =
  'flex min-h-[44px] items-center rounded-lg text-[14px] font-medium [padding-block:0.25rem] [padding-inline:0.5rem] focus-visible:outline-offset-[-3px]'
const activeStyle =
  'bg-blue-100 text-blue-950 dark:bg-blue-950 dark:text-blue-100'
const inactiveStyle = 'hover:bg-zinc-100 dark:hover:bg-zinc-800'

export default function Process() {
  const router = useRouter()
  const discipline =
    processDisciplines.find(({ id }) => id === router.query.discipline) ||
    processDisciplines[0]
  const topic =
    discipline.topics.find(({ id }) => id === router.query.topic) ||
    discipline.topics[0]

  return (
    <>
      <Head>
        <title>Process | Arif Alim</title>
        <meta
          name="description"
          content="How I work across product design, service design, design systems, accessibility and frontend delivery."
        />
      </Head>
      <SimpleLayout
        title="How I work"
        intro="I start with the decision a team needs to make, build the artefact that helps us make it, and check how it behaves in use. Explore any discipline or topic."
      >
        <nav
          aria-label="Disciplines"
          className="hidden grid-cols-5 gap-1 rounded-xl border border-zinc-200 p-1 dark:border-zinc-700 md:grid"
        >
          {processDisciplines.map((item) => (
            <Link
              key={item.id}
              href={processHref(item)}
              shallow
              scroll={false}
              aria-current={item === discipline ? 'true' : undefined}
              className={`${linkStyle} justify-center text-center ${
                item === discipline ? activeStyle : inactiveStyle
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <label
            htmlFor="process-discipline"
            className="block text-xs font-semibold"
          >
            Discipline
          </label>
          <select
            id="process-discipline"
            className="mt-1 min-h-[44px] w-full rounded-lg border-zinc-300 bg-white font-medium dark:border-zinc-600 dark:bg-zinc-900"
            value={discipline.id}
            onChange={(event) => {
              const next = processDisciplines.find(
                ({ id }) => id === event.target.value
              )
              router.push(processHref(next), undefined, {
                shallow: true,
                scroll: false,
              })
            }}
          >
            {processDisciplines.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-[minmax(9rem,1fr)_3fr] lg:gap-8">
          <nav
            aria-label="Topics"
            className="self-start rounded-xl border border-zinc-200 p-2 dark:border-zinc-700"
          >
            <p className="px-3 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              Topics
            </p>
            {discipline.topics.map((item) => (
              <Link
                key={item.id}
                href={processHref(discipline, item)}
                shallow
                scroll={false}
                aria-current={item === topic ? 'page' : undefined}
                className={`${linkStyle} ${
                  item === topic ? activeStyle : inactiveStyle
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <article
            aria-labelledby="process-topic"
            className="min-w-0 space-y-5 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-700 sm:p-6"
          >
            <header className="space-y-2">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                {discipline.name}
              </p>
              <h2
                id="process-topic"
                className="text-2xl font-semibold tracking-tight"
              >
                {topic.name}
              </h2>
            </header>
            <section className="space-y-1">
              <h3 className="font-semibold">The decision</h3>
              <p className="max-w-prose">{topic.decision}</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-semibold">The artefact</h3>
              <p className="max-w-prose">
                {topic.artifact}
                {topic.reference && (
                  <>
                    {' '}
                    <Link
                      href={topic.reference[0]}
                      className="text-blue-700 underline underline-offset-4 dark:text-blue-300"
                    >
                      {topic.reference[1]}
                    </Link>
                    .
                  </>
                )}
              </p>
              <ProcessArtifact key={topic.id} topic={topic} />
            </section>
            <section className="space-y-1">
              <h3 className="font-semibold">
                {topic.proposedCheck ? 'How I’d check it' : 'How I checked it'}
              </h3>
              <p className="max-w-prose">{topic.check}</p>
            </section>
          </article>
        </div>
      </SimpleLayout>
    </>
  )
}
