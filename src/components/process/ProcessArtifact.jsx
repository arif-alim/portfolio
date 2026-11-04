import { useState } from 'react'
import { blueprintStages } from '@/data/cbsaBlueprint'
import { buttonContract, tokenFlows } from '@/data/designSystems'
import { ButtonDemo } from '@/components/portfolio/design-systems/ButtonDemo'
import { CodeBlock } from '@/components/portfolio/design-systems/CodeBlock'
import { saveItemStates } from '@/components/portfolio/design-systems/SaveItemExample'
import { TokenExplorer } from '@/components/portfolio/design-systems/TokenExplorer'
import styles from '@/components/portfolio/design-systems/DesignSystems.module.css'

const surface =
  'min-w-0 space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-950'
const labelStyle = 'text-xs font-semibold text-zinc-600 dark:text-zinc-300'
const controlStyle =
  'min-h-[44px] rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium aria-pressed:border-blue-600 aria-pressed:bg-blue-100 aria-pressed:text-blue-950 dark:border-zinc-700 dark:aria-pressed:border-blue-400 dark:aria-pressed:bg-blue-950 dark:aria-pressed:text-blue-100'

const stateSpecs = {
  Default: 'Name: Save item. Enter and Space activate the action.',
  Pressed: 'Name: Save item. The pressed treatment appears during activation.',
  Focused: 'Name: Save item. The visible ring marks where keyboard input goes.',
  Disabled:
    'Name: Save item. The native disabled control is unavailable and skipped in the tab order.',
  Loading:
    'Name: Save item. Keep focus on the action, expose aria-busy and block repeated activation. Announce progress separately.',
  Saved:
    'Name: Saved. Keep focus in place and announce confirmation separately.',
  Error:
    'Name: Retry save. Keep focus in place, announce the error and offer another attempt.',
}

