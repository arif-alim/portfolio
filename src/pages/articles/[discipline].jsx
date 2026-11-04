import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ReadingList } from '@/components/articles/ReadingList'
import { readingGroups } from '@/data/readingLibrary'

export function getStaticPaths() {
  return {
    paths: readingGroups.map(({ id }) => ({ params: { discipline: id } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const group = readingGroups.find(({ id }) => id === params.discipline)
  return group ? { props: { group } } : { notFound: true }
}

export default function ReadingDiscipline({ group }) {
  const [tag, setTag] = useState('')
  const tags = [
    ...new Set(group.articles.flatMap((article) => article.tags)),
  ].sort()
  const articles = tag
    ? group.articles.filter((article) => article.tags.includes(tag))
    : group.articles

  return (
    <>
      <Head>
        <title>{group.name} articles | Arif Alim</title>
        <meta
          name="description"
          content={`Recommended reading on ${group.name} curated by Arif Alim.`}
        />
      </Head>
      <SimpleLayout title={group.name} intro={group.description}>
        <Link
          href={{ pathname: '/articles', query: { discipline: group.id } }}
          className="inline-flex min-h-[44px] items-center text-sm text-blue-800 underline underline-offset-4 dark:text-blue-300"
        >
          ← Back to Articles
        </Link>
        <section aria-labelledby="reading-heading" className="mt-4 space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="reading-heading" className="text-xl font-semibold">
              Recommended reading
            </h2>
            <div>
              <label
                htmlFor="reading-tag"
                className="block text-xs font-semibold"
              >
                Filter by tag
              </label>
              <select
                id="reading-tag"
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                className="mt-1 min-h-[44px] max-w-full rounded-lg border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900"
              >
                <option value="">All tags</option>
                {tags.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <p role="status" className="text-sm text-zinc-600 dark:text-zinc-300">
            {articles.length} {articles.length === 1 ? 'article' : 'articles'}
          </p>
          <ReadingList articles={articles} />
        </section>
      </SimpleLayout>
    </>
  )
}
