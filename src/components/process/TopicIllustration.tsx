import type { Illustration } from '@/data/processDomains'

export function TopicIllustration({
  illustration,
}: {
  illustration: Illustration
}) {
  return (
    <figure className="min-w-0 space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950">
      <figcaption className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
        {illustration.caption}
      </figcaption>
      {illustration.kind === 'table' && (
        <div
          className="overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          role="region"
          aria-label={illustration.caption}
          tabIndex={0}
        >
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{illustration.caption}</caption>
            <thead>
              <tr>
                {illustration.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="border-b border-zinc-300 p-2 align-top dark:border-zinc-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {illustration.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th
                        key={cellIndex}
                        scope="row"
                        className="border-b border-zinc-200 p-2 align-top font-medium dark:border-zinc-800"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={cellIndex}
                        className="border-b border-zinc-200 p-2 align-top dark:border-zinc-800"
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {illustration.kind === 'flow' && (
        <ol className="space-y-2 border-l-2 border-blue-200 pl-4 dark:border-blue-800">
          {illustration.steps.map(([label, description]) => (
            <li
              key={label}
              className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <p className="font-semibold">{label}</p>
              <p className="mt-1 text-sm">{description}</p>
            </li>
          ))}
        </ol>
      )}
      {illustration.kind === 'code' && (
        <pre className="whitespace-pre-wrap break-words rounded-lg bg-white p-3 text-sm dark:bg-zinc-900">
          <code>{illustration.code}</code>
        </pre>
      )}
      {illustration.kind === 'checklist' && (
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {illustration.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </figure>
  )
}