function SaveExplorer() {
  const [state, setState] = useState('Default')
  const [glass, setGlass] = useState(true)
  const [, label, feedback] = saveItemStates.find(([name]) => name === state)
  const loading = state === 'Loading'

  function activate() {
    if (loading || state === 'Saved') return
    setState(state === 'Error' ? 'Saved' : 'Loading')
  }

  return (
    <div className={surface}>
      <p className={labelStyle}>
        Implemented browser preview · illustrative reading list
      </p>
      <fieldset>
        <legend className="mb-2 font-semibold">Save item state</legend>
        <div className="flex flex-wrap gap-2">
          {saveItemStates.map(([name]) => (
            <button
              key={name}
              type="button"
              aria-pressed={state === name}
              className={controlStyle}
              onClick={() => setState(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-2 font-semibold">Treatment</legend>
        <div className="flex flex-wrap gap-2">
          {['Standard', 'Glass'].map((treatment) => (
            <button
              key={treatment}
              type="button"
              aria-pressed={glass === (treatment === 'Glass')}
              className={controlStyle}
              onClick={() => setGlass(treatment === 'Glass')}
            >
              {treatment}
            </button>
          ))}
        </div>
      </fieldset>
      <div className={styles.savePanel} data-glass={glass}>
        <p className="mb-2 text-sm font-semibold">
          Reading list · Notes from a field visit
        </p>
        {glass && (
          <p className="mb-2 text-xs">Liquid Glass–inspired web prototype</p>
        )}
        <div className={styles.saveBackdrop}>
          <button
            type="button"
            className={`${styles.saveSample} ${styles.savePreviewButton}`}
            data-state={state}
            disabled={state === 'Disabled'}
            aria-disabled={loading || state === 'Saved' ? true : undefined}
            aria-busy={loading || undefined}
            onClick={activate}
          >
            {loading && (
              <span aria-hidden="true" className={styles.saveLoader} />
            )}
            {state === 'Saved' && <span aria-hidden="true">✓</span>}
            {label}
          </button>
        </div>
        <p role="status" className="mt-2 min-h-5 text-sm">
          {feedback}
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold">{state} specification</h4>
        <p className="text-sm">{stateSpecs[state]}</p>
        <p className="text-xs">
          Minimum target 44 × 44 CSS pixels. Choose any state to inspect it
          directly.
        </p>
      </div>
    </div>
  )
}

const nodes = [
  {
    name: 'Figma',
    detail:
      'I document variants and states so the design specification gives engineering a concrete interface to implement.',
    example: 'Button · Variant=Primary | Secondary · Loading=true | false',
  },
  {
    name: 'Design Tokens',
    detail:
      'I keep the alias chain visible so a team can review why a component uses a value and what else would change with it.',
    example: tokenFlows[0].nodes.join(' → '),
  },
  {
    name: 'React Components',
    detail:
      'I use a native button and a typed interface. Loading keeps the accessible name and focus while repeated activation is guarded.',
    example: '<Button variant="primary" loading>Save changes</Button>',
  },
  {
    name: 'AI-Readable Contracts',
    detail:
      'I sketched a versioned contract that a tool could use to select an approved variant and verify its choices against a component registry.',
    example: JSON.stringify({
      identity: buttonContract.identity,
      variants: buttonContract.variants,
      focus: buttonContract.accessibility.focus,
    }),
  },
]

function ArchitectureWalkthrough() {
  const [index, setIndex] = useState(0)
  const node = nodes[index]

  return (
    <div className={surface}>
      <p className={labelStyle}>
        Architectural exploration · interactive walkthrough
      </p>
      <fieldset>
        <legend className="mb-2 font-semibold">Trace the handoff</legend>
        <ol className="grid gap-2 lg:grid-cols-4">
          {nodes.map(({ name }, position) => (
            <li key={name} className="flex items-center gap-2">
              {position > 0 && (
                <span aria-hidden="true" className="hidden lg:inline">
                  →
                </span>
              )}
              <button
                type="button"
                className={`${controlStyle} w-full`}
                aria-pressed={position === index}
                onClick={() => setIndex(position)}
              >
                {name}
              </button>
            </li>
          ))}
        </ol>
      </fieldset>
      <div className="space-y-2" aria-live="polite">
        <h4 className="font-semibold">{node.name} example</h4>
        <p>{node.detail}</p>
        <code className="block break-words rounded-lg bg-white p-3 text-xs dark:bg-zinc-900">
          {node.example}
        </code>
      </div>
    </div>
  )
}

function ServiceExcerpt({ mode }) {
  const [stageId, setStageId] = useState('review')
  const [complete, setComplete] = useState(false)
  const stage = blueprintStages.find(({ id }) => id === stageId)
  const handoff = mode === 'handoff'
  const rows = handoff
    ? [
        [
          'Frontstage',
          complete
            ? 'Your request is ready for review.'
            : 'Add more detail to continue.',
        ],
        [
          'Backstage',
          complete
            ? 'Route to the fictional review queue.'
            : 'Return to the requester for details.',
        ],
        ['Next owner', complete ? 'Reviewer' : 'Requester'],
      ]
    : [
        ['User action', stage.user],
        ['Frontstage', stage.frontstage],
        ['Backstage', stage.backstage],
        ['Dependency', stage.dependency],
      ]

  return (
    <div className={surface}>
      <p className={labelStyle}>Illustrative service · fictional request</p>
      {handoff ? (
        <label className="flex min-h-[44px] w-fit items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={complete}
            onChange={(event) => setComplete(event.target.checked)}
          />
          Request details are complete
        </label>
      ) : (
        <fieldset>
          <legend className="mb-2 font-semibold">Journey stage</legend>
          <div className="flex flex-wrap gap-2">
            {blueprintStages.map(({ id, title }) => (
              <button
                key={id}
                type="button"
                className={controlStyle}
                aria-pressed={id === stageId}
                onClick={() => setStageId(id)}
              >
                {title}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      <dl
        aria-live="polite"
        className="divide-y divide-zinc-200 dark:divide-zinc-700"
      >
        {(mode === 'journey' ? rows.slice(0, 2) : rows).map(
          ([label, detail]) => (
            <div
              key={label}
              className="grid gap-1 py-2 sm:grid-cols-[7rem_1fr] sm:gap-3"
            >
              <dt className="font-semibold">{label}</dt>
              <dd>{detail}</dd>
            </div>
          )
        )}
      </dl>
    </div>
  )
}

export function ProcessArtifact({ topic }) {
  switch (topic.demo) {
    case 'tokens':
      return <TokenExplorer />
    case 'save':
      return <SaveExplorer />
    case 'architecture':
      return <ArchitectureWalkthrough />
    case 'contract':
      return (
        <CodeBlock
          code={JSON.stringify(buttonContract, null, 2)}
          label="Button contract · illustrative JSON"
        />
      )
    case 'button':
      return <ButtonDemo />
    case 'journey':
    case 'blueprint':
    case 'handoff':
      return <ServiceExcerpt mode={topic.demo} />
    default:
      return topic.example ? (
        <div className={surface}>
          <p className={labelStyle}>
            {topic.exampleLabel || 'Illustrative example'}
          </p>
          <dl className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {topic.example.map(([label, detail]) => (
              <div
                key={label}
                className="grid gap-1 py-2 text-sm sm:grid-cols-[minmax(7rem,1fr)_3fr] sm:gap-3"
              >
                <dt className="font-semibold">{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null
  }
}
