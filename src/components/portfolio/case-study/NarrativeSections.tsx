import type { ReactNode } from 'react'

/** Optional narrative blocks; callers supply only supported project content. */
export function NarrativeSections({
  sections,
  leadingDivider = true,
}: {
  /** Set false when the preceding block already supplies the boundary divider. */
  leadingDivider?: boolean
  sections: readonly { id: string; title: string; content: ReactNode }[]
}) {
  return (
    <div className="max-w-3xl space-y-6">
      {sections.map(({ id, title, content }) => (
        <section
          key={id}
          aria-labelledby={id}
          className={`space-y-2 border-t border-zinc-200 pt-5 dark:border-zinc-700 ${
            leadingDivider ? '' : 'first:border-t-0 first:pt-0'
          }`}
        >
          <h3 id={id} className="text-lg font-semibold">
            {title}
          </h3>
          <div className="space-y-3">{content}</div>
        </section>
      ))}
    </div>
  )
}
