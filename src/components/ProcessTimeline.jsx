export function ProcessTimeline({ stages }) {
  return (
    <div className="mt-6 py-4">
      <ol className="border-l border-gray-200 dark:border-gray-700">
        {stages.map((stage, index) => (
          <li key={stage.title} className="mb-10 ml-4 sm:ml-6">
            <div className="items-start justify-between rounded-lg border bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 sm:flex">
              <span className="mb-1 shrink-0 whitespace-nowrap text-xs font-normal text-gray-400 sm:order-last sm:mb-0 sm:ml-4">
                Step {index + 1}
              </span>
              <div className="max-w-3xl font-normal">
                <h3 className="mb-2 text-lg font-semibold">{stage.title}</h3>
                <p>{stage.description}</p>
                <p className="mt-3">
                  <span className="font-semibold">Key activities:</span>{' '}
                  {stage.activities}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
