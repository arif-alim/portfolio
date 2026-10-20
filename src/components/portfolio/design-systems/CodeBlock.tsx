import type { ReactNode } from 'react'
export function CodeBlock({ code, label }: { code: string; label: string }) {
  const parts = code.split(
    /("(?:[^"\\]|\\.)*"|'[^']*'|\b(?:type|boolean|string|React|true|false)\b)/g
  )
  return (
    <figure className="my-4 min-w-0">
      <figcaption className="mb-2 text-xs font-semibold">{label}</figcaption>
      <pre
        tabIndex={0}
        aria-label={label}
        className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-6 dark:border-zinc-700 dark:bg-zinc-950"
      >
        <code>
          {parts.map(
            (part, i): ReactNode => (
              <span
                key={i}
                className={
                  /^['"]/.test(part)
                    ? 'text-blue-700 dark:text-blue-300'
                    : /^(type|boolean|string|React|true|false)$/.test(part)
                    ? 'text-purple-700 dark:text-purple-300'
                    : undefined
                }
              >
                {part}
              </span>
            )
          )}
        </code>
      </pre>
    </figure>
  )
}
