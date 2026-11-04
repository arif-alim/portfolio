import { ReadingThumbnail } from './ReadingThumbnail'

const dateFormat = new Intl.DateTimeFormat('en-CA', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

export function ReadingList({ articles, heading: Heading = 'h3' }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map(
        ({
          title,
          url,
          byline,
          date,
          note,
          tags,
          foundational,
          updated,
          thumbnail,
        }) => (
          <li key={url} className="min-w-0">
            <article className="group relative flex h-full flex-col rounded-xl border border-zinc-200 transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:shadow-md motion-reduce:transition-none dark:border-zinc-700 dark:focus-within:ring-blue-400 dark:focus-within:ring-offset-zinc-900">
              <ReadingThumbnail
                title={title}
                topic={tags[0]}
                thumbnail={thumbnail}
              />
              <div className="flex flex-1 flex-col gap-2 p-4">
                <Heading className="font-semibold">
                  <a
                    href={url}
                    className="text-blue-800 underline-offset-4 after:absolute after:inset-0 after:rounded-xl focus-visible:underline group-hover:underline dark:text-blue-300"
                  >
                    {title}
                  </a>
                </Heading>
                <p className="text-sm">{note}</p>
                <p className="mt-auto pt-1 text-xs text-zinc-600 dark:text-zinc-300">
                  {byline} · {updated && 'Updated '}
                  <time dateTime={date}>
                    {dateFormat.format(new Date(date))}
                  </time>
                  {foundational && ' · Foundational'}
                </p>
                {thumbnail && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    Image: {thumbnail.credit}
                  </p>
                )}
                <ul aria-label="Topics" className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        )
      )}
    </ul>
  )
}
