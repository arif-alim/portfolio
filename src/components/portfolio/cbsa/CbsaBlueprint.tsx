import { useRef, useState } from 'react'
import {
  DesignDecisionPanel,
  IllustrativeLabel,
} from '@/components/portfolio/case-study'
import { blueprintStages, blueprintDecisions } from '@/data/cbsaBlueprint'
import styles from './CbsaBlueprint.module.css'

export function CbsaBlueprint() {
  const stageButtons = useRef<(HTMLButtonElement | null)[]>([])
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(true)
  const current = blueprintStages[index]
  const needsDetails = index === 2 && !complete
  const status = needsDetails
    ? 'More information needed'
    : index === 3
    ? 'Example complete'
    : 'Ready to continue'
  const lanes = [
    [
      'User action',
      needsDetails
        ? 'Add the missing detail to the sample request.'
        : current.user,
    ],
    [
      'Frontstage · visible interaction',
      needsDetails
        ? 'Explain what detail is missing and offer a return to the request.'
        : current.frontstage,
    ],
    [
      'Backstage · supporting process',
      needsDetails
        ? 'Pause routing until the sample request is complete.'
        : current.backstage,
    ],
    [
      'System dependency',
      needsDetails
        ? 'Local completeness check · review queue paused'
        : current.dependency,
    ],
  ]
  function reset() {
    setIndex(0)
    setComplete(true)
  }
  return (
    <section
      aria-labelledby="cbsa-demo-title"
      className={`${styles.root} space-y-6`}
    >
      <header className="max-w-3xl space-y-3">
        <IllustrativeLabel>
          Fictional service blueprint · interactive reconstruction
        </IllustrativeLabel>
        <h2 id="cbsa-demo-title" className="text-xl font-semibold">
          Explore the service behind an information request
        </h2>
        <p>
          Select a stage to connect a user action with the visible interaction,
          supporting work and system dependency. Change the sample request to
          see how a decision affects the handoff.
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-300">
          A generic portfolio example, not a CBSA process, policy or system. All
          steps and rules are fictional. Nothing is sent or saved; the demo
          resets when you leave this tab or reload.
        </p>
      </header>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0 space-y-5">
          <nav
            aria-label="Blueprint stages"
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {blueprintStages.map((stage, i) => (
              <button
                key={stage.id}
                ref={(element) => {
                  stageButtons.current[i] = element
                }}
                type="button"
                className={`${styles.button} ${styles.stage}`}
                aria-pressed={index === i}
                aria-controls="cbsa-stage-detail"
                onClick={() => setIndex(i)}
              >
                {i + 1}. {stage.title}
              </button>
            ))}
          </nav>
          <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-zinc-200 p-3 text-sm dark:border-zinc-700">
            <input
              type="checkbox"
              checked={complete}
              onChange={(e) => setComplete(e.target.checked)}
              className="h-4 w-4 rounded border-zinc-500 text-blue-700"
            />
            Sample request has complete details
          </label>
          <section
            id="cbsa-stage-detail"
            aria-labelledby="cbsa-stage-title"
            className="space-y-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
          >
            <div className="space-y-2">
              <h3 id="cbsa-stage-title" className="text-lg font-semibold">
                {index + 1}. {current.title}
              </h3>
              <p
                role="status"
                className="text-sm font-semibold text-blue-800 dark:text-blue-300"
              >
                {current.title} · {status}
              </p>
            </div>
            <dl className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {lanes.map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-2 py-3 sm:grid-cols-[160px_minmax(0,1fr)]"
                >
                  <dt className="text-sm font-semibold">{title}</dt>
                  <dd className="text-sm text-zinc-600 dark:text-zinc-300">
                    {text}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="space-y-2 border-t border-zinc-200 pt-4 dark:border-zinc-700">
              <h4 className="font-semibold">Decision point</h4>
              <p className="text-sm">{current.decision}</p>
              {index === 2 && (
                <p className="text-sm">
                  {complete
                    ? 'Complete → continue to the example response.'
                    : 'Incomplete → return to Request and add details before continuing.'}
                </p>
              )}
              {needsDetails && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => {
                    setIndex(1)
                    stageButtons.current[1]?.focus()
                  }}
                >
                  Return to Request
                </button>
              )}
            </div>
          </section>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className={styles.button}
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
            >
              Previous stage
            </button>
            <button
              type="button"
              className={styles.button}
              disabled={index === 3 || needsDetails}
              onClick={() => setIndex((i) => i + 1)}
            >
              Next stage
            </button>
            <button type="button" className={styles.button} onClick={reset}>
              Reset example
            </button>
          </div>
          <details className="border-t border-zinc-200 pt-4 dark:border-zinc-700">
            <summary className="cursor-pointer py-2 text-sm font-semibold">
              How a repeated card supports the blueprint
            </summary>
            <p className="mt-3 text-sm">
              Each selected stage renders the same four labelled rows from a
              local data object. This illustrates a repeatable information
              hierarchy; the fields are invented for this example.
            </p>
          </details>
        </div>
        <DesignDecisionPanel
          id="cbsa-blueprint-decisions"
          decisions={blueprintDecisions}
        />
      </div>
    </section>
  )
}
