import { useState } from 'react'
import {
  validatePlan,
  type PlanSettings,
  type DemoErrors,
} from '@/data/manulifeDemo'
import {
  DemoErrorSummary,
  DemoSection,
  ManulifeFormField,
} from './ManulifeFormField'
import styles from './Manulife.module.css'
export function ManulifePlan({
  plan,
  editable,
  onSave,
}: {
  plan: PlanSettings
  editable: boolean
  onSave: (plan: PlanSettings) => void
}) {
  const [draft, setDraft] = useState(plan)
  const [errors, setErrors] = useState<DemoErrors>({})
  return (
    <DemoSection title="Plan configuration">
      <p className="text-xs text-zinc-600 dark:text-zinc-300">
        Sample settings only; these are not Manulife benefit products or
        eligibility rules.{' '}
        {editable
          ? 'All displayed fields are required.'
          : 'Select Plan administrator to edit.'}
      </p>
      <form
        noValidate
        aria-label="Sample plan configuration"
        onSubmit={(e) => {
          e.preventDefault()
          if (!editable) return
          const next = validatePlan(draft)
          setErrors(next)
          if (!Object.keys(next).length)
            onSave({
              ...draft,
              dependentLimit: draft.dependents ? draft.dependentLimit : '',
            })
        }}
      >
        <DemoErrorSummary errors={errors} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ManulifeFormField
            name="name"
            label="Plan name"
            value={draft.name}
            error={errors.name}
            disabled={!editable}
            onChange={(name) => setDraft((d) => ({ ...d, name }))}
          />
          <div>
            <label htmlFor="manulife-coverage" className="font-semibold">
              Coverage option (required)
            </label>
            <select
              id="manulife-coverage"
              className={styles.input}
              value={draft.coverage}
              disabled={!editable}
              onChange={(e) =>
                setDraft((d) => ({
                  ...d,
                  coverage: e.target.value as PlanSettings['coverage'],
                }))
              }
            >
              <option value="standard">Standard · sample</option>
              <option value="extended">Extended · sample</option>
            </select>
          </div>
        </div>
        <label className="my-4 flex min-h-[44px] items-center gap-2">
          <input
            type="checkbox"
            checked={draft.dependents}
            disabled={!editable}
            onChange={(e) => {
              setDraft((d) => ({ ...d, dependents: e.target.checked }))
              setErrors({})
            }}
          />
          Include dependent coverage
        </label>
        {draft.dependents && (
          <ManulifeFormField
            name="dependentLimit"
            label="Dependent limit"
            value={draft.dependentLimit}
            error={errors.dependentLimit}
            help="Illustrative range: 1–8. No eligibility or policy verification is performed."
            disabled={!editable}
            onChange={(dependentLimit) =>
              setDraft((d) => ({ ...d, dependentLimit }))
            }
          />
        )}
        {editable && (
          <button type="submit" className={`${styles.primary} mt-4`}>
            Save sample plan
          </button>
        )}
        <p className="mt-4 text-xs">
          Saved configuration: {plan.name} · {plan.coverage} ·{' '}
          {plan.dependents
            ? `up to ${plan.dependentLimit} dependents (sample)`
            : 'no dependent coverage'}
          .
        </p>
      </form>
    </DemoSection>
  )
}
