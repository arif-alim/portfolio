import type { DesignDecision } from './types'

export function DesignDecisionPanel({
  id,
  title = 'Design decisions',
  decisions,
}: {
  id: string
  title?: string
  decisions: readonly DesignDecision[]
}) {
  if (!decisions.length) return null
  return (
    <aside
      aria-labelledby={id}
      className="border-t border-zinc-200 pt-5 dark:border-zinc-700 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"
    >
      <h3 id={id} className="mb-4 font-semibold">
        {title}
      </h3>
      <dl className="space-y-4">
        {decisions.map(([name, explanation]) => (
          <div key={name}>
            <dt className="text-sm font-semibold">{name}</dt>
            <dd className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
              {explanation}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
