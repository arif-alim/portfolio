import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ReadingList } from '@/components/articles/ReadingList'
import { readingGroups } from '@/data/readingLibrary'

const intro =
  'A curated collection of practical reads on design, research, accessibility and front-end engineering.'

export default function Articles() {
  const router = useRouter()
  const group =
    readingGroups.find(({ id }) => id === router.query.discipline) ||
    readingGroups[0]

  function previewHref(id) {
    return { pathname: '/articles', query: { discipline: id } }
  }

  return (
    <>
      <Head>
        <title>Articles - Arif Alim</title>
        <meta name="description" content={intro} />
      </Head>
      <SimpleLayout title="Articles" intro={intro}>
        <section aria-labelledby="recommended-heading" className="space-y-4">
          <h2 id="recommended-heading" className="text-xl font-semibold">
            Recommended reading
          </h2>
          <nav
            aria-label="Reading disciplines"
            className="hidden flex-wrap gap-1 rounded-xl border border-zinc-200 p-1 dark:border-zinc-700 md:flex"
          >
            {readingGroups.map(({ id, name }) => (
              <Link
                key={id}
                href={previewHref(id)}
                shallow
                scroll={false}
                aria-current={id === group.id ? 'page' : undefined}
                className={`flex min-h-[44px] flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium focus-visible:outline-offset-[-3px] ${
                  id === group.id
                    ? 'bg-blue-100 text-blue-950 dark:bg-blue-950 dark:text-blue-100'
                    : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <label
              htmlFor="reading-discipline"
              className="block text-xs font-semibold"
            >
              Discipline
            </label>
            <select
              id="reading-discipline"
              value={group.id}
              className="mt-1 min-h-[44px] w-full rounded-lg border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900"
              onChange={(event) =>
                router.push(previewHref(event.target.value), undefined, {
                  shallow: true,
                  scroll: false,
                })
              }
            >
              {readingGroups.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <section aria-labelledby="reading-preview" className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-x-4">
              <h3 id="reading-preview" className="text-lg font-semibold">
                {group.name}
              </h3>
              {group.articles.length > 3 && (
                <Link
                  href={`/articles/${group.id}`}
                  className="inline-flex min-h-[44px] items-center text-sm font-semibold text-blue-800 underline underline-offset-4 dark:text-blue-300"
                >
                  Browse all {group.articles.length} articles
                </Link>
              )}
            </div>
            <ReadingList articles={group.articles.slice(0, 3)} heading="h4" />
          </section>
        </section>
      </SimpleLayout>
    </>
  )
}
